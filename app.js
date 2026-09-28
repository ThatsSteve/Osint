/**
 * OSINT Tactical Workstation - Application Engine (Hacker / Utilitarian Edition)
 * Gestione navigazione con hotkeys, filtri ad alta velocità, task switcher rapido,
 * checklist forense locale e dork generation.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- STATO APPLICAZIONE ---
  const state = {
    currentTab: "tab-playbooks",
    selectedTaskId: OSINT_DATA.playbooks[0].id,
    directoryFilter: "all",
    directoryCategory: "all",
    directorySearchQuery: "",
    favorites: JSON.parse(localStorage.getItem("osint_favorites") || "[]"),
    taskChecklists: JSON.parse(localStorage.getItem("osint_task_checklists") || "{}"),
    opsecChecklist: JSON.parse(localStorage.getItem("osint_opsec_checks") || "{}")
  };

  // --- ELEMENTI DOM ---
  const navTabBtns = document.querySelectorAll(".nav-tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const globalSearchInput = document.getElementById("global-search-input");
  const quickTaskBar = document.getElementById("quick-task-bar-strip");

  // Aggiorna contatori nel sub-header
  document.getElementById("stat-total-tools").textContent = OSINT_DATA.tools.length;
  document.getElementById("stat-total-playbooks").textContent = OSINT_DATA.playbooks.length;

  // --- NAVIGAZIONE TAB & KEYBOARD SHORTCUTS ---
  navTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabTarget = btn.getAttribute("data-tab");
      switchTab(tabTarget);
    });
  });

  function switchTab(tabId) {
    state.currentTab = tabId;
    navTabBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-tab") === tabId));
    tabContents.forEach(c => c.classList.toggle("active", c.id === tabId));
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // Hotkeys globali: [1-5] per i tab, [/] per il focus ricerca
  document.addEventListener("keydown", (e) => {
    // Non intercettare se l'utente sta scrivendo in un campo testo
    const activeEl = document.activeElement;
    const isTyping = activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA" || activeEl.tagName === "SELECT");

    if (e.key === "/" && !isTyping) {
      e.preventDefault();
      globalSearchInput.focus();
      return;
    }

    if (!isTyping && ["1", "2", "3", "4", "5"].includes(e.key)) {
      e.preventDefault();
      const tabMap = {
        "1": "tab-playbooks",
        "2": "tab-directory",
        "3": "tab-dorking",
        "4": "tab-opsec",
        "5": "tab-scratchpad"
      };
      switchTab(tabMap[e.key]);
      showToast(`Switched to [${tabMap[e.key].replace("tab-", "").toUpperCase()}]`);
    }
  });

  // Ricerca globale rapida
  globalSearchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    switchTab("tab-directory");
    const dirSearchInput = document.getElementById("dir-search-input");
    dirSearchInput.value = q;
    state.directorySearchQuery = q;
    renderDirectory();
  });

  // --- BARRA SCORCIATOIE RAPIDE PER TASK (QUICK STRIP) ---
  function renderQuickTaskBar() {
    quickTaskBar.innerHTML = "";
    const shortLabels = {
      "task-geoint-exif": "[GEO_EXIF]",
      "task-geoint-no-exif": "[GEO_IMINT]",
      "task-person-username": "[USER_RECON]",
      "task-person-email": "[EMAIL_INT]",
      "task-person-phone": "[PHONE_CARRIER]",
      "task-network-domain": "[NET_DOMAIN]",
      "task-network-iot": "[IOT_SHODAN]",
      "task-transport-flights": "[FLIGHTS_ADSB]",
      "task-transport-maritime": "[NAVAL_AIS]",
      "task-corporate-osint": "[CORP_INT]",
      "task-crypto-osint": "[CRYPTO_CHAIN]",
      "task-doc-metadata": "[DOC_METADATA]",
      "task-google-deep": "[GOOGLE_GHUNT]",
      "task-web-recon": "[WEB_CHECK]",
      "task-web-analytics": "[TRACK_ANALYTICS]",
      "task-darkweb-search": "[DARKWEB_TOR]"
    };

    OSINT_DATA.playbooks.forEach(pb => {
      const pill = document.createElement("button");
      const label = shortLabels[pb.id] || `[${pb.badge.substring(0, 8)}]`;
      pill.className = `quick-task-pill ${pb.id === state.selectedTaskId ? 'active' : ''}`;
      pill.textContent = label;
      pill.title = pb.title;

      pill.addEventListener("click", () => {
        state.selectedTaskId = pb.id;
        switchTab("tab-playbooks");
        renderTaskSidebar();
        renderQuickTaskBar();
        renderPlaybookDetails(pb);
      });

      quickTaskBar.appendChild(pill);
    });
  }

  // ==========================================================================
  // SEZIONE 1: PLAYBOOKS PER TASK
  // ==========================================================================
  const taskSidebarList = document.getElementById("task-sidebar-list");
  const playbookDetailsView = document.getElementById("playbook-details-view");

  function renderTaskSidebar() {
    taskSidebarList.innerHTML = "";
    OSINT_DATA.playbooks.forEach(pb => {
      const itemBtn = document.createElement("button");
      itemBtn.className = `task-item-btn ${pb.id === state.selectedTaskId ? 'active' : ''}`;
      itemBtn.innerHTML = `
        <div class="task-item-header">
          <span>${pb.badge}</span>
          <span>${pb.estTime}</span>
        </div>
        <div class="task-item-title">
          <i class="bi bi-chevron-right"></i>
          <span>${pb.title}</span>
        </div>
      `;

      itemBtn.addEventListener("click", () => {
        state.selectedTaskId = pb.id;
        renderTaskSidebar();
        renderQuickTaskBar();
        renderPlaybookDetails(pb);
      });

      taskSidebarList.appendChild(itemBtn);
    });
  }

  function renderPlaybookDetails(pb) {
    if (!pb) return;

    const savedChecks = state.taskChecklists[pb.id] || [];
    const totalChecks = pb.checklist.length;
    const completedChecks = pb.checklist.filter((_, idx) => savedChecks.includes(idx)).length;
    const progressPercent = totalChecks > 0 ? Math.round((completedChecks / totalChecks) * 100) : 0;
    const recommendedTools = OSINT_DATA.tools.filter(t => pb.recommendedToolIds.includes(t.id));

    playbookDetailsView.innerHTML = `
      <div class="playbook-top-bar">
        <div class="playbook-title-row">
          <h2>
            <i class="bi bi-terminal-split" style="color: var(--term-green);"></i>
            <span>${pb.title}</span>
          </h2>
          <div class="playbook-meta-strip">
            <span class="meta-tag diff">[DIFF: ${pb.difficulty}]</span>
            <span class="meta-tag time">[EST: ${pb.estTime}]</span>
            <span class="meta-tag opsec">[OPSEC: ${pb.opsecLevel}]</span>
          </div>
        </div>

        <div class="playbook-objective-box">
          <strong style="color: var(--term-green);">&gt; OBIETTIVO OPERATIVO:</strong> ${pb.summary}
        </div>
      </div>

      <!-- Procedura Step-by-Step -->
      <div style="margin-bottom: 1.25rem;">
        <div class="section-title-strip">
          <i class="bi bi-arrow-right-square-fill"></i>
          <span>PROTOCOLLO OPERATIVO SEQUENZIALE</span>
        </div>
        <div class="steps-list">
          ${pb.steps.map(s => `
            <div class="step-row">
              <div class="step-badge">${s.num.toString().padStart(2, '0')}</div>
              <div class="step-content">
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Checklist Operativa Interattiva -->
      <div style="margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
          <div class="section-title-strip" style="margin-bottom: 0;">
            <i class="bi bi-check2-all"></i>
            <span>CHECKLIST DI VERIFICA EVIDENCE</span>
          </div>
          <span style="font-size: 0.75rem; color: var(--term-green);" id="progress-label-${pb.id}">
            [${completedChecks}/${totalChecks} ACTIONS VERIFIED - ${progressPercent}%]
          </span>
        </div>

        <div class="checklist-box">
          <div class="checklist-progress-bar">
            <div class="checklist-progress-fill" id="progress-fill-${pb.id}" style="width: ${progressPercent}%;"></div>
          </div>
          <div class="checklist-items">
            ${pb.checklist.map((chk, idx) => {
              const isChecked = savedChecks.includes(idx);
              return `
                <label class="checklist-item ${isChecked ? 'checked' : ''}" data-idx="${idx}">
                  <input type="checkbox" ${isChecked ? 'checked' : ''}>
                  <span>[STEP ${idx+1}] ${chk}</span>
                </label>
              `;
            }).join("")}
          </div>
        </div>
      </div>

      <!-- Tabella Strumenti Consigliati -->
      <div style="margin-bottom: 1.25rem;">
        <div class="section-title-strip">
          <i class="bi bi-cpu"></i>
          <span>STRUMENTI ATTIVI CONSIGLIATI</span>
        </div>
        <table class="rec-tools-table">
          <thead>
            <tr>
              <th style="width: 22%;">TOOL / URL</th>
              <th style="width: 15%;">ACCESSO</th>
              <th style="width: 43%;">UTILITÀ OPERATIVA & COMANDO RAPIDO</th>
              <th style="width: 20%; text-align: right;">AZIONI</th>
            </tr>
          </thead>
          <tbody>
            ${recommendedTools.map(tool => `
              <tr>
                <td>
                  <strong style="color: #ffffff;">${tool.name}</strong>
                  <div style="font-size: 0.7rem; color: var(--term-text-dim);">${tool.category.toUpperCase()}</div>
                </td>
                <td>
                  <span class="badge-micro free">${tool.access.includes('free') ? 'FREE' : 'FREEMIUM'}</span>
                  ${tool.access.includes('cli') ? '<span class="badge-micro cli">CLI</span>' : ''}
                </td>
                <td>
                  <div style="margin-bottom: 0.25rem;">${tool.description}</div>
                  <div style="font-size: 0.72rem; color: var(--term-cyan); background: var(--term-bg); padding: 0.2rem 0.4rem; border-left: 2px solid var(--term-cyan);">
                    &gt; ${tool.usageTip}
                  </div>
                </td>
                <td style="text-align: right;">
                  <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn-term-action" style="padding: 0.2rem 0.5rem; font-size: 0.7rem;">
                    <span>OPEN</span>
                    <i class="bi bi-box-arrow-up-right"></i>
                  </a>
                  <button class="btn-term-icon btn-copy-tool" data-url="${tool.url}" title="Copy URL" style="padding: 0.2rem 0.4rem;">
                    <i class="bi bi-link-45deg"></i>
                  </button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Warning Rabbit Holes -->
      <div>
        <div class="pitfalls-terminal-box">
          <strong style="color: var(--term-red); display: block; margin-bottom: 0.2rem;">
            <i class="bi bi-shield-x"></i> [!] ATTENZIONE - TRAPPOLE INVESTIGATIVE & RABBIT HOLES:
          </strong>
          ${pb.commonPitfalls}
        </div>
      </div>
    `;

    // Checklist click listeners
    const checkInputs = playbookDetailsView.querySelectorAll(".checklist-item input[type='checkbox']");
    checkInputs.forEach(input => {
      input.addEventListener("change", (e) => {
        const itemLabel = e.target.closest(".checklist-item");
        const idx = parseInt(itemLabel.getAttribute("data-idx"));
        let currentChecks = state.taskChecklists[pb.id] || [];

        if (e.target.checked) {
          if (!currentChecks.includes(idx)) currentChecks.push(idx);
          itemLabel.classList.add("checked");
        } else {
          currentChecks = currentChecks.filter(i => i !== idx);
          itemLabel.classList.remove("checked");
        }

        state.taskChecklists[pb.id] = currentChecks;
        localStorage.setItem("osint_task_checklists", JSON.stringify(state.taskChecklists));

        const updatedCompleted = currentChecks.length;
        const newPercent = Math.round((updatedCompleted / pb.checklist.length) * 100);
        document.getElementById(`progress-fill-${pb.id}`).style.width = `${newPercent}%`;
        document.getElementById(`progress-label-${pb.id}`).textContent = `[${updatedCompleted}/${pb.checklist.length} ACTIONS VERIFIED - ${newPercent}%]`;
      });
    });

    // Copy Tool Link listeners
    playbookDetailsView.querySelectorAll(".btn-copy-tool").forEach(btn => {
      btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-url");
        copyToClipboard(url, "[+] URL COPIATO NEGLI APPUNTI");
      });
    });
  }

  // ==========================================================================
  // SEZIONE 2: TOOLS DIRECTORY
  // ==========================================================================
  const categoryPillsContainer = document.getElementById("category-pills-container");
  const toolsCardsContainer = document.getElementById("tools-cards-container");
  const dirSearchInput = document.getElementById("dir-search-input");
  const dirFilterBtns = document.querySelectorAll(".dir-btn");
  const resultsCountLabel = document.getElementById("results-count-label");

  function renderCategoryPills() {
    categoryPillsContainer.innerHTML = "";
    OSINT_DATA.categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `cat-btn ${cat.id === state.directoryCategory ? 'active' : ''}`;
      btn.textContent = `[${cat.name.toUpperCase()}]`;

      btn.addEventListener("click", () => {
        state.directoryCategory = cat.id;
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderDirectory();
      });

      categoryPillsContainer.appendChild(btn);
    });
  }

  dirFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      state.directoryFilter = filter;
      dirFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDirectory();
    });
  });

  dirSearchInput.addEventListener("input", (e) => {
    state.directorySearchQuery = e.target.value.trim().toLowerCase();
    renderDirectory();
  });

  function renderDirectory() {
    let filtered = OSINT_DATA.tools;

    if (state.directoryCategory !== "all") {
      filtered = filtered.filter(t => t.category === state.directoryCategory);
    }

    if (state.directoryFilter === "free") {
      filtered = filtered.filter(t => t.access.includes("free"));
    } else if (state.directoryFilter === "nologin") {
      filtered = filtered.filter(t => t.access.includes("nologin"));
    } else if (state.directoryFilter === "web") {
      filtered = filtered.filter(t => t.access.includes("web"));
    } else if (state.directoryFilter === "cli") {
      filtered = filtered.filter(t => t.access.includes("cli"));
    } else if (state.directoryFilter === "favorites") {
      filtered = filtered.filter(t => state.favorites.includes(t.id));
    }

    if (state.directorySearchQuery) {
      const q = state.directorySearchQuery;
      filtered = filtered.filter(t => 
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.usageTip.toLowerCase().includes(q) ||
        t.source.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    }

    resultsCountLabel.textContent = `DISPLAYING [${filtered.length}/${OSINT_DATA.tools.length}] TOOLS`;

    if (filtered.length === 0) {
      toolsCardsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--term-text-muted); background: var(--term-surface); border: 1px dashed var(--term-border);">
          [!] NO TOOLS MATCHING CRITERIA: "${state.directorySearchQuery}"
        </div>
      `;
      return;
    }

    toolsCardsContainer.innerHTML = filtered.map(t => {
      const isFav = state.favorites.includes(t.id);
      const catObj = OSINT_DATA.categories.find(c => c.id === t.category) || { name: t.category };
      
      return `
        <div class="tool-entry-card" id="tool-entry-${t.id}">
          <div>
            <div class="tool-header-line">
              <div>
                <span class="tool-name-text">${t.name}</span>
                <div class="tool-tags-group">
                  <span class="badge-micro cat">${catObj.name.toUpperCase()}</span>
                  ${t.access.includes('free') ? '<span class="badge-micro free">FREE</span>' : '<span class="badge-micro cli">FREEMIUM</span>'}
                  ${t.access.includes('nologin') ? '<span class="badge-micro nologin">NO_LOGIN</span>' : ''}
                  ${t.access.includes('cli') ? '<span class="badge-micro cli">CLI</span>' : ''}
                </div>
              </div>
              <button class="btn-term-icon btn-fav-tool ${isFav ? 'favorited' : ''}" data-id="${t.id}" title="Toggle bookmark">
                <i class="bi ${isFav ? 'bi-star-fill' : 'bi-star'}"></i>
              </button>
            </div>

            <p class="tool-desc-text" style="margin-top: 0.5rem;">${t.description}</p>
          </div>

          <div>
            <div class="tool-tip-box" style="margin-top: 0.4rem;">
              <strong style="color: var(--term-cyan); display: block; font-size: 0.72rem;">&gt; USAGE_SYNTAX:</strong>
              ${t.usageTip}
            </div>

            <div style="font-size: 0.68rem; color: var(--term-text-dim); margin-top: 0.4rem;">
              REF: ${t.source}
            </div>

            <div class="tool-action-line" style="margin-top: 0.5rem;">
              <a href="${t.url}" target="_blank" rel="noopener noreferrer" class="btn-term-action">
                <span>[LAUNCH TOOL]</span>
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
              <button class="btn-term-icon btn-copy-tool" data-url="${t.url}" title="Copy URL">
                <i class="bi bi-link-45deg"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    toolsCardsContainer.querySelectorAll(".btn-fav-tool").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        toggleFavorite(id);
      });
    });

    toolsCardsContainer.querySelectorAll(".btn-copy-tool").forEach(btn => {
      btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-url");
        copyToClipboard(url, "[+] URL COPIATO NEGLI APPUNTI");
      });
    });
  }

  function toggleFavorite(toolId) {
    if (state.favorites.includes(toolId)) {
      state.favorites = state.favorites.filter(id => id !== toolId);
      showToast("[*] Tool rimosso dai preferiti");
    } else {
      state.favorites.push(toolId);
      showToast("[*] Tool aggiunto ai preferiti");
    }
    localStorage.setItem("osint_favorites", JSON.stringify(state.favorites));
    renderDirectory();
  }

  // ==========================================================================
  // SEZIONE 3: GOOGLE DORK GENERATOR
  // ==========================================================================
  const dorkDomainInput = document.getElementById("dork-domain-input");
  const dorkKeywordInput = document.getElementById("dork-keyword-input");
  const dorkFiletypeSelect = document.getElementById("dork-filetype-select");
  const dorkPresetsContainer = document.getElementById("dork-presets-container");
  const dorkResultText = document.getElementById("dork-result-text");
  const btnCopyDork = document.getElementById("btn-copy-dork");
  const btnExecuteGoogle = document.getElementById("btn-execute-google");

  function renderDorkPresets() {
    dorkPresetsContainer.innerHTML = "";
    OSINT_DATA.dorkPresets.forEach(preset => {
      const pBtn = document.createElement("button");
      pBtn.className = "preset-cli-btn";
      pBtn.innerHTML = `
        <span><strong>&gt; ${preset.title}</strong></span>
        <i class="bi bi-chevron-right" style="color: var(--term-green);"></i>
      `;
      pBtn.addEventListener("click", () => {
        applyDorkPreset(preset);
      });
      dorkPresetsContainer.appendChild(pBtn);
    });
  }

  function applyDorkPreset(preset) {
    const domain = dorkDomainInput.value.trim() || "target.com";
    let finalDork = preset.dork.replace(/{domain}/g, domain);
    finalDork = finalDork.replace(/{company}/g, domain.split('.')[0]);
    finalDork = finalDork.replace(/{role}/g, dorkKeywordInput.value.trim() || "Engineer");
    updateDorkOutput(finalDork);
    showToast(`Preset: ${preset.title}`);
  }

  function generateCustomDork() {
    const domain = dorkDomainInput.value.trim();
    const keyword = dorkKeywordInput.value.trim();
    const filetype = dorkFiletypeSelect.value.trim();

    let parts = [];
    if (domain) parts.push(`site:${domain}`);
    if (filetype) parts.push(`filetype:${filetype}`);
    if (keyword) parts.push(`"${keyword}"`);

    const finalQuery = parts.length > 0 ? parts.join(" ") : 'site:target.com (filetype:env OR filetype:conf) "password"';
    updateDorkOutput(finalQuery);
  }

  function updateDorkOutput(dorkString) {
    dorkResultText.textContent = dorkString;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(dorkString)}`;
    btnExecuteGoogle.setAttribute("href", googleSearchUrl);
  }

  dorkDomainInput.addEventListener("input", generateCustomDork);
  dorkKeywordInput.addEventListener("input", generateCustomDork);
  dorkFiletypeSelect.addEventListener("change", generateCustomDork);

  btnCopyDork.addEventListener("click", () => {
    const text = dorkResultText.textContent;
    copyToClipboard(text, "[+] DORK COPIATA NEGLI APPUNTI");
  });

  // ==========================================================================
  // SEZIONE 4: PROTOCOLLO OPSEC
  // ==========================================================================
  const opsecChecklistItems = document.getElementById("opsec-checklist-items");

  function renderOpsecChecklist() {
    opsecChecklistItems.innerHTML = "";
    OSINT_DATA.opsecChecklist.forEach((item, idx) => {
      const isChecked = state.opsecChecklist[idx] === true;
      const label = document.createElement("label");
      label.className = `checklist-item ${isChecked ? 'checked' : ''}`;
      label.innerHTML = `
        <input type="checkbox" ${isChecked ? 'checked' : ''}>
        <span>
          ${item.critical ? '<strong style="color: var(--term-red);">[CRITICAL]</strong> ' : '[CHECK] '}
          ${item.text}
        </span>
      `;

      label.querySelector("input").addEventListener("change", (e) => {
        state.opsecChecklist[idx] = e.target.checked;
        label.classList.toggle("checked", e.target.checked);
        localStorage.setItem("osint_opsec_checks", JSON.stringify(state.opsecChecklist));
      });

      opsecChecklistItems.appendChild(label);
    });
  }

  // ==========================================================================
  // SEZIONE 5: SCRATCHPAD & EVIDENCE NOTES
  // ==========================================================================
  const scratchpadTextarea = document.getElementById("scratchpad-textarea");
  const btnInsertTimestamp = document.getElementById("btn-insert-timestamp");
  const btnExportNotes = document.getElementById("btn-export-notes");
  const btnClearNotes = document.getElementById("btn-clear-notes");

  const savedNotes = localStorage.getItem("osint_scratchpad_notes");
  if (savedNotes) {
    scratchpadTextarea.value = savedNotes;
  }

  scratchpadTextarea.addEventListener("input", (e) => {
    localStorage.setItem("osint_scratchpad_notes", e.target.value);
  });

  btnInsertTimestamp.addEventListener("click", () => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19) + " UTC";
    const insertText = `\n[${now}] `;
    insertTextAtCursor(scratchpadTextarea, insertText);
    localStorage.setItem("osint_scratchpad_notes", scratchpadTextarea.value);
    showToast("[+] TIMESTAMP INSERITO");
  });

  btnExportNotes.addEventListener("click", () => {
    const text = scratchpadTextarea.value;
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `OSINT_DOSSIER_${new Date().toISOString().substring(0, 10)}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast("[+] DOSSIER SCARICATO IN FORMATO .MD");
  });

  btnClearNotes.addEventListener("click", () => {
    if (confirm("[!] CONFERMA PURGE: Vuoi azzerare tutte le note forensi?")) {
      scratchpadTextarea.value = "";
      localStorage.removeItem("osint_scratchpad_notes");
      showToast("[*] NOTE AZZERATE");
    }
  });

  function insertTextAtCursor(textarea, text) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    textarea.value = val.substring(0, start) + text + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
  }

  // ==========================================================================
  // TOASTS & CLIPBOARD
  // ==========================================================================
  function showToast(message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="bi bi-terminal-fill"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "all 0.2s ease";
      setTimeout(() => toast.remove(), 200);
    }, 2000);
  }

  function copyToClipboard(text, successMsg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg || "[+] COPIATO!");
    }).catch(err => {
      console.error("Clipboard err:", err);
      showToast("[!] ERRORE COPIA");
    });
  }

  // --- INIT ---
  renderQuickTaskBar();
  renderTaskSidebar();
  const initialTask = OSINT_DATA.playbooks.find(p => p.id === state.selectedTaskId) || OSINT_DATA.playbooks[0];
  renderPlaybookDetails(initialTask);
  renderCategoryPills();
  renderDirectory();
  renderDorkPresets();
  generateCustomDork();
  renderOpsecChecklist();
});
