import type { SeoPage } from "./seo-pages";

/**
 * Spanish (es) translations of the comparison/"best" pages (SEO_PAGE_ES) and the
 * "alternative to X" pages (ALTERNATIVE_PAGE_ES), keyed by the SAME slug as the
 * English entry. getSeoPageBySlug(slug, "es") / getAlternativePageBySlug(slug, "es")
 * return these and fall back to English for any untranslated slug.
 *
 * These pages are comparison-heavy: competitor names and product facts stay in
 * English; only the surrounding prose, table cell descriptions, and the offline/
 * platform/limitation phrasing are translated. (The superwhisper / wispr-flow
 * alternatives are noindex duplicates, so they are intentionally NOT translated.)
 *
 * Add a slug here AND to the matching list in proxy.ts (best/ or alternative/) to
 * make the /es page indexable. Careful first pass — native review recommended.
 */
export const SEO_PAGE_ES: Record<string, SeoPage> = {
  "mac-dictation": {
    slug: "mac-dictation",
    h1: "El mejor software de dictado para Mac en 2026",
    lede:
      "La mayoría de las apps de dictado para Mac te atan a suscripciones o envían tu voz a la nube. Estas son las opciones honestas, incluida la que funciona sin conexión.",
    angle: "roundup",
    competitors: [
      {
        name: "Apple Dictation",
        price: "Gratis",
        platforms: "macOS",
        offline: "No",
        subscription: false,
        limitation: "Gratis e integrado, pero menos enfocado en flujos de trabajo extensos entre aplicaciones.",
      },
      {
        name: "Superwhisper",
        price: "$12/mes",
        platforms: "macOS",
        offline: "Parcial",
        subscription: true,
        limitation: "App sólida para Mac, pero con precio por suscripción y solo para Mac.",
      },
      {
        name: "Wispr Flow",
        price: "$15/mes",
        platforms: "macOS",
        offline: "No",
        subscription: true,
        limitation: "Captura pulida, pero su precio recurrente y su enfoque centrado en la nube no son para todos los compradores.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation: "App de pago único para Mac + Windows con transcripción local por defecto.",
      },
    ],
    whySwitch: [
      "Funciona en todas las aplicaciones, no solo en una extensión del navegador",
      "Transcribe tu voz en tu equipo por defecto",
      "Paga una vez, úsalo para siempre, sin la trampa de la suscripción",
      "Ejecuta modelos locales modernos para un dictado rápido y privado",
    ],
    decisionSupport: {
      searchIntent:
        "Compara Apple Dictation, Superwhisper, Wispr Flow y una app local de pago único para el dictado diario en Mac.",
      bestFor: [
        "Usuarios de Mac que quieren dictado en todas las aplicaciones, no solo en los campos de texto de Apple",
        "Personas que prefieren una licencia de por vida en lugar de otra herramienta de escritura mensual",
        "Redacción sensible a la privacidad donde la voz debe transcribirse en el equipo del usuario por defecto",
      ],
      decisionCriteria: [
        {
          title: "Dónde aterriza el texto",
          body: "Una herramienta de dictado para Mac útil debería pegar el texto en el editor, el navegador, el cuadro de chat o el campo de prompt de IA que ya tengas abierto.",
        },
        {
          title: "Modelo de privacidad",
          body: "Comprueba si la voz se transcribe en el dispositivo, se envía a un proveedor o se combina con formato opcional en la nube.",
        },
        {
          title: "Coste después del primer año",
          body: "Las herramientas de dictado por suscripción suelen parecer baratas al registrarse y se vuelven caras una vez que forman parte de tu flujo de trabajo diario.",
        },
      ],
      competitorNotes: [
        {
          title: "Apple Dictation",
          body: "Ideal para empezar gratis con algo integrado, pero menos enfocado en flujos de trabajo extensos de usuarios avanzados y en el control del modelo entre aplicaciones.",
        },
        {
          title: "Superwhisper",
          body: "Producto sólido y nativo de Mac, pero solo para Mac y con precio por suscripción para quienes quieren ser dueños de la herramienta.",
        },
        {
          title: "Wispr Flow",
          body: "Pulido para una captura rápida, pero su precio recurrente y su arquitectura centrada en la nube no son adecuados para todos los compradores.",
        },
      ],
      faq: [
        {
          q: "¿Esto reemplaza a Apple Dictation?",
          a: "Para la escritura diaria, los prompts y las respuestas, sí. No pretende reemplazar la navegación completa de Control por voz de macOS.",
        },
        {
          q: "¿Voicetypr funciona en Mac con Intel?",
          a: "Sí. Voicetypr es compatible con macOS 13+ en Intel y Apple Silicon, y se recomienda Apple Silicon para los modelos locales más rápidos.",
        },
        {
          q: "¿Qué permanece local?",
          a: "Tu voz se transcribe en tu equipo por defecto. El formato opcional con IA solo puede enviar texto si lo activas.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr en Mac",
  },
  "windows-dictation": {
    slug: "windows-dictation",
    h1: "El mejor software de dictado para Windows en 2026",
    lede:
      "El Reconocimiento de voz de Windows quedó obsoleto en 2024. Dragon todavía parece anclado en otra época. Esto es lo que realmente funciona en 2026.",
    angle: "roundup",
    competitors: [
      {
        name: "Windows Speech",
        price: "Gratis (obsoleto)",
        platforms: "Windows",
        offline: "Sí",
        subscription: false,
      },
      {
        name: "Dragon",
        price: "$500+",
        platforms: "Windows",
        offline: "Sí",
        subscription: false,
      },
      {
        name: "Otter.ai",
        price: "$10/mes",
        platforms: "Web",
        offline: "No",
        subscription: true,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Reemplaza el obsoleto Reconocimiento de voz de Windows",
      "Modelos de IA locales modernos sin el ritual de entrenamiento de Dragon",
      "Funciona en todas las aplicaciones de Windows: VS Code, Word, navegadores",
      "Funciona sin conexión para la transcripción local tras la configuración",
    ],
    decisionSupport: {
      searchIntent:
        "Encuentra un reemplazo práctico para el obsoleto Reconocimiento de voz de Windows, Dragon y las herramientas de transcripción solo web.",
      bestFor: [
        "Usuarios de Windows que dictan en Word, navegadores, Cursor, correo electrónico y chat",
        "Personas que reemplazan el clásico Reconocimiento de voz de Windows por un modelo local moderno",
        "Compradores que quieren dictado privado a diario sin una suscripción recurrente",
      ],
      decisionCriteria: [
        {
          title: "Compatibilidad actual con Windows",
          body: "Evita las herramientas cuya propuesta para Windows esté obsoleta, sea solo para navegador o sea secundaria respecto a un producto para Mac.",
        },
        {
          title: "Transcripción local",
          body: "Para prompts y documentos sensibles, la voz debería transcribirse en el equipo del usuario por defecto en lugar de subirse para el dictado.",
        },
        {
          title: "Fricción en la configuración",
          body: "El dictado moderno no debería requerir entrenar un perfil de voz antes de resultar útil en las aplicaciones normales.",
        },
      ],
      competitorNotes: [
        {
          title: "Reconocimiento de voz de Windows",
          body: "Familiar para los usuarios de toda la vida, pero obsoleto y ya no es el camino a seguir para el dictado en Windows.",
        },
        {
          title: "Dragon Professional",
          body: "Sigue siendo útil para algunos flujos de trabajo especializados, pero es caro y más pesado de lo que necesita la mayoría del dictado moderno del día a día.",
        },
        {
          title: "Otter.ai",
          body: "Más adecuado para reuniones y transcripciones que para la entrada de texto privada en aplicaciones de escritorio.",
        },
      ],
      faq: [
        {
          q: "¿Esto es para Windows 10 o Windows 11?",
          a: "Voicetypr es compatible con Windows 10 y versiones posteriores, así que cubre a quienes no están listos o no pueden pasar todos sus equipos a Windows 11.",
        },
        {
          q: "¿Reemplaza a Windows Voice Access?",
          a: "Reemplaza la entrada de texto centrada en el dictado, no la capa completa de comandos de accesibilidad que ofrece Voice Access.",
        },
        {
          q: "¿La transcripción local funciona sin conexión?",
          a: "Tras la configuración, la transcripción local se ejecuta en tu equipo. El formato opcional con IA puede usar llamadas al proveedor solo de texto cuando está activado.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr en Windows",
  },
  "offline-dictation": {
    slug: "offline-dictation",
    metaTitle: "La mejor app de dictado sin conexión (2026) | Voicetypr",
    h1: "La mejor app de dictado sin conexión en 2026: funciona sin internet",
    lede:
      "Voicetypr transcribe tu voz localmente tras la configuración: no necesitas internet para el dictado del día a día. Estas son las opciones reales sin conexión y lo que «sin conexión» abarca en realidad.",
    angle: "category-owner",
    competitors: [
      {
        name: "Windows Speech",
        price: "Gratis (obsoleto)",
        platforms: "Windows",
        offline: "Sí",
        subscription: false,
        limitation: "Opción heredada gratuita, pero obsoleta para flujos de trabajo a largo plazo en Windows.",
      },
      {
        name: "Dragon",
        price: "$500+",
        platforms: "Windows",
        offline: "Sí",
        subscription: false,
        limitation: "El referente heredado sin conexión, pero caro y más pesado de configurar.",
      },
      {
        name: "Apple Dictation",
        price: "Gratis",
        platforms: "macOS",
        offline: "No",
        subscription: false,
        limitation: "Cómodo en Mac, pero no es una app de dictado sin conexión multiplataforma.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation: "Modelos locales modernos para Mac + Windows, vendidos como licencia de por vida.",
      },
    ],
    whySwitch: [
      "Transcripción local multiplataforma para Mac y Windows",
      "Modelos de IA locales modernos sin la carga de configuración de Dragon",
      "Instálalo en los equipos donde necesites dictado privado",
      "Sin portal de cuenta mensual para la transcripción local del día a día",
    ],
    decisionSupport: {
      searchIntent:
        "Entiende qué opciones de dictado usan transcripción local y qué abarca y qué no el modo sin conexión.",
      bestFor: [
        "Personas que dictan borradores, prompts, notas o material de clientes que son sensibles",
        "Viajes, entornos con poca conectividad y entornos restringidos tras configurar el modelo",
        "Compradores que comparan herramientas sin conexión al estilo de Dragon con la transcripción de IA local moderna",
      ],
      decisionCriteria: [
        {
          title: "Define «sin conexión» con precisión",
          body: "Separa la transcripción local de la configuración, las descargas de modelos, las comprobaciones de licencia, las actualizaciones y el formato opcional con IA.",
        },
        {
          title: "Calidad del modelo",
          body: "El dictado sin conexión solo es útil si el modelo local es lo bastante preciso con los acentos, la puntuación y el habla extensa.",
        },
        {
          title: "Cobertura de aplicaciones",
          body: "La transcripción sin conexión aún tiene que aterrizar limpiamente en la aplicación donde realmente estás escribiendo.",
        },
      ],
      competitorNotes: [
        {
          title: "Dragon",
          body: "El referente heredado sin conexión para Windows, pero su precio y su proceso de configuración son más de lo que muchos usuarios necesitan.",
        },
        {
          title: "Windows Speech",
          body: "Una opción más antigua de Windows, ahora obsoleta para los usuarios que planean un flujo de trabajo a largo plazo.",
        },
        {
          title: "Apple Dictation",
          body: "Cómodo en Mac, pero no es un producto multiplataforma que puedas comprar una vez y estandarizar en todos los equipos.",
        },
      ],
      faq: [
        {
          q: "¿Qué significa «sin conexión» aquí?",
          a: "Voicetypr transcribe tu voz en tu equipo tras la configuración. El formato opcional con IA puede enviar texto si lo activas.",
        },
        {
          q: "¿Necesito internet para instalar los modelos?",
          a: "Sí, la configuración y las descargas de modelos requieren conexión. La afirmación de «sin conexión» se refiere a la transcripción local del día a día tras la configuración.",
        },
        {
          q: "¿El dictado sin conexión es lo mismo que el control por voz completo?",
          a: "No. El dictado introduce texto; el control por voz navega por el sistema operativo. Algunas herramientas hacen ambas cosas, pero resuelven tareas distintas.",
        },
      ],
      offlineCaveat:
        "«Sin conexión» en esta guía significa transcripción local tras la configuración, no todos los servicios que la rodean, como las descargas, las actualizaciones, las licencias o el formato de texto opcional.",
    },
    ctaText: "Consigue dictado sin conexión",
  },
  "windows-voice-typing": {
    slug: "windows-voice-typing",
    h1: "El mejor software de escritura por voz para Windows en 2026",
    lede:
      "Windows incluye escritura por voz integrada, pero prioriza la conexión a internet y está enfocada en sesiones cortas. Si quieres un dictado privado que funcione en todo tu escritorio, compara aquí las opciones reales.",
    angle: "roundup",
    competitors: [
      {
        name: "Windows Voice Typing",
        price: "Gratis",
        platforms: "Windows 11",
        offline: "No",
        limitation: "Gratis, pero muy básico: prioriza la conexión, flojo para borradores largos y sin un control real del flujo de trabajo.",
        subscription: false,
      },
      {
        name: "Windows Voice Access",
        price: "Gratis",
        platforms: "Windows 11 22H2+",
        offline: "Parcial",
        limitation: "Gratis, pero pensado ante todo para controlar el PC. El dictado es solo una parte de una herramienta más pesada.",
        subscription: false,
      },
      {
        name: "Dragon Professional",
        price: "$500+",
        platforms: "Windows",
        offline: "Sí",
        limitation: "Funciona sin conexión, pero es caro y todavía se siente como software heredado.",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        limitation: "Mejor experiencia diaria: controles desde el panel, retoque opcional con IA, transcripción local y escritura en todas las aplicaciones.",
        subscription: false,
      },
    ],
    whySwitch: [
      "Funciona en las aplicaciones normales de Windows sin un cuadro de dictado del navegador",
      "Transcripción local para prompts, correos y documentos privados",
      "Controles desde el panel, ajustes predefinidos y retoque opcional con IA para un texto más limpio",
      "Paga una vez en lugar de añadir otra herramienta de IA mensual",
    ],
    decisionSupport: {
      searchIntent:
        "Compara Windows Voice Typing, Windows Voice Access, Dragon y una app de dictado local de pago único para la entrada de texto del día a día.",
      bestFor: [
        "Usuarios de Windows que quieren una herramienta de escritura por voz dedicada en lugar de un atajo integrado",
        "Personas que escriben prompts largos, correos, especificaciones y notas en muchas aplicaciones",
        "Usuarios preocupados por la privacidad que quieren transcripción local por defecto",
      ],
      decisionCriteria: [
        {
          title: "Ráfagas cortas frente a borradores largos",
          body: "La escritura por voz integrada está bien para fragmentos rápidos; la redacción extensa necesita un flujo de trabajo que siga siendo cómodo a lo largo de sesiones repetidas.",
        },
        {
          title: "Control integrado frente a app dedicada",
          body: "Voice Access es un control de accesibilidad más amplio. Voicetypr es más acotado y más fácil de entender: mantén pulsada una tecla de acceso rápido, habla y pega el texto.",
        },
        {
          title: "Expectativas de privacidad",
          body: "Comprueba si el dictado prioriza la conexión, es parcialmente sin conexión o es local por defecto.",
        },
      ],
      competitorNotes: [
        {
          title: "Windows Voice Typing",
          body: "Gratis y cómodo, pero diseñado para el dictado integrado de Windows en lugar de un flujo de trabajo de pago entre aplicaciones.",
        },
        {
          title: "Windows Voice Access",
          body: "Software de accesibilidad importante para controlar el PC, pero más pesado de lo que muchos usuarios necesitan para una simple entrada de texto.",
        },
        {
          title: "Dragon Professional",
          body: "Potente para algunos usuarios de dictado profesional, pero caro si tu necesidad principal es la conversión de voz a texto moderna en las aplicaciones del día a día.",
        },
      ],
      faq: [
        {
          q: "¿Por qué no usar simplemente Windows Voice Typing?",
          a: "Úsalo si te basta con un dictado corto y ocasional. Voicetypr es para quienes quieren un flujo de trabajo diario dedicado entre aplicaciones.",
        },
        {
          q: "¿Voicetypr es un controlador de accesibilidad?",
          a: "No. Se centra en el dictado y en la entrada de texto que se pega en el cursor, no en el control completo del PC mediante comandos.",
        },
        {
          q: "¿Funciona fuera de las aplicaciones de Microsoft?",
          a: "Sí. Voicetypr pega texto en los campos de texto normales de navegadores, editores, chat, correo electrónico y herramientas de IA.",
        },
      ],
    },
    ctaText: "Prueba la escritura por voz privada en Windows",
  },
  "windows-speech-to-text": {
    slug: "windows-speech-to-text",
    h1: "La mejor app de voz a texto para Windows en 2026",
    lede:
      "Para los usuarios de Windows, la voz a texto se divide en tres categorías: herramientas gratuitas integradas, software de dictado clásico y caro, e IA local moderna. Esta es la opción práctica.",
    angle: "category-owner",
    competitors: [
      {
        name: "Microsoft Dictate",
        price: "Gratis / Microsoft 365",
        platforms: "Apps de Office",
        offline: "No",
        subscription: false,
      },
      {
        name: "Windows Voice Typing",
        price: "Gratis",
        platforms: "Windows 11",
        offline: "No",
        subscription: false,
      },
      {
        name: "Dragon Professional",
        price: "$500+",
        platforms: "Windows",
        offline: "Sí",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "Todas las apps en Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Dicta en Cursor, ChatGPT, Word, Gmail, Slack, Notion y más",
      "Sin depender de Microsoft 365 para el dictado diario",
      "Mejor para prompts largos y borradores extensos",
      "Privado por defecto, porque el audio se queda en tu equipo",
    ],
    decisionSupport: {
      searchIntent:
        "Elige una app de voz a texto para Windows pensada para Office, navegadores, prompts de IA, herramientas para desarrolladores y la escritura diaria en el escritorio.",
      bestFor: [
        "Personas que piensan hablando y necesitan texto en muchas apps de Windows",
        "Usuarios que comparan Microsoft Dictate, Windows Voice Typing, Dragon y la transcripción con IA local",
        "Profesionales que quieren usar menos el teclado sin comprometerse a una suscripción",
      ],
      decisionCriteria: [
        {
          title: "Alcance de uso",
          body: "Las herramientas que solo funcionan en Office resuelven un problema más limitado que una app de escritorio capaz de pegar texto en cualquier campo.",
        },
        {
          title: "Propiedad",
          body: "Si la voz a texto pasa a formar parte de tu día a día al escribir, compara el coste a largo plazo, no solo el precio del primer mes.",
        },
        {
          title: "Texto sensible",
          body: "La transcripción local importa cuando hablas de datos de clientes, trabajo sin publicar o prompts privados.",
        },
      ],
      competitorNotes: [
        {
          title: "Microsoft Dictate",
          body: "Útil dentro de Office, pero no es lo mismo que un flujo de voz a texto para todo el sistema, en cualquier app.",
        },
        {
          title: "Windows Voice Typing",
          body: "Bueno para el dictado breve integrado, pero menos destacable para usuarios avanzados que quieren control del modelo y un pago único de por vida.",
        },
        {
          title: "Dragon Professional",
          body: "Una opción clásica y sólida, pero el precio inicial es difícil de justificar para muchos flujos de escritura de la era de la IA.",
        },
      ],
      faq: [
        {
          q: "¿Sirve solo para Microsoft Word?",
          a: "No. Voicetypr funciona en cualquier sitio donde un campo de texto normal acepte texto pegado.",
        },
        {
          q: "¿Es una app para transcribir reuniones?",
          a: "No. Está hecha para el dictado personal en la app donde estás escribiendo, no para registros compartidos de reuniones.",
        },
        {
          q: "¿Puedo usarla para prompts de IA?",
          a: "Sí. Cursor, Claude, ChatGPT y los cuadros de prompt del navegador son usos principales.",
        },
      ],
    },
    ctaText: "Consigue voz a texto para Windows",
  },
  "accessible-dictation": {
    slug: "accessible-dictation",
    h1: "El mejor software de dictado accesible en 2026",
    lede:
      "Si escribir te resulta doloroso, lento o poco fiable, el dictado tiene que funcionar en todas partes, no solo dentro de un editor de documentos. Estas son las opciones de dictado por voz accesibles que merece la pena comparar.",
    angle: "roundup",
    competitors: [
      {
        name: "Windows Voice Access",
        price: "Gratis",
        platforms: "Windows 11",
        offline: "Parcial",
        limitation: "Gratis, pero muy orientado al control. Genial para navegar, pero torpe cuando solo necesitas texto limpio.",
        subscription: false,
      },
      {
        name: "Apple Voice Control",
        price: "Gratis",
        platforms: "macOS",
        offline: "Parcial",
        limitation: "Gratis, pero solo para Mac y centrado en comandos. No es un flujo de escritura enfocado.",
        subscription: false,
      },
      {
        name: "Dragon Professional",
        price: "$500+",
        platforms: "Windows",
        offline: "Sí",
        limitation: "Una larga trayectoria, pero el precio es difícil de asumir para la entrada de texto básica.",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        limitation: "Mejor experiencia diaria: controles desde el panel, pulido opcional con IA, transcripción local y entrada de texto multiplataforma.",
        subscription: false,
      },
    ],
    whySwitch: [
      "Funciona para lesiones por esfuerzo repetitivo, túnel carpiano, dislexia, TDAH y los días de poca energía para teclear",
      "Sin flujos limitados al navegador ni configuración de plugins para cada app",
      "Los controles del panel y el pulido opcional con IA hacen que el flujo sea más fácil de ajustar",
      "El pago único de por vida hace que sea más fácil conservar esta herramienta de apoyo",
    ],
    decisionSupport: {
      searchIntent:
        "Compara herramientas de dictado para personas que necesitan escribir con menos esfuerzo por dolor, fatiga, dislexia, TDAH, lesiones por esfuerzo repetitivo o túnel carpiano.",
      bestFor: [
        "Personas que necesitan teclear menos en las apps que ya usan",
        "Compradores de accesibilidad que quieren un flujo de dictado sencillo, basado en un atajo de teclado",
        "Usuarios que quieren una herramienta de apoyo que puedan conservar sin facturación mensual",
      ],
      decisionCriteria: [
        {
          title: "Dictado frente a control por voz",
          body: "El dictado accesible introduce texto. El control por voz además hace clic, navega y da órdenes al sistema. Ten claro qué problema estás resolviendo.",
        },
        {
          title: "Repetición sin fricción",
          body: "La mejor adaptación es la que es lo bastante sencilla para usarla en los días de cansancio: un atajo, hablas y pegas.",
        },
        {
          title: "Durabilidad del precio",
          body: "Para una herramienta de accesibilidad de uso diario, la propiedad predecible puede importar tanto como la primera lista de funciones.",
        },
      ],
      competitorNotes: [
        {
          title: "Windows Voice Access",
          body: "Potente para controlar Windows, pero más amplio y pesado que un flujo dedicado solo al dictado.",
        },
        {
          title: "Apple Voice Control",
          body: "Útil para la accesibilidad en Mac, sobre todo para comandos, pero no es un producto de dictado de pago multiplataforma.",
        },
        {
          title: "Dragon Professional",
          body: "Históricamente importante para usos de accesibilidad, pero caro para usuarios que principalmente necesitan entrada de texto moderna.",
        },
      ],
      faq: [
        {
          q: "¿Es Voicetypr un software médico?",
          a: "No. Es una herramienta de dictado pensada para la productividad y la accesibilidad, no un dispositivo médico ni una evaluación clínica de adaptaciones.",
        },
        {
          q: "¿Puede ayudar si escribir duele?",
          a: "Puede reducir el uso del teclado al pasar a la voz la redacción, las respuestas y los prompts. No sustituye el consejo médico ni la atención ergonómica.",
        },
        {
          q: "¿Controla el ordenador por voz?",
          a: "No. Voicetypr se centra en el dictado de texto. Usa Windows Voice Access o Apple Voice Control cuando necesites comandos completos de navegación.",
        },
      ],
    },
    ctaText: "Prueba el dictado por voz accesible",
  },
  "voice-to-text-for-developers": {
    slug: "voice-to-text-for-developers",
    h1: "La mejor voz a texto para desarrolladores en 2026",
    metaTitle: "Mejor voz a texto para desarrolladores (2026): prompts, commits y código",
    lede:
      "La mayoría de las herramientas de dictado están hechas para la prosa, no para editores, terminales y cuadros de prompts de IA. Estas son las opciones que de verdad encajan en el día a día de un desarrollador, incluida la que se ejecuta en local y pega en cualquier app.",
    angle: "roundup",
    competitors: [
      {
        name: "Wispr Flow",
        price: "$15/mes",
        platforms: "macOS + Windows",
        offline: "No",
        subscription: true,
        limitation: "Captura rápida, pero basada en la nube y con precio de suscripción: tus prompts y el contexto de tu código salen de tu equipo.",
      },
      {
        name: "Superwhisper",
        price: "$8.49/mes+",
        platforms: "macOS",
        offline: "Parcial",
        subscription: true,
        limitation: "Buen dictado nativo para Mac, pero solo para Mac y con precio de suscripción.",
      },
      {
        name: "Talon Voice",
        price: "Gratis (beta de pago)",
        platforms: "macOS + Windows + Linux",
        offline: "Sí",
        subscription: false,
        limitation: "Potente para programar sin manos y para comandos de voz, pero con una curva de aprendizaje pronunciada y una configuración de gramática de comandos.",
      },
      {
        name: "OpenAI Whisper (self-host)",
        price: "Gratis (hazlo tú mismo)",
        platforms: "Multiplataforma",
        offline: "Sí",
        subscription: false,
        limitation: "Es un modelo, no una app: sin atajo de teclado, sin pegar en cualquier sitio; el flujo lo construyes y lo mantienes tú.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation: "App de pago único que pega en cualquier editor, terminal o cuadro de prompts, con una CLI programable y una API local.",
      },
    ],
    whySwitch: [
      "Pega en Cursor, VS Code, la terminal, ChatGPT y Claude, sin un plugin para cada app",
      "Transcribe en tu equipo por defecto, así los prompts y el contexto del código se quedan en local",
      "Una Agent CLI programable y una API HTTP local para automatizar",
      "Paga una vez en lugar de sumar otra suscripción mensual a tus facturas de IA",
    ],
    decisionSupport: {
      searchIntent:
        "Compara herramientas de voz a texto que encajan en el flujo de trabajo de un desarrollador: dictar prompts, mensajes de commit, descripciones de PR y documentación en un editor, la terminal y un chat de IA.",
      bestFor: [
        "Desarrolladores que dictan prompts en Cursor, Claude Code o ChatGPT todo el día",
        "Quienes quieren mensajes de commit, descripciones de PR y documentación por voz sin salir de la app en la que están",
        "Desarrolladores preocupados por la privacidad que prefieren que el contexto de su código y sus prompts se queden en el dispositivo",
      ],
      decisionCriteria: [
        {
          title: "¿Funciona en tus herramientas reales?",
          body: "Una herramienta pensada para desarrolladores tiene que pegar en tu editor, tu terminal y tu cuadro de prompts de IA, no solo en una ventana de notas o una pestaña del navegador.",
        },
        {
          title: "¿A dónde va tu texto?",
          body: "Los prompts y las descripciones de código son sensibles. Comprueba si la transcripción se ejecuta en el dispositivo o envía el audio en streaming a un proveedor.",
        },
        {
          title: "¿Puedes automatizarlo?",
          body: "Una CLI o una API local convierten el dictado en algo que tus propios scripts y agentes pueden invocar, y no solo en un atajo de teclado manual.",
        },
      ],
      competitorNotes: [
        {
          title: "Wispr Flow",
          body: "Pulido y rápido, pero centrado en la nube y con precio de suscripción: mala opción si quieres que los prompts y el código se queden en local o ser dueño de la herramienta.",
        },
        {
          title: "Talon Voice",
          body: "La herramienta de referencia para programar totalmente sin manos y con comandos de voz. Vale la pena para configuraciones orientadas a la accesibilidad, pero exige un tiempo de configuración que la mayoría de quienes dictan prompts no necesitan.",
        },
        {
          title: "OpenAI Whisper",
          body: "Gran modelo, y gratis si lo montas tú mismo. Tendrás que construir el atajo de teclado, el paso de pegado y la integración con la app que una herramienta terminada ya te da.",
        },
      ],
      faq: [
        {
          q: "¿Puedo dictar en Cursor, VS Code o Claude Code?",
          a: "Sí. Voicetypr pega el texto transcrito en cualquier campo donde tengas el cursor, así que funciona en Cursor, VS Code, Claude Code, ChatGPT, Cline, Windsurf, Aider y cualquier terminal, sin ningún plugin que instalar.",
        },
        {
          q: "¿Puede un script o un agente invocarlo directamente?",
          a: "Sí. Una Agent CLI programable y una API HTTP local permiten que los scripts y agentes ejecuten la transcripción de forma programática: envías audio, obtienes texto y eliges el modelo en cada llamada.",
        },
        {
          q: "¿Mis prompts y mi código siguen siendo privados?",
          a: "Por defecto tu voz se transcribe en tu equipo, así que el audio nunca sale del dispositivo. El formateo opcional con IA envía solo texto cuando lo activas, nunca el audio.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr para programar",
  },
  "dictation-for-writers": {
    slug: "dictation-for-writers",
    h1: "El mejor software de dictado para escritores en 2026",
    metaTitle: "Mejor software de dictado para escritores (2026): novelas y blogs",
    lede:
      "Escribir un libro o una pila de publicaciones por voz no debería significar alquilar una herramienta por meses ni subir trabajo sin publicar a la nube. Estas son las opciones honestas para escritores, incluida la que redacta directamente en tu manuscrito real, sin conexión.",
    angle: "roundup",
    competitors: [
      {
        name: "Dragon Professional",
        price: "$699 pago único",
        platforms: "Windows",
        offline: "Sí",
        subscription: false,
        limitation: "Dictado preciso sin conexión y con comandos de edición avanzados, pero con un precio único elevado y solo para Windows desde que se retiró la edición para Mac.",
      },
      {
        name: "Otter.ai",
        price: "Gratis; Pro $16.99/mes",
        platforms: "Web, iOS, Android",
        offline: "No",
        subscription: true,
        limitation: "Hecho para transcribir reuniones y grabaciones en la nube, no para redactar un capítulo directamente en tu editor.",
      },
      {
        name: "Apple Dictation",
        price: "Gratis",
        platforms: "macOS + iOS",
        offline: "Parcial",
        subscription: false,
        limitation: "Gratis e integrado, pero pensado para frases breves más que para la redacción extensa y sostenida con prosa cargada de puntuación.",
      },
      {
        name: "Google Docs Voice Typing",
        price: "Gratis",
        platforms: "Navegador Chrome",
        offline: "No",
        subscription: false,
        limitation: "Gratis y útil en un apuro, pero solo funciona dentro de Google Docs en Chrome y envía tu audio a los servidores de Google.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation: "App de pago único que redacta texto limpio en cualquier herramienta de escritura —Scrivener, Word, Docs, Ulysses o tu CMS— con transcripción en el dispositivo por defecto.",
      },
    ],
    whySwitch: [
      "Redacta en la app de escritura que ya usas: Scrivener, Word, Google Docs, Ulysses o tu CMS",
      "Transcribe tu manuscrito en tu propio equipo por defecto, así los borradores sin publicar siguen siendo privados",
      "Paga una vez en lugar de alquilar una herramienta de dictado por meses mientras escribes un libro",
      "Los modelos locales aguantan las sesiones largas, sin límites de tiempo ni de subida",
    ],
    decisionSupport: {
      searchIntent:
        "Compara herramientas de dictado para la escritura extensa —novelas, artículos, publicaciones de blog y newsletters— según dónde acaba el texto, cuánto cuesta con el tiempo y qué permanece privado.",
      bestFor: [
        "Novelistas y escritores de formato largo que redactan miles de palabras por voz y las quieren en su manuscrito real",
        "Bloggers y periodistas que prefieren tener una herramienta de pago único antes que añadir otra suscripción mensual",
        "Escritores que manejan borradores sin publicar o bajo embargo y quieren que la voz se transcriba en el dispositivo",
      ],
      decisionCriteria: [
        {
          title: "¿Escribe donde tú escribes?",
          body: "Una herramienta de dictado para escritores debería pegar en la app de tu manuscrito, no obligarte a copiar una transcripción desde una ventana aparte.",
        },
        {
          title: "Coste a lo largo de todo un libro",
          body: "Una suscripción parece pequeña al mes, pero escribir un libro o un año de publicaciones la convierte en una factura recurrente; una licencia de pago único es predecible.",
        },
        {
          title: "¿Quién ve tu borrador?",
          body: "El trabajo sin publicar es sensible. Comprueba si tu voz se transcribe en el dispositivo o se sube a los servidores de un proveedor.",
        },
      ],
      competitorNotes: [
        {
          title: "Dragon Professional",
          body: "El dictado de escritorio más potente en precisión y edición por voz, y funciona sin conexión, pero supone un desembolso de $699 y es solo para Windows, así que los escritores de Mac se quedan fuera.",
        },
        {
          title: "Otter.ai",
          body: "Excelente para convertir entrevistas y reuniones en transcripciones que puedes buscar, pero es un grabador en la nube, no una herramienta para redactar prosa en tu editor.",
        },
        {
          title: "Google Docs Voice Typing",
          body: "Una opción realmente gratuita si vives en Google Docs y Chrome, pero se queda en la ventana de Docs y necesita conexión a internet para funcionar.",
        },
      ],
      faq: [
        {
          q: "¿Cuál es la mejor herramienta de dictado para escribir una novela?",
          a: "Busca aguante para el formato largo, transcripción sin conexión y texto que acabe en la app de tu manuscrito. Voicetypr pega en Scrivener, Word o Ulysses, se ejecuta en local por defecto y es una compra única.",
        },
        {
          q: "¿Sigue valiendo la pena Dragon para escritores?",
          a: "Dragon Professional es preciso, funciona sin conexión y tiene buenos comandos de edición por voz, pero cuesta $699 y es solo para Windows. Voicetypr es más barato, de pago único y funciona tanto en macOS como en Windows.",
        },
        {
          q: "¿Puedo dictar directamente en Scrivener o Word?",
          a: "Sí. Voicetypr escribe en cualquier campo donde tengas el cursor, así que funciona en Scrivener, Word, Google Docs, Ulysses y tu CMS, sin un complemento para cada app.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr para escribir",
  },
  "free-voice-to-text": {
    slug: "free-voice-to-text",
    h1: "Las mejores apps gratuitas de voz a texto en 2026",
    metaTitle: "Las mejores apps gratuitas de voz a texto en 2026 — comparativa honesta",
    lede:
      "Existen herramientas gratuitas de voz a texto realmente buenas, y la mayoría ya vienen integradas en tu Mac, tu PC o tu navegador. Aquí tienes un mapa honesto de lo que cada opción gratuita hace bien, dónde se queda corta y la única app de pago único que vale la pena conocer.",
    angle: "roundup",
    competitors: [
      {
        name: "Apple Dictation",
        price: "Gratis",
        platforms: "macOS + iOS",
        offline: "Sí en Apple Silicon",
        subscription: false,
        limitation: "Gratis, integrada y funciona en el dispositivo en Apple Silicon una vez que se descarga el modelo de lenguaje, pero es solo para Apple, y los Mac con Intel más antiguos dependen de la nube.",
      },
      {
        name: "Google Docs Voice Typing",
        price: "Gratis",
        platforms: "Web (Chrome)",
        offline: "No",
        subscription: false,
        limitation: "Realmente gratis y precisa, pero solo funciona dentro de Google Docs y Slides en Chrome, y necesita conexión a internet.",
      },
      {
        name: "Windows Voice Typing",
        price: "Gratis",
        platforms: "Windows 11",
        offline: "No",
        subscription: false,
        limitation: "Gratis y disponible en todo el sistema con Win+H, pero solo para Windows y envía tu audio a la nube de Microsoft, así que no funciona sin internet.",
      },
      {
        name: "OpenAI Whisper (self-host)",
        price: "Gratis (por tu cuenta)",
        platforms: "Multiplataforma",
        offline: "Sí",
        subscription: false,
        limitation: "El modelo es gratis y funciona totalmente sin conexión, pero no es una app: no tiene atajo de teclado ni pegado en cualquier sitio; tú mismo construyes y mantienes el flujo de trabajo.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único · prueba gratis",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation: "No es gratis: pago único desde $39 con una prueba de 3 días, sin tarjeta, pero funciona en local por defecto y pega el texto en cualquier app en Mac o Windows.",
      },
    ],
    whySwitch: [
      "Funciona en todas las apps: tu editor, el navegador, el chat o el prompt de una IA, no solo en un documento o un navegador",
      "Funciona sin conexión por defecto, así que una caída de internet nunca te corta a mitad de frase",
      "Una sola herramienta para macOS y Windows, sin límites por app ni por navegador",
      "Una app terminada con atajo de teclado y pegado en cualquier sitio, sin la configuración manual de Whisper, y pagas una sola vez en lugar de suscribirte",
    ],
    decisionSupport: {
      searchIntent:
        "Encontrar una herramienta de voz a texto realmente gratuita y saber cuándo una app de pago económica justifica su precio. Compara las opciones gratuitas integradas de Apple, Google y Microsoft, además de Whisper autoalojado, frente a una app local de pago único.",
      bestFor: [
        "Personas que quieren una forma gratuita e integrada de dictar y que no chocarán con su límite de una sola app o un solo sistema operativo",
        "Cualquiera que esté sopesando las herramientas gratuitas frente a una única app económica que funciona sin conexión en todas las apps",
        "Quienes escriben y se preocupan por la privacidad y prefieren que su voz nunca pase por un servicio en la nube",
      ],
      decisionCriteria: [
        {
          title: "¿Gratis o gratis con límites?",
          body: "Cada herramienta gratuita de esta lista tiene un límite: una sola app, un solo navegador, un solo sistema operativo o una dependencia total de internet. Elige aquella cuyo límite nunca vayas a alcanzar.",
        },
        {
          title: "¿Funciona donde realmente escribes?",
          body: "El dictado de Apple y de Windows escribe en casi cualquier campo de texto; el de Google solo funciona dentro de Docs. Comprueba que tu elección llegue a tu editor, la terminal y el cuadro de prompt de la IA, no solo a una ventana de notas.",
        },
        {
          title: "¿En la nube o en el dispositivo?",
          body: "Google Docs Voice Typing y Win+H de Windows envían tu audio a la nube y necesitan internet. El Dictado de Apple en Apple Silicon, Whisper autoalojado y Voicetypr mantienen la transcripción en tu equipo.",
        },
      ],
      competitorNotes: [
        {
          title: "Apple Dictation",
          body: "El mejor punto de partida gratuito en un Mac: disponible en todo el sistema y en el dispositivo en Apple Silicon una vez que se descarga el modelo de lenguaje. Es solo para Apple, así que deja fuera a Windows y al resto de tus dispositivos.",
        },
        {
          title: "Google Docs Voice Typing",
          body: "Precisa y gratuita, y estupenda si vives en Google Docs. No te acompaña a otras apps ni navegadores, y necesita conexión porque el reconocimiento se ejecuta en la nube.",
        },
        {
          title: "OpenAI Whisper",
          body: "Un excelente modelo abierto, gratis y que funciona sin conexión, si estás dispuesto a montarlo. Tendrás que construir el atajo de teclado, el pegado y la integración con las apps que una herramienta terminada ya te da hecha.",
        },
      ],
      faq: [
        {
          q: "¿Cuál es la mejor opción totalmente gratuita?",
          a: "Depende de tu plataforma. En un Mac, el Dictado de Apple es difícil de superar: viene integrado y funciona en el dispositivo en Apple Silicon. En Windows 11, el dictado por voz con Win+H funciona en todo el sistema, pero envía el audio a la nube. Para escribir dentro de Google Docs, el Voice Typing de Google es preciso, y para una configuración totalmente sin conexión hecha por tu cuenta, Whisper autoalojado es gratis. Cada uno es realmente gratis; cada uno tiene su límite.",
        },
        {
          q: "¿Voicetypr es gratis?",
          a: "No. Voicetypr es de pago único desde $39, con una prueba gratis de 3 días y sin tarjeta. Es la opción de pago de esta lista, y vale la pena considerarla cuando el límite de una herramienta gratuita (una sola app, un solo navegador o la dependencia de la nube) empieza a estorbarte.",
        },
        {
          q: "¿Qué opciones gratuitas funcionan de verdad sin conexión?",
          a: "El Dictado de Apple funciona en el dispositivo en los Mac con Apple Silicon una vez que se descarga el modelo de lenguaje, y Whisper autoalojado funciona totalmente sin conexión. Google Docs Voice Typing y Win+H de Windows envían el audio a la nube, así que necesitan internet. Voicetypr transcribe en tu equipo por defecto.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr gratis durante 3 días",
  },
  "dictation-for-students": {
    slug: "dictation-for-students",
    h1: "El mejor software de dictado para estudiantes en 2026",
    metaTitle: "El mejor software de dictado para estudiantes (2026) — gratis y de pago",
    lede:
      "Hay una buena herramienta de dictado gratuita para casi cualquier estudiante, y una de pago único para cuando las opciones gratuitas te estorban. Aquí tienes una mirada honesta a para qué sirve realmente cada una.",
    angle: "roundup",
    competitors: [
      {
        name: "Otter.ai",
        price: "Plan gratis; Pro desde $8.33/mes",
        platforms: "Web, iOS, Android",
        offline: "No",
        subscription: true,
        limitation:
          "Diseñada para grabar y transcribir clases y reuniones, no para dictar en el ensayo que estás escribiendo; el plan gratis llega hasta 300 minutos al mes con un límite de 30 minutos por grabación.",
      },
      {
        name: "Google Docs Voice Typing",
        price: "Gratis",
        platforms: "Navegador Chrome",
        offline: "No",
        subscription: false,
        limitation:
          "Gratis y sin límite de palabras, pero solo funciona dentro de Google Docs en Chrome y necesita conexión a internet.",
      },
      {
        name: "Apple Dictation",
        price: "Gratis",
        platforms: "macOS + iOS",
        offline: "En Apple Silicon",
        subscription: false,
        limitation:
          "Gratis, integrada y funciona en cualquier campo de texto, pero está pensada para frases cortas y se queda corta con el formato de ensayos largos.",
      },
      {
        name: "Windows Voice Typing",
        price: "Gratis",
        platforms: "Windows 11",
        offline: "No",
        subscription: false,
        limitation:
          "Gratis e integrada (Win+H), pero depende de internet y va mejor para fragmentos rápidos que para un trabajo completo.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation:
          "App de pago único que transcribe en tu portátil y pega texto limpio en cualquier app, incluido el portal web de tu centro de estudios.",
      },
    ],
    whySwitch: [
      "Funciona en cualquier app: tu editor de ensayos, el portal del centro, el correo y Google Docs por igual",
      "Transcribe en tu portátil por defecto, así que los apuntes y borradores se quedan en tu equipo",
      "Pagas una sola vez en lugar de una suscripción que se renueva cada mes con un presupuesto de estudiante",
      "Ayuda cuando escribir a mano o a teclado es la barrera: dislexia, disgrafía, lesiones por esfuerzo repetitivo o una entrega de madrugada",
    ],
    decisionSupport: {
      searchIntent:
        "Comparar herramientas de dictado gratuitas y de pago para el trabajo estudiantil (ensayos, apuntes de clase y tareas) en la web, en un Mac o en un portátil con Windows.",
      bestFor: [
        "Estudiantes que redactan ensayos y trabajos y prefieren hablar primero y editar después",
        "Quienes toman apuntes y prefieren no sumar una cuota mensual con un presupuesto de estudiante",
        "Estudiantes que dictan porque teclear es lento o doloroso: dislexia, disgrafía o lesiones por esfuerzo repetitivo",
      ],
      decisionCriteria: [
        {
          title: "Gratis, pago único o suscripción",
          body: "Con un presupuesto de estudiante, las cuentas importan. Las herramientas gratuitas integradas cubren mucho, una licencia de pago único evita las renovaciones, y una suscripción sigue cobrando cada mes que sigas escribiendo.",
        },
        {
          title: "Dónde escribes realmente",
          body: "Algunas herramientas solo funcionan en un sitio: Google Docs o un campo de texto del Mac. Comprueba que el dictado llegue al editor, al portal del navegador y al correo donde realmente vive tu trabajo de clase.",
        },
        {
          title: "¿Funciona sin wifi?",
          body: "Las herramientas en la nube se detienen cuando se cae la conexión. Si escribes en la biblioteca, en el autobús o con el wifi inestable del campus, la transcripción en el dispositivo sigue funcionando.",
        },
      ],
      competitorNotes: [
        {
          title: "Otter.ai",
          body: "Ideal para grabar una clase o una reunión y obtener después una transcripción que puedes buscar. Es un servicio de transcripción, no una herramienta para dictar en tu ensayo, y el plan gratis se detiene en 300 minutos al mes.",
        },
        {
          title: "Google Docs Voice Typing",
          body: "Realmente gratis y sin límite de palabras, algo difícil de superar para redactar directamente en Docs. Eso sí, solo funciona dentro de Google Docs en Chrome y procesa tu voz en la nube, así que necesitas conexión.",
        },
        {
          title: "Apple Dictation",
          body: "Gratis, integrada en todos los Mac y funciona en cualquier campo de texto: un buen punto de partida. Está pensada para frases cortas y ofrece poco formato, así que los ensayos largos pueden hacerse pesados.",
        },
      ],
      faq: [
        {
          q: "¿Hay alguna opción gratuita para estudiantes?",
          a: "Sí, varias. Google Docs Voice Typing es gratis y sin límite de palabras, pero solo funciona en Docs en Chrome; el Dictado de Apple y el dictado por voz de Windows son gratis y vienen integrados en el sistema; Otter.ai tiene un plan gratis limitado a 300 minutos al mes. Voicetypr es una app de pago único para cuando esos límites te estorban.",
        },
        {
          q: "¿Necesito conexión a internet?",
          a: "Depende de la herramienta. Google Docs Voice Typing y Otter.ai procesan tu voz en la nube, así que necesitan wifi. Voicetypr transcribe en tu portátil por defecto, así que sigue funcionando en la biblioteca o con una conexión débil.",
        },
        {
          q: "¿Puede ayudarme el dictado si me cuesta teclear?",
          a: "Muchos estudiantes dictan por dislexia, disgrafía o una lesión en la mano, y hablar un borrador puede ser más rápido y menos doloroso que teclearlo. Voicetypr te permite escribir con la voz en cualquier app; no es un dispositivo médico ni una herramienta de integridad académica o de calificación.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr para tus trabajos",
  },
  "voice-to-text-for-chatgpt": {
    slug: "voice-to-text-for-chatgpt",
    h1: "El mejor voz a texto para ChatGPT en 2026",
    metaTitle: "El mejor voz a texto para ChatGPT (2026) — dicta en cualquier sitio",
    lede:
      "La voz integrada de ChatGPT es realmente buena, pero solo funciona dentro de ChatGPT. Aquí tienes las opciones honestas para dictar prompts en todos los sitios donde escribes, incluida la que funciona en local y pega el texto en cualquier app.",
    angle: "roundup",
    competitors: [
      {
        name: "ChatGPT voice & dictation",
        price: "Gratis en la app",
        platforms: "iOS, Android, web, escritorio",
        offline: "No",
        subscription: false,
        limitation: "Gratis y buena, pero solo funciona dentro de ChatGPT: no puedes dictar igual en Claude, tu editor o el correo.",
      },
      {
        name: "Wispr Flow",
        price: "$15/mes",
        platforms: "macOS + Windows",
        offline: "No",
        subscription: true,
        limitation: "Rápida y pulida en todas las apps, pero está en la nube y se paga por suscripción: tus prompts salen de tu equipo.",
      },
      {
        name: "Superwhisper",
        price: "$8.49/mes+",
        platforms: "macOS + Windows",
        offline: "Parcial",
        subscription: true,
        limitation: "Un dictado capaz y con enfoque local, pero la versión Pro se paga por suscripción y la licencia de por vida de pago único ronda los $250 por adelantado.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation: "App de pago único que dicta en ChatGPT, Claude, tu editor, donde esté tu cursor, con transcripción local por defecto.",
      },
    ],
    whySwitch: [
      "Dicta en ChatGPT y Claude, Cursor, Gemini, el correo: donde esté tu cursor",
      "Transcribe en tu equipo por defecto, así que tus prompts se mantienen privados",
      "Pagas una sola vez en lugar de sumar otra suscripción encima de ChatGPT Plus",
      "CLI de agente programable y una API HTTP local para automatizar el dictado",
    ],
    decisionSupport: {
      searchIntent:
        "Comparar la voz integrada de ChatGPT con herramientas de dictado dedicadas para dictar prompts en ChatGPT, Claude y otros chats de IA durante todo el día.",
      bestFor: [
        "Personas que dictan prompts en ChatGPT todo el día y quieren la misma rapidez en Claude, Gemini y Cursor",
        "Escritores e investigadores que prefieren que sus prompts se transcriban en el dispositivo",
        "Cualquiera que prefiera pagar una sola vez antes que añadir otra suscripción encima de ChatGPT Plus",
      ],
      decisionCriteria: [
        {
          title: "¿Funciona fuera de ChatGPT?",
          body: "La voz propia de ChatGPT es estupenda dentro de la app, pero se detiene en el límite de la app. Una herramienta de dictado general debería pegar también en Claude, Cursor, el correo y cualquier otro cuadro de prompt.",
        },
        {
          title: "¿A dónde van tus prompts?",
          body: "Los prompts pueden llevar contexto sensible. Comprueba si tu voz se transcribe en el dispositivo o se envía a un proveedor antes de que el texto llegue siquiera al modelo.",
        },
        {
          title: "Cuánto cuesta además de tus gastos de IA",
          body: "Puede que ya pagues ChatGPT Plus o Claude. Una herramienta de dictado de pago único evita acumular una segunda cuota mensual sobre las suscripciones que ya tienes.",
        },
      ],
      competitorNotes: [
        {
          title: "ChatGPT voice & dictation",
          body: "Integrada, gratis y realmente útil para hablar con ChatGPT. El truco está en el límite: dicta en ChatGPT, no en Claude, tu editor ni el resto de tus apps.",
        },
        {
          title: "Wispr Flow",
          body: "Pulida y rápida en todas las apps, pero prioriza la nube y se paga por suscripción: mala opción si prefieres mantener tus prompts en local o ser dueño de la herramienta por completo.",
        },
        {
          title: "Superwhisper",
          body: "Capaz y cada vez más enfocada en lo local, pero la versión Pro es una suscripción y la opción de por vida pide unos $250 por adelantado.",
        },
      ],
      faq: [
        {
          q: "¿ChatGPT no tiene ya voz?",
          a: "Sí: ChatGPT tiene un modo de voz y dictado integrados, y funcionan bien. La limitación es que solo funcionan dentro de ChatGPT. En cuanto cambias a Claude, Cursor o tu correo, vuelves a teclear. Una herramienta para todo el sistema como Voicetypr dicta en todos ellos.",
        },
        {
          q: "¿Funciona con Claude y otros chats de IA?",
          a: "Sí. Voicetypr pega el texto transcrito donde esté tu cursor, así que el mismo atajo de teclado dicta en ChatGPT, Claude, Gemini, Perplexity, Cursor y cualquier otro cuadro de prompt o app.",
        },
        {
          q: "¿Mis prompts se mantienen privados?",
          a: "Por defecto, tu voz se transcribe en tu equipo, así que el audio nunca sale del dispositivo. El formato con IA opcional envía solo texto cuando lo activas, nunca el audio.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr para ChatGPT",
  },
  "dictation-app": {
    slug: "dictation-app",
    h1: "La mejor app de dictado en 2026",
    metaTitle: "La mejor app de dictado en 2026 — opciones sin conexión y de pago único",
    lede:
      "Busca «la mejor app de dictado» y te aparecen grabadoras de reuniones, complementos de navegador y una pila de suscripciones. Aquí tienes una mirada honesta a las opciones reales, incluida la que transcribe sin conexión y escribe en cualquier app, justo donde esté tu cursor.",
    angle: "category-owner",
    competitors: [
      {
        name: "Dragon",
        price: "$699 pago único",
        platforms: "Windows",
        offline: "Sí",
        subscription: false,
        limitation: "El peso pesado del dictado de escritorio, pero con un precio de nivel profesional, solo para Windows y sin versión actual para Mac.",
      },
      {
        name: "Otter.ai",
        price: "$16.99/mes",
        platforms: "Web + iOS + Android",
        offline: "No",
        subscription: true,
        limitation: "Excelente para grabar y transcribir reuniones, pero es una grabadora en la nube: no está diseñada para escribir donde está tu cursor en distintas apps.",
      },
      {
        name: "Apple Dictation",
        price: "Gratis",
        platforms: "macOS + iOS",
        offline: "Parcial",
        subscription: false,
        limitation: "Gratis e integrada, con dictado en el dispositivo en Apple Silicon, pero atada a los campos de texto de Apple y con poco control para textos largos y entre apps.",
      },
      {
        name: "Superwhisper",
        price: "$8.49/mes+",
        platforms: "macOS + Windows",
        offline: "Parcial",
        subscription: true,
        limitation: "Un dictado sólido y centrado en la privacidad con modelos locales, pero de pago por suscripción para quienes preferirían ser dueños de la herramienta.",
      },
      {
        name: "Wispr Flow",
        price: "$15/mes",
        platforms: "macOS + Windows",
        offline: "No",
        subscription: true,
        limitation: "Captura rápida y pulida, pero está en la nube y se paga por suscripción: tu voz se transcribe fuera de tu equipo.",
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
        limitation: "App de pago único para Mac y Windows que transcribe en local por defecto y pega en cualquier app, justo donde esté tu cursor.",
      },
    ],
    whySwitch: [
      "Escribe en todas las apps: editor, navegador, chat o campo de prompt, no solo en una ventana de texto",
      "Transcribe tu voz en tu equipo por defecto, así que el audio nunca sale del dispositivo",
      "Pago único desde $39, sin suscripción mensual para seguir dictando",
      "Ejecuta modelos locales rápidos Whisper y Parakeet tanto en Mac como en Windows",
    ],
    decisionSupport: {
      searchIntent:
        "Encontrar la mejor app de dictado en general, sopesando las herramientas integradas, en la nube y de pago único para escribir con la voz en las apps de cada día.",
      bestFor: [
        "Cualquiera que quiera escribir con la voz en cualquier app, no solo en una ventana de notas o una grabadora de reuniones",
        "Quienes prefieren pagar una sola vez antes que sumar otra suscripción mensual a su conjunto de herramientas",
        "Usuarios preocupados por la privacidad que quieren que su voz se transcriba en su propio equipo",
      ],
      decisionCriteria: [
        {
          title: "¿Dónde acaba el texto?",
          body: "Una verdadera app de dictado pega en el editor, navegador, chat o campo de prompt que tenga tu cursor: no atrapa tus palabras en su propia ventana.",
        },
        {
          title: "¿A dónde va tu voz?",
          body: "Comprueba si el audio se transcribe en el dispositivo o se envía a los servidores de un proveedor. La transcripción en el dispositivo mantiene tus grabaciones completamente fuera de la nube.",
        },
        {
          title: "¿Cuánto cuesta con el tiempo?",
          body: "Las suscripciones parecen baratas al contratarlas y se acumulan año tras año. Una licencia de pago único o una herramienta integrada pueden costar mucho menos a lo largo de la vida de la app.",
        },
      ],
      competitorNotes: [
        {
          title: "Dragon",
          body: "El peso pesado del dictado profesional de escritorio, con gran precisión y comandos de voz. Las contrapartidas son una licencia de $699, compatibilidad solo con Windows y la falta de una versión actual para Mac.",
        },
        {
          title: "Otter.ai",
          body: "Diseñada para grabar y transcribir reuniones, no para escribir donde está tu cursor. Para apuntes de reuniones que puedes buscar es excelente; para dictar en cualquier app, es una categoría de herramienta distinta.",
        },
        {
          title: "Superwhisper",
          body: "Una app de dictado sólida y centrada en la privacidad, con buenos modelos locales en Mac y Windows. La principal contrapartida es el precio por suscripción para quienes preferirían comprar la herramienta una sola vez.",
        },
      ],
      faq: [
        {
          q: "¿Cuál es la diferencia entre una app de dictado y una app de transcripción?",
          a: "Una app de dictado escribe tus palabras habladas en la app que estás usando en ese momento. Una app de transcripción como Otter graba y redacta reuniones o archivos de audio después de los hechos. Voicetypr es una app de dictado: hablas y un texto limpio aparece donde está tu cursor.",
        },
        {
          q: "¿Necesito conexión a internet?",
          a: "No. Voicetypr transcribe tu voz en tu equipo por defecto, así que el dictado principal funciona totalmente sin conexión. El formato con IA opcional envía solo texto, y solo si lo activas.",
        },
        {
          q: "¿De verdad una app de pago único es más barata que una suscripción?",
          a: "Con el tiempo, normalmente sí. Voicetypr es una compra única desde $39, mientras que las herramientas de dictado en la nube suelen costar entre $8 y $17 al mes, más que el precio de Voicetypr ya dentro del primer año.",
        },
      ],
    },
    ctaText: "Prueba Voicetypr gratis",
  },
};

export const ALTERNATIVE_PAGE_ES: Record<string, SeoPage> = {
  "dragon": {
    slug: "dragon",
    metaTitle: "La mejor alternativa a Dragon (2026) | Voicetypr",
    h1: "La mejor alternativa a Dragon NaturallySpeaking en 2026",
    lede:
      "Dragon sigue siendo potente para flujos de trabajo especializados, pero muchos compradores encuentran que el coste inicial y la configuración son más pesados de lo que requiere el dictado diario. Esta es la alternativa moderna de pago único.",
    angle: "comparison",
    competitors: [
      {
        name: "Dragon",
        price: "$500+",
        platforms: "Solo Windows",
        offline: "Sí",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Precio inicial más bajo que Dragon Professional",
      "Transcripción moderna en el dispositivo, sin el flujo de entrenamiento de perfiles de Dragon",
      "Funciona también en Mac",
      "Desarrollo activo con actualizaciones periódicas",
    ],
    switchGuide: {
      voiceTyprIf: [
        "Quieres dictado moderno sin el flujo de entrenamiento de Dragon",
        "Necesitas compatibilidad con Mac y Windows",
        "Quieres un precio inicial mucho más bajo",
      ],
      otherIf: [
        "Necesitas vocabularios de comandos médicos/legales avanzados",
        "Ya has invertido en perfiles y macros de Dragon",
      ],
      notes: [
        { title: "Dragon", body: "Sigue siendo potente para flujos especializados de comando y control, pero con una configuración y un precio elevados." },
        { title: "Voicetypr", body: "Dictado moderno en el dispositivo para la escritura diaria en cualquier campo de texto." },
      ],
    },
    ctaText: "Reemplaza Dragon",
  },
  "windows-speech-recognition": {
    slug: "windows-speech-recognition",
    metaTitle: "Mejor alternativa a Windows Speech Recognition (2026) | Voicetypr",
    h1: "La mejor alternativa a Windows Speech Recognition en 2026",
    lede:
      "El clásico Windows Speech Recognition está obsoleto y ha sido reemplazado por Voice Access en las versiones más recientes de Windows 11. Si quieres dictado offline moderno para cada aplicación, Voicetypr es la mejora más limpia.",
    angle: "comparison",
    competitors: [
      {
        name: "Windows Speech Recognition",
        price: "Gratis (obsoleto)",
        platforms: "Windows 10 / Windows 11 anterior",
        offline: "Sí",
        subscription: false,
      },
      {
        name: "Windows Voice Access",
        price: "Gratis",
        platforms: "Windows 11 22H2+",
        offline: "Parcial",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Diseñado para la escritura centrada en el dictado, no para el control total del ordenador",
      "Transcripción moderna en el dispositivo en lugar del antiguo motor de voz de Windows",
      "Funciona en cualquier campo de texto normal con un solo atajo de teclado",
      "Una ruta de actualización más clara para los usuarios de Windows que aún necesitan privacidad offline",
    ],
    switchGuide: {
      voiceTyprIf: [
        "Quieres dictado en aplicaciones normales, no control total del sistema operativo",
        "Necesitas una mejora más clara respecto al obsoleto Windows Speech Recognition",
        "Quieres transcripción local offline con un flujo de trabajo moderno basado en atajos de teclado",
      ],
      otherIf: [
        "Necesitas navegación y control por comandos con manos libres: Voice Access encaja mejor",
        "Solo necesitas fragmentos cortos y ocasionales de Windows Voice Typing",
      ],
      notes: [
        { title: "Windows Speech Recognition", body: "Una opción obsoleta en las versiones más recientes de Windows; correcta en su momento, pero débil como plan a largo plazo." },
        { title: "Voicetypr", body: "Herramienta de escritura centrada en el dictado para cualquier campo de texto, con modelos locales y un solo atajo de teclado." },
      ],
    },
    ctaText: "Reemplaza Windows Speech Recognition",
  },
  "otter-ai": {
    slug: "otter-ai",
    h1: "La mejor alternativa a Otter.ai en 2026",
    lede:
      "Otter.ai graba y transcribe reuniones en la nube. Si lo que realmente quieres es dictar en cualquier aplicación —offline y con un pago único—, esta es la alternativa.",
    angle: "comparison",
    competitors: [
      {
        name: "Otter.ai",
        price: "Gratis; Pro $16.99/mes",
        platforms: "Web, iOS, Android",
        offline: "No",
        subscription: true,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Dicta en cualquier aplicación: Otter graba reuniones, no escribe en tu cursor",
      "Transcribe en tu equipo por defecto en lugar de subir el audio a la nube",
      "Pago único en lugar de $16.99 al mes",
      "Funciona offline en Mac y Windows, sin necesidad de internet",
    ],
    switchGuide: {
      voiceTyprIf: [
        "Quieres dictar texto en aplicaciones, no grabar y transcribir reuniones",
        "Prefieres que tu voz permanezca en tu equipo",
        "Quieres un precio de pago único en lugar de una suscripción mensual",
      ],
      otherIf: [
        "Tu tarea principal es grabar reuniones y llamadas y obtener transcripciones con búsqueda y resúmenes",
        "Necesitas notas de reuniones compartidas y colaborativas para todo un equipo",
      ],
      notes: [
        { title: "Otter.ai", body: "Un servicio en la nube cuidado para grabar reuniones y producir resúmenes y transcripciones con búsqueda; está pensado para la captura posterior, no para el dictado en vivo." },
        { title: "Voicetypr", body: "Una herramienta de dictado: mantén pulsado un atajo de teclado, habla y un texto limpio aparece en tu cursor en cualquier aplicación, transcrito en el dispositivo por defecto." },
      ],
    },
    ctaText: "Cambia de Otter.ai",
  },
  "macwhisper": {
    slug: "macwhisper",
    h1: "La mejor alternativa a MacWhisper en 2026",
    lede:
      "MacWhisper es una aplicación de Mac privada y de pago único, pero está pensada para transcribir archivos de audio y vídeo, y solo funciona en macOS. Si quieres dictado en cualquier aplicación tanto en Mac como en Windows, esta es la alternativa.",
    angle: "comparison",
    competitors: [
      {
        name: "MacWhisper",
        price: "Gratis; Pro €59 pago único",
        platforms: "Solo macOS",
        offline: "Sí — en el dispositivo",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Funciona también en Windows: MacWhisper es solo para Mac",
      "Diseñado para dictar en cualquier aplicación en tu cursor, no para transcribir archivos a posteriori",
      "La v2 añade una Agent CLI programable y una API HTTP local para tus propios flujos de trabajo",
      "Al igual que en MacWhisper, la transcripción se ejecuta en el dispositivo, pero Voicetypr se centra en el dictado tanto en Mac como en Windows",
    ],
    switchGuide: {
      voiceTyprIf: [
        "Trabajas tanto en Mac como en Windows, no solo en macOS",
        "Quieres dictar en cualquier aplicación en tu cursor como flujo de trabajo principal",
        "Quieres automatizar el dictado con la Agent CLI de la v2 y la API HTTP local",
      ],
      otherIf: [
        "Usas solo Mac y transcribes principalmente archivos de audio y vídeo existentes: MacWhisper es excelente para eso",
        "Necesitas transcripción de archivos por lotes, etiquetas de hablante o exportación de subtítulos (SRT/VTT)",
      ],
      notes: [
        { title: "MacWhisper", body: "Una aplicación de Mac cuidada y privada, pensada para transcribir archivos de audio y vídeo en el dispositivo —procesamiento por lotes, etiquetas de hablante y exportación de subtítulos—, con dictado en todo el sistema añadido en la versión Pro." },
        { title: "Voicetypr", body: "Una herramienta centrada en el dictado en Mac y Windows: mantén pulsado un atajo de teclado, habla y un texto limpio aparece en tu cursor en cualquier aplicación, transcrito en el dispositivo, con una Agent CLI programable en la v2." },
      ],
    },
    ctaText: "Cambia de MacWhisper",
  },
  "willow-voice": {
    slug: "willow-voice",
    h1: "La mejor alternativa a Willow Voice en 2026",
    lede:
      "Willow Voice es una app de dictado con IA muy pulida, pero funciona en la nube por defecto y cobra mensualmente. Si prefieres mantener la transcripción en tu equipo y pagar una sola vez, esta es la alternativa.",
    angle: "comparison",
    competitors: [
      {
        name: "Willow Voice",
        price: "$15/mes",
        platforms: "macOS, Windows, iOS",
        offline: "Nube; sin conexión opcional (Mac)",
        subscription: true,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Transcribe en tu equipo por defecto: Willow funciona en la nube a menos que actives su modo sin conexión opcional",
      "Paga una sola vez en lugar de $15 al mes",
      "Dictado sin conexión también en Windows: el modo sin conexión de Willow es solo para Mac e iOS",
      "El mismo dictado de atajo al cursor, transcrito en el dispositivo, por un pago único",
    ],
    switchGuide: {
      voiceTyprIf: [
        "Quieres una transcripción que se ejecute en el dispositivo por defecto, no en la nube",
        "Prefieres pagar una sola vez en lugar de suscribirte cada mes",
        "Quieres dictado sin conexión tanto en Windows como en Mac",
      ],
      otherIf: [
        "Prefieres el flujo de trabajo en la nube de Willow y no te importa pagar mensualmente",
        "Quieres su app para iPhone y la sincronización en la nube entre Mac, Windows y el teléfono",
      ],
      notes: [
        { title: "Willow Voice", body: "Una app de dictado con IA muy pulida para Mac, Windows e iPhone, pero funciona en la nube por defecto y se cobra como una suscripción mensual." },
        { title: "Voicetypr", body: "Dictado de atajo al cursor que transcribe en el dispositivo por defecto, en Mac y Windows, por un pago único." },
      ],
    },
    ctaText: "Cámbiate de Willow Voice",
  },
  "talon": {
    slug: "talon",
    h1: "La mejor alternativa a Talon Voice en 2026",
    lede:
      "Talon Voice es una herramienta potente y muy querida para controlar todo tu equipo por voz, pero tiene una curva de aprendizaje real. Si solo necesitas dictado sencillo que escriba en cualquier app, esta es la alternativa más simple y de pago único.",
    angle: "comparison",
    competitors: [
      {
        name: "Talon Voice",
        price: "Gratis; beta de pago en Patreon",
        platforms: "macOS, Windows, Linux",
        offline: "Sí",
        subscription: false,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Sin gramáticas de comandos ni scripts que aprender: mantén pulsado un atajo, habla y el texto limpio aparece en tu cursor",
      "Dictado sencillo en cualquier app, no un sistema de control por voz que tengas que configurar",
      "Una app pulida y lista para usar: instálala y empieza a dictar en minutos",
      "Transcribe en el dispositivo por defecto, y pagas una sola vez en lugar de mantener una contribución en Patreon para conseguir la última versión",
    ],
    switchGuide: {
      voiceTyprIf: [
        "Solo quieres dictar texto y que aparezca en cualquier app, con casi nada de configuración",
        "Prefieres no aprender gramáticas de comandos ni mantener archivos de configuración",
        "Quieres una app pulida de pago único con transcripción en el dispositivo",
      ],
      otherIf: [
        "Necesitas control manos libres completo de tu equipo: comandos de voz, clics y navegación sin teclado, no solo dictado",
        "Dependes de la personalización y los scripts avanzados de Talon, o usas seguimiento ocular y control por sonidos como parte de una configuración de accesibilidad o por lesiones por esfuerzo repetitivo (RSI)",
      ],
      notes: [
        { title: "Talon Voice", body: "Un sistema manos libres potente y muy apreciado para manejar todo tu equipo por voz, seguimiento ocular y sonidos, muy usado para accesibilidad, lesiones por esfuerzo repetitivo (RSI) y programación por voz. Esa potencia conlleva gramáticas de comandos y configuración que hay que aprender." },
        { title: "Voicetypr", body: "Solo dictado, por diseño: mantén pulsado un atajo, habla y el texto limpio se pega en cualquier app en tu cursor, transcrito en el dispositivo. Nada que programar, pago único." },
      ],
    },
    ctaText: "Cámbiate de Talon",
  },
  "notta": {
    slug: "notta",
    h1: "La mejor alternativa a Notta en 2026",
    lede:
      "Notta graba y transcribe reuniones en la nube. Si lo que realmente quieres es dictar en cualquier app —sin conexión y con un pago único—, esta es la alternativa.",
    angle: "comparison",
    competitors: [
      {
        name: "Notta",
        price: "Gratis; Pro $13.99/mes",
        platforms: "Web, iOS, Android, Chrome",
        offline: "No",
        subscription: true,
      },
      {
        name: "Voicetypr",
        price: "Desde $39 pago único",
        platforms: "macOS + Windows",
        offline: "Sí — local por defecto",
        subscription: false,
      },
    ],
    whySwitch: [
      "Dicta en cualquier app: Notta transcribe reuniones, no escribe en tu cursor",
      "Transcribe en tu equipo por defecto en lugar de subir el audio a la nube",
      "Paga una sola vez en lugar de $13.99 al mes",
      "Funciona sin conexión en Mac y Windows, sin necesidad de internet",
    ],
    switchGuide: {
      voiceTyprIf: [
        "Quieres dictar texto en las apps, no grabar y transcribir reuniones",
        "Prefieres que tu voz se quede en tu equipo",
        "Quieres un precio de pago único en lugar de una suscripción mensual",
      ],
      otherIf: [
        "Tu tarea principal es grabar y resumir reuniones y llamadas en Zoom, Google Meet y Teams",
        "Necesitas transcripción de reuniones en varios idiomas compartida con todo un equipo",
      ],
      notes: [
        { title: "Notta", body: "Un servicio de transcripción y notas de reuniones en la nube: sus bots se unen a las llamadas de Zoom, Google Meet y Teams para generar transcripciones con etiquetas de hablante y resúmenes en docenas de idiomas, pensado para reuniones más que para el dictado en vivo." },
        { title: "Voicetypr", body: "Una herramienta de dictado: mantén pulsado un atajo, habla y el texto limpio aparece en tu cursor en cualquier app, transcrito en el dispositivo por defecto." },
      ],
    },
    ctaText: "Cámbiate de Notta",
  },
};
