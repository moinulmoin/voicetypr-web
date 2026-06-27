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
      "Dictado por voz en España — Dictado privado y sin conexión (consciente del RGPD) | Voicetypr",
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
  "argentina": {
    slug: "argentina",
    country: "Argentina",
    demonym: "argentina",
    languages: ["español", "inglés"],
    privacyLaw:
      "la Ley 25.326 de Protección de los Datos Personales, con una reforma integral alineada con el RGPD e impulsada por la AAIP actualmente en el Congreso",
    regulator:
      "la Agencia de Acceso a la Información Pública (AAIP), la autoridad de protección de datos de Argentina",
    h1: "Dictado por voz en <em>Argentina</em>, sin conexión por defecto",
    metaTitle:
      "Dictado por voz en Argentina — Privado y sin conexión, en español (consciente de la Ley 25.326) | Voicetypr",
    metaDescription:
      "Voicetypr: dictado con IA sin conexión para Argentina. Whisper local transcribe tu español en el dispositivo, pensado para la Ley 25.326. Pago único, sin suscripción.",
    intro:
      "Voicetypr es una app de dictado por voz para Mac y Windows, privada y sin conexión por defecto. Mantén presionado un atajo de teclado, habla en español y el texto aparece en el campo en el que estés trabajando. En modo local, la transcripción se ejecuta por completo en tu dispositivo, así que tu voz nunca viaja a un servidor y no pagas una suscripción mensual en dólares para dictar en tu propio idioma.",
    localAngle:
      "Argentina fue pionera en privacidad: su Ley 25.326 de Protección de los Datos Personales data del año 2000, fue una de las primeras de América Latina y le valió al país el reconocimiento de «adecuación» de la UE. Ese marco se está modernizando: hay proyectos de reforma integral impulsados por la AAIP en el Congreso para alinearlo con el RGPD, aunque la Ley 25.326 sigue siendo la ley vigente. Voicetypr encaja en este mercado por partida doble. Primero, los modelos locales Whisper y Parakeet transcriben el español muy bien en el dispositivo —incluido el vocabulario argentino de todos los días—, así que tu dictado se mantiene sin conexión y privado: en modo local tu audio se transcribe en tu propia máquina, no almacenamos nada en nuestros servidores y ninguna grabación se envía a un servicio de transcripción en la nube. Segundo, Voicetypr es una compra única, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes, una ventaja real en un mercado sensible al precio. Es una propiedad de la arquitectura, no un certificado: sigues siendo el responsable de tus propios datos, y Voicetypr está diseñado para ayudarte a cumplir con las expectativas de la Ley 25.326.",
    bullets: [
      "La transcripción local se ejecuta en tu dispositivo: en modo local tu voz nunca sale de tu máquina y no se almacena nada en nuestros servidores.",
      "El español se transcribe en el dispositivo con los modelos locales Whisper y Parakeet, que lo manejan muy bien —incluido el vocabulario argentino— sin pasar por la nube.",
      "La transcripción en la nube opcional y el formateo de texto con IA opcional son estrictamente voluntarios, y el formateo con IA envía solo texto, usando tu propio proveedor y tu clave API.",
      "Diseñado para ayudarte a cumplir con las expectativas de la Ley 25.326 bajo la supervisión de la AAIP, manteniendo la parte sensible —tu voz— en tu dispositivo por defecto.",
      "Paga una sola vez desde $39 con una prueba gratis de 3 días: un precio único, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes, algo que importa en un mercado sensible al precio.",
      "Funciona en todo el sistema: correo, chat, documentos, editores de código y cualquier campo de texto en Mac y Windows.",
    ],
    faqs: [
      {
        question: "¿Voicetypr cumple con la Ley 25.326?",
        answer:
          "Ningún software puede simplemente declarar que tu organización cumple; eso depende de toda tu configuración de manejo de datos. Lo que Voicetypr ofrece es una arquitectura que ayuda: en modo local, la transcripción se ejecuta en tu dispositivo, tu voz nunca sale de tu máquina y no almacenamos nada en nuestros servidores. Al mantener tu audio fuera de cualquier nube, Voicetypr está diseñado para ayudarte a cumplir con tus obligaciones de la Ley 25.326, mientras que sigues siendo el responsable del cumplimiento.",
      },
      {
        question: "¿Mi voz sale de mi dispositivo o se envía al extranjero?",
        answer:
          "No en modo local. Los modelos locales Whisper y Parakeet transcriben tu habla directamente en tu propia máquina Mac o Windows, así que el audio nunca se sube a ningún lado. Si activas deliberadamente la función opcional de transcripción en la nube, solo esa solicitud específica llega al proveedor que elijas, pero está desactivada por defecto y es enteramente tu decisión.",
      },
      {
        question: "¿Qué tan bien transcribe Voicetypr el español?",
        answer:
          "Muy bien. Los modelos locales son multilingües y el español es uno de sus idiomas más fuertes, así que manejan el habla natural, los acentos y el vocabulario argentino y profesional común directamente en tu máquina Mac o Windows, sin pasar por la nube. El formateo de texto con IA opcional puede ordenar después la puntuación, los acentos y las mayúsculas; ese paso envía solo texto, usando tu propio proveedor de IA y tu clave, nunca tu audio.",
      },
      {
        question: "¿Qué autoridad regula la protección de datos en Argentina?",
        answer:
          "La protección de datos en Argentina está a cargo de la Agencia de Acceso a la Información Pública (AAIP), que aplica la Ley 25.326, el marco que una reforma integral alineada con el RGPD trabaja ahora por modernizar en el Congreso. Como el dictado central de Voicetypr mantiene tu voz en tu dispositivo, reduces la superficie de transferencia de datos que más vigila esa autoridad, aunque sigues siendo responsable de los datos personales que generes.",
      },
    ],
  },
  "colombia": {
    slug: "colombia",
    country: "Colombia",
    demonym: "colombiana",
    languages: ["español", "inglés"],
    privacyLaw:
      "la Ley 1581 de 2012 (la Ley Estatutaria de Protección de Datos Personales), que desarrolla el derecho constitucional al hábeas data, con un proyecto de ley en el Congreso para alinearla con el RGPD",
    regulator:
      "la Superintendencia de Industria y Comercio (SIC), a través de su Delegatura para la Protección de Datos Personales",
    h1: "Dictado por voz en <em>Colombia</em>, sin conexión por defecto",
    metaTitle:
      "Dictado por voz en Colombia — Privado y sin conexión, en español (consciente de la Ley 1581) | Voicetypr",
    metaDescription:
      "Voicetypr: dictado con IA sin conexión para Colombia. Whisper local transcribe tu español en el dispositivo, pensado para la Ley 1581. Pago único, sin suscripción.",
    intro:
      "Voicetypr es una app de dictado por voz para Mac y Windows, privada y sin conexión por defecto. Mantén presionado un atajo de teclado, habla en español y el texto aparece en el campo en el que estés trabajando. En modo local, la transcripción se ejecuta por completo en tu dispositivo, así que tu voz nunca viaja a un servidor y no pagas una suscripción mensual en dólares para dictar en tu propio idioma.",
    localAngle:
      "Colombia protege los datos personales con la Ley 1581 de 2012, la ley estatutaria que da efecto al derecho constitucional al hábeas data, aplicada por la Superintendencia de Industria y Comercio (SIC) a través de su Delegatura para la Protección de Datos Personales, un regulador activo que impone sanciones reales. Un proyecto de ley de modernización, elaborado de forma conjunta por la SIC y el gobierno nacional, está ahora en el Congreso para alinear el régimen más de cerca con el RGPD, aunque la Ley 1581 sigue vigente. Con un sector de tecnología, BPO y trabajo independiente grande y en rápido crecimiento, aquí se dicta mucho material sensible cada día: notas de clientes, respuestas de soporte, contratos, código. Voicetypr encaja por partida doble. Primero, los modelos locales Whisper y Parakeet transcriben el español muy bien en el dispositivo —incluido el vocabulario colombiano de todos los días—, así que tu dictado se mantiene sin conexión y privado: en modo local tu audio se transcribe en tu propia máquina, no almacenamos nada en nuestros servidores y ninguna grabación se envía a un servicio de transcripción en la nube. Segundo, Voicetypr es una compra única, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes, una ventaja real en un mercado sensible al precio. Es una propiedad de la arquitectura, no un certificado: sigues siendo el responsable de tus propios datos, y Voicetypr está diseñado para ayudarte a cumplir con las expectativas de la Ley 1581.",
    bullets: [
      "La transcripción local se ejecuta en tu dispositivo: en modo local tu voz nunca sale de tu máquina y no se almacena nada en nuestros servidores.",
      "El español se transcribe en el dispositivo con los modelos locales Whisper y Parakeet, que lo manejan muy bien —incluido el vocabulario colombiano— sin pasar por la nube.",
      "La transcripción en la nube opcional y el formateo de texto con IA opcional son estrictamente voluntarios, y el formateo con IA envía solo texto, usando tu propio proveedor y tu clave API.",
      "Diseñado para ayudarte a cumplir con las expectativas de la Ley 1581 bajo la supervisión de la SIC, manteniendo la parte sensible —tu voz— en tu dispositivo por defecto.",
      "Paga una sola vez desde $39 con una prueba gratis de 3 días: un precio único, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes, algo que importa en un mercado sensible al precio.",
      "Funciona en todo el sistema: correo, chat, documentos, editores de código y cualquier campo de texto en Mac y Windows.",
    ],
    faqs: [
      {
        question: "¿Voicetypr cumple con la Ley 1581?",
        answer:
          "Ningún software puede simplemente declarar que tu organización cumple; eso depende de toda tu configuración de manejo de datos. Lo que Voicetypr ofrece es una arquitectura que ayuda: en modo local, la transcripción se ejecuta en tu dispositivo, tu voz nunca sale de tu máquina y no almacenamos nada en nuestros servidores. Al mantener tu audio fuera de cualquier nube, Voicetypr está diseñado para ayudarte a cumplir con tus obligaciones de la Ley 1581, mientras que sigues siendo el responsable del cumplimiento.",
      },
      {
        question: "¿Mi voz sale de mi dispositivo o se envía al extranjero?",
        answer:
          "No en modo local. Los modelos locales Whisper y Parakeet transcriben tu habla directamente en tu propia máquina Mac o Windows, así que el audio nunca se sube a ningún lado. Si activas deliberadamente la función opcional de transcripción en la nube, solo esa solicitud específica llega al proveedor que elijas, pero está desactivada por defecto y es enteramente tu decisión.",
      },
      {
        question: "¿Qué tan bien transcribe Voicetypr el español?",
        answer:
          "Muy bien. Los modelos locales son multilingües y el español es uno de sus idiomas más fuertes, así que manejan el habla natural, los acentos y el vocabulario colombiano y profesional común directamente en tu máquina Mac o Windows, sin pasar por la nube. El formateo de texto con IA opcional puede ordenar después la puntuación, los acentos y las mayúsculas; ese paso envía solo texto, usando tu propio proveedor de IA y tu clave, nunca tu audio.",
      },
      {
        question: "¿Qué autoridad regula la protección de datos en Colombia?",
        answer:
          "La protección de datos en Colombia está a cargo de la Superintendencia de Industria y Comercio (SIC), a través de su Delegatura para la Protección de Datos Personales, bajo la Ley 1581 de 2012, la ley estatutaria que da efecto al derecho constitucional al hábeas data y que ahora es objeto de un proyecto de modernización alineado con el RGPD en el Congreso. Como el dictado central de Voicetypr mantiene tu voz en tu dispositivo, reduces la superficie de transferencia de datos que más vigila la SIC, aunque sigues siendo responsable de los datos personales que generes.",
      },
    ],
  },
  "chile": {
    slug: "chile",
    country: "Chile",
    demonym: "chilena",
    languages: ["español", "inglés"],
    privacyLaw:
      "el marco chileno de protección de datos: históricamente la Ley 19.628 sobre Protección de la Vida Privada, ahora modernizada por la Ley 21.719, que entra en vigencia el 1 de diciembre de 2026",
    regulator:
      "la nueva Agencia de Protección de Datos Personales (APDP), el organismo autónomo que la Ley 21.719 crea para supervisar la protección de datos en Chile",
    h1: "Dictado por voz en <em>Chile</em>, sin conexión por defecto",
    metaTitle:
      "Dictado por voz en Chile — Privado y sin conexión, en español (consciente de la Ley 21.719) | Voicetypr",
    metaDescription:
      "Voicetypr: dictado con IA sin conexión para Chile. Whisper local transcribe tu español en el dispositivo, pensado para la Ley 21.719. Pago único, sin suscripción.",
    intro:
      "Voicetypr es una app de dictado por voz para Mac y Windows, privada y sin conexión por defecto. Mantén presionado un atajo de teclado, habla en español y el texto aparece en el campo en el que estés trabajando. En modo local, la transcripción se ejecuta por completo en tu dispositivo, así que tu voz nunca viaja a un servidor y no pagas una suscripción mensual en dólares para dictar en tu propio idioma.",
    localAngle:
      "Chile está reconstruyendo su régimen de privacidad: la histórica Ley 19.628 sobre Protección de la Vida Privada se moderniza con la Ley 21.719, que entra en vigencia el 1 de diciembre de 2026 y crea una nueva Agencia de Protección de Datos Personales, autónoma y con verdaderas facultades para investigar y multar. Hasta entonces sigue rigiendo la Ley 19.628, así que las organizaciones chilenas ya se preparan para un estándar más estricto e influido por el RGPD. La arquitectura local-first de Voicetypr encaja con esa dirección: en modo local tu audio se transcribe en tu propia máquina, no almacenamos nada en nuestros servidores y ninguna grabación se envía a un servicio de transcripción en la nube. Los modelos locales Whisper y Parakeet transcriben bien el español chileno en el dispositivo, así que tu dictado en español se mantiene sin conexión y privado por defecto; y como Voicetypr es una compra única y no una suscripción recurrente en dólares, encaja además en un mercado sensible al precio. Es una propiedad de la arquitectura, no un certificado: sigues siendo responsable de los datos personales que manejas, y Voicetypr está diseñado para ayudarte a cumplir con las expectativas de la Ley 21.719 a medida que entra en vigor.",
    bullets: [
      "La transcripción local se ejecuta en tu dispositivo: en modo local tu voz nunca sale de tu máquina y no se almacena nada en nuestros servidores.",
      "El español chileno y el inglés se transcriben en el dispositivo con los modelos locales Whisper y Parakeet, que manejan muy bien el español, sin pasar por la nube para el dictado principal.",
      "La transcripción en la nube opcional y el formateo de texto con IA opcional son estrictamente voluntarios, y el formateo con IA envía solo texto, usando tu propio proveedor y tu clave API.",
      "Diseñado para ayudarte a cumplir con las expectativas de la Ley 21.719 —el marco modernizado que Chile adopta el 1 de diciembre de 2026— al mantener la parte sensible, tu voz, en tu dispositivo por defecto.",
      "Paga una sola vez desde $39 con una prueba gratis de 3 días: una compra única, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes, algo que importa en un mercado sensible al precio.",
      "Funciona en todo el sistema: correo, chat, documentos, editores de código y cualquier campo de texto en Mac y Windows.",
    ],
    faqs: [
      {
        question: "¿Voicetypr cumple con la Ley 21.719?",
        answer:
          "El cumplimiento depende de toda tu configuración de tratamiento de datos, así que ningún software puede certificarlo por ti —y menos mientras Chile transita de la Ley 19.628 a la Ley 21.719. Lo que Voicetypr ofrece es una arquitectura que ayuda: en modo local, la transcripción se ejecuta en tu dispositivo, tu voz nunca sale de tu máquina y no almacenamos nada en nuestros servidores. Al mantener tu audio fuera de cualquier nube, Voicetypr está diseñado para ayudarte a cumplir con tus obligaciones de la Ley 21.719 a medida que entran en vigor, mientras que tú sigues siendo responsable del cumplimiento.",
      },
      {
        question: "¿Mi voz se sube a un servidor en Chile o en el extranjero?",
        answer:
          "No en modo local. Los modelos locales Whisper y Parakeet transcriben tu habla directamente en tu propia máquina Mac o Windows, así que el audio nunca se sube a ningún lado. Si activas deliberadamente la función opcional de transcripción en la nube, solo esa petición concreta llega al proveedor que elijas, pero está desactivada por defecto y es enteramente tu decisión.",
      },
      {
        question: "¿Transcribe bien Voicetypr el español chileno?",
        answer:
          "Sí. Los modelos locales son multilingües y manejan muy bien el español —incluido el vocabulario chileno cotidiano— todo en el dispositivo y sin pasar por la nube, y puedes alternar entre español e inglés. El formateo de texto con IA opcional puede ordenar después la puntuación, los acentos y las mayúsculas; ese paso envía solo texto, usando tu propio proveedor de IA y tu clave, nunca tu audio.",
      },
      {
        question: "¿Qué autoridad regulará la protección de datos en Chile?",
        answer:
          "Chile está cambiando de regulador. Hoy el marco aún se apoya en la Ley 19.628, pero la Ley 21.719 —vigente desde el 1 de diciembre de 2026— crea una nueva Agencia de Protección de Datos Personales, autónoma y con facultades para investigar y multar. Como el dictado central de Voicetypr mantiene tu voz en tu dispositivo, reduces la superficie de transferencia de datos que esa autoridad más vigilará, aunque sigues siendo responsable de los datos personales que generes.",
      },
    ],
  },
  "peru": {
    slug: "peru",
    country: "Perú",
    demonym: "peruana",
    languages: ["español", "inglés"],
    privacyLaw:
      "la Ley 29733, Ley de Protección de Datos Personales, junto con su nuevo reglamento (Decreto Supremo 016-2024-JUS), vigente desde el 31 de marzo de 2025",
    regulator:
      "la Autoridad Nacional de Protección de Datos Personales (ANPD), dependiente del Ministerio de Justicia y Derechos Humanos",
    h1: "Dictado por voz en <em>Perú</em>, sin conexión por defecto",
    metaTitle:
      "Dictado por voz en Perú — Privado y sin conexión, en español (consciente de la Ley 29733) | Voicetypr",
    metaDescription:
      "Voicetypr: dictado con IA sin conexión para Perú. Whisper local transcribe tu español en el dispositivo, pensado para la Ley 29733. Pago único, sin suscripción.",
    intro:
      "Voicetypr es una app de dictado por voz para Mac y Windows, privada y sin conexión por defecto. Mantén presionado un atajo de teclado, habla en español y el texto aparece en el campo en el que estés trabajando. En modo local, la transcripción se ejecuta por completo en tu dispositivo, así que tu voz nunca viaja a un servidor y no pagas una suscripción mensual en dólares para dictar en tu propio idioma.",
    localAngle:
      "Perú es un mercado de habla hispana en crecimiento y sensible al precio, y sus reglas de privacidad acaban de endurecerse: la Ley 29733, Ley de Protección de Datos Personales, ahora funciona con un nuevo reglamento —el Decreto Supremo 016-2024-JUS, vigente desde el 31 de marzo de 2025— que refuerza a la Autoridad Nacional de Protección de Datos Personales (ANPD), el regulador dentro del Ministerio de Justicia y Derechos Humanos, y aprieta reglas como un plazo de 48 horas para notificar incidentes de seguridad. Voicetypr encaja en este mercado por partida doble. Primero, los modelos locales Whisper y Parakeet transcriben bien el español peruano en el dispositivo, así que tu dictado se mantiene sin conexión y privado por defecto: en modo local tu audio se transcribe en tu propia máquina, no almacenamos nada en nuestros servidores y ninguna grabación se envía a un servicio de transcripción en la nube. Segundo, Voicetypr es una compra única, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes. Es una propiedad de la arquitectura, no un certificado: sigues siendo responsable de los datos personales que manejas, y Voicetypr está diseñado para ayudarte a cumplir con las expectativas de la Ley 29733.",
    bullets: [
      "La transcripción local se ejecuta en tu dispositivo: en modo local tu voz nunca sale de tu máquina y no se almacena nada en nuestros servidores.",
      "El español peruano y el inglés se transcriben en el dispositivo con los modelos locales Whisper y Parakeet, que manejan muy bien el español, sin pasar por la nube para el dictado principal.",
      "La transcripción en la nube opcional y el formateo de texto con IA opcional son estrictamente voluntarios, y el formateo con IA envía solo texto, usando tu propio proveedor y tu clave API.",
      "Diseñado para ayudarte a cumplir con las expectativas de la Ley 29733 —reforzada por su reglamento de 2025— al mantener la parte sensible, tu voz, en tu dispositivo por defecto.",
      "Paga una sola vez desde $39 con una prueba gratis de 3 días: una compra única, no una suscripción recurrente en dólares que cobra tu tarjeta cada mes, algo que importa en un mercado sensible al precio.",
      "Funciona en todo el sistema: correo, chat, documentos, editores de código y cualquier campo de texto en Mac y Windows.",
    ],
    faqs: [
      {
        question: "¿Voicetypr cumple con la Ley 29733?",
        answer:
          "El cumplimiento depende de toda tu configuración de tratamiento de datos, así que ningún software puede certificarlo por ti. Lo que Voicetypr ofrece es una arquitectura que ayuda: en modo local, la transcripción se ejecuta en tu dispositivo, tu voz nunca sale de tu máquina y no almacenamos nada en nuestros servidores. Al mantener tu audio fuera de cualquier nube, Voicetypr está diseñado para ayudarte a cumplir con tus obligaciones de la Ley 29733 —incluido su reglamento de 2025—, mientras que tú sigues siendo responsable del cumplimiento.",
      },
      {
        question: "¿Mi voz sale de mi dispositivo o se envía fuera de Perú?",
        answer:
          "No en modo local. Los modelos locales Whisper y Parakeet transcriben tu habla directamente en tu propia máquina Mac o Windows, así que el audio nunca se sube a ningún lado. Si activas deliberadamente la función opcional de transcripción en la nube, solo esa petición concreta llega al proveedor que elijas, pero está desactivada por defecto y es enteramente tu decisión.",
      },
      {
        question: "¿Transcribe bien Voicetypr el español peruano?",
        answer:
          "Sí. Los modelos locales son multilingües y manejan muy bien el español —incluido el vocabulario peruano cotidiano— todo en el dispositivo y sin pasar por la nube, y puedes alternar entre español e inglés. El formateo de texto con IA opcional puede ordenar después la puntuación, los acentos y las mayúsculas; ese paso envía solo texto, usando tu propio proveedor de IA y tu clave, nunca tu audio.",
      },
      {
        question: "¿Qué autoridad regula la protección de datos en Perú?",
        answer:
          "La protección de datos en Perú está a cargo de la Autoridad Nacional de Protección de Datos Personales (ANPD), que depende del Ministerio de Justicia y Derechos Humanos y aplica la Ley 29733 y su reglamento de 2025 (Decreto Supremo 016-2024-JUS). Como el dictado central de Voicetypr mantiene tu voz en tu dispositivo, reduces la superficie de transferencia de datos que más vigila la ANPD, aunque sigues siendo responsable de los datos personales que generes.",
      },
    ],
  },
};
