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

import { GEO_PAGE_ES } from "./geo-pages.es";

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
  {
    slug: "canada",
    country: "Canada",
    demonym: "Canadian",
    languages: ["English", "French"],
    privacyLaw: "PIPEDA (the Personal Information Protection and Electronic Documents Act) federally, and in Québec the stricter Law 25 (formerly Bill 64)",
    regulator: "the Office of the Privacy Commissioner of Canada (OPC), and in Québec the Commission d'accès à l'information (CAI)",
    h1: "Voice typing in <em>Canada</em>, offline by default",
    metaTitle: "Voice Typing in Canada — Offline, Private Dictation (PIPEDA & Law 25-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Canada. Local transcription keeps your voice on your device — English and Québec French on-device, designed to help you meet PIPEDA and Law 25 expectations. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, whether you are dictating in English or in French. North America is Voicetypr's home market, and Canada's bilingual reality is built into the local models from the start.",
    localAngle:
      "Canada is governed federally by PIPEDA, and Québec adds Law 25 (formerly Bill 64), one of the strictest privacy regimes in North America, now in full force with named privacy officers, mandatory privacy-impact assessments, and real penalty exposure. Voicetypr's local-first architecture answers that cleanly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is shipped to a cloud transcription service. Because the country is bilingual, the local models transcribe both English and Québec French on-device — no cloud round-trip for either. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your PIPEDA and Law 25 expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "English and Québec French are both transcribed on-device by local Whisper and Parakeet models — switch between them with no cloud round-trip.",
      "Works fully offline — dictate on a flight, on the train, or anywhere the connection is patchy across a big country, with no signal required.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet PIPEDA and Québec's Law 25 expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
    ],
    faqs: [
      {
        question: "Is Voicetypr compliant with PIPEDA and Québec's Law 25?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your PIPEDA and Law 25 obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Can Voicetypr transcribe both English and Québec French?",
        answer:
          "Yes. The local models are multilingual and transcribe both English and French on your own Mac or Windows machine, so you can dictate in either language — or switch between them — without a cloud round-trip. Optional AI text formatting can tidy punctuation and casing, and that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Does Voicetypr work offline across Canada?",
        answer:
          "Yes. Core dictation needs no internet at all — the local Whisper and Parakeet models run entirely on your device, so you can dictate on a flight, on a train, or in a remote area with patchy coverage. Nothing is uploaded, and nothing waits on a signal.",
      },
      {
        question: "Who regulates privacy in Canada, and does it affect how I use this?",
        answer:
          "Federally, the Office of the Privacy Commissioner of Canada (OPC) oversees PIPEDA, and in Québec the Commission d'accès à l'information (CAI) enforces Law 25. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface those regulators scrutinise most — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "uk",
    country: "the United Kingdom",
    demonym: "British",
    languages: ["English"],
    privacyLaw: "UK GDPR, alongside the Data Protection Act 2018 (as amended by the Data (Use and Access) Act 2025)",
    regulator: "the Information Commissioner's Office (ICO) — transitioning to the Information Commission under the Data (Use and Access) Act 2025",
    h1: "Voice typing in <em>the UK</em>, offline by default",
    metaTitle: "Voice Typing in the UK — Offline, Private Dictation (UK GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for the UK. Local transcription keeps your voice on your device — designed to help you meet UK GDPR expectations under ICO oversight. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and your words appear in whatever field you are working in. In local mode the transcription happens entirely on your device, so your voice never leaves your machine — which matters in a country where UK GDPR sets a high bar and the ICO has shaped data-protection expectations for years.",
    localAngle:
      "Britain protects personal data under UK GDPR and the Data Protection Act 2018 — the post-Brexit framework that kept GDPR-style rules in domestic law — now updated by the Data (Use and Access) Act 2025, with the Information Commissioner's Office (ICO) as the long-standing regulator (transitioning to a new body, the Information Commission, under that Act). British professionals are used to asking where their data goes and who can read it. Voicetypr answers that cleanly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and there is no recording shipped to a cloud transcription provider. It is an architectural answer, not a compliance badge — you stay responsible as the data controller, and Voicetypr is designed to help you meet your UK GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "English is transcribed on-device by local Whisper and Parakeet models — and because the models are multilingual, you can dictate in other languages too, with no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet UK GDPR and Data Protection Act 2018 expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no recurring per-seat costs for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr UK GDPR compliant?",
        answer:
          "No software can simply declare your organisation compliant — compliance depends on your full processing setup. What Voicetypr offers is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your UK GDPR and Data Protection Act 2018 obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Where does my voice data go?",
        answer:
          "In local mode, nowhere off your device. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "How well does Voicetypr handle English and other languages?",
        answer:
          "Well. The local models are multilingual: they transcribe English naturally — including business and technical vocabulary — and you can dictate in other languages or switch between them. Optional AI text formatting can tidy punctuation and capitalisation, and that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Which authority regulates data protection in the UK?",
        answer:
          "Data protection in the UK is governed by UK GDPR and the Data Protection Act 2018, recently amended by the Data (Use and Access) Act 2025, and enforced by the Information Commissioner's Office (ICO) — which is transitioning to a new body, the Information Commission, under that Act. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the regulator scrutinises most — but you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "italy",
    country: "Italy",
    demonym: "Italian",
    languages: ["Italian", "English"],
    privacyLaw: "the GDPR (in Italy, the Regolamento Generale sulla Protezione dei Dati / RGPD, alongside the Codice in materia di protezione dei dati personali, the Codice Privacy)",
    regulator: "the Garante per la protezione dei dati personali (the Garante)",
    h1: "Voice typing in <em>Italy</em>, offline by default",
    metaTitle: "Voice Typing in Italy — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Italy. Local transcription keeps your voice on your device — designed to help you meet GDPR expectations under the Garante. Italian and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and your words land in whatever field you are working in. In local mode the transcription happens entirely on your device, so your voice never leaves your machine — which matters in a country where the Garante has long set a firm tone on how personal data is handled.",
    localAngle:
      "Italy applies the GDPR through the Codice Privacy (Legislative Decree 196/2003, updated by Legislative Decree 101/2018 to align with the Regulation), and the Garante per la protezione dei dati personali is one of Europe's more visible and active regulators. Italian organisations and professionals are used to asking where data is processed and who can reach it. Voicetypr answers that plainly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is shipped to a cloud transcription service. It is an architectural property, not a compliance badge — you remain the data controller, and Voicetypr is designed to help you meet your GDPR expectations under the Codice Privacy.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Italian and English are transcribed on-device by local Whisper and Parakeet models, which handle Italian strongly; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR expectations under the Garante and the Codice Privacy by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no recurring per-seat costs for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant under the Codice Privacy?",
        answer:
          "No tool can simply declare your organisation compliant — that depends on your full processing setup. What Voicetypr provides is the architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR obligations under the Codice Privacy, while you remain the controller responsible for compliance.",
      },
      {
        question: "Where does my voice data go?",
        answer:
          "In local mode, nowhere off your device. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "Can Voicetypr transcribe Italian accurately?",
        answer:
          "Yes. The local models are multilingual and transcribe Italian well, including everyday business and technical vocabulary, and you can switch between Italian and English. Optional AI text formatting can tidy punctuation, accents, and capitalisation — that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Who is the Garante and does it affect how I should use this?",
        answer:
          "The Garante per la protezione dei dati personali is Italy's data protection authority and enforces the GDPR and the Codice Privacy. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the Garante scrutinises most — but you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "poland",
    country: "Poland",
    demonym: "Polish",
    languages: ["Polish", "English"],
    privacyLaw: "the GDPR (in Poland, known as RODO, implemented through the Personal Data Protection Act / Ustawa o ochronie danych osobowych)",
    regulator: "the President of the Personal Data Protection Office (UODO — Prezes Urzędu Ochrony Danych Osobowych)",
    h1: "Voice typing in <em>Poland</em>, offline by default",
    metaTitle: "Voice Typing in Poland — Offline, Private Dictation (RODO-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Poland. Local transcription keeps your voice on your device — designed to help you meet RODO/GDPR expectations under UODO oversight. Polish and English, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and your words land in whatever field you are working in. In local mode the transcription runs entirely on your device, so your voice never leaves your machine — and because the local models handle Polish as well as English, dictating in Polish stays just as private.",
    localAngle:
      "Poland implements the GDPR as RODO — the acronym everyone here uses — backed by the Personal Data Protection Act (Ustawa o ochronie danych osobowych) and overseen by the President of the Personal Data Protection Office (UODO). With a large software and IT services sector and a fast-growing founder scene, a lot of sensitive material gets dictated every day: client notes, code, contracts, support replies. Voicetypr's local-first architecture fits that directly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is shipped to a cloud transcription provider. Crucially, the local Whisper and Parakeet models transcribe Polish on-device, so Polish-language dictation — not just English — stays offline and private. It is an architectural answer, not a compliance badge: you remain the data controller, and Voicetypr is designed to help you meet your RODO/GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Polish and English are transcribed on-device by local Whisper and Parakeet models, so Polish dictation gets no cloud round-trip either.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet RODO/GDPR expectations under UODO oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no recurring per-seat costs for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr RODO/GDPR compliant?",
        answer:
          "No tool can simply declare your organisation compliant — that depends on your full setup. What Voicetypr offers is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your RODO/GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Where does my voice data go?",
        answer:
          "In local mode, nowhere off your device. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so nothing is uploaded. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "Can Voicetypr transcribe Polish accurately?",
        answer:
          "Yes. The local models are multilingual and handle Polish on-device, including its diacritics and everyday business and technical vocabulary, and you can switch between Polish and English mid-flow. Optional AI text formatting can tidy punctuation and capitalisation afterwards — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Which authority regulates data protection in Poland?",
        answer:
          "Data protection in Poland is overseen by the President of the Personal Data Protection Office (UODO — Prezes Urzędu Ochrony Danych Osobowych), who enforces RODO, Poland's implementation of the GDPR. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface that authority scrutinises most — though you remain responsible for any personal data you produce.",
      },
    ],
  },
  {
    slug: "brazil",
    country: "Brazil",
    demonym: "Brazilian",
    languages: ["Portuguese"],
    privacyLaw: "the LGPD (the Lei Geral de Proteção de Dados, Lei nº 13.709/2018)",
    regulator: "the Autoridade Nacional de Proteção de Dados (ANPD)",
    h1: "Voice typing in <em>Brazil</em>, offline by default",
    metaTitle: "Voice Typing in Brazil — Offline, Private Dictation (LGPD-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Brazil. Local transcription keeps your voice on your device — designed to help you meet LGPD expectations. Brazilian Portuguese, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak Portuguese, and your words land in whatever field you are working in. In local mode the transcription happens entirely on your device, so your voice never leaves your machine — and you pay once instead of feeding another monthly subscription in dollars.",
    localAngle:
      "Brazil is one of the largest Portuguese-speaking markets in the world, and the LGPD has made data protection a real concern for Brazilian companies and freelancers alike, with the ANPD now actively regulating and applying penalties. Voicetypr fits this market on two fronts. First, the local Whisper and Parakeet models transcribe Brazilian Portuguese well on-device, so your dictation stays offline and private — in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. Second, Voicetypr is a one-time purchase, not a recurring USD subscription that quietly drains your card every month — a genuine advantage in a price-sensitive market. This is architecture, not a certificate: you remain the controller of your own data, and Voicetypr is designed to help you meet your LGPD expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Brazilian Portuguese is transcribed on-device by local Whisper and Parakeet models, which handle the language well; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet LGPD expectations under ANPD oversight by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no recurring USD subscription draining your card month after month, which matters in a price-sensitive market.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr LGPD compliant?",
        answer:
          "Compliance depends on your full processing setup, so no tool can simply certify it for you. What Voicetypr provides is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your LGPD obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Does my voice leave my device or go to a server abroad?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your own Mac or Windows machine, so the audio is never uploaded anywhere. If you explicitly turn on the optional cloud speech-to-text feature, only that specific request reaches the provider you chose — but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Brazilian Portuguese accurately?",
        answer:
          "Yes. The local models are multilingual and handle Brazilian Portuguese well, including everyday business and technical vocabulary, all on-device with no cloud round-trip. Optional AI text formatting can tidy punctuation and capitalisation afterwards — that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Who is the ANPD?",
        answer:
          "The Autoridade Nacional de Proteção de Dados (ANPD) is Brazil's data protection authority, which regulates and enforces the LGPD and can apply penalties for non-compliance. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the ANPD scrutinises most — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "mexico",
    country: "Mexico",
    demonym: "Mexican",
    languages: ["Spanish"],
    privacyLaw: "the LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares), overhauled by the new federal law that took effect in March 2025",
    regulator: "the Secretaría Anticorrupción y Buen Gobierno (Secretariat of Anti-Corruption and Good Governance), Mexico's federal data-protection authority since the INAI was dissolved in 2025",
    h1: "Voice typing in <em>Mexico</em>, offline by default",
    metaTitle: "Voice Typing in Mexico — Offline, Private Spanish Dictation (LFPDPPP-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Mexico. Local Whisper transcribes Spanish on your device — designed to help you meet LFPDPPP expectations. Pay once, no subscription.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Spanish, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, and you are not paying a monthly subscription in dollars to dictate in your own language.",
    localAngle:
      "Mexico is one of the largest Spanish-speaking markets in the world, and the local Whisper and Parakeet models transcribe Spanish very well — including everyday Mexican vocabulary — directly on your machine. That matters twice over here. First, it means your Spanish dictation stays offline and private by default: in local mode your audio is transcribed on your own device, we store nothing on our servers, and no recording is sent to a cloud transcription service. Second, it fits a price-sensitive market — Voicetypr is a one-time purchase, not a recurring USD subscription that keeps charging every month. On privacy, Mexico overhauled its framework in 2025: the LFPDPPP was replaced by a new federal law, and oversight moved from the now-dissolved INAI to the Secretaría Anticorrupción y Buen Gobierno. Voicetypr's local-first architecture is designed to help you meet LFPDPPP expectations — it is an architectural property, not a certificate, and you remain responsible for the personal data you handle.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Spanish is transcribed on-device by local Whisper and Parakeet models, which handle it strongly — including Mexican vocabulary — with no cloud round-trip.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet LFPDPPP expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — a one-time price, not a recurring USD subscription that bills your card every month.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "How well does Voicetypr transcribe Spanish?",
        answer:
          "Very well. The local Whisper and Parakeet models are multilingual and Spanish is one of their stronger languages, so they handle natural speech, accents, and common professional and Mexican vocabulary directly on your Mac or Windows machine — no cloud needed. The optional AI text formatting can tidy punctuation, accents, and capitalization afterward; that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Is Voicetypr compliant with the LFPDPPP?",
        answer:
          "No software can simply declare your organization compliant — that depends on your full data-handling setup. What Voicetypr provides is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your LFPDPPP expectations, while you remain responsible for how you process any personal data you produce.",
      },
      {
        question: "Does my voice leave my device or get sent outside Mexico?",
        answer:
          "Not in local mode. The local models transcribe your speech directly on your own machine, so the audio is never uploaded anywhere. The optional cloud speech-to-text feature is off by default; only if you deliberately turn it on does that specific request reach the provider you choose. Your dictation does not depend on a server in or outside Mexico.",
      },
      {
        question: "Which authority regulates data protection in Mexico now?",
        answer:
          "Mexico restructured its framework in 2025: the long-standing regulator, the INAI, was dissolved, and federal oversight of the LFPDPPP moved to the Secretaría Anticorrupción y Buen Gobierno (Secretariat of Anti-Corruption and Good Governance), which now runs a dedicated personal-data protection unit. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface that authority cares most about — though you stay responsible for the personal data you handle.",
      },
    ],
  },
  {
    slug: "japan",
    country: "Japan",
    demonym: "Japanese",
    languages: ["Japanese"],
    privacyLaw: "the APPI (the Act on the Protection of Personal Information / 個人情報保護法)",
    regulator: "the Personal Information Protection Commission (PPC / 個人情報保護委員会)",
    h1: "Voice typing in <em>Japan</em>, offline by default",
    metaTitle: "Voice Typing in Japan — Offline, Private Japanese Dictation (APPI-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Japan. Local Whisper models transcribe Japanese (日本語) on your device — your voice never leaves your machine, designed to help you meet APPI expectations. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Japanese, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never leaves your machine, which matters in a market where the APPI and the Personal Information Protection Commission set clear expectations for handling personal data.",
    localAngle:
      "Japan regulates personal data under the APPI — the Act on the Protection of Personal Information (個人情報保護法) — enforced by the Personal Information Protection Commission (PPC / 個人情報保護委員会), and it is one of the most advanced technology markets in the world. Voicetypr's local-first architecture fits both sides of that. In local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. Just as important for Japanese users: the local Whisper models handle Japanese strongly on-device, so Japanese-language dictation stays offline and private — and the text drops straight into any app, system-wide, on Mac and Windows. This is an architectural property, not a compliance certificate — you remain responsible for the personal data you handle, and Voicetypr is designed to help you meet your APPI expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Japanese is transcribed on-device by the local Whisper models — kanji, hiragana, and katakana — with no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet APPI expectations under PPC oversight by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr APPI compliant?",
        answer:
          "Compliance depends on your full data-handling setup, so no tool can simply grant it to you. What Voicetypr provides is the architecture that makes it easier: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. That keeps your audio out of any cloud transfer, which is designed to help you meet your APPI obligations. You remain responsible for how you handle the personal data you produce.",
      },
      {
        question: "Does my voice get sent to a server in Japan or overseas?",
        answer:
          "Not in local mode. The local Whisper models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded — there is no cross-border data transfer to reason about. If you explicitly opt into the optional cloud speech-to-text feature, that specific request goes to the provider you choose, but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Japanese accurately?",
        answer:
          "Yes. The local Whisper models are multilingual and handle Japanese well on-device, producing natural kanji, hiragana, and katakana for everyday business and technical vocabulary. Because the work happens locally, your Japanese dictation stays private. Optional AI text formatting can tidy punctuation and spacing afterward — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who is the PPC and does it affect how I should use this?",
        answer:
          "The Personal Information Protection Commission (PPC / 個人情報保護委員会) is Japan's data protection authority and enforces the APPI. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the PPC scrutinises most — though you remain responsible for any personal data you handle.",
      },
    ],
  },
  {
    slug: "south-korea",
    country: "South Korea",
    demonym: "South Korean",
    languages: ["Korean"],
    privacyLaw: "the Personal Information Protection Act (PIPA / 개인정보 보호법)",
    regulator: "the Personal Information Protection Commission (PIPC)",
    h1: "Voice typing in <em>South Korea</em>, offline by default",
    metaTitle: "Voice Typing in South Korea — Offline, Private Korean Dictation (PIPA-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for South Korea. Local transcription keeps your Korean voice on your device — designed to help you meet PIPA expectations under PIPC oversight. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Korean, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, which matters in a country where the PIPC has built one of the stricter data-protection regimes in the world.",
    localAngle:
      "South Korea's Personal Information Protection Act (PIPA) is widely regarded as one of the stricter, most comprehensive privacy regimes anywhere, and it is enforced by the Personal Information Protection Commission (PIPC) — an independent central authority with real enforcement power. In a market with some of the highest smartphone and PC adoption in the world, people are used to asking where their data goes and who can read it. Voicetypr's local-first architecture answers that directly: in local mode your audio is transcribed on your own Mac or Windows machine, we store nothing on our servers, and no recording is shipped to a cloud transcription service. Crucially, the local Whisper models transcribe Korean strongly, so Korean-language dictation can stay entirely offline and private — system-wide, on both platforms. This is architecture, not a certificate: you remain the controller of your own data, and Voicetypr is designed to help you meet your PIPA expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Korean is transcribed on-device by local Whisper and Parakeet models, so everyday Korean dictation needs no cloud round-trip and stays private.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet PIPA expectations under PIPC oversight by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
      "Works system-wide across email, messengers, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr PIPA compliant?",
        answer:
          "Compliance under PIPA depends on your full processing setup, so no single tool can grant it. What Voicetypr provides is the architecture that makes it far easier: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. Keeping your audio out of any cloud transfer is designed to help you meet your PIPA obligations, while you remain the controller responsible for your overall compliance.",
      },
      {
        question: "Does my voice get sent to a server in Korea or anywhere else?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your own Mac or Windows machine, so the audio is never uploaded. If you explicitly opt into the optional cloud speech-to-text feature, only that specific request goes to the provider you choose — it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Korean accurately?",
        answer:
          "Yes. The local Whisper models handle Korean strongly, including everyday business and technical vocabulary, so you can dictate in Korean entirely on-device without a cloud round-trip. Optional AI text formatting can tidy up spacing, punctuation, and casing afterwards — that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Which authority regulates data protection in South Korea?",
        answer:
          "Data protection in South Korea is overseen by the Personal Information Protection Commission (PIPC), the independent central authority that enforces PIPA — considered one of the stricter privacy regimes globally. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the PIPC scrutinises most, though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "portugal",
    country: "Portugal",
    demonym: "Portuguese",
    languages: ["Portuguese"],
    privacyLaw: "the GDPR (in Portugal, executed nationally by Lei n.º 58/2019)",
    regulator: "the Comissão Nacional de Proteção de Dados (CNPD)",
    h1: "Voice typing in <em>Portugal</em>, offline by default",
    metaTitle: "Voice Typing in Portugal — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Portugal. Local transcription keeps European Portuguese on your device — designed to help you meet GDPR expectations under CNPD oversight. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, whether you are writing an email in European Portuguese or switching to English. Portugal sits inside the GDPR, and keeping your voice on your own machine is the simplest way to respect that.",
    localAngle:
      "Portuguese is one of the world's most spoken languages, and Portugal anchors the European side of it. Voicetypr's local Whisper and Parakeet models transcribe European Portuguese on your own machine, so your daily dictation stays offline and private — no recording is shipped to a cloud transcription service. Portugal follows the GDPR, executed nationally by Lei n.º 58/2019 and overseen by the CNPD, and Portuguese users expect to know where their data goes. In local mode your audio is transcribed on the device and we store nothing on our servers, which removes a whole class of data-transfer questions before they start. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "European Portuguese is transcribed on-device by local Whisper and Parakeet models — switch to English with no cloud round-trip.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR expectations under CNPD oversight by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant?",
        answer:
          "Compliance is something your full processing setup earns, so no tool can hand it to you. What Voicetypr offers is the architecture that makes it easier: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Where does my voice data go?",
        answer:
          "In local mode, nowhere off your device. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "Can Voicetypr transcribe European Portuguese accurately?",
        answer:
          "Yes. The local models are multilingual and handle European Portuguese well, including everyday business and technical vocabulary, and you can switch between Portuguese and English. Optional AI text formatting can tidy punctuation and casing afterwards — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Which authority regulates data protection in Portugal?",
        answer:
          "Portugal applies the GDPR, executed nationally by Lei n.º 58/2019 and overseen by the Comissão Nacional de Proteção de Dados (CNPD). Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the CNPD scrutinises most — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "romania",
    country: "Romania",
    demonym: "Romanian",
    languages: ["Romanian"],
    privacyLaw: "the GDPR (in Romania, implemented nationally by Law no. 190/2018 on measures to apply Regulation (EU) 2016/679)",
    regulator: "the National Supervisory Authority for Personal Data Processing (ANSPDCP / Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal)",
    h1: "Voice typing in <em>Romania</em>, offline by default",
    metaTitle: "Voice Typing in Romania — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Romania. Local models transcribe Romanian on your device under GDPR and ANSPDCP oversight. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server. Romanian is one of the languages the local models handle on-device, so dictating in Romanian stays offline and private.",
    localAngle:
      "Romania is one of the EU's larger markets, with a big IT, software outsourcing, and developer community that is used to thinking about where data goes. The GDPR applies directly, implemented nationally by Law no. 190/2018, and the ANSPDCP enforces it. Voicetypr's local-first architecture fits that mindset: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is shipped to a cloud transcription service. Because the local models are multilingual, Romanian is transcribed on-device — no cloud round-trip — so your dictation stays offline and private. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your GDPR and Law 190/2018 expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Romanian is transcribed on-device by local Whisper and Parakeet models — no cloud round-trip for core dictation.",
      "Built for Romania's large IT, outsourcing, and developer sector — dictate Romanian notes, tickets, and docs into any app at speaking speed.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR and Law 190/2018 expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant in Romania?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR and Law no. 190/2018 obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Does my voice get sent to a server outside Romania?",
        answer:
          "Not in local mode. Local Whisper and Parakeet models transcribe your speech on your own Mac or Windows machine, so the audio is never uploaded or moved across a border. If you explicitly opt into the optional cloud speech-to-text feature, that specific request goes to the provider you choose — but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Romanian accurately?",
        answer:
          "Yes. The local models are multilingual and handle Romanian on your own machine, including its diacritics and everyday business and technical vocabulary. You dictate in Romanian and the text appears in any app, with no cloud round-trip. Optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Which authority regulates data protection in Romania?",
        answer:
          "Data protection in Romania is overseen by the National Supervisory Authority for Personal Data Processing (ANSPDCP), which enforces the GDPR alongside Law no. 190/2018. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the ANSPDCP scrutinises most — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "greece",
    country: "Greece",
    demonym: "Greek",
    languages: ["Greek"],
    privacyLaw: "the GDPR (in Greece, implemented by Law 4624/2019)",
    regulator: "the Hellenic Data Protection Authority (HDPA / Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα)",
    h1: "Voice typing in <em>Greece</em>, offline by default",
    metaTitle: "Voice Typing in Greece — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Offline-by-default AI dictation for Greece. Local models transcribe Greek on your device — designed to help you meet GDPR and Law 4624/2019 expectations. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, even when you dictate in Greek, a language most mainstream dictation tools barely support.",
    localAngle:
      "Greece implements the GDPR through Law 4624/2019, and the Hellenic Data Protection Authority (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα) oversees how personal data is handled. Greek is also a language the big dictation tools tend to treat as an afterthought — support is thin, English-skewed, or cloud-only. Voicetypr fixes both at once: the local Whisper models transcribe Greek directly on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. So your Greek-language dictation stays offline and private — you do not have to pick between a language that is well served and one that keeps your voice on your device. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your GDPR and Law 4624/2019 expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Greek is transcribed on-device by local Whisper and Parakeet models — no cloud round-trip for core dictation, even though most mainstream tools cover Greek poorly or only in the cloud.",
      "Works fully offline — dictate on the ferry between islands, on a mountain road, or anywhere the signal drops, with no connection required.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR and Law 4624/2019 expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
    ],
    faqs: [
      {
        question: "Is Voicetypr compliant with GDPR and Greece's Law 4624/2019?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR and Law 4624/2019 obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Can Voicetypr transcribe Greek accurately?",
        answer:
          "Yes. The local models are multilingual and handle Greek on your own Mac or Windows machine — a language many mainstream dictation tools cover poorly or only in the cloud. You can dictate everyday and professional Greek (πες το, μην το πληκτρολογείς), and the optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Does my voice get sent to a server when I dictate in Greek?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your Greek speech on your own Mac or Windows machine, so the audio is never uploaded — the same offline path you get in any other language. If you explicitly opt into the optional cloud speech-to-text feature, that specific request goes to the provider you choose, but it is off by default and entirely your decision.",
      },
      {
        question: "Which authority regulates data protection in Greece?",
        answer:
          "Data protection in Greece is overseen by the Hellenic Data Protection Authority (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα), which enforces the GDPR alongside Law 4624/2019. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface that authority scrutinises most — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "czechia",
    country: "Czechia",
    demonym: "Czech",
    languages: ["Czech"],
    privacyLaw: "the GDPR (in Czechia, Act No. 110/2019 Coll. on Personal Data Processing / zákon č. 110/2019 Sb., o zpracování osobních údajů)",
    regulator: "the Office for Personal Data Protection (Úřad pro ochranu osobních údajů / ÚOOÚ)",
    h1: "Voice typing in <em>Czechia</em>, offline by default",
    metaTitle: "Voice Typing in Czechia — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default dictation app for Czechia. Local models transcribe Czech on-device — designed to help you meet GDPR expectations. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, even when you dictate in Czech. That on-device approach fits a market full of software teams who already think hard about where their data goes.",
    localAngle:
      "Czechia has a deep software and startup scene — Prague and Brno are full of developers, founders, and engineers who read the fine print on data handling. The country applies the GDPR through Act No. 110/2019 Coll. on Personal Data Processing, with the Office for Personal Data Protection (ÚOOÚ) as the regulator. Voicetypr's local-first design answers the obvious question directly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. Czech is supported, so the local models transcribe Czech-language dictation on-device — it stays offline and private, with no cloud round-trip. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your GDPR expectations under ÚOOÚ oversight.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Czech is transcribed on-device by local Whisper and Parakeet models — your Czech-language dictation stays offline, with no cloud round-trip.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR expectations under ÚOOÚ oversight by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant in Czechia?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your obligations under the GDPR and Act No. 110/2019 Coll., while you remain the controller responsible for compliance.",
      },
      {
        question: "Can Voicetypr transcribe Czech accurately?",
        answer:
          "Yes. Czech is supported, and the local models are multilingual — they transcribe Czech on your own Mac or Windows machine, including everyday business and technical vocabulary. You can dictate in Czech with no cloud round-trip, and the optional AI text formatting can tidy punctuation and casing. That step sends only text, using your own AI provider and key.",
      },
      {
        question: "Does my voice get sent to a server?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your Czech speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "Which authority regulates data protection in Czechia?",
        answer:
          "Data protection in Czechia is overseen by the Office for Personal Data Protection (Úřad pro ochranu osobních údajů, or ÚOOÚ), which enforces the GDPR alongside Act No. 110/2019 Coll. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the ÚOOÚ scrutinises most — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "hungary",
    country: "Hungary",
    demonym: "Hungarian",
    languages: ["Hungarian"],
    privacyLaw: "the GDPR (in Hungary, alongside Act CXII of 2011 on Informational Self-Determination and Freedom of Information — the Infotv.)",
    regulator: "the Hungarian National Authority for Data Protection and Freedom of Information (NAIH / Nemzeti Adatvédelmi és Információszabadság Hatóság)",
    h1: "Voice typing in <em>Hungary</em>, offline by default",
    metaTitle: "Voice Typing in Hungary — Offline, Private Dictation (GDPR & Infotv.-Aware) | Voicetypr",
    metaDescription:
      "Offline AI dictation for Hungary. Local models transcribe Hungarian on-device — your voice never leaves your machine. GDPR and Infotv.-aware, pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Hungarian, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server. Hungarian is one of the harder languages for cloud dictation to reach, yet the local models handle it right on your own machine.",
    localAngle:
      "Hungary follows the GDPR, layered on top of Act CXII of 2011 — the Infotv. — and the NAIH enforces both. Hungarian is a smaller language than English or German, so it often gets thin support from cloud dictation tools, and sending your speech abroad to be transcribed raises exactly the data-transfer questions the NAIH cares about. Voicetypr takes a different route: the local Whisper and Parakeet models are multilingual and transcribe Hungarian directly on your own machine. In local mode your audio never leaves the device, we store nothing on our servers, and no recording is shipped to a cloud transcription service — so a less-served language stays both well-handled and private. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your GDPR and Infotv. expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Hungarian is transcribed on-device by multilingual local Whisper and Parakeet models — a less-served language handled with no cloud round-trip.",
      "Works fully offline — dictate on a train, on a flight, or anywhere the connection drops, with no signal required.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR and Infotv. expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR and Infotv. compliant?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR and Infotv. obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Can Voicetypr transcribe Hungarian accurately?",
        answer:
          "Yes. The local models are multilingual and handle Hungarian on your own Mac or Windows machine, including everyday business and technical vocabulary, with no cloud round-trip. Because the transcription runs locally, a language that cloud tools often under-serve stays well-supported and private. Optional AI text formatting can tidy punctuation and casing — that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Does my voice get sent to a server?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your Hungarian on your own device, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "Which authority regulates data protection in Hungary?",
        answer:
          "Data protection in Hungary is overseen by the Hungarian National Authority for Data Protection and Freedom of Information (NAIH), which enforces the GDPR and Act CXII of 2011 (the Infotv.). Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the NAIH scrutinises most — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "finland",
    country: "Finland",
    demonym: "Finnish",
    languages: ["Finnish"],
    privacyLaw: "the GDPR (in Finland, alongside the national Data Protection Act / Tietosuojalaki 1050/2018)",
    regulator: "the Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto)",
    h1: "Voice typing in <em>Finland</em>, offline by default",
    metaTitle: "Voice Typing in Finland — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Finland. Local models transcribe Finnish on your device — designed to help you meet GDPR expectations. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server. Finnish is transcribed right on your own machine, which matters in a country where people expect to know exactly where their data goes.",
    localAngle:
      "Finland runs on technology — a deep engineering culture, a busy startup scene, and people who read the fine print on where their data goes. The GDPR applies directly, and the national Data Protection Act (Tietosuojalaki 1050/2018) fills in the local detail under the Office of the Data Protection Ombudsman. Voicetypr's local-first design fits that mindset: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. Finnish is a smaller language that often gets routed to the cloud elsewhere — here the local models transcribe it on-device, so your Finnish dictation stays offline and private. This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Finnish is transcribed on-device by local Whisper and Parakeet models — no cloud round-trip for everyday dictation.",
      "Works fully offline — dictate on a commuter train, on a flight, or at a summer cottage with no signal.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR expectations by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat metering for solo use.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Where does my voice go when I dictate?",
        answer:
          "In local mode, nowhere off your device. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; only if you turn it on does that specific request reach the provider you chose.",
      },
      {
        question: "Can Voicetypr transcribe Finnish accurately?",
        answer:
          "Yes. The local models are multilingual and handle Finnish on your own Mac or Windows machine, including everyday business and technical vocabulary — with no cloud round-trip. Finnish packs a lot into each word, so the optional AI text formatting can tidy punctuation and casing afterwards; that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Who regulates data protection in Finland?",
        answer:
          "Data protection in Finland is overseen by the Office of the Data Protection Ombudsman (Tietosuojavaltuutetun toimisto), which enforces the GDPR and the national Data Protection Act. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface that authority scrutinises most — though you remain responsible for any personal data you produce.",
      },
    ],
  },
  {
    slug: "ireland",
    country: "Ireland",
    demonym: "Irish",
    languages: ["English"],
    privacyLaw: "the GDPR, alongside the Data Protection Act 2018",
    regulator: "the Data Protection Commission (DPC / An Coimisiún um Chosaint Sonraí)",
    h1: "Voice typing in <em>Ireland</em>, offline by default",
    metaTitle: "Voice Typing in Ireland — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Ireland. Local transcription keeps your voice off the cloud — designed to meet GDPR expectations under the DPC. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Press a hotkey, speak, and the text drops straight into whatever field you are working in. In local mode the transcription runs entirely on your device, so your voice never reaches the cloud — which fits a country that hosts the European headquarters of much of Big Tech and pays close attention to where data goes.",
    localAngle:
      "Ireland protects personal data under the GDPR and the Data Protection Act 2018, with the Data Protection Commission (An Coimisiún um Chosaint Sonraí) as the regulator. Because so many of the world's largest tech companies run their European headquarters from Dublin, the DPC acts as lead supervisory authority for much of Big Tech — one of the most consequential GDPR regulators in the EU. Privacy here is not an abstract topic; it is local news. Voicetypr answers it plainly: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is shipped to a cloud transcription service. It is an architectural property, not a compliance badge — you remain the data controller, and Voicetypr is designed to help you meet your GDPR expectations under the DPC.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "English runs on-device through local Whisper and Parakeet models, and the same multilingual models let you dictate in other languages — with no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR and Data Protection Act 2018 expectations under the Data Protection Commission, by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no recurring per-seat costs for solo use.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant in Ireland?",
        answer:
          "No software can hand your organisation compliance — that comes from your full processing setup. What Voicetypr gives you is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. Keeping your audio off any cloud is designed to help you meet your GDPR and Data Protection Act 2018 obligations, while you remain the controller responsible for compliance.",
      },
      {
        question: "Does my voice ever leave my device?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your Mac or Windows machine, so the audio is never uploaded to us or anyone else. The optional cloud speech-to-text feature stays off until you turn it on; only then does that one request reach the provider you picked.",
      },
      {
        question: "How well does Voicetypr handle English and other languages?",
        answer:
          "Well. The local models are multilingual: they transcribe English naturally — including business and technical terms — and you can dictate in other languages or switch between them. Optional AI text formatting can tidy punctuation and capitalisation, and that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Which authority regulates data protection in Ireland?",
        answer:
          "The Data Protection Commission (An Coimisiún um Chosaint Sonraí) enforces the GDPR and the Data Protection Act 2018. Because so many global tech firms base their EU operations in Ireland, the DPC often acts as lead supervisory authority for Big Tech — one of the busiest regulators in Europe. Since Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the DPC scrutinises most, though you remain responsible for any personal data you produce.",
      },
    ],
  },
  {
    slug: "belgium",
    country: "Belgium",
    demonym: "Belgian",
    languages: ["Dutch", "French"],
    privacyLaw: "the GDPR (in Belgium, implemented through the Act of 30 July 2018 on the protection of natural persons with regard to the processing of personal data)",
    regulator: "the Data Protection Authority (DPA) — the Autorité de protection des données (APD) in French, the Gegevensbeschermingsautoriteit (GBA) in Dutch",
    h1: "Voice typing in <em>Belgium</em>, offline by default",
    metaTitle: "Voice Typing in Belgium — Offline, Private Dictation (GDPR-Aware) | Voicetypr",
    metaDescription:
      "Offline-by-default AI dictation for Belgium. Local transcription keeps your voice on your device — Dutch and French on-device, GDPR-aware under the APD/GBA. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak, and the text appears in whatever field you are working in. In local mode, transcription runs entirely on your device, so your voice never leaves your machine. Belgium works in two languages, and the local models transcribe both Dutch and French on-device — so you can dictate in either and switch between them.",
    localAngle:
      "Belgium runs on more than one language — Dutch in Flanders, French in Wallonia — and Brussels is the political capital of the EU, where work happens in Dutch and French side by side. That makes a dictation tool stuck on a single language a poor fit. Voicetypr's local models transcribe both Dutch and French on your own machine, so you can dictate in either, switch between them, and stay offline the whole time. In local mode your audio is transcribed on-device, we store nothing on our servers, and no recording is sent to a cloud transcription service. Belgium implements the GDPR through the Act of 30 July 2018, overseen by the Data Protection Authority (the APD/GBA). This is architecture, not a certificate — you remain the controller of your own data, and Voicetypr is designed to help you meet your GDPR expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Dutch and French are both transcribed on-device by local Whisper and Parakeet models — dictate in either and switch with no cloud round-trip.",
      "Built for a bilingual country and an EU capital: speak Dutch in one window and French in the next, all offline and private.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet GDPR expectations under APD/GBA oversight by keeping your voice on your device by default.",
      "Pay once from $39 with a 3-day free trial — no subscription, no per-seat lock-in for solo use.",
    ],
    faqs: [
      {
        question: "Is Voicetypr GDPR compliant?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your GDPR obligations under the Act of 30 July 2018, while you remain the controller responsible for compliance.",
      },
      {
        question: "Can Voicetypr transcribe both Dutch and French?",
        answer:
          "Yes. The local models are multilingual and transcribe both Dutch and French on your own Mac or Windows machine, so you can dictate in either language — or switch between them — without a cloud round-trip. That fits a bilingual country and a city like Brussels, where both languages are in daily use. Optional AI text formatting can tidy punctuation and casing, and that step sends only text, using your own AI provider and key.",
      },
      {
        question: "Does my voice leave my device?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech on your own Mac or Windows machine, so the audio is never uploaded. The optional cloud speech-to-text feature is off by default; it only reaches your chosen provider if you deliberately enable it.",
      },
      {
        question: "Who regulates data protection in Belgium?",
        answer:
          "Belgium's regulator is the Data Protection Authority (DPA) — the Autorité de protection des données (APD) in French and the Gegevensbeschermingsautoriteit (GBA) in Dutch — which supervises the GDPR alongside the Belgian Act of 30 July 2018. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the APD/GBA focuses on — though you remain responsible for how you handle any personal data you produce.",
      },
    ],
  },
  {
    slug: "argentina",
    country: "Argentina",
    demonym: "Argentine",
    languages: ["Spanish", "English"],
    privacyLaw:
      "the Personal Data Protection Act (Ley 25.326 de Protección de los Datos Personales), with a comprehensive, GDPR-aligned reform inspired by the AAIP currently before Congress",
    regulator:
      "the Agencia de Acceso a la Información Pública (AAIP), Argentina's data protection authority",
    h1: "Voice typing in <em>Argentina</em>, offline by default",
    metaTitle: "Voice Typing in Argentina — Offline, Private Spanish Dictation (Ley 25.326-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Argentina. Local Whisper transcribes Spanish on your device — designed to help you meet Ley 25.326 expectations. Pay once, no subscription.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Spanish, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, and you are not paying a monthly subscription in dollars to dictate in your own language.",
    localAngle:
      "Argentina was a privacy pioneer — its Personal Data Protection Act (Ley 25.326) dates to 2000, was one of the first in Latin America, and earned the country the EU's 'adequacy' recognition. That framework is now being modernized: comprehensive reform bills inspired by the AAIP are before Congress to align it with the GDPR, though Ley 25.326 remains the law in force. Voicetypr fits this market on two fronts. First, the local Whisper and Parakeet models transcribe Spanish very well on-device — including everyday Argentine vocabulary — so your dictation stays offline and private: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. Second, Voicetypr is a one-time purchase, not a recurring USD subscription that bills your card every month — a real advantage in a price-sensitive market. This is architecture, not a certificate: you remain the responsible party (the data controller) for your own data, and Voicetypr is designed to help you meet your Ley 25.326 expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Spanish is transcribed on-device by local Whisper and Parakeet models, which handle it strongly — including everyday Argentine vocabulary — with no cloud round-trip.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet Ley 25.326 expectations under AAIP oversight by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no recurring USD subscription billing your card month after month, which matters in a price-sensitive market.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr compliant with Ley 25.326?",
        answer:
          "Compliance depends on your full data-handling setup, so no tool can simply certify it for you. What Voicetypr provides is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your Ley 25.326 obligations, while you remain the responsible party for compliance.",
      },
      {
        question: "Does my voice leave my device or get sent abroad?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your own Mac or Windows machine, so the audio is never uploaded anywhere. If you explicitly turn on the optional cloud speech-to-text feature, only that specific request reaches the provider you chose — but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Spanish accurately?",
        answer:
          "Yes. The local models are multilingual and Spanish is one of their stronger languages, so they handle natural speech, accents, and everyday Argentine and professional vocabulary directly on your Mac or Windows machine, with no cloud round-trip. Optional AI text formatting can tidy punctuation, accents, and capitalization afterward — that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Which authority regulates data protection in Argentina?",
        answer:
          "Data protection in Argentina is overseen by the Agencia de Acceso a la Información Pública (AAIP), which enforces Ley 25.326 — the framework a comprehensive, GDPR-aligned reform is now working to modernize in Congress. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface that authority scrutinises most — though you remain responsible for any personal data you produce.",
      },
    ],
  },
  {
    slug: "colombia",
    country: "Colombia",
    demonym: "Colombian",
    languages: ["Spanish", "English"],
    privacyLaw:
      "Law 1581 of 2012 (Ley 1581 de 2012, the Statutory Data Protection Law), which gives effect to the constitutional right of habeas data, with a GDPR-aligned modernization bill before Congress",
    regulator:
      "the Superintendencia de Industria y Comercio (SIC), through its Delegatura para la Protección de Datos Personales (the Personal Data Protection Delegature)",
    h1: "Voice typing in <em>Colombia</em>, offline by default",
    metaTitle: "Voice Typing in Colombia — Offline, Private Spanish Dictation (Ley 1581-Aware) | Voicetypr",
    metaDescription:
      "Voicetypr is an offline-by-default AI dictation app for Colombia. Local Whisper transcribes Spanish on your device — designed to help you meet Ley 1581 expectations. Pay once, no subscription.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Spanish, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, and you are not paying a monthly subscription in dollars to dictate in your own language.",
    localAngle:
      "Colombia protects personal data under Law 1581 of 2012, the statutory law that gives effect to the constitutional right of habeas data, enforced by the Superintendencia de Industria y Comercio (SIC) through its dedicated Delegatura para la Protección de Datos Personales — an active regulator that issues real sanctions. A modernization bill, drafted jointly by the SIC and the national government, is now before Congress to align the regime more closely with the GDPR, though Law 1581 remains in force. With a large, fast-growing technology, BPO, and freelancer scene, a lot of sensitive material gets dictated here every day: client notes, support replies, contracts, code. Voicetypr fits on two fronts. First, the local Whisper and Parakeet models transcribe Spanish very well on-device — including everyday Colombian vocabulary — so your dictation stays offline and private: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. Second, Voicetypr is a one-time purchase, not a recurring USD subscription that bills your card every month — a real advantage in a price-sensitive market. This is architecture, not a certificate: you remain the responsible party (the data controller) for your own data, and Voicetypr is designed to help you meet your Ley 1581 expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Spanish is transcribed on-device by local Whisper and Parakeet models, which handle it strongly — including everyday Colombian vocabulary — with no cloud round-trip.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet Ley 1581 expectations under SIC oversight by keeping the sensitive part — your voice — on your device by default.",
      "Pay once from $39 with a 3-day free trial — no recurring USD subscription billing your card month after month, which matters in a price-sensitive market.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr compliant with Ley 1581?",
        answer:
          "Compliance depends on your full data-handling setup, so no tool can simply certify it for you. What Voicetypr provides is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your Ley 1581 obligations, while you remain the responsible party for compliance.",
      },
      {
        question: "Does my voice leave my device or get sent abroad?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your own Mac or Windows machine, so the audio is never uploaded anywhere. If you explicitly turn on the optional cloud speech-to-text feature, only that specific request reaches the provider you chose — but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Spanish accurately?",
        answer:
          "Yes. The local models are multilingual and Spanish is one of their stronger languages, so they handle natural speech, accents, and everyday Colombian and professional vocabulary directly on your Mac or Windows machine, with no cloud round-trip. Optional AI text formatting can tidy punctuation, accents, and capitalization afterward — that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Which authority regulates data protection in Colombia?",
        answer:
          "Data protection in Colombia is enforced by the Superintendencia de Industria y Comercio (SIC), through its Delegatura para la Protección de Datos Personales, under Law 1581 of 2012 — the statutory law that gives effect to the constitutional right of habeas data, now the subject of a GDPR-aligned modernization bill in Congress. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the SIC scrutinises most — though you remain responsible for any personal data you produce.",
      },
    ],
  },
  {
    slug: "chile",
    country: "Chile",
    demonym: "Chilean",
    languages: ["Spanish", "English"],
    privacyLaw:
      "Chile's data-protection framework — historically Ley 19.628 sobre Protección de la Vida Privada, now being modernized by Ley 21.719, which enters into force on 1 December 2026",
    regulator:
      "the new Agencia de Protección de Datos Personales (APDP), the autonomous authority that Ley 21.719 creates to supervise data protection in Chile",
    h1: "Voice typing in <em>Chile</em>, offline by default",
    metaTitle: "Voice Typing in Chile — Offline, Private Spanish Dictation (Ley 21.719-Aware) | Voicetypr",
    metaDescription:
      "Offline-by-default AI dictation for Chile. Local Whisper transcribes your Spanish on-device — designed to help you meet Ley 21.719 expectations. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Spanish, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, and you are not paying a monthly subscription in dollars to dictate in your own language.",
    localAngle:
      "Chile is rebuilding its privacy regime: the long-standing Ley 19.628 sobre Protección de la Vida Privada is being modernized by Ley 21.719, which enters into force on 1 December 2026 and creates a new, autonomous Agencia de Protección de Datos Personales with real powers to investigate and fine. Until then Ley 19.628 still governs, so Chilean organisations are already preparing for a stricter, GDPR-influenced standard. Voicetypr's local-first architecture fits that direction of travel: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. The local Whisper and Parakeet models transcribe Chilean Spanish well on-device, so your Spanish dictation stays offline and private by default — and because Voicetypr is a one-time purchase rather than a recurring USD subscription, it fits a price-sensitive market too. This is architecture, not a certificate: you remain responsible for the personal data you handle, and Voicetypr is designed to help you meet Ley 21.719 expectations as they take effect.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Chilean Spanish and English are transcribed on-device by local Whisper and Parakeet models, which handle Spanish strongly; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet Ley 21.719 expectations — the modernized framework Chile adopts on 1 December 2026 — by keeping the sensitive part, your voice, on your device by default.",
      "Pay once from $39 with a 3-day free trial — a one-time purchase, not a recurring USD subscription draining your card every month, which matters in a price-sensitive market.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr compliant with Ley 21.719?",
        answer:
          "Compliance is a property of your full processing setup, so no tool can certify it for you — especially while Chile transitions from Ley 19.628 to Ley 21.719. What Voicetypr offers is helpful architecture: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your Ley 21.719 obligations as they take effect, while you remain responsible for compliance.",
      },
      {
        question: "Does my voice get uploaded to a server in Chile or abroad?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your own Mac or Windows machine, so the audio is never uploaded anywhere. If you explicitly turn on the optional cloud speech-to-text feature, only that specific request reaches the provider you chose — but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Chilean Spanish accurately?",
        answer:
          "Yes. The local models are multilingual and handle Spanish well — including everyday Chilean vocabulary — all on-device with no cloud round-trip, and you can switch between Spanish and English. Optional AI text formatting can tidy punctuation, accents, and capitalisation afterwards — that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Who will regulate data protection in Chile?",
        answer:
          "Chile is changing its regulator. Today the framework still rests on Ley 19.628, but Ley 21.719 — in force from 1 December 2026 — creates a new, autonomous Agencia de Protección de Datos Personales with powers to investigate and fine. Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface that authority will scrutinise most — though you remain responsible for any personal data you produce.",
      },
    ],
  },
  {
    slug: "peru",
    country: "Peru",
    demonym: "Peruvian",
    languages: ["Spanish", "English"],
    privacyLaw:
      "Ley 29733, the Ley de Protección de Datos Personales, together with its new reglamento (Decreto Supremo 016-2024-JUS) in force since 31 March 2025",
    regulator:
      "the Autoridad Nacional de Protección de Datos Personales (ANPD), within the Ministerio de Justicia y Derechos Humanos (Ministry of Justice and Human Rights)",
    h1: "Voice typing in <em>Peru</em>, offline by default",
    metaTitle: "Voice Typing in Peru — Offline, Private Spanish Dictation (Ley 29733-Aware) | Voicetypr",
    metaDescription:
      "Offline-by-default AI dictation for Peru. Local Whisper transcribes your Spanish on-device — designed to help you meet Ley 29733 expectations. Pay once.",
    intro:
      "Voicetypr is a private, offline-by-default voice dictation app for Mac and Windows. Hold a hotkey, speak in Spanish, and the text lands in whatever field you are working in. In local mode, transcription runs entirely on your device — so your voice never travels to a server, and you are not paying a monthly subscription in dollars to dictate in your own language.",
    localAngle:
      "Peru is a fast-growing, price-sensitive Spanish-speaking market, and its privacy rules just got sharper: Ley 29733, the Ley de Protección de Datos Personales, now runs on a new reglamento — Decreto Supremo 016-2024-JUS, in force since 31 March 2025 — that strengthens the Autoridad Nacional de Protección de Datos Personales (ANPD), the regulator inside the Ministerio de Justicia y Derechos Humanos, and tightens rules like a 48-hour breach-notification window. Voicetypr fits this market on two fronts. First, the local Whisper and Parakeet models transcribe Peruvian Spanish well on-device, so your dictation stays offline and private by default: in local mode your audio is transcribed on your own machine, we store nothing on our servers, and no recording is sent to a cloud transcription service. Second, Voicetypr is a one-time purchase, not a recurring USD subscription that quietly drains your card every month. This is architecture, not a certificate: you remain responsible for the personal data you handle, and Voicetypr is designed to help you meet your Ley 29733 expectations.",
    bullets: [
      "Local transcription runs on your device — in local mode your voice never leaves your machine and nothing is stored on our servers.",
      "Peruvian Spanish and English are transcribed on-device by local Whisper and Parakeet models, which handle Spanish strongly; no cloud round-trip for core dictation.",
      "Optional cloud speech-to-text and optional AI text formatting are strictly opt-in — and AI formatting sends only text, using your own provider and API key.",
      "Designed to help you meet Ley 29733 expectations — reinforced by its 2025 reglamento — by keeping the sensitive part, your voice, on your device by default.",
      "Pay once from $39 with a 3-day free trial — a one-time purchase, not a recurring USD subscription draining your card every month, which matters in a price-sensitive market.",
      "Works system-wide across email, chat, docs, code editors, and any text field on Mac and Windows.",
    ],
    faqs: [
      {
        question: "Is Voicetypr compliant with Ley 29733?",
        answer:
          "Compliance depends on your full processing setup, so no tool can simply certify it for you. What Voicetypr provides is architecture that helps: in local mode, transcription runs on your device, your voice never leaves your machine, and we store nothing on our servers. By keeping your audio off any cloud, Voicetypr is designed to help you meet your Ley 29733 obligations — including under its 2025 reglamento — while you remain responsible for compliance.",
      },
      {
        question: "Does my voice leave my device or go to a server abroad?",
        answer:
          "Not in local mode. The local Whisper and Parakeet models transcribe your speech directly on your own Mac or Windows machine, so the audio is never uploaded anywhere. If you explicitly turn on the optional cloud speech-to-text feature, only that specific request reaches the provider you chose — but it is off by default and entirely your decision.",
      },
      {
        question: "Can Voicetypr transcribe Peruvian Spanish accurately?",
        answer:
          "Yes. The local models are multilingual and handle Spanish well — including everyday Peruvian vocabulary — all on-device with no cloud round-trip, and you can switch between Spanish and English. Optional AI text formatting can tidy punctuation, accents, and capitalisation afterwards — that step sends only text, using your own AI provider and key, never your audio.",
      },
      {
        question: "Who regulates data protection in Peru?",
        answer:
          "Peru's data protection is overseen by the Autoridad Nacional de Protección de Datos Personales (ANPD), which sits within the Ministerio de Justicia y Derechos Humanos and enforces Ley 29733 and its 2025 reglamento (Decreto Supremo 016-2024-JUS). Because Voicetypr's core dictation keeps your voice on your device, you reduce the data-transfer surface the ANPD scrutinises most — though you remain responsible for any personal data you produce.",
      },
    ],
  },
];

const geoPagesBySlug: Record<string, GeoPage> = Object.fromEntries(
  geoPages.map((page) => [page.slug, page]),
);

export function getGeoPage(slug: string, locale?: string): GeoPage | undefined {
  if (locale === "es") {
    const es = GEO_PAGE_ES[slug];
    if (es) return es;
  }
  return geoPagesBySlug[slug];
}

export function getAllGeoSlugs(): string[] {
  return geoPages.map((page) => page.slug);
}
