const en = {
  nav: {
    logo: "Daniel Shaulov",
    about: "About",
    whatIDo: "What I Do",
    experience: "Experience",
    work: "Work",
    connect: "Connect",
    available: "Available",
    getInTouch: "Get in Touch",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
  },
  hero: {
    hello: "Hello, I'm",
    nameFirst: "Daniel",
    nameLast: "Shaulov",
    titlePrefix: "I'm a",
    titles: ["Data Analyst", "Financial Analyst", "Problem Solver", "Dashboard Builder"],
    role: "Studying Economics & Management at the Open University. I work with Python, SQL, Power BI and advanced Excel.",
    roleAccent: "Looking for a Financial or Data Analyst role.",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
    downloadCV: "Download CV",
    scroll: "Scroll",
    portraitAlt: "Daniel Shaulov",
    proof: [
      { value: "90", label: "GPA" },
      { value: "0.907", label: "ROC-AUC" },
      { value: "~23M", label: "rows modeled" },
      { value: "8", label: "projects" },
    ],
  },
  about: {
    eyebrow: "About",
    titleStart: "Analyst in training,",
    titleEnd: "focused on the work.",
    p1Pre: "Studying Economics & Management at the",
    p1University: "Open University of Israel",
    p1Mid: "(GPA 90). Before that, three years as a combat soldier in the",
    p1End: "Nahal Brigade.",
    p2Pre: "I write",
    p2Stack: "Python, SQL, Power BI and advanced Excel",
    p2End:
      " - PivotTables, VLOOKUP, the rest. I'm comfortable cleaning a messy CSV, querying a relational DB, and shipping a dashboard a stakeholder can actually use.",
    p3Pre: "Looking for a",
    p3Roles: "Financial or Data Analyst role",
    p3End:
      " - somewhere the analysis actually drives a decision. Less interested in pretty slides, more interested in models, dashboards, and research someone reads on a Monday morning.",
    skillsLabel: "Tech & Tools",
    languagesLabel: "Languages",
    stats: [
      { label: "Student Economics & Management", sub: "Open University · GPA 90" },
      { label: "Analyst Toolkit", sub: "Python · SQL · Power BI · Excel" },
    ],
    languages: [
      { lang: "Hebrew", level: "Native" },
      { lang: "English", level: "Professional" },
      { lang: "Russian", level: "High Proficiency" },
    ],
  },
  whatIDo: {
    eyebrow: "What I Do",
    titleStart: "What I",
    titleEnd: "actually do.",
    rows: [
      {
        title: "DATA ANALYSIS",
        subtitle: "Clean it, query it, ship the dashboard.",
        description:
          "Most data starts ugly. I pull raw exports, clean and reshape them in Python (Pandas, NumPy), query relational DBs with SQL, and build Power BI dashboards someone can actually read in a meeting. For analysis I lean on regression, correlation, and time-series with Statsmodels. The job is the same every time: cut the noise, hand back something you can decide with.",
      },
      {
        title: "FINANCIAL ANALYSIS",
        subtitle: "Statements, models, and the numbers behind them.",
        description:
          "I read income statements, balance sheets, and cash flow end-to-end, and build the scenario and valuation models that sit beside them. The output is research and models that hold up under questioning.",
      },
      {
        title: "AI & AUTOMATION",
        subtitle: "Cutting the manual parts.",
        description:
          "I write Python and prompt pipelines that turn an hour of clicking into a script that runs in seconds: research summaries, data cleanup, report scaffolding. I'm comfortable wiring LLM APIs into real workflows. I also use AI coding tools to write better code faster - they cut the repetitive parts, surface issues early, and save real time across every project.",
      },
      {
        title: "SELF-LEARNING",
        subtitle: "Teaching myself the toolkit.",
        description:
          "Most of my toolkit is self-taught. I learn from documentation, online courses, and real projects - Coursera and Udemy carried a lot of it. Python, web development, Power BI, and Excel all started this way: pick the skill the work needs, find the course, then build something real with it. When a project needs a tool I don't have yet, I go learn it.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've been.",
    present: "Present",
    items: [
      {
        role: "Security & Access Control",
        company: "Team 3",
        period: "2023 - Present",
        description:
          "Operational security role: access control, strict protocols, consistent execution across multiple posts. The day job while I finish the degree.",
      },
      {
        role: "Freelance Analyst & Developer",
        company: "Freelancer",
        period: "2022 - Present",
        description:
          "Client work across data analytics, web development, and gaming. Built data pipelines and Power BI dashboards, shipped responsive sites, and developed plugins for game servers. Variety teaches you to scope tight and ship fast.",
      },
      {
        role: "Military Prep Coordinator",
        company: "Midor Ledor Association",
        period: "2022 - 2023",
        description:
          "Ran preparation programs for candidates heading into combat units. Several tracks in parallel on tight timelines, one-on-one mentorship, and the logistics behind both. Good practice at owning outcomes for other people.",
      },
      {
        role: "Combat Soldier - Nahal Brigade",
        company: "Israel Defense Forces (IDF)",
        period: "2020 - 2022",
        description:
          "Combat infantryman in the Nahal Brigade. Operational missions in dynamic field environments, decisions made in seconds. Participated in Operation Guardian of the Walls. The discipline and composure you build here transfer directly to analyst work.",
      },
    ],
  },
  projects: {
    eyebrow: "Selected Work",
    title: "Things I've built.",
    githubProfile: "GitHub profile",
    view: "View",
    filters: { all: "All", analytics: "Analytics", finance: "Finance", web: "Web & Apps" },
    items: [
      {
        category: "AI · Analytics",
        description:
          "An AI-powered alternative to Power BI / Tableau: drop in a CSV, Excel, JSON, or SQLite file and get a clean, fully-explained dashboard - cleaning, KPIs, real statistics, forecasting, segmentation, and plain-language insights - in seconds. Ask your data questions in plain English, join tables, and export a polished report. The entire analysis engine runs in your browser, so your raw data never leaves the page.",
      },
      {
        category: "ML · Data Engineering",
        description:
          "An end-to-end churn & revenue engine on ~23M real KKBox subscription transactions. A PostgreSQL pipeline cleans the raw data, advanced SQL computes the SaaS economics (MRR, ARPU, LTV), and a calibrated Random-Forest model scores every active customer 1–100 for churn risk (ROC-AUC 0.907). Results are served through a FastAPI layer and a 4-page Power BI dashboard. Surfaced ~NT$13.8M/month of revenue at risk and pinned manual-pay billing as the biggest churn driver — 37% vs 5% on auto-renew.",
      },
      {
        category: "Data · Finance",
        description:
          "Tested whether ETH price moves with the macro picture (Fed decisions, DXY, NDAQ, BTC dominance) using on-chain data and multivariate regression. Found one statistically significant leading indicator ahead of major drawdowns, validated across five years.",
      },
      {
        category: "Analytics · Gaming",
        description:
          "36 months of player transaction logs from a game server network. Dug through it to find retention drivers, economy leaks, and high-value cohorts. Shipped an interactive Power BI dashboard the team uses to balance the in-game economy in real time.",
      },
      {
        category: "Analytics · Big Data",
        description:
          "Built a 7-page Power BI report on ~853K LAPD incidents (2020 to late 2023). Cleaned the data in Power Query (header repair, locale-aware date parsing, sentinel cleanup) and wrote the DAX measures behind YoY trends, peak hours, reporting lag, and arrest rate. Python validation scripts catch upstream schema drift before refresh.",
      },
      {
        category: "FinTech · Real-time",
        description:
          "A real-time trading dashboard: type any ticker - stock, crypto, or forex - and get the whole asset on one page. A live TradingView chart, anchored timeframe performance (a 'weekly' move means the week's open, not a rolling 7 days), a Fear & Greed gauge, an algorithmic trend bias, and an AI recap of the latest news. Prices stream live over SSE; data is aggregated from Yahoo Finance, CoinDesk, FXStreet and Forex Factory, with summaries by Gemini. Built with Next.js and TypeScript, deployed on Vercel.",
      },
      {
        category: "Analytics · Power BI",
        description:
          "A 5-page Power BI report for a fictional car importer, built in the version-controllable PBIP/TMDL format from four Excel workbooks (5,000 sales, 2,159 lost leads, 60 staff). Tracks ₪2bn revenue at a 20.5% margin, then breaks ₪814M of lost pipeline into addressable buckets with a Win-Back what-if that sizes recoverable revenue. All data synthetic, generated by me.",
      },
      {
        category: "Web · Design",
        description:
          "This site. Built from scratch with Next.js, TypeScript, and Claude Code, styled in Tailwind, and animated with Framer Motion. Full English/Hebrew localization with right-to-left support, dark and light themes, and a working contact form wired through Resend.",
      },
    ],
  },
  connect: {
    eyebrow: "Connect",
    title: "Let's talk.",
    body:
      "Looking for a Financial or Data Analyst seat. If you're hiring or want to connect, get in touch.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    builtWith: "Built with Next.js",
  },
  contactModal: {
    eyebrow: "Get in touch",
    title: "Send a Message",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about the role or the opportunity...",
    send: "Send Message",
    sending: "Sending...",
    close: "Close",
    closeAria: "Close modal",
    successTitle: "Message Sent",
    successBody: "Thanks. I'll get back to you within a day or two.",
    genericError: "Something went wrong.",
    sendError: "Failed to send. Please try again.",
  },
  misc: {
    backToTop: "Back to top",
    home: "Home",
    konami: "You found the secret! 🎉",
    tabAway: "👋 Come back!",
  },
  cmdk: {
    placeholder: "Type a command or search…",
    navigate: "Navigate",
    actions: "Actions",
    empty: "No results",
    toggleTheme: "Toggle theme",
    copyEmail: "Copy email address",
    emailCopied: "Email copied to clipboard",
    downloadCv: "Download CV",
    github: "Open GitHub",
    linkedin: "Open LinkedIn",
    openHint: "to open",
  },
};


export const dictionary = en;
export type Dictionary = typeof en;
