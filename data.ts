export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  role: string;
  desc: string;
  image: string;
  tags: string[];

  overviewTitle: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];

  gallery?: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-petugas-vts",
    number: "01",
    title: "SMART VTS",
    category: "AI / MACHINE LEARNING / NLP",
    year: "2025",
    role: "AI & Web System Developer",

    desc:
      "Voice-based AI assistant for Vessel Traffic Service operations using speech recognition, NLP and intent classification.",

    image: "/images/projects/smart-vts/Rancangan.png",

    tags: [
      "Python",
      "Speech Recognition",
      "TF-IDF",
      "Naive Bayes",
      "gTTS",
      "MySQL",
    ],

    overviewTitle:
      "AI-assisted communication for VTS operations",

    overview:
      "SMART VTS is a research and development project focused on applying Artificial Intelligence and Natural Language Processing to Vessel Traffic Service operations. The system is designed to assist communication and reporting activities through voice interaction and structured intent classification.",

    challenge:
      "VTS operations involve communication and reporting activities that contain repetitive information and structured commands. The challenge was to create a lightweight system capable of understanding spoken Indonesian input and converting it into structured system actions.",

    solution:
      "The system combines Google Speech Recognition for voice input, TF-IDF for text feature extraction, Naive Bayes for intent classification, MySQL for structured data management, and gTTS for Indonesian text-to-speech responses. The approach was designed to remain lightweight and practical for a modest development environment.",

    results: [
      "Implemented a voice-based interaction concept for VTS operations.",
      "Integrated speech recognition with NLP intent classification.",
      "Implemented TF-IDF and Naive Bayes for intent detection.",
      "Integrated MySQL for structured operational data.",
      "Implemented Indonesian text-to-speech responses using gTTS.",
    ],

    gallery: [
      "/images/projects/smart-vts/Rancangan.png", "/images/projects/smart-vts/Rancangan1.png",
    ],

    github: "https://github.com/RizkyResiJulian/Project-SMART-VTS-",
    live: "https://youtu.be/uiYMI_LAXcU",
  },

  {
    slug: "simkop",
    number: "02",
    title: "SISTEM INFORMASI KDKMP",
    category: "WEB DEVELOPMENT / INFORMATION SYSTEM",
    year: "2026",
    role: "Web System Developer",

    desc:
      "Web-based cooperation information system for operational reporting, data management and digitalization of cooperative activities.",

    image: "/images/projects/simkop/simkop.png",

    tags: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "XAMPP",
    ],

    overviewTitle:
      "Digitalizing cooperative operations",

    overview:
      "SIMKOP is a web-based information system concept developed to support operational activities within Koperasi Desa/Kelurahan Merah Putih. The system focuses on organizing operational data and supporting digital administration.",

    challenge:
      "Cooperative operational activities can involve large amounts of information related to members, products, transactions, inventory and reporting. Managing this information manually can make monitoring and reporting more difficult.",

    solution:
      "The system uses a web-based architecture with PHP and MySQL. The interface is designed to provide structured access to operational information while making data easier to manage and retrieve.",

    results: [
      "Designed a centralized web-based information system.",
      "Applied database concepts for structured cooperative data.",
      "Implemented web interfaces for operational information.",
      "Demonstrated practical application of web development skills.",
    ],

    gallery: [
      "/images/projects/simkop/simkop.png",
    ],

    github: "https://github.com/rizkyresijulian",
  },

  {
    slug: "bon-barang-keuangan",
    number: "03",
    title: "SIBONPASBI",
    category: "WEB DEVELOPMENT / ADMINISTRATION",
    year: "2025 — 2026",
    role: "System Developer",

    desc:
      "Information system for managing goods, finance and administrative reporting in an operational environment.",

    image: "/images/projects/sibonpasbi/sibonpasbi.png",

    tags: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Excel",
    ],

    overviewTitle:
      "Digitizing goods and financial administration",

    overview:
      "SIBONPASBI is a web-based information system developed to support the management of goods, financial records and administrative reporting. The project was created from a practical operational requirement during an internship environment.",

    challenge:
      "Manual administration can make it difficult to track requests, goods, financial information and historical records. Searching for previous records and preparing reports can also require additional time.",

    solution:
      "SIBONPASBI provides a structured digital workflow for recording and managing operational information. The system combines a web interface with database storage to make information easier to record, retrieve and monitor.",

    results: [
      "Digitized an operational administrative workflow.",
      "Reduced dependency on scattered manual records.",
      "Created structured data management for goods and finance.",
      "Applied PHP and MySQL to a real operational requirement.",
      "Demonstrated problem-solving outside an academic environment.",
    ],

    gallery: [
      "/images/projects/sibonpasbi/sibonpasbi.png",
    ],

    github: "https://github.com/RizkyResiJulian/sibonpasbi.lapascirebon.com",
    live: "https://sibonpasbi.lapascirebon.com/",
  },

  {
    slug: "iot-project",
    number: "04",
    title: "ROBOTICS & IoT",
    category: "IoT / HARDWARE / SENSOR",
    year: "2024 — 2025",
    role: "IoT Developer",

    desc:
      "IoT prototype combining sensors, microcontrollers and a web-based monitoring concept.",

    image: "/images/projects/iot/iot.jpeg",

    tags: [
      "Arduino",
      "IoT",
      "Sensors",
      "C/C++",
      "BH1750",
      "Web",
    ],

    overviewTitle:
      "Connecting physical sensors with digital systems",

    overview:
      "This project represents a collection of robotics and Internet of Things experiments involving microcontrollers, sensors and digital monitoring. The work explores how physical data can be captured and transformed into useful information.",

    challenge:
      "Sensor data needs to be acquired consistently and processed before it can be used for monitoring. The challenge was connecting physical hardware with software components in a reliable workflow.",

    solution:
      "Arduino-based hardware and sensor modules were used to acquire physical measurements. The collected data could then be integrated into software and visualization workflows for monitoring purposes.",

    results: [
      "Implemented sensor-based data acquisition.",
      "Worked with Arduino microcontrollers.",
      "Integrated hardware and software concepts.",
      "Explored web-based monitoring of sensor information.",
      "Built practical experience in IoT system development.",
    ],

    gallery: [
      "/images/projects/iot/iot.jpeg",
    ],

    github: "https://github.com/RizkyResiJulian",
  },
];


