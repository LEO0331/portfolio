import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "assistanthub",
    slug: "assistanthub",
    name: "AssistantHub Talent Pool",
    tagline: "Assistant discovery, shortlisting, and local hiring pipelines",
    shortDescription:
      "A React talent-pool demo with role, availability, and rate filters, shortlists, and a local hiring pipeline.",
    fullDescription:
      "AssistantHub Talent Pool supports seeded talent generation, detail drawers, hiring inquiries, CSV/JSON portability, and virtualized browsing of large demo datasets.",
    role: "Frontend / Full Stack Portfolio Project",
    teamType: "solo",
    techStack: ["React", "JavaScript", "Leaflet"],
    categories: ["Web App", "Frontend", "Directory"],
    features: [
      "Talent filters and shortlists",
      "Local hiring status pipeline",
      "Seeded demo data and virtualized lists",
      "CSV and JSON import/export"
    ],
    challenges: ["Designing a clean browsing experience for service discovery"],
    outcomes: ["Working public demo available"],
    image: "/src/assets/images/projects/assistanthub.png",
    demoUrl: "https://leo0331.github.io/AssistantHub/",
    repoUrl: "https://github.com/LEO0331/AssistantHub",
    status: "live",
    featured: false
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
    featured: false
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
    featured: false
  },
  {
    id: "passportcomparison",
    slug: "passportcomparison",
    name: "Passport Index Toolbox",
    tagline: "Compare passport strength, track rankings, and export PDF reports",
    shortDescription:
      "A Flutter toolbox for comparing up to five passports, exploring historical rankings, and saving favorite comparison snapshots.",
    fullDescription:
      "Passport Index Toolbox presents visa-access differences side by side, supports historical rank tracking, and exports full or differences-only PDF reports.",
    role: "Flutter Developer",
    teamType: "solo",
    techStack: ["Flutter", "Dart"],
    categories: ["Web App", "Comparison Tool", "Data Visualization"],
    features: [
      "Compare up to five passports",
      "Historical ranking views",
      "Favorite comparison snapshots",
      "Full and differences-only PDF reports"
    ],
    image: "/src/assets/images/projects/passportcomparison.png",
    demoUrl: "https://leo0331.github.io/passportcomparison/",
    repoUrl: "https://github.com/LEO0331/passportcomparison",
    status: "live",
    featured: false
  },
  {
    id: "simpletaxautoextraction",
    slug: "simpletaxautoextraction",
    name: "Tax Auto Extraction",
    tagline: "Turn rental-property PDF statements into categorized tax records",
    shortDescription:
      "A Flutter app that extracts rental income and expenses from property-management PDF statements and maps them to ATO worksheet categories.",
    fullDescription:
      "Tax Auto Extraction lets Australian property owners review extracted values, save records with Firebase, and compare income and expenses across financial years.",
    role: "Flutter / Utility Developer",
    teamType: "solo",
    techStack: ["Flutter", "Dart", "Firebase"],
    categories: ["Web App", "Utility", "Data Visualization"],
    features: [
      "PDF income and expense extraction",
      "ATO worksheet category mapping",
      "Manual review and editing",
      "Financial-year comparisons"
    ],
    image: "/src/assets/images/projects/simpletaxautoextraction.png",
    demoUrl: "https://leo0331.github.io/simpletaxautoextraction/",
    repoUrl: "https://github.com/LEO0331/simpletaxautoextraction",
    status: "live",
    featured: false
  },
  {
    id: "warmthfromafar",
    slug: "warmthfromafar",
    name: "WanderStamp",
    tagline: "Connect travelers and recipients through handwritten postcards",
    shortDescription:
      "A Flutter Web app that connects travelers with people around the world to share postcards, encouragement, and travel stories.",
    fullDescription:
      "WanderStamp helps people find meaningful connections through handwritten postcards, bringing traveler and recipient workflows into a browser-based experience.",
    role: "Flutter Developer",
    teamType: "solo",
    techStack: ["Flutter", "Dart", "Firebase"],
    categories: ["Web App", "Social Impact", "Travel"],
    features: ["Traveler and recipient workflows", "Postcard sharing", "Travel stories and encouragement"],
    image: "/src/assets/images/projects/warmthfromafar.png",
    demoUrl: "https://leo0331.github.io/WanderStamp/",
    repoUrl: "https://github.com/LEO0331/WarmthFromAfar",
    status: "live",
    featured: false
  },
  {
    id: "sharpface",
    slug: "sharpface",
    name: "CNA Practice",
    tagline: "Computer-network past questions and guided revision",
    shortDescription:
      "An independent study app for University of Adelaide Computer Networks and Applications historical exam questions and revision notes.",
    fullDescription:
      "CNA Practice organizes 2013–2015 past questions by year and topic, with guided recall, answer approaches, bookmarks, and locally saved study progress.",
    role: "Frontend / Education App Developer",
    teamType: "solo",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    categories: ["Web App", "Education", "Study Tool"],
    features: [
      "Year and topic question browsing",
      "Guided recall and answer notes",
      "Bookmarks and reviewed progress",
      "Browser-local study state"
    ],
    image: "/src/assets/images/projects/sharpface.png",
    demoUrl: "https://leo0331.github.io/cna-practice/",
    repoUrl: "https://github.com/LEO0331/cna-practice",
    status: "live",
    featured: true
  },
  {
    id: "boxmatch",
    slug: "boxmatch",
    name: "Boxmatch",
    tagline: "Food surplus matching concept for exhibitions and nearby pickup",
    shortDescription:
      "A surplus-food matching app for exhibitions, where organizers post leftover meals and nearby people reserve pickup windows.",
    fullDescription:
      "Boxmatch combines a listing feed and map, enterprise posting, recipient reservations, and pickup codes to coordinate surplus-food handoffs.",
    role: "Product / Flutter Developer",
    teamType: "solo",
    techStack: ["Flutter", "Dart", "Firebase"],
    categories: ["Web App", "Social Impact", "Product Concept"],
    features: [
      "Surplus-food listings and map",
      "Enterprise posting flow",
      "Reservation and pickup windows",
      "Pickup handoff codes"
    ],
    image: "/src/assets/images/projects/boxmatch.png",
    demoUrl: "https://leo0331.github.io/boxmatch/",
    repoUrl: "https://github.com/LEO0331/boxmatch",
    status: "live",
    featured: false
  },
  {
    id: "warmmemo",
    slug: "warmmemo",
    name: "WarmMemo",
    tagline: "Memorial pages, digital obituaries, and service delivery workflows",
    shortDescription:
      "A Flutter Web and Firebase app for families and funeral-service teams to prepare memorial content and manage service orders.",
    fullDescription:
      "WarmMemo combines shareable memorial pages and QR codes, obituary drafting and export, planning tools, and an administrator workspace for orders, suppliers, and delivery milestones.",
    role: "Product / Frontend Developer",
    teamType: "solo",
    techStack: ["Flutter", "Dart", "Firebase"],
    categories: ["Web App", "Service Design", "Workflow Tool"],
    features: [
      "Shareable memorial pages and QR codes",
      "Digital obituary drafting and export",
      "Service orders and notifications",
      "Supplier and delivery administration"
    ],
    image: "/src/assets/images/projects/warmmemo.png",
    demoUrl: "https://leo0331.github.io/warmmemo/",
    repoUrl: "https://github.com/LEO0331/warmmemo",
    status: "live",
    featured: false
  },
  {
    id: "leave-request",
    slug: "leave-request",
    name: "Leave Management System",
    tagline: "Role-aware leave approvals, balances, and reporting",
    shortDescription:
      "A React, TypeScript, and MUI leave-management demo with employee and manager actions, balance-aware validation, and 10,000 seeded requests.",
    fullDescription:
      "Leave Management System tracks approval states and audit history, calculates business-day durations, supports searchable tables and CSV import/export, and validates requests against leave balances.",
    role: "Frontend Engineer",
    teamType: "solo",
    techStack: ["React", "TypeScript", "MUI"],
    categories: ["Business App", "Frontend", "Form System"],
    features: [
      "Employee and manager approval workflow",
      "Leave balances and business-day validation",
      "Request audit history",
      "Searchable tables and CSV portability"
    ],
    image: "/src/assets/images/projects/leave-request.png",
    demoUrl: "https://leo0331.github.io/LeaveRequest/",
    repoUrl: "https://github.com/LEO0331/LeaveRequest",
    status: "live",
    featured: false
  },
  {
    id: "resume-vault",
    slug: "resume-vault",
    name: "Resume Vault",
    tagline: "Turn reusable career entries into tailored resumes",
    shortDescription:
      "A bilingual local-first app that matches reusable career entries to job descriptions and generates tailored resumes.",
    fullDescription:
      "Resume Vault offers an Experience Bank, simple and advanced workflows, ATS templates, job-description import, Markdown and Obsidian export, and JSON state portability.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["React", "TypeScript", "Vite"],
    categories: ["Web App", "Documents", "Utility"],
    features: [
      "Reusable Experience Bank",
      "Job-description matching",
      "ATS resume templates",
      "Markdown, Obsidian, and JSON export"
    ],
    image: "/src/assets/images/projects/resume-vault.png",
    demoUrl: "https://leo0331.github.io/resume_vault/",
    repoUrl: "https://github.com/LEO0331/resume_vault",
    status: "live",
    featured: false
  },
  {
    id: "amazon-app",
    slug: "amazon-app",
    name: "Family Cabinet",
    tagline: "A living archive of family-made objects and collected keepsakes",
    shortDescription:
      "A bilingual digital archive for documenting objects a family makes, keeps, and collects, including their stories and history.",
    fullDescription:
      "Family Cabinet presents handmade and collected objects through searchable archive records, detail pages, and URL-preserved filters. The public collection uses fictional demonstration objects and illustrations.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["Astro", "TypeScript", "HTML", "CSS"],
    categories: ["Web App", "Archive", "Frontend"],
    features: [
      "Made and collected object records",
      "Search and URL-preserved filters",
      "Object stories and history",
      "English and Traditional Chinese routes"
    ],
    image: "/src/assets/images/projects/amazon-app.png",
    demoUrl: "https://leo0331.github.io/family-cabinet/",
    repoUrl: "https://github.com/LEO0331/family-cabinet",
    status: "live",
    featured: false
  },
  {
    id: "toyrobot",
    slug: "toyrobot",
    name: "Toy Robot",
    tagline: "Simulation program for a toy robot moving on a tabletop",
    shortDescription:
      "A simulation-style application that models a toy robot moving on a tabletop according to defined commands.",
    fullDescription:
      "Toy Robot shares a command engine between a CLI simulator and an interactive browser game, with command scripts, demo presets, and a live 6×6 board.",
    role: "JavaScript Developer",
    teamType: "solo",
    techStack: ["JavaScript", "HTML", "CSS"],
    categories: ["Simulation", "Logic", "Frontend"],
    features: ["Rule-based simulation", "Command-driven behavior", "Browser deployment"],
    image: "/src/assets/images/projects/toyrobot.png",
    demoUrl: "https://leo0331.github.io/ToyRobot/",
    repoUrl: "https://github.com/LEO0331/ToyRobot",
    status: "live",
    featured: false
  },
  {
    id: "email-website",
    slug: "email-website",
    name: "Competition Practice",
    tagline: "Accessible environmental-knowledge quiz practice",
    shortDescription:
      "A Traditional Chinese quiz app designed for older learners, with large text, simple controls, and environmental-knowledge question banks.",
    fullDescription:
      "Competition Practice supports question-by-question feedback, wrong-answer review, locally saved progress, and source-preserving environmental study notes and image cards.",
    role: "Frontend / Web Developer",
    teamType: "solo",
    techStack: ["Next.js", "React", "TypeScript"],
    categories: ["Web App", "Education", "Accessibility"],
    features: [
      "Large text and simple quiz controls",
      "Answer feedback and wrong-answer review",
      "Browser-local progress",
      "Source-linked notes and image cards"
    ],
    image: "/src/assets/images/projects/email-website.png",
    demoUrl: "https://leo0331.github.io/competition-practice/",
    repoUrl: "https://github.com/LEO0331/competition-practice",
    status: "live",
    featured: false
  },
  {
    id: "robotfriends",
    slug: "robotfriends",
    name: "Gridline",
    tagline: "Investigate data-center buildout through dated primary-source evidence",
    shortDescription:
      "A bilingual research dashboard connecting grid demand, infrastructure project records, company disclosures, and market-price context.",
    fullDescription:
      "Gridline brings EIA load records, verified project milestones, SEC company facts, and descriptive price analysis into a source-first research workflow, with dates and data-health gaps visible.",
    role: "Full Stack / Research Dashboard Developer",
    teamType: "solo",
    techStack: ["React", "JavaScript", "Node.js", "Supabase"],
    categories: ["Web App", "Dashboard", "Data Visualization"],
    features: [
      "Grid-demand evidence",
      "Dated infrastructure milestones",
      "SEC company disclosures",
      "Source dates and data-health tracking"
    ],
    image: "/src/assets/images/projects/robotfriends.png",
    demoUrl: "https://leo0331.github.io/Gridline/",
    repoUrl: "https://github.com/LEO0331/Gridline",
    status: "live",
    featured: true
  },
  {
    id: "epubreader",
    slug: "epubreader",
    name: "Book QA Library",
    tagline: "Private-library ingestion and citation-grounded answers",
    shortDescription: "A local-first bilingual library system for ingesting EPUB and web sources, inspecting parsed content, and asking questions with citations.",
    fullDescription:
      "Book QA Library combines a FastAPI ingestion and retrieval backend with a Next.js interface. Parser mode supports content inspection; API mode adds generated artifacts, grounded Q&A, collections, and exports.",
    role: "Full Stack / AI App Developer",
    teamType: "solo",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "Chroma"],
    categories: ["Web App", "AI Workflow", "Documents"],
    features: [
      "EPUB and web ingestion",
      "Section and chunk inspection",
      "Citation-grounded Q&A",
      "Artifact and collection exports"
    ],
    image: "/src/assets/images/projects/epubreader.png",
    demoUrl: "https://epubreader-theta.vercel.app/",
    repoUrl: "https://github.com/LEO0331/epubreader",
    status: "live",
    featured: false
  },
  {
    id: "prosemasters-skill",
    slug: "prosemasters-skill",
    name: "World Author Persona Builder",
    tagline: "Distill historical writing into reusable literary-persona skills",
    shortDescription:
      "A tool for turning historical texts, biographies, and commentary into structured master-persona skills and wiki artifacts.",
    fullDescription:
      "World Author Persona Builder combines author identity, literary memory, values, and writing traits through form or JSON input, then generates reusable SKILL.md and wiki.md outputs.",
    role: "Tooling / Prompt Engineer",
    teamType: "solo",
    techStack: ["Python", "JavaScript"],
    categories: ["Developer Tool", "AI Workflow", "Documents"],
    features: [
      "Author identity and persona forms",
      "Historical-source classification",
      "JSON import/export",
      "SKILL.md and wiki.md generation"
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
    name: "3-File to SKILL.md Generator",
    tagline: "Tooling utility to turn frontend assets into reusable skill artifacts",
    shortDescription:
      "Turn index.html, style.css, and script.js into reusable SKILL.md artifacts.",
    fullDescription:
      "3-File to SKILL.md Generator is a tooling utility in the projects_drafts workspace designed to convert static frontend files into reusable SKILL.md artifacts for repeatable AI-assisted workflows.",
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
    name: "pptx-design-md",
    tagline: "Extract reusable visual rules from PowerPoint decks",
    shortDescription:
      "A tool that analyzes one or more PowerPoint files and generates editable design.md rules and structured analysis.json output.",
    fullDescription:
      "pptx-design-md extracts colors, typography, spacing, and recurring layout patterns from presentations, with batch analysis, a Markdown editor, and downloadable design artifacts.",
    role: "Tooling / Documentation Developer",
    teamType: "solo",
    techStack: ["Python", "FastAPI", "JavaScript"],
    categories: ["Developer Tool", "Documents", "Workflow Tool"],
    features: [
      "Single and batch PPTX analysis",
      "Color and typography extraction",
      "Editable design.md output",
      "Structured analysis.json export"
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
    name: "WordPress Persona Parser",
    tagline: "Turn blog sources into skills, wikis, and portable Markdown",
    shortDescription:
      "A bilingual tool that parses WordPress JSON or public URLs into knowledge and persona artifacts, with XML-to-Markdown migration.",
    fullDescription:
      "WordPress Persona Parser supports deterministic parser and optional AI generation modes, reusable skill/wiki outputs, versioned profiles, and Obsidian-ready Markdown ZIP exports from WordPress XML.",
    role: "Utility / Data Workflow Developer",
    teamType: "solo",
    techStack: ["Node.js", "JavaScript", "Express"],
    categories: ["Developer Tool", "AI Workflow", "Documents"],
    features: [
      "WordPress JSON and URL ingestion",
      "Knowledge and persona analysis",
      "Skill and wiki generation",
      "XML-to-Obsidian Markdown ZIP migration"
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
    name: "Leo's WordPress-to-GitHub Blog Archive",
    tagline: "Preserve a WordPress blog as a portable Jekyll archive",
    shortDescription:
      "A WordPress-to-Jekyll migration project preserving blog posts and local image assets on GitHub Pages.",
    fullDescription:
      "Leo's WordPress-to-GitHub Blog Archive keeps exported WordPress content in a static Jekyll site, with Ruby migration scripts, rewritten image links, and category pages for long-term ownership.",
    role: "Web / Content Migration Developer",
    teamType: "solo",
    techStack: ["Ruby", "Jekyll", "HTML", "CSS"],
    categories: ["Web App", "Archive", "Documents"],
    features: [
      "WordPress XML migration",
      "Local image preservation",
      "Category and article browsing",
      "Static GitHub Pages archive"
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
    name: "RedNote Milestone Gallery",
    tagline: "Browse RedNote badges, achievements, and growth snapshots",
    shortDescription:
      "A static gallery for RedNote / Xiaohongshu milestone screenshots with tag filters, sorting, and lightbox previews.",
    fullDescription:
      "RedNote Milestone Gallery presents repository-managed badge and achievement images in a responsive layout, with theme switching and English, Traditional Chinese, and Simplified Chinese interfaces.",
    role: "Frontend Developer",
    teamType: "solo",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Web App", "Frontend", "Gallery"],
    features: [
      "Milestone and badge gallery",
      "Tag filters and date sorting",
      "Lightbox image previews",
      "Three-language and theme switching"
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
    tagline: "Focus sessions become seeds, room decorations, and shared crafts",
    shortDescription:
      "An Expo React Native app for iOS, Android, and Web that rewards focus sessions with seeds for room items and handmade collectibles.",
    fullDescription:
      "CraftFocus combines protected focus timers, a seed wallet, official and custom craft claims, 2.5D room decoration, collectible galleries, and social visits backed by Supabase.",
    role: "Product / Frontend Developer",
    teamType: "solo",
    techStack: ["React Native", "Expo", "TypeScript", "Supabase"],
    categories: ["Productivity", "Social App", "Mobile App"],
    features: [
      "Focus timers and seed rewards",
      "Room decoration and collectibles",
      "Custom craft listings and claims",
      "Friend rooms and social interactions"
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
    name: "Taipei Repeat DUI / Drug-Impaired / Test-Refusal Education Dashboard",
    tagline: "Explore repeat DUI, drug-impaired, and test-refusal announcements",
    shortDescription:
      "An educational dashboard that parses Taipei public PDF announcements about repeat impaired-driving and test-refusal records.",
    fullDescription:
      "This Next.js, SQLite, and Python dashboard supports announcement ingestion, filters, descriptive statistics, map views, CSV exports, and review of parser rows and source freshness.",
    role: "Full Stack / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["Next.js", "TypeScript", "Python", "SQLite"],
    categories: ["Web App", "Dashboard", "Data Visualization"],
    features: [
      "Public PDF ingestion",
      "Violation and repeat-count filters",
      "Descriptive statistics and map views",
      "CSV exports and parser review"
    ],
    image: "/src/assets/images/projects/publicsafetydashboard.png",
    demoUrl: "https://publicsafetydashboard.onrender.com/",
    repoUrl: "https://github.com/LEO0331/publicsafetydashboard",
    status: "live",
    featured: true
  },
  {
    id: "taipei-bin-map",
    slug: "taipei-bin-map",
    name: "Taipei Public Amenities Map",
    tagline: "Find Taipei public amenities across official datasets",
    shortDescription:
      "A mobile-first bilingual map and directory for Taipei public amenities, with source-specific filters and nearby sorting.",
    fullDescription:
      "Taipei Public Amenities Map combines official local datasets, Leaflet maps, accessible directories and tables, CSV exports, and offline-friendly caching to help visitors inspect published facility records.",
    role: "Frontend / Civic Tech Developer",
    teamType: "solo",
    techStack: ["React", "TypeScript", "Vite", "Leaflet"],
    categories: ["Web App", "Map Tool", "Civic Tech"],
    features: [
      "Public-amenity maps and directories",
      "District and source-specific filters",
      "Nearby sorting and address lookup",
      "CSV export and offline-friendly caching"
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
    name: "Taipei Traffic Accident Hotspot Map",
    tagline: "Bilingual dashboard for exploring Taipei traffic accident hotspots",
    shortDescription:
      "A mobile-first map and dashboard for exploring historical Taipei A1/A2 crash points, intersection hotspots, and traffic-safety statistics.",
    fullDescription:
      "Taipei Traffic Accident Hotspot Map turns public traffic-accident records into an accessible bilingual exploration tool. It combines location and time filters, clustered and heat-map views, aggregate factor charts, and procedural traffic datasets in a responsive PWA-ready interface.",
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
    name: "Taipei Registered Religious Groups Map",
    tagline: "Bilingual directory map of registered religious groups in Taipei",
    shortDescription:
      "A mobile-first map for searching and exploring officially registered religious organizations across Taipei.",
    fullDescription:
      "Taipei Registered Religious Groups Map converts public registration and coordinate data into a practical bilingual directory. It demonstrates data conversion, coordinate-system handling, clustered map markers, filtering, and responsive civic-tech interface design.",
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
    name: "Taipei 1999 Service Request Map",
    tagline: "Privacy-aware dashboard for Taipei 1999 service request data",
    shortDescription:
      "A bilingual map and dashboard for exploring Taipei 1999 dispatched service requests alongside related public-works datasets.",
    fullDescription:
      "Taipei 1999 Service Request Map presents public service-request data through district, time, category, and location filters while deliberately removing private address details. It also connects streetlight maintenance, construction audits, and stop/resume-work records in a mobile-first interface.",
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
    name: "Taipei Public Safety Map",
    tagline: "Multi-dataset public safety map and resource dashboard for Taipei",
    shortDescription:
      "A bilingual map and dashboard for exploring Taipei emergency resources, infrastructure, and carefully scoped historical safety records.",
    fullDescription:
      "Taipei Public Safety Map organizes public emergency, medical, fire, traffic, environmental, and historical incident datasets without producing a misleading combined safety score. It showcases large-scale data ingestion, geospatial layers, privacy-aware presentation, and responsible data communication.",
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
    name: "Taipei Public Records Explorer",
    tagline: "Searchable bilingual catalogue for Taipei public-service directories",
    shortDescription:
      "A bilingual guide to selected Taipei public records, with a searchable catalogue spanning health, care, work, culture, and city services.",
    fullDescription:
      "Taipei Public Records Explorer organizes public directories, administrative records, and descriptive summaries into topic-based views, with source-specific filters, CSV exports, comparison tools, and data-quality context.",
    role: "Frontend / Data Dashboard Developer",
    teamType: "solo",
    techStack: ["TypeScript", "React", "Vite", "Leaflet", "Open Data"],
    categories: ["Dashboard", "Directory", "Civic Tech"],
    features: [
      "Topic-based public-record catalogue",
      "Dataset-specific search and filters",
      "Source-field details and CSV export",
      "Data freshness and privacy guidance"
    ],
    image: "/src/assets/images/projects/taipei-civic-groups-map.png",
    demoUrl: "https://leo0331.github.io/taipei-civic-groups-map/",
    repoUrl: "https://github.com/LEO0331/taipei-civic-groups-map",
    status: "live",
    featured: true
  },
  {
    id: "taipei-real-estate-dashboard",
    slug: "taipei-real-estate-dashboard",
    name: "Taipei Real Estate & Demographics Dashboard",
    tagline: "Real-price, housing, and demographic insights across Taipei",
    shortDescription:
      "A mobile-first bilingual dashboard for exploring Taipei real-price records, market trends, land and development data, and demographic context.",
    fullDescription:
      "Taipei Real Estate & Demographics Dashboard brings together transaction records, monthly and quarterly price indexes, rents, district comparisons, permits, land values, income, demographics, and public-service records. It demonstrates an extensive static-data pipeline and recruiter-visible analytical UI with careful methodology notes.",
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
    featured: true
  },
  {
    id: "genomic-data-science-with-galaxy-project",
    slug: "genomic-data-science-with-galaxy-project",
    name: "Genome Variant Case Study Explorer",
    tagline: "Present Galaxy workflows and explore genomic variants",
    shortDescription:
      "An interactive case-study app for presenting Galaxy-generated results, exploring VCF records, and exporting filtered variants.",
    fullDescription:
      "Genome Variant Case Study Explorer offers workflow storytelling, bundled or uploaded VCF exploration, CSV exports, and downloadable artifacts; genomic computation is performed outside the web app.",
    role: "Bioinformatics / Full Stack Developer",
    teamType: "solo",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Bioinformatics"],
    categories: ["Web App", "Data Science", "Bioinformatics"],
    features: [
      "Galaxy workflow presentation",
      "Sample and uploaded VCF exploration",
      "Variant filtering and CSV export",
      "Downloadable project artifacts"
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
    name: "Thalassemia Sanger Sequencing Mutation Checker",
    tagline: "Review Sanger files with primer-specific mutation and QC checks",
    shortDescription:
      "A research prototype for uploading .ab1 Sanger files, selecting primer groups, and reviewing deterministic mutation and quality-control results.",
    fullDescription:
      "This Next.js and FastAPI prototype combines primer-specific sequence checks with browser-based result review and structured JSON reports for educational and research workflows.",
    role: "Bioinformatics Developer",
    teamType: "solo",
    techStack: ["Next.js", "Python", "FastAPI", "Bioinformatics"],
    categories: ["Web App", "Bioinformatics", "Research"],
    features: [
      "AB1 upload and primer selection",
      "Deterministic mutation checks",
      "Quality-control result review",
      "Structured JSON report export"
    ],
    image: "/src/assets/images/projects/thalassemia-seq-analysis.png",
    demoUrl: "https://thalassemia-seq-analysis.vercel.app/",
    repoUrl: "https://github.com/LEO0331/Thalassemia_SEQ_analysis",
    status: "live",
    featured: false
  }
];
