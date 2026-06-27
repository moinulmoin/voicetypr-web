import type { UseCase } from "./use-cases";

/**
 * Spanish (es) translations of use-case pages, keyed by the SAME slug as the
 * English entry. `getUseCase(slug, "es")` returns these; it falls back to the
 * English entry for any slug not yet translated.
 *
 * Spanish copy here is a careful first pass — native review is recommended
 * before promoting /es use-case pages heavily. Add a slug to this map AND to
 * INDEXABLE_ALT_LOCALE_PATHS in proxy.ts (+ sitemap.ts) to make /es/use-cases/<slug>
 * indexable. Until then it stays X-Robots-Tag: noindex.
 */
export const USE_CASE_ES: Record<string, UseCase> = {
  "adhd": {
    slug: "adhd",
    title: "Voicetypr para el TDAH — Dictado por voz que sortea la fricción",
    ogTitle: "Voicetypr para el TDAH",
    description:
      "Escribe a la velocidad que piensas. Dictado por voz para personas con TDAH: captura ideas antes de que se esfumen y reduce la fricción al teclear.",
    navLabel: "TDAH",
    hubTeaser:
      "Captura ideas fugaces a la velocidad del habla: dictado por voz local que pega en Slack, Docs o la app que ya tengas activa.",
    category: "accessibility",
    order: 1,
    hero: {
      eyebrow: "voicetypr para el tdah",
      headline: "La idea acaba de irse. <em>Atrápala antes de que se vaya.</em>",
      lede:
        "Si tu mente va más rápido que tus dedos —y la idea ya no está cuando terminas de teclear la primera frase—, la voz cierra esa brecha. Voicetypr captura el pensamiento a la velocidad del habla, en local, y lo pega allí donde esté tu cursor.",
      metaStrip: ["captura a la velocidad del habla", "transcripción local", "sin rituales de configuración"],
    },
    pains: [
      {
        title: "La idea estaba ahí. Ahora ya no.",
        body:
          "Para cuando has abierto la app correcta, encontrado el documento y tecleado la primera frase, el pensamiento ya puede haberse ido. Para muchas personas con TDAH, la entrada por voz ayuda a capturar el hilo antes de que desaparezca.",
      },
      {
        title: "Empezar es lo más difícil.",
        body:
          "La fricción del arranque en frío es real. Un documento en blanco con el cursor parpadeando es un impuesto. Para mucha gente, hablar en voz alta es mucho más fácil que ponerse a teclear desde cero.",
      },
      {
        title: "El hiperfoco produce 1.000 palabras; luego no puedes leerlas.",
        body:
          "Cuando estás concentrado al máximo, el tecleo sigue el ritmo, pero la puntuación y la ortografía no. Volver luego a limpiarlo es un modo cognitivo completamente distinto.",
      },
    ],
    outcomes: [
      {
        marker: "<2s",
        title: "Del pensamiento al texto",
        body:
          "Mantén pulsado el atajo, dilo y suelta. El texto aparece en la app en la que ya estabas. Sin ventanas nuevas, sin fricción.",
        meta: "Resultado · captura",
      },
      {
        marker: "0",
        title: "Apps nuevas que aprender",
        body:
          "Funciona en Notion, Apple Notes, Things, Bear, Cursor, ChatGPT, Slack, Gmail. Allí donde normalmente teclearías, ahora puedes hablar.",
        meta: "Resultado · cero sobrecarga",
      },
      {
        marker: "∞",
        title: "Sesiones",
        body:
          "Paga una vez y conserva el flujo de trabajo. Sin rachas que mantener. Sin una app de escritura nueva que tengas que acordarte de abrir.",
        meta: "Resultado · permanencia",
      },
    ],
    workflows: [
      {
        title: "Captura la idea antes de que se esfume",
        body:
          "Estás a mitad de una tarea y te llega un pensamiento que no viene a cuento. Mantén pulsado el atajo y dilo en tu bandeja de entrada / Things / Notion / donde guardes tu lista de próximas acciones. Cuarenta y cinco segundos después vuelves a la tarea original. La idea queda capturada con tus propias palabras.",
      },
      {
        title: "Supera la página en blanco",
        body:
          "Abre el documento. Habla durante noventa segundos sobre lo que de verdad quieres decir. Para. Ahora tienes un borrador que editar, no una página en blanco por empezar. La mayoría de los bloqueos de escritura en el TDAH son bloqueos de arranque.",
      },
      {
        title: "Hiperfoco sin el impuesto de la puntuación",
        body:
          "Mientras estás concentrado al máximo, la voz sigue el ritmo. Activa la limpieza automática de puntuación si quieres, para terminar la sesión con párrafos de verdad y no con un único bloque interminable de habla.",
      },
    ],
    faqs: [
      {
        q: "¿Captará mi voz cuando pienso en voz alta y me trabo con las palabras?",
        a:
          'Sí. La transcripción en el dispositivo gestiona bastante bien las muletillas, los recomienzos y los "eh" / "mmm". El preajuste de formato Default opcional los limpia aún más cuando no los quieres en el resultado final. Deja el formato con IA desactivado si prefieres ver exactamente lo que dijiste.',
      },
      {
        q: "¿Puedo usarlo para llevar un diario con transcripción local?",
        a:
          "Sí. Voicetypr transcribe tu voz en tu propia máquina de forma predeterminada. El formato con IA opcional envía solo texto, y únicamente cuando lo activas de forma explícita; nunca el audio.",
      },
      {
        q: "¿Funciona con Things / Apple Notes / Obsidian / Notion?",
        a:
          "Sí. Voicetypr pega en cualquier campo de texto que acepte entrada de teclado. Coloca el cursor donde quieras el texto, mantén pulsado el atajo y habla. La app en la que estés no necesita saber nada de Voicetypr.",
      },
      {
        q: "Me distraigo con facilidad; ¿se me olvidará el atajo?",
        a:
          "El predeterminado es ⌘+Shift+Space en macOS o Ctrl+Shift+Space en Windows. También hay una opción de pulsar para hablar en Option/Alt+Space. La mayoría lo interioriza en una semana.",
      },
      {
        q: "¿Seguirá ayudándome en los días de poca concentración?",
        a:
          "Sí. La carga cognitiva de pulsar un atajo y hablar es menor que la de teclear desde cero. Las personas con TDAH suelen encontrar el dictado más fácil los días en que teclear se siente imposible.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Atrapa la idea <em>antes de que se vaya.</em>",
      body: "Mantén pulsado el atajo, di la idea una sola vez y pégala donde ya estabas trabajando, todo en el dispositivo de forma predeterminada. Prueba Voicetypr gratis durante 3 días.",
    },
    keywords: [
      "dictado por voz para tdah",
      "herramientas de escritura para tdah",
      "app de dictado para tdah",
      "voz a texto tdah",
      "voicetypr tdah",
    ],
  },
  "dyslexia": {
    slug: "dyslexia",
    title: "Voicetypr para la dislexia — Evita la fricción ortográfica y escribe al hablar",
    ogTitle: "Voicetypr para la dislexia",
    description:
      "Dictado por voz para la dislexia. Escribe lo que quieres decir sin pelear con la ortografía, el autocorrector ni la relectura. Transcripción local y pago único.",
    navLabel: "Dislexia",
    hubTeaser:
      "Di primero lo que quieres decir; deja que la transcripción cargue con la ortografía y el ritmo para que edites ideas, no cada tecla.",
    category: "accessibility",
    order: 2,
    hero: {
      eyebrow: "voicetypr para la dislexia",
      headline: "Di lo que quieres decir. <em>Sáltate la pelea ortográfica.</em>",
      lede:
        "Si leer tu borrador es más lento que escribirlo —y el autocorrector no para de cambiar las palabras que no debe—, sáltate la pelea. Habla, obtén el texto y sigue avanzando.",
      metaStrip: ["captura a la velocidad del habla", "transcripción local", "sin guerras con el autocorrector"],
    },
    pains: [
      {
        title: "El autocorrector libra una guerra privada contra tu ortografía.",
        body:
          "Cambia palabras que escribiste bien por otras que no querías. Y pasa por alto las que escribiste mal. En cualquier caso, gastas energía cognitiva en lo que no toca.",
      },
      {
        title: "Releer lo que escribiste frena todo el proceso.",
        body:
          "Si revisar lleva más tiempo que redactar, acabas evitando redactar. El coste de escribir sube. La cantidad que escribes baja.",
      },
      {
        title: "Los borradores largos son un impuesto, no una herramienta.",
        body:
          "Justo cuando más quieres capturar una idea compleja es justo cuando la ortografía se interpone para conseguirlo.",
      },
    ],
    outcomes: [
      {
        marker: "0",
        title: "Decisiones ortográficas por frase",
        body:
          'Tú dices las palabras. El modelo las escribe. Que recuerdes o no cómo se escribe "idiosincrasia" deja de importar.',
        meta: "Resultado · fricción",
      },
      {
        marker: "local",
        title: "Local",
        body:
          "Tu voz se transcribe en tu propia máquina. Tus borradores siguen siendo tuyos.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "cualquier",
        title: "App",
        body:
          "Funciona en Word, Pages, Google Docs, Notion, Substack, el correo: en cualquier sitio donde parpadee un cursor. Sin plugins que instalar app por app.",
        meta: "Resultado · alcance",
      },
    ],
    workflows: [
      {
        title: "Redacción larga sin el tartamudeo ortográfico",
        body:
          "Abre el documento. Mantén pulsado el atajo todo el tiempo que dure el pensamiento. Suelta. Repite. Edita al final, cuando tu mente esté en modo edición. Redactar y editar pasan a ser dos fases distintas en vez de una sola enredada.",
      },
      {
        title: "Correos y respuestas sin la interferencia del autocorrector",
        body:
          "Coloca el cursor en el cuadro de respuesta. Habla. El texto aparece pegado, no como tecleo nativo, así que el autocorrector de la app anfitriona no tiene ocasión de cuestionar tus palabras.",
      },
      {
        title: "Trabajos de clase o de la oficina donde lo que se evalúa es la idea, no la errata",
        body:
          "La voz elimina la distancia entre el vocabulario que manejas al leer y el que manejas al teclear. El vocabulario que usarías en una conversación es ahora el que acaba en la página.",
      },
    ],
    faqs: [
      {
        q: "¿Escribe el modelo correctamente las palabras poco comunes?",
        a:
          "Sí para la mayor parte del vocabulario especializado: los modelos medio y grande del dispositivo están entrenados con un corpus amplio que incluye términos técnicos, nombres y lugares. La jerga muy específica (términos científicos raros, nombres de productos de nicho) a veces necesita un retoque rápido, pero la tasa de error en palabras comunes es muy baja.",
      },
      {
        q: "¿Y los nombres y los nombres propios?",
        a:
          "Los nombres comunes funcionan. Los poco habituales a veces necesitan una corrección rápida. El preajuste de formato Default conserva las mayúsculas en los nombres que reconoce; si quieres, también puedes añadir un preajuste personalizado que conozca los nombres que usas con frecuencia.",
      },
      {
        q: "¿El formato con IA ayuda o perjudica en la escritura con dislexia?",
        a:
          "Ayuda si quieres una puntuación limpia y saltos de párrafo; desactívalo si prefieres la transcripción en bruto. El preajuste Email va bien para las respuestas. El preajuste Prompts es el mejor para las conversaciones con IA. Ambos están desactivados de forma predeterminada: tú decides activarlos.",
      },
      {
        q: "¿Se usan los datos de mi voz para entrenar modelos?",
        a:
          "No. Voicetypr transcribe tu voz en tu propia máquina de forma predeterminada. El formato con IA opcional envía solo texto cuando lo activas; tu audio no se envía para entrenar modelos.",
      },
      {
        q: "¿Funciona para alguien cuya lengua materna no es el inglés?",
        a:
          "Sí: Voicetypr admite más de 99 idiomas. El dictado funciona en tu lengua materna o en inglés. Puedes cambiar desde el selector de idioma del modelo.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Escribe a la velocidad <em>a la que hablas.</em>",
      body: "Lleva las ideas a la página a la velocidad del habla y edítalas con la vista cuando estés listo. Transcripción local de forma predeterminada; prueba de 3 días y licencia de por vida disponible.",
    },
    keywords: [
      "dictado por voz para dislexia",
      "herramienta de escritura para dislexia",
      "app de dictado para dislexia",
      "voz a texto dislexia",
      "voicetypr dislexia",
    ],
  },
  "rsi": {
    slug: "rsi",
    title: "Voicetypr para LER — Dictado por voz para el dolor de muñeca y el esfuerzo repetitivo",
    ogTitle: "Voicetypr para LER",
    description:
      "¿Dolor de muñeca o LER frenan tu escritura? Voicetypr es voz a texto sin conexión que aparta la escritura diaria de tus manos. Pago único, licencia de por vida.",
    navLabel: "LER / dolor de muñeca",
    hubTeaser:
      "Canaliza la escritura diaria por voz para que muñecas y antebrazos descansen mientras respuestas y documentos siguen llegando a tiempo.",
    category: "accessibility",
    order: 3,
    hero: {
      eyebrow: "voicetypr para la ler",
      headline: "Cuando teclear duele. <em>Habla en su lugar.</em>",
      lede:
        "Dolor de muñeca, esfuerzo repetitivo, recuperación tras una tendinitis: cuando tus manos son el cuello de botella, la voz es la válvula de alivio. Voicetypr funciona sin conexión y en todas las apps que ya usas, así que no tienes que renunciar a tus herramientas para darles un respiro a tus manos.",
      metaStrip: ["menos pulsaciones de teclas", "transcripción local", "funciona en cualquier campo de texto"],
    },
    pains: [
      {
        title: "Las pulsaciones de teclas suman más rápido de lo que crees.",
        body:
          "Las pulsaciones se acumulan entre correos, formularios, prompts y documentos. Pasado cierto volumen, tus manos llevan la cuenta. La entrada por voz puede sacar el grueso de la redacción del teclado y dejar el teclado para las ediciones.",
      },
      {
        title: "Las herramientas de voz que existen o te atan a ellas o se llevan tu audio fuera.",
        body:
          "El dictado de macOS alucina. Wispr es en la nube. Dragon es de pago anual. Ninguno te ofrece voz sin conexión, de por vida y en todas las apps con la privacidad intacta.",
      },
      {
        title: "Dejaste de escribir porque escribir dolía.",
        body:
          "Cuando el coste de teclear sube, lo primero que evitas son los textos largos: los documentos de diseño, las respuestas a clientes, las descripciones cuidadas de los pull requests. La calidad baja antes de que baje la producción.",
      },
    ],
    outcomes: [
      {
        marker: "menos",
        title: "Carga de teclado para el mismo resultado",
        body:
          "Habla para crear el borrador y luego usa el teclado para las correcciones y la estructura. El teclado deja de cargar con cada palabra.",
        meta: "Resultado · carga",
      },
      {
        marker: "cualquier",
        title: "App, cualquier campo de texto",
        body:
          "Slack, Linear, Gmail, Word, GitHub, Notion. Si tu cursor parpadea, acepta el pegado.",
        meta: "Resultado · alcance",
      },
      {
        marker: "0",
        title: "Ansiedad por la suscripción",
        body:
          "Pago único, de por vida. Tu herramienta de apoyo no va a dejar de funcionar porque un correo de renovación acabe bloqueado.",
        meta: "Resultado · permanencia",
      },
    ],
    workflows: [
      {
        title: "Descripciones de PR y comentarios de revisión de código sin teclearlos",
        body:
          "Los campos más largos que rellenan los desarrolladores son los cuerpos de los PR de GitHub y los comentarios de revisión. También son los que más se omiten cuando teclear duele. Mantén pulsado el atajo, cuenta el cambio en dos párrafos y pega. Vuelves a escribir las descripciones que escribías antes de la lesión.",
      },
      {
        title: "Correo y Slack en un día de recuperación",
        body:
          "Puedes responder tu bandeja de entrada sin perder el día. Dicta respuestas, dicta novedades, dicta la parte del standup que habrías tecleado. Las manos descansan y el trabajo continúa.",
      },
      {
        title: "Redacción larga con poco coste de pulsaciones",
        body:
          "Especificaciones, documentos de diseño, post-mortems de clientes. Háblalos. Edita un poco. Las 4.000 palabras que antes te costaban un día de tecleo ahora te cuestan noventa minutos de habla y treinta minutos de edición.",
      },
    ],
    faqs: [
      {
        q: "¿De verdad reduce tanto las pulsaciones de teclas?",
        a:
          "En un flujo típico de dictado por voz, pulsas un atajo, hablas y sueltas. En correos y documentos largos, eso puede eliminar la mayoría de las pulsaciones de redacción y dejar margen para las ediciones manuales.",
      },
      {
        q: "¿Puedo usarlo con una sola mano si tengo la otra en una férula?",
        a:
          "Sí. La función de pulsar para hablar está en Option/Alt+Space y se alcanza con una sola tecla. El modo de mantener pulsado, predeterminado, usa dos teclas; también es de una mano si puedes alcanzar el modificador con la misma mano.",
      },
      {
        q: "¿Funciona con ratones verticales / teclados divididos / hardware de accesibilidad?",
        a:
          "Sí. Voicetypr solo necesita un micrófono y un atajo que pueda escuchar. Le da igual cómo sea tu hardware de entrada. Se admiten atajos personalizados si los predeterminados entran en conflicto.",
      },
      {
        q: "¿Y para tomarme un descanso? ¿Puedo desactivarlo temporalmente?",
        a:
          "Sí: hay una pausa global desde la barra de menús / bandeja del sistema, y puedes cerrar la app por completo sin perder la configuración.",
      },
      {
        q: "¿Funcionará con mi voz si estoy cansado y no vocalizo con claridad?",
        a:
          "El modelo medio del dispositivo gestiona el habla con voz cansada mejor de lo que la gente espera. Si la claridad baja de forma notable, el modelo grande es más preciso a costa de velocidad; puedes cambiarlo en cada sesión.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Dales <em>un respiro a tus manos.</em>",
      body: "Saca la escritura repetitiva de tus muñecas sin cambiar de app: dictado sin conexión de forma predeterminada. Empieza una prueba de 3 días y consérvalo con una licencia de pago único.",
    },
    keywords: [
      "dictado por voz para LER",
      "dictado de voz LER",
      "alternativa para teclear con LER",
      "dictado por voz para el dolor de muñeca",
      "voicetypr ler",
    ],
  },
  "carpal-tunnel": {
    slug: "carpal-tunnel",
    title: "Voicetypr para el túnel carpiano — Dictado por voz cuando tus manos necesitan un descanso",
    ogTitle: "Voicetypr para el túnel carpiano",
    description:
      "Dictado por voz para el túnel carpiano y el dolor de manos. Dicta correos, documentos y respuestas en cualquier app en Mac o Windows. Pago único.",
    navLabel: "Túnel carpiano",
    hubTeaser:
      "Dicta correos, tickets y documentos cuando agarrar el teclado duele: transcripción local en las apps que ya usas.",
    category: "accessibility",
    order: 4,
    hero: {
      eyebrow: "voicetypr para el túnel carpiano",
      headline: "Tus manos piden menos. <em>Dales voz.</em>",
      lede:
        "El túnel carpiano convierte teclear en una negociación con el dolor. Voicetypr te deja seguir escribiendo correos, prompts, documentos y respuestas mientras tus manos hacen menos trabajo. Mantén pulsado un atajo, habla y suelta. El texto aparece donde ya está tu cursor.",
      metaStrip: ["menos pulsaciones", "transcripción local", "funciona en todas las apps"],
    },
    pains: [
      {
        title: "Las respuestas cortas van bien. Las largas son el problema.",
        body:
          "Un mensaje de dos líneas puede ser llevadero. Una respuesta de soporte, una actualización de proyecto o un documento largo pueden llevar tus manos al límite. El dictado pasa el texto pesado de tus dedos a tu voz.",
      },
      {
        title: "La mayoría de las herramientas de dictado añaden un sitio nuevo donde trabajar.",
        body:
          "El dictado del navegador y las herramientas que solo funcionan en documentos te obligan a pasar primero por su editor. Eso genera más copiar y pegar y más uso del ratón, justo lo que intentabas reducir.",
      },
      {
        title: "La privacidad importa más cuando hay salud de por medio.",
        body:
          "Si dictas notas médicas, adaptaciones laborales o correos privados, la transcripción en la nube puede no dar confianza. Voicetypr mantiene el audio en tu equipo de forma predeterminada.",
      },
    ],
    outcomes: [
      {
        marker: "1",
        title: "Un atajo en lugar de cientos de pulsaciones",
        body:
          "Pulsa una vez, di un párrafo y suelta. Sigues editando, pero el grueso del tecleo desaparece.",
        meta: "Resultado · carga en las manos",
      },
      {
        marker: "cualquier",
        title: "App, cualquier campo de texto",
        body:
          "Word, Gmail, Slack, Notion, Cursor, Google Docs, bandejas de soporte. Si puedes pegar ahí, Voicetypr puede poner texto.",
        meta: "Resultado · alcance",
      },
      {
        marker: "$0/mes",
        title: "Sin suscripción de adaptación",
        body:
          "Paga una vez y consérvalo. La herramienta de la que dependes no debería convertirse en otra factura mensual que justificar.",
        meta: "Resultado · permanencia",
      },
    ],
    workflows: [
      {
        title: "Tandas de correos y mensajes con menos movimientos de mano",
        body:
          "Abre la bandeja, coloca el cursor, dicta la respuesta, repásala una vez y envía. El ratón y el teclado siguen ahí, pero dejan de cargar con todo el trabajo.",
      },
      {
        title: "Documentos largos sin el pico de dolor",
        body:
          "Habla el primer borrador por bloques. Usa el teclado solo para editar y estructurar. Así el uso de tus manos se parece más a la carga de editar que a la de redactar.",
      },
      {
        title: "Prompts de IA y notas de trabajo en Windows",
        body:
          "Las cajas de prompt se alargan rápido. Dicta el contexto en ChatGPT, Claude, Cursor o tu app de notas en vez de teclear con molestias.",
      },
    ],
    faqs: [
      {
        q: "¿Tengo que mantener pulsada una tecla todo el tiempo?",
        a:
          "El flujo predeterminado usa un atajo de mantener para hablar porque es predecible y evita capturas accidentales. Si mantener una tecla te cuesta, configura el atajo más fácil de alcanzar y usa ráfagas cortas de dictado. Un modo manos libres más completo es algo natural en la hoja de ruta para personas con dolor de manos.",
      },
      {
        q: "¿Esto reemplaza el consejo médico o la ergonomía?",
        a:
          "No. Voicetypr es una herramienta de escritura, no un tratamiento. Puede reducir la carga de tecleo, pero debes seguir igualmente las indicaciones médicas y ergonómicas para tu caso concreto.",
      },
      {
        q: "¿Funciona en Windows?",
        a:
          "Sí. Voicetypr funciona en Windows y macOS. Pega texto en apps normales de Windows, como Word, Gmail, Slack, Cursor, VS Code y campos de texto del navegador.",
      },
      {
        q: "¿Se envía el audio a un servicio de transcripción en la nube?",
        a:
          "No. Voicetypr transcribe tu voz en tu equipo de forma predeterminada. El formateo opcional con IA puede enviar el texto final a un proveedor de IA si lo activas, pero nunca el audio original.",
      },
      {
        q: "¿Sirve para dictados cortos o largos?",
        a:
          "Para ambos. Las ráfagas cortas son lo más cómodo en los días de recuperación. Las sesiones largas funcionan cuando quieres redactar un correo, una nota, un prompt o un documento sin teclearlo todo.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Sigue escribiendo. <em>Usa menos las manos.</em>",
      body: "Sigue respondiendo correos y documentos cuando teclear duele: dicta en local y pega donde sea. Prueba gratis de tres días; pago único si se vuelve tu herramienta diaria.",
    },
    keywords: [
      "dictado por voz para túnel carpiano",
      "software de dictado túnel carpiano",
      "escribir sin manos túnel carpiano",
      "alternativa para teclear con túnel carpiano",
      "dictado en windows túnel carpiano",
    ],
  },
  "broken-wrist": {
    slug: "broken-wrist",
    title: "Voicetypr para una muñeca rota — Sigue escribiendo mientras se cura",
    ogTitle: "Voicetypr para una muñeca rota",
    description:
      "¿Te rompiste la muñeca? Sigue escribiendo sin teclear lento con una sola mano. Voicetypr convierte tu voz en texto en cualquier app, en local y con pago único.",
    navLabel: "Muñeca rota",
    hubTeaser:
      "Un yeso no pone en pausa tus plazos. Dicta tus correos, documentos y mensajes en cualquier app en vez de teclearlos con una sola mano.",
    category: "accessibility",
    order: 6,
    hero: {
      eyebrow: "voicetypr para una muñeca rota",
      headline: "Tu muñeca está enyesada. <em>Tus plazos no.</em>",
      lede:
        "Teclear con una sola mano es lento, y la lista de tareas no se redujo cuando te pusieron el yeso. Mantén pulsado un atajo, di la frase y Voicetypr la escribe por ti, en la app en la que ya estabas y transcrita en tu propio equipo.",
      metaStrip: ["activación con una mano", "transcripción local", "funciona en todas las apps"],
    },
    pains: [
      {
        title: "Teclear con una mano convierte un correo de cinco minutos en uno de veinte.",
        body:
          "Teclear con dos dedos de la mano buena va bien para una respuesta rápida. Una bandeja llena, un informe o un trabajo de clase es otra historia: cada palabra cuesta el triple de esfuerzo, y el yeso no se quita en seis semanas.",
      },
      {
        title: "La mayoría del dictado está atrapado en una sola app o se envía a la nube.",
        body:
          "El dictado del teléfono vive en el teléfono. Algunas herramientas solo funcionan dentro de su propio editor. Otras transmiten tu audio a un servidor. Cuando solo necesitas avanzar con el trabajo en tu ordenador, nada de eso encaja.",
      },
      {
        title: "No quieres una suscripción para un problema de seis semanas.",
        body:
          "Una lesión temporal no debería apuntarte a una factura recurrente. Necesitas algo que funcione hoy, que siga funcionando cuando te quiten el yeso y que no te siga cobrando después.",
      },
    ],
    outcomes: [
      {
        marker: "1 mano",
        title: "Actívalo sin la muñeca lesionada",
        body:
          "Pulsa el atajo con la mano buena —o usa pulsar para hablar— y luego habla. Nunca necesitas las dos manos para empezar.",
        meta: "Resultado · con una mano",
      },
      {
        marker: "cualquier app",
        title: "Escribe donde ya estabas trabajando",
        body:
          "Correo, Docs, Slack, tu IDE, un formulario web: Voicetypr pega en el campo donde esté tu cursor. Ninguna app nueva que aprender mientras ya te estás adaptando.",
        meta: "Resultado · en todas partes",
      },
      {
        marker: "una vez",
        title: "Paga una vez y consérvalo cuando te cures",
        body:
          "Una licencia de por vida, no un alquiler. Cuando tu muñeca recupere todo su ritmo, mucha gente lo sigue usando igualmente.",
        meta: "Resultado · sin suscripción",
      },
    ],
    workflows: [
      {
        title: "Vacía la bandeja sin que el yeso te frene",
        body:
          "Abre la respuesta, mantén pulsado el atajo, di lo que quieres y suelta. El texto cae en el mensaje. Despacha una mañana de correos en el tiempo que teclear con una mano habría tardado en unos pocos.",
      },
      {
        title: "Mantén el trabajo o el informe en marcha",
        body:
          "Coloca el cursor en el documento y habla el borrador por párrafos. Edita con la mano buena. La parte difícil —producir las palabras— deja de depender de dos muñecas que funcionen.",
      },
      {
        title: "Trabaja en el chat y en las revisiones de código con poco esfuerzo de manos",
        body:
          "Respuestas de Slack, comentarios en PR, notas rápidas: dilos en vez de teclearlos. Pulsar para hablar con Option/Alt+Space lo deja en una tecla y una mano.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo iniciarlo con una mano si tengo la muñeca enyesada?",
        a:
          "Sí. El atajo es una sola combinación que puedes pulsar con la mano buena (⌘+Shift+Space en macOS, Ctrl+Shift+Space en Windows), y hay una opción de pulsar para hablar en Option/Alt+Space. Nunca necesitas la mano lesionada para activarlo.",
      },
      {
        q: "¿Funciona en todas las apps o solo en una?",
        a:
          "En cualquier app con un campo de texto que acepte entrada de teclado. Coloca el cursor donde quieras el texto, mantén pulsado el atajo y habla: correo, Docs, Slack, tu editor, un formulario web. La app no necesita saber nada de Voicetypr.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local de forma predeterminada, así que tu audio se queda en tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas, nunca el audio.",
      },
      {
        q: "¿Lo seguiré queriendo cuando se cure mi muñeca?",
        a:
          "Mucha gente sí: hablar es más rápido que teclear para gran parte de la escritura. En cualquier caso no hay suscripción: es una compra única, así que conservarlo no cuesta nada extra.",
      },
      {
        q: "¿Funciona tanto en Mac como en Windows?",
        a:
          "Sí: macOS (Apple Silicon e Intel) y Windows 10+. Hay una prueba gratis de 3 días sin tarjeta, así que puedes confirmar que encaja con tu configuración antes de comprar.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Cura tu muñeca. <em>Mantén el ritmo.</em>",
      body: "Mantén pulsado el atajo con la mano buena, di la frase y pégala donde ya estabas trabajando, en local de forma predeterminada. Prueba Voicetypr gratis durante 3 días.",
    },
    keywords: [
      "dictado por voz con la muñeca rota",
      "cómo escribir con la muñeca rota",
      "software de dictado para muñeca rota",
      "voz a texto muñeca rota",
      "voz a texto escribir con una mano",
      "escribir con un yeso",
      "voicetypr muñeca rota",
    ],
  },
  "arthritis": {
    slug: "arthritis",
    title: "Voicetypr para la artritis — Sigue escribiendo cuando teclear duele",
    ogTitle: "Voicetypr para la artritis",
    description:
      "Dictado por voz para la artritis en las manos. Cuando las articulaciones rígidas hacen que teclear duela, dicta en cualquier app. Transcripción local.",
    navLabel: "Artritis",
    hubTeaser:
      "¿Mal día de articulaciones? Dicta tus correos, documentos y respuestas en cualquier app en vez de forzar dedos rígidos y doloridos por el teclado.",
    category: "accessibility",
    order: 9,
    hero: {
      eyebrow: "voicetypr para la artritis",
      headline: "Hay días en que cada tecla duele. <em>Mejor dilo.</em>",
      lede:
        "Las articulaciones de los dedos rígidas e hinchadas hacen que un día entero al teclado sea un trabajo en sí mismo, peor en las mañanas frías y durante un brote. Mantén pulsado un atajo, di en voz alta el correo o el documento y Voicetypr lo escribe donde ya está tu cursor. La transcripción se ejecuta en tu propio equipo.",
      metaStrip: ["menos carga de pulsaciones", "transcripción local", "cualquier campo de texto"],
    },
    pains: [
      {
        title: "Los mensajes cortos van bien. Una jornada entera al teclado no.",
        body:
          "Una respuesta rápida la puedes llevar. Una bandeja cargada, un informe largo o documentos uno tras otro es otra cosa: las pulsaciones se acumulan y las articulaciones de tus dedos llevan la cuenta. La voz quita el grueso de la escritura de tus manos.",
      },
      {
        title: "Las mañanas frías y los días de brote cambian las reglas.",
        body:
          "Cuando las articulaciones están rígidas e hinchadas, fallas teclas y pulsas las equivocadas, y todo se vuelve más lento. Cuánto tecleo aguantan tus manos cambia de un día a otro, a veces de una hora a otra.",
      },
      {
        title: "La rigidez convierte diez dedos en dos.",
        body:
          "Los nudillos doloridos te empujan a teclear con dos dedos: movimientos de toda la mano y la muñeca para pulsar las teclas en vez de toques ligeros de los dedos. Funciona, pero es lento, y no es como quieres escribir durante una hora seguida.",
      },
    ],
    outcomes: [
      {
        marker: "1",
        title: "Un atajo, no cien pulsaciones",
        body:
          "Pulsa una vez, di el párrafo y suelta. Sigues editando con el teclado, pero la carga de redactar se va de tus dedos.",
        meta: "Resultado · carga en las manos",
      },
      {
        marker: "cualquier",
        title: "App, cualquier campo de texto",
        body:
          "Gmail, Word, Slack, Notion, Google Docs, formularios del navegador. Si tu cursor parpadea ahí, Voicetypr puede pegar texto.",
        meta: "Resultado · alcance",
      },
      {
        marker: "una vez",
        title: "Cómpralo una vez y consérvalo para siempre",
        body:
          "Una licencia de por vida, no un alquiler. Una herramienta de entrada en la que te apoyas no debería desaparecer porque caducó una suscripción.",
        meta: "Resultado · permanencia",
      },
    ],
    workflows: [
      {
        title: "Vacía la bandeja en una mañana de manos rígidas",
        body:
          "Abre la respuesta, mantén pulsado el atajo, di lo que quieres y suelta. Repasa una vez y envía. Despacha una mañana de correos en el tiempo que las articulaciones doloridas habrían tardado en unos pocos mensajes.",
      },
      {
        title: "Mantén el documento largo en marcha",
        body:
          "Coloca el cursor en el documento y habla el borrador por bloques. Usa el teclado solo para editar y estructurar, para que el día se parezca más a la carga de editar que a una sesión entera de redactar a mano.",
      },
      {
        title: "Chat, comentarios y prompts de IA con poco esfuerzo de manos",
        body:
          "Hilos de Slack, respuestas a tickets, cajas de prompt: dilos en vez de teclear a través de la rigidez. Pulsar para hablar con Option/Alt+Space deja la activación en una sola tecla.",
      },
    ],
    faqs: [
      {
        q: "Mantener una tecla es difícil cuando mis articulaciones están rígidas. ¿Hay una activación más fácil?",
        a:
          "Lo predeterminado es mantener para hablar porque es predecible, pero puedes asignarlo al atajo que tus manos alcancen con más comodidad, y pulsar para hablar en Option/Alt+Space es una sola tecla. Las ráfagas cortas de dictado van bien en los días de rigidez.",
      },
      {
        q: "¿Voicetypr trata o ayuda con mi artritis?",
        a:
          "No. Es una herramienta de escritura, no un tratamiento: no puede hacer nada por la enfermedad en sí. Lo que hace es reducir cuánto tecleo tienen que hacer tus manos. Sigue las indicaciones médicas y ergonómicas para tu situación.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local de forma predeterminada, así que tu audio se queda en tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas, nunca la grabación.",
      },
      {
        q: "¿Funcionará con mi teclado dividido, ratón vertical u otro equipo adaptativo?",
        a:
          "Sí. Voicetypr solo necesita un micrófono y un atajo que pueda escuchar. Convive con cualquier hardware de entrada que ya uses: no lo reemplaza ni lo estorba.",
      },
      {
        q: "¿Mac y Windows? ¿Puedo probarlo antes de pagar?",
        a:
          "Ambos: macOS (Apple Silicon e Intel) y Windows 10+. Hay una prueba gratis de 3 días sin tarjeta, además de una garantía de devolución de 7 días, así que puedes probarlo con tu voz y tus apps reales antes de decidirte.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Que las palabras sigan fluyendo. <em>Reduce las pulsaciones.</em>",
      body: "Dicta el correo, el documento o la respuesta en la app en la que ya estás y deja que tus manos tecleen menos, en local de forma predeterminada. Prueba Voicetypr gratis durante 3 días.",
    },
    keywords: [
      "dictado por voz para la artritis",
      "dictado para artritis en las manos",
      "software de dictado para artritis",
      "voz a texto artritis",
      "transcripción de voz artritis",
      "escribir con artritis en las manos",
      "voicetypr artritis",
    ],
  },
  "developers": {
    slug: "developers",
    title: "Voicetypr para desarrolladores — Dictado por voz para prompts, commits y descripciones de PR",
    ogTitle: "Voicetypr para desarrolladores",
    description:
      "Dicta prompts en Cursor, commits, descripciones de PR y docs de diseño. Dictado por voz offline para desarrolladores que escriben más texto que código.",
    navLabel: "Desarrolladores",
    hubTeaser:
      "Dicta prompts de Cursor, descripciones de PR y documentos de diseño; mantén el contexto sensible en local por defecto.",
    category: "profession",
    order: 1,
    hero: {
      eyebrow: "voicetypr para desarrolladores",
      headline: "Dicta el texto. <em>Teclea el código.</em>",
      lede:
        "La mayor parte de tu día ya no es teclear código, es teclear prosa: prompts, descripciones de PR, hilos de Slack y documentos. Voicetypr se encarga del texto para que tus manos se concentren en la parte que todavía las necesita.",
      metaStrip: [
        "cursor · claude · chatgpt",
        "slack · linear · notion",
        "transcripción local",
      ],
    },
    pains: [
      {
        title: "Los prompts cuestan más que antes.",
        body:
          "La parte de escritura de tu trabajo creció. Especificaciones, prompts, respuestas, post-mortems: todo consume pulsaciones y tiempo reales. La voz reduce ese costo.",
      },
      {
        title: "El dictado en la nube no es opción para prompts sensibles.",
        body:
          "Los prompts sensibles y el contexto previo al lanzamiento quedan fuera de la nube por defecto. Todo en tu dispositivo por defecto.",
      },
      {
        title: "Las descripciones de PR y los documentos de diseño se saltan cuando teclear cuesta caro.",
        body:
          "Los artefactos de calidad son lo primero que se sacrifica cuando teclear duele o lleva demasiado tiempo. El equipo nota la ausencia antes que tú.",
      },
    ],
    outcomes: [
      {
        marker: "voz",
        title: "Más rápido para trabajo con muchos prompts",
        body:
          "Hablar puede ser más rápido que teclear para prompts, respuestas y descripciones largas. A lo largo de un día lleno de campos de texto, esa menor carga de teclado se acumula.",
        meta: "Resultado · rendimiento",
      },
      {
        marker: "0",
        title: "Audio que sale de tu equipo",
        body:
          "La transcripción se ejecuta en tu equipo. Tus prompts a medio formar sobre una función sin lanzar no terminan en el pipeline de entrenamiento de otra empresa.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "cualquier",
        title: "Tu stack, cualquier herramienta",
        body:
          "Cursor, Claude, ChatGPT, VS Code, JetBrains, Slack, Gmail, Linear, GitHub, Notion. Si tu cursor cae ahí, puedes dictar ahí.",
        meta: "Resultado · alcance",
      },
    ],
    workflows: [
      {
        title: "Prompts en Cursor / Claude / ChatGPT",
        body:
          "Las cajas de prompt de los agentes son donde más texto tecleas en un día típico. Mantén pulsado el hotkey, explica el problema como se lo contarías a un colega y pega. El agente recibe un prompt más natural y específico del que habrías tecleado.",
      },
      {
        title: "Mensajes de commit y descripciones de PR",
        body:
          "Dos párrafos de contexto por PR son la diferencia entre una revisión útil y un visto bueno automático. Díctalos. Quienes revisan lo agradecen. Y al decir las cosas en voz alta, descubres tus propios bugs.",
      },
      {
        title: "Documentos de diseño y post-mortems",
        body:
          "El documento de diseño de 2.000 palabras que antes parecía una tarea pesada ahora cuesta unos quince minutos de habla. Los artefactos de los que depende tu equipo por fin se escriben.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo dictar código?",
        a:
          'Sinceramente, no, y tampoco querrías. La voz es genial para texto. "const foo equals null" se transcribe como "const four equals nul" la mitad de las veces. Voz para prompts y prosa; teclado para código.',
      },
      {
        q: "¿Funciona específicamente en la caja de prompt del agente de Cursor?",
        a:
          "Sí. Voicetypr pega en cualquier campo de texto que acepte entrada de teclado. La caja de prompt de Cursor es un textarea normal: pegar funciona igual que en cualquier otra app.",
      },
      {
        q: "¿Y los comandos de terminal?",
        a:
          "Funciona, pero la voz para comandos de terminal suele ser más lenta que teclearlos. La mayoría de desarrolladores usa la voz en su editor de texto y herramientas de chat, no en la shell.",
      },
      {
        q: "¿Funciona por SSH / en una máquina remota?",
        a:
          "Voicetypr se ejecuta en tu máquina local y pega en la app local, incluida tu terminal. Si la terminal está conectada a una máquina remota, el texto llega a la shell remota igual que lo haría el texto tecleado.",
      },
      {
        q: "¿Cómo se compara con el dictado integrado de macOS / Windows?",
        a:
          "El dictado integrado inventa nombres, pierde la puntuación en bloques largos y, en macOS en particular, se complica con el vocabulario técnico. Voicetypr usa un modelo en el dispositivo más amplio, entrenado con habla más variada, y maneja la jerga técnica mucho mejor.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Deja de teclear la <em>parte de texto</em> del trabajo.",
      body: "Deja de gastar pulsaciones en prompts y prosa de PR: dicta en local y pega en Cursor, GitHub o Slack. Gratis 3 días; licencia de por vida si te convence.",
    },
    keywords: [
      "dictado por voz para desarrolladores",
      "prompts por voz en cursor",
      "dictado para programadores",
      "voicetypr desarrolladores",
      "dictado por voz con ia para programar",
    ],
  },
  "writers": {
    slug: "writers",
    title: "Voicetypr para escritores — Redacta hablando, edita después",
    ogTitle: "Voicetypr para escritores",
    description:
      "Dictado por voz para escritores, novelistas y creadores de contenido. Redacta hablando y edita después. Transcripción local, pago único, en tu app de escritura.",
    navLabel: "Escritores",
    hubTeaser:
      "Habla el primer borrador desordenado en Scrivener, Docs o Notion; pule en una segunda pasada cuando despierte tu cerebro editor.",
    category: "profession",
    order: 2,
    hero: {
      eyebrow: "voicetypr para escritores",
      headline: "Redacta rápido. <em>Edita despacio.</em>",
      lede:
        "Redactar y editar son dos modos cognitivos distintos. La voz te permite separarlos. Habla el primer borrador a velocidad de habla y vuelve a editar cuando tu cabeza esté en la marcha adecuada.",
      metaStrip: ["redacción a velocidad de habla", "transcripción local", "cualquier app de escritura"],
    },
    pains: [
      {
        title: "Teclear te obliga a editar mientras redactas.",
        body:
          "Cada retroceso es una pequeña edición. Redactar se vuelve una edición a cámara lenta, y editar se vuelve una reescritura a cámara lenta. Las dos pasadas se enredan.",
      },
      {
        title: "El dictado en la nube es un no rotundo para trabajo sin terminar.",
        body:
          "Los borradores sin terminar y el material de la trama merecen discreción. Todo en tu dispositivo por defecto.",
      },
      {
        title: "El dictado integrado no aguanta un bloque largo.",
        body:
          "El dictado de macOS se corta a los treinta segundos. La transcripción de Apple Notes destroza los nombres. Las herramientas nativas no están hechas para una redacción sostenida.",
      },
    ],
    outcomes: [
      {
        marker: "borrador",
        title: "Capítulos largos en una sola sesión",
        body:
          "Hablar mantiene el impulso de la redacción: muchos escritores terminan un capítulo o bloque de ensayo en bruto en una sola sesión de voz y luego editan en una segunda pasada.",
        meta: "Resultado · ritmo",
      },
      {
        marker: "local",
        title: "Privacidad previa a la publicación",
        body:
          "Transcrito en tu equipo por defecto. El formateo opcional con IA solo puede enviar texto si lo activas.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "cualquier",
        title: "App de escritura",
        body:
          "Scrivener, Ulysses, Bear, iA Writer, Word, Google Docs, Substack, Notion. Voicetypr pega en todas.",
        meta: "Resultado · alcance",
      },
    ],
    workflows: [
      {
        title: "Habla el primer borrador, teclea el segundo",
        body:
          "Abre el documento, mantén pulsado el hotkey y habla el capítulo / ensayo / pieza en tres o cuatro pasadas con descansos. Termina la sesión con un primer borrador completo. La edición de mañana ya es posible porque dejaste de editar lo que escribiste hace diez segundos.",
      },
      {
        title: "Captura la idea antes de que el día se la coma",
        body:
          "En un paseo. En la cocina. Acaba de llegarte el giro de la trama. Mantén pulsado el hotkey en tu portátil conectado al móvil o abre una ventana rápida de Notas: la captura toma noventa segundos y la idea sobrevive.",
      },
      {
        title: "Respuestas largas, presentaciones y propuestas",
        body:
          "Correos en frío de tres párrafos a editores, respuestas a propuestas, consultas a agentes: todo se beneficia de sonar a lenguaje hablado. Dictar produce un texto que se lee menos como si lo hubieras tecleado y más como si lo hubieras dicho.",
      },
    ],
    faqs: [
      {
        q: "¿Aguanta bloques largos de habla sin cortarse?",
        a:
          "Sí: las sesiones pueden durar lo que aguanten tu batería y tu micrófono. El modelo procesa todo el bloque de una vez después de que sueltas el hotkey, así que no hay cortes de streaming como ocurre con las herramientas en la nube que transmiten en vivo.",
      },
      {
        q: "¿Puntúa prosa de ficción con diálogos?",
        a:
          "Puntúa mejor que la herramienta nativa de macOS, pero el formato de los diálogos (rayas, comillas para las líneas habladas) a veces necesita una rápida pasada editorial. El preset de formato por defecto se encarga de la puntuación común; desactívalo si quieres la transcripción en bruto para limpiarla tú.",
      },
      {
        q: "¿Puedo usarlo para redactar en otros idiomas además del inglés?",
        a:
          "Sí. Voicetypr admite más de 99 idiomas: elige el idioma de tu modelo en los ajustes.",
      },
      {
        q: "¿Y para transcribir entrevistas?",
        a:
          "Voicetypr está hecho para el dictado en primera persona, no para la transcripción de varios hablantes. Para el audio de entrevistas en concreto, encaja mejor un flujo de transcripción dedicado o un servicio centrado en la transcripción.",
      },
      {
        q: "¿Ralentizará mi portátil antiguo?",
        a:
          "El modelo medium funciona con holgura en cualquier Mac con Apple Silicon y en la mayoría de equipos Windows modernos. En hardware Intel más antiguo (8 GB de RAM), usa el modelo small para un mejor equilibrio.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Saca el borrador <em>a la velocidad que piensas.</em>",
      body: "Separa la redacción de la edición: habla el capítulo hoy, ajústalo mañana. Transcripción local por defecto; prueba de 3 días y luego una licencia de pago único.",
    },
    keywords: [
      "dictado por voz para escritores",
      "app de dictado para escritores",
      "herramienta de dictado para novelistas",
      "software de escritura por voz",
      "voicetypr escritores",
    ],
  },
  "students": {
    slug: "students",
    title: "Voicetypr para estudiantes — Saca el borrador antes de que el perfeccionismo lo mate",
    ogTitle: "Voicetypr para estudiantes",
    description:
      "Dictado por voz para estudiantes. Dicta ensayos, apuntes de clase, esquemas y prompts más rápido en Google Docs, Word, Notion y herramientas del navegador.",
    navLabel: "Estudiantes",
    hubTeaser:
      "Esquematiza ensayos, apuntes de clase y respuestas de estudio hablando; pega en Docs, Word o formularios del navegador.",
    category: "profession",
    order: 8,
    hero: {
      eyebrow: "voicetypr para estudiantes",
      headline: "Sabes qué decir. <em>Teclear es lo que te frena.</em>",
      lede:
        "Gran parte del trabajo escolar no es pensar, es pasar el pensamiento a texto. Ensayos, apuntes, esquemas, respuestas de solicitudes, publicaciones en foros, prompts de estudio. Voicetypr ayuda a los estudiantes a sacar la primera pasada más rápido, sobre todo cuando teclear cansa, es lento o se atasca en la mente.",
      metaStrip: ["ensayos · apuntes · prompts", "transcripción local", "funciona en herramientas escolares"],
    },
    pains: [
      {
        title: "Los estudiantes pasan todo el día en campos de texto.",
        body:
          "Google Docs, Word, Canvas, Notion, formularios del navegador, herramientas de IA, correo. El trabajo está repartido entre apps, pero el cuello de botella es el mismo: demasiado tecleo.",
      },
      {
        title: "El primer párrafo es el que más energía cuesta.",
        body:
          "Muchos estudiantes saben la respuesta en voz alta antes de lograr teclearla. La voz ayuda a saltarse el bloqueo de la página en blanco y pone la versión en bruto en pantalla.",
      },
      {
        title: "La fatiga de teclear se acumula a lo largo de toda una semana.",
        body:
          "Un ensayo es manejable. Suma apuntes de clase, reflexiones de lectura, correos y solicitudes, y el teclado se convierte en la verdadera carga de trabajo.",
      },
    ],
    outcomes: [
      {
        marker: "primero",
        title: "Los borradores aparecen antes",
        body:
          "Hablar la respuesta te lleva de la página en blanco a un borrador utilizable más rápido, lo que hace mucho más fácil editarlo y mejorarlo.",
        meta: "Resultado · impulso",
      },
      {
        marker: "cualquier",
        title: "Herramientas escolares, cualquier campo de texto",
        body:
          "Google Docs, Word, Notion, tareas del navegador, chat, correo, cajas de prompt. Voicetypr funciona donde ya ocurre el trabajo del curso.",
        meta: "Resultado · alcance",
      },
      {
        marker: "útil",
        title: "Útil más allá de las etiquetas de accesibilidad",
        body:
          "Algunos estudiantes usan la voz por TDAH, dislexia o fatiga. Otros simplemente la usan porque hablar el primer borrador es más rápido que teclearlo.",
        meta: "Resultado · flexibilidad",
      },
    ],
    workflows: [
      {
        title: "Habla el primer borrador feo",
        body:
          "Abre el documento del ensayo, dicta la respuesta en bruto con frases completas y luego vuelve a la estructura y las citas. La voz brilla sacando el material en bruto.",
      },
      {
        title: "Apuntes y resúmenes después de clase",
        body:
          "Justo después de una clase, explica los conceptos en tus apuntes con tus propias palabras. Eso te da repaso y, a la vez, una hoja de estudio utilizable.",
      },
      {
        title: "Solicitudes, correos y publicaciones en foros",
        body:
          "La carga de escritura de cola larga es mayor que el gran ensayo. La voz ayuda con las constantes piezas pequeñas que igualmente consumen tiempo y energía reales.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo en Google Docs o Word?",
        a:
          "Sí. Voicetypr funciona en cualquier sitio donde un campo de texto normal acepte entrada de teclado, incluidos Docs, Word, formularios del navegador y apps de notas.",
      },
      {
        q: "¿Es solo para estudiantes con TDAH o dislexia?",
        a:
          "No. Puede ayudar en esos casos, pero muchos estudiantes usan la voz simplemente porque hablar el primer borrador es más rápido que teclearlo.",
      },
      {
        q: "¿Me escribe el ensayo?",
        a:
          "No. Voicetypr convierte tu habla en texto. Es una herramienta de entrada, no un escritor fantasma.",
      },
      {
        q: "¿Puedo usarlo también para prompts de estudio y herramientas de IA?",
        a:
          "Sí. Las cajas de prompt de ChatGPT, Claude y herramientas similares son campos de texto normales, así que Voicetypr también funciona ahí.",
      },
      {
        q: "¿Y si después necesito editar mucho?",
        a:
          "Es normal. La ganancia es llegar de cero al primer borrador más rápido. Editar un borrador en bruto suele ser mucho más fácil que teclear desde la nada.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Di el primer borrador. <em>Edita el más inteligente.</em>",
      body: "Vence la parálisis de la página en blanco en ensayos y apuntes: habla el borrador y pega en Docs o Word. En el dispositivo por defecto; prueba de 3 días, licencia de pago único.",
    },
    keywords: [
      "dictado por voz para estudiantes",
      "software de dictado para estudiantes",
      "voz a texto para estudiantes",
      "voz a texto para ensayos",
      "dictado para estudiantes universitarios",
    ],
  },
  "founders": {
    slug: "founders",
    title: "Voicetypr para fundadores — Habla con tus herramientas de IA a la velocidad del pensamiento",
    ogTitle: "Voicetypr para fundadores",
    description:
      "Hecho por un fundador en solitario, para fundadores en solitario. Dicta prompts, respuestas de soporte, specs y notas de Slack. Transcripción local, pago único.",
    navLabel: "Fundadores y emprendedores en solitario",
    hubTeaser:
      "Suelta specs, novedades para inversores y prompts de agentes por voz entre reunión y reunión, sin otra pestaña de suscripción abierta.",
    category: "profession",
    order: 3,
    hero: {
      eyebrow: "voicetypr para fundadores",
      headline: "Tú eres el cuello de botella. <em>La voz lo destapa.</em>",
      lede:
        "Cuando eres el único que saca producto, soporte, marketing y operaciones, cada minuto escribiendo es un minuto que no construyes. Voicetypr es la herramienta de dictado que un fundador en solitario creó porque estaba cansado de pagar $180 al año por una.",
      metaStrip: ["flujos de 12+ h/día", "transcripción local", "pago único · de por vida"],
    },
    pains: [
      {
        title: "Tu pila de suscripciones ya se come tu runway.",
        body:
          "No necesitas otra línea de $15/mes. Y menos por una herramienta que funciona igual que hace tres años.",
      },
      {
        title: "Escribir prompts de IA ya es la mitad de tu trabajo.",
        body:
          "Cursor, Claude, ChatGPT: pasas más tiempo en la caja de prompts que en tu herramienta de diseño. Cuanto más rápido la llenes, más rápido avanza todo lo demás.",
      },
      {
        title: "Las respuestas de soporte se acumulan.",
        body:
          "El inbox cero es imposible cuando cada respuesta necesita tres párrafos de contexto escritos a mano. La voz vuelve a hacer manejable la bandeja de entrada.",
      },
    ],
    outcomes: [
      {
        marker: "$0",
        title: "Recurrente",
        body:
          "Pago único. Sin correo de renovación. La herramienta con la que empezaste es la que seguirás usando dentro de tres años.",
        meta: "Resultado · coste",
      },
      {
        marker: "voz",
        title: "Más rápido en prompts y respuestas",
        body:
          "Los campos de texto más largos de tu día —prompts de agentes, respuestas de soporte, borradores— pasan de escritos a hablados.",
        meta: "Resultado · rendimiento",
      },
      {
        marker: "local",
        title: "Local por defecto",
        body:
          "Notas de funciones aún no publicadas, datos de clientes, experimentos de precios: tu voz se transcribe en tu portátil por defecto. El formateo con IA opcional envía solo texto si lo activas.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "Dale el prompt al agente sin redactarlo",
        body:
          "Mantén pulsado el atajo, explica el problema en voz alta y pega en Cursor / Claude. El prompt que sale es más específico que el que habrías escrito, porque escribir te obliga a recortar, y al recortar quitas contexto que el agente necesitaba.",
      },
      {
        title: "Respuestas de soporte, en lote",
        body:
          "Abre la bandeja de entrada al final de un bloque de concentración. Responde a diez hilos seguidos dictando cada uno. Las respuestas suenan a que las escribió una persona porque así fue, solo que no con los dedos.",
      },
      {
        title: "Síntesis de entrevistas con clientes",
        body:
          "Justo después de una llamada, vuelca la síntesis en Notion o Linear hablando. Los detalles se desvanecen rápido: la voz es la forma más rápida de capturarlos mientras siguen frescos en tu cabeza.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué pago único en vez de suscripción?",
        a:
          "Porque el dictado es una herramienta, no un servicio. El modelo no mejora de forma significativa mes a mes. No deberías pagar para siempre por algo que hace lo mismo para siempre. Los fundadores merecen estar del lado bueno de un trato justo.",
      },
      {
        q: "¿Funcionará con mi stack de una sola persona en Slack / Linear / Gmail / Cursor?",
        a:
          "Sí: cualquier campo de texto que acepte teclado sirve. No hay nada que integrar; configuras un atajo, lo mantienes pulsado, hablas y sueltas.",
      },
      {
        q: "¿Lo creó un fundador en solitario?",
        a:
          "Sí. Voicetypr lo crea y mantiene Moinul Moin, un operador indie. Toda la historia está en el ensayo del fundador.",
      },
      {
        q: "¿Reembolsos si no encaja en mi flujo de trabajo?",
        a:
          "Siete días, sin preguntas. Escribe a support@voicetypr.com.",
      },
      {
        q: "¿Y si necesito más de un dispositivo?",
        a:
          "Elige el número de dispositivos que necesites al pagar: 1, 2 o 4 dispositivos. Si necesitas más, escribe a soporte y te ayudamos.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Hecho por un fundador. <em>Para fundadores.</em>",
      body: "Saca la spec, la respuesta y la nota para inversores mientras la idea sigue caliente: hablas y se pega en su sitio. Pruébalo 3 días gratis; precio de por vida cuando te convenzas.",
    },
    keywords: [
      "dictado por voz para fundadores",
      "herramienta de productividad para fundadores",
      "dictado por voz con ia para emprendedores en solitario",
      "dictado por voz para indie hackers",
      "voicetypr fundadores",
    ],
  },
  "tendonitis": {
    slug: "tendonitis",
    title: "Voicetypr para la tendinitis — Reduce las pulsaciones y sigue escribiendo",
    ogTitle: "Voicetypr para la tendinitis",
    description:
      "Dictado por voz para la tendinitis: baja las pulsaciones para que muñecas y antebrazos descansen mientras sacas correos, docs y respuestas. Local, pago único.",
    navLabel: "Tendinitis",
    hubTeaser:
      "Quita el grueso de la redacción de tus manos: dicta correos, docs y respuestas en cualquier app mientras descansan muñecas y antebrazos doloridos.",
    category: "accessibility",
    order: 8,
    hero: {
      eyebrow: "voicetypr para la tendinitis",
      headline: "Se inflama cada vez que escribes. <em>Así que escribe menos.</em>",
      lede:
        "La tendinitis es una lesión por sobreuso, y un día entero escribiendo la sigue alimentando. Voicetypr pasa el grueso de tu escritura a la voz —mantén pulsado un atajo, habla, suelta— para que el teclado deje de llevarse cada pulsación mientras tus muñecas y antebrazos descansan.",
      metaStrip: ["menos carga de teclado", "transcripción local", "cualquier app, cualquier campo"],
    },
    pains: [
      {
        title: "El descanso es la receta. Tu trabajo no te deja cumplirla.",
        body:
          "La tendinitis es una lesión por sobreuso, así que casi todo plan empieza por descansar el tendón. Un día de correos, tickets y documentos es lo contrario al descanso: cada bloque de escritura agrava justo lo que necesita una pausa.",
      },
      {
        title: "Termina la jornada más tarde que tú.",
        body:
          "El dolor no para cuando cierras el portátil. Rigidez por la mañana, molestias toda la tarde, una mano que se rinde a medio abrir un bote: los días de mucha escritura son los que peor lo inflaman, y el teclado es donde vive la repetición.",
      },
      {
        title: "El De Quervain convierte la barra espaciadora en un detonante.",
        body:
          "Si es del lado del pulgar, la base del pulgar y la muñeca radial se encienden con cada agarre, pinza y estiramiento hacia la barra espaciadora o una tecla modificadora. Las teclas que más pulsan tus pulgares son las que duelen.",
      },
    ],
    outcomes: [
      {
        marker: "menos",
        title: "Pulsaciones por correo y doc",
        body:
          "Mantén pulsado el atajo, di el párrafo, suelta. Sigues editando a mano, pero la redacción, la parte con más repetición, sale del teclado.",
        meta: "Resultado · carga",
      },
      {
        marker: "cualquier",
        title: "App, cualquier campo de texto",
        body:
          "Gmail, Slack, Word, Notion, Linear, tu editor, un formulario web. Si el cursor parpadea ahí, el texto se pega—sin plugin para cada app.",
        meta: "Resultado · alcance",
      },
      {
        marker: "una vez",
        title: "Paga una vez, consérvalo más allá del brote",
        body:
          "Una licencia de por vida, no un alquiler. Cuando el brote remite puedes seguir usándolo —mucha gente lo hace— sin otra suscripción que cancelar.",
        meta: "Resultado · sin suscripción",
      },
    ],
    workflows: [
      {
        title: "Despachar el correo en un día de brote",
        body:
          "Abre la respuesta, mantén pulsado el atajo, di lo que quieres decir, suelta. Despacha una mañana de bandeja de entrada sin sumar una mañana de pulsaciones, justo lo que normalmente tendría tus antebrazos doloridos para la hora de comer.",
      },
      {
        title: "Documentos largos sin el maratón de redacción",
        body:
          "Specs, informes, resúmenes de clientes. Háblalos por bloques y deja el teclado para las ediciones. Tus manos trabajan a ritmo de edición, no de redacción, justo en las piezas que antes costaban más escritura.",
      },
      {
        title: "La escritura pequeña que lo agrava sin que te des cuenta",
        body:
          "Mensajes cortos en Slack, notas en tickets, prompts de IA, campos de formulario. Por separado no parece mucho; a lo largo del día es la repetición que más odian los tendones. Dilo todo y el conteo se mantiene bajo.",
      },
    ],
    faqs: [
      {
        q: "¿Esto ayuda con el De Quervain, o solo con la tendinitis de muñeca en general?",
        a:
          "Con ambos, de la misma forma: no es un tratamiento, pero escribir menos significa menos agarres, pinzas y estiramientos hacia la barra espaciadora que agravan los tendones del lado del pulgar. Mantienes pulsado un atajo y hablas en lugar de aporrear las teclas en cada borrador.",
      },
      {
        q: "¿Puedo activarlo sin forzar la muñeca o el pulgar?",
        a:
          "El atajo es una sola combinación —⌘+Shift+Space en macOS, Ctrl+Shift+Space en Windows— y hay pulsar para hablar en Option/Alt+Space. Si las opciones por defecto te fuerzan, configura un atajo personalizado que alcances con comodidad.",
      },
      {
        q: "¿Voicetypr trata o cura la tendinitis?",
        a:
          "No. Es una herramienta de escritura, no un tratamiento médico: reduce cuánto escribes, no arregla el tendón. Sigue las indicaciones de tu profesional sanitario y los consejos ergonómicos; esto solo quita carga de redacción de tus manos mientras lo haces.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local por defecto, así que tu audio se queda en tu dispositivo. El formateo con IA opcional envía solo texto cuando lo activas, nunca el audio.",
      },
      {
        q: "¿Lo seguiré queriendo cuando el brote remita?",
        a:
          "Mucha gente lo conserva —hablar es más rápido que escribir para gran parte de la redacción— y es de pago único, así que conservarlo no cuesta nada extra. macOS (Apple Silicon e Intel) y Windows 10+, con una prueba de 3 días y sin tarjeta.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "El mismo trabajo, <em>menos pulsaciones.</em>",
      body: "Pasa la redacción a tu voz y deja que el teclado se encargue de las ediciones: en tu dispositivo por defecto, en cada app que ya usas. Prueba Voicetypr gratis 3 días y luego paga una vez.",
    },
    keywords: [
      "dictado por voz para la tendinitis",
      "software de dictado para la tendinitis",
      "voz a texto tendinitis",
      "dictado de voz a texto tendinitis",
      "escribir con tendinitis de muñeca",
      "dictado para el de quervain",
      "voicetypr tendinitis",
    ],
  },
  "fibromyalgia": {
    slug: "fibromyalgia",
    title: "Voicetypr para la fibromialgia — Dictado por voz en los días difíciles",
    ogTitle: "Voicetypr para la fibromialgia",
    description:
      "Dictado por voz para la fibromialgia. En días de dolor, niebla mental y poca energía, dicta correos, notas y docs en cualquier app. Local, pago único.",
    navLabel: "Fibromialgia",
    hubTeaser:
      "Cuando se acumulan el dolor, la fatiga y la niebla mental, habla tus correos y docs en cualquier app en vez de forzarlos pulsación a pulsación.",
    category: "accessibility",
    order: 12,
    hero: {
      eyebrow: "voicetypr para la fibromialgia",
      headline: "Algunos días, escribir cuesta demasiado. <em>Mejor dilo.</em>",
      lede:
        "Manos doloridas, fatiga profunda y una niebla que hace que la primera frase parezca imposible: en un día de brote, escribir cuesta el doble. Mantén pulsado un atajo, habla, y Voicetypr pone las palabras donde ya está tu cursor, transcritas en tu propio equipo.",
      metaStrip: ["menos carga de escritura", "transcripción local", "días buenos y malos"],
    },
    pains: [
      {
        title: "En un día de brote, escribir es lo primero que cede.",
        body:
          "Unas manos doloridas, rígidas y a veces con hormigueo hacen que un par de líneas vayan bien, pero una bandeja llena o un informe largo se vuelven un problema. Pasada cierta longitud, cada párrafo les cuesta algo a tus manos. El dictado pasa el grueso de eso de tus dedos a tu voz.",
      },
      {
        title: "La niebla mental convierte la primera frase en un muro.",
        body:
          "En un día de niebla, sostener a la vez la idea, la ortografía y las pulsaciones es pedir mucho. Decirlo en voz alta pide menos: empiezas hablando, no componiendo una frase impecable con las manos doloridas.",
      },
      {
        title: "La fatiga hace que raciones la energía que tienes.",
        body:
          "Cuando te despiertas cansado y el depósito está a medias, cada mensaje escrito gasta un poco. La voz gasta menos, así que queda más para el trabajo de verdad o para el resto del día.",
      },
    ],
    outcomes: [
      {
        marker: "menos",
        title: "Carga de escritura en un día difícil",
        body:
          "Pulsa el atajo, di el párrafo, suelta. Sigues editando con el teclado, pero tus manos dejan de cargar con cada palabra.",
        meta: "Resultado · carga física",
      },
      {
        marker: "0",
        title: "El pulso con la página en blanco",
        body:
          "Entrar hablando pide menos que escribir desde cero cuando la niebla es densa. Di la primera línea en voz alta y el borrador ya está en marcha.",
        meta: "Resultado · esfuerzo inicial",
      },
      {
        marker: "una vez",
        title: "Paga una vez, también ahí en los días buenos",
        body:
          "Una licencia de por vida, no un alquiler. Está ahí los días en que te encuentras bien y los que no, sin una suscripción que justificar cuando el dinero aprieta.",
        meta: "Resultado · sin suscripción",
      },
    ],
    workflows: [
      {
        title: "Vaciar la bandeja en una mañana de mucho dolor",
        body:
          "Abre la respuesta, mantén pulsado el atajo, di lo que quieres decir, suelta. Repasa una vez, envía. Despacha una mañana de correo en el tiempo que unas manos rígidas habrían dedicado a un puñado de respuestas.",
      },
      {
        title: "Documentos largos sin que el dolor se acumule toda la tarde",
        body:
          "Habla el primer borrador por bloques, con pausas cuando las necesites. Deja el teclado para ediciones y estructura, para que tus manos hagan trabajo de carga de edición en vez de carga de redacción.",
      },
      {
        title: "Notas y prompts cuando la niebla es densa",
        body:
          "Cuando formar una frase y escribirla al mismo tiempo es demasiado, simplemente dilo. Vuelca la idea en tu app de notas, o habla el contexto en ChatGPT o Claude, y ordénalo más tarde.",
      },
    ],
    faqs: [
      {
        q: "¿Mantener una tecla pulsada duele si ya tengo las manos doloridas?",
        a:
          "No tendría por qué. El atajo de mantener para hablar por defecto es una sola combinación que puedes asignar a las teclas más fáciles de alcanzar, y pulsar para hablar en Option/Alt+Space es una sola tecla. En un día de manos malas, dictar en ráfagas cortas reduce al mínimo el tiempo de mantenerla pulsada.",
      },
      {
        q: "¿Me entenderá en un día de niebla y poca energía, cuando mi voz está cansada?",
        a:
          "El modelo medio en el dispositivo maneja el habla cansada y menos nítida mejor de lo que la gente espera. Si la claridad baja de verdad, el modelo grande es más preciso a costa de velocidad, y puedes cambiar en cada sesión.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local por defecto, así que tu audio se queda en tu dispositivo. El formateo con IA opcional envía solo texto cuando lo activas, nunca el audio.",
      },
      {
        q: "¿Voicetypr trata o ayuda con mi fibromialgia?",
        a:
          "No. Es una herramienta de escritura, no un tratamiento, y no hace ninguna afirmación médica. Lo único que hace es reducir la carga de escritura cuando tus manos, tu energía o tu concentración no están para ello. Sigue tus propias indicaciones médicas y ergonómicas.",
      },
      {
        q: "¿Funciona en Mac y en Windows, y puedo probarlo primero?",
        a:
          "Sí: macOS (Apple Silicon e Intel) y Windows 10+. Hay una prueba gratuita de 3 días sin tarjeta, así que puedes probarlo con tu voz, tu micrófono y tus apps reales en un día bueno y en uno malo antes de pagar.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "En los días difíciles, <em>deja que tu voz lo lleve.</em>",
      body: "Quita la escritura pesada de unas manos doloridas y una cabeza nublada, y pégalo donde ya está tu cursor: en tu dispositivo por defecto. Prueba Voicetypr gratis 3 días.",
    },
    keywords: [
      "dictado por voz para la fibromialgia",
      "software de dictado para la fibromialgia",
      "voz a texto fibromialgia",
      "dictado de voz a texto fibromialgia",
      "escribir con dolor de fibromialgia",
      "voicetypr fibromialgia",
    ],
  },
  "lawyers": {
    slug: "lawyers",
    title: "Voicetypr para abogados — Redacción jurídica sin pagar precios de Dragon",
    ogTitle: "Voicetypr para abogados",
    description:
      "Dictado por voz para abogados. Redacta correos a clientes, notas de casos, borradores y registro de horas más rápido con transcripción local por defecto.",
    navLabel: "Abogados",
    hubTeaser:
      "Redacta correos a clientes, notas de expedientes y registro de horas por voz, en local por defecto para material confidencial.",
    category: "profession",
    order: 7,
    hero: {
      eyebrow: "voicetypr para abogados",
      headline: "El razonamiento es jurídico. <em>El cuello de botella sigue siendo teclear.</em>",
      lede:
        "El trabajo jurídico implica una cantidad ridícula de texto: correos a clientes, notas de casos, resúmenes, borradores de argumentos, memorandos internos y detalle del registro de horas. Voicetypr ayuda a los abogados que trabajan solos o en despachos pequeños a pasar esa carga de redacción a la voz sin invertir en pesados sistemas de dictado heredados.",
      metaStrip: ["borradores · notas · correo", "transcripción local", "pago único · de por vida"],
    },
    pains: [
      {
        title: "La redacción jurídica nunca es un solo párrafo.",
        body:
          "Hasta una simple actualización al cliente se convierte en contexto, matices y próximos pasos. El coste no es una frase; es la acumulación constante de texto preciso.",
      },
      {
        title: "Las opciones antiguas de dictado jurídico resultan pesadas y caras.",
        body:
          "Muchos compradores del sector legal aún dan por hecho que necesitan una gran inversión tipo Dragon para dictar en serio. Esa carga de precio y configuración es difícil de justificar en muchos flujos de trabajo modernos de despachos pequeños.",
      },
      {
        title: "Lo confidencial es justo lo que menos quieres que ande dando vueltas.",
        body:
          "Los datos de los clientes, los hechos del caso, las notas de negociación y los borradores de estrategia interna son los momentos en los que más importa una transcripción que prioriza el trabajo sin conexión.",
      },
    ],
    outcomes: [
      {
        marker: "voz",
        title: "Primeros borradores más rápidos de la redacción jurídica rutinaria",
        body:
          "Las actualizaciones a clientes, los resúmenes internos, la estructura inicial de un argumento y las notas detalladas del registro de horas salen de tu cabeza más rápido.",
        meta: "Resultado · redacción",
      },
      {
        marker: "local",
        title: "Local por defecto para el dictado habitual",
        body:
          "Tu borrador hablado se transcribe en tu equipo tras la configuración, un mejor punto de partida que el dictado de consumo que prioriza la nube.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "$39",
        title: "Precio de entrada más bajo que el dictado jurídico tradicional",
        body:
          "Para los abogados que sobre todo necesitan escribir más rápido en el día a día, Voicetypr supone un compromiso mucho menor que el software heredado de alto precio.",
        meta: "Resultado · costo",
      },
    ],
    workflows: [
      {
        title: "Correos a clientes que suenan a ti",
        body:
          "Dicta la explicación como se la dirías al cliente y luego edita para mayor precisión. Es más rápido que construir cada párrafo tecla a tecla.",
      },
      {
        title: "Notas del caso justo después de cada gestión",
        body:
          "Tras una llamada, una reunión o una presentación de escrito, vuelca los hechos, los próximos pasos y los riesgos en tus notas de inmediato. La voz reduce la posibilidad de que se acorte u omita un detalle clave.",
      },
      {
        title: "La estructura del argumento antes de la redacción formal",
        body:
          "Repasa en voz alta el esquema, el punto débil, el contraargumento y los hechos que lo respaldan antes de empezar a pulir el lenguaje. La voz es muy buena para redactar partiendo de la estructura.",
      },
    ],
    faqs: [
      {
        q: "¿Sustituye a Dragon Legal en todos los casos?",
        a:
          "No en todos. Los despachos con un vocabulario jurídico muy personalizado o flujos de trabajo heredados muy especializados pueden seguir prefiriendo herramientas tipo Dragon. Voicetypr encaja mejor en muchos flujos de dictado modernos de profesionales solos o equipos pequeños.",
      },
      {
        q: "¿Puedo usarlo en Word y en herramientas del navegador?",
        a:
          "Sí. Voicetypr funciona en campos de texto normales en Word, apps del navegador, correo, documentos y notas.",
      },
      {
        q: "¿Ofrecen aquí garantías de cumplimiento normativo?",
        a:
          "No. Voicetypr es una herramienta de dictado con transcripción local por defecto. No se presenta como una capa de certificación de cumplimiento legal.",
      },
      {
        q: "¿Reconocerá a la perfección los nombres y los términos jurídicos?",
        a:
          "Conviene hacer siempre una revisión, sobre todo de nombres, citas y lenguaje propio de cada jurisdicción. Voicetypr te ayuda a redactar más rápido; no elimina el paso de revisión del abogado.",
      },
      {
        q: "¿Por qué le importaría a un abogado el pago único?",
        a:
          "Porque el dictado es infraestructura. Si se convierte en parte de tu rutina diaria de escritura, el coste de una suscripción recurrente se acumula rápido para una herramienta que simplemente debería seguir funcionando.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Pasa el primer borrador a la voz. <em>Mantén la revisión en tus manos.</em>",
      body: "Pasa a la voz los primeros borradores de correos a clientes y notas de expedientes; mantén la revisión en tus manos. Transcripción local por defecto; pruébalo gratis 3 días.",
    },
    keywords: [
      "software de dictado para abogados",
      "dictado por voz para redacción jurídica",
      "programa de dictado jurídico",
      "voz a texto para abogados",
      "dictar correos a clientes abogado",
    ],
  },
  "consultants": {
    slug: "consultants",
    title: "Voicetypr para consultores — La reunión termina, el memorando sigue pendiente",
    ogTitle: "Voicetypr para consultores",
    description:
      "Dictado por voz para consultores. Dicta resúmenes de clientes, notas de talleres, borradores de propuestas y memorandos internos en tus herramientas.",
    navLabel: "Consultores",
    hubTeaser:
      "Dicta resúmenes de clientes, notas de talleres y esquemas de propuestas entre llamadas: las mismas apps, menos peaje de tecleo.",
    category: "profession",
    order: 13,
    hero: {
      eyebrow: "voicetypr para consultores",
      headline: "La llamada con el cliente terminó. <em>El informe todavía no.</em>",
      lede:
        "El trabajo de consultoría genera una presión de traducción constante: de la reunión al memorando, de la conversación a la propuesta, del hallazgo a la recomendación, de las notas al correo. Voicetypr te ayuda a acelerar ese seguimiento cargado de texto para que el pensamiento útil sobreviva al paso a la forma escrita.",
      metaStrip: ["memorandos · propuestas · resúmenes", "transcripción local", "flujo en cualquier app"],
    },
    pains: [
      {
        title: "La consultoría convierte cada conversación en papeleo.",
        body:
          "Hasta una buena llamada deja un rastro de notas, resúmenes, correos y documentos de próximos pasos. El coste real no es la reunión, es lo que se escribe después.",
      },
      {
        title: "Las buenas recomendaciones llegan antes que el memorando pulido.",
        body:
          "Muchas veces sabes la respuesta mientras hablas con el equipo, y luego pierdes fuerza cuando te sientas a teclear esa misma lógica en una prosa cuidada de consultor.",
      },
      {
        title: "Los días de viaje y las agendas saturadas acaban con el detalle.",
        body:
          "Entre llamadas, desplazamientos y talleres, rara vez hay una hora tranquila para escribir. La voz ayuda a capturar el contexto en los pequeños huecos que sí existen.",
      },
    ],
    outcomes: [
      {
        marker: "más rápido",
        title: "De la reunión al memorando en menos tiempo",
        body:
          "Decir el resumen justo después de la llamada deja la versión útil por escrito antes de que tu día avance.",
        meta: "Resultado · velocidad",
      },
      {
        marker: "cualquier",
        title: "Documentos, correo, notas, herramientas de propuestas",
        body:
          "La escritura de consultoría ocurre en documentos, herramientas del navegador, chat, correo y prompts. Voicetypr funciona en todo ese abanico.",
        meta: "Resultado · alcance",
      },
      {
        marker: "más claro",
        title: "Recomendaciones que siguen sonando a razonamiento",
        body:
          "La voz suele conservar la lógica y el ritmo de una recomendación mejor que teclearla con la presión de una fecha límite.",
        meta: "Resultado · claridad",
      },
    ],
    workflows: [
      {
        title: "De la llamada con el cliente al correo de resumen",
        body:
          "Abre el borrador y di de inmediato la situación, las decisiones, los próximos pasos y las preguntas sin resolver. Luego afínalo hasta dejarlo listo para el cliente.",
      },
      {
        title: "Memorandos de trabajo y documentos de síntesis",
        body:
          "En lugar de esperar al bloque perfecto de tiempo para escribir, dicta la interpretación, la recomendación y los riesgos abiertos mientras el razonamiento sigue vivo.",
      },
      {
        title: "Encuadre de la propuesta a partir de la lógica hablada",
        body:
          "Usa la voz para volcar la forma real del problema, qué harías y por qué importa. El lenguaje formal de la propuesta puede venir después.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo para correos a clientes y documentos internos?",
        a:
          "Sí. Voicetypr funciona en cualquier lugar donde un campo de texto normal acepte entrada de teclado, incluidos documentos, correo y herramientas del navegador.",
      },
      {
        q: "¿Es sobre todo para consultores que escriben memorandos largos?",
        a:
          "Ahí ayuda, pero es igual de útil para resúmenes, propuestas, notas de talleres y trabajo con clientes con muchos prompts de IA.",
      },
      {
        q: "¿Seguirá necesitando edición?",
        a:
          "Sí. Voicetypr destaca en sacar rápido el primer borrador. La mayoría de los consultores aún afinará el tono, la estructura y la redacción después.",
      },
      {
        q: "¿También puedo usarlo en flujos de consultoría basados en prompts?",
        a:
          "Sí. Las cajas de prompts de las herramientas de IA son campos de texto normales, así que Voicetypr encaja ahí con naturalidad.",
      },
      {
        q: "¿Sustituye al software de toma de notas o de gestión de proyectos?",
        a:
          "No. Es una herramienta de entrada que te ayuda a generar el texto dentro de los sistemas que ya usas.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Arranca el memorando. <em>Mantén intacto el razonamiento.</em>",
      body: "Deja listos el resumen del cliente y el esqueleto de la propuesta entre llamadas, no tecleando pasada la medianoche. Local por defecto; prueba gratis y licencia de por vida disponible.",
    },
    keywords: [
      "software de dictado para consultores",
      "dictado por voz para consultores",
      "voz a texto para notas de consultoría",
      "dictar correos de resumen para clientes",
      "memorandos de consultoría por voz",
    ],
  },
  "real-estate-agents": {
    slug: "real-estate-agents",
    title: "Voicetypr para agentes inmobiliarios — Dicta fichas y seguimientos",
    ogTitle: "Voicetypr para agentes inmobiliarios",
    description:
      "Dictado por voz para agentes inmobiliarios. Dicta descripciones de propiedades, seguimientos y notas de CRM entre visitas, en cualquier app y en local.",
    navLabel: "Agentes inmobiliarios",
    hubTeaser:
      "Redacta una ficha hablando de la propiedad y luego dicta el seguimiento y la nota del CRM antes de la siguiente visita.",
    category: "profession",
    order: 16,
    hero: {
      eyebrow: "voicetypr para agentes inmobiliarios",
      headline: "Escribe la ficha en un minuto. <em>Habla de la casa.</em>",
      lede:
        "Descripciones de propiedades, correos de seguimiento, notas de CRM, resúmenes de ofertas: la escritura no para, y buena parte ocurre entre visitas, lejos de un escritorio. Mantén pulsado un atajo, dilo en voz alta y Voicetypr deja texto limpio en tu CRM, Gmail o portal MLS, transcrito en tu propio equipo.",
      metaStrip: ["fichas · seguimientos · crm", "transcripción local", "funciona en cualquier app"],
    },
    pains: [
      {
        title: "La mayor parte de la escritura ocurre entre visitas.",
        body:
          "Casi nunca estás en un escritorio. El texto de la ficha, el seguimiento, la nota del CRM, el resumen de la oferta: se acumulan en el coche, en el vestíbulo, en los diez minutos antes de la siguiente cita. Teclear todo eso con el portátil sobre las rodillas es un trabajo en sí mismo.",
      },
      {
        title: "La descripción de la propiedad es el campo que siempre dejas para luego.",
        body:
          "Conoces la propiedad al dedillo: la luz de la cocina, la parcela, las mejoras. Convertir eso en tres párrafos ordenados en el formulario del MLS es la parte que se atasca, y una descripción pobre te cuesta visitas.",
      },
      {
        title: "El seguimiento que funciona es el que envías ahora.",
        body:
          "Justo después de una visita sabes exactamente qué decirle a ese comprador. Una hora y dos citas más tarde, el correo se vuelve más corto, más plano y más fácil de dejar para mañana, cuando ya importa menos.",
      },
    ],
    outcomes: [
      {
        marker: "1 min",
        title: "Un borrador de ficha a partir de un recorrido",
        body:
          "Habla de la propiedad como se la describirías a un comprador y tendrás un borrador de descripción para retocar en el formulario, en vez de un campo del MLS en blanco que rellenar desde cero.",
        meta: "Resultado · fichas",
      },
      {
        marker: "cualquier",
        title: "En cualquier app, en cualquier campo de texto",
        body:
          "Tu CRM, Gmail, el portal MLS, Docs, un formulario web: si el cursor parpadea ahí, Voicetypr pega el texto. Sin plugins que configurar para cada app.",
        meta: "Resultado · alcance",
      },
      {
        marker: "local",
        title: "El audio se queda en tu equipo",
        body:
          "Los nombres de clientes, las direcciones y las condiciones de la operación se transcriben en tu propio dispositivo por defecto. El formateo opcional con IA envía solo texto cuando lo activas, nunca la grabación.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "Descripción de la propiedad a partir de un recorrido",
        body:
          "Recorre la propiedad —o imagínala— y habla de la distribución, la luz, las mejoras, el barrio. Para. Ahora tienes una descripción para recortar y pulir en el formulario del MLS en lugar de una casilla en blanco desde la que empezar.",
      },
      {
        title: "Seguimientos y notas de CRM justo después de la visita",
        body:
          "De vuelta en el coche, abre el correo o tu CRM, mantén pulsado el atajo y di a qué reaccionó el comprador, qué quiere a continuación y qué le prometiste. El seguimiento sale mientras la visita sigue caliente, y la nota queda en el sistema antes de la siguiente cita.",
      },
      {
        title: "Resúmenes de ofertas y mensajes a clientes sobre la marcha",
        body:
          "Dicta el resumen de la oferta para tu cliente, las condiciones de la contraoferta para tu expediente o una actualización rápida desde el portátil entre reuniones. El push-to-talk en Option/Alt+Space deja el disparador en una sola tecla cuando vas con prisa.",
      },
    ],
    faqs: [
      {
        q: "¿Funciona en mi CRM y en el portal MLS?",
        a:
          "Sí, en cualquier campo de texto normal que acepte entrada de teclado, incluidos los CRM del navegador y la mayoría de los formularios web del MLS. Coloca el cursor donde quieras el texto, mantén pulsado el atajo y habla. El portal no necesita saber nada de Voicetypr.",
      },
      {
        q: "¿De verdad puedo escribir la descripción de una propiedad hablando?",
        a:
          "Puedes hablar el borrador, que es la parte lenta. Describe la propiedad como se la mostrarías a un comprador y luego ordena la redacción en el formulario. Activa el formateo con IA si quieres una puntuación y unos párrafos más limpios; déjalo desactivado para la transcripción en bruto.",
      },
      {
        q: "¿Se envía a algún sitio la información de mis clientes?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local por defecto, así que los nombres, las direcciones y las condiciones de la operación se quedan en tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas, nunca el audio.",
      },
      {
        q: "¿Puedo usarlo sobre la marcha, lejos de mi escritorio?",
        a:
          "Sí. Se ejecuta en tu portátil, así que puedes dictar desde el coche o un vestíbulo entre visitas. Pulsa el atajo con una mano o usa el push-to-talk en Option/Alt+Space y habla.",
      },
      {
        q: "¿Es una suscripción? ¿Mac y Windows?",
        a:
          "Es pago único desde $39, no una factura mensual, en macOS (Apple Silicon e Intel) y Windows 10+. Hay una prueba gratis de 3 días sin tarjeta, así que puedes probarlo con tu CRM y tu propia voz antes de comprar.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Vende todo el día. <em>Escribe entre visitas.</em>",
      body: "Habla la ficha, el seguimiento y la nota del CRM entre citas y pégalos donde ya trabajas, en tu dispositivo por defecto. Prueba Voicetypr gratis 3 días y luego paga una sola vez.",
    },
    keywords: [
      "dictado por voz para agentes inmobiliarios",
      "software de dictado para inmobiliarias",
      "voz a texto para agentes inmobiliarios",
      "reconocimiento de voz para inmobiliarias",
      "dictado para agentes inmobiliarios",
      "voicetypr inmobiliaria",
    ],
  },
  "recruiters": {
    slug: "recruiters",
    title: "Voicetypr para reclutadores — Notas de candidatos antes de la siguiente llamada",
    ogTitle: "Voicetypr para reclutadores",
    description:
      "Dictado por voz para reclutadores. Dicta notas de candidatos, mensajes de contacto, resúmenes de entrevistas y actualizaciones de CRM en tus herramientas.",
    navLabel: "Reclutadores",
    hubTeaser:
      "Registra impresiones de entrevistas y borradores de contacto en tu ATS o tu correo mientras tienes al candidato fresco en la memoria.",
    category: "profession",
    order: 10,
    hero: {
      eyebrow: "voicetypr para reclutadores",
      headline: "La llamada terminó. <em>Las notas todavía tienen que existir.</em>",
      lede:
        "El reclutamiento está lleno de huecos breves entre conversaciones. Las notas de candidatos, los seguimientos de contacto, las evaluaciones y las actualizaciones de CRM hay que escribirlas mientras la persona sigue fresca en tu cabeza. Voicetypr te ayuda a dejar ese contexto por escrito antes de que la siguiente reunión lo borre.",
      metaStrip: ["notas · contacto · crm", "transcripción local", "entrada en cualquier app"],
    },
    pains: [
      {
        title: "El reclutamiento genera texto más rápido de lo que tecleas.",
        body:
          "Cada entrevista produce notas. Cada candidato prometedor necesita contacto. Cada cambio en el pipeline pide contexto en el CRM. La carga de escritura es constante.",
      },
      {
        title: "Los buenos detalles de un candidato se desvanecen rápido.",
        body:
          "El matiz útil suele estar en cómo alguien explicó un proyecto o dudó ante una decisión. Si tardas demasiado en anotarlo, el recuerdo se vuelve más plano.",
      },
      {
        title: "Los mensajes con plantilla siguen necesitando un toque humano.",
        body:
          "Los mejores mensajes de un reclutador no suenan pegados. Siguen necesitando contexto real, y eso implica teclear más de lo que querrías.",
      },
    ],
    outcomes: [
      {
        marker: "rápido",
        title: "Notas de candidatos capturadas antes de la siguiente llamada",
        body:
          "La voz facilita registrar la señal real de la conversación mientras todavía está nítida.",
        meta: "Resultado · memoria",
      },
      {
        marker: "cualquier",
        title: "Funciona en ATS, CRM, documentos y correo",
        body:
          "Los flujos de reclutamiento saltan entre herramientas del navegador, notas, hojas de cálculo y bandejas de entrada. Voicetypr sigue al cursor en lugar de imponer un flujo nuevo.",
        meta: "Resultado · alcance",
      },
      {
        marker: "humano",
        title: "Mensajes de contacto que siguen sonando personales",
        body:
          "Explicar en voz alta por qué un candidato encaja suele sonar más natural que teclear desde cero un mensaje rígido.",
        meta: "Resultado · tono",
      },
    ],
    workflows: [
      {
        title: "Resumen tras la llamada de criba",
        body:
          "Justo después de la llamada, dicta fortalezas, carencias, riesgos y una recomendación en el ATS o en el documento de notas. Todo el resumen lleva un minuto en vez de convertirse en otra tarea pendiente.",
      },
      {
        title: "Contacto con candidatos con contexto real",
        body:
          "Abre el correo o el borrador de LinkedIn y di por qué encaja el puesto, qué destacó del perfil y qué quieres que sepan. Luego afínalo.",
      },
      {
        title: "Notas de traspaso al responsable de contratación",
        body:
          "Dicta lo que importa: lo que la persona ha hecho de verdad, qué conviene indagar después y qué resultó especialmente fuerte o débil.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo dentro de mi ATS o en herramientas de reclutamiento del navegador?",
        a:
          "Normalmente sí. Voicetypr funciona en cualquier lugar donde un campo de texto normal acepte entrada de teclado, incluidas las apps del navegador.",
      },
      {
        q: "¿Solo sirve para las notas de candidatos?",
        a:
          "No. Los reclutadores también lo usan para borradores de contacto, resúmenes internos, seguimientos y notas para el responsable de contratación.",
      },
      {
        q: "¿Y si aún tengo que pulir la nota después de dictar?",
        a:
          "Es normal. La ventaja es meter un buen primer borrador en el sistema rápido, mientras la conversación sigue clara.",
      },
      {
        q: "¿También ayuda con prompts de búsqueda o de contacto con IA?",
        a:
          "Sí. Las cajas de prompts y los campos de búsqueda son entradas de texto normales, así que Voicetypr también funciona ahí.",
      },
      {
        q: "¿Es esto una plataforma de automatización de reclutamiento?",
        a:
          "No. Voicetypr es una herramienta de entrada. Te ayuda a escribir dentro del stack de reclutamiento que ya usas.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Quédate con la señal. <em>Suelta algo de tecleo.</em>",
      body: "Registra la señal del candidato mientras está fresca: notas por voz en el CRM o el correo, sin maratón de tecleo. Local por defecto; prueba de 3 días y pago de por vida.",
    },
    keywords: [
      "dictado por voz para reclutadores",
      "software de dictado para reclutadores",
      "dictar notas de candidatos",
      "voz a texto para contacto de reclutamiento",
      "notas de reclutador por voz",
    ],
  },
  "journalists": {
    slug: "journalists",
    title: "Voicetypr para periodistas — Captura la historia antes de que se enfríe la pista",
    ogTitle: "Voicetypr para periodistas",
    description:
      "Dictado por voz para periodistas y reporteros. Resume entrevistas, redacta entradillas y escribe más rápido en tus apps de siempre con transcripción local.",
    navLabel: "Periodistas",
    hubTeaser:
      "Convierte el recuerdo de la entrevista en entradillas, párrafos clave y resúmenes en tu CMS o documento, mientras las citas aún suenan frescas.",
    category: "profession",
    order: 4,
    hero: {
      eyebrow: "voicetypr para periodistas",
      headline: "La entrevista ya ocurrió. <em>Escribe mientras sigue viva.</em>",
      lede:
        "El reporterismo va más rápido que el teclado. Justo después de una entrevista o una rueda de prensa, la forma de la historia está clara durante unos quince minutos. Voicetypr te ayuda a volcar esa estructura, ese enfoque y ese primer borrador en la app que ya usas antes de que la señal se desvanezca.",
      metaStrip: ["redacción en caliente", "transcripción local", "funciona en cualquier editor"],
    },
    pains: [
      {
        title: "Las mejores frases llegan cuando estás lejos del teclado.",
        body:
          "Una entradilla limpia, un enfoque más afilado y el párrafo que explica por qué importa la historia suelen aparecer en el camino de vuelta de la entrevista.",
      },
      {
        title: "Las notas de la entrevista se acumulan rápido.",
        body:
          "Las citas, los detalles de ambiente, las preguntas de seguimiento y las observaciones sueltas se amontonan. Escribirlo todo desde cero ralentiza el salto del reporteo a la redacción.",
      },
      {
        title: "El dictado integrado sirve para frases sueltas, no para el ritmo de una redacción.",
        body:
          "El dictado breve del navegador o del sistema puede con una línea. Suele quedarse corto cuando necesitas un resumen completo, una entrada en bruto o un borrador de 600 palabras de una sola vez.",
      },
    ],
    outcomes: [
      {
        marker: "rápido",
        title: "Captura tras la entrevista",
        body:
          "Dicta el enfoque, las mejores citas y las próximas preguntas mientras siguen frescos. El documento de trabajo existe antes de empezar la redacción formal.",
        meta: "Resultado · memoria",
      },
      {
        marker: "cualquier",
        title: "Editor, cualquier herramienta",
        body:
          "Google Docs, Word, Notas, Notion, los cuadros de borrador del CMS, el correo. Si la historia toma forma en un campo de texto normal, Voicetypr encaja ahí.",
        meta: "Resultado · alcance",
      },
      {
        marker: "local",
        title: "Redacción con fuentes delicadas",
        body:
          "Tu voz se transcribe en tu propio equipo de forma predeterminada, algo que importa cuando tus notas incluyen reporteo sin publicar o contexto sensible.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "De la entrevista al esqueleto de la historia",
        body:
          "Justo después de la llamada, mantén pulsado el atajo y cuenta lo que pasó: la entradilla, la cita más fuerte, la tensión, el hueco que falta. Para cuando te sientas, el esqueleto ya está en el documento.",
      },
      {
        title: "Redacta la entrada hablándola como si la presentaras",
        body:
          "Si puedes explicarle la historia a tu editor en voz alta, normalmente puedes redactar los cinco primeros párrafos de la misma manera. Hablar suele encontrar la frase más limpia antes que el teclado.",
      },
      {
        title: "Notas de campo que no se pudren en el móvil",
        body:
          "Después de un evento, vuelca los detalles en una app de notas o en un documento de inmediato: nombres, gestos, contradicciones, la textura de la escena. La voz es más rápida que teclear todo eso en el móvil.",
      },
    ],
    faqs: [
      {
        q: "¿Sirve para transcribir entrevistas completas?",
        a:
          "No principalmente. Voicetypr brilla más en tu propia redacción en primera persona y en los resúmenes. Para transcribir audio con varios interlocutores, suele convenir un flujo de transcripción dedicado.",
      },
      {
        q: "¿Puedo usarlo dentro de Google Docs o del cuadro de borrador de mi CMS?",
        a:
          "Sí. Voicetypr funciona en cualquier lugar donde un campo de texto normal acepte entrada de teclado, incluidos los editores en el navegador y los formularios del CMS.",
      },
      {
        q: "¿Y si cito nombres o lugares que el modelo podría no captar?",
        a:
          "Aun así deberías hacer una revisión editorial. Voicetypr sirve para sacar el borrador rápido, no para saltarte la verificación de datos ni la limpieza de nombres propios.",
      },
      {
        q: "¿La transcripción local significa que todos los servicios asociados están sin conexión?",
        a:
          "No. Significa que el dictado normal se transcribe en tu equipo una vez configurado. Las descargas, las actualizaciones, las licencias y el formateo opcional con IA (solo texto) sí pueden usar servicios de red.",
      },
      {
        q: "¿Puedo redactar en idiomas distintos del inglés?",
        a:
          "Sí. Voicetypr admite más de 99 idiomas, así que los flujos de reporteo multilingüe funcionan sin problema siempre que elijas el idioma correcto en los ajustes.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Atrapa el enfoque <em>antes de que el teclado lo aplane.</em>",
      body: "Entrega la entradilla y el resumen mientras la entrevista sigue en tu cabeza. Sigue siendo en tu equipo de forma predeterminada; prueba de 3 días y opción de licencia de por vida.",
    },
    keywords: [
      "dictado por voz para periodistas",
      "software de dictado para periodistas",
      "dictado por voz para reporteros",
      "software de dictado para periodismo",
      "voz a texto para periodistas",
    ],
  },
  "marketers": {
    slug: "marketers",
    title: "Voicetypr para marketers — Habla el borrador antes de que la campaña se aplane",
    ogTitle: "Voicetypr para marketers",
    description:
      "Dictado por voz para marketers. Dicta briefs de campaña, borradores de copy, esquemas de contenido y notas de estrategia más rápido en las herramientas que ya usas.",
    navLabel: "Marketers",
    hubTeaser:
      "Habla briefs de campaña, enfoques de copy publicitario y esquemas de contenido en Notion o Docs antes de que baje la energía creativa.",
    category: "profession",
    order: 12,
    hero: {
      eyebrow: "voicetypr para marketers",
      headline: "La campaña empieza hablando. <em>El borrador sigue necesitando palabras.</em>",
      lede:
        "El trabajo de marketing produce muchísimo texto antes de lanzar nada: briefs, ganchos, copy publicitario, estructura de landing pages, correos, pruebas de enfoque y notas internas. Voicetypr te ayuda a sacar rápido esas primeras versiones para que la buena idea llegue antes de que el exceso de edición la mate.",
      metaStrip: ["copy · briefs · esquemas", "transcripción local", "funciona en cualquier app"],
    },
    pains: [
      {
        title: "El marketing es más escritura de lo que parece desde fuera.",
        body:
          "Una campaña significa documentos, páginas, anuncios, correos, prompts y notas. El recurso final se ve; la carga de tecleo que hay detrás normalmente no.",
      },
      {
        title: "El primer enfoque potente suele sonar obvio en voz alta.",
        body:
          "Puedes oír el gancho en tu cabeza o explicárselo a un compañero, pero escribirlo limpio desde cero ralentiza la parte que ya estaba ahí.",
      },
      {
        title: "El marketing con muchos prompts también genera fatiga de teclado.",
        body:
          "Buena parte del marketing actual consiste en alimentar de contexto a las herramientas de IA. Eso puede suponer tanto tecleo como el propio copy final.",
      },
    ],
    outcomes: [
      {
        marker: "más rápido",
        title: "Más primeros borradores sobre la página",
        body:
          "Los briefs, los ganchos, los correos y los esquemas aparecen más rápido cuando los hablas primero y los editas después.",
        meta: "Resultado · velocidad",
      },
      {
        marker: "cualquier",
        title: "Funciona en documentos, CMS, prompts y chat",
        body:
          "Notion, Docs, gestores de anuncios, campos del CMS, Slack, correo, cuadros de prompts de IA. La escritura de marketing está fragmentada, así que la herramienta de entrada tiene que ser flexible.",
        meta: "Resultado · alcance",
      },
      {
        marker: "natural",
        title: "La voz puede sonar más como el lenguaje real",
        body:
          "Los primeros borradores hablados suelen sentirse más humanos que el copy montado palabra a palabra bajo la presión del teclado.",
        meta: "Resultado · tono",
      },
    ],
    workflows: [
      {
        title: "Brief de campaña a partir de pensar en voz alta",
        body:
          "Dicta la audiencia, el problema, el mensaje, las objeciones y el CTA en el brief antes de empezar a darle un formato ordenado.",
      },
      {
        title: "Pasadas de borrador para landing pages y correos",
        body:
          "Abre el documento o el campo de notas del maquetador y habla el titular, la historia, la prueba y la oferta. Luego recórtalo. Así la estructura sale más rápido.",
      },
      {
        title: "Prompts de IA sin el impuesto del teclado",
        body:
          "Si ahora la mitad del trabajo es dar contexto a las herramientas de IA, la voz suele ser la forma más rápida de transmitirles el matiz que necesitan.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo en Notion, Google Docs y campos del CMS?",
        a:
          "Sí. Voicetypr funciona en cualquier lugar donde un campo de texto normal acepte entrada de teclado, incluidas las herramientas en el navegador y los documentos.",
      },
      {
        q: "¿Es solo para copy de formato largo?",
        a:
          "No. Los marketers lo usan para briefs, esquemas, entradas de prompts, notas internas, conceptos de anuncios, correos y borradores de landing pages.",
      },
      {
        q: "¿El copy hablado necesitará edición?",
        a:
          "Por supuesto. La idea no es lograr un copy final perfecto de una sola pasada, sino tener antes un primer borrador más sólido sobre la página.",
      },
      {
        q: "¿De verdad la voz puede ayudar con los enfoques de marketing?",
        a:
          "A menudo sí. Hablar puede hacer aflorar un gancho más natural o una frase para rebatir objeciones mejor que teclear bajo presión.",
      },
      {
        q: "¿Sustituye a las herramientas de copy o a las apps de escritura con IA?",
        a:
          "No. Acelera la forma de poner palabras en el correo, el CRM y los documentos; no sustituye a esas herramientas.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Habla el primer enfoque. <em>Edita la versión más afilada.</em>",
      body: "Prepara el brief de la campaña y esboza el copy por voz antes de que baje la energía. Transcripción local de forma predeterminada; prueba de 3 días y luego una licencia de pago único.",
    },
    keywords: [
      "dictado por voz para marketers",
      "software de dictado para marketers",
      "voz a texto para copy de marketing",
      "dictar briefs de campaña",
      "copy de marketing por voz",
    ],
  },
  "bloggers": {
    slug: "bloggers",
    title: "Voicetypr para blogueros — Habla el borrador, publica más rápido",
    ogTitle: "Voicetypr para blogueros",
    description:
      "Dictado por voz para blogueros y creadores de contenido. Habla el primer borrador, vence la página en blanco y agrupa entradas en WordPress, Ghost, Notion o Docs.",
    navLabel: "Blogueros",
    hubTeaser:
      "Vence la página en blanco con un calendario de publicación: habla el esquema, la introducción y el primer borrador en WordPress, Ghost o Notion.",
    category: "profession",
    order: 19,
    hero: {
      eyebrow: "voicetypr para blogueros",
      headline: "La página en blanco vuelve cada semana. <em>Pásala de largo hablando.</em>",
      lede:
        "Publicar con una cadencia significa enfrentarte a una entrada en blanco esta semana, y cada semana siguiente. Mantén pulsado un atajo, habla el esquema y el primer borrador en voz alta, y Voicetypr deja las palabras en WordPress, Ghost, Notion o tu CMS, transcritas en tu propio equipo.",
      metaStrip: ["esquema · intro · primer borrador", "transcripción local", "wordpress · ghost · cms"],
    },
    pains: [
      {
        title: "La entrada en blanco se reinicia cada semana.",
        body:
          "Lo difícil de bloguear con calendario no es escribir una entrada, sino empezar la siguiente, y la de después. Hablar la introducción es mucho más fácil que teclear en un editor vacío, así que la cadencia deja de depender de la fuerza de voluntad.",
      },
      {
        title: "Puedes explicar la entrada en dos minutos. Teclearla lleva dos horas.",
        body:
          "La idea está clara cuando se la cuentas a un amigo o la discutes contigo mismo durante un paseo. Se atasca en cuanto te sientas a teclearla con pulcritud. La voz conserva la versión que sonaba bien en voz alta en lugar de dejar que se aplane en el teclado.",
      },
      {
        title: "La constancia lo es todo, y el teclado es lo que la rompe.",
        body:
          "Cuando cada entrada es una paliza de teclear, el día de escritura se escapa, el calendario se llena de huecos y el blog se queda en silencio. Bajar el coste de un primer borrador es lo que mantiene las entradas saliendo.",
      },
    ],
    outcomes: [
      {
        marker: "borrador",
        title: "Un primer borrador de una sentada",
        body:
          "Habla la introducción, el esquema y el cuerpo de una pasada, y luego edita en una segunda. La entrada ya existe para cuando te sientas a pulirla.",
        meta: "Resultado · velocidad",
      },
      {
        marker: "cualquier",
        title: "Editor, cualquier plataforma de blog o CMS",
        body:
          "WordPress, Ghost, Substack, Medium, Notion, Google Docs, un campo de un CMS headless. Si el cursor parpadea ahí, el texto se pega; sin plugin por plataforma.",
        meta: "Resultado · alcance",
      },
      {
        marker: "una vez",
        title: "Paga una vez, publica a cualquier cadencia",
        body:
          "Una licencia de por vida desde $39, no una factura mensual que depende de un blog que quizá aún no da dinero. Publica cada semana o dos veces al año: la herramienta cuesta lo mismo.",
        meta: "Resultado · sin suscripción",
      },
    ],
    workflows: [
      {
        title: "Convierte una idea ya hablada en un borrador",
        body:
          "Ya le explicaste la entrada a un amigo, o la fuiste armando en tu cabeza durante un paseo. Abre el editor, mantén pulsado el atajo y dilo de la misma forma. La versión que sonaba bien en voz alta ahora está en el borrador en lugar de evaporarse.",
      },
      {
        title: "Esquematiza la entrada antes de rellenarla",
        body:
          "Dicta el enfoque, los subtítulos y una línea sobre lo que cubre cada sección. Ahora escribes dentro de una estructura en lugar de una página en blanco, y el esquema SEO que habrías tecleado despacio ya está puesto.",
      },
      {
        title: "Agrupa una semana de entradas en tu día de escritura",
        body:
          "Reserva el tiempo y luego esboza varias entradas seguidas por voz: un borrador hablado, y después el siguiente. Un calendario de contenidos es más fácil de mantener cuando los primeros borradores cuestan minutos de hablar en vez de horas de teclear.",
      },
    ],
    faqs: [
      {
        q: "¿Funciona en WordPress, Ghost y mi CMS?",
        a:
          "Sí. Voicetypr pega en cualquier campo de texto que acepte entrada de teclado: el editor de bloques de WordPress, el editor de Ghost, Substack, Medium, Notion, Google Docs o el campo de un CMS headless en el navegador. Coloca el cursor, mantén pulsado el atajo y habla.",
      },
      {
        q: "¿La entrada no seguirá necesitando edición después de dictarla?",
        a:
          "Sí, y ese es el flujo. Hablas rápido el primer borrador en bruto y luego le das forma editando en una segunda pasada. La ventaja es superar la página en blanco, no publicar una transcripción sin editar.",
      },
      {
        q: "¿Una entrada dictada sonará robótica o sonará a mí?",
        a:
          "Los borradores hablados suelen leerse más como tú que el copy montado palabra a palabra, porque es así como hablas de verdad. El preajuste opcional Default formatting limpia la puntuación y los saltos de párrafo; desactívalo si prefieres dar forma tú mismo a la transcripción en bruto.",
      },
      {
        q: "¿Puede con una entrada larga de 1.500 palabras de una sola vez?",
        a:
          "Sí. El modelo procesa el bloque entero después de que sueltas el atajo, así que no hay caídas de streaming en sesiones largas. Tú sigues eligiendo las palabras clave y la estructura; la voz solo pone las palabras más rápido que teclearlas.",
      },
      {
        q: "¿Se sube mi audio o mi borrador sin publicar a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local de forma predeterminada, así que tu audio y tus entradas sin publicar se quedan en tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas, nunca la grabación.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Pulsa publicar más a menudo. <em>Habla primero el borrador.</em>",
      body: "Vence la página en blanco con cadencia: habla el esquema y el primer borrador en tu editor y luego pule, en tu equipo de forma predeterminada. Prueba Voicetypr gratis 3 días y luego paga una sola vez.",
    },
    keywords: [
      "dictado por voz para blogueros",
      "dictado por voz para creadores de contenido",
      "voz a texto para blogs",
      "transcripción de voz a texto para creadores de contenido",
      "dictado para blogueros",
      "voicetypr blogueros",
    ],
  },
  "novelists": {
    slug: "novelists",
    title: "Voicetypr para novelistas — Escribe tu libro por voz",
    ogTitle: "Voicetypr para novelistas",
    description:
      "Dictado por voz para novelistas que escriben un libro. Habla escenas y diálogos a velocidad de habla y edita después. Transcripción local, pago único, cualquier app.",
    navLabel: "Novelistas",
    hubTeaser:
      "Narra la escena en Scrivener o Word como la contarías, y revísala otro día; paga una vez por todo el libro.",
    category: "profession",
    order: 17,
    hero: {
      eyebrow: "voicetypr para novelistas",
      headline: "El libro está en tu cabeza. <em>Dilo sobre la página.</em>",
      lede:
        "Ves la escena antes de poder teclearla. Mantén pulsado el atajo, nárrala como se la contarías a un amigo, y Voicetypr deja las palabras en Scrivener, Word o donde sea que escribas, transcritas en tu propio equipo.",
      metaStrip: ["narra escenas enteras", "transcripción local", "paga una vez por el libro"],
    },
    pains: [
      {
        title: "La escena transcurre más rápido de lo que puedes teclearla.",
        body:
          "La ves: quién entra, qué se dice, dónde gira. Pero cuarenta palabras por minuto no pueden seguir el ritmo de una escena que corre en tu cabeza, así que la mitad se enfría antes de llegar a la página. La página en blanco gana por defecto.",
      },
      {
        title: "Una novela son meses de trabajo, y una suscripción te cobra cada uno de ellos.",
        body:
          "Ochenta mil palabras no son un fin de semana. Es presentarte casi todo un año. Una suscripción de dictado convierte cada uno de esos meses en otro cargo: acabas alquilando la herramienta que debería ayudarte a terminar.",
      },
      {
        title: "Un manuscrito sin terminar no debería estar en el servidor de otro.",
        body:
          "Tu borrador está en bruto, sin vender y es tuyo. La mayoría del dictado en la nube envía cada escena a un servidor que no controlas. Para un libro que nadie debería leer todavía, ese es el ajuste equivocado por defecto.",
      },
    ],
    outcomes: [
      {
        marker: "~130",
        title: "Escribe a la velocidad a la que cuentas la historia",
        body:
          "Hablar ronda las 130 palabras por minuto frente a unas 40 tecleando; es orientativo, pero se nota. La escena llega a la página mientras sigue caliente, y el borrador crece en lugar de estancarse.",
        meta: "Resultado · ritmo",
      },
      {
        marker: "una vez",
        title: "Paga una vez por todo el libro",
        body:
          "Una licencia de por vida, no un alquiler mensual. Escribe durante tantos meses como tarde la novela sin que llegue otra factura mientras estás a mitad de capítulo.",
        meta: "Resultado · sin suscripción",
      },
      {
        marker: "cualquier",
        title: "Escribe donde ya escribes",
        body:
          "Scrivener, Word, Ulysses, Google Docs: Voicetypr pega en lo que tenga tu cursor. Sin exportar, sin un editor nuevo que aprender a mitad del manuscrito.",
        meta: "Resultado · alcance",
      },
    ],
    workflows: [
      {
        title: "Narra la escena, revísala otro día",
        body:
          "Abre tu manuscrito por el siguiente capítulo, mantén pulsado el atajo y cuenta la escena en voz alta: quién está, qué se dice, qué se rompe. Suelta, y una escena completa y desordenada estará en la página. La revisión es tarea de mañana, no de esta frase.",
      },
      {
        title: "Habla el diálogo con la voz de cada personaje",
        body:
          "El diálogo suena verdadero cuando suena hablado. Di cada línea como lo haría el personaje, deja que Voicetypr la escriba y luego vuelve para colocar las acotaciones y los gestos. El intercambio conserva el ritmo que oíste antes de empezar a corregirlo.",
      },
      {
        title: "Mantén el recuento diario de palabras en cualquier parte",
        body:
          "El hábito de las mil palabras al día no necesita una silla. Paseando por la habitación o saliendo a caminar con el portátil a mano, mantén pulsado el atajo y sigue sumando al manuscrito esos días en que sentarte al escritorio se hace imposible.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto rato seguido puedo dictar de una vez?",
        a:
          "Lo que necesite una escena. Voicetypr procesa el bloque entero después de que sueltas el atajo, así que no hay un corte a los treinta segundos como en la herramienta integrada de macOS ni caídas de transmisión en directo. Cuenta una escena completa y luego suelta.",
      },
      {
        q: "¿El diálogo y la puntuación saldrán limpios?",
        a:
          "La puntuación sale mejor que con el dictado nativo, pero el formato de las líneas habladas (comillas, rayas de diálogo, acotaciones) suele pedir una revisión editorial rápida. Es una revisión que harías de todos modos. Desactiva el preajuste Default formatting si prefieres limpiar tú mismo una transcripción en bruto.",
      },
      {
        q: "¿Se envía a algún sitio mi manuscrito sin publicar?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local de forma predeterminada, así que tu borrador y tu audio se quedan en tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas; nunca el audio, nunca la grabación.",
      },
      {
        q: "Una novela lleva meses. ¿Sigo pagando todo ese tiempo?",
        a:
          "No. Es una compra única, no una suscripción, así que la herramienta cuesta lo mismo tanto si el libro tarda tres meses como un año. Hay una prueba gratis de 3 días sin tarjeta y luego una licencia de pago único.",
      },
      {
        q: "¿Funciona en Scrivener, Word, Ulysses y Google Docs?",
        a:
          "Sí, en cualquiera de ellos, además de cualquier otro campo de texto que acepte entrada de teclado. Pon el cursor donde va la siguiente línea, mantén pulsado el atajo y habla. La app no necesita un plugin ni saber nada de Voicetypr.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Escribe la novela <em>a la velocidad a la que la cuentas.</em>",
      body: "Narra la escena, deja que aterrice en Scrivener o Word, y revísala otro día, en tu equipo de forma predeterminada. Prueba Voicetypr gratis 3 días y luego paga una vez por todo el libro.",
    },
    keywords: [
      "dictado por voz para novelistas",
      "dictar por voz para novelistas",
      "voz a texto para novelistas",
      "transcripción de voz a texto para escritores de ficción",
      "dictar una novela",
      "dictado por voz para autores",
      "voicetypr novelistas",
    ],
  },
  "sales": {
    slug: "sales",
    title: "Voicetypr para ventas — Haz seguimiento mientras la llamada sigue caliente",
    ogTitle: "Voicetypr para ventas",
    description:
      "Dictado por voz para comerciales. Dicta seguimientos, notas de CRM, resúmenes de llamadas y borradores de propuestas en Gmail, Salesforce, HubSpot y Slack.",
    navLabel: "Ventas",
    hubTeaser:
      "Envía seguimientos y notas de llamada en el CRM justo después de la reunión: la voz mantiene un tono natural y reduce la escritura.",
    category: "profession",
    order: 11,
    hero: {
      eyebrow: "voicetypr para ventas",
      headline: "El trato avanza con rapidez. <em>El papeleo sigue pidiendo párrafos.</em>",
      lede:
        "El trabajo comercial está lleno de texto que importa pero nunca parece lo principal: correos de seguimiento, actualizaciones del CRM, notas de descubrimiento, contexto de propuestas y traspasos internos. Voicetypr elimina el peaje de teclear para que pongas las palabras en el sistema antes de que se pierda el impulso.",
      metaStrip: ["seguimientos · crm · propuestas", "transcripción local", "funciona en cualquier herramienta"],
    },
    pains: [
      {
        title: "Cada llamada genera un segundo trabajo.",
        body:
          "Terminas la reunión y entonces toca escribir el resumen, actualizar el CRM, enviar el seguimiento y anotar los próximos pasos. La conversación de ventas se acabó; el tecleo acaba de empezar.",
      },
      {
        title: "Los mejores seguimientos casi nunca se escriben al instante.",
        body:
          "Con la energía alta, sabes exactamente qué decir. Diez llamadas después, el correo se vuelve más corto, más soso y menos persuasivo.",
      },
      {
        title: "La higiene del CRM muere cuando teclear cuesta demasiado.",
        body:
          "Los comerciales saben que deberían dejar mejores notas. A menudo lo saltan porque nadie quiere teclear otro resumen detallado entre llamadas.",
      },
    ],
    outcomes: [
      {
        marker: "más rápido",
        title: "Seguimientos enviados mientras la llamada sigue fresca",
        body:
          "La voz facilita enviar el resumen útil ahora en vez de decirte que lo harás más tarde.",
        meta: "Resultado · momento",
      },
      {
        marker: "mejor",
        title: "Notas de CRM más completas",
        body:
          "Como dictar un párrafo cuesta poco, guardas más detalle sobre objeciones, plazos y contexto político.",
        meta: "Resultado · contexto",
      },
      {
        marker: "cualquier",
        title: "Correo, CRM, documentos, herramientas de propuestas",
        body:
          "El trabajo comercial salta entre Gmail, HubSpot, Salesforce, notas, documentos y formularios del navegador. Voicetypr encaja en esa realidad.",
        meta: "Resultado · alcance",
      },
    ],
    workflows: [
      {
        title: "De la llamada de descubrimiento al correo de seguimiento",
        body:
          "Abre el borrador y repasa en voz alta lo que escuchaste, lo que importa y qué pasa después. Luego edita. El correo sale antes y suena más cercano a la conversación real.",
      },
      {
        title: "Actualizaciones del CRM entre llamadas",
        body:
          "Dicta las objeciones, la realidad del presupuesto, la dinámica de los decisores y los próximos pasos justo después de la llamada, en vez de dejar frases vagas de una línea.",
      },
      {
        title: "Enfoque de la propuesta y traspaso interno",
        body:
          "Antes de pulir la propuesta formal, usa la voz para volcar el contexto del negocio y la estrategia para ganar en un documento de trabajo que el equipo pueda usar.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo en mi CRM?",
        a:
          "Normalmente sí. Voicetypr funciona en cualquier lugar donde un campo de texto normal acepte entrada de teclado, incluidas las herramientas de CRM en el navegador.",
      },
      {
        q: "¿Esto solo sirve para los correos de seguimiento?",
        a:
          "No. Los comerciales también lo usan para notas de llamadas, actualizaciones del CRM, esquemas de propuestas, traspasos y resúmenes internos.",
      },
      {
        q: "¿El texto de ventas dictado sonará demasiado tosco?",
        a:
          "El primer borrador puede ser tosco, pero suele ser más fácil editar un borrador hablado que teclear uno desde cero cuando vas con prisa.",
      },
      {
        q: "¿Puedo usarlo también para prompts de ventas en herramientas de IA?",
        a:
          "Sí. Los cuadros de prompt y los formularios del navegador son campos de texto normales, así que Voicetypr también funciona ahí.",
      },
      {
        q: "¿Reemplaza a las herramientas de automatización o de secuencias del CRM?",
        a:
          "No. Acelera cómo metes las palabras en el correo, el CRM y los documentos; no reemplaza esas herramientas.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Envía el seguimiento. <em>Teclea menos para lograrlo.</em>",
      body: "Envía el seguimiento antes de que el prospecto se enfríe: dicta y pega en el CRM o en Gmail. Sigue siendo en el dispositivo por defecto; pruébalo gratis 3 días.",
    },
    keywords: [
      "dictado por voz para comerciales",
      "software de dictado para ventas",
      "dictar notas de CRM",
      "voz a texto para correos de seguimiento de ventas",
      "notas de ventas por voz",
    ],
  },
  "product-managers": {
    slug: "product-managers",
    title: "Voicetypr para product managers — especificaciones y actualizaciones a la velocidad del habla",
    ogTitle: "Voicetypr para product managers",
    description:
      "Dictado por voz para product managers. Dicta especificaciones, historias de usuario y actualizaciones de sprint en Notion, Jira, Slack y Google Docs.",
    navLabel: "Product managers",
    hubTeaser:
      "Convierte el razonamiento del standup en especificaciones, registros de decisiones e historias de Jira antes de que la siguiente reunión borre los matices.",
    category: "profession",
    order: 5,
    hero: {
      eyebrow: "voicetypr para product managers",
      headline: "El trabajo de producto ocurre en reuniones. <em>La escritura llega después.</em>",
      lede:
        "Gran parte del trabajo de PM empieza como razonamiento hablado: en standups, llamadas con usuarios, revisiones de diseño y el caos de los stakeholders. Voicetypr te ayuda a convertir ese razonamiento en especificaciones, actualizaciones y documentos de decisión sin pasar la hora siguiente reescribiendo lo que ya sabes.",
      metaStrip: ["especificaciones · documentos · jira", "transcripción local", "flujo entre apps"],
    },
    pains: [
      {
        title: "La decisión de producto está clara en tu cabeza, borrosa en el papel.",
        body:
          "Puedes explicar la disyuntiva en voz alta en treinta segundos, pero teclear lo mismo en una especificación lleva veinte minutos porque escribir obliga a comprimir innecesariamente demasiado pronto.",
      },
      {
        title: "La escritura de un PM está repartida en demasiadas herramientas.",
        body:
          "La especificación en Notion, el ticket en Jira, la actualización en Slack, el resumen en el correo, las notas en Docs. Un buen flujo de dictado debe seguir tu cursor, no atraparte en un solo editor.",
      },
      {
        title: "El contexto de la reunión se degrada antes de que llegue la documentación.",
        body:
          "Para cuando por fin tecleas las notas, el matiz ya se fue. La voz es la forma más rápida de capturar el razonamiento real mientras todavía parece obvio.",
      },
    ],
    outcomes: [
      {
        marker: "1-pase",
        title: "Borrador de especificación de una sentada",
        body:
          "Repasa en voz alta el problema, los usuarios, los casos límite y los no-objetivos una vez; luego edita el documento en vez de pelear con una página en blanco a velocidad de teclado.",
        meta: "Resultado · rendimiento",
      },
      {
        marker: "cualquier",
        title: "Funciona en el stack que ya tienes",
        body:
          "Notion, Jira, Linear, Slack, correo, documentos, formularios del navegador. La escritura de producto suele vivir en campos de texto repartidos en seis herramientas. Voicetypr te encuentra ahí.",
        meta: "Resultado · alcance",
      },
      {
        marker: "local",
        title: "Más seguro para el contexto de producto previo al lanzamiento",
        body:
          "Las notas de roadmap, las citas de clientes y los detalles de funciones sin lanzar se transcriben en tu equipo por defecto.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "Habla la especificación antes de pulirla",
        body:
          "Abre el documento y dicta el problema, los usuarios, los casos límite y los no-objetivos tal como se los explicarías a ingeniería. Luego edita. El peaje de la página en blanco desaparece.",
      },
      {
        title: "Convierte las llamadas en registros de decisiones al instante",
        body:
          "Justo después de una revisión o una llamada con un cliente, vuelca la decisión, la justificación, las preguntas abiertas y los seguimientos en Notion o Linear por voz antes de que otra reunión borre la memoria.",
      },
      {
        title: "Jira y Slack sin la microfatiga",
        body:
          "Los detalles de las historias de usuario, los criterios de aceptación, las actualizaciones para stakeholders y las aclaraciones asíncronas molestan sobre todo por el tecleo. La voz elimina esa fricción.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo en Notion, Jira o Linear?",
        a:
          "Sí. Voicetypr funciona en cualquier lugar donde un campo de texto normal acepte entrada de teclado, incluidas las herramientas de producto en el navegador.",
      },
      {
        q: "¿Esto pretende reemplazar al software de notas de reuniones?",
        a:
          "No. Voicetypr brilla para tu propia redacción y síntesis después de la reunión, no como un bot que se une y graba las llamadas grupales.",
      },
      {
        q: "¿Y los términos de producto y la jerga interna?",
        a:
          "El dictado moderno en el dispositivo suele manejar bien el lenguaje técnico y de producto, pero conviene hacer un repaso rápido para los nombres propios de la empresa.",
      },
      {
        q: "¿Ayuda también con los flujos de PM con mucha IA?",
        a:
          "Sí. Los PM dedican ahora una cantidad sorprendente de tiempo a dar prompts a herramientas de IA para especificaciones, resúmenes, reescrituras y análisis. La voz suele ser el método de entrada más rápido ahí.",
      },
      {
        q: "¿Puedo usarlo en Windows y Mac?",
        a:
          "Sí. Voicetypr es compatible con Windows 10+ y macOS 13+.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Documenta la decisión <em>mientras todavía tiene sentido.</em>",
      body: "Convierte el razonamiento de tu último standup en una especificación o un registro de decisiones antes de la siguiente reunión. Local por defecto; prueba gratuita y luego un único pago.",
    },
    keywords: [
      "dictado por voz para product managers",
      "software de dictado para product managers",
      "dictar especificaciones de producto",
      "dictado por voz para especificaciones de producto",
      "voz a texto para product managers",
    ],
  },
  "researchers": {
    slug: "researchers",
    title: "Voicetypr para investigadores — Captura la idea antes de que aparezca la versión para el paper",
    ogTitle: "Voicetypr para investigadores",
    description:
      "Dictado por voz para investigadores. Dicta notas de campo, resúmenes de literatura, memos y secciones de borrador en Docs, Word, Notion y tu cliente de correo.",
    navLabel: "Investigadores",
    hubTeaser:
      "Captura las conclusiones de la literatura y secciones de borrador tras los bloques de lectura: voz antes de que la idea se desvanezca.",
    category: "profession",
    order: 9,
    hero: {
      eyebrow: "voicetypr para investigadores",
      headline: "La idea está clara ahora. <em>No seguirá así para siempre.</em>",
      lede:
        "El trabajo de investigación produce un flujo constante de pensamiento a medio terminar: notas sobre papers, reacciones a la literatura, salvedades de método, párrafos de borrador y síntesis tras las reuniones. Voicetypr te ayuda a capturarlos antes de que se aplanen en viñetas vagas o desaparezcan por completo.",
      metaStrip: ["notas · memos · borradores", "transcripción local", "funciona en cualquier editor"],
    },
    pains: [
      {
        title: "Casi toda la escritura de investigación empieza como razonamiento hablado.",
        body:
          "Normalmente sabes cómo explicar la limitación o el resultado en voz alta antes de poder encajarlo en una prosa académica ordenada. Teclear demasiado pronto puede empequeñecer el pensamiento.",
      },
      {
        title: "Las notas se acumulan más rápido que la síntesis.",
        body:
          "Papers, anotaciones, notas de laboratorio, resúmenes de reuniones, ideas sueltas. Los investigadores acumulan fragmentos de texto toda la semana y luego pierden tiempo intentando volver a unirlos.",
      },
      {
        title: "No siempre quieres el trabajo en bruto primero en una herramienta en la nube.",
        body:
          "Las interpretaciones tempranas, los hallazgos sin publicar y el contexto de los colaboradores pueden ser sensibles. El dictado que prioriza el modo sin conexión es sencillamente un mejor punto de partida para ese tipo de material.",
      },
    ],
    outcomes: [
      {
        marker: "más rápido",
        title: "Más síntesis mientras el contexto sigue fresco",
        body:
          "En vez de guardar tu pensamiento real para después, puedes dictar la interpretación ahora y pulirla más tarde.",
        meta: "Resultado · síntesis",
      },
      {
        marker: "cualquier",
        title: "Funciona en las herramientas que ya usa la investigación",
        body:
          "Word, Google Docs, Notion, correo, formularios del navegador, apps de notas y herramientas de IA. La escritura de investigación rara vez vive en un solo lugar.",
        meta: "Resultado · alcance",
      },
      {
        marker: "local",
        title: "Un punto de partida más seguro para el trabajo sin publicar",
        body:
          "El dictado por voz se ejecuta en tu equipo tras la configuración, lo que supone un punto de partida más limpio para notas en bruto y borradores previos a la publicación.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "Reacción a la literatura antes de que se enfríe",
        body:
          "Justo después de leer un paper, dicta lo que importa, lo que parece débil y dónde conecta con tu trabajo. Esas reacciones son difíciles de reconstruir más tarde solo a partir de los subrayados.",
      },
      {
        title: "Salvedades de método e interpretación de resultados",
        body:
          "Abre el borrador o el documento de notas y repasa en voz alta lo que probablemente significa el resultado, lo que desde luego no significa y lo que todavía tienes que comprobar. Luego edita eso para convertirlo en prosa formal.",
      },
      {
        title: "Del resumen de la reunión a un memo de verdad",
        body:
          "Tras las reuniones con tu director, los standups de investigación o las llamadas con colaboradores, vuelca las decisiones importantes y los próximos pasos por voz antes de que el matiz desaparezca.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo para escritura académica en Word o Google Docs?",
        a:
          "Sí. Voicetypr funciona en cualquier lugar donde un campo de texto normal acepte entrada de teclado, incluidos Word, Docs, apps de notas y el correo.",
      },
      {
        q: "¿Sirve para escribir prosa final publicable de una sola vez?",
        a:
          "Normalmente es mejor para sacar el primer borrador. La mayoría de los investigadores hará igualmente una edición seria para la claridad, las citas y el tono.",
      },
      {
        q: "¿Y los términos técnicos y las citas?",
        a:
          "Maneja sorprendentemente bien muchas cosas, pero aun así cuenta con un repaso de limpieza para nombres concretos, jerga y formato de referencias.",
      },
      {
        q: "¿Puedo usarlo también para prompts de IA y herramientas de síntesis de literatura?",
        a:
          "Sí. Los cuadros de prompt son campos de texto normales, así que Voicetypr funciona ahí igual que en documentos o notas.",
      },
      {
        q: "¿Es esto una plataforma de transcripción de reuniones?",
        a:
          "No. Voicetypr brilla para tu propio dictado y síntesis, no como un sistema de grabación de varios hablantes o de colaboración.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Captura la idea de verdad. <em>Pule el paper más tarde.</em>",
      body: "Captura la idea justo después del bloque de lectura: dicta notas y secciones de borrador en local. Gratis durante 3 días; licencia de por vida cuando sea tu rutina diaria.",
    },
    keywords: [
      "dictado por voz para investigadores",
      "software de dictado para investigadores",
      "voz a texto para notas de investigación",
      "dictado para notas de revisión de literatura",
      "escritura de investigación por voz",
    ],
  },
  "customer-support": {
    slug: "customer-support",
    title: "Voicetypr para atención al cliente — Responde más rápido sin destrozarte las manos",
    ogTitle: "Voicetypr para atención al cliente",
    description:
      "Dictado por voz para agentes de atención al cliente. Dicta respuestas a tickets, notas de CRM y contexto de escalado más rápido en help desks, chat y correo.",
    navLabel: "Atención al cliente",
    hubTeaser:
      "Vacía las colas de tickets dictando respuestas empáticas y notas internas: menos pulsaciones repetitivas por turno.",
    category: "profession",
    order: 6,
    hero: {
      eyebrow: "voicetypr para atención al cliente",
      headline: "Las respuestas son repetitivas. <em>El tecleo no tiene por qué serlo.</em>",
      lede:
        "El trabajo de soporte significa teclear todo el día: respuestas, resúmenes, seguimientos, notas internas y contexto de escalado. Voicetypr lleva las partes largas a la voz para que tus dedos no carguen solos con cada conversación con clientes.",
      metaStrip: ["tickets · crm · correo", "transcripción local", "entrada en cualquier app"],
    },
    pains: [
      {
        title: "El soporte es un trabajo de teclear disfrazado de trabajo con personas.",
        body:
          "Aunque sepas la respuesta, igual tienes que teclear la respuesta, teclear la nota, teclear el traspaso y teclear el seguimiento. El trabajo se multiplica a través de campos de texto.",
      },
      {
        title: "La empatía necesita más palabras de las que dan las macros.",
        body:
          "Las mejores respuestas de soporte suenan humanas, no como un fragmento copiado. Pero escribir una y otra vez un contexto que suene humano cuesta caro cuando cada frase se paga en pulsaciones.",
      },
      {
        title: "Las notas del caso son donde la fatiga se hace visible.",
        body:
          "La respuesta de cara al cliente se escribe. El contexto interno a menudo se salta porque nadie quiere teclear otro párrafo una vez cerrado el ticket.",
      },
    ],
    outcomes: [
      {
        marker: "más rápido",
        title: "Respuestas más largas sin ralentizar las colas",
        body:
          "Decir en voz alta una respuesta meditada suele ser más rápido que teclearla, sobre todo cuando la respuesta necesita matices y no una macro enlatada.",
        meta: "Resultado · velocidad",
      },
      {
        marker: "cualquier",
        title: "Help desk, cualquier herramienta",
        body:
          "Zendesk, Intercom, Help Scout, Gmail, Slack, CRMs, herramientas de soporte en el navegador. Si hay un cursor, Voicetypr puede funcionar ahí.",
        meta: "Resultado · alcance",
      },
      {
        marker: "menos",
        title: "Carga de teclado en toda la cola",
        body:
          "La voz sirve para las respuestas a clientes y para la nota interna que sueles posponer. Eso se acumula a lo largo de docenas de tickets.",
        meta: "Resultado · esfuerzo",
      },
    ],
    workflows: [
      {
        title: "Primero responde, luego refina",
        body:
          "Mantén pulsado el atajo y explica la solución como se la explicarías a un cliente en una llamada. Luego ajusta la redacción. La respuesta sigue siendo cálida sin tardar una eternidad.",
      },
      {
        title: "Notas del caso justo después del ticket",
        body:
          "Una vez enviada la respuesta, dicta el resumen interno de inmediato: qué pasó, qué cambió, qué vigilar. La nota se escribe de verdad porque ya no cuesta otro bloque de tecleo.",
      },
      {
        title: "Contexto de escalado que ingeniería sí puede usar",
        body:
          "En vez de un traspaso vago de una línea, repasa en voz alta los pasos de reproducción, el entorno del cliente y el impacto en el negocio. La voz facilita incluir el contexto que de otro modo te saltarías.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo en mi help desk o CRM?",
        a:
          "Normalmente sí. Voicetypr funciona en campos de texto normales en herramientas del navegador, apps de escritorio y clientes de correo.",
      },
      {
        q: "¿Esto solo sirve para respuestas enlatadas?",
        a:
          "No. Es más útil cuando la respuesta necesita contexto, empatía o una explicación que una macro no cubre bien.",
      },
      {
        q: "¿Y los datos sensibles de los clientes?",
        a:
          "El dictado normal se transcribe en tu equipo por defecto tras la configuración. El formateo opcional con IA, solo de texto, se puede activar aparte si lo quieres.",
      },
      {
        q: "¿Me ralentizará si igual tengo que editar?",
        a:
          "Normalmente no. La ganancia de tiempo viene de meter rápido un buen primer borrador en el cuadro y luego hacer una edición corta en vez de escribir desde cero.",
      },
      {
        q: "¿Reemplaza a la automatización del help desk?",
        a:
          "No. Voicetypr es una herramienta de entrada, no una plataforma de automatización de flujos. Te ayuda a escribir la respuesta más rápido dentro de las herramientas que ya usas.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Despacha la cola <em>con menos pulsaciones.</em>",
      body: "Cierra más tickets con menos fatiga en los dedos: dicta las respuestas y pégalas en tu help desk. Sin conexión por defecto; prueba de 3 días, licencia de por vida.",
    },
    keywords: [
      "dictado por voz para atención al cliente",
      "software de dictado para agentes de atención al cliente",
      "dictado por voz para agentes de servicio al cliente",
      "dictado para equipos de soporte",
      "voz a texto para tickets de soporte",
    ],
  },
  "doctors": {
    slug: "doctors",
    title: "Voicetypr para médicos — Escribe derivaciones y correos más rápido",
    ogTitle: "Voicetypr para médicos",
    description:
      "Dictado por voz para médicos. Dicta cartas de derivación, correos a colegas, borradores y formularios más rápido. Transcripción local; pagas una vez.",
    navLabel: "Médicos",
    hubTeaser:
      "Dicta por voz cartas de derivación, correos a colegas y borradores. En tu dispositivo por defecto; no es una herramienta de notas clínicas.",
    category: "profession",
    order: 14,
    hero: {
      eyebrow: "voicetypr para médicos",
      headline: "El diagnóstico toma minutos. <em>La carta toma más.</em>",
      lede:
        "Cartas de derivación, correos a colegas, borradores, folletos para pacientes, formularios administrativos: la medicina va rápido y lo que frena es escribir. Mantén pulsado un hotkey, di la frase y Voicetypr la escribe donde ya está tu cursor, transcrita en tu propia máquina.",
      metaStrip: ["derivaciones · correos · administración", "transcripción local", "pagas una vez · de por vida"],
    },
    pains: [
      {
        title: "La cita termina; lo que hay que escribir, no.",
        body:
          "Cada paciente deja un rastro de texto: una derivación, una carta, un correo, un formulario. La decisión clínica tomó minutos; escribir se come los huecos entre pacientes y las horas después de la consulta.",
      },
      {
        title: "El dictado en la nube envía tu audio al servidor de otro.",
        body:
          "Una derivación o un correo a un colega suele mencionar a un paciente. Ese es justo el audio que no quieres que salga de tu máquina. Voicetypr transcribe en el dispositivo por defecto, así que se queda contigo.",
      },
      {
        title: "El dictado médico está hecho y tarifado para el hospital.",
        body:
          "Las soluciones de dictado empresariales y sus suscripciones sobran cuando lo que de verdad necesitas es escribir más rápido a diario. No deberías firmar una factura recurrente para quitar cartas de tu escritorio.",
      },
    ],
    outcomes: [
      {
        marker: "voz",
        title: "Primeros borradores más rápidos de todo lo que escribes",
        body:
          "Cartas de derivación, correos a colegas, folletos, formularios administrativos: sácalos de tu cabeza a velocidad de habla en lugar de teclear cada uno.",
        meta: "Resultado · redacción",
      },
      {
        marker: "0",
        title: "Audio que sale de tu máquina",
        body:
          "La transcripción se ejecuta en tu máquina por defecto, así que los datos del paciente en un borrador de correo o carta no se envían a un servidor. Sigues siendo responsable de cómo se gestiona ese registro.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "cualquier app",
        title: "Escribe donde ya trabajas",
        body:
          "Tu correo, Word, el navegador, un formulario de derivación o de seguro: Voicetypr pega en el campo que tenga tu cursor, no en un único editor cerrado.",
        meta: "Resultado · en todas partes",
      },
    ],
    workflows: [
      {
        title: "Cartas de derivación entre pacientes",
        body:
          "Dicta la derivación como le explicarías el caso al colega que la recibe, y luego edítala para mayor precisión. Más rápido que teclear cada una mientras espera el siguiente paciente.",
      },
      {
        title: "Correo, mensajes a colegas y administración",
        body:
          "Respuestas a colegas, seguimientos del equipo multidisciplinar, la consulta clínica rápida, el formulario que necesita un párrafo de contexto: dilos en lugar de teclearlos. La bandeja de entrada deja de ser una tarea para la noche.",
      },
      {
        title: "Artículos, resúmenes y folletos para pacientes",
        body:
          "Habla la estructura de un artículo, la descripción de un caso, un resumen para congreso o un folleto en lenguaje sencillo antes de pulir la redacción. La voz es muy buena para sacar el primer borrador de tu cabeza.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usarlo para notas clínicas? ¿Cumple con la HIPAA?",
        a:
          "No. Voicetypr es una herramienta de dictado que escribe texto allí donde esté tu cursor, y la transcripción en el dispositivo mantiene tu audio en tu máquina por defecto; pero no es un sistema certificado de documentación clínica ni un EHR, y no ofrece ninguna garantía de cumplimiento de la HIPAA ni de normativa médica. Sigues siendo responsable de la información médica protegida y de tus obligaciones de registro. Úsalo para la carga de escritura en torno a la atención: cartas, correos, borradores y folletos.",
      },
      {
        q: "¿Funciona en mi correo, en Word y en el navegador?",
        a:
          "Sí. Voicetypr pega en cualquier campo de texto que acepte entrada de teclado: correo, Word, un formulario del navegador, tu app de notas. Coloca el cursor, mantén pulsado el hotkey y habla.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu máquina con un modelo local por defecto, así que tu audio se queda en tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas, nunca el audio. Cómo gestionas cualquier dato del paciente en ese texto sigue siendo tu responsabilidad.",
      },
      {
        q: "¿Acertará con los nombres de fármacos y los términos clínicos?",
        a:
          "Haz una pasada de edición, sobre todo con los nombres de fármacos, las dosis y los nombres de pacientes. Voicetypr acelera el primer borrador; no elimina tu paso de revisión.",
      },
      {
        q: "¿Por qué pagar una vez en lugar de una suscripción?",
        a:
          "Porque escribir más rápido pasa a formar parte de tu día, y una licencia única (desde $39) sigue funcionando sin una factura recurrente. Hay una prueba gratis de 3 días sin tarjeta para que confirmes que encaja primero.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Quita las cartas de tu escritorio. <em>Recupera tu tarde.</em>",
      body: "Dicta cartas de derivación, correos a colegas y borradores a velocidad de habla, transcritos en tu propia máquina por defecto. No es una herramienta de historia clínica; paga una vez y prueba gratis 3 días.",
    },
    keywords: [
      "dictado por voz para médicos",
      "software de dictado para médicos",
      "voz a texto para médicos",
      "reconocimiento de voz para médicos",
      "dictar cartas de derivación",
      "voicetypr médicos",
    ],
  },
  "therapists": {
    slug: "therapists",
    title: "Voicetypr para terapeutas — Despeja la pila de escritura tras cada sesión",
    ogTitle: "Voicetypr para terapeutas",
    description:
      "Dictado por voz para terapeutas y consejeros. Redacta notas de evolución, resúmenes y correos de derivación entre sesiones. Transcripción local, pagas una vez.",
    navLabel: "Terapeutas",
    hubTeaser:
      "Redacta por voz notas de evolución, resúmenes y correos de derivación. Despeja la pila tras la sesión mientras el audio se queda en tu máquina.",
    category: "profession",
    order: 15,
    hero: {
      eyebrow: "voicetypr para terapeutas",
      headline: "La sesión termina. <em>Lo que hay que escribir, no.</em>",
      lede:
        "Cada sesión deja escritura pendiente: una nota de evolución, un resumen del tratamiento, el correo de derivación, la respuesta de admisión. Voicetypr te deja hablar esa redacción entre clientes en lugar de teclearla fuera de hora, y el audio se transcribe en tu propia máquina.",
      metaStrip: ["notas · resúmenes · correo", "transcripción local", "pagas una vez · de por vida"],
    },
    pains: [
      {
        title: "Una sesión, varios textos que escribir.",
        body:
          "Un solo cliente puede dejar una nota de evolución, un resumen del tratamiento y un correo a una fuente de derivación. Multiplícalo por toda tu lista de casos y la escritura se convierte en un segundo turno tras la última cita.",
      },
      {
        title: "Diez minutos entre clientes no bastan para teclear una nota.",
        body:
          "Las notas completas no caben en el hueco entre sesiones, así que se posponen al final del día. La redacción se acumula y ponerse al día acaba cayendo en tu propia tarde.",
      },
      {
        title: "Es lo más privado que escribes.",
        body:
          "El contenido de la sesión, los resúmenes, el contexto de la derivación: es lo último que querrías enviar a un servicio en la nube para transcribir. Dónde se transcribe el borrador importa aquí más que casi en ningún otro sitio.",
      },
    ],
    outcomes: [
      {
        marker: "voz",
        title: "La pila tras la sesión, redactada más rápido",
        body:
          "Habla la nota como le describirías la sesión a un colega, y luego edítala para mayor precisión. Hablar va más rápido que construir cada línea tecla a tecla.",
        meta: "Resultado · redacción",
      },
      {
        marker: "local",
        title: "Local por defecto",
        body:
          "Tu borrador hablado se transcribe en tu propia máquina, así que el audio no va a un servicio en la nube. El formateo opcional con IA envía solo texto cuando lo activas, nunca la grabación.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "cualquier",
        title: "App, cualquier campo de texto",
        body:
          "Correo, Word, Google Docs, tu app de notas, un formulario del navegador. Si tu cursor parpadea ahí, Voicetypr pega el texto ahí mismo, sin un plugin por cada app.",
        meta: "Resultado · alcance",
      },
    ],
    workflows: [
      {
        title: "Notas de evolución mientras la sesión está fresca",
        body:
          "Cuando un cliente se va, coloca el cursor en tu nota y habla lo que pasó, lo que observaste y el plan, en los diez minutos antes del siguiente cliente, no a las 9 de la noche. Edita para mayor precisión antes de guardar.",
      },
      {
        title: "Resúmenes y correos de derivación sin el peaje de teclear",
        body:
          "Resúmenes de tratamiento, cartas de derivación, el correo a una fuente de derivación o a la aseguradora: dilos como explicarías el caso en voz alta, y luego ajusta la redacción. La escritura larga deja de comerse tus tardes.",
      },
      {
        title: "La pila administrativa entre sesiones",
        body:
          "Respuestas de admisión, mensajes para agendar citas, notas para la supervisión, la respuesta que le debes a un familiar o a una agencia colaboradora. Mantén pulsado el hotkey, dilo, pega. La escritura pequeña que llena los huecos en silencio se despeja sobre la marcha.",
      },
    ],
    faqs: [
      {
        q: "¿Es un sistema de documentación clínica o EHR que cumple con la HIPAA?",
        a:
          "No. Voicetypr es una herramienta de dictado que redacta texto más rápido; no es un EHR, ni un sistema de historias clínicas, ni una capa de cumplimiento de la HIPAA, y no se presenta como tal. La transcripción se ejecuta en tu propia máquina por defecto, lo que mantiene el audio fuera de la nube, pero sigues siendo responsable de la confidencialidad del cliente y de tus obligaciones de registro. Trata lo que produce como un borrador que revisas según los requisitos de tu propia práctica.",
      },
      {
        q: "¿Se sube mi voz o el contenido de la sesión a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu máquina con un modelo local por defecto, así que tu audio se queda en tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas de forma explícita, nunca la grabación.",
      },
      {
        q: "¿Acertará con los términos clínicos y los nombres de los clientes?",
        a:
          "Los términos y nombres comunes se transcriben bien; los nombres de medicamentos menos habituales, los diagnósticos o los nombres poco frecuentes a veces necesitan un retoque rápido. De todos modos deberías hacer una pasada de revisión: Voicetypr acelera la redacción, no elimina tu lectura final.",
      },
      {
        q: "¿Funciona en las apps en las que escribo?",
        a:
          "Sí. Pega en campos de texto normales: correo, Word, Google Docs, tu app de notas, formularios del navegador. Coloca el cursor donde quieras el texto, mantén pulsado el hotkey y habla. No hay nada que integrar por cada app.",
      },
      {
        q: "¿Mac y Windows? ¿Y puedo probarlo primero?",
        a:
          "Ambos: macOS (Apple Silicon e Intel) y Windows 10+. Es una compra única desde $39, no una suscripción, con una prueba gratis de 3 días que no necesita tarjeta, para que lo pruebes con tu propia voz y tus apps antes de comprar.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Despeja la pila de escritura <em>antes de fichar la salida.</em>",
      body: "Habla tus notas de evolución, resúmenes y correos de derivación en las apps en las que ya redactas, transcritos en tu propia máquina por defecto. Prueba Voicetypr gratis 3 días y luego paga una vez.",
    },
    keywords: [
      "dictado por voz para terapeutas",
      "software de dictado para terapeutas",
      "voz a texto para consejeros",
      "reconocimiento de voz para terapeutas",
      "dictado para consejeros",
      "dictado por voz para notas de evolución",
      "voicetypr terapeutas",
    ],
  },
  "academics": {
    slug: "academics",
    title: "Voicetypr para académicos — Dicta artículos, subvenciones y comentarios",
    ogTitle: "Voicetypr para académicos",
    description:
      "Dictado por voz para académicos. Dicta artículos de revista, propuestas de subvención, apuntes de clase y comentarios en Word, LaTeX, Google Docs y tu LMS.",
    navLabel: "Académicos",
    hubTeaser:
      "La escritura de docencia, publicación y administración se acumula. Habla artículos, borradores de subvención y comentarios en Word, LaTeX o tu LMS.",
    category: "profession",
    order: 18,
    hero: {
      eyebrow: "voicetypr para académicos",
      headline: "El artículo, la subvención, los comentarios. <em>Háblalo y edita al final.</em>",
      lede:
        "La vida del profesorado es un trabajo de escritura con una credencial de docente: revisiones de artículos, propuestas de subvención, apuntes de clase, comentarios de corrección y una bandeja de entrada que nunca se vacía. Voicetypr te deja decir el borrador a velocidad de habla, en lo que sea que escribas, y gastar tu energía en la edición en lugar de en las teclas.",
      metaStrip: ["artículos · subvenciones · comentarios", "transcripción local", "word · latex · docs · lms"],
    },
    pains: [
      {
        title: "Cada parte del trabajo termina en prosa.",
        body:
          "La docencia, la publicación y el servicio desembocan todos en escritura: apuntes de clase, artículos de revista, revisiones por pares, memorandos de comités, cartas y una bandeja de entrada permanente. La investigación es solo la mitad; redactarlo todo es la otra mitad, y nunca se despeja.",
      },
      {
        title: "Para el cuadragésimo trabajo, tus comentarios se reducen a una palabra.",
        body:
          "Los comentarios de verdad cuestan teclas de verdad. En algún punto de la pila de correcciones, \"este argumento necesita evidencia en la página tres\" se convierte en \"poco claro\", no porque dejaras de preocuparte, sino porque teclear cada nota no escala.",
      },
      {
        title: "El trabajo inédito no tiene por qué estar en la nube de otro.",
        body:
          "Los manuscritos en revisión, los objetivos de una subvención y las cartas de recomendación confidenciales son justo el material que no quieres enviar a un servidor por defecto. Un dictado que prioriza el modo sin conexión es el punto de partida más sensato.",
      },
    ],
    outcomes: [
      {
        marker: "habla",
        title: "Primeros borradores a velocidad de habla",
        body:
          "Di la introducción, los objetivos específicos o la réplica a los revisores como se lo explicarías a un colega, y luego edita la transcripción. Hablar es más rápido que teclear para la prosa larga, y esa diferencia se acumula a lo largo de un día cargado de escritura.",
        meta: "Resultado · productividad",
      },
      {
        marker: "cualquier",
        title: "Funciona donde la escritura académica ocurre de verdad",
        body:
          "Word, Overleaf y otros editores de LaTeX, Google Docs, la caja de comentarios del LMS, tu cliente de correo y formularios del navegador. Si tu cursor cae en el campo, puedes dictar en él, sin un plugin por cada app.",
        meta: "Resultado · alcance",
      },
      {
        marker: "0",
        title: "Audio que sale de tu máquina",
        body:
          "La transcripción se ejecuta en el dispositivo con un modelo local. Tu manuscrito sin revisar y la carta que escribes para un estudiante se quedan en tu ordenador, no en los registros de un proveedor.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "Artículos de revista y la respuesta a los revisores",
        body:
          "Habla la sección de discusión en párrafos y luego ajústala. Cuando llegue el \"revisar y reenviar\", dicta la respuesta punto por punto —esa parte en la que mantienes la cortesía mientras explicas por qué el revisor dos se equivoca— y edita el tono después.",
      },
      {
        title: "Propuestas de subvención y apuntes de clase",
        body:
          "Los objetivos específicos, los impactos más amplios y la narrativa del proyecto van más rápido cuando primero los dices y después les das forma. Lo mismo con el material del curso: habla la clase, la guía de lectura o los puntos de las diapositivas, y luego da formato a lo que dijiste.",
      },
      {
        title: "Comentarios de corrección, cartas y la bandeja de los estudiantes",
        body:
          "Pon el cursor en la caja de comentarios del LMS y di los comentarios que cada trabajo realmente merece. Dicta la carta de recomendación, la respuesta al tutorando nervioso, el correo a un colaborador a tres husos horarios de distancia, y sigue adelante.",
      },
    ],
    faqs: [
      {
        q: "¿Funciona en Overleaf y otros editores de LaTeX?",
        a:
          "Sí. Voicetypr pega en cualquier campo de texto que acepte entrada de teclado, y el editor de Overleaf es un área de texto normal en el navegador. Dicta la prosa; teclea las matemáticas y el marcado a mano, donde de todos modos es más rápido.",
      },
      {
        q: "¿Puede con las ecuaciones, las citas y los términos técnicos?",
        a:
          "Transcribe bien la prosa académica, pero cuenta con una pasada de limpieza para los símbolos, las claves de cita y los nombres poco frecuentes. El flujo de trabajo en el que la mayoría se asienta: voz para las frases, teclado para el LaTeX, el BibTeX y la notación.",
      },
      {
        q: "¿Son privados los manuscritos inéditos y las cartas de recomendación?",
        a:
          "Sí. La transcripción se ejecuta en tu máquina con un modelo local por defecto, así que el audio nunca sale de tu dispositivo. El formateo opcional con IA envía solo texto cuando lo activas, nunca la grabación.",
      },
      {
        q: "¿Puedo dictar los comentarios de corrección directamente en el LMS?",
        a:
          "Si la caja de comentarios acepta texto escrito —Canvas, Moodle, Blackboard, Google Classroom— puedes dictar en ella. Coloca el cursor, mantén pulsado el hotkey, di el comentario y suelta.",
      },
      {
        q: "¿Funciona en Mac y Windows?",
        a:
          "Sí: macOS (Apple Silicon e Intel) y Windows 10+. Hay una prueba gratis de 3 días sin tarjeta, y es una compra única desde $39, así que una sobrecarga temporal de escritura no se convierte en una factura recurrente.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Di el borrador. <em>Guarda tu energía para la edición.</em>",
      body: "Habla tus artículos, subvenciones y comentarios en Word, LaTeX o el LMS, transcritos en tu propia máquina. Gratis 3 días, sin tarjeta; paga una vez desde $39 si te convence.",
    },
    keywords: [
      "dictado por voz para académicos",
      "dictado por voz para profesores",
      "voz a texto para profesores",
      "reconocimiento de voz para académicos",
      "dictado para escritura académica",
      "software de dictado para docentes",
      "voicetypr académicos",
    ],
  },
  "motor-impairments": {
    slug: "motor-impairments",
    title: "Voicetypr para discapacidades motrices — Dictado por voz accesible en todas las apps",
    ogTitle: "Voicetypr para discapacidades motrices",
    description:
      "Dictado por voz accesible para personas con discapacidades motrices. Dicta en apps de Windows o Mac con transcripción local y pago único de por vida.",
    navLabel: "Discapacidades motrices",
    hubTeaser:
      "Entrada sin manos en cualquier campo de texto en Mac o Windows, con transcripción en el dispositivo y opción de licencia de por vida.",
    category: "accessibility",
    order: 5,
    hero: {
      eyebrow: "dictado por voz accesible",
      headline: "Escribir no debería decidir <em>cuánto puedes expresar.</em>",
      lede:
        "Para muchas personas que dependen de la entrada asistida, lo difícil no es tener algo que decir. Es lograr que las palabras pasen por el teclado con la frecuencia suficiente, durante el tiempo suficiente y con la menor fricción posible. Voicetypr convierte el habla en texto en las apps que ya usas, con transcripción local de forma predeterminada.",
      metaStrip: ["windows + mac", "transcripción local", "funciona en cualquier campo de texto"],
    },
    pains: [
      {
        title: "Las herramientas de accesibilidad suelen separar el control y la escritura.",
        body:
          "El control por voz te ayuda a moverte por el ordenador. El dictado te ayuda a crear texto. Voicetypr se centra en la parte de la escritura para que los correos, formularios, documentos, prompts y mensajes no dependan por completo del teclado.",
      },
      {
        title: "El dictado por app rompe el ritmo.",
        body:
          "Una herramienta que solo funciona en un editor no basta cuando tu día pasa por formularios, chat, correo, documentos y apps del navegador. El cursor debería ser la integración.",
      },
      {
        title: "Los pagos recurrentes hacen frágil al software asistivo.",
        body:
          "Si una herramienta se vuelve parte de cómo te comunicas, perderla porque una suscripción se renueva mal no es aceptable. El pago único de por vida hace más fácil conservar tu configuración.",
      },
    ],
    outcomes: [
      {
        marker: "cualquier",
        title: "Campo de texto",
        body:
          "Voicetypr pega en los campos de texto estándar de Windows y Mac. Sin un plugin especial por cada app.",
        meta: "Resultado · acceso",
      },
      {
        marker: "local",
        title: "Audio local",
        body:
          "Los mensajes privados, las solicitudes de adaptaciones, el contexto médico, los trabajos escolares y las solicitudes de empleo permanecen en tu equipo durante la transcripción.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "3 días",
        title: "Prueba sin tarjeta",
        body:
          "Prueba el atajo, tu micrófono, tus apps y tu flujo de trabajo antes de pagar.",
        meta: "Resultado · encaje",
      },
    ],
    workflows: [
      {
        title: "Formularios y solicitudes de empleo",
        body:
          "Los formularios web largos castigan la escritura lenta o dolorosa. Dicta la respuesta directamente en el campo y luego edita el texto final antes de enviarlo.",
      },
      {
        title: "Escritura para el estudio y el trabajo",
        body:
          "Usa la voz para párrafos, reflexiones, correos, informes y publicaciones en foros. Reserva el teclado para las correcciones en vez de hacerlo el camino principal para cada palabra.",
      },
      {
        title: "Comunicación diaria sin dejar cada palabra para después",
        body:
          "Los mensajes se acumulan cuando cada uno cuesta esfuerzo físico. La voz te permite responder mientras la idea está fresca, en vez de esperar a un día en que tus manos estén mejor.",
      },
    ],
    faqs: [
      {
        q: "¿Es Voicetypr una herramienta completa de control del ordenador?",
        a:
          "No. Es una herramienta de dictado. Windows Voice Access y Apple Voice Control son mejores para navegar por el ordenador con la voz. Voicetypr sirve para convertir el habla en texto dentro de las apps en las que escribes.",
      },
      {
        q: "¿Puedo probarlo antes de pagar?",
        a:
          "Sí. La prueba dura 3 días y no requiere tarjeta. Así tienes tiempo de probar tu micrófono, el atajo, tus apps y qué tan cómodo te resulta.",
      },
      {
        q: "¿Funciona con hardware de accesibilidad?",
        a:
          "Sí. Voicetypr solo necesita un micrófono y un atajo que pueda detectar. Funciona junto a teclados divididos, ratones verticales, teclados adaptados y otro hardware de entrada.",
      },
      {
        q: "¿Es compatible con usuarios de Windows?",
        a:
          "Sí. La compatibilidad con Windows es una parte central del producto, no un añadido. La app está pensada para los flujos de trabajo tanto de Windows como de macOS.",
      },
      {
        q: "¿Y si mi habla no es perfectamente clara?",
        a:
          "La transcripción en el dispositivo maneja bien muchos acentos, pausas y reinicios, pero ningún sistema de dictado es perfecto. Usa la prueba con tu voz y tu micrófono reales antes de comprar.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Dilo una vez. <em>Ponlo donde corresponde.</em>",
      body: "Pon el texto donde está tu cursor con un atajo, no buscando por los menús. Transcripción en el dispositivo de forma predeterminada; prueba gratis 3 días y luego paga una sola vez.",
    },
    keywords: [
      "dictado por voz accesible",
      "software de dictado para accesibilidad",
      "dictado por voz discapacidad motriz",
      "software de dictado asistivo",
      "dictado de accesibilidad en windows",
    ],
  },
  "parkinsons": {
    slug: "parkinsons",
    title: "Voicetypr para Parkinson — Deja que tu voz escriba por ti",
    ogTitle: "Voicetypr para Parkinson",
    description:
      "Dictado por voz para el Parkinson: cuando el temblor y la lentitud hacen que escribir sea lento y con errores, dicta en cualquier app. En tu equipo, pago único.",
    navLabel: "Parkinson",
    hubTeaser:
      "Cuando el temblor y la lentitud convierten escribir en una lucha, dicta correos, notas y respuestas en cualquier app, transcrito en el dispositivo.",
    category: "accessibility",
    order: 10,
    hero: {
      eyebrow: "voicetypr para parkinson",
      headline: "Escribir se volvió lento e inestable. <em>Mejor dilo hablando.</em>",
      lede:
        "El temblor y la lentitud convierten un correo corto en uno largo y lleno de errores: teclas que se saltan, teclas pulsadas dos veces, el cursor que cae en el lugar equivocado. Voicetypr te deja mantener pulsado un atajo, decir la frase y hacer que aparezca donde ya está tu cursor, transcrita en tu propio equipo.",
      metaStrip: ["menos pulsaciones", "transcripción local", "funciona en cualquier campo de texto"],
    },
    pains: [
      {
        title: "El temblor convierte una pulsación en tres.",
        body:
          "Las manos que tiemblan al buscar las teclas pulsan la equivocada, la pulsan dos veces o pelean con la misma palabra una y otra vez. Cuanto más largo es el mensaje, más parte de él es corrección.",
      },
      {
        title: "El movimiento lento y rígido convierte un párrafo en una odisea.",
        body:
          "Con la bradicinesia, los movimientos empiezan tarde y pierden velocidad y amplitud sobre la marcha. Una nota que antes tardaba un minuto ahora tarda varios, y tus manos están cansadas antes de terminar la última línea.",
      },
      {
        title: "Así que los mensajes más largos simplemente no se escriben.",
        body:
          "Cuando cada palabra cuesta esfuerzo, el correo detallado, la respuesta meditada o la actualización completa se acortan o se omiten. Las ideas están todas ahí; llevarlas a la pantalla es el cuello de botella.",
      },
    ],
    outcomes: [
      {
        marker: "1",
        title: "Un atajo en lugar de un teclado entero",
        body:
          "Pulsa el atajo, di la frase, suelta. La mayoría de las pulsaciones —y los fallos que las acompañan— desaparecen. Sigues editando, pero tus manos dejan de cargar con cada palabra.",
        meta: "Resultado · esfuerzo manual",
      },
      {
        marker: "cualquier",
        title: "App, cualquier campo de texto",
        body:
          "Gmail, Outlook, Word, Slack, Notas, un formulario del navegador. Si tu cursor parpadea ahí, Voicetypr pega ahí. Sin un plugin que instalar por cada app.",
        meta: "Resultado · alcance",
      },
      {
        marker: "una vez",
        title: "Paga una vez, no una cuota mensual",
        body:
          "Una licencia de por vida desde $39, no una suscripción. Una herramienta en la que te apoyas para escribir a diario no debería desaparecer porque se te pasó un correo de renovación.",
        meta: "Resultado · permanencia",
      },
    ],
    workflows: [
      {
        title: "Correos y respuestas sin el bucle de correcciones",
        body:
          "Abre la respuesta, mantén pulsado el atajo, di lo que quieres decir, suelta. Sin perseguir el cursor para corregir una letra duplicada. Una mañana de correos se resuelve en el tiempo que el teclado habría tardado en unos pocos.",
      },
      {
        title: "Formularios y gestión de citas",
        body:
          "Portales de farmacia, formularios de seguros, solicitudes de cita: los formularios web que castigan la escritura lenta e inestable. Dicta la respuesta directamente en el campo, luego léela una vez y edítala antes de enviar.",
      },
      {
        title: "La escritura más larga que de otro modo te saltarías",
        body:
          "La actualización detallada para la familia, el documento de trabajo, la entrada del diario. Dilo hablando en párrafos y usa el teclado solo para pequeños arreglos. Cuánto escribes deja de depender de cuánto aguanten tus manos.",
      },
    ],
    faqs: [
      {
        q: "El Parkinson ha cambiado un poco mi voz, ¿me seguirá entendiendo?",
        a:
          "Quizás, y la respuesta honesta es que depende de tu voz. Cuanto más clara sea tu habla, más preciso será cualquier dictado, y algunas personas con Parkinson notan que su voz se vuelve más suave o menos nítida con el tiempo. La forma de saber cómo funciona con tu voz es probarlo: la prueba de 3 días no necesita tarjeta, así que puedes probarla primero con tu propio micrófono. El modelo mediano en el dispositivo es el predeterminado; el modelo grande es más preciso si quieres sacrificar un poco de velocidad por ello.",
      },
      {
        q: "¿Tengo que mantener pulsada la tecla todo el tiempo? Mis manos no son firmes.",
        a:
          "Por defecto es mantener pulsado para hablar, pero puedes configurar el atajo que te resulte más fácil de alcanzar y usar ráfagas cortas en vez de pulsaciones largas. La función push-to-talk está en Option/Alt+Space. Si una combinación es difícil de pulsar de forma fiable, elige un atajo personalizado más sencillo en los ajustes.",
      },
      {
        q: "¿Se envía mi voz a la nube?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local de forma predeterminada, así que tu audio permanece en tu dispositivo, algo que importa cuando dictas mensajes médicos o notas privadas. El formato con IA opcional envía solo texto cuando lo activas, nunca el audio.",
      },
      {
        q: "¿Hace algo por el Parkinson en sí?",
        a:
          "No. Voicetypr es software de escritura, no un dispositivo ni un tratamiento médico, y no afirma influir en la afección ni en sus síntomas. Lo único que hace es quitarles el teclado a tus manos al permitirte dictar el texto. Sigue las indicaciones de tu médico para cualquier cosa de índole médica.",
      },
      {
        q: "¿Funciona en mi ordenador y en las apps que uso?",
        a:
          "Funciona en macOS (Apple Silicon e Intel) y Windows 10+, y pega en cualquier campo de texto normal: correo, Word, formularios del navegador, Slack, Notas. No hay nada que integrar; configuras un atajo, lo mantienes pulsado, hablas y sueltas.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Deja descansar el teclado. <em>Mejor dilo hablando.</em>",
      body: "Mantén pulsado el atajo, di la frase y pégala donde ya está tu cursor, transcrita en tu propio equipo. Prueba Voicetypr gratis 3 días, sin tarjeta.",
    },
    keywords: [
      "dictado por voz para parkinson",
      "software de dictado para parkinson",
      "voz a texto parkinson",
      "dictado por voz con temblor de parkinson",
      "escribir con temblor de parkinson",
      "voicetypr parkinson",
    ],
  },
  "essential-tremor": {
    slug: "essential-tremor",
    title: "Voicetypr para el temblor esencial — Escribe sin pelear con las teclas",
    ogTitle: "Voicetypr para el temblor esencial",
    description:
      "Dictado por voz para el temblor esencial y de manos. Olvídate de teclas equivocadas y de borrar sin parar: habla y aparece texto limpio en cualquier app.",
    navLabel: "Temblor esencial",
    hubTeaser:
      "Las manos temblorosas convierten cada pulsación en una pelea: di la frase y deja que aparezca texto limpio en la app que tenga tu cursor.",
    category: "accessibility",
    order: 11,
    hero: {
      eyebrow: "voicetypr para el temblor esencial",
      headline: "Tus manos tiemblan. <em>Tus palabras no tienen por qué.</em>",
      lede:
        "Cuando un temblor convierte las pulsaciones precisas en un juego de adivinanzas de letras equivocadas y borrados, la voz rodea por completo la parte de motricidad fina. Mantén pulsado un atajo, di la frase y Voicetypr la escribe donde ya está tu cursor, transcrita en tu propio equipo.",
      metaStrip: ["un atajo y a hablar", "transcripción local", "funciona en cualquier app"],
    },
    pains: [
      {
        title: "Las teclas que pulsas no son las que querías.",
        body:
          "Un temblor desvía tu dedo una tecla más allá, así que un mensaje rápido se convierte en un bucle de escribir, borrar y reescribir la misma línea. Cuanto más largo es el texto, más se acumulan los fallos.",
      },
      {
        title: "Mantener la precisión exige una concentración que preferirías dedicar al trabajo.",
        body:
          "Apuntar cada dedo para evitar errores es un esfuerzo en sí mismo. Al final de un correo o documento largo, la concentración que costó escribir sin errores cansa más que las ideas que hay detrás.",
      },
      {
        title: "Los objetivos pequeños se resisten, tanto las teclas como el cursor.",
        body:
          "Colocar el puntero sobre un botón pequeño puede llevar tres o cuatro intentos, y el teclado exige el mismo control fino que ya te falta. Cada clic y cada pulsación precisos son una pequeña negociación.",
      },
    ],
    outcomes: [
      {
        marker: "1 tecla",
        title: "Actívalo sin puntería fina",
        body:
          "Pulsa el atajo, mantén push-to-talk y habla. Iniciar el dictado no exige la precisión milimétrica que requiere acertar las teclas correctas.",
        meta: "Resultado · entrada",
      },
      {
        marker: "cualquier",
        title: "App, cualquier campo de texto",
        body:
          "Correo, Docs, Slack, formularios del navegador, tus notas: Voicetypr pega en el campo que tenga tu cursor. Sin clics precisos para pasar de un editor a otro.",
        meta: "Resultado · alcance",
      },
      {
        marker: "local",
        title: "El audio se queda en tu equipo",
        body:
          "Tu voz se transcribe en tu propio dispositivo de forma predeterminada. Las notas privadas, el contexto médico y la escritura del trabajo se quedan contigo. El formato con IA opcional envía solo texto, nunca la grabación.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "Vacía la bandeja sin el bucle de borrar",
        body:
          "Abre la respuesta, mantén pulsado el atajo, di lo que quieres decir, suelta. La línea aparece como texto limpio en vez del ritmo de letra-equivocada-y-borrar. Una mañana de correos deja de depender de unos dedos firmes.",
      },
      {
        title: "Documentos largos sin agotar la concentración",
        body:
          "Dicta el borrador en párrafos y deja el teclado en reposo. La energía que gastarías apuntando cada pulsación va a lo que realmente quieres decir. Haz los retoques ligeros al final, cuando bastan unas pocas teclas precisas.",
      },
      {
        title: "Formularios, chat y prompts de IA que de otro modo teclearías a duras penas",
        body:
          "Los formularios web y los cuadros de prompt castigan la escritura imprecisa. Coloca el cursor una vez, dicta la respuesta y olvídate de la precisión tecla a tecla. Push-to-talk en Option/Alt+Space mantiene el disparador sencillo.",
      },
    ],
    faqs: [
      {
        q: "¿Necesito manos firmes para activarlo?",
        a:
          "No. El atajo es una sola combinación (⌘+Shift+Space en macOS, Ctrl+Shift+Space en Windows), y push-to-talk está en Option/Alt+Space. Iniciar el dictado no necesita la precisión milimétrica que sí requiere acertar las letras. Si una combinación te resulta incómoda, configura una más fácil.",
      },
      {
        q: "¿Funciona en todas las apps o solo en un editor?",
        a:
          "Cualquier app con un campo de texto que acepte entrada de teclado. Coloca el cursor donde quieras las palabras —correo, Docs, Slack, un formulario web—, mantén pulsado el atajo y habla. No hay ningún plugin por app que configurar.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local de forma predeterminada, así que tu audio permanece en tu dispositivo. El formato con IA opcional envía solo texto cuando lo activas, nunca la grabación.",
      },
      {
        q: "¿Esto ayudará con mi temblor?",
        a:
          "Voicetypr no es software médico y no trata ni modifica un temblor. Es una alternativa de entrada: una forma de introducir texto hablando en lugar de con control fino de los dedos, para que escribir deje de ser el cuello de botella. Para cualquier cosa sobre el temblor en sí, consulta a un médico.",
      },
      {
        q: "¿Puedo probarlo primero con mi propia voz y mi configuración?",
        a:
          "Sí: hay una prueba gratuita de 3 días sin tarjeta, en macOS (Apple Silicon e Intel) y Windows 10+. Prueba tu micrófono, el atajo y tus apps antes de decidir. Si te convence, es una compra única, no una suscripción.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Olvídate de la pelea con el teclado. <em>Mejor dilo hablando.</em>",
      body: "Cuando un temblor hace agotador escribir con precisión, dicta en local y pega texto limpio en cualquier app. Prueba Voicetypr gratis 3 días; paga una vez si se gana su lugar.",
    },
    keywords: [
      "dictado por voz para el temblor esencial",
      "software de dictado para el temblor esencial",
      "voz a texto temblor esencial",
      "voz a texto temblores de manos",
      "dictado para temblores de manos",
      "escribir con temblores de manos",
      "voicetypr temblor esencial",
    ],
  },
  "one-handed-typing": {
    slug: "one-handed-typing",
    title: "Voicetypr para escribir con una mano — Habla, no busques tecla por tecla",
    ogTitle: "Voicetypr para escribir con una mano",
    description:
      "Dictado por voz para quienes escriben con una mano, permanente o puntual. Olvídate de buscar tecla por tecla: habla y pega texto limpio en cualquier app.",
    navLabel: "Escribir con una mano",
    hubTeaser:
      "¿Una mano en el teclado, por una diferencia de extremidades o porque la otra sostiene a un bebé? Dicta las palabras; reserva tu mano para los retoques.",
    category: "accessibility",
    order: 15,
    hero: {
      eyebrow: "voicetypr para escribir con una mano",
      headline: "Una mano en las teclas. <em>Deja que la voz escriba.</em>",
      lede:
        "Tanto si siempre has escrito con una mano como si ahora mismo tienes el otro brazo ocupado, buscar tecla por tecla es lento y los desplazamientos de un lado a otro del teclado se acumulan. Mantén pulsado un atajo, di la frase y Voicetypr la escribe por ti: tu mano queda libre para editar y navegar, transcrita en tu propio equipo.",
      metaStrip: ["activación con una mano", "transcripción local", "funciona en cualquier app"],
    },
    pains: [
      {
        title: "Buscar tecla por tecla es lento, y el QWERTY no ayuda.",
        body:
          "El teclado se diseñó para dos manos. Escribe con una y las letras frecuentes quedan repartidas por todo el teclado, así que cada palabra es una serie de desplazamientos. Una respuesta rápida está bien; una bandeja de entrada o un documento largo se vuelve una pesadez.",
      },
      {
        title: "Cada atajo da por hecho que tienes dos manos.",
        body:
          "Las mayúsculas, copiar y pegar, las combinaciones de modificador más tecla en las que te apoyas: quieren una mano que mantenga y otra que pulse. Sticky Keys ayuda, pero sigues persiguiendo las letras de una en una.",
      },
      {
        title: "A veces la otra mano simplemente está ocupada.",
        body:
          "Un bebé dormido en tu brazo. La mano agarrada a una muleta o a un pasamanos. Algo que llevas y que aún no puedes soltar. Al teclado no le importa por qué falta la segunda mano: la sigue necesitando.",
      },
    ],
    outcomes: [
      {
        marker: "1 mano",
        title: "Actívalo y habla con la mano que tienes",
        body:
          "Pulsa el atajo con una mano —o usa push-to-talk— y luego habla. Iniciar un dictado nunca depende de una segunda mano.",
        meta: "Resultado · una mano",
      },
      {
        marker: "cualquier app",
        title: "Aparece donde ya está tu cursor",
        body:
          "Correo, Docs, Slack, un formulario del navegador, tu editor: Voicetypr pega en el campo que tenga el foco. Sin configuración por app, sin una ventana aparte que manejar con una sola mano.",
        meta: "Resultado · en todas partes",
      },
      {
        marker: "editar",
        title: "Reserva tu mano para las partes precisas",
        body:
          "La voz produce las palabras; tu mano hace lo que se le da bien: colocar el cursor, arreglar una línea, pulsar un atajo. El volumen sale del teclado, la precisión se queda.",
        meta: "Resultado · tu mano",
      },
    ],
    workflows: [
      {
        title: "Vacía la bandeja sin teclear letra por letra",
        body:
          "Abre la respuesta, mantén pulsado el atajo, di lo que quieres decir, suelta. El texto aparece en el mensaje. Una mañana de correos lleva minutos en vez de la pesadez en que la convierte escribir con una mano.",
      },
      {
        title: "Redacta el documento largo, edita con tu mano",
        body:
          "Coloca el cursor en el documento y dilo hablando en párrafos. Luego usa tu mano para los retoques: la parte en la que una sola mano sí es rápida. Producir las palabras deja de depender de alcanzar cada tecla.",
      },
      {
        title: "Escribe mientras la otra mano está ocupada",
        body:
          "Con un bebé en brazos, con muletas, un brazo en cabestrillo: push-to-talk en Option/Alt+Space lo reduce a una sola tecla. Responde el mensaje o anota lo que sea sin soltar lo que estás sosteniendo.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo activarlo con una sola mano?",
        a:
          "Sí. El atajo es una sola combinación que puedes pulsar con una mano (⌘+Shift+Space en macOS, Ctrl+Shift+Space en Windows), y push-to-talk está en Option/Alt+Space. Nunca necesitas una segunda mano para empezar a hablar.",
      },
      {
        q: "Escribo con una mano todo el tiempo, no por una lesión, ¿esto también es para mí?",
        a:
          "Sí. Diferencia de extremidades, amputación, hemiplejía o una mano que simplemente siempre está ocupada: el flujo de trabajo es el mismo. La voz se encarga del grueso de las palabras; tu mano queda libre para editar y navegar. No está ligado a recuperarse de nada.",
      },
      {
        q: "¿Puedo seguir usando mi teclado y Sticky Keys?",
        a:
          "Sí. La voz y el teclado conviven. Dicta los tramos largos y luego usa tu mano —Sticky Keys, atajos, teclas de flecha, lo que tengas configurado— para las correcciones y para mover el cursor. Nada en Voicetypr desactiva tu configuración actual.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu equipo con un modelo local de forma predeterminada, así que tu audio permanece en tu dispositivo. El formato con IA opcional envía solo texto cuando lo activas, nunca el audio.",
      },
      {
        q: "¿Funciona tanto en Mac como en Windows?",
        a:
          "Sí: macOS (Apple Silicon e Intel) y Windows 10+. Hay una prueba gratuita de 3 días sin tarjeta, así que puedes confirmar que la activación con una mano y tu micrófono funcionan antes de comprar.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Mantén una mano libre. <em>Di el resto.</em>",
      body: "Actívalo con la mano que tienes, di la frase y pégala donde ya está tu cursor, en el dispositivo de forma predeterminada. Prueba Voicetypr gratis 3 días.",
    },
    keywords: [
      "dictado por voz con una mano",
      "alternativa para escribir con una mano",
      "software de dictado con una mano",
      "voz a texto con una mano",
      "texto por voz con una mano",
      "escribir con una sola mano",
      "voicetypr una mano",
    ],
  },
  "dysgraphia": {
    slug: "dysgraphia",
    title: "Voicetypr para la disgrafía — Supera la barrera de escribir hablando",
    ogTitle: "Voicetypr para la disgrafía",
    description:
      "Dictado por voz para la disgrafía. Lleva tus ideas a la página sin formar letras ni pelear con el teclado. Transcripción local, pago único, en cualquier app.",
    navLabel: "Disgrafía",
    hubTeaser:
      "Saber qué decir no es el problema; llevarlo a la página, sí. Di las palabras y deja que la transcripción se encargue de escribir.",
    category: "accessibility",
    order: 13,
    hero: {
      eyebrow: "voicetypr para la disgrafía",
      headline: "Sabes qué decir. <em>Escribirlo es lo difícil.</em>",
      lede:
        "Con disgrafía, las ideas suelen estar claras. Lo que se atasca es el acto mecánico de escribirlas a mano o teclearlas, letra por letra. Voicetypr te deja decir la frase y obtener texto limpio allí donde esté tu cursor, para que las palabras lleguen a la página sin pasar antes por tu mano.",
      metaStrip: ["dilo y sáltate la escritura", "transcripción local", "se pega en cualquier app"],
    },
    pains: [
      {
        title: "Puedes explicarlo en voz alta en un minuto. Escribirlo te lleva una hora.",
        body:
          "Le dices la idea a alguien y queda clara. Te sientas a escribirla y cada palabra exige un esfuerzo deliberado—tanto que apenas queda atención para la idea que quieres transmitir. Pensar y escribir terminan compitiendo por la misma concentración.",
      },
      {
        title: "El teclado no es la solución que la gente supone.",
        body:
          "Pasar del bolígrafo a las teclas quita parte del problema: el espaciado se resuelve solo, la forma de las letras deja de importar. Pero para muchas personas producir cada palabra a mano sigue siendo lento y agotador. El cuello de botella nunca fue el bolígrafo: es convertir el pensamiento en movimiento, sin más.",
      },
      {
        title: "Así que lo que llega a la página es más corto que lo que tienes en la cabeza.",
        body:
          "Cuando cada párrafo cuesta tanto, recortas sin querer. La respuesta detallada se queda en una línea. El trabajo sobre el que tienes mucho que decir se reduce a lo mínimo. No se te acaban las ideas; se te acaba la paciencia para producirlas.",
      },
    ],
    outcomes: [
      {
        marker: "0",
        title: "Letras que tienes que formar",
        body:
          "Dices la frase; el modelo la escribe. Formar cada letra, el espaciado, la parte motora lenta de producir palabras—ya nada de eso se interpone entre el pensamiento y el texto.",
        meta: "Resultado · producción",
      },
      {
        marker: "cualquier",
        title: "Cualquier app, cualquier campo de texto",
        body:
          "Google Docs, Word, el portal del colegio, el correo, Notion, un formulario web. Si tu cursor cae en él, tu voz puede rellenarlo—sin plugin que instalar por cada app.",
        meta: "Resultado · alcance",
      },
      {
        marker: "local",
        title: "Transcrito en tu dispositivo",
        body:
          "Trabajos del colegio, notas privadas, solicitudes de empleo—tu voz se convierte en texto en tu propia máquina de forma predeterminada. El formato con IA opcional envía solo texto si lo activas, nunca el audio.",
        meta: "Resultado · privacidad",
      },
    ],
    workflows: [
      {
        title: "El trabajo del que puedes hablar pero te da pavor escribir",
        body:
          "Abre el documento, mantén pulsado el atajo y di lo que dirías si alguien te preguntara por el tema. Obtienes párrafos que editar en lugar de una página en blanco que temer. La nota depende de las ideas, no de si tu letra se mantuvo sobre el renglón.",
      },
      {
        title: "Correos, formularios y respuestas sin el peaje de teclear",
        body:
          "Coloca el cursor en el campo, di la respuesta, edita una vez y envía. Las solicitudes de empleo, los formularios web y las respuestas largas dejan de ser un muro de pulsaciones entre tú y terminar.",
      },
      {
        title: "Notas que no compiten con tu atención",
        body:
          "Escribir y pensar tiran de la misma concentración, así que las notas durante una clase o reunión se resienten. Dilas en su lugar—tu atención sigue en lo que se está diciendo mientras las palabras llegan a tu app de notas.",
      },
    ],
    faqs: [
      {
        q: "¿Es lo mismo que una herramienta para la dislexia?",
        a:
          "Son problemas distintos. Las herramientas centradas en la lectura ayudan cuando descifrar el texto es lo difícil. Voicetypr ayuda en el sentido contrario—cuando sabes qué quieres decir pero producir las palabras escritas es la barrera. Convierte el habla en texto para que la página deje de depender de tu mano.",
      },
      {
        q: "¿Cura o trata la disgrafía?",
        a:
          "No. Voicetypr no es terapia ni tratamiento, y no va a cambiar cómo funciona la escritura para ti. Es una herramienta de escritura: una forma de producir texto hablando, para que el esfuerzo motor y de transcripción deje de interponerse entre tus ideas y la página.",
      },
      {
        q: "¿Deletrea y escribe las palabras por mí?",
        a:
          "Sí—tú hablas y el modelo en el dispositivo escribe las palabras, así que recordar la ortografía exacta y formar cada letra deja de ser parte del trabajo. Los nombres poco habituales o los términos especializados a veces necesitan una corrección rápida, pero el vocabulario cotidiano sale bien.",
      },
      {
        q: "¿Funciona en Google Docs y para los trabajos del colegio?",
        a:
          "Sí. Voicetypr se pega en cualquier campo de texto que acepte entrada de teclado—Google Docs, Word, el portal del colegio, el correo, Notion. Coloca el cursor donde va el texto, mantén pulsado el atajo (⌘+Shift+Space en macOS, Ctrl+Shift+Space en Windows) y habla.",
      },
      {
        q: "¿Se envía mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu máquina con un modelo local de forma predeterminada, así que tu audio se queda en tu dispositivo. El formato con IA opcional envía solo texto cuando lo activas, nunca la grabación. Hay una prueba gratis de 3 días sin tarjeta para probarlo primero en tus apps reales.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Llévalo a la página <em>sin escribirlo.</em>",
      body: "Di la frase y obtén texto limpio allí donde esté tu cursor—transcripción local de forma predeterminada. Prueba Voicetypr gratis 3 días, sin tarjeta.",
    },
    keywords: [
      "dictado por voz para disgrafía",
      "software de dictado para disgrafía",
      "voz a texto para disgrafía",
      "pasar de voz a texto con disgrafía",
      "ayuda para escribir con disgrafía",
      "voicetypr disgrafía",
    ],
  },
  "hand-surgery-recovery": {
    slug: "hand-surgery-recovery",
    title: "Voicetypr para la recuperación de cirugía de mano — Sigue trabajando mientras te recuperas",
    ogTitle: "Voicetypr para la recuperación de cirugía de mano",
    description:
      "Dictado por voz tras una cirugía de mano: mantén correos, documentos y mensajes en marcha mientras no puedes teclear. Local, cualquier app, pago único.",
    navLabel: "Recuperación de cirugía de mano",
    hubTeaser:
      "¿Te han dicho que descanses la mano durante semanas? Dicta tus correos, documentos y respuestas en cualquier app—transcrito en tu propia máquina.",
    category: "accessibility",
    order: 7,
    hero: {
      eyebrow: "voicetypr para la recuperación de cirugía de mano",
      headline: "Tu cirujano dijo que no teclees. <em>Tu bandeja de entrada, no.</em>",
      lede:
        "Una liberación del túnel carpiano, la reparación de un tendón, una fractura fijada con clavos—cada una viene con la misma indicación: descansa la mano. Pero el informe sigue pendiente y la bandeja de entrada no para de llenarse. Mantén pulsado un atajo, di la frase y Voicetypr la escribe en la app en la que ya estás, transcrita en tu propia máquina.",
      metaStrip: ["entrada sin teclado", "transcripción local", "funciona en todas las apps"],
    },
    pains: [
      {
        title: "Tu cirujano dijo que descanses la mano. El trabajo no se enteró.",
        body:
          "Las operaciones de túnel carpiano, tendones y fracturas vienen con semanas de teclear restringido—y usar la mano demasiado pronto puede forzar la reparación y retrasar la curación. Los plazos no se mueven para adaptarse a tu recuperación.",
      },
      {
        title: "Esto no es un problema de dos días.",
        body:
          "Las férulas suelen llevarse varias semanas, y puede que no te autoricen a teclear suavemente hasta alrededor de la sexta semana, con la fuerza completa todavía más tarde. Los estudios y el trabajo no se detienen durante toda esa ventana, así que necesitas una forma de seguir produciendo palabras todo ese tiempo.",
      },
      {
        title: "Cada apaño acaba metiendo la mano de nuevo.",
        body:
          "Picotear con la otra mano es lento, y al final acabas apoyándote en la que se está curando de todos modos. El dictado del móvil vive en el móvil, lejos del trabajo. Las herramientas del navegador te encierran en su propio editor. Ninguna mantiene la mano operada totalmente lejos del teclado.",
      },
    ],
    outcomes: [
      {
        marker: "0",
        title: "Pulsaciones con la mano en recuperación",
        body:
          "Actívalo con la otra mano o con pulsar-para-hablar, y luego habla. La mano operada nunca tiene que llegar al teclado para dejar un párrafo escrito.",
        meta: "Resultado · sin teclado",
      },
      {
        marker: "cualquier app",
        title: "Escribe donde ya estabas trabajando",
        body:
          "Correo, Docs, Slack, tu IDE, un formulario web—Voicetypr se pega en el campo que tenga tu cursor. Sin ninguna herramienta nueva que aprender en plena recuperación.",
        meta: "Resultado · en todas partes",
      },
      {
        marker: "una vez",
        title: "Paga una vez, consérvalo cuando te den el alta",
        body:
          "Una licencia de por vida, no un alquiler para una ventana de recuperación. Cuando la férula desaparece, mucha gente sigue dictando igualmente.",
        meta: "Resultado · sin suscripción",
      },
    ],
    workflows: [
      {
        title: "Mantén la bandeja de entrada en marcha con la férula puesta",
        body:
          "Abre la respuesta, activa el atajo, di lo que quieres decir y suelta. El mensaje llega. Despeja una mañana de correos sin que la mano operada toque el teclado ni una vez.",
      },
      {
        title: "Mantén el informe o los trabajos del curso al día",
        body:
          "Coloca el cursor en el documento y dicta el borrador en párrafos. Haz las correcciones ligeras cuando te las autoricen. Producir las palabras deja de esperar a que la mano se cure.",
      },
      {
        title: "Reuniones diarias, tickets y prompts con poco uso de las manos",
        body:
          "Actualizaciones en Slack, tickets de Jira, prompts de IA—dilos en lugar de teclearlos. Pulsar-para-hablar en Option/Alt+Space reduce el disparador a una sola tecla que tu mano sana puede alcanzar.",
      },
    ],
    faqs: [
      {
        q: "Mi cirujano me dijo que mantenga la mano quieta—¿puedo usar esto sin ella?",
        a:
          "Sí. Activa el atajo con la otra mano, o usa pulsar-para-hablar en Option/Alt+Space, y luego habla. La mano operada nunca tiene que tocar el teclado. Sigue siempre las indicaciones de tu cirujano sobre lo que tu mano tiene permitido hacer.",
      },
      {
        q: "¿Esto ayudará a que mi mano se cure?",
        a:
          "No. Voicetypr es software de productividad, no un tratamiento médico—no cura nada y no sustituye a tu plan de recuperación. Lo que hace es reducir la carga de teclear para que puedas seguir trabajando mientras teclear está restringido. En lo médico, sigue a tu cirujano y a tu terapeuta de mano.",
      },
      {
        q: "¿Se sube mi voz a algún sitio?",
        a:
          "No. La transcripción se ejecuta en tu máquina con un modelo local de forma predeterminada, así que tu audio se queda en tu dispositivo. El formato con IA opcional envía solo texto cuando lo activas, nunca el audio.",
      },
      {
        q: "Es solo para unas semanas—¿tengo que suscribirme?",
        a:
          "No. Voicetypr es una compra única, no una suscripción, así que una ventana de recuperación temporal no te apunta a un cobro recurrente. También hay una prueba gratis de 3 días sin tarjeta.",
      },
      {
        q: "¿Funciona tanto en Mac como en Windows?",
        a:
          "Sí—macOS (Apple Silicon e Intel) y Windows 10+. Puedes confirmar que encaja con tu micrófono y tus apps durante la prueba gratuita antes de comprar.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Descansa la mano. <em>Mantén el trabajo en marcha.</em>",
      body: "Actívalo con tu mano sana, di la frase y pégala donde ya estabas trabajando—en el dispositivo de forma predeterminada. Prueba Voicetypr gratis 3 días.",
    },
    keywords: [
      "dictado por voz tras cirugía de mano",
      "cómo escribir tras una cirugía de mano",
      "software de dictado para recuperación de cirugía de mano",
      "voz a texto tras cirugía de mano",
      "de voz a texto tras cirugía de mano",
      "dictado de voz tras cirugía de mano",
      "voicetypr recuperación de cirugía de mano",
    ],
  },
  "blind": {
    slug: "blind",
    title: "Voicetypr para usuarios ciegos — Dictado por voz con tu lector de pantalla",
    ogTitle: "Voicetypr para usuarios ciegos",
    description:
      "Dictado por voz para usuarios ciegos y con baja visión. Escribe más rápido hablando y revísalo con tu lector de pantalla. Transcripción local, pago único.",
    navLabel: "Ciegos y baja visión",
    hubTeaser:
      "Dicta texto en cualquier campo y luego revísalo con tu lector de pantalla—una entrada más rápida que se combina con VoiceOver, NVDA o JAWS.",
    category: "accessibility",
    order: 14,
    hero: {
      eyebrow: "voicetypr para usuarios ciegos",
      headline: "Redactarlo palabra por palabra es lento. <em>Dilo en su lugar.</em>",
      lede:
        "Tu lector de pantalla se encarga de la salida. Introducir un mensaje largo sigue siendo la parte lenta—palabra por palabra, confirmando cada una de oído. Voicetypr te deja dictar el texto en cualquier campo y luego revisarlo y editarlo con VoiceOver, NVDA o JAWS como ya lo haces.",
      metaStrip: ["funciona con tu lector de pantalla", "transcripción local", "se pega en cualquier campo"],
    },
    pains: [
      {
        title: "Leer es rápido. Escribirlo no.",
        body:
          "Un lector de pantalla te lleva por una página rápidamente. Redactar una respuesta va en sentido contrario—cada palabra introducida y luego confirmada de oído. Para un correo o mensaje largo, eso se acumula.",
      },
      {
        title: "La mayoría de los dictados envían tu audio a un servidor.",
        body:
          "Dictas mensajes personales, a veces con gente cerca. Las herramientas en la nube transmiten ese audio fuera de tu máquina. Voicetypr transcribe en el dispositivo de forma predeterminada, así que tu voz se queda contigo.",
      },
      {
        title: "La entrada por voz solo ayuda si puedes comprobarla tú mismo.",
        body:
          "El reconocimiento de voz aún se equivoca—nombres, homófonos, alguna palabra que se pierde. Eso no es problema cuando el texto cae en un campo normal que tu lector de pantalla puede leerte para que lo corrijas. Sí lo es cuando una herramienta atrapa el texto en su propia ventana.",
      },
    ],
    outcomes: [
      {
        marker: "hablado",
        title: "Entrada de texto a la velocidad del habla",
        body:
          "Mantén pulsado el atajo, di la frase, suelta. Un párrafo entra a la velocidad a la que hablas en lugar de palabra por palabra—y luego lo revisas con tu lector.",
        meta: "Resultado · entrada",
      },
      {
        marker: "local",
        title: "El audio se queda en tu máquina",
        body:
          "La transcripción se ejecuta en el dispositivo de forma predeterminada. Los mensajes privados y los datos personales no se transmiten a un servidor de transcripción.",
        meta: "Resultado · privacidad",
      },
      {
        marker: "cualquier",
        title: "Se pega en cualquier campo de texto",
        body:
          "Correo, chat, cuadros de búsqueda, documentos, formularios. El texto llega como si lo hubieras tecleado, así que cualquier lector de pantalla que uses te lo lee al instante.",
        meta: "Resultado · alcance",
      },
    ],
    workflows: [
      {
        title: "Redacta un mensaje largo y luego revísalo a tu manera",
        body:
          "Navega hasta el campo con tu lector de pantalla como siempre, mantén pulsado el atajo, di el mensaje y suelta. Se pega. Recórrelo con las flechas usando VoiceOver o NVDA, corrige lo que el reconocedor no acertó y envía.",
      },
      {
        title: "Formularios, barras de búsqueda y campos de dirección",
        body:
          "Las cadenas cortas son tediosas de introducir y confirmar carácter a carácter. Di la consulta o el valor del campo en su lugar; tu lector de pantalla anuncia el resultado para que sepas que llegó.",
      },
      {
        title: "Notas, chat y documentos donde las palabras se acumulan",
        body:
          "Respuestas en Slack, notas rápidas, un párrafo en un documento—dilos en lugar de introducirlos a mano. Pulsar-para-hablar está en Option/Alt+Space, una tecla que puedes pulsar sin buscar un botón.",
      },
    ],
    faqs: [
      {
        q: "¿Voicetypr reemplaza a mi lector de pantalla?",
        a:
          "No. Solo se encarga de la entrada—meter palabras en un campo. Tu lector de pantalla sigue haciendo la navegación y te lee todo, incluido el texto que acabas de dictar. Funcionan en paralelo.",
      },
      {
        q: "¿Puedo revisar y corregir lo que transcribió?",
        a:
          "Sí. El texto se pega en el campo como si lo hubieras tecleado, así que tu lector de pantalla te lo lee y lo editas de la forma habitual. El reconocimiento de voz no es perfecto; revisarlo con tu lector forma parte del flujo de trabajo.",
      },
      {
        q: "¿Funciona con VoiceOver, NVDA y JAWS?",
        a:
          "Sí. Voicetypr se pega en cualquier campo de texto estándar, así que lo que lea ese campo lee el texto dictado—VoiceOver en macOS, NVDA o JAWS en Windows 10+.",
      },
      {
        q: "¿Se envía mi voz a la nube?",
        a:
          "No. La transcripción se ejecuta en tu máquina con un modelo local de forma predeterminada, así que tu audio se queda en tu dispositivo. El formato con IA opcional envía solo texto cuando lo activas—nunca el audio.",
      },
      {
        q: "¿Puedo iniciarlo sin encontrar un botón en pantalla?",
        a:
          "Sí. Es un atajo global—⌘+Shift+Space en macOS, Ctrl+Shift+Space en Windows—más pulsar-para-hablar en Option/Alt+Space. Lo activas desde el teclado, en cualquier lugar, sin localizar un control en pantalla.",
      },
    ],
    finalCta: {
      eyebrow: "tres días, sin tarjeta",
      headline: "Di las palabras. <em>Revísalas a tu manera.</em>",
      body: "Dicta texto en cualquier campo y luego compruébalo y corrígelo con el lector de pantalla que ya usas—el audio se queda en tu máquina de forma predeterminada. Prueba Voicetypr gratis 3 días.",
    },
    keywords: [
      "dictado por voz para usuarios ciegos",
      "dictado para usuarios de lector de pantalla",
      "software de dictado para personas ciegas",
      "voz a texto para personas con discapacidad visual",
      "de voz a texto para usuarios ciegos",
      "introducir texto con un lector de pantalla",
      "voicetypr ciegos",
    ],
  },
};
