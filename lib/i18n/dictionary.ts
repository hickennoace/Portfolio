export type Lang = "en" | "he";

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
    cvEn: "CV (English)",
    cvHe: "CV (Hebrew)",
    scroll: "Scroll",
    portraitAlt: "Daniel Shaulov",
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
  language: {
    toggleAria: "Switch language",
    en: "EN",
    he: "HE",
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
    downloadCvEn: "Download CV (English)",
    downloadCvHe: "Download CV (Hebrew)",
    github: "Open GitHub",
    linkedin: "Open LinkedIn",
    openHint: "to open",
  },
  meta: {
    pageTitle: "Daniel Shaulov - Data & Analyst",
  },
};

const he: typeof en = {
  nav: {
    logo: "דניאל שאולוב",
    about: "אודות",
    whatIDo: "תחומי עיסוק",
    experience: "ניסיון",
    work: "פרויקטים",
    connect: "יצירת קשר",
    available: "פנוי לעבודה",
    getInTouch: "צור קשר",
    openMenu: "פתח תפריט",
    closeMenu: "סגור תפריט",
  },
  hero: {
    hello: "שלום, אני",
    nameFirst: "דניאל",
    nameLast: "שאולוב",
    titlePrefix: "אני",
    titles: ["אנליסט נתונים", "אנליסט פיננסי", "פותר בעיות", "בונה דשבורדים"],
    role: "סטודנט לכלכלה וניהול באוניברסיטה הפתוחה. שולט ב-Python, SQL, Power BI ובאקסל מתקדם.",
    roleAccent: "מחפש משרת אנליסט פיננסי או אנליסט נתונים.",
    viewWork: "לפרויקטים",
    getInTouch: "צור קשר",
    downloadCV: "הורדת קו״ח",
    cvEn: "קורות חיים (אנגלית)",
    cvHe: "קורות חיים (עברית)",
    scroll: "גלילה",
    portraitAlt: "דניאל שאולוב",
  },
  about: {
    eyebrow: "אודות",
    titleStart: "אנליסט בהכשרה,",
    titleEnd: "עם הראש בעבודה.",
    p1Pre: "לומד כלכלה וניהול",
    p1University: "באוניברסיטה הפתוחה",
    p1Mid: "(ממוצע 90). קודם לכן, שירתי שלוש שנים כלוחם",
    p1End: "בחטיבת הנח״ל.",
    p2Pre: "ארגז הכלים שלי:",
    p2Stack: "Python SQL, Power BI ואקסל מתקדם",
    p2End:
      ", כולל Pivot Tables ו-VLOOKUP. יודע לנקות CSV מבולגן, לעבוד מול מסד נתונים גדול, ולספק דשבורד שבאמת ישתמשו בו.",
    p3Pre: "מחפש",
    p3Roles: "משרת אנליסט פיננסי או אנליסט נתונים",
    p3End:
      ", במקום שבו האנליזה מובילה להחלטה אמיתית. פחות מצגות יפות, יותר מודלים, דשבורדים ומחקר שמישהו באמת קורא ומשתמש בו.",
    skillsLabel: "טכנולוגיות וכלים",
    languagesLabel: "שפות",
    stats: [
      { label: "סטודנט לכלכלה וניהול", sub: "האוניברסיטה הפתוחה · ממוצע 90" },
      { label: "ארגז כלים", sub: "Python · SQL · Power BI · Excel" },
    ],
    languages: [
      { lang: "עברית", level: "שפת אם" },
      { lang: "אנגלית", level: "ברמה מקצועית" },
      { lang: "רוסית", level: "ברמה גבוהה" },
    ],
  },
  whatIDo: {
    eyebrow: "תחומי עיסוק",
    titleStart: "מה אני",
    titleEnd: "עושה הכי טוב.",
    rows: [
      {
        title: "ניתוח נתונים",
        subtitle: "ניקוי, שאילתות, ודשבורדים שעובדים.",
        description:
          "רוב הנתונים מתחילים מבולגנים. אני מייבא נתונים גולמיים, מנקה ומעבד אותם בפייתון (Pandas, NumPy), שולח שאילתות למסדי נתונים רלציוניים ב-SQL, ובונה דשבורדים ב-Power BI שאפשר באמת לקרוא בישיבה. לאנליזה אני נשען על רגרסיה, מתאם וסדרות זמן עם Statsmodels. המטרה אחת: לחתוך את הרעש ולהביא תוצר שאפשר לקבל לפיו החלטה.",
      },
      {
        title: "ניתוח פיננסי",
        subtitle: "דוחות, מודלים, והמספרים שמאחוריהם.",
        description:
          "קורא דוחות רווח והפסד, מאזנים ותזרים מקצה לקצה, ובונה לצידם מודלי תרחיש והערכת שווי. התוצר: מחקר ומודלים שעומדים בשאלות.",
      },
      {
        title: "AI ואוטומציה",
        subtitle: "פחות עבודה ידנית.",
        description:
          "כותב סקריפטים בפייתון ותהליכי פרומפט שהופכים שעה של קליקים למשהו שרץ בשניות: סיכומי מחקר, ניקוי נתונים, שלדי דוחות. עובד מול ממשקי LLM ומשלב אותם בתהליכים אמיתיים. משתמש גם בכלי AI לכתיבת קוד כדי לכתוב קוד טוב יותר מהר יותר - הם מחסלים את החלקים החוזרים, מגלים בעיות מוקדם, וחוסכים זמן אמיתי בכל פרויקט.",
      },
      {
        title: "למידה עצמית",
        subtitle: "לומד את הכלים בעצמי.",
        description:
          "רוב ארגז הכלים שלי נלמד בכוחות עצמי. אני לומד מקורסים אונליין ומפרויקטים אמיתיים - הרבה מזה הגיע דרך Coursera ו-Udemy. ככה למדתי Python, פיתוח ווב, Power BI ואקסל: בוחר את המיומנות שהעבודה דורשת, מוצא את הקורס, ובונה איתה משהו אמיתי. כשפרויקט דורש כלי שעוד אין לי, אני פשוט הולך ולומד אותו.",
      },
    ],
  },
  experience: {
    eyebrow: "ניסיון",
    title: "איפה הייתי.",
    present: "כיום",
    items: [
      {
        role: "אבטחה ובקרת כניסה",
        company: "צוות 3",
        period: "2023 - כיום",
        description:
          "תפקיד אבטחה מבצעי: בקרת כניסה, נהלים קפדניים, ביצוע עקבי בעמדות שונות. עבודה לצד הלימודים.",
      },
      {
        role: "אנליסט ומפתח פרילנס",
        company: "פרילנסר",
        period: "2022 - כיום",
        description:
          "עבודה מול לקוחות בתחומי ניתוח נתונים, פיתוח ווב וגיימינג. בניתי צינורות נתונים ודשבורדי Power BI, פיתחתי אתרים רספונסיביים וכתבתי פלאגינים לשרתי משחק. המגוון מלמד לתחם דרישות, להעריך נכון ולעמוד בלוחות זמנים.",
      },
      {
        role: "רכז הכנה לצבא",
        company: "עמותת מדור לדור",
        period: "2022 - 2023",
        description:
          "ניהלתי תוכניות הכנה למועמדים ליחידות קרביות וטכנולוגיות. כמה מסלולים במקביל תחת לוחות זמנים צפופים, ליווי אישי למבחני הדפר ולפסיכולוג הצבאי לכל מועמד, וניהול הלוגיסטיקה מסביב. ניסיון משמעותי בנשיאה באחריות על תוצאות של אחרים.",
      },
      {
        role: "לוחם, חטיבת הנח״ל",
        company: "צה״ל",
        period: "2020 - 2022",
        description:
          "לוחם בחטיבת הנח״ל. משימות מבצעיות בסביבת שטח דינמית, החלטות בשניות. השתתפתי במבצע שומר החומות ושובר גלים, אשר הקנה עבורי חוסן מנטלי, קור רוח ומצוינות.",
      },
    ],
  },
  projects: {
    eyebrow: "פרויקטים נבחרים",
    title: "מה בניתי.",
    githubProfile: "פרופיל GitHub",
    view: "צפייה",
    filters: { all: "הכול", analytics: "אנליטיקה", finance: "פיננסים", web: "ווב ואפליקציות" },
    items: [
      {
        category: "בינה מלאכותית · אנליטיקה",
        description:
          "חלופה מבוססת-AI ל-Power BI / Tableau: גוררים קובץ CSV, Excel, JSON או SQLite ומקבלים בתוך שניות דשבורד נקי ומוסבר במלואו - ניקוי נתונים, מדדי KPI, סטטיסטיקה אמיתית, חיזוי, סגמנטציה ותובנות בשפה פשוטה. אפשר לשאול שאלות על הנתונים באנגלית פשוטה, לחבר טבלאות ולייצא דוח מעוצב. כל מנוע הניתוח רץ בדפדפן שלך, כך שהנתונים הגולמיים לעולם לא עוזבים את העמוד.",
      },
      {
        category: "נתונים · פיננסים",
        description:
          "בדקתי האם מחיר ETH זז יחד עם התמונה המאקרו-כלכלית: החלטות הפד, DXY, NDAQ ודומיננטיות BTC. השתמשתי בנתוני On-Chain וברגרסיה רב-משתנית, ומצאתי אינדיקטור מקדים מובהק סטטיסטית לפני ירידות משמעותיות, מאומת על פני חמש שנות נתונים.",
      },
      {
        category: "אנליטיקה · גיימינג",
        description:
          "ניתחתי 36 חודשים של לוגי טרנזקציות שחקנים מרשת שרתי משחק כדי לחשוף מניעי שימור, נקודות דליפה בכלכלת המשחק וקבוצות שחקנים בעלות ערך גבוה. בניתי דשבורד Power BI אינטראקטיבי שהצוות משתמש בו כדי לאזן את כלכלת המשחק בזמן אמת.",
      },
      {
        category: "אנליטיקה · נתונים",
        description:
          "בניתי דוח Power BI בן 7 עמודים על כ-853 אלף אירועי משטרת LA (2020 עד סוף 2023). ניקיתי את הנתונים ב-Power Query (תיקון כותרות שבורות, פרסור תאריכים לפי locale, ניקוי ערכי sentinel) וכתבתי את מדדי ה-DAX שמאחורי מגמות YoY, שעות שיא, השהיית דיווח ושיעורי מעצרים.",
      },
      {
        category: "פינטק · זמן אמת",
        description:
          "דשבורד מסחר בזמן אמת: מקלידים טיקר כלשהו - מניה, קריפטו או פורקס - ומקבלים את כל הנכס בעמוד אחד. גרף TradingView חי, ביצועים לפי טווחי זמן מעוגנים (שינוי שבועי נמדד מפתיחת השבוע, לא שבעה ימים מתגלגלים), מד פחד ותאוות בצע, הטיית מגמה אלגוריתמית וסיכום AI של החדשות האחרונות. המחירים משודרים בזמן אמת דרך SSE; הנתונים נאספים מ-Yahoo Finance, CoinDesk, FXStreet ו-Forex Factory, עם סיכומים של Gemini. נבנה ב-Next.js וב-TypeScript, מופץ ב-Vercel.",
      },
      {
        category: "אנליטיקה · Power BI",
        description:
          "דוח Power BI בן 5 עמודים ליבואן רכב פיקטיבי, שנבנה בפורמט PBIP/TMDL הניתן לניהול גרסאות מתוך ארבעה קבצי אקסל (5,000 מכירות, 2,159 לידים אבודים, 60 עובדים). עוקב אחר ₪2 מיליארד הכנסות ברווחיות 20.5%, ומפרק ₪814M של פייפליין אבוד לקטגוריות בנות-טיפול עם פרמטר Win-Back שמכמת את ההכנסה הניתנת לשחזור. כל הנתונים סינתטיים, נוצרו על ידי.",
      },
      {
        category: "ווב · עיצוב",
        description:
          "האתר הזה. בניתי אותו מאפס ב-Next.js, ב-TypeScript ובעזרת Claude Code, עיצבתי ב-Tailwind והנפשתי ב-Framer Motion. כולל תמיכה מלאה בעברית ובאנגלית עם כיווניות ימין-לשמאל, מצב כהה ובהיר וטופס יצירת קשר פעיל המחובר ל-Resend.",
      },
    ],
  },
  connect: {
    eyebrow: "יצירת קשר",
    title: "בואו נדבר.",
    body:
      "מחפש משרת אנליסט פיננסי או אנליסט נתונים. אם אתם מגייסים או רוצים ליצור קשר, דברו איתי.",
    emailLabel: "אימייל",
    linkedinLabel: "לינקדאין",
    githubLabel: "גיטהאב",
    builtWith: "נבנה ב-Next.js",
  },
  contactModal: {
    eyebrow: "יצירת קשר",
    title: "שליחת הודעה",
    nameLabel: "שם",
    namePlaceholder: "השם שלך",
    emailLabel: "אימייל",
    emailPlaceholder: "you@example.com",
    messageLabel: "הודעה",
    messagePlaceholder: "ספרו לי על המשרה או ההזדמנות...",
    send: "שלח הודעה",
    sending: "שולח...",
    close: "סגירה",
    closeAria: "סגור חלון",
    successTitle: "ההודעה נשלחה",
    successBody: "תודה. אחזור אליכם תוך יום-יומיים.",
    genericError: "משהו השתבש.",
    sendError: "השליחה נכשלה. נסו שוב.",
  },
  language: {
    toggleAria: "החלפת שפה",
    en: "EN",
    he: "HE",
  },
  misc: {
    backToTop: "חזרה למעלה",
    home: "בית",
    konami: "מצאת את הסוד! 🎉",
    tabAway: "👋 חוזרים?",
  },
  cmdk: {
    placeholder: "הקלידו פקודה או חיפוש…",
    navigate: "ניווט",
    actions: "פעולות",
    empty: "אין תוצאות",
    toggleTheme: "החלפת מצב תצוגה",
    copyEmail: "העתקת כתובת אימייל",
    emailCopied: "האימייל הועתק",
    downloadCvEn: "הורדת קורות חיים (אנגלית)",
    downloadCvHe: "הורדת קורות חיים (עברית)",
    github: "פתיחת GitHub",
    linkedin: "פתיחת LinkedIn",
    openHint: "לפתיחה",
  },
  meta: {
    pageTitle: "דניאל שאולוב - אנליסט נתונים",
  },
};

export const dictionary: Record<Lang, typeof en> = { en, he };
export type Dictionary = typeof en;
