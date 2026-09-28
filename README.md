# 🕵️‍♂️ OSINT Tactical Hub & Operational Framework

> **Piattaforma Operativa di Open Source Intelligence & Guida Metodologica per Task**  
> Progettata per investigatori digitali, ricercatori, analisti cyber e giornalisti d'inchiesta.

---

## 🚀 Panoramica del Progetto

Questo repository contiene un'architettura completa per condurre investigazioni OSINT professionali, basandosi sui migliori corsi, framework e metodologie aperte (inclusi **The Cyber Mentor**, **Benjamin Strick / OSINT at Home**, **OSINT Dojo**, **Mike Holcomb ICS/OT OSINT** e **OSINT Framework**).

Il progetto è suddiviso in due componenti principali:
1. **Documento di Architettura Operativa (`OSINT_FRAMEWORK.md`)**: Un manuale metodologico completo con 10 playbooks passo-passo, catalogo ragionato di tool gratuiti, cheatsheet per Google Dorking e linee guida per l'OPSEC / Sock Puppet.
2. **Web App Interattiva (`index.html`)**: Una dashboard web moderna (Cyber Dark Theme & Glassmorphism) che assiste l'investigatore in tempo reale durante le operazioni.

---

## 📂 Struttura del Repository

```
Osint/
├── AGENTS.md                  # Istruzioni comportamentali per agenti e AI chat nel repo
├── AI_SYSTEM_INSTRUCTIONS.md  # Prompt di sistema pronto per ChatGPT, Claude, Gemini, Copilot, LLM
├── GEMINI.md                  # Regole operative per Gemini / Antigravity
├── OSINT_FRAMEWORK.md         # Manuale metodologico dettagliato in formato Markdown
├── index.html                 # Console Terminale Web interattiva (Stile Hacker Sobrio)
├── style.css                  # Foglio di stile Terminal / Monospace ad alta utilità
├── data.js                    # Database strutturato: tools, playbooks operativi e query presets
├── app.js                     # Motore reattivo: scorciatoie da tastiera, filtri e local storage
├── server.js                  # Server HTTP locale leggero Node.js (Porta 3000)
└── README.md                  # Documentazione del repository
```

---

## 🎯 Funzionalità della Web App (`index.html`)

### 1. 🧭 Procedure Guidate per Obiettivo (Task Playbooks)
Scegli il task che devi affrontare e la dashboard ti guiderà passo dopo passo:
- **GEOINT con Metadati EXIF/GPS**: estrazione coordinate, timestamp originale e verifica fotocamera.
- **GEOINT SENZA Metadati (IMINT puro)**: decomposizione visiva, analisi delle ombre e inclinazione solare con SunCalc, query spaziali incrociate con Overpass Turbo (OpenStreetMap), riconoscimento paesaggi montani con PeakFinder, reverse image search mirato con Yandex e Google Lens.
- **Persona & Nickname Footprinting**: scansione automatica su oltre 600 piattaforme (WhatsMyName, Sherlock, Blackbird).
- **Email Intelligence**: estrazione profilo Google, recensioni Maps, Skype e rilevamento registrazione su 120+ servizi con Holehe ed Epieos.
- **Telefonia & Carrier**: distinzione linee mobili da numerazioni virtuali VoIP usa-e-getta, lookup caller ID su rubriche comunitarie (Truecaller, Sync.me).
- **Social Media (SOCMINT)**: query geolocalizzate su Twitter/X, archivi storici e post cancellati su Reddit (PullPush), canali Telegram (TGStat).
- **Rete, Domini & Sottodomini**: estrazione passiva di sottodomini da Certificate Transparency (crt.sh), grafo DNS (DNSDumpster) e bypass Cloudflare tramite storico DNS (SecurityTrails).
- **IoT & Server Esposti**: scansione di telecamere aperte, porte e apparati industriali con Shodan, Censys e FOFA.
- **Data Breaches & Password Trapelate**: interrogazione di Have I Been Pwned, DeHashed, Intelligence X e Grep.app.
- **Tracking Voli & Navale**: tracciamento ADS-B non censurato per jet privati e governativi (ADS-B Exchange) e tracciamento AIS navale (MarineTraffic, VesselFinder).
- **Corporate OSINT**: registri imprese aperti (OpenCorporates, SEC EDGAR, OCCRP Aleph).

Ogni task include:
- Livello di difficoltà, tempo stimato e livello di OPSEC richiesto.
- Procedura metodologica dettagliata (Step 1 → Step 5).
- **Checklist operativa interattiva** con barra di avanzamento (salvata in automatico nel browser).
- Schede degli strumenti dedicati con link diretto e istruzioni rapide d'uso.
- **Box "Errori Frequenti & Trappole da Evitare"** per non cadere in rabbit hole o falsi positivi.

### 2. 🗂️ Catalogo Completo & Ricerca Avanzata dei Tools
- Ricerca istantanea in tempo reale (per nome, descrizione, categoria o autore).
- Filtri veloci per accesso: *100% Gratuito*, *Nessun Login Richiesto*, *Interfaccia Web*, *Terminale / CLI*.
- Categorie tematiche a pillola (GEOINT, Metadati, Username, Email, Telefonia, SOCMINT, Network, Breaches, Trasporti, Aziende, Framework).
- Sistema di preferiti ⭐ con salvataggio in `localStorage`.
- Pulsanti rapidi per aprire il tool in nuova scheda o copiare il link negli appunti.

### 3. 🔎 Generatore Interattivo di Google Dorks
- Inserimento di dominio target, parole chiave ed estensione file (PDF, XLS, DOC, file `.env`, backup SQL, log).
- Preset rapidi pronti all'uso: *Password e configurazioni esposte*, *Directory listing aperti*, *Documenti riservati*, *Pannelli admin*, *Dipendenti LinkedIn*, *Webcam live*.
- Pulsante "Copia Query" e pulsante "Esegui su Google ↗" con apertura istantanea della ricerca.

### 4. 🛡️ Protocollo OPSEC & Sock Puppet
- Checklist di sicurezza per verificare anonimato, mitigare leak DNS/WebRTC e impostare macchine virtuali.
- Guida alla creazione e mantenimento di Sock Puppet credibili.

### 5. 📝 Blocco Note Investigativo & Evidence Log
- Area di appunti forensi con salvataggio locale continuo (`localStorage`).
- Inserimento rapido del timestamp UTC corrente.
- Esportazione del fascicolo in formato Markdown (`.md`) per archiviare la catena di custodia e le evidenze.

---

## ⚡ Come Avviare la Web App

Non sono richieste configurazioni complesse o installazioni di pacchetti:

### Opzione 1: Apertura Diretta nel Browser (Zero setup)
È sufficiente fare doppio clic sul file `index.html` all'interno della cartella o trascinarlo in qualsiasi browser web (Google Chrome, Firefox, Brave, Edge).

### Opzione 2: Server Locale Node.js
Se preferisci servirlo tramite server HTTP locale:
```bash
node server.js
```
Quindi apri il browser su:  
👉 **http://localhost:3000**

---

## 📚 Fonti e Riferimenti
- **The Cyber Mentor (Heath Adams)**: *Open-Source Intelligence (OSINT) 5 Hours Full Course*
- **Benjamin Strick**: *OSINT At Home Series & Overpass Turbo Geolocation*
- **OSINT Dojo**: *Geolocation Challenges, Insecam, Marina investigations*
- **Mike Holcomb (utilsec)**: *OSINT for ICS/OT Comprehensive Course*
- **OSINT Framework**: *osintframework.com*
- **Bellingcat**: *Investigation Guides and Verification Toolkit*
