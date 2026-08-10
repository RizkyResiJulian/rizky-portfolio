export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  overviewTitle: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  live?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "ai-petugas-vts",
    title: "AI PETUGAS VTS",
    category: "AI / MACHINE LEARNING / NLP",
    year: "2025",
    role: "AI & Web System Developer",
    summary:
      "Voice-based AI assistant concept for VTS operations, combining speech recognition, intent classification, text-to-speech, and structured data handling.",
    overviewTitle: "An AI-assisted VTS workflow",
    overview:
      "A research and development project focused on automating parts of vessel traffic reporting and communication workflows. The system combines voice input, NLP intent classification, database operations, and Indonesian text-to-speech.",
    challenge:
      "Operational communication and reporting can involve repetitive interactions and structured information that must be captured accurately. The challenge was to connect natural language input with predictable system actions without relying on a heavy infrastructure.",
    solution:
      "The approach uses speech recognition for voice input, TF-IDF features with a Naive Bayes intent classifier for NLP, MySQL for structured data, and gTTS for Indonesian voice responses. The architecture was designed around lightweight Python components.",
    results: [
      "Demonstrates an end-to-end AI-assisted communication workflow.",
      "Connects NLP intent classification with practical system actions.",
      "Uses lightweight components suitable for a modest development machine.",
      "Shows the integration of AI, database, and web-system concepts.",
    ],
    stack: ["Python", "Speech Recognition", "TF-IDF", "Naive Bayes", "gTTS", "MySQL"],
  },
  {
    number: "02",
    slug: "vts-cirebon",
    title: "VTS CIREBON",
    category: "WEB DEVELOPMENT / INFORMATION SYSTEM",
    year: "2024",
    role: "IT Support / Web System Developer",
    summary:
      "Web-based vessel traffic reporting and monitoring system built around operational data management.",
    overviewTitle: "A practical web information system",
    overview:
      "A web application developed around Vessel Traffic Service reporting and monitoring needs, with CRUD workflows, data management, dashboard views, and reporting support.",
    challenge:
      "Operational teams need reliable access to structured vessel traffic information while maintaining data accuracy and simple workflows.",
    solution:
      "The system uses PHP, HTML, CSS, and MySQL with XAMPP as the local development environment. The application focuses on straightforward CRUD operations, monitoring views, data validation, and printable reporting.",
    results: [
      "Provides a structured workflow for vessel traffic data.",
      "Demonstrates full-stack fundamentals with PHP and MySQL.",
      "Includes CRUD and dashboard-oriented functionality.",
      "Connects technical implementation with an operational environment.",
    ],
    stack: ["PHP", "HTML", "CSS", "MySQL", "XAMPP"],
  },
  {
    number: "03",
    slug: "bon-barang-keuangan",
    title: "BON BARANG & KEUANGAN",
    category: "WEB DEVELOPMENT / ADMINISTRATION",
    year: "2025 — 2026",
    role: "System Developer",
    summary:
      "Web-based information system designed to support BON item and financial administration workflows.",
    overviewTitle: "Digitizing an administrative workflow",
    overview:
      "An internal information-system project designed to reduce manual handling of BON item and financial administration and make operational records easier to manage.",
    challenge:
      "Administrative processes can become difficult to track when information is distributed across paper records and spreadsheets.",
    solution:
      "A web-based workflow was designed to centralize records, make data easier to retrieve, and provide a more consistent structure for administrative reporting.",
    results: [
      "Shows experience translating operational needs into a web system.",
      "Supports structured data entry and retrieval.",
      "Demonstrates practical problem solving beyond academic projects.",
    ],
    stack: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],
  },
  {
    number: "04",
    slug: "iot-project",
    title: "IOT SYSTEM",
    category: "IoT / HARDWARE / SENSOR",
    year: "2024 — 2025",
    role: "IoT Developer",
    summary:
      "IoT-oriented prototype work combining microcontrollers, sensors, data capture, and system visualization.",
    overviewTitle: "Connecting physical data to software",
    overview:
      "A collection of IoT prototype work exploring how sensor readings can be captured by microcontrollers and transformed into useful digital information.",
    challenge:
      "Physical sensor data needs reliable acquisition, processing, and presentation before it becomes useful for monitoring or decision making.",
    solution:
      "The work uses Arduino-based components and sensor modules, with a focus on acquiring readings and integrating them into software workflows.",
    results: [
      "Demonstrates hardware-software integration.",
      "Shows practical experience with sensors and microcontrollers.",
      "Builds a foundation for connected monitoring systems.",
    ],
    stack: ["Arduino", "BH1750", "Sensors", "C/C++", "IoT"],
  },
];
