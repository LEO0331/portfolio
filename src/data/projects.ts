import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "assistanthub",
    slug: "assistanthub",
    name: "AssistantHub",
    tagline: "Directory-style web application for discovering personal assistants",
    shortDescription:
      "A web application designed to help users discover personal assistants through a structured and accessible interface.",
    fullDescription:
      "AssistantHub is a portfolio project focused on presenting assistant discovery in a usable, straightforward interface. It demonstrates frontend implementation, information presentation, and static deployment.",
    role: "Frontend / Full Stack Portfolio Project",
    teamType: "solo",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    categories: ["Web App", "Frontend", "Directory"],
    features: [
      "Project listing interface",
      "User-focused browsing experience",
      "Responsive layout",
      "Static deployment"
    ],
    challenges: ["Designing a clean browsing experience for service discovery"],
    outcomes: ["Working public demo available"],
    image: "/src/assets/images/projects/assistanthub.png",
    demoUrl: "https://leo0331.github.io/AssistantHub/",
    repoUrl: "https://github.com/LEO0331/AssistantHub",
    status: "live",
    featured: true
  },
  {
    id: "circles-app",
    slug: "circles-app",
    name: "Circles App",
    tagline: "React app built from a wireframe with JSON loading and filtering",
    shortDescription:
      "A React application built from a provided wireframe that fetches JSON data, shows loading state, and implements filter functionality.",
    fullDescription:
      "Circles App demonstrates UI implementation from requirements, client-side filtering, and handling asynchronous data states in a clean component structure.",
    role: "Frontend Engineer",
    teamType: "solo",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    categories: ["Web App", "Frontend", "UI"],
    features: [
      "Wireframe-based implementation",
      "JSON data fetching",
      "Loading state handling",
      "Client-side filtering"
    ],
    challenges: ["Translating wireframe requirements into a working responsive interface"],
    outcomes: ["Demonstrates structured React implementation"],
    image: "/src/assets/images/projects/circles-app.png",
    demoUrl: "https://leo0331.github.io/circles-app/",
    repoUrl: "https://github.com/LEO0331/circles-app",
    status: "live",
    featured: true
  },
  {
    id: "inbodysimpletracker",
    slug: "inbodysimpletracker",
    name: "InBody Simple Tracker",
    tagline: "Flutter fitness tracker turning InBody reports into progress charts",
    shortDescription:
      "A Flutter-based fitness tracker that transforms InBody reports into actionable progress charts and clearer progress visibility.",
    fullDescription:
      "InBody Simple Tracker focuses on making fitness measurement data more usable by turning report data into progress-oriented tracking views. It demonstrates mobile-focused UI thinking and data presentation.",
    role: "Flutter Developer",
    teamType: "solo",
    techStack: ["Flutter", "Dart"],
    categories: ["Mobile App", "Health", "Data Visualization"],
    features: [
      "Progress charting",
      "Structured fitness tracking",
      "Data-to-visual insight transformation",
      "Live public demo"
    ],
    challenges: ["Presenting personal fitness metrics in a simple and actionable format"],
    outcomes: ["Working public demo available"],
    image: "/src/assets/images/projects/inbodysimpletracker.png",
    demoUrl: "https://leo0331.github.io/inbodysimpletracker/",
    repoUrl: "https://github.com/LEO0331/inbodysimpletracker",
    status: "live",
    featured: true
  },
  {
    id: "passportcomparison",
    slug: "passportcomparison",
    name: "Passport Comparison",
    tagline: "Comparison tool for passport-related data and access scenarios",
    shortDescription:
      "A comparison-oriented web app for presenting passport-related information in a clearer side-by-side format.",
    fullDescription:
      "Passport Comparison is a data presentation project that emphasizes structured comparison and quick information review through a simple browser-based interface.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Web App", "Comparison Tool", "Data UI"],
    features: ["Comparison layout", "Browser-based interaction", "Static deployment"],
    image: "/src/assets/images/projects/passportcomparison.png",
    demoUrl: "https://leo0331.github.io/passportcomparison/",
    repoUrl: "https://github.com/LEO0331/passportcomparison",
    status: "live",
    featured: false
  },
  {
    id: "simpletaxautoextraction",
    slug: "simpletaxautoextraction",
    name: "Simple Tax Auto Extraction",
    tagline: "Utility project for simplifying tax-related extraction workflows",
    shortDescription:
      "A browser-based utility project focused on reducing manual handling in tax-related extraction scenarios.",
    fullDescription:
      "This project demonstrates practical workflow simplification and utility-focused UI design for handling repetitive tasks more efficiently.",
    role: "Frontend / Utility Project Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Utility", "Workflow Tool", "Web App"],
    features: ["Task simplification", "Practical utility interface", "Static deployment"],
    image: "/src/assets/images/projects/simpletaxautoextraction.png",
    demoUrl: "https://leo0331.github.io/simpletaxautoextraction/",
    repoUrl: "https://github.com/LEO0331/simpletaxautoextraction",
    status: "live",
    featured: false
  },
  {
    id: "warmthfromafar",
    slug: "warmthfromafar",
    name: "Warmth From Afar",
    tagline: "User-facing project centered on thoughtful digital experience design",
    shortDescription:
      "A user-facing web project with an emphasis on presentation, accessibility, and clear interaction flow.",
    fullDescription:
      "Warmth From Afar demonstrates front-end design execution and a polished browser-based experience for a themed user-facing application.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Web App", "Frontend", "UX"],
    features: ["Presentation-focused design", "Themed UI", "Static deployment"],
    image: "/src/assets/images/projects/warmthfromafar.png",
    demoUrl: "https://leo0331.github.io/WarmthFromAfar/",
    repoUrl: "https://github.com/LEO0331/WarmthFromAfar",
    status: "live",
    featured: false
  },
  {
    id: "sharpface",
    slug: "sharpface",
    name: "Sharpface",
    tagline: "Interactive frontend project with a live browser deployment",
    shortDescription:
      "A browser-based project demonstrating interactive front-end implementation and public deployment.",
    fullDescription:
      "Sharpface is a portfolio project useful for showcasing UI development, browser interaction, and deployment practices.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Web App", "Frontend"],
    features: ["Interactive UI", "Static deployment"],
    image: "/src/assets/images/projects/sharpface.png",
    demoUrl: "https://leo0331.github.io/sharpface/",
    repoUrl: "https://github.com/LEO0331/sharpface",
    status: "live",
    featured: false
  },
  {
    id: "boxmatch",
    slug: "boxmatch",
    name: "Boxmatch",
    tagline: "Food surplus matching concept for exhibitions and nearby pickup",
    shortDescription:
      "A concept app aimed at reducing food waste by helping organizers and nearby users reserve surplus meals and drinks.",
    fullDescription:
      "Boxmatch focuses on a socially useful scenario: reducing food waste through timed reservation and pickup coordination. It is suitable as a portfolio piece because it demonstrates product thinking as well as interface design.",
    role: "Frontend / Product Project Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Web App", "Social Impact", "Product Concept"],
    features: [
      "Food surplus matching concept",
      "Reservation-oriented UX",
      "Static deployment"
    ],
    image: "/src/assets/images/projects/boxmatch.png",
    demoUrl: "https://leo0331.github.io/boxmatch/",
    repoUrl: "https://github.com/LEO0331/boxmatch",
    status: "live",
    featured: true
  },
  {
    id: "warmmemo",
    slug: "warmmemo",
    name: "Warm Memo",
    tagline: "Product-oriented app concept focused on memorial planning support",
    shortDescription:
      "A product concept aimed at reducing paperwork and simplifying planning during emotionally difficult moments.",
    fullDescription:
      "Warm Memo is positioned as a thoughtful product concept with a service-oriented user experience. It is a strong portfolio candidate because it shows design intent, product framing, and implementation discipline.",
    role: "Product / Frontend Developer",
    teamType: "solo",
    techStack: ["Dart", "Flutter"],
    categories: ["Product Concept", "Mobile App", "Service Design"],
    features: ["Service-focused experience", "Product framing", "Live deployment"],
    image: "/src/assets/images/projects/warmmemo.png",
    demoUrl: "https://leo0331.github.io/warmmemo/",
    repoUrl: "https://github.com/LEO0331/warmmemo",
    status: "live",
    featured: true
  },
  {
    id: "projects-drafts",
    slug: "projects-drafts",
    name: "Projects Drafts",
    tagline: "Sandbox for project concepts and UI experimentation",
    shortDescription:
      "A working space for testing and presenting draft project concepts in a browser-accessible format.",
    fullDescription:
      "Projects Drafts acts as an experimentation area and can be used in the portfolio as a lower-priority supporting project.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Sandbox", "Experimentation"],
    features: ["Draft concept presentation", "Browser deployment"],
    image: "/src/assets/images/projects/projects-drafts.png",
    demoUrl: "https://leo0331.github.io/projects_drafts/",
    repoUrl: "https://github.com/LEO0331/projects_drafts",
    status: "live",
    featured: false
  },
  {
    id: "leave-request",
    slug: "leave-request",
    name: "Leave Request",
    tagline: "Interactive leave management system built with React, TypeScript, and MUI",
    shortDescription:
      "An interactive leave management system with dynamic validation, automated duration calculation, and data handling.",
    fullDescription:
      "Leave Request is a stronger engineering portfolio piece because it combines React, TypeScript, UI component work, and more structured business logic around forms and validation.",
    role: "Frontend Engineer",
    teamType: "solo",
    techStack: ["React", "TypeScript", "MUI", "HTML"],
    categories: ["Business App", "Frontend", "Forms"],
    features: [
      "Dynamic form validation",
      "Automated duration calculation",
      "Interactive business workflow UI"
    ],
    image: "/src/assets/images/projects/leave-request.png",
    demoUrl: "https://leo0331.github.io/LeaveRequest/",
    repoUrl: "https://github.com/LEO0331/LeaveRequest",
    status: "live",
    featured: true
  },
  {
    id: "resume-vault",
    slug: "resume-vault",
    name: "Resume Vault",
    tagline: "Portfolio-supporting app related to resume or document presentation",
    shortDescription:
      "A browser-based project related to structured document or resume presentation.",
    fullDescription:
      "Resume Vault can be presented as a supporting utility project that aligns well with professional workflows and document-focused user needs.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Utility", "Documents", "Web App"],
    features: ["Document-oriented UI", "Static deployment"],
    image: "/src/assets/images/projects/resume-vault.png",
    demoUrl: "https://leo0331.github.io/resume_vault/",
    repoUrl: "https://github.com/LEO0331/resume_vault",
    status: "live",
    featured: false
  },
  {
    id: "amazon-app",
    slug: "amazon-app",
    name: "Amazon App",
    tagline: "Frontend commerce-style interface project",
    shortDescription:
      "A browser-based project inspired by commerce-style application patterns and interface structure.",
    fullDescription:
      "Amazon App is useful as a front-end showcase project for layout composition, component thinking, and UI pattern replication.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Web App", "Frontend", "E-commerce UI"],
    features: ["Commerce-style interface patterns", "Static deployment"],
    image: "/src/assets/images/projects/amazon-app.png",
    demoUrl: "https://leo0331.github.io/amazon-app/",
    repoUrl: "https://github.com/LEO0331/amazon-app",
    status: "live",
    featured: false
  },
  {
    id: "toyrobot",
    slug: "toyrobot",
    name: "ToyRobot",
    tagline: "Simulation program for a toy robot moving on a tabletop",
    shortDescription:
      "A simulation-style application that models a toy robot moving on a tabletop according to defined commands.",
    fullDescription:
      "ToyRobot is a useful portfolio project for demonstrating programming logic, state handling, and rule-based movement behavior.",
    role: "JavaScript Developer",
    teamType: "solo",
    techStack: ["JavaScript", "HTML", "CSS"],
    categories: ["Simulation", "Logic", "Frontend"],
    features: ["Rule-based simulation", "Command-driven behavior", "Browser deployment"],
    image: "/src/assets/images/projects/toyrobot.png",
    demoUrl: "https://leo0331.github.io/ToyRobot/",
    repoUrl: "https://github.com/LEO0331/ToyRobot",
    status: "live",
    featured: true
  },
  {
    id: "email-website",
    slug: "email-website",
    name: "Email Website",
    tagline: "Live-deployed project hosted on Vercel",
    shortDescription:
      "A web project deployed on Vercel, useful as a portfolio piece showing deployment beyond GitHub Pages.",
    fullDescription:
      "Email Website broadens the hosting profile of the portfolio by demonstrating that projects are not limited to GitHub Pages and can also be deployed on Vercel.",
    role: "Frontend / Web Developer",
    teamType: "solo",
    techStack: ["React", "TypeScript", "Vercel"],
    categories: ["Web App", "Deployment", "Frontend"],
    features: ["Vercel deployment", "Live public demo"],
    image: "/src/assets/images/projects/email-website.png",
    demoUrl: "https://email-website-hunys3mr1-leo0331s-projects.vercel.app/",
    repoUrl: "https://github.com/LEO0331/email_website",
    status: "live",
    featured: false
  },
  {
    id: "robotfriends",
    slug: "robotfriends",
    name: "RobotFriends",
    tagline: "Frontend project for interactive browser-based exploration",
    shortDescription:
      "A public browser-based front-end project suitable for demonstrating interactivity and interface implementation.",
    fullDescription:
      "RobotFriends is a familiar portfolio-style front-end project that can still serve as evidence of React and UI skills if presented cleanly.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    categories: ["Frontend", "Web App"],
    features: ["Interactive browser UI", "Live public demo"],
    image: "/src/assets/images/projects/robotfriends.png",
    demoUrl: "https://leo0331.github.io/RobotFriends/",
    repoUrl: "https://github.com/LEO0331/RobotFriends",
    status: "live",
    featured: false
  },
  {
    id: "epubreader",
    slug: "epubreader",
    name: "EPUB Reader",
    tagline: "Reader-style web app deployed on Vercel",
    shortDescription: "A live-deployed reader-focused project hosted on Vercel.",
    fullDescription:
      "EPUB Reader expands the portfolio with a reader-oriented experience and demonstrates another deployed web application outside GitHub Pages.",
    role: "Frontend / Web Developer",
    teamType: "solo",
    techStack: ["React", "TypeScript", "Vercel"],
    categories: ["Web App", "Reader", "Frontend"],
    features: ["Reader-oriented interface", "Vercel deployment", "Live public demo"],
    image: "/src/assets/images/projects/epubreader.png",
    demoUrl: "https://epubreader-az8qiix07-leo0331s-projects.vercel.app/",
    repoUrl: "https://github.com/LEO0331/epubreader",
    status: "live",
    featured: false
  },
  {
    id: "prosemasters-skill",
    slug: "prosemasters-skill",
    name: "ProseMasters Skill",
    tagline: "Reusable Codex/Claude skill package for writing quality workflows",
    shortDescription:
      "A reusable skill repository focused on structured writing workflows and practical prompt execution patterns.",
    fullDescription:
      "ProseMasters Skill is a tooling-oriented project that packages writing and workflow guidance into reusable skill artifacts for AI coding assistants.",
    role: "Tooling / Prompt Engineer",
    teamType: "solo",
    techStack: ["Markdown", "Prompt Engineering", "GitHub"],
    categories: ["Developer Tooling", "AI Workflow", "Documentation"],
    features: [
      "Reusable skill artifact structure",
      "Workflow-oriented prompt templates",
      "Versioned GitHub distribution"
    ],
    image: "/src/assets/images/projects/prosemasters-skill.png",
    repoUrl: "https://github.com/LEO0331/prosemasters-skill",
    status: "live",
    featured: false
  },
  {
    id: "skill-gen",
    slug: "skill-gen",
    name: "Skill Gen",
    tagline: "Tooling utility to turn frontend assets into reusable skill artifacts",
    shortDescription:
      "Turn index.html, style.css, and script.js into reusable skills.md artifacts.",
    fullDescription:
      "Skill Gen is a tooling utility in the projects_drafts workspace designed to convert static frontend files into reusable skills.md artifacts for repeatable AI-assisted workflows.",
    role: "Tooling / Frontend Developer",
    teamType: "solo",
    techStack: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    categories: ["Developer Tooling", "Workflow Tool", "Web App"],
    features: [
      "Static asset to skill artifact transformation",
      "Reusable output for AI workflows",
      "Browser-based deployment"
    ],
    image: "/src/assets/images/projects/skill-gen.png",
    demoUrl: "https://leo0331.github.io/projects_drafts/",
    repoUrl: "https://github.com/LEO0331/projects_drafts/tree/main/tools/skill-gen",
    status: "live",
    featured: false
  },
  {
    id: "ppt-design-md",
    slug: "ppt-design-md",
    name: "PPT Design MD",
    tagline: "Markdown-first workflow for structured slide and presentation design",
    shortDescription:
      "A repository focused on building presentation content through markdown-driven structure and reusable design patterns.",
    fullDescription:
      "PPT Design MD is a workflow-oriented project for creating and organizing presentation assets with markdown-based authoring. It demonstrates documentation discipline, reusable structure, and practical content-design tooling.",
    role: "Tooling / Documentation Developer",
    teamType: "solo",
    techStack: ["Markdown", "Documentation", "GitHub"],
    categories: ["Developer Tooling", "Documentation", "Workflow Tool"],
    features: [
      "Markdown-first content workflow",
      "Reusable presentation structure",
      "Version-controlled collaboration via GitHub"
    ],
    image: "/src/assets/images/projects/ppt-design-md.png",
    repoUrl: "https://github.com/LEO0331/ppt-design-md",
    status: "live",
    featured: false
  }
];
