# 🌐 ARCHITETTURA & FRAMEWORK OPERATIVO OSINT (Open Source Intelligence)
> **Manuale Metodologico, Catalogo Strumenti Gratuiti e Procedure Operative per Task**
> *Creato per investigatori OSINT, analisti di sicurezza, giornalisti investigativi e ricercatori.*

---

## 📌 Indice Generale
1. [Fondamenti & Ciclo dell'Intelligence OSINT](#1-fondamenti--ciclo-dellintelligence-osint)
2. [Protocollo OPSEC & Gestione Sock Puppet](#2-protocollo-opsec--gestione-sock-puppet)
3. [Matrice Operativa & Procedure Guidate per Task](#3-matrice-operativa--procedure-guidate-per-task)
   - [Task 1: Geolocation da Foto CON Metadati (EXIF / GPS)](#task-1-geolocalizzazione-da-foto-con-metadati-exif--gps)
   - [Task 2: Geolocation da Foto SENZA Metadati (IMINT / GEOINT puro)](#task-2-geolocalizzazione-da-foto-senza-metadati-imint--geoint-puro)
   - [Task 3: Indagine su Persona da Username / Nickname](#task-3-indagine-su-persona-da-username--nickname)
   - [Task 4: Indagine da Indirizzo Email](#task-4-indagine-da-indirizzo-email)
   - [Task 5: Indagine da Numero di Telefono](#task-5-indagine-da-numero-di-telefono)
   - [Task 6: SOCMINT – Analisi Social Media (LinkedIn, X, Instagram, Telegram)](#task-6-socmint--analisi-social-media)
   - [Task 7: Analisi Infrastruttura di Rete, Domini, IP e IoT](#task-7-analisi-infrastruttura-di-rete-domini-ip-e-iot)
   - [Task 8: Tracciamento Data Breach, Credenziali e Leak](#task-8-tracciamento-data-breach-credenziali-e-leak)
   - [Task 9: Tracciamento Fisico: Voli (ADS-B) e Navale (AIS)](#task-9-tracciamento-fisico-voli-ads-b-e-navale-ais)
   - [Task 10: Corporate OSINT & Registro Imprese](#task-10-corporate-osint--registro-imprese)
   - [Task 11: Criptovalute & Blockchain Intelligence (BTC / ETH)](#task-11-criptovalute--blockchain-intelligence)
   - [Task 12: Estrazione Metadati da Documenti Aziendali (PDF / Office)](#task-12-estrazione-metadati-da-documenti-aziendali)
   - [Task 13: Profilazione Avanzata Account Google (GHunt)](#task-13-profilazione-avanzata-account-google-ghunt)
   - [Task 14: Ispezione Completa Sito Web & Superficie d'Attacco (Web-Check, Subfinder)](#task-14-ispezione-completa-sito-web--superficie-dattacco)
   - [Task 15: Correlazione Domini via Analytics & AdSense IDs (BuiltWith)](#task-15-correlazione-domini-via-analytics--adsense-ids)
   - [Task 16: Ricerca e Monitoraggio nel Dark Web (.onion)](#task-16-ricerca-e-monitoraggio-nel-dark-web-onion)
4. [Metodologia di Ingestione e Audit per GitHub Topics](#4-metodologia-di-ingestione-e-audit-per-github-topics)
5. [Catalogo Ragionato dei Migliori Tool Gratuiti & Accessibili](#5-catalogo-ragionato-dei-migliori-tool-gratuiti--accessibili)
6. [Cheat Sheet Avanzato: Google Dorking & Operatori di Ricerca](#6-cheat-sheet-avanzato-google-dorking--operatori-di-ricerca)

---

## 1. Fondamenti & Ciclo dell'Intelligence OSINT

L'OSINT (Open Source Intelligence) non consiste nel mero uso di tool, ma nell'applicazione rigorosa di un **metodo scientifico di raccolta, correlazione e verifica delle informazioni** pubblicamente accessibili.

### Il Ciclo OSINT:
1. **Pianificazione & Direzione (Planning & Direction):**
   - Definire chiaramente l'obiettivo (es. "Dove e quando è stata scattata questa foto?", "Chi è il titolare del dominio X?").
   - Identificare i requisiti informativi primari (PIR) e secondari.
2. **Raccolta Dati (Collection):**
   - Estrazione passiva dei dati da fonti aperte (motori di ricerca, registri pubblici, social, archivi, sensori).
   - *Regola aurea:* Privilegiare sempre la raccolta **passiva** (senza toccare direttamente il target) prima di quella **attiva**.
3. **Elaborazione Dati (Processing):**
   - Normalizzazione dei dati: conversione coordinate, estrazione metadati EXIF, traduzione linguistica, de-duplicazione.
4. **Analisi & Integrazione (Analysis & Production):**
   - Correlazione degli indizi: cross-referencing tra più fonti indipendenti (triangolazione).
   - Valutazione dell'affidabilità della fonte e della veridicità del dato.
5. **Diffusione & Archiviazione (Dissemination & Reporting):**
   - Produzione del report finale con prove forensi salvate (hash dei file, timestamp, snapshot da Wayback Machine/Archive.today).

---

## 2. Protocollo OPSEC & Gestione Sock Puppet

L'**OPSEC (Operational Security)** protegge l'identità dell'investigatore ed evita che il bersaglio si accorga dell'indagine (evitando la cancellazione di prove o il contrattacco).

### Regole Fondamentali:
* **Ambiente Isolato:** Utilizzare una macchina virtuale dedicata (es. *Tsurugi Linux*, *Kali Linux* o *Trace Labs OSINT VM*) o sandbox browser.
* **Separazione delle Identità:** Non accedere MAI ai propri account personali dalla postazione di indagine.
* **Protezione della Rete:**
  - Utilizzare VPN affidabili senza log o la rete Tor per la navigazione passiva.
  - Prestare attenzione alle perdite DNS (DNS Leaks) e WebRTC leaks.
* **Creazione di Sock Puppets (Account Fittizi):**
  - Costruire una leggenda coerente (nome, età, foto profilo generata con *ThisPersonDoesNotExist.com* opportunamente ritagliata/modificata per evitare filtri reverse).
  - Utilizzare SIM virtuali/usa e getta (es. SMS4Sats, Silent.link, 5SIM) per la verifica telefonica.
  - Creare account email dedicati (ProtonMail, Tuta, SimpleLogin alias).
  - "Invecchiare" gli account (cookie history, navigazione naturale) prima di usarli per investigare.

---

## 3. Matrice Operativa & Procedure Guidate per Task

---

### Task 1: Geolocalizzazione da Foto CON Metadati (EXIF / GPS)

#### Obiettivo
Estrarre coordinate geografiche esatte, modello della fotocamera, timestamp di scatto e parametri ottici dal file originale.

#### Procedura Operativa:
1. **Conservazione dell'originale:**
   - Calcolare l'hash SHA-256 del file immagine originale prima di aprirlo.
   - Lavorare sempre su una copia.
2. **Estrazione Metadati:**
   - Eseguire l'analisi EXIF per rilevare tag `GPS Latitude`, `GPS Longitude`, `GPS Altitude`, `CreateDate`, `Model`, `LensInfo`.
   - Attenzione: social come WhatsApp, Facebook, Instagram e X rimuovono i metadati EXIF al caricamento. I metadati sopravvivono se l'immagine è scaricata da Telegram (come file), Google Drive, DropBox, hosting immagini non compressi o inviata via email.
3. **Conversione Coordinate & Visualizzazione:**
   - Convertire i valori da gradi, minuti, secondi (DMS) a gradi decimali (DD).
   - Inserire le coordinate su Google Earth Pro e OpenStreetMap.
4. **Verifica Temporale & Luce:**
   - Controllare se l'ora indicata (UTC o locale) coincide con l'angolo solare e le ombre visibili.

#### Tool Raccomandati:
* **ExifTool (Phil Harvey):** Lo standard de facto da riga di comando per leggere, scrivere e analizzare qualsiasi metadato (`exiftool -a -u -g1 image.jpg`).
* **Jeffrey's Image Metadata Viewer:** Visualizzatore web avanzato che disegna la posizione direttamente su mappa.
* **JPEGsnoop:** Analisi approfondita della compressione JFIF per capire se l'immagine è stata modificata con Photoshop o software di fotoritocco.
* **Pic2Map:** Mappatura web immediata di foto con tag GPS.

---

### Task 2: Geolocalizzazione da Foto SENZA Metadati (IMINT / GEOINT puro)

#### Obiettivo
Individuare la posizione esatta al mondo basandosi unicamente su elementi visivi presenti nella scena.

#### Procedura Operativa Metodologica:
1. **Decomposizione della Scena (Visual Forensics):**
   - Dividere la foto in griglia: primo piano, piano medio, sfondo, cielo.
   - Catalogare tutti gli indicatori:
     - **Infrastruttura:** Tipo di cartelli stradali, forma dei semafori, pali della luce, prese elettriche, tombini, strisce pedonali, senso di marcia.
     - **Linguaggio & Testo:** Insegne di negozi, cartelloni pubblicitari, targhe automobilistiche (banda blu europea, formato, codice nazione).
     - **Natura & Topografia:** Linea dell'orizzonte (montagne), tipo di vegetazione/alberi (palme, conifere, latifoglie), tipo di terreno, architettura dei tetti (tegole, tetti piatti, spioventi da neve).
     - **Architettura:** Stile degli edifici, ringhiere dei balconi, condizionatori esterni.
2. **Reverse Image Search Selettiva (Cropping):**
   - Non cercare l'intera immagine se è complessa! Ritagliare singoli elementi distintivi: un campanile, un logo sul furgone, un pattern di piastrelle, una statua.
   - Utilizzare **Yandex Images** (il più potente al mondo per architettura, paesaggi e dettagli urbani) e **Google Lens**.
3. **Query Geospaziali con Overpass Turbo (OpenStreetMap):**
   - Quando si hanno 2 o più elementi certi (es: una chiesa vicina a un passaggio a livello ferroviario e una fontana nel raggio di 200 metri), interrogare i dati OpenStreetMap con Overpass QL per filtrare solo i punti al mondo che soddisfano questi criteri. *(Vedi tutorial Benjamin Strick OSINT at Home #10)*.
4. **Analisi delle Ombre & Orientamento Solare (Chronomapping):**
   - Individuare un oggetto verticale (palo, persona) e tracciare la direzione dell'ombra proiettata a terra.
   - Utilizzare **SunCalc** o **ShadowCalculator** impostando la data presunta per determinare l'orientamento cardinale (Nord/Sud) o calcolare l'ora precisa dello scatto.
5. **Profilo Montuoso con PeakFinder:**
   - Se sullo sfondo appaiono rilievi o catene montuose, confrontare la linea di cresta con **PeakFinder** per trovare il punto esatto di osservazione.
6. **Conferma a Livello della Strada (Ground Truth):**
   - Esplorare l'area identificata con **Google Street View**, **Mapillary** o **KartaView** (immagini crowdsourced stradali) per allineare millimetricamente la prospettiva della fotocamera.
7. **Verifica Webcams dal Vivo (quando applicabile):**
   - Consultare **Windy Webcams**, **EarthCam** o **Insecam** per verificare condizioni meteo o cambiamenti recenti.

#### Tool Raccomandati:
* **Overpass Turbo (overpass-turbo.eu):** Query engine per mappare elementi geografici combinati su base OpenStreetMap.
* **Yandex Visual Search:** Il miglior motore di reverse image per geolocalizzazione e riconoscimento pattern.
* **Google Lens & Bing Visual Search:** Riconoscimento immediato di landmark e loghi commerciali.
* **SunCalc.org:** Calcolo della posizione del sole, angolazione, azimut e lunghezza dell'ombra in base a data, ora e coordinate.
* **PeakFinder.org:** Modello 3D dei profili montuosi da qualsiasi coordinata al mondo.
* **Mapillary & KartaView:** Rilevamento di immagini a livello strada per Paesi o vicoli non coperti da Google Street View.
* **DualMaps:** Vista combinata sincronizzata di Google Maps, Google Street View e Bing Aerial.
* **MapChecking.com:** Calcolo della densità e stima del numero di persone presenti in piazze o aree aperte.

---

### Task 3: Indagine su Persona da Username / Nickname

#### Obiettivo
Dato un nickname, trovare tutti i profili registrati sul web, forum, piattaforme gaming, repository di codice e social network.

#### Procedura Operativa:
1. **Analisi della Nomenclatura:**
   - Il nickname ha pattern specifici (es. prefissi/suffissi come `_98`, `ita`, `dev`, `xX_`)?
   - Annotare varianti plausibili con punteggiatura diversa (`nome.cognome`, `nome_cognome`, `nomecognome`).
2. **Scansione Massiva Automatizzata:**
   - Lanciare motori web di username enumeration (WhatsMyName.app, Blackbird, Sherlock).
   - Raccogliere gli URL dei profili confermati (HTTP 200 con riscontro visivo).
3. **Analisi Cross-Platform dei Profili:**
   - Verificare somiglianze: stessa bio, stessa foto profilo, stessi interessi, link in bio a linktree o altri siti personali.
   - Controllare data di creazione degli account: individuare il profilo più vecchio (spesso contiene dati personali rilasciati ingenuamente anni prima).
4. **Verifica Gravatar & Avatar Centralizzati:**
   - Se si individua un avatar, effettuare reverse search dell'immagine profilo per scovare ulteriori account collegati.

#### Tool Raccomandati:
* **WhatsMyName.app:** Interfaccia web no-code velocissima che interroga oltre 600 piattaforme senza falsi positivi.
* **Sherlock (GitHub):** Script open-source Python essenziale per scansionare username da terminale.
* **Blackbird OSINT:** Scanner rapido con visualizzazione dettagliata delle risposte server.
* **Namechk:** Verifica disponibilità e presenza username su dozzine di piattaforme.
* **Idcrawl:** Motore di ricerca persone per nickname e nomi reali.

---

### Task 4: Indagine da Indirizzo Email

#### Obiettivo
Identificare l'intestatario dell'email, i servizi online a cui è registrata (senza avvisare il target), la foto dell'account Google, recensioni lasciate e presenza in leak di credenziali.

#### Procedura Operativa:
1. **Verifica Validità Tecnica & Provider:**
   - Controllare record MX del dominio (es. Google Workspace, Proton, server proprietario).
   - Eseguire test SMTP (senza inviare email reale) per verificare se la casella esiste.
2. **Reverse Email OSINT Silenziosa (No Notification):**
   - Interrogare i servizi per estrarre il profilo Google collegato: Google ID, nome e cognome visualizzato, avatar in alta risoluzione, recensioni su Google Maps (spesso rivelano la città di residenza o i locali frequentati abitualmente!).
3. **Controllo Iscrizione a Piattaforme (Holehe Methodology):**
   - Eseguire il check sugli endpoint di recupero password o login di centinaia di siti (senza inviare la richiesta di reset!) per scoprire se l'email è registrata su Instagram, Twitter, Amazon, eBay, Spotify, Pornhub, Deliveroo, ecc.
4. **Verifica Data Breaches & Credenziali compromesse:**
   - Controllare la presenza dell'indirizzo in banche dati di leak passati. Spesso i leak contengono password in chiaro o hash, indirizzi IP di registrazione, data di nascita, indirizzo fisico.

#### Tool Raccomandati:
* **Epieos.com:** Tool straordinario e gratuito per estrarre informazioni Google, Skype e Trello partendo da una sola email.
* **Holehe (CLI Python):** Verifica la registrazione di un'email su oltre 120 siti web sfruttando i forgot-password endpoints.
* **CastrickClues:** Motore OSINT per correlare indirizzi email con profili online.
* **Hunter.io:** Trova i pattern email aziendali (es. `{first}.{last}@azienda.com`) e tutte le email pubbliche associate a un dominio.
* **EmailHippo / MailboxValidator:** Verifica dell'esistenza della mailbox e controllo filtri catch-all.
* **Have I Been Pwned (HIBP):** Servizio di riferimento mondiale per identificare violazioni dati associate all'email.

---

### Task 5: Indagine da Numero di Telefono

#### Obiettivo
Determinare nazionalità, operatore telefonico, tipologia di linea (fisso, mobile, VoIP usa-e-getta), nominativo associato e account di messaggistica istantanea collegati.

#### Procedura Operativa:
1. **Normalizzazione & HLR Lookup:**
   - Formattare il numero in standard internazionale E.164 (es. `+39 340 1234567`).
   - Identificare MCC (Mobile Country Code) e MNC (Mobile Network Code) per verificare se il numero è stato migrato (portabilità) o se è un numero virtuale VoIP (es. Twilio, Skype, TextNow).
2. **Verifica App di Comunicazione (WhatsApp, Telegram, Signal):**
   - *Nota OPSEC:* Salvare il numero in una rubrica su un telefono secondario (burner phone) con account sock puppet.
   - Controllare su WhatsApp: foto profilo, stato, bio.
   - Controllare su Telegram: se il numero è visibile o tramite ricerca contatti per estrarre username `@username` e bio.
   - Controllare su Signal / Viber.
3. **Lookup Caller ID Comunitario:**
   - Interrogare database di identificazione chiamate (Sync.me, Truecaller, Tellows) tramite sessione isolata.

#### Tool Raccomandati:
* **PhoneInfoga:** Strumento open source avanzato per scansionare numeri di telefono e generare dorks specifici.
* **Numverify:** API / web service per validazione numero, carrier e localizzazione.
* **Sync.me & Truecaller (Web):** Database mondiali per scoprire il nome salvato in rubrica da altri utenti.
* **CarrierLookup:** Verifica immediata del gestore e distinzione tra cellulare reale e numero VoIP.

---

### Task 6: SOCMINT – Analisi Social Media

#### Obiettivo
Mappare la rete di relazioni, interessi, luoghi frequentati e post pubblici di un bersaglio su LinkedIn, X (Twitter), Instagram, Facebook, Reddit e Telegram.

#### Procedura Operativa:
1. **LinkedIn Intelligence (Target Professionale & Corporate):**
   - Cercare il profilo tramite Google Dorks per non comparire nella lista "Chi ha visitato il tuo profilo" (oppure usare un account sock puppet con navigazione anonima).
   - Esaminare: colleghi attuali, progetti svolti, tecnologie usate (fondamentale per capire l'infrastruttura IT dell'azienda), certificazioni.
2. **X / Twitter Advanced Search:**
   - Utilizzare operatori avanzati:
     - `from:username since:2022-01-01 until:2022-12-31`
     - `to:username` (per vedere chi gli risponde e conversazioni cancellate)
     - `geocode:41.9028,12.4964,5km` (tweet geolocalizzati in un raggio specifico).
3. **Instagram Intelligence:**
   - Analizzare i follower/seguiti più attivi nei commenti.
   - Cercare post geotaggati in locali o eventi.
   - Analizzare le storie in evidenza e la frequenza di pubblicazione per ricostruire abitudini.
4. **Reddit Intelligence:**
   - Recuperare post e commenti cancellati usando archivi della piattaforma PushShift.
5. **Telegram OSINT:**
   - Ricerca di canali pubblici, chat di gruppo e messaggi usando motori specializzati (Lyzem, Telegago, TGStat).

#### Tool Raccomandati:
* **Osintgram:** Suite CLI in Python per analizzare a fondo profili Instagram.
* **TweetDeck / X Pro & Advanced Search:** Monitoraggio in tempo reale e ricerca storica granulare su Twitter.
* **PullPush.io / Arctic Shift:** Ricerca nei dump storici di Reddit anche per contenuti eliminati.
* **TGStat & Lyzem:** Motori di ricerca e statistiche su canali e gruppi Telegram aperti.
* **Social Searcher:** Motore di ricerca social in tempo reale per monitorare menzioni, hashtag e sentiment.

---

### Task 7: Analisi Infrastruttura di Rete, Domini, IP e IoT

#### Obiettivo
Mappare la superficie di attacco, i server esposti, i sottodomini, la cronologia DNS e i dispositivi industriali o webcam connesse a internet.

#### Procedura Operativa:
1. **Ricerca Sottodomini & Certificati SSL (Passive Recon):**
   - Consultare i registri di Certificate Transparency (CT Logs). Quando viene emesso un certificato HTTPS per un sottodominio (es. `vpn.azienda.com`), viene registrato pubblicamente.
2. **Mappatura DNS Storico & Whois:**
   - Verificare chi ha registrato il dominio (se non protetto da privacy proxy) o risalire ai dati storici prima dell'entrata in vigore del GDPR.
   - Verificare indirizzi IP storici per scoprire il vero server originario dietro Cloudflare o CDN.
3. **Scansione Dispositivi Connessi & Porte Aperte:**
   - Interrogare motori di ricerca per dispositivi connessi (Shodan, Censys, FOFA) per trovare server web, pannelli di login, stampanti, router, telecamere e sistemi industriali ICS/SCADA senza effettuare scansioni attive dirette (evitando di allarmare gli IDS del bersaglio).
4. **Ispezione Sandbox & Tracciamento Modifiche Web:**
   - Eseguire la scansione URL con sandbox (Urlscan.io) per visualizzare screenshot, chiamate API esterne, script e cookie impostati.
   - Consultare la Wayback Machine per vedere versioni passate del sito web.

#### Tool Raccomandati:
* **Shodan.io:** Il più celebre motore di ricerca per device IoT, server, porte aperte e vulnerabilità note.
* **Censys Search:** Analisi avanzata di certificati digitali e host internet.
* **FOFA & ZoomEye:** Motori di ricerca alternativi per asset di rete e infrastrutture globali.
* **crt.sh:** Interrogazione istantanea dei log Certificate Transparency per scoprire tutti i sottodomini esistenti.
* **DNSDumpster:** Mappatura visiva e tabellare dei record DNS e sottodomini.
* **SecurityTrails:** Storico DNS dettagliatissimo (record A, MX, NS) essenziale per bypassare CDN come Cloudflare.
* **Urlscan.io:** Scanner web passivo per analizzare nel dettaglio il comportamento di una pagina web.
* **Wayback Machine (archive.org):** Archivio storico di pagine internet cancellate o modificate nel tempo.

---

### Task 8: Tracciamento Data Breach, Credenziali e Leak

#### Obiettivo
Individuare credenziali compromesse, password esposte, numeri di telefono o documenti riservati trapelati in violazioni di sicurezza pubbliche o nel dark web.

#### Procedura Operativa:
1. **Ricerca per Identificatore (Email, Username, Telefono, Dominio):**
   - Interrogare i database di breach noti per sapere quali piattaforme sono state violate e in quale anno.
2. **Analisi dei Paste Sites & Code Repositories:**
   - Cercare dump di testo su Pastebin, Ghostbin e archivi simili.
   - Cercare su GitHub commit pubblici che contengano credenziali hardcoded, chiavi API o file `.env`.
3. **Analisi Dark Web & Forum di Hacking:**
   - Monitorare dump e discussioni su forum specializzati tramite motori di ricerca darknet e indicizzatori specializzati.

#### Tool Raccomandati:
* **HaveIBeenPwned:** Verifica se un'email o numero telefonico è apparso in oltre 14 miliardi di record violati.
* **DeHashed:** Uno dei motori di ricerca credenziali più completi (ricerca per IP, username, password, nome, email).
* **Intelligence X (intelx.io):** Motore di ricerca archivistico per darknet, paste, leak e documenti governativi desecretati.
* **LeakCheck.net:** Verifica rapida per scoprire quali password sono associate a un indirizzo.
* **Grep.app:** Ricerca ultra-veloce di stringhe e chiavi all'interno di milioni di repository pubblici GitHub.

---

### Task 9: Tracciamento Fisico: Voli (ADS-B) e Navale (AIS)

#### Obiettivo
Tracciare spostamenti in tempo reale e rotte storiche di aerei commerciali, jet privati, cargo, navi mercantili e yacht di lusso.

#### Procedura Operativa:
1. **Aviation OSINT (Tracciamento Aerei):**
   - Recuperare il codice ICAO (codice esadecimale a 24 bit) o il codice di registrazione (es. `I-XXXX`, `N12345`).
   - Consultare aggregatori ADS-B aperti (che non filtrano gli aerei governativi o privati su richiesta dei proprietari, a differenza dei servizi commerciali come Flightradar24).
   - Verificare le trasmissioni radio ACARS o le comunicazioni delle torri di controllo con LiveATC.
2. **Maritime OSINT (Tracciamento Navale):**
   - Identificare la nave tramite codice MMSI (Maritime Mobile Service Identity) o numero IMO.
   - Tracciare i transponder AIS per verificare porto di partenza, rotta stimata, velocità e destinazione.

#### Tool Raccomandati:
* **ADS-B Exchange (globe.adsbexchange.com):** Il più grande network aperto di tracciamento voli al mondo, senza censura su jet privati, governativi o militari.
* **Flightradar24 & FlightAware:** Le piattaforme commerciali più note per tracciare voli civili e consultare storici orari.
* **MarineTraffic:** Riferimento globale per il monitoraggio navale AIS con foto delle imbarcazioni.
* **VesselFinder:** Ottima alternativa gratuita a MarineTraffic per rotte navali e dettagli tecnici.
* **LiveATC.net:** Registrazioni e streaming audio in diretta delle comunicazioni tra piloti e controllori di volo (ATC) di tutto il mondo.

---

### Task 10: Corporate OSINT & Registro Imprese

#### Obiettivo
Ricostruire la struttura societaria di un'azienda, i beneficiari effettivi (Ultimate Beneficial Owners), gli azionisti, le filiali estere e i contratti pubblici vinti.

#### Procedura Operativa:
1. **Visure Camerali & Registri di Commercio:**
   - Interrogare i registri ufficiali delle imprese (es. Registro Imprese in Italia, Companies House nel Regno Unito, SEC EDGAR negli USA).
2. **Identificazione dei Vertici & Connessioni Familiari/Affari:**
   - Cercare nomi dei membri del CdA su database internazionali anti-corruzione e riciclaggio.
3. **Monitoraggio Appalti Pubblici & Finanziamenti:**
   - Consultare portali di acquisti della pubblica amministrazione (es. ANAC / TED Europa).

#### Tool Raccomandati:
* **OpenCorporates:** Il più grande database aperto di aziende al mondo con oltre 200 milioni di società catalogate.
* **SEC EDGAR:** Database ufficiale della borsa americana per consultare bilanci, partecipazioni azionarie e contratti (moduli 10-K, 8-K).
* **OCCRP Aleph:** Piattaforma investigativa per tracciare transazioni finanziarie sospette, fughe di notizie e legami societari opachi.
* **TED (Tenders Electronic Daily):** Portale europeo per gli appalti pubblici e le gare europee.

---

### Task 11: Criptovalute & Blockchain Intelligence (BTC / ETH)

#### Obiettivo
Mappare flussi finanziari illeciti, risalire all'origine di fondi provento di frodi o ransomware, e identificare cluster di wallet appartenenti a exchange centralizzati con obblighi KYC.

#### Procedura Operativa:
1. **Identificazione e Parsing del Wallet:**
   - Verificare la blockchain (Bitcoin Legacy `1...`, SegWit `3...`, Bech32 `bc1q...`, Ethereum/EVM `0x...`).
2. **Clustering degli Indirizzi (Heuristics):**
   - Utilizzare **WalletExplorer** per applicare algoritmi di clustering (Multi-input common ownership) su Bitcoin e capire se il wallet fa parte di un'entità nota.
3. **Mappatura Visuale dei Flussi:**
   - Caricare il wallet su **Breadcrumbs.app** per tracciare la catena delle transazioni graficamente e individuare l'hop verso un exchange con KYC (es. Binance, Coinbase) per l'eventuale subpoena giudiziaria.

#### Tool Raccomandati:
* **Breadcrumbs.app:** Piattaforma investigativa visuale blockchain multi-chain.
* **WalletExplorer.com:** Algoritmo di clustering per indirizzi Bitcoin.
* **Mitaka:** Estensione per pivotare istantaneamente con un click da un indirizzo crypto a dozzine di explorer.

---

### Task 12: Estrazione Metadati da Documenti Aziendali (PDF / Office)

#### Obiettivo
Scaricare documenti pubblici rilasciati da un'organizzazione per scoprire username di rete interna, nomi di server e software utilizzati dai dipendenti.

#### Procedura Operativa:
1. **Raccolta Massiva (Harvesting):**
   - Lanciare **Metagoofil** per scaricare automaticamente file PDF, DOCX, XLSX indicizzati su Google/Bing per il dominio target (`metagoofil -d target.com -t pdf,docx -l 50 -n 25`).
2. **Estrazione e Correlazione Metadati:**
   - Estrarre i tag: `Author`, `Creator`, `Producer`, `LastModifiedBy` e percorsi locali (es. `C:\Users\jdoe\OneDrive\...`).
   - Gli username estratti (es. `mrossi`, `jdoe`) rivelano la convenzione di naming aziendale usata per il login Active Directory.

#### Tool Raccomandati:
* **Metagoofil:** Tool CLI collaudato per l'harvesting e l'analisi metadati documentali.
* **ExifTool:** Analisi forense di singoli file per timestamp e cronologia revisioni.
* **Tria.ge Sandbox:** Esecuzione sicura di documenti con macro o payload sospetti.

---

### Task 13: Profilazione Avanzata Account Google (GHunt)

#### Obiettivo
Estrarre l'intera impronta digitale di un account Google target partendo da un semplice indirizzo Gmail, senza inviare alcuna notifica.

#### Procedura Operativa:
1. **Autenticazione Sock Puppet:**
   - Inizializzare GHunt con un account Google fittizio per interrogare le API interne.
2. **Esecuzione Analisi:**
   - Eseguire `ghunt email target@gmail.com`.
3. **Triangolazione delle Recensioni Maps:**
   - Estrarre tutte le recensioni lasciate su Google Maps: i punti geolocalizzati (locali, stazioni, palestre) permettono di restringere la residenza o la città in cui il soggetto vive abitualmente.

#### Tool Raccomandati:
* **GHunt (GitHub mxrch/GHunt):** Framework per OSINT su account Google.
* **Epieos.com:** Alternativa web no-code istantanea.

---

### Task 14: Ispezione Completa Sito Web & Superficie d'Attacco

#### Obiettivo
Ottenere una panoramica forense a 360° di un sito web (IP origin, DNS, certificati, CMS, header di sicurezza, redirect e sottodomini).

#### Procedura Operativa:
1. **Scansione All-In-One con Web-Check:**
   - Inserire l'URL su **Web-Check** per generare un dossier completo su server, hosting, cookie e tecnologie usate.
2. **Enumerazione Passiva Sottodomini:**
   - Lanciare **Subfinder** da terminale per estrarre centinaia di sottodomini passivi in meno di 10 secondi.
3. **Mappatura Approfondita d'Attacco con Amass:**
   - Eseguire `amass enum -passive -d target.com` per mappare i blocchi di rete AS e ASN.

#### Tool Raccomandati:
* **Web-Check (lissy93/web-check):** Suite web/CLI open source con 34k+ stelle su GitHub.
* **Subfinder (projectdiscovery/subfinder):** Enumeratore passivo di sottodomini veloce e modulare.
* **OWASP Amass:** Mappatura d'attacco e ricognizione infrastrutturale complessa.
* **Photon (s0md3v/Photon):** Web crawler per estrazione di endpoint, email e chiavi.

---

### Task 15: Correlazione Domini via Analytics & AdSense IDs

#### Obiettivo
Identificare tutti i siti web appartenenti allo stesso attore correlando codici di tracciamento condivisi.

#### Procedura Operativa:
1. **Ispezione Sorgente:**
   - Cercare nel sorgente HTML della pagina gli ID di tracciamento (`UA-XXXXX`, `G-XXXXX`, `pub-XXXXX`).
2. **Reverse Lookup:**
   - Inserire il codice su **BuiltWith** o **DNSlytics** per estrarre la lista di tutti gli altri domini registrati con lo stesso identificativo.

#### Tool Raccomandati:
* **BuiltWith:** Profiler tecnologico e motore di reverse lookup per Analytics/AdSense.
* **BGPView:** Analisi instradamento IP e ASN per verificare se i server sono sullo stesso provider.
* **SingleFile:** Salvataggio della prova forense prima che il sito venga oscurato.

---

### Task 16: Ricerca e Monitoraggio nel Dark Web (.onion)

#### Obiettivo
Monitorare forum clandestini, leak aziendali e mercati sotterranei della rete Tor.

#### Procedura Operativa:
1. **Query Aggregata con OnionSearch:**
   - Lanciare `onionsearch "target_keyword" --engines ahmia,torch,haystak` per scansionare molteplici motori .onion contemporaneamente.
2. **Verifica Clearnet su Ahmia.fi:**
   - Controllare i risultati pubblici filtrati tramite Ahmia senza necessità di avviare il router Tor per controlli preliminari.

#### Tool Raccomandati:
* **OnionSearch (megadose/OnionSearch):** Scraper CLI multi-motore per il darknet.
* **Ahmia.fi:** Ricerca clearnet sicura per domini .onion.
* **Intelligence X:** Motore di ricerca e archivio storico darknet.

---

## 4. Metodologia di Ingestione e Audit per GitHub Topics

Per garantire che il nostro arsenale OSINT rimanga sempre aggiornato con gli ultimi strumenti sviluppati dalla community open-source mondiale, è presente uno script di audit e ingestion automatico:

```bash
# Esegui l'ispezione automatica dei topic GitHub (osint-tools, osint, socmint, geoint)
node scripts/github_osint_inspector.js
```

### Criteri di Vetting e Sicurezza Adottati:
1. **Reputazione e Adozione:** Minimo 150 stelle GitHub per escludere script amatoriali o non testati.
2. **Verifica Licenza d'Uso:** Accettazione prioritaria di software con licenze permissive (MIT, Apache 2.0, GPLv3, BSD) e scarto di repository non licenziati o con fork sospetti.
3. **Analisi del Rischio (Malware & Supply Chain):** Verifica che il tool non includa binari precompilati opachi o richieste di token personali senza crittografia locale.
4. **Stato di Manutenzione:** Esclusione automatica di progetti archiviati (`archived: true`) con dipendenze deprecate.

---

## 5. Catalogo Ragionato dei Migliori Tool Gratuiti & Accessibili

| Categoria | Nome Tool | Link | Accessibilità | Descrizione Sintetica |
| :--- | :--- | :--- | :--- | :--- |
| **GEOINT** | Overpass Turbo | [overpass-turbo.eu](https://overpass-turbo.eu/) | Free / No Login | Query complesse su dati cartografici OpenStreetMap. |
| **GEOINT** | SunCalc | [suncalc.org](https://www.suncalc.org/) | Free / No Login | Calcolo posizione solare, azimut e ombre per data/ora. |
| **GEOINT** | PeakFinder | [peakfinder.org](https://www.peakfinder.org/) | Free Web | Ricostruzione a 360° dei profili montuosi nel mondo. |
| **GEOINT** | Yandex Images | [yandex.com/images](https://yandex.com/images/) | Free / No Login | Il miglior motore per reverse image search e architettura. |
| **GEOINT** | Google Lens | [lens.google.com](https://lens.google.com/) | Free | Riconoscimento rapido oggetti, prodotti, testi e landmark. |
| **GEOINT** | Mapillary | [mapillary.com](https://www.mapillary.com/) | Free | Immagini stradali crowdsourced con licenza aperta. |
| **GEOINT** | KartaView | [kartaview.org](https://kartaview.org/) | Free | Fotografie a livello strada alternative a Google Street View. |
| **GEOINT** | DualMaps | [dualmaps.com](https://www.dualmaps.com/) | Free | Vista sincronizzata: Google Maps, Street View e Bing Aerial. |
| **GEOINT** | MapChecking | [mapchecking.com](https://www.mapchecking.com/) | Free | Stima numerica densità folla in una determinata area. |
| **GEOINT** | Sentinel Hub Browser | [apps.sentinel-hub.com](https://apps.sentinel-hub.com/eo-browser/) | Free Freemium | Immagini satellitari multispettrali e aggiornate. |
| **METADATI** | ExifTool | [exiftool.org](https://exiftool.org/) | Free / CLI | Il tool per eccellenza per estrazione di tutti i metadati. |
| **METADATI** | Jeffrey's Viewer | [exif.regex.info](http://exif.regex.info/exif.cgi) | Free Web | Visualizzazione online metadati e geolocalizzazione su mappa. |
| **METADATI** | JPEGsnoop | [impulsesoftware.org](https://www.impulseadventure.com/photo/jpeg-snoop.html) | Free Windows | Analisi della tabella di quantizzazione e modifiche grafiche. |
| **USERNAME** | WhatsMyName | [whatsmyname.app](https://whatsmyname.app/) | Free Web | Controllo username su oltre 600 piattaforme online. |
| **USERNAME** | Sherlock | [github.com/sherlock-project/sherlock](https://github.com/sherlock-project/sherlock) | Free / Open Source | Ricerca profili social da terminale con esportazione CSV. |
| **USERNAME** | Blackbird | [github.com/p1ngul1n0/blackbird](https://github.com/p1ngul1n0/blackbird) | Free / Open Source | Scansione rapida e contemporanea di account social. |
| **USERNAME** | Namechk | [namechk.com](https://namechk.com/) | Free Web | Verifica disponibilità username e domini. |
| **EMAIL** | Epieos | [epieos.com](https://epieos.com/) | Free Web | Trova account Google, recensioni Maps e Skype da email. |
| **EMAIL** | Holehe | [github.com/megadose/holehe](https://github.com/megadose/holehe) | Free / CLI | Verifica registrazione email su oltre 120 siti web. |
| **EMAIL** | Hunter.io | [hunter.io](https://hunter.io/) | Free 25 req/mo | Trova pattern e contatti email aziendali per ogni dominio. |
| **EMAIL** | EmailHippo | [tools.emailhippo.com](https://tools.emailhippo.com/) | Free Web | Validazione tecnica dell'esistenza della casella di posta. |
| **TELEFONO** | PhoneInfoga | [github.com/sundowndev/phoneinfoga](https://github.com/sundowndev/phoneinfoga) | Free / CLI | Scanner avanzato per numeri di telefono internazionali. |
| **TELEFONO** | Sync.me | [sync.me](https://sync.me/) | Free Web | Lookup caller ID con identificazione nome dell'abbonato. |
| **TELEFONO** | Truecaller Web | [truecaller.com](https://www.truecaller.com/) | Free Web | Il più grande database al mondo di elenchi telefonici. |
| **NETWORK** | Shodan | [shodan.io](https://www.shodan.io/) | Free Base | Motore di ricerca dispositivi IoT, server e porte aperte. |
| **NETWORK** | Censys Search | [search.censys.io](https://search.censys.io/) | Free Base | Mappatura host, servizi e certificati SSL mondiali. |
| **NETWORK** | FOFA | [fofa.info](https://fofa.info/) | Free Base | Alternativa asiatica a Shodan per asset di rete. |
| **NETWORK** | crt.sh | [crt.sh](https://crt.sh/) | Free / No Login | Ricerca istantanea sottodomini tramite Certificate Transparency. |
| **NETWORK** | DNSDumpster | [dnsdumpster.com](https://dnsdumpster.com/) | Free Web | Scoperta sottodomini e grafico delle relazioni DNS. |
| **NETWORK** | SecurityTrails | [securitytrails.com](https://securitytrails.com/) | Free Freemium | Storico DNS completo (record A, MX, NS) per bypassare CDN. |
| **NETWORK** | Urlscan.io | [urlscan.io](https://urlscan.io/) | Free Web | Scansione e sandbox forense di indirizzi web. |
| **NETWORK** | Wayback Machine | [web.archive.org](https://web.archive.org/) | Free / No Login | Archivio storico di siti web e pagine eliminate. |
| **BREACH** | Have I Been Pwned | [haveibeenpwned.com](https://haveibeenpwned.com/) | Free Web | Verifica compromissione in oltre 14 miliardi di account violati. |
| **BREACH** | DeHashed | [dehashed.com](https://www.dehashed.com/) | Free Preview | Motore di ricerca credenziali e leak di dati. |
| **BREACH** | Intelligence X | [intelx.io](https://intelx.io/) | Free Base | Motore di ricerca darknet, pastebin e archivi sotterranei. |
| **BREACH** | Grep.app | [grep.app](https://grep.app/) | Free Web | Ricerca stringhe e credenziali nei repository di codice GitHub. |
| **TRASPORTI** | ADS-B Exchange | [globe.adsbexchange.com](https://globe.adsbexchange.com/) | Free / No Filter | Tracciamento aerei in tempo reale senza censura per jet privati. |
| **TRASPORTI** | Flightradar24 | [flightradar24.com](https://www.flightradar24.com/) | Free Web | Tracciamento voli civili e dati storici aeroporti. |
| **TRASPORTI** | MarineTraffic | [marinetraffic.com](https://www.marinetraffic.com/) | Free Web | Tracciamento satellitare e terrestre navi mercantili e yacht. |
| **TRASPORTI** | VesselFinder | [vesselfinder.com](https://www.vesselfinder.com/) | Free Web | Tracciamento AIS navale alternativo a MarineTraffic. |
| **BUSINESS** | OpenCorporates | [opencorporates.com](https://opencorporates.com/) | Free Web | Il più grande registro aperto di imprese al mondo. |
| **BUSINESS** | SEC EDGAR | [sec.gov/edgar](https://www.sec.gov/edgar/searchedgar/companysearch) | Free / No Login | Bilanci ufficiali, azionisti e contratti aziende quotate USA. |
| **BUSINESS** | OCCRP Aleph | [aleph.occrp.org](https://aleph.occrp.org/) | Free Web | Database investigativo su corruzione e criminalità finanziaria. |
| **FRAMEWORK** | OSINT Framework | [osintframework.com](https://osintframework.com/) | Free Web | Albero gerarchico mondiale dei tool OSINT per categoria. |
| **FRAMEWORK** | SpiderFoot | [spiderfoot.net](https://www.spiderfoot.net/) | Free Open Source | Piattaforma di automazione OSINT modulare. |
| **FRAMEWORK** | theHarvester | [github.com/laramies/theHarvester](https://github.com/laramies/theHarvester) | Free CLI | Raccolta passiva di email, sottodomini e dipendenti. |
| **USERNAME** | Maigret | [github.com/soxoj/maigret](https://github.com/soxoj/maigret) | Free CLI | Dossier completo ricorsivo su persona da 3000+ siti. |
| **EMAIL** | GHunt | [github.com/mxrch/GHunt](https://github.com/mxrch/GHunt) | Free CLI | Framework OSINT per estrazione dati da account Google. |
| **NETWORK** | Web-Check | [github.com/lissy93/web-check](https://github.com/lissy93/web-check) | Free Web/CLI | Ispezione all-in-one di qualsiasi dominio web. |
| **NETWORK** | Subfinder | [github.com/projectdiscovery/subfinder](https://github.com/projectdiscovery/subfinder) | Free CLI | Enumerazione passiva velocissima di sottodomini. |
| **NETWORK** | OWASP Amass | [github.com/owasp-amass/amass](https://github.com/owasp-amass/amass) | Free CLI | Mappatura d'attacco in-depth e asset discovery. |
| **NETWORK** | Photon | [github.com/s0md3v/Photon](https://github.com/s0md3v/Photon) | Free CLI | Web crawler ultra-rapido per OSINT, email e chiavi. |
| **NETWORK** | BGPView | [bgpview.io](https://bgpview.io/) | Free Web | Routing BGP, ASN, prefissi IP e carrier upstream. |
| **NETWORK** | BuiltWith | [builtwith.com](https://builtwith.com/) | Free Web | Profiler tecnologie e correlazione domini via Analytics/AdSense. |
| **SOCMINT** | Toutatis | [github.com/megadose/toutatis](https://github.com/megadose/toutatis) | Free CLI | Estrazione dati e user ID numerico da profili Instagram. |
| **DOCUMENTI** | Metagoofil | [github.com/laramies/metagoofil](https://github.com/laramies/metagoofil) | Free CLI | Estrazione metadati da PDF/DOCX/XLSX pubblici aziendali. |
| **CRYPTO** | Breadcrumbs | [breadcrumbs.app](https://www.breadcrumbs.app/) | Free Web | Mappatura visuale flussi e transazioni blockchain. |
| **CRYPTO** | WalletExplorer | [walletexplorer.com](https://www.walletexplorer.com/) | Free Web | Algoritmo clustering per indirizzi Bitcoin ed exchange. |
| **DARK WEB** | OnionSearch | [github.com/megadose/OnionSearch](https://github.com/megadose/OnionSearch) | Free CLI | Scraping simultaneo di molteplici motori di ricerca Tor. |
| **DARK WEB** | Ahmia | [ahmia.fi](https://ahmia.fi/) | Free Web | Motore di ricerca clearnet per indirizzi e servizi .onion. |
| **FORENSE** | SingleFile | [github.com/gildas-lormeau/SingleFile](https://github.com/gildas-lormeau/SingleFile) | Free Web/CLI | Preservazione forense inalterabile di pagine web in HTML. |
| **THREAT INT** | Mitaka | [github.com/ninoseki/mitaka](https://github.com/ninoseki/mitaka) | Free Web | Estensione per pivotare su IOC (IP, hash, URL, wallet). |
| **THREAT INT** | Tria.ge | [tria.ge](https://tria.ge/) | Free Web | Sandbox interattiva per analisi malware e allegati malevoli. |

---

## 5. Cheat Sheet Avanzato: Google Dorking & Operatori di Ricerca

Il Google Dorking sfrutta operatori avanzati per scovare informazioni confidenziali esposte inavvertitamente sul web.

### Operatori Principali:
* `site:target.com` : Limita i risultati al dominio indicato.
* `filetype:pdf` (o `ext:xlsx`, `ext:sql`, `ext:env`) : Cerca solo file con una specifica estensione.
* `inurl:admin` : Cerca URL contenenti una specifica parola.
* `intitle:"index of"` : Trova directory listing aperti sul web server.
* `intext:"confidenziale"` : Cerca il testo nel corpo della pagina.
* `cache:target.com` : Visualizza la copia salvata da Google nella propria cache.

### Esempi Pratici di Dork per Investigazioni:

```bash
# 1. Trovare file contenenti password o configurazioni esposte
site:target.com filetype:env | filetype:yml | filetype:conf intext:"password"

# 2. Directory listing aperti su server
site:target.com intitle:"Index of /" | intitle:"Index of /backup"

# 3. Documenti interni o sensibili
site:target.com (filetype:pdf OR filetype:docx OR filetype:xlsx) ("confidenziale" OR "strettamente riservato" OR "non divulgare")

# 4. Trovare dipendenti su LinkedIn bypassando il login
site:linkedin.com/in/ "Azienda Target" "Ruolo / Mansione"

# 5. Webcam esposte online senza autenticazione
inurl:"/view.shtml" | inurl:"ViewerFrame?Mode=" | inurl:"/live/index.html?lang=en"

# 6. Database dump e backup SQL lasciati pubblici
site:target.com (ext:sql OR ext:bak OR ext:dump OR ext:tar.gz)

# 7. Ricerca geolocalizzata su Twitter/X
site:twitter.com geocode:41.9028,12.4964,10km "incidente"
```

---

*Documento redatto come architettura di riferimento per il repository OSINT.*
