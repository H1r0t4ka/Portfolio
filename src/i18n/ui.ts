export const languageList = {
    es: "Español",
    en: "English"
}

export const projects = {
    es: [
        {
            title: "Facilcaptura",
            description:
                "Extensión de navegador para acelerar tareas de SEO y automatización desde el popup: capturas por elemento, utilidades de auditoría, accesos a PageSpeed y flujo de creación/automatización de proyectos en SERanking.",
            image: "/facil.webp",
            tags: ["JavaScript", "Chromium", "SERanking", "SEO", "Automatización"],
            code: "https://github.com/H1r0t4ka/Facilcaptura",
        },
        {
            title: "Conexión Estudiantil",
            description:
                "Pagina web para una agencia de idiomas dedidaca a la asesoría y gestión de estudios en el exterior.",
            image: "/conexion.webp",
            tags: ["WordPress", "Figma", "Elementor", "SEO"],
            site: "https://conexionestudiantil.com/",
        },
        {
            title: "FinanciaPro",
            description:
                "Plataforma Web de Onboarding de Créditos para PYMES - Hackaton NoCountry 2025.",
            image: "/financia.webp",
            tags: ["HTML", "CSS", "JavaScript", "Astro", "Tailwind", "Java", "Spring Boot", "JWT", "GPT"],
            code: "https://github.com/H1r0t4ka/credit-onboarding-platform",
        },
        {
            title: "SafeSant",
            description:
                "Proyecto integral que combina un tablero geoespacial interactivo y un chatbot comunitario para monitorizar, explicar y prevenir fenómenos de seguridad en los municipios del departamento de Santander, usando datos oficiales de la Policía Nacional - Concurso Datos al Ecosistema 2025 MinTic",
            image: "/safesant.webp",
            tags: ["Streamlit", "Next.js", "Vercel", "HuggingFace", "Chatbot"],
            code: "https://github.com/H1r0t4ka/safesant",
            site: "https://santanderdigitalseguro.vercel.app/",
        },
        {
            title: "FlujoFacil",
            description:
                "Aplicación web para registrar ingresos y gastos, ver métricas y generar reportes. Incluye un asistente con IA (Gemini) y un tutorial guiado de onboarding.",
            image: "/flujofacil.webp",
            tags: ["React", "TypeScript", "Vite", "Tailwind", "Supabase", "Gemini", "Node.js"],
            code: "https://github.com/H1r0t4ka/Finanzas",
            site: "https://finanzas-nine-jet.vercel.app/",
        },
    ],
    en: [
        {
            title: "Facilcaptura",
            description:
                "Browser extension to speed up SEO and automation tasks from a popup: element-based captures, audit utilities, PageSpeed shortcuts, and project creation/automation flows in SERanking.",
            image: "/facil.webp",
            tags: ["JavaScript", "Chromium", "SERanking", "SEO", "Automation"],
            code: "https://github.com/H1r0t4ka/Facilcaptura",
        },
        {
            title: "Conexión Estudiantil",
            description:
                "Website for a language agency dedicated to advising and managing studies abroad.",
            image: "/conexion.webp",
            tags: ["WordPress", "Figma", "Elementor", "SEO"],
            site: "https://conexionestudiantil.com/",
        },
        {
            title: "FinanciaPro",
            description:
                "SME credit onboarding web platform — NoCountry Hackathon 2025.",
            image: "/financia.webp",
            tags: ["HTML", "CSS", "JavaScript", "Astro", "Tailwind", "Java", "Spring Boot", "JWT", "GPT"],
            code: "https://github.com/H1r0t4ka/credit-onboarding-platform",
        },
        {
            title: "SafeSant",
            description:
                "End-to-end project combining an interactive geospatial dashboard and a community chatbot to monitor, explain, and prevent security-related events in Santander (Colombia), using official police data — MinTIC Data Ecosystem 2025.",
            image: "/safesant.webp",
            tags: ["Streamlit", "Next.js", "Vercel", "HuggingFace", "Chatbot"],
            code: "https://github.com/H1r0t4ka/safesant",
            site: "https://santanderdigitalseguro.vercel.app/",
        },
        {
            title: "FlujoFacil",
            description:
                "Web app to track income and expenses, view metrics, and generate reports. Includes an AI assistant (Gemini) and a guided onboarding tutorial.",
            image: "/flujofacil.webp",
            tags: ["React", "TypeScript", "Vite", "Tailwind", "Supabase", "Gemini", "Node.js"],
            code: "https://github.com/H1r0t4ka/Finanzas",
            site: "https://finanzas-nine-jet.vercel.app/",
        },
    ],
} as const;

