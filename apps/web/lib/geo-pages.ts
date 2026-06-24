/**
 * Data-driven geo pages for "voice typing in <country>" SEO templates.
 *
 * Each entry must be SUBSTANTIVE (not a thin stub): real privacy law, real
 * regulator, real languages, and a local angle that explains why offline-by-default
 * dictation fits THIS market. Voicetypr is multilingual because the local Whisper
 * models transcribe many languages on-device.
 *
 * SAFE COMPLIANCE WORDING: we describe the ARCHITECTURE (local transcription runs
 * on the device, nothing stored on our servers in local mode) and frame it as
 * "helps you meet <law> expectations" — never "certified" or "guaranteed compliant".
 * Optional cloud STT and optional AI text formatting are opt-in and BYO key.
 *
 * Geo focus: European / privacy-first markets where offline dictation fits the culture.
 */

export type GeoFaq = {
  question: string;
  answer: string;
};

export type GeoPage = {
  slug: string;
  /** Display country name, e.g. "Germany". */
  country: string;
  /** Demonym / adjective, e.g. "German". */
  demonym: string;
  /** The main languages spoken in the country (Whisper handles these locally). */
  languages: string[];
  /** Exact name of the governing privacy/data-protection law(s). */
  privacyLaw: string;
  /** The data-protection regulator/authority. */
  regulator: string;
  /** Hero H1. Use <em>...</em> to mark the serif-italic accent word. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraph under the hero. */
  intro: string;
  /** Why offline/private dictation fits THIS market specifically. */
  localAngle: string;
  /** Substantive selling points, country-aware. */
  bullets: string[];
  /** Exactly 4 FAQs. */
  faqs: GeoFaq[];
};

export const GEO_PAGES_LAST_UPDATED = "2026-06-24";

