// ─────────────────────────────────────────────
//  PROJECTS DATA
//  To add a new project, copy one object and
//  fill in the fields. Images go in images/
// ─────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Artisan Buddy",
    techStack: ["React", "FastAPI", "ChromaDB", "Qwen3"],
    description:
      "AI-powered pricing and listing assistant for artisans." +
      " Reviews product photos and provides design feedback",
    image: "images/artisanbuddy.png",       // add "images/worklog.png" when you have a screenshot
    github: "https://github.com/93ak/artisan-price-buddy",      // add GitHub link when available
  },
  {
    title: "Team Work Log Web Application",
    techStack: ["React", "Node & Express", "MongoDB"],
    description:
      "Web application to log and monitor employee tasks. " +
      "Tracking activity and submissions.",
    image: "images/worklog.png",       // add "images/worklog.png" when you have a screenshot
    github: "https://github.com/93ak/worklog-documentation",      // add GitHub link when available
  },
  {
    title: "Aadhaar Data Analysis",
    techStack: ["Python", "Pandas", "Hugging Face", "Matplotlib"],
    description:
      "Analyzed public UIDAI datasets, collaborated in a team for data cleaning, analysis, and visualization.",
    image: "images/uidai.png",
    github: "https://github.com/an-42-an/uidai1",
  },
  {
    title: "Design Portfolio",
    techStack: ["React", "Vite", "Tailwind", "Framer Motion"],
    description:
      "Designed and developed a responsive creative portfolio showcasing motion graphics, video edits, and visual design work.",
    image: "images/vlackvink.png",
    github: "https://github.com/93ak/design-portfolio",
  },

  {
    title: "Arcade Browser Game with Leaderboard",
    techStack: ["HTML5 Canvas", "Node.js", "MongoDB", "Render"],
    description:
      "Built and deployed a browser-based arcade game with a live leaderboard. ",
    image: "images/game1.png",
    github: "https://github.com/93ak/game1",
  },

  // ── ADD NEW PROJECTS BELOW THIS LINE ─────────
  // {
  //   title: "My New Project",
  //   techStack: ["React", "Firebase"],
  //   description: "What the project does.",
  //   image: "images/newproject.png",
  //   github: "https://github.com/93ak/newproject",
  // },
];