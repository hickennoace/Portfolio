export type Lang = "en" | "he";

const en = {
  nav: {
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
    hello: "Hi, I'm",
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
    p1Mid: "(GPA 90). Before that, two years as a combat soldier in the",
    p1End: "Nahal Brigade.",
    p2Pre: "I write",
    p2Stack: "Python, SQL, Power BI and advanced Excel",
    p2End:
      " — PivotTables, VLOOKUP, the rest. I'm comfortable cleaning a messy CSV, querying a relational DB, and shipping a dashboard a stakeholder can actually use.",
    p3Pre: "Looking for a",
    p3Roles: "Financial or Data Analyst role",
    p3End:
      " — somewhere the analysis actually drives a decision. Less interested in pretty slides, more interested in models, dashboards, and research someone reads on a Monday morning.",
    skillsLabel: "Tech & Tools",
    languagesLabel: "Languages",
    stats: [
      { label: "Economics & Management", sub: "Open University · GPA 90" },
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
        subtitle: "Statements, models, and the macro picture.",
        description:
          "I read income statements, balance sheets, and cash flow end-to-end, and build the scenario and valuation models that sit beside them. I follow rates, inflation prints, and earnings drift closely — the point isn't theory, it's understanding which numbers actually move price. The output is research and models that hold up under questioning.",
      },
      {
        title: "AI & AUTOMATION",
        subtitle: "Cutting the manual parts.",
        description:
          "I write Python and prompt pipelines that turn an hour of clicking into a script that runs in seconds — research summaries, data cleanup, report scaffolding. I'm comfortable wiring LLM APIs into real workflows. Not flashy one-off demos, just things I'll actually re-use the next day.",
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
        period: "2023 – Present",
        description:
          "Operational security role: access control, strict protocols, consistent execution across multiple posts. The day job while I finish the degree.",
      },
      {
        role: "Freelance Analyst & Developer",
        company: "Freelancer",
        period: "2022 – Present",
        description:
          "Client work across data analytics, web development, and gaming. Built data pipelines and Power BI dashboards, shipped responsive sites, and developed plugins for game servers. Variety teaches you to scope tight and ship fast.",
      },
      {
        role: "Military Prep Coordinator",
        company: "Midor Ledor Association",
        period: "2022 – 2023",
        description:
          "Ran preparation programs for candidates heading into combat units. Several tracks in parallel on tight timelines, one-on-one mentorship, and the logistics behind both. Good practice at owning outcomes for other people.",
      },
      {
        role: "Combat Soldier — Nahal Brigade",
        company: "Israel Defense Forces (IDF)",
        period: "2020 – 2022",
        description:
          "Combat infantryman in the Nahal Brigade. Operational missions in dynamic field environments, decisions made in seconds. Participated in Operation Guardian of the Walls. The discipline and composure you build here transfer directly to analyst work.",
      },
    ],
  },
  projects: {
    eyebrow: "Selected Work",
    title: "Things I've built.",
    githubProfile: "GitHub profile",
    items: [
      {
        category: "Data · Finance",
        description:
          "Tested whether ETH price moves with the macro picture — Fed decisions, DXY, NDAQ, BTC dominance — using on-chain data and multivariate regression. Found one statistically significant leading indicator ahead of major drawdowns, validated across five years.",
      },
      {
        category: "Analytics · Gaming",
        description:
          "36 months of player transaction logs from a game server network. Dug through it to find retention drivers, economy leaks, and high-value cohorts. Shipped an interactive Power BI dashboard the team uses to balance the in-game economy in real time.",
      },
      {
        category: "Analytics · Public Safety",
        description:
          "Built a 7-page Power BI report on ~853K LAPD incidents (2020 to late 2023). Cleaned the data in Power Query (header repair, locale-aware date parsing, sentinel cleanup) and wrote the DAX measures behind YoY trends, peak hours, reporting lag, and arrest rate. Python validation scripts catch upstream schema drift before refresh.",
      },
    ],
  },
  connect: {
    eyebrow: "Connect",
    title: "Let's talk.",
    body:
      "Looking for a Financial or Data Analyst seat. If you're hiring — or you just want to talk markets — get in touch.",
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
};