export const geoPages: GeoPage[] = [
  {
    slug: "germany",
    country: "Germany",
    demonym: "German",
    languages: ["German", "English"],
    privacyLaw: "the GDPR (in Germany, the Datenschutz-Grundverordnung / DSGVO, alongside the Bundesdatenschutzgesetz / BDSG)",
    regulator: "the Federal Commissioner for Data Protection and Freedom of Information (BfDI), alongside the Länder data protection authorities",
    h1: "Voice typing in <em>Germany</em>, offline by default",
    metaTitle: "Voice Typing in Germany — Offline, Private Dictation (DSGVO-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Germany. Local transcription means your voice never leaves your device — built for a Datenschutz culture and designed to help you meet GDPR/DSGVO expectations. German and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, which is the whole point in a country where Datenschutz is a default expectation, not a feature.",
    localAngle:
      "Germany takes data protection seriously — the GDPR is implemented locally as the DSGVO, reinforced by the Bundesdatenschutzgesetz, and German users tend to assume the strictest interpretation. Voicetypr's local-first architecture fits that mindset directly: in local mode your audio is transcribed on your own machine and we store nothing on our servers. There is no recording uploaded to a cloud transcription service, which removes a whole class of data-transfer and processing questions before they start. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your DSGVO/GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "German and English are transcribed on-device by local Whisper and Parakeet models; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR/DSGVO expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR/DSGVO compliant?",
        answer:
          "Compliance is something an organisation achieves with its full processing setup, so no tool can hand it to you. What Voicetypr provides is the architecture that makes it far easier: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. That keeps the most sensitive data — your audio — out of any cloud transfer, which is designed to help you meet your GDPR/DSGVO obligations. You remain the controller responsible for your overall compliance.",
      },
      {
        question: "Does my voice get sent to a server in Germany or anywhere else?",
        answer:
          "Not in local mode. Local Whisper and Parakeet models transcribe your speech on your own Mac or Windows machine, so the audio is never uploaded. If you explicitly opt into the optional cloud speech-to-text feature, that specific request goes to the provider you choose — but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe German accurately?",
        answer:
          "Yes. The local models are multilingual and handle German well, including everyday business and technical vocabulary. You can dictate in German or English (or switch between them), and the optional AI text formatting can clean up punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Which authority regulates data protection in Germany?",
        answer:
          "Data protection in Germany is overseen by the Federal Commissioner for Data Protection and Freedom of Information (BfDI) together with the data protection authorities of the individual Länder. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface those authorities care most about.",
      },
    ],
  },
  {
    slug: "france",
    country: "France",
    demonym: "French",
    languages: ["French", "English"],
    privacyLaw: "the GDPR (in France, the Règlement Général sur la Protection des Données / RGPD, alongside the Loi Informatique et Libertés)",
    regulator: "the Commission Nationale de l'Informatique et des Libertés (CNIL)",
    h1: "Voice typing in <em>France</em>, offline by default",
    metaTitle: "Voice Typing in France — Offline, Private Dictation (RGPD-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for France. Local transcription keeps your voice on your device — designed to help you meet RGPD/GDPR expectations under CNIL oversight. French and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and your words appear in whatever field you are working in. In local mode the transcription happens entirely on your device, so your voice never leaves your machine — which matters in a country where the CNIL has set the tone for data protection for decades.",
    localAngle:
      "France implements the GDPR as the RGPD, layered on top of the long-standing Loi Informatique et Libertés, and the CNIL is one of the most active and well-known data protection regulators in Europe. French organisations and individuals are used to asking where data goes and who can read it. Voicetypr answers that cleanly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and there is no recording shipped to a cloud transcription provider. It is an architectural answer, not a compliance badge — you stay responsible as the data controller, and Voicetypr is designed to help you meet your RGPD/GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "French and English are transcribed on-device by local Whisper and Parakeet models; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet RGPD/GDPR expectations under CNIL oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no recurring per-seat costs for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr RGPD/GDPR compliant?",
        answer:
          "No software product can simply declare your organisation compliant — compliance depends on your full setup. What Voicetypr offers is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your RGPD/GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Where does my voice data go?",
        answer:
          "In local mode, nowhere off your device. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "How well does Voicetypr handle French?",
        answer:
          "Well. The local models are multilingual and transcribe French naturally, including accents and common professional vocabulary, and you can switch between French and English. Optional AI text formatting can tidy punctuation and capitalisation — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who is the CNIL and does it affect how I should use this?",
        answer:
          "The CNIL (Commission Nationale de l'Informatique et des Libertés) is France's data protection authority and enforces the RGPD. Because Voicetypr's core dictation keeps your voice on your device, you cut down the data-transfer surface the CNIL scrutinises most — but you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "netherlands",
    country: "the Netherlands",
    demonym: "Dutch",
    languages: ["Dutch", "English"],
    privacyLaw: "the GDPR (in the Netherlands, the Algemene Verordening Gegevensbescherming / AVG, alongside the Uitvoeringswet AVG / UAVG)",
    regulator: "the Autoriteit Persoonsgegevens (AP), the Dutch Data Protection Authority",
    h1: "Voice typing in the <em>Netherlands</em>, offline by default",
    metaTitle: "Voice Typing in the Netherlands — Offline, Private Dictation (AVG-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for the Netherlands. Local transcription keeps your voice on your device — designed to help you meet GDPR/AVG expectations under AP oversight. Dutch and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text appears in whatever field you are using. In local mode, transcription runs entirely on your device, so your voice never leaves your machine — a clean fit for a market where the Autoriteit Persoonsgegevens has a reputation for taking enforcement seriously.",
    localAngle:
      "The Netherlands implements the GDPR as the AVG, with the Uitvoeringswet AVG filling in the national detail, and the Autoriteit Persoonsgegevens (AP) is among Europe's more assertive regulators. Dutch organisations are used to thinking carefully about where data is processed and stored. Voicetypr's local-first design answers that directly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. It is an architectural property, not a compliance certificate — you remain the controller of your data, and Voicetypr is designed to help you meet your AVG/GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Dutch and English are transcribed on-device by local Whisper and Parakeet models; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet AVG/GDPR expectations under AP oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat lock-in for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr AVG/GDPR compliant?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your AVG/GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Does my voice leave my device?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech on your own Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; it only reaches your chosen provider if you deliberately enable it.",
      },
      {
        question: "Does Voicetypr handle Dutch well?",
        answer:
          "Yes. The local models are multilingual and transcribe Dutch naturally, including everyday business and technical vocabulary, and you can switch between Dutch and English. Optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who is the Autoriteit Persoonsgegevens?",
        answer:
          "The Autoriteit Persoonsgegevens (AP) is the Dutch Data Protection Authority, which supervises the AVG/GDPR in the Netherlands. Because Voicetypr keeps your voice on your device for core dictation, you reduce the data-transfer surface the AP focuses on — though you remain responsible for how you handle any personal data.",
      },
    ],
  },
  {
    slug: "spain",
    country: "Spain",
    demonym: "Spanish",
    languages: ["Spanish", "Catalan", "English"],
    privacyLaw: "the GDPR (in Spain, the RGPD, alongside the Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales / LOPDGDD)",
    regulator: "the Agencia Española de Protección de Datos (AEPD)",
    h1: "Voice typing in <em>Spain</em>, offline by default",
    metaTitle: "Voice Typing in Spain — Offline, Private Dictation (RGPD-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Spain. Local transcription keeps your voice on your device — designed to help you meet RGPD/GDPR expectations under AEPD oversight. Spanish, Catalan and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and your words land in whatever field you are working in. In local mode the transcription happens entirely on your device, so your voice never leaves your machine — which matters under one of Europe's more active enforcement regimes.",
    localAngle:
      "Spain implements the GDPR as the RGPD, supplemented by the LOPDGDD, and the Agencia Española de Protección de Datos (AEPD) is one of the most active enforcers in the EU. Spanish organisations are used to taking data protection — and the digital rights the LOPDGDD adds — seriously. Voicetypr fits that cleanly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and there is no recording sent to a cloud transcription service. It is an architectural answer, not a compliance badge — you remain the controller of your data, and Voicetypr is designed to help you meet your RGPD/GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Spanish, Catalan, and English are transcribed on-device by local Whisper and Parakeet models; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet RGPD/GDPR expectations under AEPD oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat lock-in for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr RGPD/GDPR compliant?",
        answer:
          "No tool can certify your organisation as compliant — that depends on your full setup. What Voicetypr provides is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your RGPD/GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Does my voice get uploaded anywhere?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you enable it does that specific request reach the provider you chose.",
      },
      {
        question: "Can it transcribe Spanish and Catalan?",
        answer:
          "Yes. The local models are multilingual and transcribe Spanish well, handle Catalan and many other languages, and let you switch between them and English. Optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who is the AEPD?",
        answer:
          "The Agencia Española de Protección de Datos (AEPD) is Spain's data protection authority, enforcing the RGPD and the LOPDGDD. Because Voicetypr keeps your voice on your device for core dictation, you reduce the data-transfer surface the AEPD focuses on — though you remain responsible for how you handle any personal data.",
      },
    ],
  },
  {
    slug: "denmark",
    country: "Denmark",
    demonym: "Danish",
    languages: ["Danish", "English"],
    privacyLaw: "the GDPR (in Denmark, supplemented by the Danish Data Protection Act / Databeskyttelsesloven)",
    regulator: "Datatilsynet, the Danish Data Protection Agency",
    h1: "Voice typing in <em>Denmark</em>, offline by default",
    metaTitle: "Voice Typing in Denmark — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Denmark. Local transcription keeps your voice on your device — designed to help you meet GDPR expectations under Datatilsynet oversight. Danish and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text appears in whatever field you are using. In local mode, transcription runs entirely on your device, so your voice never leaves your machine — a natural fit for a Nordic market with high expectations around digital privacy.",
    localAngle:
      "Denmark applies the GDPR alongside its national Databeskyttelsesloven, with Datatilsynet as the supervisory authority — and Danish public and private organisations have a long track record of careful, sometimes cautious, handling of personal data, especially in the cloud. Voicetypr's local-first design fits that disposition: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. It is an architectural property, not a compliance certificate — you remain the controller of your data, and Voicetypr is designed to help you meet your GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Danish and English are transcribed on-device by local Whisper and Parakeet models; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR expectations under Datatilsynet oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat lock-in for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant?",
        answer:
          "Compliance depends on your organisation's full setup, so no tool can certify it for you. What Voicetypr provides is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Does my voice leave my computer?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; it only sends a request to your chosen provider if you deliberately enable it.",
      },
      {
        question: "Does Voicetypr handle Danish?",
        answer:
          "Yes. The local models are multilingual and transcribe Danish well, including everyday and professional vocabulary, and you can switch between Danish and English. Optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who is Datatilsynet?",
        answer:
          "Datatilsynet is the Danish Data Protection Agency, which supervises the GDPR and the Danish Data Protection Act in Denmark. Because Voicetypr keeps your voice on your device for core dictation, you reduce the data-transfer surface Datatilsynet focuses on — though you remain responsible for how you handle any personal data.",
      },
    ],
  },
  {
    slug: "sweden",
    country: "Sweden",
    demonym: "Swedish",
    languages: ["Swedish", "English"],
    privacyLaw: "the GDPR (in Sweden, supplemented by the Swedish Data Protection Act / dataskyddslagen)",
    regulator: "Integritetsskyddsmyndigheten (IMY), the Swedish Authority for Privacy Protection",
    h1: "Voice typing in <em>Sweden</em>, offline by default",
    metaTitle: "Voice Typing in Sweden — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Sweden. Local transcription keeps your voice on your device — designed to help you meet GDPR expectations under IMY oversight. Swedish and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and your words appear in whatever field you are using. In local mode, transcription runs entirely on your device, so your voice never leaves your machine — a clean fit for a market that pairs heavy digital adoption with real privacy expectations.",
    localAngle:
      "Sweden applies the GDPR alongside its national dataskyddslagen, supervised by Integritetsskyddsmyndigheten (IMY). Swedish organisations are highly digital but also attentive to how personal data — particularly anything as identifiable as a voice — is processed and where it goes. Voicetypr's local-first model fits: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. It is an architectural answer, not a compliance badge — you remain the controller of your data, and Voicetypr is designed to help you meet your GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Swedish and English are transcribed on-device by local Whisper and Parakeet models; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR expectations under IMY oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat lock-in for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant?",
        answer:
          "No tool can certify your organisation as compliant — that depends on your full setup. What Voicetypr provides is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Does my voice data leave my machine?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you enable it does that request reach the provider you chose.",
      },
      {
        question: "How well does Voicetypr handle Swedish?",
        answer:
          "Well. The local models are multilingual and transcribe Swedish naturally, including everyday business and technical vocabulary, and you can switch between Swedish and English. Optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who is IMY?",
        answer:
          "Integritetsskyddsmyndigheten (IMY), the Swedish Authority for Privacy Protection, supervises the GDPR and the Swedish Data Protection Act. Because Voicetypr keeps your voice on your device for core dictation, you reduce the data-transfer surface IMY focuses on — though you remain responsible for how you handle any personal data.",
      },
    ],
  },
  {
    slug: "switzerland",
    country: "Switzerland",
    demonym: "Swiss",
    languages: ["German", "French", "Italian", "English"],
    privacyLaw: "the revised Federal Act on Data Protection (revFADP / nFADP), in force since September 2023, which aligns closely with the GDPR",
    regulator: "the Federal Data Protection and Information Commissioner (FDPIC)",
    h1: "Voice typing in <em>Switzerland</em>, offline by default",
    metaTitle: "Voice Typing in Switzerland — Offline, Private Dictation (revFADP-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Switzerland. Local transcription keeps your voice on your device — designed to help you meet revised FADP expectations under FDPIC oversight. German, French, Italian and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device, so your voice never leaves your machine — a fitting default in a country whose name is practically shorthand for discretion.",
    localAngle:
      "Switzerland sits outside the EU but runs the revised Federal Act on Data Protection (revFADP), in force since September 2023, which is closely aligned with the GDPR and overseen by the Federal Data Protection and Information Commissioner (FDPIC). Swiss organisations place a premium on confidentiality and on keeping sensitive data within their own control. Voicetypr fits that precisely: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. It is an architectural property, not a compliance certificate — you remain responsible for your data, and Voicetypr is designed to help you meet your revFADP expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "German, French, Italian, and English are transcribed on-device by local Whisper and Parakeet models; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet revised FADP expectations under FDPIC oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat lock-in for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr compliant with the revised FADP?",
        answer:
          "Compliance with the revised Federal Act on Data Protection depends on your organisation's full setup, so no tool can certify it for you. What Voicetypr provides is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your revFADP obligations, while you remain responsible for compliance.",
      },
      {
        question: "Does my voice leave Switzerland?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so there is no cross-border transfer of your audio at all. The optional cloud speech-to-text feature is off by default; only if you enable it does that request reach the provider you chose.",
      },
      {
        question: "Does Voicetypr handle Switzerland's languages?",
        answer:
          "Yes. The local models are multilingual and transcribe German, French, and Italian well, along with English and many other languages, and you can switch between them. Optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who is the FDPIC?",
        answer:
          "The Federal Data Protection and Information Commissioner (FDPIC) is Switzerland's federal data protection authority, supervising the revised FADP. Because Voicetypr keeps your voice on your device for core dictation, you reduce the data-transfer surface the FDPIC focuses on — though you remain responsible for how you handle any personal data.",
      },
    ],
  },
];

const geoPagesBySlug: Record<string, GeoPage> = Object.fromEntries(
  geoPages.map((page) => [page.slug, page]),
);

export function getGeoPage(slug: string): GeoPage | undefined {
  return geoPagesBySlug[slug];
}

export function getAllGeoSlugs(): string[] {
  return geoPages.map((page) => page.slug);
}