export const experiences = [
  {
    company: "Koperasi Desa Kelurahan Merah Putih — PT Agrinas Nusantara",
    role: "Manager KDKMP",
    date: "Agustus 2026 — Now",
    logo: "/images/logos/kdkmp.png",
    tags: [
      "Management",
      "Leadership",
      "Team Coordination",
      "Problem Solving",
    ],
  },
  
  {
    company: "SPPI KDKMP — Kemenhan & Kemenkop",
    role: "Pelatihan Managerial KDKMP",
    date: "Juni 2026 — Juli 2026",
    logo: "/images/logos/sppi.jpg",
    tags: [
      "Management",
      "Leadership",
      "Team Coordination",
      "Problem Solving",
    ],
  },

  {
    company: "Maganghub — Kementerian Ketenagakerjaan",
    role: "Pengelola Fasilitas Umum",
    date: "NOV 2025 — MEI 2026",
    logo: "/images/logos/maganghub.webp",
    tags: [
      "IT Support",
      "Web Development",
      "Data Management",
      "Troubleshooting",
    ],
  },

  {
    company:
      "Distrik Navigasi Tanjung Priok Type B — VTS Cirebon",
    role: "IT Support / Radio Operator (PKL)",
    date: "JUL 2024 — DES 2024",
    logo: "/images/logos/kemenhub.png",
    tags: [
      "Web Monitoring",
      "Hardware",
      "Software",
      "Data Validation",
    ],
  },

  {
    company: "Hizbul Wathan UMC",
    role: "Ketua Umum — Periode 2022–2024",
    date: "2022 — 2024",
    logo: "/images/logos/hw.png",
    tags: [
      "Leadership",
      "Team Coordination",
      "Operations",
    ],
  },
];