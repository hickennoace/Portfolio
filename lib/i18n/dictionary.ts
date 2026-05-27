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
    hello: "Hello, I'm",
    role: "Economics & Management student —",
    roleAccent: "targeting Data and Junior Analyst roles.",
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
    titleStart: "A focused analyst,",
    titleEnd: "in the making.",
    p1Pre: "Economics and Management student at the",
    p1University: "Open University of Israel",
    p1Mid:
      "(GPA 90), with a background that spans military service and operational management at scale. Those experiences shaped a disciplined, analytical mindset — and an instinct for translating raw information into",
    p1End: "clear, actionable decisions.",
    p2Pre: "On the technical side, I work across the full data pipeline — transforming datasets with",
    p2Stack: "Python (Pandas, NumPy, Statsmodels)",
    p2End:
      ", writing precise SQL, and delivering findings through Power BI dashboards with DAX measures. My applied work spans cryptocurrency market analysis correlating on-chain metrics with price cycles, and user behaviour analytics that surfaced retention and revenue patterns from large-scale activity data.",
    p3Pre: "I'm targeting roles in",
    p3Roles: "data analysis and financial analysis",
    p3End:
      "— positions where markets, numbers, and technology intersect. I work independently, learn fast, and use AI tools deliberately to raise output quality without cutting corners.",
    skillsLabel: "Technologies & Skills",
    languagesLabel: "Languages",
    stats: [
      { label: "B.A Economics & Management", sub: "Open University of Israel" },
      { label: "Freelancer", sub: "Data Analysis & Programming" },
    ],
    languages: [
      { lang: "Hebrew", level: "Native" },
      { lang: "English", level: "Professional" },
      { lang: "Russian", level: "High Proficiency" },
    ],
  },
  whatIDo: {
    eyebrow: "What I Do",
    titleStart: "Three disciplines,",
    titleEnd: "one analytical mind.",
    rows: [
      {
        title: "DATA ANALYSIS",
        subtitle: "Turning messy data into decision-ready insights",
        description:
          "I work across the full data pipeline — ingesting raw exports, cleaning and transforming datasets with Python (Pandas, NumPy), querying relational databases with SQL, and delivering findings through interactive Power BI dashboards with DAX measures. Statistical workflows include regression analysis, correlation studies, and time-series exploration using Statsmodels and Matplotlib. The goal is always the same: cut through the noise and produce insight that drives confident decisions.",
      },
      {
        title: "FINANCIAL ANALYSIS",
        subtitle: "Modeling for Business Impact",
        description:
          "I read financial statements end-to-end — income statements, balance sheets, and cash flow — and build scenario and valuation models that translate numbers into strategic context. My market analysis work spans capital market dynamics, macroeconomic correlations, and on-chain financial metrics. I structure findings into clear, concise outputs suited for investment research and operational decision-making.",
      },
      {
        title: "AI & AUTOMATION",
        subtitle: "Workflow Optimization",
        description:
          "I design prompt pipelines and Python automations that compress hours of manual work into minutes — from research aggregation and data wrangling to structured report generation. Proficient in working with large language model APIs and building reliable workflows that integrate AI into existing data and business processes. The focus is on consistent, repeatable output that genuinely saves time rather than just impressive one-off demos.",
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
          "Managing access control and facility security operations in a professional service environment. Responsible for maintaining strict operational protocols, controlling access across multiple points, and delivering high-quality, consistent service across diverse security scenarios.",
      },
      {
        role: "Freelance Analyst & Developer",
        company: "Freelancer",
        period: "2022 – Present",
        description:
          "Providing comprehensive freelance services across data analytics, web development, gaming, and capital markets. I design and execute full data pipelines that surface actionable insights from complex datasets, delivering clear, stakeholder-ready reporting. On the technical side, I architect and deploy robust, responsive websites tailored to client needs, and build custom plugins and solutions for game environments in the gaming industry. In parallel, I actively engage in capital market trading — applying rigorous market analysis, disciplined risk management, and financial acumen to Proprietary (Prop/Nostro) trading strategies across equity and derivative instruments.",
      },
      {
        role: "Military Prep Coordinator",
        company: "Midor Ledor Association",
        period: "2022 – 2023",
        description:
          "Managed military preparation programs for service candidates, coordinating multiple concurrent workstreams under time pressure. Provided structured mentorship and logistical support to ensure candidates were thoroughly prepared for the demands of military service.",
      },
      {
        role: "Combat Soldier & Gunner",
        company: "Israel Defense Forces (IDF)",
        period: "2020 – 2022",
        description:
          "Operated advanced technological systems in high-stakes, rapidly evolving field environments, exercising rapid decision-making under pressure. Participated in Guardian of the Walls operations. Developed the disciplined operational planning and analytical composure that directly translates to demanding data and finance roles.",
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
          "Investigated ETH price sensitivity to macroeconomic indicators — Fed rate decisions, DXY strength, NDAQ correlation and BTC dominance — using on-chain data pipelines and multivariate regression. Surfaced a statistically significant leading indicator ahead of major ETH drawdowns, validated across 5 years of historical data.",
      },
      {
        category: "Analytics · Gaming",
        description:
          "Mined 36 months of player transaction logs from the Craftiverse server network to surface retention drivers, economy leakage points, and high-value player cohorts. Delivered an interactive Power BI dashboard enabling real-time game economy balancing, contributing to a measurable improvement in player retention.",
      },
      {
        category: "Analytics · Public Safety",
        description:
          "Built a 7-page Power BI report on ~853K LAPD incidents from 2020 through late 2023, breaking down crime by geography, time-of-day, weapon, victim demographics and case status. Authored the Power Query pipeline (header repair, locale-aware date parsing, sentinel cleanup) and DAX measures for YoY trends, peak hours, reporting lag and arrest rate. Wrote Python validation scripts that catch upstream schema drift before refresh.",
      },
    ],
  },
  connect: {
    eyebrow: "Connect",
    title: "Let's Connect.",
    body:
      "Open to collaboration and junior analyst opportunities in data, finance, and tech.",
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
    messagePlaceholder: "Tell me about your project or opportunity...",
    send: "Send Message",
    sending: "Sending...",
    close: "Close",
    closeAria: "Close modal",
    successTitle: "Message Sent",
    successBody: "Thanks for reaching out. I'll get back to you as soon as possible.",
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
    role: "סטודנט לכלכלה וניהול —",
    roleAccent: "מחפש תפקידי אנליסט נתונים וג'וניור.",
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
    titleStart: "אנליסט ממוקד,",
    titleEnd: "בהתהוות.",
    p1Pre: "סטודנט לכלכלה וניהול ב",
    p1University: "אוניברסיטה הפתוחה",
    p1Mid:
      "(ממוצע 90), עם רקע שמשלב שירות צבאי וניהול תפעולי בקנה מידה רחב. החוויות הללו עיצבו חשיבה אנליטית וממושמעת — ויכולת לתרגם מידע גולמי ל",
    p1End: "החלטות ברורות ובנות יישום.",
    p2Pre: "מהצד הטכני, אני עובד לאורך כל צינור הנתונים — עיבוד מערכי נתונים עם",
    p2Stack: "Python (Pandas, NumPy, Statsmodels)",
    p2End:
      ", כתיבת SQL מדויק, והפקת תובנות באמצעות דשבורדים של Power BI עם מדדי DAX. העבודה היישומית שלי כוללת ניתוח שוק הקריפטו תוך מתאם בין מדדי On-Chain למחזורי מחיר, וניתוח התנהגות משתמשים שחשף דפוסי שימור והכנסות מנתוני פעילות בקנה מידה רחב.",
    p3Pre: "אני מחפש תפקידים ב",
    p3Roles: "ניתוח נתונים וניתוח פיננסי",
    p3End:
      "— תפקידים שבהם שווקים, מספרים וטכנולוגיה נפגשים. אני עובד באופן עצמאי, לומד מהר, ומשתמש בכלי AI במכוון כדי להעלות את איכות התוצר מבלי לקצר פינות.",
    skillsLabel: "טכנולוגיות וכישורים",
    languagesLabel: "שפות",
    stats: [
      { label: "תואר ראשון בכלכלה וניהול", sub: "האוניברסיטה הפתוחה" },
      { label: "פרילנסר", sub: "ניתוח נתונים ותכנות" },
    ],
    languages: [
      { lang: "עברית", level: "שפת אם" },
      { lang: "אנגלית", level: "מקצועית" },
      { lang: "רוסית", level: "ברמה גבוהה" },
    ],
  },
  whatIDo: {
    eyebrow: "מה אני עושה",
    titleStart: "שלושה תחומים,",
    titleEnd: "ראש אנליטי אחד.",
    rows: [
      {
        title: "ניתוח נתונים",
        subtitle: "הופך נתונים גולמיים לתובנות בנות יישום",
        description:
          "אני עובד לאורך כל צינור הנתונים — מקליטת ייצואים גולמיים, ניקוי ועיבוד מערכי נתונים עם Python (Pandas, NumPy), שאילתות מסדי נתונים רלציוניים ב-SQL, ועד הפקת תוצרים בדשבורדים אינטראקטיביים של Power BI עם מדדי DAX. תהליכי העבודה הסטטיסטיים כוללים ניתוחי רגרסיה, מתאם, וחקירת סדרות עיתיות באמצעות Statsmodels ו-Matplotlib. המטרה תמיד אותה מטרה: לחתוך את הרעש ולהפיק תובנה שמכוונת להחלטות בטוחות.",
      },
      {
        title: "ניתוח פיננסי",
        subtitle: "מודלים שמשפיעים על העסק",
        description:
          "אני קורא דוחות כספיים מקצה לקצה — דוח רווח והפסד, מאזן ותזרים מזומנים — ובונה מודלי תרחיש והערכת שווי שמתרגמים מספרים להקשר אסטרטגי. עבודת ניתוח השווקים שלי כוללת דינמיקה של שוק ההון, מתאמים מאקרו-כלכליים, ומדדים פיננסיים On-Chain. אני מבנה תוצרים ברורים ותמציתיים המתאימים למחקרי השקעות ולקבלת החלטות תפעוליות.",
      },
      {
        title: "AI ואוטומציה",
        subtitle: "ייעול תהליכי עבודה",
        description:
          "אני מתכנן צינורות פרומפטים ואוטומציות פייתון שדוחסות שעות של עבודה ידנית לדקות — מאיסוף מחקר ועיבוד נתונים ועד הפקת דוחות מובְנים. בקיא בעבודה עם ממשקי API של מודלי שפה גדולים ובבניית תהליכים אמינים שמשלבים AI בתהליכי נתונים ועסקים קיימים. הדגש הוא על תוצר עקבי ובר-שחזור שבאמת חוסך זמן, ולא רק הדגמות מרשימות חד-פעמיות.",
      },
    ],
  },
  experience: {
    eyebrow: "ניסיון",
    title: "היכן שהייתי.",
    present: "כיום",
    items: [
      {
        role: "אבטחה ובקרת כניסה",
        company: "טים 3",
        period: "2023 – כיום",
        description:
          "ניהול בקרת כניסה ותפעול אבטחת מתקנים בסביבת שירות מקצועית. אחראי לשמירה על נהלים תפעוליים קפדניים, בקרת כניסות במספר נקודות, ומתן שירות אחיד ואיכותי במגוון תרחישי אבטחה.",
      },
      {
        role: "אנליסט ומפתח פרילנס",
        company: "פרילנסר",
        period: "2022 – כיום",
        description:
          "מתן שירותי פרילנס מקיפים בתחומי ניתוח נתונים, פיתוח ווב, גיימינג ושוק ההון. אני מתכנן ומבצע צינורות נתונים מלאים שמפיקים תובנות בנות יישום ממערכי נתונים מורכבים, ומספק דיווחים ברורים לבעלי עניין. בצד הטכני, אני בונה ומפרסם אתרים רספונסיביים ויציבים בהתאמה אישית, ומפתח פלאגינים ופתרונות מותאמים לסביבות גיימינג. במקביל, אני פעיל במסחר בשוק ההון — מיישם ניתוח שוק קפדני, ניהול סיכונים ממושמע, ושיקול דעת פיננסי באסטרטגיות מסחר פרופ/נוסטרו על מניות ונגזרים.",
      },
      {
        role: "רכז הכנה לצבא",
        company: "עמותת מדור לדור",
        period: "2022 – 2023",
        description:
          "ניהול תכניות הכנה לשירות הצבאי, תיאום כמה תהליכים מקבילים תחת לחץ זמן. ליווי מובְנה ותמיכה לוגיסטית למועמדים על מנת להבטיח שיגיעו ערוכים לדרישות השירות הצבאי.",
      },
      {
        role: "חייל קרבי ותותחן",
        company: "צבא ההגנה לישראל (צה״ל)",
        period: "2020 – 2022",
        description:
          "הפעלת מערכות טכנולוגיות מתקדמות בסביבות שטח דינמיות ובלחץ גבוה, תוך קבלת החלטות מהירה. השתתפות במבצע שומר החומות. פיתחתי תכנון תפעולי ממושמע וריכוז אנליטי שמתורגמים ישירות לתפקידי נתונים ופיננסים תובעניים.",
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
          "חקרתי את הרגישות של מחיר ETH למדדים מאקרו-כלכליים — החלטות ריבית של הפד, חוזק DXY, מתאם NDAQ ודומיננטיות BTC — באמצעות צינורות נתוני On-Chain ורגרסיה רב-משתנית. חשפתי אינדיקטור מקדים מובהק סטטיסטית לפני ירידות משמעותיות ב-ETH, שאומת על פני 5 שנות נתונים היסטוריים.",
      },
      {
        category: "אנליטיקה · גיימינג",
        description:
          "כריתי 36 חודשים של לוגי טרנזקציות שחקנים מרשת השרתים של Craftiverse כדי לחשוף מניעי שימור, נקודות דליפה בכלכלה, וקבוצות שחקנים בעלי ערך גבוה. סיפקתי דשבורד Power BI אינטראקטיבי שמאפשר איזון של כלכלת המשחק בזמן אמת, ותרם לשיפור מדיד בשימור שחקנים.",
      },
      {
        category: "אנליטיקה · ביטחון ציבורי",
        description:
          "בניתי דוח Power BI בן 7 עמודים על כ-853 אלף אירועי משטרת LA מ-2020 ועד סוף 2023, עם פילוחים לפי גיאוגרפיה, שעת יום, נשק, דמוגרפיית קורבן וסטטוס תיק. כתבתי את צינור ה-Power Query (תיקון כותרות שבורות, פרסור תאריכים לפי לוקאל, ניקוי ערכי סנטינל) ומדדי DAX למגמות YoY, שעות שיא, השהיית דיווח ושיעור מעצרים. בנוסף, כתבתי סקריפטי ולידציה ב-Python שתופסים סטיות סכמה במקור לפני הריענון.",
      },
    ],
  },
  connect: {
    eyebrow: "יצירת קשר",
    title: "בואו נדבר.",
    body:
      "פתוח לשיתופי פעולה ולהזדמנויות אנליסט ג'וניור בתחומי הנתונים, הפיננסים והטכנולוגיה.",
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
    messagePlaceholder: "ספרו לי על הפרויקט או ההזדמנות שלכם...",
    send: "שליחה",
    sending: "שולח...",
    close: "סגירה",
    closeAria: "סגור חלון",
    successTitle: "ההודעה נשלחה",
    successBody: "תודה על הפנייה. אחזור אליכם בהקדם האפשרי.",
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
