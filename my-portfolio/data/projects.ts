export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management System",
    description:
      "A full-featured inventory tracking application with CRUD operations, search, filtering, and summary reporting. Built to handle real-world stock management workflows for small businesses.",
    techStack: ["Python", "SQLite", "Tkinter"],
    githubUrl: "https://github.com/andrewbeaver",
  },
  {
    id: 2,
    title: "Student Records CLI",
    description:
      "Command-line application for managing student records, grades, and coursework with persistent file-based storage. Designed with a clean OOP architecture and input validation.",
    techStack: ["Python", "CSV", "OOP"],
    githubUrl: "https://github.com/andrewbeaver",
  },
  {
    id: 3,
    title: "Data Analysis Tool",
    description:
      "Exploratory data analysis utility that reads structured CSV datasets and produces summary statistics, frequency distributions, and basic visualizations via the terminal.",
    techStack: ["Python", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/andrewbeaver",
  },
  {
    id: 4,
    title: "Network Scanner Utility",
    description:
      "Lightweight network diagnostic script that identifies active hosts and open ports on a local subnet. Outputs structured results for quick analysis and troubleshooting.",
    techStack: ["Python", "Socket", "Networking"],
    githubUrl: "https://github.com/andrewbeaver",
  },
];
