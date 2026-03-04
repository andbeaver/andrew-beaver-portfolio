export type ProjectCategory = "Web" | "Mobile" | "Systems" | "Data";

export interface Project {
  id: number;
  title: string;
  tag: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  bullets: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TicketHive",
    tag: "Full-Stack · Academic",
    description:
      "A concert ticket purchasing platform with a customer-facing storefront, an admin portal, and a dedicated REST API - all cloud-deployed on Azure.",
    category: "Web",
    techStack: ["C#", "ASP.NET Core", "MVC", "React", "Node.js", "Express", "RESTful API", "SQL Server", "Entity Framework", "Azure Blob Storage", "Azure App Service", "Vite", "HTML/CSS", "Relational Database Design", "Git / GitHub", "Agile Methodology"],
    bullets: [
      "Admin portal with authentication, CRUD, and Azure Blob Storage image management.",
      "React storefront with dynamic routing and a validated multi-step purchase flow.",
      "REST API with SQL joins, prepared statements, and environment-based config.",
    ],
    githubUrl: "https://github.com/andbeaver/TicketHive",
    featured: true,
  },
  {
    id: 2,
    title: "MealWave",
    tag: "Mobile · Personal",
    description:
      "A cross-platform mobile app that applies the Warsaw Method to calculate insulin recommendations for complex meals - built for people managing Type 1 Diabetes.",
    category: "Mobile",
    techStack: ["Dart", "Flutter", "Material 3", "Git / GitHub", "Agile Methodology"],
    bullets: [
      "Time-based insulin-to-carb ratio scheduler with auto-sorted, persistent entries.",
      "Multi-screen navigation across calculator, history, and ratio settings.",
      "Dynamic light/dark theming and extended bolus duration calculations.",
    ],
    githubUrl: "https://github.com/andrewbeaverNSCC/https---github.com-andrewbeaverNSCC-MealWave",
    featured: true,
  },
  {
    id: 3,
    title: "Halifax Transit App",
    tag: "Android · Academic",
    description:
      "An Android app that shows real-time Halifax Transit bus and ferry locations on a live map, with user-controlled route filtering.",
    category: "Mobile",
    techStack: ["Kotlin", "Jetpack Compose", "Mapbox", "MVVM", "RoomDB", "GTFS Realtime", "Git / GitHub", "Agile Methodology"],
    bullets: [
      "Live bus markers and route shapes via Mapbox and GTFS Realtime feeds.",
      "MVVM architecture with RoomDB for persisting route selections across sessions.",
      "Built entirely in Jetpack Compose with a clean, responsive UI.",
    ],
    githubUrl: "https://github.com/andbeaver/HalifaxTransit",
    featured: true,
  },
  {
    id: 4,
    title: "Arrivio",
    tag: "Full-Stack · Hackathon",
    description:
      "A commute-planning tool that tells you exactly when to leave based on real-time traffic - built as part of a one-week hackathon with a team of four.",
    category: "Web",
    techStack: ["React", "Vite", "Node.js", "Express", "Google Maps API", "Google OAuth", "Azure", "HTML/CSS" , "Git / GitHub"],
    bullets: [
      "Real-time routing with Google Maps API, OAuth login, and location autocomplete.",
      "Led frontend architecture, state management, and Maps API integration.",
      "Coordinated team delivery via GitHub feature branching under a tight deadline.",
    ],
    githubUrl: "https://github.com/W0509891/arrivio",
    featured: false,
  },
  {
    id: 5,
    title: "WeatherPal",
    tag: "Android · Academic",
    description:
      "A location-aware Android weather app with real-time conditions, 5-day forecasts, and severe weather alerts - built around a fully reactive MVVM architecture.",
    category: "Mobile",
    techStack: ["Kotlin", "Jetpack Compose", "Retrofit", "Coroutines", "MVVM", "Google Play Services", "Material Design", "Git / GitHub", "Agile Methodology"],
    bullets: [
      "MVVM with Kotlin StateFlow driving live UI updates across a multi-screen Compose interface.",
      "Startup location workflow using Google Play Services and Accompanist for runtime permissions.",
      "Async networking layer with Retrofit and Coroutines powering all weather data fetching.",
    ],
    githubUrl: "https://github.com/andbeaver/WeatherPal",
    featured: false,
  },
  {
    id: 6,
    title: "Sentiment Analysis",
    tag: "Desktop · Academic",
    description:
      "A desktop ML app that predicts sentiment from user text in real time, with an interactive retraining feature to improve the model on the fly.",
    category: "Data",
    techStack: ["C#", "ML.NET", "Windows Forms", "Binary Classification"],
    bullets: [
      "Binary classifier using ML.NET's SDCA Logistic Regression with automated text featurization.",
      "Live retraining: users label new samples and instantly compare pre/post-training performance.",
      "Evaluated with Accuracy, F1 Score, AUC, and LogLoss, all surfaced in the Windows Forms UI.",
    ],
    githubUrl: "https://github.com/andbeaver/sentiment-analysis-ml",
    featured: false,
  },
  {
    id: 7,
    title: "Humans vs Zombies",
    tag: "Console · Academic",
    description:
      "An agent-based simulation of human–zombie dynamics built around a polymorphic OOP design with deterministic per-generation rules.",
    category: "Systems",
    techStack: ["C++", "OOP", "Polymorphism"],
    bullets: [
      "Polymorphic Organism base class with Human and Zombie subclasses for movement, breeding, and starvation.",
      "Per-agent \"moved\" flags guarantee a single action per entity per generation.",
      "Memory-safe dynamic entity handling throughout the full simulation lifecycle.",
    ],
    githubUrl: "https://github.com/andbeaver/humans-vs-zombies",
    featured: false,
  },
  {
    id: 8,
    title: "Screensaver Simulation",
    tag: "Desktop · Academic",
    description:
      "An interactive screensaver with animated shapes, real-time collision physics, and dynamic runtime spawning - running at ~60 FPS via double-buffered rendering.",
    category: "Systems",
    techStack: ["C#", "Windows Forms", "OOP", ".NET Framework"],
    bullets: [
      "Polymorphic shape hierarchy with 5 derived types using inheritance for rendering and movement.",
      "AABB collision detection handling both shape-to-shape and wall collisions.",
      "Mouse-driven shape spawning at runtime with boundary clamping and resize handling.",
    ],
    githubUrl: "https://github.com/andbeaver/dynamic-screen-saver",
    featured: false,
  },
  {
    id: 9,
    title: "Async TCP Chat App",
    tag: "Networking · Academic",
    description:
      "An async TCP client/server chat app with event-driven message handling and a custom framing protocol for reliable real-time communication.",
    category: "Systems",
    techStack: ["C#", ".NET Framework", "Windows Forms", "TCP/IP", "Async/Await"],
    bullets: [
      "Async/await patterns for non-blocking network I/O with thread-safe Windows Forms UI updates.",
      "Custom message-framing protocol to handle partial reads and guarantee delivery.",
      "IDisposable pattern for clean shutdown and proper resource management of network streams.",
    ],
    githubUrl: "https://github.com/andbeaver/async-chat-client",
    featured: false,
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

