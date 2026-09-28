/**
 * OSINT Database: Tools, Task Playbooks, Dork Presets & OPSEC Guidelines
 * Costruito integrando OSINT Framework, The Cyber Mentor Course, Benjamin Strick tutorials,
 * OSINT Dojo, Mike Holcomb ICS/OT series e le migliori fonti OSINT mondiali.
 */

const OSINT_DATA = {
  categories: [
    { id: "all", name: "Tutti i Tool", icon: "bi-grid-fill" },
    { id: "geoint", name: "GEOINT & Mappe", icon: "bi-geo-alt-fill" },
    { id: "metadata", name: "Metadati & Forense", icon: "bi-file-earmark-binary-fill" },
    { id: "username", name: "Username & Persone", icon: "bi-person-badge-fill" },
    { id: "email", name: "Email Intelligence", icon: "bi-envelope-at-fill" },
    { id: "phone", name: "Telefoni & Carrier", icon: "bi-telephone-fill" },
    { id: "socmint", name: "Social Media (SOCMINT)", icon: "bi-share-fill" },
    { id: "network", name: "Network, Domini & IoT", icon: "bi-hdd-network-fill" },
    { id: "breaches", name: "Leaks & Credenziali", icon: "bi-shield-lock-fill" },
    { id: "transport", name: "Aerei & Navi", icon: "bi-airplane-fill" },
    { id: "business", name: "Aziende & Registri", icon: "bi-briefcase-fill" },
    { id: "crypto", name: "Cripto & Blockchain", icon: "bi-currency-bitcoin" },
    { id: "documents", name: "Documenti & Forense File", icon: "bi-file-earmark-pdf-fill" },
    { id: "darkweb", name: "Dark Web & Tor", icon: "bi-incognito" },
    { id: "frameworks", name: "Frameworks & Scanners", icon: "bi-tools" }
  ],

  accessTypes: [
    { id: "free", label: "100% Gratuito" },
    { id: "freemium", label: "Freemium" },
    { id: "nologin", label: "Nessun Login" },
    { id: "web", label: "Web Browser" },
    { id: "cli", label: "CLI / Terminale" }
  ],

  tools: [
    // --- GEOINT & MAPPE ---
    {
      id: "overpass-turbo",
      name: "Overpass Turbo",
      category: "geoint",
      url: "https://overpass-turbo.eu/",
      access: ["free", "nologin", "web"],
      description: "Query engine per estrarre e filtrare qualsiasi elemento cartografico da OpenStreetMap (es. chiese entro 200m da una ferrovia).",
      usageTip: "Usa la sintassi Overpass QL per combinare tag OSM: nwr['amenity'='place_of_worship'](around:200, lat, lon).",
      source: "Benjamin Strick OSINT at Home #10",
      rating: 5
    },
    {
      id: "suncalc",
      name: "SunCalc",
      category: "geoint",
      url: "https://www.suncalc.org/",
      access: ["free", "nologin", "web"],
      description: "Calcola la traiettoria solare, l'altezza (elevazione), l'azimut e la lunghezza dell'ombra per qualsiasi coordinata e istante orario.",
      usageTip: "Allinea l'ombra di un lampione o di un edificio per risalire all'ora esatta o confermare la data dello scatto.",
      source: "Standard Chronolocation Practice",
      rating: 5
    },
    {
      id: "peakfinder",
      name: "PeakFinder",
      category: "geoint",
      url: "https://www.peakfinder.org/",
      access: ["free", "web"],
      description: "Genera il profilo a 360° delle vette montuose visibili da qualsiasi punto del pianeta.",
      usageTip: "Se la foto ha montagne sullo sfondo, confronta la linea dell'orizzonte (skyline) per triangolare il punto esatto di scatto.",
      source: "IMINT / GEOINT Standard",
      rating: 5
    },
    {
      id: "yandex-images",
      name: "Yandex Visual Search",
      category: "geoint",
      url: "https://yandex.com/images/",
      access: ["free", "nologin", "web"],
      description: "Il motore di reverse image search più potente al mondo per geolocalizzazione, dettagli architettonici, paesaggi e volti.",
      usageTip: "Ritaglia porzioni specifiche della foto (es. un balcone, un campanile, un tombino) invece di caricare la foto intera.",
      source: "The Cyber Mentor / Bellingcat",
      rating: 5
    },
    {
      id: "google-lens",
      name: "Google Lens",
      category: "geoint",
      url: "https://lens.google.com/",
      access: ["free", "web"],
      description: "Riconoscimento automatico di landmark famosi, marchi commerciali, loghi, testi in lingua straniera e cartelli stradali.",
      usageTip: "Ottimo per identificare catene di negozi locali, stili di targhe automobilistiche e cartelli stradali unici per nazione.",
      source: "Google",
      rating: 5
    },
    {
      id: "mapillary",
      name: "Mapillary",
      category: "geoint",
      url: "https://www.mapillary.com/",
      access: ["free", "nologin", "web"],
      description: "Piattaforma aperta di immagini a livello strada fornite da utenti. Copre milioni di chilometri non presenti su Google Street View.",
      usageTip: "Cerca in sentieri, piste ciclabili e strade secondarie rurali o paesi emergenti.",
      source: "OpenStreetMap Foundation",
      rating: 4
    },
    {
      id: "kartaview",
      name: "KartaView (ex OpenStreetCam)",
      category: "geoint",
      url: "https://kartaview.org/",
      access: ["free", "nologin", "web"],
      description: "Alternativa aperta a Google Street View con sequenze fotografiche geotaggate a livello della strada.",
      usageTip: "Ideale per confrontare cartelli stradali e incroci storici nel tempo.",
      source: "Grab / OSM",
      rating: 4
    },
    {
      id: "dualmaps",
      name: "DualMaps",
      category: "geoint",
      url: "https://www.dualmaps.com/",
      access: ["free", "nologin", "web"],
      description: "Sincronizza in un'unica schermata tripla Google Maps 2D, Google Street View e Bing Aerial Birds Eye (vista aerea obliqua a 45°).",
      usageTip: "La vista obliqua di Bing permette di osservare facciate e altezze di edifici con una chiarezza assente nella vista satellitare classica.",
      source: "11 Free OSINT Tools",
      rating: 5
    },
    {
      id: "mapchecking",
      name: "MapChecking",
      category: "geoint",
      url: "https://www.mapchecking.com/",
      access: ["free", "nologin", "web"],
      description: "Calcola con precisione scientifica l'area di una superficie e stima il numero di persone presenti a diverse densità di folla.",
      usageTip: "Disegna il poligono della piazza per verificare affermazioni giornalistiche sulla partecipazione a proteste o comizi.",
      source: "11 Free No-Code OSINT Tools (YouTube: q4JpeFXY454)",
      rating: 5
    },
    {
      id: "sentinel-hub",
      name: "Copernicus Browser / Sentinel Hub",
      category: "geoint",
      url: "https://browser.dataspace.copernicus.eu/",
      access: ["free", "web"],
      description: "Immagini satellitari ottiche e radar ad aggiornamento frequente (ogni 2-5 giorni) fornite dall'ESA.",
      usageTip: "Utilizza le combinazioni a falsi colori (NDVI, Moisture Index) per rilevare incendi, inondazioni, scavi o variazioni nei terreni.",
      source: "ESA / Copernicus",
      rating: 5
    },
    {
      id: "google-earth-pro",
      name: "Google Earth Pro (Desktop)",
      category: "geoint",
      url: "https://www.google.it/earth/about/versions/",
      access: ["free", "web"],
      description: "Software con archivio storico di immagini satellitari a partire dal 1985 e modello tridimensionale del terreno globale.",
      usageTip: "Lo slider temporale consente di vedere se una struttura è stata costruita o demolita in un dato arco di mesi.",
      source: "Standard OSINT",
      rating: 5
    },
    {
      id: "insecam",
      name: "Insecam",
      category: "geoint",
      url: "http://www.insecam.org/",
      access: ["free", "nologin", "web"],
      description: "Elenco mondiale di telecamere IP pubbliche e non protette da password, indicizzate con coordinate approssimative.",
      usageTip: "Verifica visiva del meteo e delle condizioni attuali di una città o marina.",
      source: "OSINT Dojo Geolocation Challenge (YouTube: mQDawXmBqsQ)",
      rating: 4
    },
    {
      id: "windy-webcams",
      name: "Windy Webcams",
      category: "geoint",
      url: "https://www.windy.com/-Webcams/webcams",
      access: ["free", "nologin", "web"],
      description: "Mappa globale interattiva con decine di migliaia di webcam pubbliche live e timelapse storici fino a mesi precedenti.",
      usageTip: "Guarda il timelapse per verificare l'esatto momento in cui ha nevicato o se un'imbarcazione era ormeggiata.",
      source: "Windy",
      rating: 5
    },
    {
      id: "geoguessr-tips",
      name: "GeoHints / PlonkIt",
      category: "geoint",
      url: "https://www.plonkit.net/guide",
      access: ["free", "nologin", "web"],
      description: "Guida esaustiva a tutti i metadati fisici mondiali: pali elettrici per nazione, targhe automobilistiche, guardrail, chevrons.",
      usageTip: "Consulta la sezione 'Bollards' o 'Poles' per restringere immediatamente la nazione da un singolo palo della luce.",
      source: "GeoGuessr Investigative Community",
      rating: 5
    },

    // --- METADATI & FORENSE ---
    {
      id: "exiftool",
      name: "ExifTool",
      category: "metadata",
      url: "https://exiftool.org/",
      access: ["free", "cli"],
      description: "La libreria e strumento CLI più completo al mondo per estrarre, modificare ed esaminare metadati in oltre 100 formati file.",
      usageTip: "Comando per estrarre tutti i tag GPS e di creazione: exiftool -a -u -g1 -GPS* foto.jpg",
      source: "Phil Harvey / Industry Standard",
      rating: 5
    },
    {
      id: "jeffreys-exif",
      name: "Jeffrey's Image Metadata Viewer",
      category: "metadata",
      url: "http://exif.regex.info/exif.cgi",
      access: ["free", "nologin", "web"],
      description: "Visualizzatore web di metadati EXIF, IPTC, XMP con mappatura automatica su Google Maps se presenti coordinate GPS.",
      usageTip: "Utile per controlli rapidi senza installare tool in locale.",
      source: "Jeffrey Friedl",
      rating: 4
    },
    {
      id: "jpegsnoop",
      name: "JPEGsnoop",
      category: "metadata",
      url: "https://www.impulseadventure.com/photo/jpeg-snoop.html",
      access: ["free", "web"],
      description: "Analizza le tabelle di quantizzazione DQT per stabilire se un'immagine JPEG è un originale o se è stata modificata con software grafici.",
      usageTip: "Indica se l'immagine è stata risalvata con Adobe Photoshop, GIMP o esportata da fotocamere note.",
      source: "ImpulseAdventure",
      rating: 4
    },
    {
      id: "fotoforensics",
      name: "FotoForensics",
      category: "metadata",
      url: "https://fotoforensics.com/",
      access: ["free", "nologin", "web"],
      description: "Strumento di analisi forense visiva che utilizza l'Error Level Analysis (ELA) per evidenziare porzioni di immagine incollate o alterate.",
      usageTip: "Elementi con livelli di compressione nettamente diversi indicano fotomontaggi o manomissioni.",
      source: "Neal Krawetz",
      rating: 4
    },

    // --- USERNAME & PERSONE ---
    {
      id: "whatsmyname",
      name: "WhatsMyName.app",
      category: "username",
      url: "https://whatsmyname.app/",
      access: ["free", "nologin", "web"],
      description: "Interfaccia web no-code ultra rapida per verificare la presenza di un nickname su oltre 600 piattaforme e social network.",
      usageTip: "Filtra per categoria (Coding, Crypto, Gaming, Music) per restringere il campo degli interessi.",
      source: "Micah Hoffman (WebBreacher)",
      rating: 5
    },
    {
      id: "sherlock",
      name: "Sherlock Project",
      category: "username",
      url: "https://github.com/sherlock-project/sherlock",
      access: ["free", "cli"],
      description: "Celebre script open source in Python per scansionare username attraverso 400+ siti web da terminale con export CSV/JSON.",
      usageTip: "Esegui: python sherlock target_username --print-found --csv output.csv",
      source: "The Cyber Mentor Course (YouTube: qwA6MmbeGNo)",
      rating: 5
    },
    {
      id: "blackbird",
      name: "Blackbird OSINT",
      category: "username",
      url: "https://github.com/p1ngul1n0/blackbird",
      access: ["free", "cli", "web"],
      description: "Strumento veloce per il controllo username che include anche una comoda interfaccia Web UI locale integrata.",
      usageTip: "Mostra anche l'estrazione dei metadati del profilo rilevato.",
      source: "p1ngul1n0",
      rating: 4
    },
    {
      id: "namechk",
      name: "Namechk",
      category: "username",
      url: "https://namechk.com/",
      access: ["free", "nologin", "web"],
      description: "Verifica simultanea di username sui principali social e disponibilità di domini di primo livello (.com, .net, .org).",
      usageTip: "Molto utile in fase preliminare di un'indagine.",
      source: "OSINT Framework",
      rating: 4
    },
    {
      id: "facecheck-id",
      name: "FaceCheck.ID",
      category: "username",
      url: "https://facecheck.id/",
      access: ["free", "freemium", "web"],
      description: "Motore di riconoscimento facciale che scansiona social network, arresti, blog e forum a partire da un ritaglio del viso.",
      usageTip: "Confronta il punteggio di somiglianza (80-100% per alta corrispondenza). Ottimo per stanare profili fake.",
      source: "Modern Facial OSINT",
      rating: 5
    },

    // --- EMAIL INTELLIGENCE ---
    {
      id: "epieos",
      name: "Epieos",
      category: "email",
      url: "https://epieos.com/",
      access: ["free", "nologin", "web"],
      description: "Estrae il profilo Google collegato a un'email senza notificare il proprietario: Google ID, recensioni Maps, avatar e account Skype.",
      usageTip: "Le recensioni Google Maps rivelano spesso la palestra, il bar abituale o la città in cui il bersaglio vive.",
      source: "Mike Holcomb / Sylvain Hajri",
      rating: 5
    },
    {
      id: "holehe",
      name: "Holehe",
      category: "email",
      url: "https://github.com/megadose/holehe",
      access: ["free", "cli"],
      description: "Verifica se un'email è registrata su oltre 120 siti (Twitter, Instagram, Amazon, LinkedIn, Porno, eBay) senza allarmare il bersaglio.",
      usageTip: "Usa endpoint 'password dimenticata' in sola lettura. Comando: holehe email@target.com",
      source: "The Cyber Mentor / Megadose",
      rating: 5
    },
    {
      id: "hunter-io",
      name: "Hunter.io",
      category: "email",
      url: "https://hunter.io/",
      access: ["freemium", "web"],
      description: "Trova la struttura degli indirizzi email aziendali (pattern) e i contatti pubblici associati a qualsiasi dominio web.",
      usageTip: "Fornisce 25 ricerche gratuite al mese. Mostra le fonti web dove l'email è stata indicizzata.",
      source: "The Cyber Mentor Course",
      rating: 4
    },
    {
      id: "emailhippo",
      name: "EmailHippo",
      category: "email",
      url: "https://tools.emailhippo.com/",
      access: ["free", "nologin", "web"],
      description: "Verifica tecnica approfondita della casella email: controlli MX, handshake SMTP, record SPF/DKIM e rilevamento caselle disposable.",
      usageTip: "Conferma se l'indirizzo email riceve messaggi senza dover spedire alcuna email di test.",
      source: "OSINT Framework",
      rating: 4
    },
    {
      id: "castrickclues",
      name: "CastrickClues",
      category: "email",
      url: "https://castrickclues.com/",
      access: ["free", "web"],
      description: "Ricerca inversa avanzata su email e numeri di telefono per individuare profili associati nel web e nei leak.",
      usageTip: "Ottimo completamento a Epieos per correlare identità digitali.",
      source: "OSINT Community",
      rating: 4
    },

    // --- TELEFONO & CARRIER ---
    {
      id: "phoneinfoga",
      name: "PhoneInfoga",
      category: "phone",
      url: "https://github.com/sundowndev/phoneinfoga",
      access: ["free", "cli", "web"],
      description: "Scanner avanzato per numeri di telefono internazionali. Determina formato internazionale, gestore, VoIP e genera Google dorks.",
      usageTip: "Può essere lanciato anche come web GUI locale con Docker: docker run -p 5000:5000 sundowndev/phoneinfoga",
      source: "Sundowndev / TCM",
      rating: 5
    },
    {
      id: "truecaller-web",
      name: "Truecaller Web",
      category: "phone",
      url: "https://www.truecaller.com/",
      access: ["free", "web"],
      description: "Il più grande elenco telefonico comunitario mondiale. Permette di identificare il nome salvato in rubrica associato a un numero.",
      usageTip: "Effettua l'accesso esclusivamente con un account sock puppet per non caricare la tua rubrica personale!",
      source: "Standard Phone OSINT",
      rating: 4
    },
    {
      id: "sync-me",
      name: "Sync.me",
      category: "phone",
      url: "https://sync.me/",
      access: ["free", "web"],
      description: "Database di caller ID alternativo che spesso include foto del profilo e profili social sincronizzati dalla rubrica.",
      usageTip: "Utile per un controllo incrociato se Truecaller non restituisce risultati.",
      source: "OSINT Framework",
      rating: 4
    },
    {
      id: "carrierlookup",
      name: "CarrierLookup",
      category: "phone",
      url: "https://www.carrierlookup.com/",
      access: ["free", "nologin", "web"],
      description: "Identifica se un numero di telefono è una linea mobile reale, un numero fisso o un servizio VoIP usa e getta (es. Twilio, Bandwidth).",
      usageTip: "Se è VoIP, è molto probabile che si tratti di un account fittizio o sock puppet.",
      source: "Telephony OSINT",
      rating: 4
    },

    // --- SOCIAL MEDIA (SOCMINT) ---
    {
      id: "osintgram",
      name: "Osintgram",
      category: "socmint",
      url: "https://github.com/Datalux/Osintgram",
      access: ["free", "cli"],
      description: "Strumento da terminale per estrarre informazioni da account Instagram: follower, post geotaggati, commenti frequenti ed email.",
      usageTip: "Richiede l'utilizzo di credenziali Instagram (utilizza SOLO un account secondario sock puppet).",
      source: "Datalux",
      rating: 4
    },
    {
      id: "twitter-advanced",
      name: "X / Twitter Advanced Search",
      category: "socmint",
      url: "https://twitter.com/search-advanced",
      access: ["free", "web"],
      description: "Motore di ricerca nativo di Twitter con filtri per mittente, destinatario, data esatta, hashtag e coordinate geografiche.",
      usageTip: "Usa l'operatore geocode:lat,lon,distanza (es. geocode:41.8902,12.4922,2km) per tweet emessi dal Colosseo.",
      source: "Twitter / SOCMINT Standard",
      rating: 5
    },
    {
      id: "pullpush",
      name: "PullPush.io (Reddit Archive)",
      category: "socmint",
      url: "https://pullpush.io/",
      access: ["free", "nologin", "web"],
      description: "Archivio storico dei post e commenti di Reddit. Permette di recuperare contenuti cancellati o moderati dagli utenti.",
      usageTip: "Cerca per autore (author:username) per leggere tutta la sua cronologia pregressa anche se eliminata.",
      source: "PushShift Heritage",
      rating: 5
    },
    {
      id: "tgstat",
      name: "TGStat",
      category: "socmint",
      url: "https://tgstat.com/",
      access: ["free", "nologin", "web"],
      description: "Il più ampio motore di ricerca e analisi statistica per canali pubblici e gruppi Telegram del mondo.",
      usageTip: "Permette di cercare parole chiave all'interno di messaggi scambiati in canali aperti di tutto il mondo.",
      source: "Telegram OSINT",
      rating: 5
    },
    {
      id: "social-searcher",
      name: "Social Searcher",
      category: "socmint",
      url: "https://www.social-searcher.com/",
      access: ["free", "nologin", "web"],
      description: "Motore di ricerca social in tempo reale per monitorare menzioni, tendenze e sentiment su Twitter, Facebook, YouTube e web.",
      usageTip: "Permette di esportare dati e impostare alert via email per nuovi post sul bersaglio.",
      source: "SOCMINT Framework",
      rating: 4
    },

    // --- NETWORK, DOMINI & IoT ---
    {
      id: "shodan",
      name: "Shodan.io",
      category: "network",
      url: "https://www.shodan.io/",
      access: ["free", "freemium", "web"],
      description: "Il più celebre motore di ricerca per dispositivi connessi: server, webcam, router, semafori, sistemi ICS/SCADA industriali.",
      usageTip: "Dork di esempio: 'port:554 has_screenshot:true' per telecamere RTSP, 'city:\"Milano\" org:\"Telecom\"'.",
      source: "Mike Holcomb ICS/OT Course / The Cyber Mentor",
      rating: 5
    },
    {
      id: "censys",
      name: "Censys Search",
      category: "network",
      url: "https://search.censys.io/",
      access: ["free", "freemium", "web"],
      description: "Mappatura continua e dettagliata di tutti i certificati SSL/TLS e degli host raggiungibili su Internet.",
      usageTip: "Permette di correlare certificati SSL identici su IP differenti per scoprire l'origin server nascosto dietro Cloudflare.",
      source: "The Cyber Mentor Course",
      rating: 5
    },
    {
      id: "crt-sh",
      name: "crt.sh (Certificate Transparency)",
      category: "network",
      url: "https://crt.sh/",
      access: ["free", "nologin", "web"],
      description: "Cerca nei registri pubblici di Certificate Transparency per scoprire tutti i sottodomini per cui è stato emesso un certificato SSL.",
      usageTip: "Cerca: %.azienda.com per ottenere immediatamente una lista completa di sottodomini (vpn, dev, staging, api).",
      source: "Standard Reconnaissance",
      rating: 5
    },
    {
      id: "dnsdumpster",
      name: "DNSDumpster",
      category: "network",
      url: "https://dnsdumpster.com/",
      access: ["free", "nologin", "web"],
      description: "Strumento di mappatura DNS passiva che individua record A, MX, NS, TXT e genera un grafo visivo delle relazioni di rete.",
      usageTip: "Esporta la tabella in formato Excel o grafico geolocalizzato dei server.",
      source: "The Cyber Mentor Course",
      rating: 5
    },
    {
      id: "securitytrails",
      name: "SecurityTrails",
      category: "network",
      url: "https://securitytrails.com/",
      access: ["freemium", "web"],
      description: "Archivio storico dei cambiamenti DNS (Historical A, AAAA, MX, NS) e delle registrazioni Whois di qualsiasi dominio.",
      usageTip: "Fondamentale per identificare l'IP del web server prima che venisse attivata la protezione Cloudflare.",
      source: "Technical OSINT",
      rating: 5
    },
    {
      id: "urlscan",
      name: "Urlscan.io",
      category: "network",
      url: "https://urlscan.io/",
      access: ["free", "nologin", "web"],
      description: "Sandbox online per analizzare siti web. Registra screenshot, chiamate HTTP, script JS caricati, cookie, tecnologie e IP.",
      usageTip: "Permette di navigare e ispezionare un sito malevolo o sospetto in totale sicurezza senza aprirlo sul proprio computer.",
      source: "Threat Intel / OSINT",
      rating: 5
    },
    {
      id: "wayback-machine",
      name: "Wayback Machine (Archive.org)",
      category: "network",
      url: "https://web.archive.org/",
      access: ["free", "nologin", "web"],
      description: "Archivio digitale universale che conserva miliardi di snapshot storici di pagine web dal 1996 ad oggi.",
      usageTip: "Cerca versioni passate della pagina 'Chi siamo' o 'Contatti' per trovare email e nomi di dipendenti rimossi.",
      source: "Internet Archive",
      rating: 5
    },
    {
      id: "fofa",
      name: "FOFA",
      category: "network",
      url: "https://fofa.info/",
      access: ["free", "freemium", "web"],
      description: "Motore di ricerca cyberspaziale leader in Asia, eccellente per rilevare apparati di rete, telecamere e servizi web esposti.",
      usageTip: "Sintassi potente: domain=\"target.com\" || host=\"target.com\".",
      source: "Mike Holcomb Course",
      rating: 4
    },

    // --- LEAKS & CREDENZIALI ---
    {
      id: "haveibeenpwned",
      name: "Have I Been Pwned (HIBP)",
      category: "breaches",
      url: "https://haveibeenpwned.com/",
      access: ["free", "nologin", "web"],
      description: "Servizio di Troy Hunt con oltre 14 miliardi di account violati. Dice esattamente in quali violazioni compare l'email e i tipi di dati.",
      usageTip: "Controlla la lista dei data breaches per sapere quali tipologie di dati personali sono trapelati (es. password, indirizzi fisici, IP).",
      source: "Troy Hunt / Universal Standard",
      rating: 5
    },
    {
      id: "dehashed",
      name: "DeHashed",
      category: "breaches",
      url: "https://www.dehashed.com/",
      access: ["free", "freemium", "web"],
      description: "Motore di ricerca violazioni di sicurezza che supporta query per email, username, hash, IP, nominativo e numero di telefono.",
      usageTip: "La ricerca base mostra preview gratuita dei record associati all'identità.",
      source: "The Cyber Mentor Course",
      rating: 5
    },
    {
      id: "intelx",
      name: "Intelligence X",
      category: "breaches",
      url: "https://intelx.io/",
      access: ["free", "freemium", "web"],
      description: "Motore di ricerca per deep web, darknet, dump di pastebin, forum di hacker e leak storici di governi e aziende.",
      usageTip: "Permette di cercare domini, email, selettori IP o hash e scaricare estratti di file di dump.",
      source: "Peter Kleissner / OSINT Standard",
      rating: 5
    },
    {
      id: "grep-app",
      name: "Grep.app",
      category: "breaches",
      url: "https://grep.app/",
      access: ["free", "nologin", "web"],
      description: "Cerca all'interno di oltre mezzo milione di repository pubblici GitHub con matching regex istantaneo.",
      usageTip: "Trova chiavi API hardcoded, endpoint interni dimenticati e credenziali esposte dagli sviluppatori.",
      source: "Code OSINT",
      rating: 5
    },

    // --- AEREI & NAVI (TRASPORTI) ---
    {
      id: "adsb-exchange",
      name: "ADS-B Exchange",
      category: "transport",
      url: "https://globe.adsbexchange.com/",
      access: ["free", "nologin", "web"],
      description: "La più grande rete di ricezione ADS-B non filtrata al mondo. Non censura jet privati, aerei governativi o militari.",
      usageTip: "Filtra con il tasto 'Military' (tasto U) per visualizzare istantaneamente solo aerei militari e governativi in volo.",
      source: "11 Free OSINT Tools (YouTube: q4JpeFXY454)",
      rating: 5
    },
    {
      id: "flightradar24",
      name: "Flightradar24",
      category: "transport",
      url: "https://www.flightradar24.com/",
      access: ["free", "nologin", "web"],
      description: "La mappa commerciale di tracciamento voli civili più famosa, con dettagli sul modello aeromobile, rotte e storico decolli.",
      usageTip: "Ottimo per verificare orari effettivi di atterraggio, ritardi e condizioni meteo negli aeroporti.",
      source: "Flight Tracking Standard",
      rating: 4
    },
    {
      id: "marinetraffic",
      name: "MarineTraffic",
      category: "transport",
      url: "https://www.marinetraffic.com/",
      access: ["free", "nologin", "web"],
      description: "Mappa globale interattiva basata su transponder AIS per navi commerciali, traghetti, pescherecci e superyacht.",
      usageTip: "Cerca per nome nave, MMSI o numero IMO per visualizzare foto dell'imbarcazione e porto di destinazione.",
      source: "Maritime OSINT",
      rating: 5
    },
    {
      id: "vesselfinder",
      name: "VesselFinder",
      category: "transport",
      url: "https://www.vesselfinder.com/",
      access: ["free", "nologin", "web"],
      description: "Alternativa eccellente e ad accesso rapido a MarineTraffic per posizioni e rotte AIS in tempo reale.",
      usageTip: "Fornisce informazioni chiare sull'armatore, bandiera e caratteristiche fisiche della stazza.",
      source: "Maritime OSINT",
      rating: 4
    },
    {
      id: "liveatc",
      name: "LiveATC.net",
      category: "transport",
      url: "https://www.liveatc.net/",
      access: ["free", "nologin", "web"],
      description: "Streaming audio in diretta e archivio delle comunicazioni radio tra piloti e controllori del traffico aereo di centinaia di aeroporti.",
      usageTip: "Permette di ascoltare le conversazioni in tempo reale in caso di atterraggi di emergenza o scali VIP.",
      source: "Aviation OSINT",
      rating: 4
    },

    // --- AZIENDE & REGISTRI ---
    {
      id: "opencorporates",
      name: "OpenCorporates",
      category: "business",
      url: "https://opencorporates.com/",
      access: ["free", "nologin", "web"],
      description: "Il più esteso database aperto di società commerciali al mondo con oltre 200 milioni di aziende censite e dati su amministratori.",
      usageTip: "Cerca il nome di un individuo per vedere tutte le società in cui ricopre cariche di amministratore o socio.",
      source: "Mike Holcomb / Open Data",
      rating: 5
    },
    {
      id: "sec-edgar",
      name: "SEC EDGAR Search",
      category: "business",
      url: "https://www.sec.gov/edgar/searchedgar/companysearch",
      access: ["free", "nologin", "web"],
      description: "Database della borsa valori statunitense con i depositi finanziari obbligatori (10-K, 8-K, prospetti azionari e stipendi dei vertici).",
      usageTip: "Cerca accordi materiali, fornitori critici e proprietà immobiliari societarie depositate nei contratti.",
      source: "Financial OSINT Standard",
      rating: 5
    },
    {
      id: "occrp-aleph",
      name: "OCCRP Aleph",
      category: "business",
      url: "https://aleph.occrp.org/",
      access: ["free", "web"],
      description: "Piattaforma del consorzio giornalistico investigativo che raccoglie banche dati pubbliche, leak bancari e sanzioni internazionali.",
      usageTip: "Ideale per indagini su oligarchi, persone politicamente esposte (PEP) e criminalità organizzata transnazionale.",
      source: "Investigative Journalism Standard",
      rating: 5
    },

    // --- FRAMEWORKS & AUTOMAZIONE ---
    {
      id: "osint-framework",
      name: "OSINT Framework Web Tree",
      category: "frameworks",
      url: "https://osintframework.com/",
      access: ["free", "nologin", "web"],
      description: "Il più famoso albero gerarchico navigabile di risorse OSINT organizzato per tipologia di selettore di partenza.",
      usageTip: "Usalo per orientarti quando ti trovi con un dato insolito (es. targa veicolo, codice ICAO o file torrent).",
      source: "osintframework.com",
      rating: 5
    },
    {
      id: "spiderfoot",
      name: "SpiderFoot",
      category: "frameworks",
      url: "https://github.com/smicallef/spiderfoot",
      access: ["free", "cli", "web"],
      description: "Piattaforma di automazione OSINT che interroga contemporaneamente oltre 100 moduli (Whois, Shodan, Pastebin, HIBP).",
      usageTip: "Può essere lanciato localmente con interfaccia web visuale per generare grafi di correlazione completi.",
      source: "Steve Micallef / TCM Course",
      rating: 5
    },
    {
      id: "theharvester",
      name: "theHarvester",
      category: "frameworks",
      url: "https://github.com/laramies/theHarvester",
      access: ["free", "cli"],
      description: "Tool classico in Python per raccogliere email, sottodomini, host, dipendenti e porte aperte utilizzando motori di ricerca pubblici.",
      usageTip: "Esegui: theHarvester -d target.com -b google,bing,crtsh,linkedin",
      source: "The Cyber Mentor Course",
      rating: 5
    },
    {
      id: "maltego",
      name: "Maltego",
      category: "frameworks",
      url: "https://www.maltego.com/",
      access: ["freemium", "web"],
      description: "Software grafico per link analysis e visualizzazione relazionale tra entità (persone, email, domini, indirizzi IP, aziende).",
      usageTip: "La versione Community Edition è gratuita e consente trasformazioni fino a 12 nodi relazionali per volta.",
      source: "Industry Standard Link Analysis",
      rating: 4
    },
    // --- NUOVI STRUMENTI DA GITHUB TOPIC & RECORDED FUTURE ---
    {
      id: "maigret",
      name: "Maigret",
      category: "username",
      url: "https://github.com/soxoj/maigret",
      access: ["free", "cli"],
      description: "Evoluzione avanzata di Sherlock: raccoglie dossier completi su una persona partendo dal nickname su oltre 3.000 siti, estraendo bio, avatar, email e cercando ricorsivamente i nuovi alias scoperti.",
      usageTip: "python -m maigret target_username --pdf --all-sites",
      source: "GitHub Topic #osint (38k+ stars)",
      rating: 5
    },
    {
      id: "ghunt",
      name: "GHunt",
      category: "email",
      url: "https://github.com/mxrch/GHunt",
      access: ["free", "cli"],
      description: "Framework investigativo specializzato negli account Google: estrae Google ID, recensioni Google Maps con geolocalizzazione, album Google Foto, eventi pubblici Calendar, canali YouTube e modelli di dispositivi utilizzati.",
      usageTip: "ghunt email target@gmail.com",
      source: "GitHub Topic #osint (19k+ stars)",
      rating: 5
    },
    {
      id: "web-check",
      name: "Web-Check",
      category: "network",
      url: "https://github.com/lissy93/web-check",
      access: ["free", "web", "cli"],
      description: "Suite OSINT all-in-one per l'ispezione istantanea di qualsiasi sito web: IP, server location, certificati SSL, record DNS completi, cookie, header di sicurezza, redirect chains, porte aperte e tecnologie usate.",
      usageTip: "Esegui via web o in locale: docker run -p 3000:3000 lissy93/web-check",
      source: "GitHub Topic #osint-tools (34k+ stars)",
      rating: 5
    },
    {
      id: "singlefile",
      name: "SingleFile",
      category: "frameworks",
      url: "https://github.com/gildas-lormeau/SingleFile",
      access: ["free", "web", "cli"],
      description: "Estensione web e CLI per preservare copie forensi complete e inalterabili di pagine web in un unico file HTML autonomo (con immagini, font e stili incorporati). Essenziale per la catena di custodia legale delle prove.",
      usageTip: "Salva con un clic la pagina prima che il target la cancelli, oppure da CLI: single-file https://target.com/page report.html",
      source: "GitHub Topic #osint (22k+ stars)",
      rating: 5
    },
    {
      id: "subfinder",
      name: "Subfinder",
      category: "network",
      url: "https://github.com/projectdiscovery/subfinder",
      access: ["free", "cli"],
      description: "Il tool più veloce al mondo per l'enumerazione passiva di sottodomini, interrogando contemporaneamente oltre 30 fonti e banche dati passive senza inviare pacchetti al server target.",
      usageTip: "subfinder -d target.com -o subdomains.txt -silent",
      source: "ProjectDiscovery (14k+ stars)",
      rating: 5
    },
    {
      id: "amass",
      name: "OWASP Amass",
      category: "network",
      url: "https://github.com/owasp-amass/amass",
      access: ["free", "cli"],
      description: "Framework professionale di in-depth attack surface mapping e network discovery dell'OWASP: correla AS numbers, blocchi IP CIDR, record DNS e registri di routing.",
      usageTip: "amass enum -passive -d target.com -dir ./amass_out",
      source: "OWASP Foundation (15k+ stars)",
      rating: 5
    },
    {
      id: "photon",
      name: "Photon",
      category: "network",
      url: "https://github.com/s0md3v/Photon",
      access: ["free", "cli"],
      description: "Crawler web ultra-veloce progettato per OSINT: naviga il sito bersaglio estraendo automaticamente indirizzi email, account social, sottodomini, endpoint interni, file PDF/DOC e chiavi API.",
      usageTip: "python photon.py -u https://target.com --keys --dns",
      source: "GitHub Topic #osint (13k+ stars)",
      rating: 5
    },
    {
      id: "toutatis",
      name: "Toutatis",
      category: "socmint",
      url: "https://github.com/megadose/toutatis",
      access: ["free", "cli"],
      description: "Strumento OSINT avanzato per Instagram: permette di estrarre l'User ID numerico permanente, porzioni oscurate di email e numero telefonico associato per la verifica incrociata.",
      usageTip: "toutatis -u target_username -s 'sessionid'",
      source: "GitHub Topic #osint-tools (4.3k+ stars)",
      rating: 5
    },
    {
      id: "metagoofil",
      name: "Metagoofil",
      category: "documents",
      url: "https://github.com/laramies/metagoofil",
      access: ["free", "cli"],
      description: "Tool specializzato nell'estrazione di metadati da documenti pubblici (PDF, DOC, XLS, PPT) scaricati da un dominio bersaglio: scopre username di rete interna, nomi di stampanti, versioni software e percorsi di cartelle locali.",
      usageTip: "metagoofil -d target.com -t pdf,docx,xlsx -l 50 -n 20 -o target_docs -f metadata_report.html",
      source: "Christian Martorella / Kali Linux",
      rating: 5
    },
    {
      id: "bgpview",
      name: "BGPView",
      category: "network",
      url: "https://bgpview.io/",
      access: ["free", "nologin", "web"],
      description: "Piattaforma di analisi del routing BGP mondiale: permette di tracciare ASN (Autonomous System Numbers), prefissi IP, carrier upstream/downstream e relazioni di peering tra ISP.",
      usageTip: "Inserisci l'indirizzo IP del target per scoprire l'ASN e l'infrastruttura di connettività reale del provider di hosting.",
      source: "Recorded Future OSINT 101",
      rating: 5
    },
    {
      id: "builtwith",
      name: "BuiltWith",
      category: "network",
      url: "https://builtwith.com/",
      access: ["free", "nologin", "web"],
      description: "Profiler tecnologico web: identifica CMS, server, librerie JavaScript e soprattutto codici di tracciamento (Google Analytics UA/G-, Google AdSense pub-). Permette di trovare tutti gli altri siti web appartenenti alla stessa persona o azienda!",
      usageTip: "Copia il codice Google Analytics (es. UA-XXXXX o G-XXXXX) o AdSense e cerca su BuiltWith / DNSlytics per scoprire la galassia di siti dello stesso proprietario.",
      source: "Recorded Future OSINT 101",
      rating: 5
    },
    {
      id: "mitaka",
      name: "Mitaka",
      category: "frameworks",
      url: "https://github.com/ninoseki/mitaka",
      access: ["free", "web"],
      description: "Estensione browser essenziale per investigatori e analisti cyber: seleziona qualsiasi indicatore di compromissione (IP, dominio, hash SHA-256, URL, wallet Bitcoin/Ethereum, CVE) e aprilo con un clic su oltre 60 motori OSINT.",
      usageTip: "Installa l'estensione su Firefox o Chrome: click destro su un selettore per pivotare istantaneamente su Shodan, VirusTotal, Censys o Etherscan.",
      source: "Recorded Future OSINT 101 / Ninoseki",
      rating: 5
    },
    {
      id: "triage-sandbox",
      name: "Tria.ge Sandbox",
      category: "frameworks",
      url: "https://tria.ge/",
      access: ["free", "web"],
      description: "Sandbox interattiva gratuita per analizzare campioni di file sospetti, documenti Office o link web senza alcun rischio per la propria macchina.",
      usageTip: "Carica PDF o documenti allegati a email di phishing per estrarre URL malevoli nascosti, macro o comandi PowerShell incorporati.",
      source: "Recorded Future OSINT 101",
      rating: 5
    },
    {
      id: "breadcrumbs-crypto",
      name: "Breadcrumbs.app",
      category: "crypto",
      url: "https://www.breadcrumbs.app/",
      access: ["free", "freemium", "web"],
      description: "Piattaforma investigativa visuale per il tracciamento di transazioni su blockchain (Bitcoin, Ethereum, Polygon). Permette di mappare i flussi di denaro, identificare cluster di wallet noti (exchange, mixer, ransomware) e generare grafi di correlazione.",
      usageTip: "Inserisci l'indirizzo wallet per visualizzare graficamente da dove arrivano i fondi e su quali exchange centralizzati (con KYC) sono stati trasferiti.",
      source: "Crypto OSINT Standard",
      rating: 5
    },
    {
      id: "walletexplorer",
      name: "WalletExplorer",
      category: "crypto",
      url: "https://www.walletexplorer.com/",
      access: ["free", "nologin", "web"],
      description: "Algoritmo di clustering intelligente per la blockchain di Bitcoin: raggruppa automaticamente indirizzi differenti che appartengono allo stesso wallet o alla stessa entità commerciale/exchange.",
      usageTip: "Se trovi un indirizzo BTC in un leak o riscatto, cercalo per scoprire se fa parte di un wallet già identificato o di un servizio noto.",
      source: "Aleš Janda / Blockchain OSINT",
      rating: 5
    },
    {
      id: "onionsearch",
      name: "OnionSearch",
      category: "darkweb",
      url: "https://github.com/megadose/OnionSearch",
      access: ["free", "cli"],
      description: "Tool Python da terminale che interroga simultaneamente molteplici motori di ricerca Tor/Darknet (Ahmia, Torch, Haystak, Excovo, DarkSearch) senza dover aprire Tor Browser per ciascuno.",
      usageTip: "onionsearch 'target_keyword' --engines ahmia,torch,haystak --output results.txt",
      source: "GitHub Topic #osint-tools (1.8k+ stars)",
      rating: 5
    },
    {
      id: "ahmia",
      name: "Ahmia.fi",
      category: "darkweb",
      url: "https://ahmia.fi/",
      access: ["free", "nologin", "web"],
      description: "Il motore di ricerca per servizi nascosti Tor (.onion) più rispettato e accessibile anche da web normale (clearnet), filtrando contenuti illeciti estremi.",
      usageTip: "Cerca domini, email o nomi aziendali per rilevare fughe di notizie o menzioni nei forum darknet indicizzati.",
      source: "Tor Project Partner",
      rating: 5
    }
  ],

  // --- PLAYBOOK PER TASK OPERATIVI ---
  playbooks: [
    {
      id: "task-geoint-exif",
      title: "Geolocalizzazione con Metadati EXIF",
      badge: "GEOINT / Forense",
      icon: "bi-camera-fill",
      summary: "Estrarre coordinate GPS, timestamp esatto e modello fotocamera da fotografie non alterate.",
      difficulty: "Bassa",
      estTime: "5 - 15 minuti",
      opsecLevel: "Basso (Lavoro locale su file)",
      steps: [
        {
          num: 1,
          title: "Preservazione Forense della Prova",
          desc: "Calcola l'hash SHA-256 del file prima di aprirlo. Non caricarlo mai direttamente online se l'indagine è confidenziale. Lavora sempre su una copia duplicata."
        },
        {
          num: 2,
          title: "Estrazione Completa Metadati",
          desc: "Utilizza ExifTool da terminale con il comando 'exiftool -a -u -g1 immagine.jpg' oppure visualizzatori web come Jeffrey's Image Metadata Viewer."
        },
        {
          num: 3,
          title: "Analisi Coordinate & Quota",
          desc: "Verifica se sono presenti i campi 'GPS Latitude', 'GPS Longitude', 'GPS Altitude' e 'GPS Img Direction' (bussola al momento dello scatto)."
        },
        {
          num: 4,
          title: "Proiezione Cartografica",
          desc: "Converti i valori in gradi decimali e posizionali su Google Earth Pro e OpenStreetMap per confermare l'angolo di visuale."
        },
        {
          num: 5,
          title: "Verifica Congruenza Temporale",
          desc: "Controlla il fuso orario (tag 'OffsetTimeOriginal'). Usa SunCalc per confermare che l'inclinazione dell'ombra coincida con l'ora dichiarata."
        }
      ],
      checklist: [
        "Calcolato hash SHA-256 del file originale",
        "Eseguito ExifTool per estrarre tutti i campi metadati",
        "Individuati tag GPS (Latitudine, Longitudine, Altitudine)",
        "Coordinate inserite su mappa (Google Earth / OSM)",
        "Confrontata la direzione bussola (Img Direction) con la scena",
        "Verificato timestamp e compatibilità con le ombre solari"
      ],
      recommendedToolIds: ["exiftool", "jeffreys-exif", "jpegsnoop", "google-earth-pro", "suncalc"],
      commonPitfalls: "I social network (Facebook, Instagram, WhatsApp, X) eliminano sempre i metadati EXIF durante il compression upload. I metadati resistono solo se l'immagine è scaricata da archivi cloud (Google Drive, DropBox), via email, o via Telegram spedita come 'File' non compresso."
    },
    {
      id: "task-geoint-no-exif",
      title: "Geolocalizzazione SENZA Metadati (IMINT Puro)",
      badge: "GEOINT Avanzato",
      icon: "bi-geo-alt-fill",
      summary: "Trovare il luogo esatto al mondo basandosi unicamente su indizi visivi, architettura, ombre, query OSM e reverse search.",
      difficulty: "Alta",
      estTime: "30 min - diverse ore",
      opsecLevel: "Medio",
      steps: [
        {
          num: 1,
          title: "Decomposizione Visiva a Griglia",
          desc: "Dividi l'immagine in quadranti. Annota: cartelli stradali, senso di guida, prese elettriche, forma dei pali della luce, targhe veicoli, alberi e vegetazione, stile dei tetti, condizionatori, tombini."
        },
        {
          num: 2,
          title: "Reverse Image Search Chirurgica (Cropping)",
          desc: "Non cercare la foto intera! Ritaglia singoli dettagli unici: una facciata di una chiesa, un logo commerciale sfocato, un monumento. Esegui la ricerca su Yandex Images (il più forte per architettura) e Google Lens."
        },
        {
          num: 3,
          title: "Query Geospaziale con Overpass Turbo (OpenStreetMap)",
          desc: "Se hai 2 o più elementi certi (es. 'stazione di rifornimento' a meno di 150m da un 'ponte ferroviario' e una 'chiesa'), formula una query Overpass QL per filtrare solo i punti geografici compatibili."
        },
        {
          num: 4,
          title: "Analisi delle Ombre e del Sole con SunCalc",
          desc: "Trova un oggetto verticale retto (palo, palo stradale). Traccia la direzione dell'ombra per determinare il Nord e calcolare l'ora o la stagione con SunCalc."
        },
        {
          num: 5,
          title: "Confronto Orizzonte Montuoso con PeakFinder",
          desc: "Se nello sfondo ci sono catene montuose, allinea il profilo delle creste su PeakFinder.org per stabilire il punto di scatto e l'azimut di osservazione."
        },
        {
          num: 6,
          title: "Convalida a Livello Stradale (Ground Truth)",
          desc: "Posizionati con Google Street View, Mapillary o KartaView per validare la prospettiva al millimetro."
        }
      ],
      checklist: [
        "Catalogati tutti gli indizi visivi (lingua, cartelli, infrastruttura, flora)",
        "Eseguito reverse image su Yandex e Lens ritagliando dettagli specifici",
        "Formulate query su Overpass Turbo combinando almeno 2 tag OSM",
        "Analizzata la direzione delle ombre solari su SunCalc",
        "Confrontata la skyline delle montagne su PeakFinder (se presenti)",
        "Allineata la fotocamera con Street View / Mapillary / DualMaps"
      ],
      recommendedToolIds: ["overpass-turbo", "yandex-images", "google-lens", "suncalc", "peakfinder", "dualmaps", "mapillary", "geoguessr-tips"],
      commonPitfalls: "Cercare l'immagine intera porta a risultati generici. Il segreto dell'IMINT è il cropping mirato e la query incrociata su OpenStreetMap."
    },
    {
      id: "task-person-username",
      title: "Indagine su Persona da Username / Nickname",
      badge: "PERSONA / Identità",
      icon: "bi-person-badge-fill",
      summary: "Mappare l'intera impronta digitale di un bersaglio a partire da un singolo nickname utilizzato online.",
      difficulty: "Bassa - Media",
      estTime: "15 - 30 minuti",
      opsecLevel: "Basso / Medio",
      steps: [
        {
          num: 1,
          title: "Analisi Lessicale del Nickname",
          desc: "Isola radici, date di nascita presunte (es. mario91), suffissi geografici o parole chiave settoriali. Prepara le varianti di punteggiatura (con punto, underscore, trattino)."
        },
        {
          num: 2,
          title: "Scansione Massiva Multi-Piattaforma",
          desc: "Avvia WhatsMyName.app nel browser per testare oltre 600 siti in pochi secondi, oppure lancia Sherlock da terminale per generare un report CSV."
        },
        {
          num: 3,
          title: "Filtraggio Falsi Positivi",
          desc: "Non fidarti solo del codice HTTP 200. Apri i profili e confronta bio, stile di scrittura, avatar, lingua utilizzata e lista amici per confermare l'identità unica."
        },
        {
          num: 4,
          title: "Analisi Cronologica (Il Profilo più Vecchio)",
          desc: "Individua l'account più antico (es. vecchi forum di videogiochi o profili creati 10 anni prima): sono quelli in cui l'utente lasciava con più ingenuità il proprio nome reale, città o scuola frequentata."
        },
        {
          num: 5,
          title: "Ricerca Facciale sull'Avatar",
          desc: "Se l'utente usa una foto reale come avatar, ritaglia il viso e cercalo su FaceCheck.ID per scovare profili con username differenti."
        }
      ],
      checklist: [
        "Definite varianti sintattiche del nickname",
        "Eseguita scansione su WhatsMyName.app e Sherlock",
        "Verificati i profili trovati (bio, interessi, avatar coerenti)",
        "Individuato il profilo più antico e ricercati dati anagrafici",
        "Eseguita reverse search dell'avatar con FaceCheck.ID o Yandex"
      ],
      recommendedToolIds: ["whatsmyname", "sherlock", "blackbird", "facecheck-id", "namechk"],
      commonPitfalls: "Cadere nella trappola dell'omonimia: utenti diversi possono usare lo stesso nickname comune su piattaforme diverse. Valida sempre con elementi di contesto (stessa città, stessi hobby, stesse amicizie)."
    },
    {
      id: "task-person-email",
      title: "Indagine da Indirizzo Email",
      badge: "EMAIL / Identità",
      icon: "bi-envelope-at-fill",
      summary: "Trovare profilo Google, recensioni Maps, account registrati e violazioni di sicurezza da un'email.",
      difficulty: "Media",
      estTime: "15 - 30 minuti",
      opsecLevel: "Basso (Zero notifiche al bersaglio)",
      steps: [
        {
          num: 1,
          title: "Verifica Tecnica del Server Mail",
          desc: "Controlla i record MX e la validità della casella con EmailHippo per assicurarti che non sia un indirizzo fake o un catch-all."
        },
        {
          num: 2,
          title: "Estrazione Profilo Google Silenziosa",
          desc: "Inserisci l'email su Epieos.com per recuperare senza allarmi il Google ID, il nome e cognome reale impostato, l'avatar ad alta risoluzione e la cronologia recensioni su Google Maps."
        },
        {
          num: 3,
          title: "Verifica Iscrizione a Piattaforme (Holehe)",
          desc: "Lancia Holehe da terminale ('holehe target@gmail.com') per testare oltre 120 servizi (Twitter, Airbnb, Deliveroo, LinkedIn, Spotify) sfruttando gli endpoint di login senza inviare notifiche."
        },
        {
          num: 4,
          title: "Controllo Data Breaches e Leak di Password",
          desc: "Verifica su Have I Been Pwned e DeHashed per capire se l'email compare in fughe di dati e scoprire vecchie password o indirizzi IP associati."
        }
      ],
      checklist: [
        "Verificata esistenza della casella con EmailHippo",
        "Estratto profilo Google e recensioni Maps su Epieos",
        "Eseguito Holehe per mappare i 120+ servizi a cui è iscritto",
        "Verificata presenza in data breach con HaveIBeenPwned e DeHashed",
        "Annotata città di residenza derivata dalle recensioni Maps"
      ],
      recommendedToolIds: ["epieos", "holehe", "haveibeenpwned", "dehashed", "emailhippo", "hunter-io", "castrickclues"],
      commonPitfalls: "NON cliccare mai su 'Ho dimenticato la password' manualmente nel browser! Ciò invierebbe un SMS o un'email di allarme al bersaglio bruciando l'indagine. Usa tool passivi che si fermano alla verifica preliminare."
    },
    {
      id: "task-person-phone",
      title: "Indagine da Numero di Telefono",
      badge: "TELEFONIA",
      icon: "bi-telephone-fill",
      summary: "Determinare gestore telefonico, natura VoIP/Mobile, nominativo e profili di messaggistica associati.",
      difficulty: "Media",
      estTime: "20 minuti",
      opsecLevel: "Alto (Rischio notifica di lettura su app)",
      steps: [
        {
          num: 1,
          title: "Formattazione E.164 & Carrier Lookup",
          desc: "Converti il numero in formato internazionale (es. +39 340 1234567). Usa CarrierLookup e PhoneInfoga per verificare se si tratta di numero cellulare, fisso o VoIP temporaneo."
        },
        {
          num: 2,
          title: "Lookup Elenchi Comunitari (Caller ID)",
          desc: "Verifica su Truecaller Web e Sync.me utilizzando una sessione anonima e un account fittizio per scoprire con quale nome e cognome è salvato nelle rubriche di altri utenti."
        },
        {
          num: 3,
          title: "Verifica App di Messaggistica (OPSEC Rigorosa)",
          desc: "Salva il numero nella rubrica di un burner phone con SIM secondaria dedicata. Apri WhatsApp, Telegram e Signal per visualizzare foto profilo, bio e ultimo accesso."
        },
        {
          num: 4,
          title: "Dorking del Numero di Telefono",
          desc: "Cerca su Google il numero racchiuso tra virgolette in vari formati: '+393401234567', '340 1234567', '340-1234567', '340.1234567' per trovare annunci su Subito, eBay o forum."
        }
      ],
      checklist: [
        "Normalizzato numero in standard E.164",
        "Verificato tipo di linea (VoIP vs Cellulare reale)",
        "Interrogati Truecaller e Sync.me con account sock puppet",
        "Verificata foto profilo e bio su WhatsApp / Telegram su telefono isolato",
        "Eseguiti Google Dorks con tutte le varianti di spaziatura"
      ],
      recommendedToolIds: ["phoneinfoga", "truecaller-web", "sync-me", "carrierlookup", "castrickclues"],
      commonPitfalls: "Non chiamare mai direttamente il numero e non sincronizzare la rubrica del proprio telefono personale con Truecaller, altrimenti caricherai i dati privati dei tuoi amici sui loro server."
    },
    {
      id: "task-network-domain",
      title: "Mappatura Dominio, Rete e Sottodomini",
      badge: "CYBER OSINT",
      icon: "bi-hdd-network-fill",
      summary: "Ricostruire l'infrastruttura web, scoprire sottodomini nascosti, server originari e record DNS storici.",
      difficulty: "Media",
      estTime: "20 - 40 minuti",
      opsecLevel: "Basso (Recon passiva)",
      steps: [
        {
          num: 1,
          title: "Enumerazione Sottodomini via Certificate Transparency",
          desc: "Interroga crt.sh inserendo '%.target.com'. Ogni certificato SSL emesso negli ultimi anni è registrato pubblicamente e rivela sottodomini interni (es. dev, vpn, mail, admin, staging)."
        },
        {
          num: 2,
          title: "Mappatura DNS & Grafo con DNSDumpster",
          desc: "Inserisci il dominio su DNSDumpster per ottenere tutti i record A, MX, TXT e il grafo relazionale dei server con i rispettivi fornitori di hosting."
        },
        {
          num: 3,
          title: "Bypass CDN e Ricerca IP Originario con SecurityTrails",
          desc: "Se il sito è protetto da Cloudflare, controlla lo storico dei record DNS (A record history) per vedere quale indirizzo IP ospitava il sito prima del passaggio a Cloudflare."
        },
        {
          num: 4,
          title: "Ispezione Sandbox con Urlscan.io",
          desc: "Esegui una scansione su Urlscan.io per visualizzare lo screenshot del sito, le tecnologie usate, i server contattati, i file JavaScript esterni e i cookie impostati in sicurezza."
        },
        {
          num: 5,
          title: "Ricerca Storica su Wayback Machine",
          desc: "Consulta Archive.org per esaminare versioni precedenti del portale, documenti rimossi o vecchi elenchi del personale."
        }
      ],
      checklist: [
        "Estratti tutti i sottodomini tramite crt.sh",
        "Mappati record DNS e indirizzi IP su DNSDumpster",
        "Controllato lo storico DNS su SecurityTrails per individuare il server originario",
        "Eseguita analisi sandbox su Urlscan.io",
        "Esplorati snapshot storici su Wayback Machine"
      ],
      recommendedToolIds: ["crt-sh", "dnsdumpster", "securitytrails", "urlscan", "wayback-machine", "theharvester"],
      commonPitfalls: "Evita scansioni attive aggressive con nmap prima di aver sfruttato tutti i dati passivi: crt.sh e DNSDumpster offrono l'80% delle informazioni senza inviare un singolo pacchetto al server bersaglio."
    },
    {
      id: "task-network-iot",
      title: "Scansione Dispositivi Connessi e IoT (Shodan / Censys)",
      badge: "CYBER OSINT",
      icon: "bi-hdd-fill",
      summary: "Individuare server, telecamere, router e apparati industriali esposti su Internet senza scansioni attive.",
      difficulty: "Media - Alta",
      estTime: "30 minuti",
      opsecLevel: "Basso (Interrogazione banche dati terze)",
      steps: [
        {
          num: 1,
          title: "Definizione Selettori di Ricerca",
          desc: "Determina l'indirizzo IP, il blocco di rete CIDR (es. net:192.0.2.0/24), l'organizzazione (org:\"Nome Società\") o la città."
        },
        {
          num: 2,
          title: "Interrogazione Shodan.io",
          desc: "Cerca servizi esposti: porte aperte (21 FTP, 22 SSH, 80 HTTP, 443 HTTPS, 554 RTSP, 3389 RDP). Verifica se ci sono banner con software obsoleti."
        },
        {
          num: 3,
          title: "Controllo Incrociato con Censys e FOFA",
          desc: "Interroga Censys Search e FOFA per completare la panoramica su certificati SSL emessi e porte non rilevate da Shodan."
        },
        {
          num: 4,
          title: "Ricerca Telecamere e Sistemi ICS/SCADA",
          desc: "Se l'obiettivo è la verifica di impianti industriali, utilizza dork per protocolli industriali (es. Modbus porta 502, Siemens S7 porta 102, BACnet porta 47808)."
        }
      ],
      checklist: [
        "Definito intervallo IP o filtro organizzazione",
        "Identificate porte aperte e servizi in ascolto su Shodan",
        "Esaminati i banner di risposta dei server per individuare versioni software",
        "Eseguito controllo incrociato su Censys e FOFA",
        "Verificata la presenza di webcam o pannelli di controllo aperti"
      ],
      recommendedToolIds: ["shodan", "censys", "fofa", "insecam", "urlscan"],
      commonPitfalls: "Non tentare mai l'accesso o exploit alle credenziali dei dispositivi trovati: l'OSINT si ferma rigorosamente all'analisi delle informazioni pubbliche."
    },
    {
      id: "task-transport-flights",
      title: "Tracciamento Voli e Jet Privati (ADS-B)",
      badge: "TRASPORTI",
      icon: "bi-airplane-fill",
      summary: "Monitorare spostamenti aerei in tempo reale e rotte storiche senza filtri di censura.",
      difficulty: "Bassa",
      estTime: "15 minuti",
      opsecLevel: "Basso",
      steps: [
        {
          num: 1,
          title: "Recupero Codice ICAO o Immatricolazione (Tail Number)",
          desc: "Trova la targa dell'aereo (Tail Number, es. N12345, I-XXXX) o il codice ICAO esadecimale a 24 bit."
        },
        {
          num: 2,
          title: "Tracciamento Senza Filtri su ADS-B Exchange",
          desc: "Apri globe.adsbexchange.com e cerca il codice ICAO. A differenza di Flightradar24, ADS-B Exchange non accetta richieste di rimozione da parte di VIP o governi."
        },
        {
          num: 3,
          title: "Confronto Orari e Storico con Flightradar24 / FlightAware",
          desc: "Verifica l'aeroporto di origine, la destinazione stimata, la rotta e l'altitudine di crociera."
        },
        {
          num: 4,
          title: "Ascolto Comunicazioni Torre di Controllo (LiveATC)",
          desc: "Se il volo sta atterrando o ha dichiarato emergenza, sintonizzati sulla frequenza ATC dell'aeroporto tramite LiveATC.net."
        }
      ],
      checklist: [
        "Ottenuto Tail Number o codice esadecimale ICAO",
        "Verificata la posizione attuale su ADS-B Exchange",
        "Controllato lo storico delle tratte degli ultimi 7 giorni",
        "Identificata la proprietà dell'aeromobile su registri FAA/ENAC",
        "Consultato LiveATC se necessario"
      ],
      recommendedToolIds: ["adsb-exchange", "flightradar24", "liveatc"],
      commonPitfalls: "Molti voli governativi o di personalità note richiedono il blocco sui portali commerciali come Flightradar24: in questi casi la fonte definitiva è SEMPRE ADS-B Exchange."
    },
    {
      id: "task-transport-maritime",
      title: "Tracciamento Navale e Imbarcazioni (AIS)",
      badge: "TRASPORTI",
      icon: "bi-water",
      summary: "Tracciare petroliere, mercantili e yacht tramite trasmissioni radio satellitari e terrestri AIS.",
      difficulty: "Bassa",
      estTime: "15 minuti",
      opsecLevel: "Basso",
      steps: [
        {
          num: 1,
          title: "Identificazione MMSI o IMO della Nave",
          desc: "Recupera il codice MMSI (9 cifre) o il numero IMO (7 cifre univoche assegnate alla costruzione della nave)."
        },
        {
          num: 2,
          title: "Consultazione Transponder AIS su MarineTraffic",
          desc: "Cerca la nave su MarineTraffic per visualizzare rotta attuale, velocità, porto di partenza e arrivo previsto (ETA)."
        },
        {
          num: 3,
          title: "Verifica Alternativa su VesselFinder",
          desc: "Controlla la copertura con VesselFinder per accedere alle posizioni fornite da stazioni terrestri alternative."
        },
        {
          num: 4,
          title: "Analisi Webcams Portuali",
          desc: "Utilizza Windy Webcams per verificare visivamente l'attracco della nave nel porto indicato."
        }
      ],
      checklist: [
        "Identificato codice MMSI o IMO dell'imbarcazione",
        "Tracciata la posizione geografica attuale su MarineTraffic",
        "Confrontata la rotta con VesselFinder",
        "Verificato porto di destinazione e stato del carico",
        "Consultate webcam portuali con Windy Webcams"
      ],
      recommendedToolIds: ["marinetraffic", "vesselfinder", "windy-webcams"],
      commonPitfalls: "In aree di conflitto o durante attività illecite, le navi possono spegnere il transponder AIS ('Going Dark') o effettuare AIS spoofing simulando posizioni fittizie."
    },
    {
      id: "task-corporate-osint",
      title: "Corporate OSINT & Mappatura Societaria",
      badge: "AZIENDE / Business",
      icon: "bi-briefcase-fill",
      summary: "Ricostruire partecipazioni azionarie, beneficiari effettivi, filiali estere e contratti aziendali.",
      difficulty: "Media",
      estTime: "30 - 60 minuti",
      opsecLevel: "Basso",
      steps: [
        {
          num: 1,
          title: "Ricerca su OpenCorporates",
          desc: "Cerca la ragione sociale esatta o il nome dell'amministratore per visualizzare tutte le società registrate e le giurisdizioni attive."
        },
        {
          num: 2,
          title: "Analisi Depositi Borsa (SEC EDGAR)",
          desc: "Per aziende quotate o con controllanti negli USA, scarica i modelli annuali 10-K per conoscere accordi di fornitura, sussidiarie e rischi legali."
        },
        {
          num: 3,
          title: "Verifica Anti-Corruzione su OCCRP Aleph",
          desc: "Interroga il database OCCRP Aleph per identificare legami con persone politicamente esposte (PEP), elenchi sanzioni e indagini finanziarie."
        },
        {
          num: 4,
          title: "Dorking LinkedIn per Mappatura Organigramma",
          desc: "Usa Google Dorks per estrarre tutti i dipendenti senza interagire con l'azienda: site:linkedin.com/in/ 'Nome Azienda'."
        }
      ],
      checklist: [
        "Consultato OpenCorporates per statuto e amministratori",
        "Scaricati report finanziari da SEC EDGAR (se applicabile)",
        "Eseguito controllo liste sanzioni su OCCRP Aleph",
        "Mappato organigramma dipendenti chiave via LinkedIn Dorking",
        "Salvate prove e visure societarie"
      ],
      recommendedToolIds: ["opencorporates", "sec-edgar", "occrp-aleph", "hunter-io"],
      commonPitfalls: "Attenzione alle società schermo e fiduciarie (nominee directors) che nascondono il reale beneficiario finale nei paradisi fiscali."
    },
    {
      id: "task-crypto-osint",
      title: "Tracciamento Criptovalute & Flussi Blockchain",
      badge: "CRYPTO / Finanza",
      icon: "bi-currency-bitcoin",
      summary: "Mappare transazioni di wallet Bitcoin/Ethereum, identificare cluster di indirizzi ed exchange per riciclaggio o riscatti.",
      difficulty: "Media - Alta",
      estTime: "20 - 45 minuti",
      opsecLevel: "Basso (Consultazione ledger pubblici)",
      steps: [
        {
          num: 1,
          title: "Identificazione del Formato Indirizzo & Blockchain",
          desc: "Determina la rete: Bitcoin Legacy (inizia con 1), SegWit/P2SH (3), Native SegWit (bc1q) o Ethereum/EVM (0x... a 40 caratteri)."
        },
        {
          num: 2,
          title: "Analisi Storico Transazioni & Saldo",
          desc: "Consulta explorer pubblici per visualizzare data della prima transazione, volume totale movimentato e timestamp delle ultime operazioni."
        },
        {
          num: 3,
          title: "Clustering & Identificazione Entità con WalletExplorer",
          desc: "Se l'indirizzo è Bitcoin, cerca su WalletExplorer per verificare se l'algoritmo di coinjoin/clustering lo associa a un exchange noto (Binance, Coinbase, Kraken), mixer o mercato darknet."
        },
        {
          num: 4,
          title: "Mappatura Visuale dei Flussi con Breadcrumbs.app",
          desc: "Carica il wallet su Breadcrumbs.app per tracciare il grafo relazionale dei trasferimenti ed evidenziare gli 'hop' fino al punto di cash-out (exchange KYC)."
        }
      ],
      checklist: [
        "Verificato formato dell'indirizzo e blockchain corretta",
        "Estratti volumi totali movimentati e primo/ultimo timestamp",
        "Interrogato WalletExplorer per clustering di indirizzi correlati",
        "Mappato il grafo dei fondi su Breadcrumbs.app fino a nodi exchange",
        "Salvati hash delle transazioni e snapshot del ledger"
      ],
      recommendedToolIds: ["breadcrumbs-crypto", "walletexplorer", "mitaka"],
      commonPitfalls: "Attenzione ai mixer crittografici (Tornado Cash, Wasabi/CoinJoin) o ai cross-chain bridge che interrompono la linearità della traccia."
    },
    {
      id: "task-doc-metadata",
      title: "Estrazione Metadati Documenti Aziendali (PDF/Office)",
      badge: "FORENSE / File",
      icon: "bi-file-earmark-pdf-fill",
      summary: "Scaricare documenti pubblici di un'organizzazione ed estrarre username interni, server di stampa e versioni software.",
      difficulty: "Bassa - Media",
      estTime: "15 - 30 minuti",
      opsecLevel: "Basso",
      steps: [
        {
          num: 1,
          title: "Harvesting Automatico con Metagoofil",
          desc: "Lancia Metagoofil sul dominio target per individuare e scaricare fino a 50 file PDF, DOCX, XLSX ed estrarre la tabella dei metadati interni."
        },
        {
          num: 2,
          title: "Analisi Utenti & Software di Creazione",
          desc: "Isola i campi 'Creator', 'Author', 'Last Modified By' e 'Producer'. Gli username scoperti sono spesso gli stessi usati per l'accesso VPN, email o dominio Active Directory!"
        },
        {
          num: 3,
          title: "Estrazione Percorsi di Rete Interni (UNC Paths)",
          desc: "Cerca stringhe contenenti lettere di unità ('C:\\Users\\nome\\Documents\\...') o percorsi di server interni ('\\\\fileserver01\\reparto\\...')."
        }
      ],
      checklist: [
        "Eseguito Metagoofil per scaricare documenti pubblici del dominio",
        "Compilata lista degli username interni trovati nei metadati",
        "Identificate versioni software utilizzate dai dipendenti",
        "Mappati percorsi di cartelle locali o server interni esposti"
      ],
      recommendedToolIds: ["metagoofil", "exiftool", "triage-sandbox"],
      commonPitfalls: "I documenti recenti convertiti online o tramite Google Docs possono avere i metadati stripped; concentrati su documenti storici o tecnici."
    },
    {
      id: "task-google-deep",
      title: "Profilazione Avanzata Account Google (GHunt)",
      badge: "EMAIL / Google",
      icon: "bi-google",
      summary: "Estrarre l'intera impronta digitale di un account Google: cronologia recensioni Maps, album Foto, ID utente e dispositivi.",
      difficulty: "Media",
      estTime: "15 - 25 minuti",
      opsecLevel: "Basso (Zero notifiche al bersaglio)",
      steps: [
        {
          num: 1,
          title: "Inizializzazione GHunt con Cookie Sock Puppet",
          desc: "Configura GHunt con le credenziali di un account Google secondario/fittizio per interrogare le API interne di Mountain View in sola lettura."
        },
        {
          num: 2,
          title: "Esecuzione Scansione su Indirizzo Gmail",
          desc: "Lancia 'ghunt email target@gmail.com' per estrarre: Google ID numerico, data di creazione, album Foto pubblici e canali YouTube."
        },
        {
          num: 3,
          title: "Geolocalizzazione Abituale da Recensioni Maps",
          desc: "Esamina la lista delle recensioni lasciate dal target su Google Maps. Spesso consente di identificare il bar sotto casa, il meccanico di fiducia o la palestra, rivelando la città o il quartiere esatto!"
        }
      ],
      checklist: [
        "Configurato GHunt con account sock puppet isolato",
        "Estratto Google ID e foto profilo originale ad alta risoluzione",
        "Verificata presenza di album Google Foto o recensioni Maps",
        "Triangolata la posizione abituale tramite i punti geotaggati delle recensioni"
      ],
      recommendedToolIds: ["ghunt", "epieos", "holehe"],
      commonPitfalls: "Non usare mai il tuo account Google personale per autenticare GHunt, in quanto Google potrebbe revocare la sessione o bloccare i cookie se rileva chiamate massicce."
    },
    {
      id: "task-web-recon",
      title: "Ispezione Completa Sito Web & Superficie d'Attacco",
      badge: "CYBER RECON",
      icon: "bi-globe2",
      summary: "Ottenere in un colpo solo tutte le informazioni tecniche su un sito: DNS, certificati, cookie, tecnologie e sottodomini.",
      difficulty: "Bassa",
      estTime: "10 - 20 minuti",
      opsecLevel: "Basso (Recon passiva)",
      steps: [
        {
          num: 1,
          title: "Scansione All-In-One con Web-Check",
          desc: "Inserisci l'URL del sito su Web-Check per visualizzare in un'unica schermata compatta: localizzazione server, catena certificati SSL, header di sicurezza, redirect e tecnologie CMS."
        },
        {
          num: 2,
          title: "Enumerazione Sottodomini Passiva con Subfinder",
          desc: "Esegui Subfinder da terminale per raccogliere in pochi secondi decine di sottodomini (api, staging, admin, vpn) da oltre 30 fonti senza toccare il server."
        },
        {
          num: 3,
          title: "Crawling Mirato di Endpoint e Chiavi con Photon",
          desc: "Lancia Photon per navigare in profondità il sito ed estrarre automaticamente tutte le email visibili, account social associati e file archiviati."
        }
      ],
      checklist: [
        "Eseguito report completo con Web-Check",
        "Enumerati sottodomini passivi con Subfinder",
        "Estratte email ed endpoint con Photon",
        "Verificati server mail e record SPF/DMARC"
      ],
      recommendedToolIds: ["web-check", "subfinder", "photon", "amass", "crt-sh"],
      commonPitfalls: "Evita scansioni attive rumorose se non sei autorizzato; gli strumenti passivi come Web-Check e Subfinder non generano allarmi sui sistemi IDS/IPS."
    },
    {
      id: "task-web-analytics",
      title: "Correlazione Domini via Analytics & AdSense IDs",
      badge: "PIVOTING / Web",
      icon: "bi-link-45deg",
      summary: "Scoprire tutti i siti web nascosti gestiti dalla stessa persona o azienda correlando codici di tracciamento condivisi.",
      difficulty: "Bassa - Media",
      estTime: "10 - 20 minuti",
      opsecLevel: "Basso (Nessun contatto)",
      steps: [
        {
          num: 1,
          title: "Estrazione ID di Tracciamento dal Codice Sorgente",
          desc: "Apri il codice sorgente (Ctrl+U) della homepage e cerca: Google Analytics 'UA-' o 'G-', Google Tag Manager 'GTM-', Google AdSense 'pub-' o Meta Pixel ID."
        },
        {
          num: 2,
          title: "Reverse Lookup su BuiltWith o DNSlytics",
          desc: "Inserisci il codice trovato (es. 'UA-12345678-1' o 'pub-9876543210') su BuiltWith o DNSlytics per visualizzare tutti gli altri domini registrati con lo stesso identico identificativo."
        },
        {
          num: 3,
          title: "Attribuzione dell'Impronta Digitale dell'Autore",
          desc: "Spesso un operatore che crea siti fake o di disinformazione riutilizza lo stesso account AdSense o Google Analytics per monetizzare: questo collega inequivocabilmente i siti alla medesima entità."
        }
      ],
      checklist: [
        "Ispezionato codice HTML per tag Analytics, AdSense o GTM",
        "Eseguito reverse lookup su BuiltWith / DNSlytics",
        "Confrontati i record Whois dei domini correlati scoperti",
        "Documentata la mappa della rete di siti dello stesso proprietario"
      ],
      recommendedToolIds: ["builtwith", "securitytrails", "singlefile"],
      commonPitfalls: "Alcuni template o temi WordPress già pronti contengono ID Analytics del tema demo; verifica sempre che l'ID sia effettivamente attivo e personalizzato dal gestore."
    },
    {
      id: "task-darkweb-search",
      title: "Ricerca e Monitoraggio nel Dark Web (.onion)",
      badge: "DARK WEB / Tor",
      icon: "bi-incognito",
      summary: "Cercare leak aziendali, credenziali, dump di database o discussioni su forum criminali all'interno della rete Tor.",
      difficulty: "Media - Alta",
      estTime: "20 - 40 minuti",
      opsecLevel: "Alto (Richiede navigazione isolata su Tor)",
      steps: [
        {
          num: 1,
          title: "Query Concurrent con OnionSearch",
          desc: "Lancia OnionSearch da terminale per interrogare contemporaneamente oltre 10 motori di ricerca darknet (Ahmia, Torch, Haystak, Excovo) cercando parole chiave del target."
        },
        {
          num: 2,
          title: "Ricerca Clearnet su Ahmia.fi",
          desc: "Se non hai Tor Browser a disposizione, usa l'interfaccia pubblica di Ahmia.fi per visualizzare anteprime sicure dei siti .onion indicizzati."
        },
        {
          num: 3,
          title: "Consultazione Archivi Intelligence X",
          desc: "Interroga intelx.io per accedere a snapshot e archivi storici di dump di forum darknet e leak senza dover visitare direttamente siti malevoli."
        }
      ],
      checklist: [
        "Eseguita ricerca aggregata su motori darknet con OnionSearch",
        "Verificate corrispondenze su Ahmia.fi e Intelligence X",
        "Scaricate copie delle pagine rilevanti in ambiente sandbox",
        "Nessun download diretto di file eseguibili o script non controllati"
      ],
      recommendedToolIds: ["onionsearch", "ahmia", "intelx", "triage-sandbox"],
      commonPitfalls: "Non scaricare MAI ed eseguire file dal Dark Web sul computer principale; usa una macchina virtuale 'disposable' (usa-e-getta) e disabilita JavaScript in Tor Browser."
    }
  ],

  // --- DORK PRESETS ---
  dorkPresets: [
    {
      title: "File di Configurazione & Password Esposte",
      dork: 'site:{domain} (filetype:env OR filetype:yml OR filetype:conf OR filetype:ini) "password"',
      desc: "Trova credenziali e chiavi segrete salvate inavvertitamente in file di configurazione pubblici."
    },
    {
      title: "Directory Listing Aperti (Index of)",
      dork: 'site:{domain} intitle:"Index of /" | intitle:"Index of /backup" | intitle:"Index of /uploads"',
      desc: "Trova cartelle server che consentono la navigazione aperta dei file senza protezione."
    },
    {
      title: "Documenti Riservati / Confidenziali",
      dork: 'site:{domain} (filetype:pdf OR filetype:docx OR filetype:xlsx) ("confidenziale" OR "riservato" OR "not for public release")',
      desc: "Individua documenti interni dell'azienda indicizzati per errore dai motori di ricerca."
    },
    {
      title: "Database Dumps & Backup SQL",
      dork: 'site:{domain} (ext:sql OR ext:bak OR ext:dump OR ext:tar.gz OR ext:zip) intext:"create table" | intext:"insert into"',
      desc: "Trova archivi di database dimenticati sui server pubblici."
    },
    {
      title: "Pannelli di Accesso & Login Amministrativi",
      dork: 'site:{domain} inurl:admin | inurl:login | inurl:cpanel | inurl:dashboard | intitle:"Admin Login"',
      desc: "Mappa tutte le schermate di autenticazione e pannelli di gestione remota."
    },
    {
      title: "Dipendenti su LinkedIn (Bypass Login)",
      dork: 'site:linkedin.com/in/ "{company}" "{role}"',
      desc: "Trova i profili dei dipendenti di un'azienda specifica senza comparire nelle visite del profilo."
    },
    {
      title: "Telecamere IP & Webcam Live",
      dork: 'inurl:"/view.shtml" | inurl:"ViewerFrame?Mode=" | inurl:"/live/index.html?lang=en"',
      desc: "Identifica webcam trasmesse pubblicamente su standard IP comuni."
    }
  ],

  // --- CHECKLIST OPSEC ---
  opsecChecklist: [
    { text: "Utilizzo di Macchina Virtuale dedicata (es. Tsurugi Linux / Sandbox isolata)", critical: true },
    { text: "Connessione tramite VPN sicura senza log o rete Tor per mitigare l'attribuzione IP", critical: true },
    { text: "Verifica assenza di WebRTC Leak e DNS Leak (visita browserleaks.com)", critical: true },
    { text: "Account Sock Puppet fittizio configurato (con avatar AI modificato e SIM virtuale anonima)", critical: true },
    { text: "Nessun accesso contemporaneo ai propri account personali nella stessa sessione browser", critical: true },
    { text: "Disabilitata cronologia di ricerca e cookie di terze parti", critical: false },
    { text: "Salvataggio forense dei dati raccolti con calcolo dell'hash SHA-256 e archiviazione su Wayback Machine", critical: false }
  ]
};