const he: typeof en = {
  nav: {
    about: "אודות",
    whatIDo: "מה אני עושה",
    experience: "ניסיון",
    work: "פרויקטים",
    connect: "יצירת קשר",
    available: "פנוי לעבודה",
    getInTouch: "בואו נדבר",
    openMenu: "פתח תפריט",
    closeMenu: "סגור תפריט",
  },
  hero: {
    hello: "שלום, אני",
    role: "סטודנט לכלכלה וניהול באוניברסיטה הפתוחה. עובד עם Python, SQL, Power BI ואקסל מתקדם.",
    roleAccent: "מחפש תפקיד אנליסט פיננסי או אנליסט נתונים.",
    viewWork: "לפרויקטים",
    getInTouch: "צרו קשר",
    downloadCV: "הורדת קו״ח",
    cvEn: "קורות חיים (אנגלית)",
    cvHe: "קורות חיים (עברית)",
    scroll: "גלול",
    portraitAlt: "דניאל שאולוב",
  },
  about: {
    eyebrow: "אודות",
    titleStart: "אנליסט בהכשרה,",
    titleEnd: "ממוקד בעבודה.",
    p1Pre: "לומד כלכלה וניהול ב",
    p1University: "אוניברסיטה הפתוחה",
    p1Mid: "(ממוצע 90). לפני זה, שירתי שנתיים כלוחם קרבי ב",
    p1End: "חטיבת הנח״ל.",
    p2Pre: "אני כותב",
    p2Stack: "Python, SQL, Power BI ואקסל מתקדם",
    p2End:
      " — Pivot Tables, VLOOKUP וכל מה שבדרך. נוח לי לנקות CSV מבולגן, לעבוד מול מסד נתונים רלציוני, ולספק דשבורד שמישהו באמת ישתמש בו.",
    p3Pre: "מחפש",
    p3Roles: "תפקיד אנליסט פיננסי או אנליסט נתונים",
    p3End:
      " — איפה שהאנליזה באמת מובילה להחלטה. פחות מתעניין במצגות יפות, יותר במודלים, דשבורדים ומחקר שמישהו קורא בבוקר יום שני.",
    skillsLabel: "טכנולוגיות וכלים",
    languagesLabel: "שפות",
    stats: [
      { label: "כלכלה וניהול", sub: "אוניברסיטה הפתוחה · ממוצע 90" },
      { label: "ארגז כלים", sub: "Python · SQL · Power BI · Excel" },
    ],
    languages: [
      { lang: "עברית", level: "שפת אם" },
      { lang: "אנגלית", level: "מקצועית" },
      { lang: "רוסית", level: "ברמה גבוהה" },
    ],
  },
  whatIDo: {
    eyebrow: "מה אני עושה",
    titleStart: "מה אני",
    titleEnd: "באמת עושה.",
    rows: [
      {
        title: "ניתוח נתונים",
        subtitle: "מנקה, שואל שאילתות, מספק דשבורד.",
        description:
          "רוב הנתונים מתחילים מבולגנים. אני מושך ייצואים גולמיים, מנקה ומעבד אותם בפייתון (Pandas, NumPy), שולח שאילתות למסדי נתונים רלציוניים ב-SQL, ובונה דשבורדים ב-Power BI שמישהו באמת יכול לקרוא בישיבה. לאנליזה אני נשען על רגרסיה, מתאם וסדרות עיתיות עם Statsmodels. העבודה תמיד אותה עבודה: לחתוך את הרעש, להחזיר משהו שאפשר להחליט לפיו.",
      },
      {
        title: "ניתוח פיננסי",
        subtitle: "דוחות, מודלים והתמונה המאקרו.",
        description:
          "אני קורא רווח והפסד, מאזנים ותזרים מקצה לקצה, ובונה את מודלי התרחיש וההערכה שמתלווים אליהם. עוקב מקרוב אחרי ריבית, אינפלציה ורווחי חברות — הנקודה היא לא תיאוריה, זה להבין אילו מספרים באמת מזיזים את המחיר. התוצר הוא מחקר ומודלים שעומדים בשאלות.",
      },
      {
        title: "AI ואוטומציה",
        subtitle: "חיתוך החלקים הידניים.",
        description:
          "אני כותב פייתון וצינורות פרומפט שהופכים שעה של קליקים לסקריפט שרץ בכמה שניות — סיכומי מחקר, ניקוי נתונים, שלדי דוחות. נוח לי לחבר ממשקי LLM לתהליכים אמיתיים. לא הדגמות חד-פעמיות, דברים שאשתמש בהם גם מחר.",
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
        company: "טים 3",
        period: "2023 – כיום",
        description:
          "תפקיד אבטחה מבצעי: בקרת כניסה, נהלים קפדניים, ביצוע עקבי במגוון עמדות. עבודה תוך כדי השלמת התואר.",
      },
      {
        role: "אנליסט ומפתח פרילנס",
        company: "פרילנסר",
        period: "2022 – כיום",
        description:
          "עבודת לקוח בתחומי ניתוח נתונים, פיתוח ווב וגיימינג. בניתי צינורות נתונים ודשבורדי Power BI ללקוחות, סיפקתי אתרים רספונסיביים, ופיתחתי פלאגינים לשרתי משחק. השונות מלמדת לסקופ צמוד ולספק מהר.",
      },
      {
        role: "רכז הכנה לצבא",
        company: "עמותת מדור לדור",
        period: "2022 – 2023",
        description:
          "ניהלתי תכניות הכנה למועמדים ליחידות קרביות. כמה מסלולים במקביל בלוחות זמנים צפופים, ליווי אחד-על-אחד, והלוגיסטיקה מסביב. תרגול טוב בלקיחת אחריות על תוצאות של אנשים אחרים.",
      },
      {
        role: "לוחם קרבי — חטיבת הנח״ל",
        company: "צבא ההגנה לישראל (צה״ל)",
        period: "2020 – 2022",
        description:
          "לוחם חי״ר בחטיבת הנח״ל. משימות מבצעיות בשטח דינמי, החלטות בשניות. השתתפות במבצע שומר החומות. המשמעת וקור הרוח שלומדים שם מתורגמים ישירות לעבודת אנליסט.",
      },
    ],
  },
  projects: {
    eyebrow: "פרויקטים נבחרים",
    title: "דברים שבניתי.",
    githubProfile: "פרופיל GitHub",
    items: [
      {
        category: "נתונים · פיננסים",
        description:
          "בדקתי האם מחיר ETH זז יחד עם התמונה המאקרו — החלטות פד, DXY, NDAQ ודומיננטיות BTC — באמצעות נתוני On-Chain ורגרסיה רב-משתנית. מצאתי אינדיקטור מקדים מובהק סטטיסטית לפני ירידות משמעותיות, על פני 5 שנות נתונים.",
      },
      {
        category: "אנליטיקה · גיימינג",
        description:
          "36 חודשים של לוגי טרנזקציות שחקנים מרשת שרתים של משחק. חיפשתי מניעי שימור, נקודות דליפה בכלכלת המשחק, וקבוצות שחקנים בעלות ערך גבוה. סיפקתי דשבורד Power BI אינטראקטיבי שהצוות משתמש בו כדי לאזן את הכלכלה בזמן אמת.",
      },
      {
        category: "אנליטיקה · ביטחון ציבורי",
        description:
          "בניתי דוח Power BI בן 7 עמודים על כ-853 אלף אירועי משטרת LA (2020 עד סוף 2023). ניקיתי את הנתונים ב-Power Query (תיקון כותרות שבורות, פרסור תאריכים לפי לוקאל, ניקוי ערכי סנטינל) וכתבתי את מדדי ה-DAX מאחורי מגמות YoY, שעות שיא, השהיית דיווח ושיעור מעצרים. סקריפטי ולידציה בפייתון תופסים סטיות סכמה במקור לפני הריענון.",
      },
    ],
  },
  connect: {
    eyebrow: "יצירת קשר",
    title: "בואו נדבר.",
    body:
      "מחפש תפקיד אנליסט פיננסי או אנליסט נתונים. אם אתם מגייסים — או סתם רוצים לדבר שווקים — צרו קשר.",
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
    messagePlaceholder: "ספרו לי על התפקיד או ההזדמנות...",
    send: "שליחה",
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
};

export const dictionary: Record<Lang, typeof en> = { en, he };
export type Dictionary = typeof en;