export const labels = {
    es: {
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "about.description": "Apasionado por crear experiencias de usuario fluidas y estéticas. Me especializo en proyectos web emocionantes.",
        "about.tech": "Tecnologías",
        "about.experience": " años de experiencia",
        "about.projects": " sitios web",
        "experience.title": "Experiencia",
        "experience.description": "Como desarrollador web, me apasiona construir soluciones digitales que no solo funcionen, sino que también resuelvan problemas de manera eficiente. En este apartado, te presento una selección de mis trabajos más relevantes, donde he aplicado mis habilidades en el desarrollo de software, la optimización y la automatización de procesos para crear productos web robustos e innovadores.",

        // --- Experiencia (experience) - Tareas de Orbidi ---
        "exp.orbidi.title": "Implementador Web - Orbidi",
        "exp.orbidi.date": "Sep 2024 - Presente",
        "exp.orbidi.task1": '<span class="font-bold">Construcción de sitios web</span> principalmente en WordPress con Elementor, garantizando diseño responsive y rendimiento óptimo, adaptándonos a otros CMS y constructores según el proyecto.',
        "exp.orbidi.task2": '<span class="font-bold">Ejecución de SEO on-page y off-page</span> (optimización de contenido, estructura, velocidad, metaetiquetas y schema markup) para mejorar la visibilidad orgánica de los sitios web.',
        "exp.orbidi.task3": '<span class="font-bold">Participación activa en equipos SCRUM</span>, contribuyendo en la planificación y ejecución de sprints para la entrega exitosa de proyectos web.',
        "exp.orbidi.task4": '<span class="font-bold">Versatilidad para trabajar con diversos CMS y constructores web</span>, demostrando capacidad de aprendizaje y aplicación de nuevas herramientas en el desarrollo web.',
        "exp.orbidi.task5": '<span class="font-bold">Automatización de procesos y tareas</span>, integrando inteligencia artificial para optimizar el rendimiento y la eficiencia de los entregables, resultando en la reducción de tiempos en desarrollo y mejora de la calidad en los productos.',

        // --- Experiencia (experience) - Tareas de Freelance ---
        "exp.freelance.title": "Freelance",
        "exp.freelance.date": "2022 - Presente",
        "exp.freelance.task1": '<span class="font-bold">Desarrollo y entrega de soluciones web personalizadas</span>, utilizando principalmente WordPress con constructores visuales (como Elementor o Divi), asegurando diseño responsive, velocidad de carga optimizada y la mejor experiencia de usuario para cada cliente.',
        "exp.freelance.task2": '<span class="font-bold">Implementación de estrategias de SEO on-page</span> (optimización de contenido, estructura de títulos y metadatos, y mejora de la velocidad) para potenciar la visibilidad y el posicionamiento orgánico de los proyectos web.',
        "exp.freelance.task3": '<span class="font-bold">Gestión integral de proyectos web</span> desde la conceptualización hasta el lanzamiento, incluyendo la recopilación de requisitos del cliente, planificación, desarrollo iterativo y despliegue final.',

        /* Proyectos */
        "projects.title": "Proyectos",

        /* Footer */
        "footer.title": "¡Gracias por visitar mi portafolio!",
        "footer.description": "Si te ha gustado mi trabajo y estás interesado en mi trabajo, no dudes en ponerte en contacto conmigo. Estoy siempre abierto a nuevas oportunidades y proyectos emocionantes.",

    },
    en: {
        "nav.about": "About Me",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "about.description": "Passionate about creating fluid and aesthetic user experiences. I specialize in exciting web projects.",
        "about.tech": "Technologies",
        "about.experience": " years of experience",
        "about.projects": " websites",
        "experience.title": "Experience",
        "experience.description": "As a web developer, I am passionate about building digital solutions that not only work but also efficiently solve problems. In this section, I present a selection of my most relevant work, where I have applied my skills in software development, optimization, and process automation to create robust and innovative web products.",

        // --- Experiencia (experience) - Tareas de Orbidi ---
        "exp.orbidi.title": "Web Implementer - Orbidi",
        "exp.orbidi.date": "Sep 2024 - Present",
        "exp.orbidi.task1": '<span class="font-bold">Website construction</span> mainly in WordPress with Elementor, ensuring responsive design and optimal performance, adapting to other CMS and builders as required.',
        "exp.orbidi.task2": '<span class="font-bold">Execution of on-page and off-page SEO</span> (content optimization, structure, speed, meta tags, and schema markup) to improve the organic visibility of websites.',
        "exp.orbidi.task3": '<span class="font-bold">Active participation in SCRUM teams</span>, contributing to the planning and execution of sprints for the successful delivery of web projects.',
        "exp.orbidi.task4": '<span class="font-bold">Versatility to work with various CMS and web builders</span>, demonstrating learning capacity and application of new tools in web development.',
        "exp.orbidi.task5": '<span class="font-bold">Process and task automation</span>, incorporating artificial intelligence to optimize the performance and efficiency of deliverables, resulting in shorter development times and improved product quality.',

        // --- Experiencia (experience) - Tareas de Freelance ---
        "exp.freelance.title": "Freelance",
        "exp.freelance.date": "2022 - Present",
        "exp.freelance.task1": '<span class="font-bold">Development and delivery of personalized web solutions</span>, primarily using WordPress with visual builders (like Elementor or Divi), ensuring responsive design, optimized loading speed, and the best user experience for each client.',
        "exp.freelance.task2": '<span class="font-bold">Implementation of on-page SEO strategies</span> (content optimization, title and metadata structure, and speed improvement) to boost the visibility and organic positioning of web projects.',
        "exp.freelance.task3": '<span class="font-bold">Comprehensive management of web projects</span> from conceptualization to launch, including client requirement gathering, planning, iterative development, and final deployment.',

        /* Proyectos */
        "projects.title": "Projects",

        /* Footer */
        "footer.title": "Thank you for visiting my portfolio!",
        "footer.description": "If you liked my work and are interested in hiring me, feel free to get in touch. I am always open to new opportunities and exciting projects.",

    },
};
