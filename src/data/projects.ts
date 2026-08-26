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
    demoUrl: "https://email-website-chi.vercel.app/",
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
    demoUrl: "https://epubreader-theta.vercel.app/",
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
    demoUrl: "https://prosemasters-skill.vercel.app/",
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
    demoUrl: "https://ppt-design-md.vercel.app/",
    repoUrl: "https://github.com/LEO0331/ppt-design-md",
    status: "live",
    featured: false
  },
  {
    id: "lighthouse-skill-pack",
    slug: "lighthouse-skill-pack",
    name: "Lighthouse Skill Pack",
    tagline: "Deterministic optimization patterns for Lighthouse score improvements",
    shortDescription:
      "A practical skill pack focused on improving Lighthouse Performance, SEO, Accessibility, and Best Practices with minimal, high-impact fixes.",
    fullDescription:
      "Lighthouse Skill Pack provides reusable optimization workflows and implementation patterns for modern frontend projects. It is designed to help teams apply prioritized fixes for LCP, CLS, and JS execution bottlenecks without sacrificing UX quality.",
    role: "Performance / Frontend Optimization Developer",
    teamType: "solo",
    techStack: ["Lighthouse", "TypeScript", "JavaScript", "Web Performance"],
    categories: ["Developer Tooling", "Performance", "Frontend"],
    features: [
      "Priority-based optimization workflow",
      "Reusable performance fix patterns",
      "LCP and CLS-focused guidance",
      "Developer-oriented documentation"
    ],
    image: "/src/assets/images/projects/lighthouse-skill-pack.png",
    demoUrl: "https://leo0331.github.io/lighthouse-skill-pack/",
    repoUrl: "https://github.com/LEO0331/lighthouse-skill-pack",
    status: "live",
    featured: false
  },
  {
    id: "wordpressparser",
    slug: "wordpressparser",
    name: "WordPress Parser",
    tagline: "Parsing utility for extracting and structuring WordPress content",
    shortDescription:
      "A utility project for parsing WordPress data into cleaner, structured outputs suitable for downstream workflows.",
    fullDescription:
      "WordPress Parser focuses on content extraction and transformation from WordPress sources. It demonstrates practical tooling, data handling, and workflow-oriented implementation for documentation or migration scenarios.",
    role: "Utility / Data Workflow Developer",
    teamType: "solo",
    techStack: ["JavaScript", "Node.js", "Parser Tooling"],
    categories: ["Utility", "Workflow Tool", "Developer Tooling"],
    features: [
      "WordPress content parsing",
      "Structured data output",
      "Workflow-oriented utility design"
    ],
    image: "/src/assets/images/projects/wordpressparser.png",
    demoUrl: "https://wordpressparser.vercel.app/",
    repoUrl: "https://github.com/LEO0331/wordpressparser",
    status: "live",
    featured: false
  },
  {
    id: "wordpress",
    slug: "wordpress",
    name: "WordPress",
    tagline: "WordPress-focused project and implementation workspace",
    shortDescription:
      "A repository centered on WordPress development, customization, and practical website implementation workflows.",
    fullDescription:
      "WordPress is a practical implementation project for content-driven websites and publishing workflows. It is suitable for demonstrating CMS-oriented development, customization capability, and real-world delivery in WordPress ecosystems.",
    role: "Web Developer",
    teamType: "solo",
    techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
    categories: ["Web App", "CMS", "Frontend"],
    features: [
      "WordPress implementation workflow",
      "CMS-oriented customization",
      "Content publishing support"
    ],
    image: "/src/assets/images/projects/wordpress.png",
    demoUrl: "https://leo0331.github.io/wordpress/",
    repoUrl: "https://github.com/LEO0331/wordpress",
    status: "live",
    featured: false
  },
  {
    id: "rednote-gallery",
    slug: "rednote-gallery",
    name: "Rednote Gallery",
    tagline: "Gallery-style web experience for curated visual note content",
    shortDescription:
      "A frontend gallery project focused on clear visual presentation, browsing flow, and lightweight interaction.",
    fullDescription:
      "Rednote Gallery showcases a structured, presentation-first gallery experience built for fast scanning and clean content display. It works well as a portfolio piece for UI organization, responsive layout execution, and user-facing polish.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["React", "TypeScript", "CSS", "UI Design"],
    categories: ["Web App", "Frontend", "Gallery"],
    features: [
      "Gallery-first browsing interface",
      "Responsive layout behavior",
      "Clear content hierarchy"
    ],
    image: "/src/assets/images/projects/rednote-gallery.png",
    demoUrl: "https://leo0331.github.io/rednote-gallery/",
    repoUrl: "https://github.com/LEO0331/rednote-gallery",
    status: "live",
    featured: false
  },
  {
    id: "craftfocus",
    slug: "craftfocus",
    name: "CraftFocus",
    tagline: "Focus-and-sharing app for handmade projects with pixel room progression",
    shortDescription:
      "A productivity-oriented app that helps users stay focused, unlock pixel room items, and share handmade projects with friends.",
    fullDescription:
      "CraftFocus combines focus sessions, visual progression, and lightweight social sharing to support creative habits. It demonstrates product-oriented UX, TypeScript implementation, and GitHub Pages deployment.",
    role: "Product / Frontend Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React Native", "Expo", "Supabase"],
    categories: ["Productivity", "Social App", "Mobile App"],
    features: [
      "Focus timer workflow",
      "Pixel room unlock progression",
      "Handmade project sharing",
      "Live public deployment"
    ],
    image: "/src/assets/images/projects/craftfocus.png",
    demoUrl: "https://leo0331.github.io/craftfocus/",
    repoUrl: "https://github.com/LEO0331/craftfocus",
    status: "live",
    featured: false
  },
  {
    id: "publicsafetydashboard",
    slug: "publicsafetydashboard",
    name: "Public Safety Dashboard",
    tagline: "Full-stack dashboard for Taipei traffic-safety PDF announcements",
    shortDescription:
      "An educational dashboard that ingests Taipei public traffic-safety PDF announcements and presents searchable records, statistics, filters, and map visualization.",
    fullDescription:
      "Public Safety Dashboard demonstrates a full-stack data workflow: Python ingestion for public PDF announcements, SQLite-backed storage, and a Next.js interface for filtering, statistics, and map-based exploration. It is useful as a portfolio project because it connects data processing, backend persistence, and recruiter-visible dashboard UX.",
    role: "Full Stack / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["TypeScript", "Next.js", "SQLite", "Python", "Data Visualization"],
    categories: ["Web App", "Dashboard", "Data Visualization"],
    features: [
      "PDF announcement ingestion workflow",
      "Search and filtering interface",
      "Dashboard statistics",
      "Map-based data visualization"
    ],
    image: "/src/assets/images/projects/publicsafetydashboard.png",
    demoUrl: "https://publicsafetydashboard.onrender.com",
    repoUrl: "https://github.com/LEO0331/publicsafetydashboard",
    status: "live",
    featured: false
  },
  {
    id: "taipei-bin-map",
    slug: "taipei-bin-map",
    name: "Taipei Bin Map",
    tagline: "Mobile-first bilingual map for finding public garbage bins in Taipei",
    shortDescription:
      "A bilingual web app that helps pedestrians find nearby public garbage bins in Taipei through a mobile-first map and search experience.",
    fullDescription:
      "Taipei Bin Map turns public city-service information into a practical, mobile-first utility. It focuses on nearby-bin discovery, bilingual usability, and a PWA-ready front-end structure suitable for quick access while walking around Taipei.",
    role: "Frontend / Civic Tech Developer",
    teamType: "solo",
    techStack: ["TypeScript", "Vite", "CSS", "JavaScript", "Map UI"],
    categories: ["Web App", "Maps", "Civic Tech"],
    features: [
      "Nearby public bin discovery",
      "Mobile-first map experience",
      "Bilingual interface",
      "PWA-ready application structure"
    ],
    image: "/src/assets/images/projects/taipei-bin-map.png",
    demoUrl: "https://taipei-bin-map.vercel.app/",
    repoUrl: "https://github.com/LEO0331/taipei-bin-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-crash-map",
    slug: "taipei-crash-map",
    name: "Taipei Crash Map",
    tagline: "Bilingual dashboard for exploring Taipei traffic accident hotspots",
    shortDescription:
      "A mobile-first map and dashboard for exploring historical Taipei A1/A2 crash points, intersection hotspots, and traffic-safety statistics.",
    fullDescription:
      "Taipei Crash Map turns public traffic-accident records into an accessible bilingual exploration tool. It combines location and time filters, clustered and heat-map views, aggregate factor charts, and procedural traffic datasets in a responsive PWA-ready interface.",
    role: "Frontend / Civic Tech Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Recharts"],
    categories: ["Dashboard", "Maps", "Civic Tech"],
    features: [
      "A1/A2 crash point and hotspot visualization",
      "Time, district, crash-type, and location filters",
      "Aggregate crash-factor charts",
      "Bilingual responsive interface"
    ],
    image: "/src/assets/images/projects/taipei-crash-map.png",
    demoUrl: "https://leo0331.github.io/taipei-crash-map/",
    repoUrl: "https://github.com/LEO0331/taipei-crash-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-faith-map",
    slug: "taipei-faith-map",
    name: "Taipei Faith Map",
    tagline: "Bilingual directory map of registered religious groups in Taipei",
    shortDescription:
      "A mobile-first map for searching and exploring officially registered religious organizations across Taipei.",
    fullDescription:
      "Taipei Faith Map converts public registration and coordinate data into a practical bilingual directory. It demonstrates data conversion, coordinate-system handling, clustered map markers, filtering, and responsive civic-tech interface design.",
    role: "Frontend / Civic Tech Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Proj4"],
    categories: ["Web App", "Maps", "Civic Tech"],
    features: [
      "Registered religious-group directory",
      "Clustered map visualization",
      "Coordinate conversion workflow",
      "Bilingual mobile-first interface"
    ],
    image: "/src/assets/images/projects/taipei-faith-map.png",
    demoUrl: "https://leo0331.github.io/taipei-faith-map/",
    repoUrl: "https://github.com/LEO0331/taipei-faith-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-1999-map",
    slug: "taipei-1999-map",
    name: "Taipei 1999 Map",
    tagline: "Privacy-aware dashboard for Taipei 1999 service request data",
    shortDescription:
      "A bilingual map and dashboard for exploring Taipei 1999 dispatched service requests alongside related public-works datasets.",
    fullDescription:
      "Taipei 1999 Map presents public service-request data through district, time, category, and location filters while deliberately removing private address details. It also connects streetlight maintenance, construction audits, and stop/resume-work records in a mobile-first interface.",
    role: "Frontend / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Papa Parse"],
    categories: ["Dashboard", "Maps", "Civic Tech"],
    features: [
      "1999 service-request map and filters",
      "Privacy-aware location processing",
      "Related public-works data modules",
      "Bilingual responsive experience"
    ],
    image: "/src/assets/images/projects/taipei-1999-map.png",
    demoUrl: "https://leo0331.github.io/taipei-1999-map/",
    repoUrl: "https://github.com/LEO0331/taipei-1999-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-feitsui-water-map",
    slug: "taipei-feitsui-water-map",
    name: "Taipei Feitsui Water Map",
    tagline: "Water-quality and ecology dashboard for the Feitsui Reservoir system",
    shortDescription:
      "A bilingual map and dashboard for exploring Feitsui Reservoir water quality, hydrometeorology, operations, and related ecology datasets.",
    fullDescription:
      "Taipei Feitsui Water Map combines monthly water-quality monitoring with reservoir operations, river conditions, pumping facilities, and historical ecology records. It demonstrates careful public-data transformation, geospatial visualization, charting, and transparent interpretation limits.",
    role: "Frontend / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Recharts"],
    categories: ["Dashboard", "Data Visualization", "Civic Tech"],
    features: [
      "Water-quality monitoring dashboard",
      "Reservoir and river map layers",
      "Operations and hydrometeorology views",
      "Historical ecology data explorers"
    ],
    image: "/src/assets/images/projects/taipei-feitsui-water-map.png",
    demoUrl: "https://leo0331.github.io/taipei-feitsui-water-map/",
    repoUrl: "https://github.com/LEO0331/taipei-feitsui-water-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-zoo-guide",
    slug: "taipei-zoo-guide",
    name: "Taipei Zoo Guide",
    tagline: "Bilingual map and guide for Taipei wildlife and zoo exhibits",
    shortDescription:
      "A mobile-first guide for exploring Taipei Zoo animals, plants, exhibit areas, events, and citywide biodiversity records.",
    fullDescription:
      "Taipei Zoo Guide brings animal, plant, exhibit, event, and historical wildlife-survey datasets into one bilingual experience. Search, filters, detail drawers, maps, summaries, and local exports make the source material easier to explore without overstating historical observations.",
    role: "Frontend / Civic Tech Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Vitest"],
    categories: ["Web App", "Maps", "Education"],
    features: [
      "Animal, plant, exhibit, and event guides",
      "Biodiversity and historical wildlife explorers",
      "Searchable map layers and detail drawers",
      "Bilingual interface with local data export"
    ],
    image: "/src/assets/images/projects/taipei-zoo-guide.png",
    demoUrl: "https://leo0331.github.io/taipei-zoo-guide/",
    repoUrl: "https://github.com/LEO0331/taipei-zoo-guide",
    status: "live",
    featured: false
  },
  {
    id: "taipei-safety-map",
    slug: "taipei-safety-map",
    name: "Taipei Safety Map",
    tagline: "Multi-dataset public safety map and resource dashboard for Taipei",
    shortDescription:
      "A bilingual map and dashboard for exploring Taipei emergency resources, infrastructure, and carefully scoped historical safety records.",
    fullDescription:
      "Taipei Safety Map organizes public emergency, medical, fire, traffic, environmental, and historical incident datasets without producing a misleading combined safety score. It showcases large-scale data ingestion, geospatial layers, privacy-aware presentation, and responsible data communication.",
    role: "Frontend / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Vitest"],
    categories: ["Dashboard", "Maps", "Civic Tech"],
    features: [
      "Emergency resource and infrastructure layers",
      "Multi-dataset filtering and directories",
      "Privacy-aware historical record views",
      "Responsible-use and data-limit guidance"
    ],
    image: "/src/assets/images/projects/taipei-safety-map.png",
    demoUrl: "https://leo0331.github.io/taipei-safety-map/",
    repoUrl: "https://github.com/LEO0331/taipei-safety-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-friendly-food-map",
    slug: "taipei-friendly-food-map",
    name: "Taipei Friendly Food Map",
    tagline: "Bilingual food, friendly-store, and refill-location explorer",
    shortDescription:
      "A mobile-first map for finding Taipei friendly stores, water-refill locations, registered food businesses, and related public food datasets.",
    fullDescription:
      "Taipei Friendly Food Map combines store accessibility tags, water-refill locations, food traceability, hygiene records, green stores, markets, and commercial districts. Its clustered map, searchable directories, filters, and summaries turn fragmented public records into a practical exploration tool.",
    role: "Frontend / Civic Tech Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Open Data"],
    categories: ["Web App", "Maps", "Civic Tech"],
    features: [
      "Friendly-store and water-refill map layers",
      "Searchable food-business directories",
      "Clustered markers and district filters",
      "Bilingual data summaries"
    ],
    image: "/src/assets/images/projects/taipei-friendly-food-map.png",
    demoUrl: "https://leo0331.github.io/taipei-friendly-food-map/",
    repoUrl: "https://github.com/LEO0331/taipei-friendly-food-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-free-wifi-map",
    slug: "taipei-free-wifi-map",
    name: "Taipei Free Wi-Fi Map",
    tagline: "Nearby public Wi-Fi finder with more than 3,000 listed hotspots",
    shortDescription:
      "A bilingual mobile-first map for finding Taipei Free Wi-Fi hotspots by district, type, agency, vendor, and nearby distance.",
    fullDescription:
      "Taipei Free Wi-Fi Map turns the city hotspot registry into an easier nearby-search experience. It combines marker clustering, browser geolocation, distance sorting, rich filters, a paginated directory, and distribution summaries in a static deployment.",
    role: "Frontend / Civic Tech Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "MarkerCluster"],
    categories: ["Web App", "Maps", "Civic Tech"],
    features: [
      "Clustered map with 3,000+ listed hotspots",
      "Nearby search and distance sorting",
      "District, type, agency, and vendor filters",
      "Bilingual hotspot directory"
    ],
    image: "/src/assets/images/projects/taipei-free-wifi-map.png",
    demoUrl: "https://leo0331.github.io/taipei-free-wifi-map/",
    repoUrl: "https://github.com/LEO0331/taipei-free-wifi-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-civic-groups-map",
    slug: "taipei-civic-groups-map",
    name: "Taipei Public Data Explorer",
    tagline: "Searchable bilingual catalogue for Taipei public-service directories",
    shortDescription:
      "A topic-based dashboard for searching, filtering, comparing, and exporting more than 100 Taipei public-data directories.",
    fullDescription:
      "Taipei Public Data Explorer expands beyond its original civic-groups scope into a catalogue of public services, healthcare, welfare, culture, labor, business, and community datasets. It provides dataset-specific filtering, source-field details, CSV export, and visible data-freshness evidence.",
    role: "Frontend / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Open Data"],
    categories: ["Dashboard", "Directory", "Civic Tech"],
    features: [
      "Catalogue of 100+ public-data directories",
      "Dataset-specific search and filters",
      "Source-field details and CSV export",
      "Data freshness and privacy guidance"
    ],
    image: "/src/assets/images/projects/taipei-civic-groups-map.png",
    demoUrl: "https://leo0331.github.io/taipei-civic-groups-map/",
    repoUrl: "https://github.com/LEO0331/taipei-civic-groups-map",
    status: "live",
    featured: false
  },
  {
    id: "taipei-real-estate-dashboard",
    slug: "taipei-real-estate-dashboard",
    name: "Taipei Real Estate Dashboard",
    tagline: "Real-price, housing, and demographic insights across Taipei",
    shortDescription:
      "A mobile-first bilingual dashboard for exploring Taipei real-price records, market trends, land and development data, and demographic context.",
    fullDescription:
      "Taipei Real Estate Dashboard brings together transaction records, monthly and quarterly price indexes, rents, district comparisons, permits, land values, income, demographics, and public-service records. It demonstrates an extensive static-data pipeline and recruiter-visible analytical UI with careful methodology notes.",
    role: "Frontend / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Recharts", "Open Data"],
    categories: ["Dashboard", "Data Visualization", "Civic Tech"],
    features: [
      "Real-price and market trend analysis",
      "District and quarterly comparisons",
      "Land, development, and housing datasets",
      "Demographic context and data-status views"
    ],
    image: "/src/assets/images/projects/taipei-real-estate-dashboard.png",
    demoUrl: "https://leo0331.github.io/taipei-real-estate-dashboard/",
    repoUrl: "https://github.com/LEO0331/taipei-real-estate-dashboard",
    status: "live",
    featured: false
  },
  {
    id: "genomic-data-science-with-galaxy-project",
    slug: "genomic-data-science-with-galaxy-project",
    name: "Genomic Data Science with Galaxy Project",
    tagline: "Interactive genomic variant workflow case-study web app",
    shortDescription:
      "A genomic workflow web app for browser-based VCF exploration, filtering, and CSV export powered by Galaxy-generated results.",
    fullDescription:
      "This project demonstrates practical bioinformatics workflow delivery in a user-facing web interface. It includes variant exploration and filtering features designed for clear result inspection and downstream analysis export.",
    role: "Bioinformatics / Full Stack Developer",
    teamType: "solo",
    techStack: ["TypeScript", "Bioinformatics", "Galaxy", "Web App"],
    categories: ["Web App", "Data Science", "Bioinformatics"],
    features: [
      "Browser-based VCF exploration",
      "Variant filtering workflow",
      "CSV export for downstream analysis"
    ],
    image: "/src/assets/images/projects/genomic-data-science-with-galaxy-project.png",
    demoUrl: "https://genomic-data-science-with-galaxy-pr.vercel.app/",
    repoUrl: "https://github.com/LEO0331/Genomic-Data-Science-with-Galaxy-Project",
    status: "live",
    featured: false
  },
  {
    id: "thalassemia-seq-analysis",
    slug: "thalassemia-seq-analysis",
    name: "Thalassemia SEQ Analysis",
    tagline: "Sanger .ab1 upload and primer-specific thalassemia mutation analysis",
    shortDescription:
      "Upload .ab1 Sanger files, run primer-specific thalassemia mutation checks, review QC/mutation results, and export JSON reports.",
    fullDescription:
      "Thalassemia SEQ Analysis focuses on a domain-specific sequence analysis workflow with practical reporting output. It showcases applied bioinformatics tooling in a usable browser interface for mutation-focused review.",
    role: "Bioinformatics Developer",
    teamType: "solo",
    techStack: ["Python", "Bioinformatics", "Sanger Sequencing", "Web App"],
    categories: ["Web App", "Bioinformatics", "Healthcare"],
    features: [
      "AB1 file upload pipeline",
      "Primer-specific mutation checks",
      "QC and mutation result display",
      "JSON report export"
    ],
    image: "/src/assets/images/projects/thalassemia-seq-analysis.png",
    demoUrl: "https://thalassemia-seq-analysis.vercel.app/",
    repoUrl: "https://github.com/LEO0331/Thalassemia_SEQ_analysis",
    status: "live",
    featured: false
  }
];
