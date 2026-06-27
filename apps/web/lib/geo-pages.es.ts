import type { GeoPage } from "./geo-pages";

/**
 * Spanish (es) translations of geo (country) pages, keyed by the SAME slug as
 * the English entry. `getGeoPage(slug, "es")` returns these; it falls back to
 * the English entry for any slug not yet translated.
 *
 * Scope: the Spanish-speaking markets among the existing geo pages (Spain,
 * Mexico). Legal/regulatory proper nouns (RGPD, LOPDGDD, AEPD, LFPDPPP, INAI,
 * Secretaría Anticorrupción y Buen Gobierno) are kept verbatim and accurate.
 *
 * Careful first pass — native review recommended before heavy promotion. Add a
 * slug here AND to INDEXABLE_ALT_LOCALE_PATHS in proxy.ts (+ sitemap.ts) to make
 * /es/voice-typing/<slug> indexable. Until then it stays X-Robots-Tag: noindex.
 */
export const GEO_PAGE_ES: Record<string, GeoPage> = {
  "spain": {
    slug: "spain",
    country: "España",
    demonym: "española",
    languages: ["español", "catalán", "inglés"],
    privacyLaw:
      "el RGPD (en España, el RGPD junto con la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales / LOPDGDD)",
    regulator: "la Agencia Española de Protección de Datos (AEPD)",
    h1: "Dictado por voz en <em>España</em>, sin conexión por defecto",
    metaTitle:
      "Dictado por voz en España — Dictado privado y sin conexión (compatible con el RGPD) | Voicetypr",
    metaDescription:
      "Voicetypr es una app de dictado por IA sin conexión por defecto para España. La transcripción local mantiene tu voz en tu dispositivo, pensada para ayudarte a cumplir el RGPD bajo la AEPD. Español, catalán e inglés, pago único.",
    intro:
      "Voicetypr es una app de dictado por voz privada y sin conexión por defecto para Mac y Windows. Mantén pulsado un atajo de teclado, habla y tus palabras aparecen en el campo en el que estés trabajando. En modo local, la transcripción ocurre por completo en tu dispositivo, así que tu voz nunca sale de tu equipo, algo que importa bajo uno de los regímenes sancionadores más activos de Europa.",
    localAngle:
      "España aplica el RGPD, complementado por la LOPDGDD, y la Agencia Española de Protección de Datos (AEPD) es una de las autoridades más activas de la UE a la hora de sancionar. Las organizaciones españolas están acostumbradas a tomarse en serio la protección de datos, y los derechos digitales que añade la LOPDGDD. Voicetypr encaja sin fricciones: en modo local tu audio se transcribe en tu propio equipo, no almacenamos nada en nuestros servidores y no se envía ninguna grabación a un servicio de transcripción en la nube. Es una respuesta de arquitectura, no un sello de cumplimiento: tú sigues siendo el responsable de tus datos, y Voicetypr está diseñado para ayudarte a cumplir tus expectativas del RGPD.",
    bullets: [
      "La transcripción local se ejecuta en tu dispositivo: en modo local tu voz nunca sale de tu equipo y no se almacena nada en nuestros servidores.",
      "El español, el catalán y el inglés se transcriben en el dispositivo con modelos locales Whisper y Parakeet; sin pasar por la nube para el dictado principal.",
      "La conversión de voz a texto en la nube opcional y el formateo de texto con IA opcional son estrictamente voluntarios, y el formateo con IA solo envía texto, usando tu propio proveedor y tu clave de API.",
      "Diseñado para ayudarte a cumplir el RGPD bajo la supervisión de la AEPD manteniendo tu voz en tu dispositivo por defecto.",
      "Pago único desde $39 con una prueba gratis de 3 días: sin suscripción ni bloqueo por puesto para uso individual.",
      "Funciona en todo el sistema: correo, chat, documentos, editores de código y cualquier campo de texto en Mac y Windows.",
    ],
    faqs: [
      {
        question: "¿Voicetypr cumple el RGPD?",
        answer:
          "Ninguna herramienta puede certificar que tu organización cumple la normativa, porque eso depende de tu configuración completa. Lo que aporta Voicetypr es una arquitectura que ayuda: en modo local, la transcripción se ejecuta en tu dispositivo, tu voz nunca sale de tu equipo y no almacenamos nada en nuestros servidores. Al mantener tu audio fuera de cualquier nube, Voicetypr está diseñado para ayudarte a cumplir tus obligaciones del RGPD, mientras tú sigues siendo el responsable del cumplimiento.",
      },
      {
        question: "¿Mi voz se sube a algún sitio?",
        answer:
          "No en modo local. Los modelos locales Whisper y Parakeet transcriben tu habla directamente en tu equipo Mac o Windows, así que el audio nunca se sube. La función opcional de voz a texto en la nube está desactivada por defecto; solo si la activas esa petición concreta llega al proveedor que hayas elegido.",
      },
      {
        question: "¿Puede transcribir español y catalán?",
        answer:
          "Sí. Los modelos locales son multilingües y transcriben bien el español, manejan el catalán y muchos otros idiomas, y te permiten alternar entre ellos y el inglés. El formateo de texto con IA opcional puede pulir la puntuación y las mayúsculas; ese paso solo envía texto, usando tu propio proveedor de IA y tu clave.",
      },
      {
        question: "¿Qué es la AEPD?",
        answer:
          "La Agencia Española de Protección de Datos (AEPD) es la autoridad de protección de datos de España, que aplica el RGPD y la LOPDGDD. Como Voicetypr mantiene tu voz en tu dispositivo para el dictado principal, reduces la superficie de transferencia de datos en la que se centra la AEPD, aunque sigues siendo responsable de cómo tratas cualquier dato personal.",
      },
    ],
  },
  "mexico": {
    slug: "mexico",
    country: "México",
    demonym: "mexicana",
    languages: ["español"],
    privacyLaw:
      "la LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares), renovada por la nueva ley federal que entró en vigor en marzo de 2025",
    regulator:
      "la Secretaría Anticorrupción y Buen Gobierno, la autoridad federal de protección de datos de México desde que el INAI fue disuelto en 2025",
    h1: "Dictado por voz en <em>México</em>, sin conexión por defecto",
    metaTitle:
      "Dictado por voz en México — Privado y sin conexión, en español (consciente de la LFPDPPP) | Voicetypr",
    metaDescription:
      "Voicetypr: dictado con IA sin conexión para México. Whisper local transcribe tu español en el dispositivo, pensado para la LFPDPPP. Pago único, sin suscripción.",
    intro:
      "Voicetypr es una app de dictado por voz para Mac y Windows, privada y sin conexión por defecto. Mantén presionado un atajo de teclado, habla en español y el texto aparece en el campo en el que estés trabajando. En modo local, la transcripción se ejecuta por completo en tu dispositivo, así que tu voz nunca viaja a un servidor y no pagas una suscripción mensual en dólares para dictar en tu propio idioma.",
    localAngle:
      "México es uno de los mercados de habla hispana más grandes del mundo, y los modelos locales Whisper y Parakeet transcriben el español muy bien —incluido el vocabulario mexicano de todos los días— directamente en tu máquina. Eso importa por partida doble aquí. Primero, significa que tu dictado en español se mantiene sin conexión y privado por defecto: en modo local tu audio se transcribe en tu propio dispositivo, no almacenamos nada en nuestros servidores y ninguna grabación se envía a un servicio de transcripción en la nube. Segundo, encaja en un mercado sensible al precio: Voicetypr es una compra única, no una suscripción recurrente en dólares que te sigue cobrando cada mes. En cuanto a la privacidad, México renovó su marco normativo en 2025: la LFPDPPP fue reemplazada por una nueva ley federal, y la supervisión pasó del ahora disuelto INAI a la Secretaría Anticorrupción y Buen Gobierno. La arquitectura local-first de Voicetypr está pensada para ayudarte a cumplir con las expectativas de la LFPDPPP —es una propiedad de la arquitectura, no un certificado, y sigues siendo responsable de los datos personales que manejas.",
    bullets: [
      "La transcripción local se ejecuta en tu dispositivo: en modo local tu voz nunca sale de tu máquina y no se almacena nada en nuestros servidores.",
      "El español se transcribe en el dispositivo con los modelos locales Whisper y Parakeet, que lo manejan muy bien —incluido el vocabulario mexicano— sin pasar por la nube.",
      "La transcripción en la nube opcional y el formateo de texto con IA opcional son estrictamente voluntarios, y el formateo con IA envía solo texto, usando tu propio proveedor y tu clave API.",
      "Diseñado para ayudarte a cumplir con las expectativas de la LFPDPPP al mantener la parte sensible —tu voz— en tu dispositivo por defecto.",
      "Paga una sola vez desde $39 con una prueba gratis de 3 días: un precio único, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes.",
      "Funciona en todo el sistema: correo, chat, documentos, editores de código y cualquier campo de texto en Mac y Windows.",
    ],
    faqs: [
      {
        question: "¿Qué tan bien transcribe Voicetypr el español?",
        answer:
          "Muy bien. Los modelos locales Whisper y Parakeet son multilingües y el español es uno de sus idiomas más fuertes, así que manejan el habla natural, los acentos y el vocabulario profesional y mexicano común directamente en tu máquina Mac o Windows, sin necesidad de la nube. El formateo de texto con IA opcional puede ordenar después la puntuación, los acentos y las mayúsculas; ese paso envía solo texto, usando tu propio proveedor de IA y tu clave.",
      },
      {
        question: "¿Voicetypr cumple con la LFPDPPP?",
        answer:
          "Ningún software puede simplemente declarar que tu organización cumple; eso depende de toda tu configuración de manejo de datos. Lo que Voicetypr ofrece es una arquitectura que ayuda: en modo local, la transcripción se ejecuta en tu dispositivo, tu voz nunca sale de tu máquina y no almacenamos nada en nuestros servidores. Al mantener tu audio fuera de cualquier nube, Voicetypr está diseñado para ayudarte a cumplir con tus expectativas de la LFPDPPP, mientras que sigues siendo responsable de cómo procesas cualquier dato personal que generes.",
      },
      {
        question: "¿Mi voz sale de mi dispositivo o se envía fuera de México?",
        answer:
          "No en modo local. Los modelos locales transcriben tu habla directamente en tu propia máquina, así que el audio nunca se sube a ningún lado. La función opcional de transcripción en la nube está desactivada por defecto; solo si la activas deliberadamente esa solicitud específica llega al proveedor que elijas. Tu dictado no depende de ningún servidor dentro ni fuera de México.",
      },
      {
        question: "¿Qué autoridad regula ahora la protección de datos en México?",
        answer:
          "México reestructuró su marco normativo en 2025: el regulador histórico, el INAI, fue disuelto, y la supervisión federal de la LFPDPPP pasó a la Secretaría Anticorrupción y Buen Gobierno, que ahora opera una unidad dedicada a la protección de datos personales. Como el dictado central de Voicetypr mantiene tu voz en tu dispositivo, reduces la superficie de transferencia de datos que más le importa a esa autoridad, aunque sigues siendo responsable de los datos personales que manejas.",
      },
    ],
  },
};
