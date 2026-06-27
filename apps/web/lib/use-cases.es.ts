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
          "Mensajes cortos en Slack, notas en tickets, prompts de IA, campos de formulario. Por separado no parece mucho; a lo largo del día es la repetición que más odian los tendones. Dícalo todo y el conteo se mantiene bajo.",
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
};
