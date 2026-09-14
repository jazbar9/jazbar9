export type Locale = 'en' | 'es';

export const translations = {
  en: {
    meta: {
      title: 'Jazmina Sanz · Data Scientist & Analyst',
      home: 'Home',
      description:
        'Data Scientist / Analyst portfolio. Python, SQL, machine learning and analytics — from POS retail analytics to Hugging Face models.',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Data Analyst',
      name: 'Jazmina Sanz Salluca',
      titleStart: 'Turning raw data into',
      titleAccent: 'clear decisions',
      subtitle:
        'Python · SQL · ETL · ML — from data pipelines on POS retail data to market basket analysis and ML-powered apps.',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
      scroll: 'Scroll',
    },
    stats: {
      projects: 'Projects shipped',
      hf: 'HF models & apps',
      tech: 'Tools in stack',
    },
    home: {
      aboutTitle: 'From data to decisions',
      aboutText:
        'I work across the data pipeline: cleaning and exploring datasets, building SQL analytics, training and shipping ML models, and putting them behind APIs you can actually use.',
      skillsTitle: 'Core stack',
      sectionProjects: 'Selected work',
      viewAll: 'All projects',
      moreAbout: 'More about me',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Auto-synced from my GitHub and Hugging Face.',
      all: 'All',
      github: 'GitHub',
      huggingface: 'Hugging Face',
      featured: 'Featured',
      count: 'projects',
      viewCode: 'Code',
      viewDemo: 'Demo',
      empty: 'No projects match this filter.',
    },
    about: {
      title: 'About',
      intro:
        'Data Analyst focused on turning messy, real-world data into decisions: from retail POS transactions to e-commerce revenue and streamer analytics.',
      skillsHead: 'Skills',
      skills: {
        data: { title: 'Data engineering', bullets: ['Python · Pandas', 'ETL pipelines', 'SQL'] },
        ml: { title: 'Machine learning', bullets: ['Scikit-learn', 'Hugging Face Transformers', 'Flask'] },
        analytics: {
          title: 'Analytics & BI',
          bullets: ['Market basket analysis', 'BI dashboards', 'Tableau dashboards'],
        },
        tools: { title: 'Tools', bullets: ['Git · GitHub Actions', 'Hugging Face Hub', 'Gradio'] },
      },
      journeyTitle: 'Journey',
      journey: [
        'Started in the mining industry (4+ years), managing KPIs, safety statistics, and leading external audits (ISO 45001, SUNAFIL, OEFA) across large-scale industrial projects — where data-driven decisions had zero margin for error.',
        'Moved into independent digital transformation work (4+ years) for clients in the US and Peru: evolved from custom frontend development (HTML, JavaScript) and robust CMS solutions (WordPress with integrated payments and analytics) to modern web stacks (Astro, Tailwind, Vercel), personally managing server setup, domain configuration, and end-to-end deployments.',
        'Drawn to the data behind those projects, transitioned into data science through a bootcamp, building end-to-end projects with real datasets.',
        'Expanded into an ML API catalog: housing price prediction, insurance risk, and e-commerce sales forecasting.',
        'Shipped models and interactive apps on Hugging Face across NLP and computer vision.',
        'Most recently, applied the full pipeline to a real business: cleaned and analyzed years of point-of-sale data for retail, turning raw transactions into product-pairing insights.',
      ],
      expTitle: 'Professional experience',
      experience: [
        {
          role: 'Freelance Data Analyst',
          company: 'Restaurant client (F&B)',
          location: 'Peru',
          period: '08/2026',
          summary: 'Built the full pipeline to turn 45+ months of POS data into reliable business metrics.',
          bullets: [
            'Built a Python/Pandas pipeline across 96,687 transactions and 45 months of POS data, cleaning nulls, dates and inconsistent categories.',
            'Ran EDA and visualizations in Tableau, Matplotlib and Seaborn covering revenue, products and operational efficiency.',
            'Applied market basket analysis to uncover product-pairing patterns and cross-sell opportunities.',
            'Designed the "Average Ticket per Order Served" KPI to compare staff efficiency without shift-count bias.',
            'Identified a projected 30% revenue increase opportunity by optimizing the operating schedule.',
          ],
        },
        {
          role: 'Business Analyst & Digital Solutions Consultant',
          company: 'Colorado Supplies LLC',
          location: 'USA',
          period: '09/2024 – Present',
          summary: 'Translated a referral-only business into a web presence with two WooCommerce solutions.',
          bullets: [
            'Implemented WooCommerce, product catalog, Stripe payments, Google Analytics and differentiated navigation flows.',
            'Reached 300–700 monthly visitors, with an annual support, renewal and update contract.',
          ],
        },
        {
          role: 'Business Analyst & Freelance Web Developer',
          company: 'Colorado Native Guide',
          location: 'USA',
          period: '06/2023 – 06/2025',
          summary: 'Automated a manual subscription, payment and content-delivery process end to end.',
          bullets: [
            'Analyzed the manual process and translated it into functional requirements.',
            'Implemented authentication, user roles, PayPal payments, restricted access and automated emails via Azure/SendGrid.',
            'Automated a flow that reached 600 paying subscribers within its first year.',
          ],
        },
        {
          role: 'Freelance Web Developer & Project Lead',
          company: 'Eye Clinic EEH',
          location: 'Peru',
          period: '12/2022 – 12/2025',
          summary: 'Led the mapping, design and launch of an online scheduling solution for a clinic.',
          bullets: [
            'Mapped the in-person patient flow and redesigned scheduling and calendar blocking together with medical staff.',
            'Configured profiles, permissions, testing and training for the medical staff.',
            'Eliminated waiting queues and raised the doctor\'s daily capacity from 12 to 15–16 patients.',
            'Reached 385 booked appointments in the first three months and 250+ monthly page visits.',
          ],
        },
        {
          role: 'Freelance Full Digitalization',
          company: 'Restaurant client (F&B)',
          location: 'Peru',
          period: '07/2022 – Present',
          summary: 'Digitalized order-taking, cash, inventory and invoicing for a restaurant-bar.',
          bullets: [
            'Implemented a POS with automated IGV tax calculation and built a historical database.',
            'Reduced shift losses by up to S/.150 and cut returns from preparation errors.',
            'Built a historical database to analyze sales, products and seasonality.',
            'Managing platform technical support and staff training since 2022.',
          ],
        },
      ],
      ctaTitle: 'Want to collaborate?',
      ctaText: 'I am available for data science, analytics and ML engineering projects.',
      ctaButton: 'Get in touch',
    },
    contact: {
      title: 'Contact',
      text: 'Open to data science and analytics opportunities. Pick any channel:',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      huggingface: 'Hugging Face',
      hfOrg: 'Hugging Face · G6 org',
      response: 'I usually reply within 24 hours.',
    },
    footer: {
      quote: 'Data Analyst building pipelines and models that drive real decisions.',
      rights: 'All projects remain the property of their respective repos.',
    },
  },
  es: {
    meta: {
      title: 'Jazmina Sanz · Data Scientist & Analyst',
      home: 'Inicio',
      description:
        'Portafolio de Data Scientist / Analyst. Python, SQL, machine learning y analítica — desde analítica de puntos de venta hasta modelos en Hugging Face.',
    },
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Analista de Datos',
      name: 'Jazmina Sanz Salluca',
      titleStart: 'Convirtiendo datos en',
      titleAccent: 'decisiones claras',
      subtitle:
        'Python · SQL · ETL· ML — desde pipelines de datos en retail POS hasta market basket analysis y apps con Machine Learning.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Escríbeme',
      scroll: 'Desliza',
    },
    stats: {
      projects: 'Proyectos publicados',
      hf: 'Modelos & apps HF',
      tech: 'Herramientas',
    },
    home: {
      aboutTitle: 'Del dato a la decisión',
      aboutText:
        'Trabajo a lo largo de todo el pipeline de datos: limpieza y exploración, analítica con SQL, entrenamiento y despliegue de modelos ML, y APIs listas para usar.',
      skillsTitle: 'Stack principal',
      sectionProjects: 'Trabajo destacado',
      viewAll: 'Todos los proyectos',
      moreAbout: 'Más sobre mí',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Sincronizado automáticamente desde mi GitHub y Hugging Face.',
      all: 'Todos',
      github: 'GitHub',
      huggingface: 'Hugging Face',
      featured: 'Destacados',
      count: 'proyectos',
      viewCode: 'Código',
      viewDemo: 'Demo',
      empty: 'No hay proyectos para este filtro.',
    },
    about: {
      title: 'Sobre mí',
      intro:
        'Analista de Datos enfocada en convertir enfocada en convertir datos reales y desordenados en decisiones: desde transacciones POS de retail hasta ingresos de e-commerce y analítica de streamers.',
      skillsHead: 'Habilidades',
      skills: {
        data: { title: 'Ingeniería de datos', bullets: ['Python · Pandas', 'Pipelines ETL', 'SQL'] },
        ml: { title: 'Machine learning', bullets: ['Scikit-learn', 'Hugging Face Transformers', 'Flask'] },
        analytics: {
          title: 'Analítica & BI',
          bullets: ['Market basket analysis', 'Dashboards BI', 'Dashboards Tableau'],
        },
        tools: { title: 'Herramientas', bullets: ['Git · GitHub Actions', 'Hugging Face Hub', 'Gradio'] },
      },
      journeyTitle: 'Trayectoria',
      journey: [
        'Empecé en el sector minero (+4 años), gestionando KPIs, estadísticas de seguridad y liderando auditorías externas (ISO 45001, SUNAFIL, OEFA) en proyectos industriales de gran escala — donde las decisiones basadas en datos no tenían margen de error.',
        'Pasé a trabajar de forma independiente en transformación digital (+4 años) para clientes en EEUU y Perú: evolucioné desde el desarrollo frontend a medida (HTML, JavaScript) y soluciones CMS robustas (WordPress con pagos y analítica integrados) hasta stacks web modernos (Astro, Tailwind, Vercel), gestionando personalmente la configuración de servidores, dominios y despliegues end-to-end.',
        'Atraída por los datos detrás de esos proyectos, di el salto a la ciencia de datos a través de un bootcamp, construyendo proyectos end-to-end con datasets reales.',
        'Amplié mi trabajo a un catálogo de APIs de ML: predicción de precios de vivienda, riesgo de seguros y forecasting de ventas en e-commerce.',
        'Publiqué modelos y aplicaciones interactivas en Hugging Face, entre NLP y visión por computadora.',
        'Más recientemente, apliqué todo el pipeline a un negocio real: limpié y analicé años de datos de punto de venta de retail, convirtiendo transacciones crudas en insights de combinación de productos.',
      ],
      expTitle: 'Experiencia profesional',
      experience: [
        {
          role: 'Analista de Datos Freelance',
          company: 'JAZVI S.A.C.',
          location: 'Perú',
          period: '08/2026',
          summary: 'Construí el pipeline completo para convertir más de 45 meses de datos POS en métricas confiables.',
          bullets: [
            'Construí un pipeline en Python/Pandas sobre 96,687 transacciones y 45 meses de datos POS, limpiando nulos, fechas y categorías inconsistentes.',
            'Realicé EDA y visualizaciones en Tableau, Matplotlib y Seaborn sobre ingresos, productos y eficiencia operativa.',
            'Apliqué market basket analysis para identificar patrones de combinación de productos y oportunidades de venta cruzada.',
            'Diseñé el indicador "Ticket Promedio por Orden Atendida" para comparar la eficiencia del personal sin sesgo por número de turnos.',
            'Identifiqué una oportunidad de aumento de ingresos proyectado del 30% optimizando el calendario operativo.',
          ],
        },
        {
          role: 'Analista de Negocios & Consultora de Soluciones Digitales',
          company: 'Colorado Supplies LLC',
          location: 'EE. UU.',
          period: '09/2024 – Presente',
          summary: 'Convertí un negocio basado solo en referidos en una presencia web con dos soluciones WooCommerce.',
          bullets: [
            'Implementé WooCommerce, catálogo de productos, pagos Stripe, Google Analytics y flujos de navegación diferenciados.',
            'Alcancé 300–700 visitantes mensuales, con contrato anual de soporte, renovación y actualización.',
          ],
        },
        {
          role: 'Analista de Negocios & Desarrolladora Web Freelance',
          company: 'Colorado Native Guide',
          location: 'EE. UU.',
          period: '06/2023 – 06/2025',
          summary: 'Automaticé de extremo a extremo un proceso manual de suscripciones, pagos y entrega de contenido.',
          bullets: [
            'Analicé el proceso manual y lo traduje a requerimientos funcionales.',
            'Implementé autenticación, roles de usuario, pagos PayPal, acceso restringido y correos automáticos vía Azure/SendGrid.',
            'Automaticé un flujo que alcanzó 600 suscriptores de pago en su primer año.',
          ],
        },
        {
          role: 'Desarrolladora Web Freelance & Líder de Proyecto',
          company: 'Clínica Oftalmológica EEH',
          location: 'Perú',
          period: '12/2022 – 12/2025',
          summary: 'Lideré el mapeo, diseño y lanzamiento de una solución de citas en línea para una clínica.',
          bullets: [
            'Mapeé el flujo presencial de pacientes y rediseñé la programación y el bloqueo de agenda junto al personal médico.',
            'Configuré perfiles, permisos, pruebas y capacitación para el personal médico.',
            'Eliminé las colas de espera y elevé la capacidad diaria del médico de 12 a 15–16 pacientes.',
            'Alcancé 385 citas reservadas en los primeros tres meses y más de 250 visitas mensuales a la página.',
          ],
        },
        {
          role: 'Digitalización Integral Freelance',
          company: 'JAZVI S.A.C.',
          location: 'Perú',
          period: '07/2022 – Presente',
          summary: 'Digitalicé la toma de pedidos, caja, inventario y facturación de un restaurante-bar.',
          bullets: [
            'Implementé un POS con cálculo automático de impuesto IGV y construí una base de datos histórica.',
            'Reduje pérdidas de hasta S/.150 por turno y disminuí las devoluciones por errores de preparación.',
            'Construí una base de datos histórica para analizar ventas, productos y estacionalidad.',
            'Gestiono el soporte técnico de la plataforma y la capacitación del personal desde 2022.',
          ],
        },
      ],
      ctaTitle: '¿Quieres colaborar?',
      ctaText: 'Disponible para proyectos de data science, analítica y ML engineering.',
      ctaButton: 'Contáctame',
    },
    contact: {
      title: 'Contacto',
      text: 'Abierta a oportunidades de data science y analítica. Elige tu canal:',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      huggingface: 'Hugging Face',
      response: 'Suelo responder en 24 horas.',
    },
    footer: {
      quote: 'Analista de Datos construyendo pipelines y modelos que generan decisiones reales.',
      rights: 'Los proyectos conservan la propiedad de sus respectivos repos.',
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];

export function t(locale: Locale): Dictionary {
  return translations[locale];
}

export function relativePath(locale: Locale): string {
  return locale === 'en' ? '' : '/es';
}