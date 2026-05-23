// ─────────────────────────────────────────────
//  PROJECTS DATA
//  To add a new project, copy one object from
//  the array below and fill in the fields.
//  Put project screenshots in the images/ folder.
// ─────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Team Work Log Web Application",
    techStack: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Vercel", "Railway"],
    description:
      "Built a web application to log and monitor employee tasks. Implemented " +
      "authentication, editable logs with timestamps, and an admin dashboard for " +
      "tracking activity and submissions. Integrated React frontend with Node/Express " +
      "backend and deployed using Vercel and Railway.",
    image: "",          // add image filename here when you have one, e.g. "images/worklog.png"
    github: "",         // add GitHub link when available
  },
  {
    title: "Aadhaar Data Analysis and Data Quality Insights",
    techStack: ["Python", "Pandas", "Hugging Face Datasets", "Matplotlib"],
    description:
      "Analyzed public UIDAI datasets to evaluate data quality. Cleaned pincode data, " +
      "compared it with official records, and identified inconsistencies across multiple " +
      "datasets. Generated state-wise insights and visualizations to highlight data issues. " +
      "Collaborated in a team for data cleaning, analysis, and visualization.",
    image: "",          // add image filename here when you have one
    github: "https://github.com/an-42-an/uidai1",
  },
    {
    title: "Arcade Browser Game with Leaderboard",
    techStack: ["HTML5 Canvas", "JavaScript", "Node.js", "MongoDB", "Render"],
    description:
      "Built and deployed a browser-based arcade game with a live leaderboard. " +
      "Frontend implemented with HTML5 Canvas and JavaScript; backend built with " +
      "Node.js/Express, connected to MongoDB Atlas, and deployed on Render for global access.",
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