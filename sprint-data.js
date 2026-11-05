/* =====================================================================
   PYTHON SPRINT: shared settings + data
   Both index.html (class page) and board.html (Build Dashboard) load this.
   Edit settings here once and both pages update.
   ===================================================================== */

/* ---------- 1. Connect your Google Sheet + Form ----------
   Leave the CSV links blank to run in DEMO MODE with sample students. */
const SPRINT = {
  CLASS_NAME: "Python Sprint",
  TEACHER: "Programming · View Ridge Middle School",
  TEACHER_SHORT: "Mrs. Davis",   // how students address her

  /* "Publish to web" CSV link of the Board tab
     (columns: Timestamp, Name, Period, Activity, Status, Helper) */
  /* Live feed: Sheila's Portal link (the one ending in /exec). Commits show up in about
     15 seconds instead of up to 5 minutes. Blank = use the published links below only.
     If the live feed can't load on a computer, the page quietly uses the published links. */
  LIVE_URL: "https://script.google.com/a/macros/ridgefieldsd.org/s/AKfycbx5iJx4bCTAbTFXaj2oglr8EellXWuu74b7VAB3OSOgbkLS_DMCBMPrnLObBLxTRMLC8Q/exec",

  BOARD_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIyi8MheDPVuPwLkDjaTrXVf2_HMriXyvsuCrOqT246oRWpMQ0Vka0Bl8_vw--UtWJSWxNLCCH_6hN/pub?gid=173807460&single=true&output=csv",
  /* "Publish to web" CSV link of the Engineers tab (columns: Name, Period). No emails. */
  ROSTER_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIyi8MheDPVuPwLkDjaTrXVf2_HMriXyvsuCrOqT246oRWpMQ0Vka0Bl8_vw--UtWJSWxNLCCH_6hN/pub?gid=114506554&single=true&output=csv",
  /* "Publish to web" CSV link of the Settings tab. Goals, rewards, short weeks, and
     lesson jumps typed there override the defaults below. */
  SETTINGS_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIyi8MheDPVuPwLkDjaTrXVf2_HMriXyvsuCrOqT246oRWpMQ0Vka0Bl8_vw--UtWJSWxNLCCH_6hN/pub?gid=1183604090&single=true&output=csv",

  /* Commit form. Get entry numbers from the form's "Get pre-filled link". */
  FORM_URL: "https://docs.google.com/forms/d/e/1FAIpQLSc5nbl8p3Fnhykq6tro3gpGoNRbkZHbXZCvrAXP12vA2zWqcA/viewform",
  FORM_ENTRY_ACTIVITY: "964891644",   // e.g. "123456789"
  FORM_ENTRY_NAME: "",       // not needed: the form knows who they are from their school email
  FORM_ENTRY_PERIOD: "",     // not needed

  /* Where each period is in TechSmart. This finds itself: each period's
     "We're here" lesson follows where that period's commits landed in the
     last few days. You don't need to touch it.
     To jump ahead before anyone has committed (first day of a new lesson),
     set it here. The page uses whichever is further along, so there's
     nothing to clean up later.   Example:  PERIOD_LESSONS: { "3":"2.3" },
     CURRENT_LESSON is only used before any commits exist. */
  CURRENT_LESSON: "2.4",
  PERIOD_LESSONS: {},

  /* Fresh start: every quest BEFORE this one is archived. Archived quests stay
     on the page, grayed out, but they can't be committed and earn 0 points.
     Change it to move the starting line. Blank ("") archives nothing.
     A "Start at" row on the Settings tab overrides this. */
  START_AT: "After School Planner",

  REFRESH_SECONDS: 30,

  /* ---------- 2. Weekly sprint (per student on the roster) ---------- */
  TIERS: [
    { key:"build",  name:"Build passing", perStudent:150, reward:"Free seating Friday" },
    { key:"tests",  name:"Tests passing", perStudent:300, reward:"Free seating all next week" },
    { key:"deploy", name:"Deployed",      perStudent:400, reward:"Free seating all next week + Friday free-code day", everyone:true },
  ],

  /* Short weeks: test weeks, holidays, heavy teaching weeks. List the Monday of the
     week and how many days of coding it really has. Goals shrink to match, so the
     class can still hit Deployed. Unlisted weeks count as 5 days. */
  SHORT_WEEKS: {
    /* "2026-11-23": 3,   example: Thanksgiving week. Check your school calendar. */
  },

  /* ---------- 3. Mentoring ---------- */
  MENTOR_POINTS: 25,
  MENTOR_DAILY_CAP: 3,

  /* Rows with these words in the Status column don't count */
  EXCLUDE_STATUS: ["needs work", "redo", "no"],
};

/* ---------- Engineer levels (never reset) ---------- */
const LEVELS = [
  { lv:1, title:"Entry-Level Engineer",     at:0,    means:"Brand new. Fixing small stuff with help." },
  { lv:2, title:"Junior Engineer",          at:300,  means:"Handles small tasks on your own." },
  { lv:3, title:"Software Engineer",        at:800,  means:"A dependable part of the team." },
  { lv:4, title:"Senior Software Engineer", at:1500, means:"Leads features. Owns the quality of your code." },
  { lv:5, title:"Staff Engineer",           at:2500, means:"Makes the big design calls." },
  { lv:6, title:"Senior Staff Engineer",    at:3500, means:"Shapes the whole company." },
  { lv:7, title:"Distinguished Engineer",   at:5000, means:"Sets the standard for the industry." },
];

/* ---------- Hints by activity type. Add custom ones in HINTS by activity name. ---------- */
const TYPE_HINTS = {
  "Coding Technique Practice": "Open the Technique Demo right before this one. The practice uses the exact same pattern, just with new values.",
  "Student Code Writing": "Read the Requirements tab first. Build one requirement at a time and press Run after each one.",
  "Student Code Debug": "Run it first and read the red error. The line number tells you where to start looking.",
  "Student Code Restructure": "Run the original so you know what it should do. Change how it's built, not what it does.",
  "Student Code Comprehension": "Trace it line by line. Write down what each variable holds as you go.",
  "Warm Up": "Do it with the class. Commit it after your teacher goes over it.",
  "Code Your Own": "Start from a program you already built in this lesson and add one new idea of your own.",
};
const HINTS = {
  /* "Running Total (2)": "Your total starts at 0 before the loop, not inside it.", */
};

const LESSONS = [
  {id:"1.1", unit:1, unitTitle:"Data", title:"Statements & Variables", acts:[
    {n:"1.1 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"1.1 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Friend Network", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"1.1 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Dealing with Errors", t:"Student Code Debug", p:100, s:"short", k:"req"}
  ]},
  {id:"1.2", unit:1, unitTitle:"Data", title:"Values", acts:[
    {n:"1.2 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Concatenating a Number (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Concatenating a Number (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Number Input (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Number Input (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Inspirational Quote", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"1.2 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"A Day Anywhere", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"1.2 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Know Your Coder", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"1.2 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"1.2 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"1.Q", unit:1, unitTitle:"Data", title:"Unit 1 Quiz Project", acts:[
    {n:"Adventure Libs", t:"Student Code Writing", p:100, s:"short", k:"req"}
  ]},
  {id:"1.3", unit:1, unitTitle:"Data", title:"Expressions", acts:[
    {n:"1.3 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Increment or Decrement (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Increment or Decrement (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Typecasting an Expression (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Typecasting an Expression (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"1.3 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Modulus (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Modulus (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"How Much TV", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"1.3 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Number Horoscope", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Milk Minder", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"1.3 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"1.3 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"2.1", unit:2, unitTitle:"Decisions", title:"Conditionals (If)", acts:[
    {n:"2.1 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"User Choice (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"User Choice (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Running Total (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Running Total (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Limit Number (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Limit Number (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"2.1 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Spy Docs", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.1 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"High Or Low", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Trick Judging", t:"Student Code Comprehension", p:100, s:"short", k:"req"},
    {n:"2.1 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"2.1 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"2.2", unit:2, unitTitle:"Decisions", title:"Conditionals (Else)", acts:[
    {n:"2.2 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Check Ranges (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Check Ranges (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Input Validation (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Input Validation (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Best Day Ever", t:"Student Code Restructure", p:100, s:"short", k:"req"},
    {n:"2.2 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Bike Customizer", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.2 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Personality Test", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.2 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"2.2 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"2.3", unit:2, unitTitle:"Decisions", title:"Booleans", acts:[
    {n:"2.3 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Storing a Boolean (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Storing a Boolean (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Simple Conditions (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Simple Conditions (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Limited Range (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Limited Range (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Nested Conditionals (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"2.3 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Nested Conditionals (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Robot Party", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.3 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Movie Friend", t:"Student Code Comprehension", p:100, s:"short", k:"req"},
    {n:"Fortune Teller", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.3 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"2.3 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"2.Q", unit:2, unitTitle:"Decisions", title:"Unit 2 Quiz Project", acts:[
    {n:"Pick a Pet", t:"Student Code Writing", p:100, s:"short", k:"req"}
  ]},
  {id:"2.4", unit:2, unitTitle:"Decisions", title:"While Loops", acts:[
    {n:"2.4 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Breaking a Loop (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Breaking a Loop (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Force Correct Input (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Force Correct Input (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Alternating Loops (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Alternating Loops (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Nested Loops (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Nested Loops (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"2.4 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"After School Planner", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.4 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Ten Guesses", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Looking for Loops", t:"Student Code Restructure", p:100, s:"short", k:"req"},
    {n:"2.4 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"2.4 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"2.5", unit:2, unitTitle:"Decisions", title:"Randomness & Libraries", acts:[
    {n:"2.5 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Random Choice (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Random Choice (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Weighted Choice (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Weighted Choice (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"2.5 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Choosing Hat", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Social Bubble", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.5 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Card War", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"2.5 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"2.5 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"2.6", unit:2, unitTitle:"Decisions", title:"Debugging", acts:[
    {n:"2.6 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"The Secret Code", t:"Student Code Debug", p:100, s:"short", k:"req"},
    {n:"2.6 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"How Many Seconds", t:"Student Code Debug", p:100, s:"short", k:"req"},
    {n:"2.6 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"RPS vs. Computer", t:"Student Code Debug", p:100, s:"short", k:"req"}
  ]},
  {id:"3.1", unit:3, unitTitle:"Drawing", title:"Lines", acts:[
    {n:"3.1 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Opening a Window (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Opening a Window (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Declare Points (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Declare Points (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Line Thickness (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Line Thickness (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"3.1 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Self Portrait", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Shape Conspiracy", t:"Student Code Comprehension", p:100, s:"short", k:"req"},
    {n:"3.1 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Digital Signature", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.1 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"3.1 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"3.2", unit:3, unitTitle:"Drawing", title:"Shapes & Color", acts:[
    {n:"3.2 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Defining a Shape (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Defining a Shape (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Constructing Colors (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Constructing Colors (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Draw Order (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Draw Order (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Shapes with Borders (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Shapes with Borders (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Great Gradient", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.2 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Hue Master", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.2 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Shade Imposter", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.2 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"3.2 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"3.3", unit:3, unitTitle:"Drawing", title:"Animation", acts:[
    {n:"3.3 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Animating Shapes (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Animating Shapes (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Animating Rect Shapes (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Animating Rect Shapes (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Adjust Animation Speed (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Adjust Animation Speed (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Backgrounds and Trails (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Backgrounds and Trails (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Healthful UFO", t:"Student Code Restructure", p:100, s:"short", k:"req"},
    {n:"3.3 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Stick Dance: Smooth", t:"Student Code Restructure", p:100, s:"short", k:"req"},
    {n:"3.3 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Bouncing Ball", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.3 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"3.3 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"3.Q", unit:3, unitTitle:"Drawing", title:"Unit 3 Quiz Project", acts:[
    {n:"Outfit Picker", t:"Student Code Writing", p:100, s:"short", k:"req"}
  ]},
  {id:"3.4", unit:3, unitTitle:"Drawing", title:"Program Structure", acts:[
    {n:"3.4 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Keep Program Open (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Keep Program Open (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Close Window (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Close Window (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Paragraph Comments (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Paragraph Comments (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"3.4 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Tortoise vs. Hare", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Living Landscape", t:"Student Code Debug", p:100, s:"short", k:"req"},
    {n:"3.4 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Water Balloon Drop", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.4 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"3.4 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"3.5", unit:3, unitTitle:"Drawing", title:"Mouse & Keyboard", acts:[
    {n:"3.5 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Saving a Tuple (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Saving a Tuple (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Follow Mouse (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Follow Mouse (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Check Event Key (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Check Event Key (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Move With Arrow Keys (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Move With Arrow Keys (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"3.5 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Virtual Jumprope", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Custom Cursor", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.5 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Zen Flycatcher", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"Color Picker", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.5 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"3.5 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
  {id:"3.6", unit:3, unitTitle:"Drawing", title:"Time", acts:[
    {n:"3.6 Warm Up 1", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Framerate (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Framerate (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Timers (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Timers (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"3.6 Warm Up 2", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Duration (1)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"Duration (2)", t:"Coding Technique Practice", p:25, s:"tiny", k:"req"},
    {n:"3.6 Warm Up 3", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Moving Art Gallery", t:"Student Code Debug", p:100, s:"short", k:"req"},
    {n:"Stair Ball", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.6 Warm Up 4", t:"Warm Up", p:50, s:"tiny", k:"standup"},
    {n:"Sunrise Timer", t:"Student Code Writing", p:100, s:"short", k:"req"},
    {n:"3.6 Code Your Own", t:"Student Code Writing", p:200, s:"short", k:"bonus"}
  ]},
];
/* =====================================================================
   ENGINE (no need to edit below)
   ===================================================================== */
const ACTS = [];
LESSONS.forEach((L,li)=>L.acts.forEach(a=>ACTS.push({...a, lesson:L.id, lessonIdx:li})));
const normName = s => String(s||"").toLowerCase().replace(/[^a-z0-9.]+/g," ").trim();
const ACT_BY = new Map(ACTS.map(a=>[normName(a.n), a]));
const findAct = raw => ACT_BY.get(normName(raw)) || null;
ACTS.forEach((a,i)=>a.i=i);
/* Fresh start: quests before SPRINT.START_AT are archived (0 points, no Commit). */
function archiveCut(){ const a=SPRINT.START_AT ? findAct(SPRINT.START_AT) : null; return a ? a.i : 0; }
function isArchived(a){ const x=a && findAct(a.n||a); return !!x && x.i < archiveCut(); }
function startLessonIdx(){ const c=archiveCut(); return c ? ACTS[c].lessonIdx : 0; }
const esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function parseCSV(text){
  const rows=[]; let row=[], f="", q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(q){ if(c==='"'){ if(text[i+1]==='"'){f+='"';i++;} else q=false; } else f+=c; }
    else if(c==='"') q=true;
    else if(c===','){ row.push(f); f=""; }
    else if(c==='\n'){ row.push(f); rows.push(row); row=[]; f=""; }
    else if(c!=='\r') f+=c;
  }
  if(f!==""||row.length){ row.push(f); rows.push(row); }
  return rows.filter(r=>r.some(x=>String(x).trim()!==""));
}
/* Live feed from the Portal (JSONP, so it works from GitHub Pages). One request covers all three tabs. */
let LIVE_P=null, LIVE_AT=0, LIVE_OFF_UNTIL=0;
function liveFeed(){
  if(LIVE_P && Date.now()-LIVE_AT<5000) return LIVE_P;   /* board + roster + settings share one trip */
  LIVE_AT=Date.now();
  LIVE_P=new Promise((res,rej)=>{
    const cb="__sprintFeed"+Math.random().toString(36).slice(2);
    const tag=document.createElement("script"); let done=false;
    const fin=(ok,v)=>{ if(done) return; done=true; try{ delete window[cb]; }catch(e){ window[cb]=undefined; } tag.remove(); ok?res(v):rej(v); };
    window[cb]=d=>fin(!!(d&&d.board),d||new Error("empty feed"));
    tag.onerror=()=>fin(false,new Error("live feed blocked"));
    setTimeout(()=>fin(false,new Error("live feed timeout")),8000);
    tag.src=SPRINT.LIVE_URL+(SPRINT.LIVE_URL.includes("?")?"&":"?")+"data=sprint&callback="+cb+"&t="+Date.now();
    document.head.appendChild(tag);
  });
  LIVE_P.catch(()=>{ LIVE_OFF_UNTIL=Date.now()+120000; LIVE_P=null; });   /* failed: use published links for 2 minutes */
  return LIVE_P;
}
let LIVE_USED=false;   /* true when the last load came from the live feed */
async function getCSV(url){
  const key = url===SPRINT.BOARD_CSV_URL?"board":url===SPRINT.ROSTER_CSV_URL?"roster":url===SPRINT.SETTINGS_CSV_URL?"settings":"";
  if(key && SPRINT.LIVE_URL && Date.now()>LIVE_OFF_UNTIL && typeof document!=="undefined"){
    try{ const d=await liveFeed(); if(d && Array.isArray(d[key])){ LIVE_USED=true; return d[key]; } }catch(e){}
  }
  LIVE_USED=false;
  const r = await fetch(url+(url.includes("?")?"&":"?")+"t="+Date.now(), {cache:"no-store"});
  if(!r.ok) throw new Error("HTTP "+r.status);
  return parseCSV(await r.text());
}
function findCol(headers, words){
  const h=headers.map(x=>String(x).toLowerCase());
  for(const w of words){ const i=h.findIndex(x=>x.includes(w)); if(i>-1) return i; }
  return -1;
}
function displayName(raw){
  const parts=String(raw||"").trim().replace(/\s+/g," ").split(" ").filter(Boolean);
  if(!parts.length) return "";
  const cap=w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase();
  if(parts.length===1) return cap(parts[0]);
  const last=parts[parts.length-1].replace(/\./g,"");
  return `${cap(parts[0])} ${last.charAt(0).toUpperCase()}.`;
}
const cleanPer = p => String(p||"").trim().replace(/^period\s*/i,"").replace(/^p/i,"");
function levelFor(pts){ let L=LEVELS[0]; LEVELS.forEach(x=>{ if(pts>=x.at) L=x; }); return L; }
function nextLevel(pts){ return LEVELS.find(x=>x.at>pts) || null; }
function weekStart(d){ const x=new Date(d); x.setHours(0,0,0,0); const day=(x.getDay()+6)%7; x.setDate(x.getDate()-day); return x; }
const dayKey = d => d.toDateString();

/* Settings tab: Setting | For | Value. Overrides goals, rewards, lesson jumps, short weeks. */
function applySettings(rows){
  const lessons={}, shorts={};
  rows.slice(1).forEach(r=>{
    const kind=String(r[0]||"").toLowerCase(), forv=String(r[1]||"").trim(), val=String(r[2]||"").trim();
    if(!kind||!val) return;
    const tier = SPRINT.TIERS.find(T=>forv.toLowerCase().includes(T.key) || T.name.toLowerCase()===forv.toLowerCase());
    if(kind.includes("goal") && tier && !isNaN(+val)) tier.perStudent=+val;
    else if(kind.includes("reward") && tier) tier.reward=val;
    else if(kind.includes("lesson") && forv) lessons[cleanPer(forv)]=val;
    else if(kind.includes("short") && forv && !isNaN(+val)){ const d=new Date(forv); if(!isNaN(d)) shorts[ymd(weekStart(d))]=+val; }
    else if(kind.includes("start")) SPRINT.START_AT = /^(none|off|nothing)$/i.test(val) ? "" : val;
  });
  SPRINT.PERIOD_LESSONS={...SPRINT.PERIOD_LESSONS, ...lessons};
  SPRINT.SHORT_WEEKS={...SPRINT.SHORT_WEEKS, ...shorts};
}

function loadRoster(rows){
  const H=rows[0]||[];
  const cF=findCol(H,["first"]), cL=findCol(H,["last"]), cN=findCol(H,["name"]), cP=findCol(H,["period","class"]);
  return rows.slice(1).map(r=>{
    const full = cF>-1 ? `${r[cF]||""} ${cL>-1?r[cL]||"":""}` : (cN>-1?r[cN]:"");
    return { name:displayName(full), per:cP>-1?cleanPer(r[cP]):"" };
  }).filter(x=>x.name);
}

/* Turns Board rows into every student's points, levels, sprint totals, feed. */
function computeAll(rows, roster, now=new Date()){
  const H=rows[0]||[];
  const cT=findCol(H,["timestamp","time"]), cN=findCol(H,["name"]), cP=findCol(H,["period","class"]);
  const cA=findCol(H,["activity","exercise","assignment"]), cS=findCol(H,["status"]), cH=findCol(H,["helper","helped","help"]);
  const wk=weekStart(now), lastWk=new Date(wk); lastWk.setDate(lastWk.getDate()-7);
  const S=new Map();
  const get=(name,per)=>{ const id=name+"|"+per;
    if(!S.has(id)) S.set(id,{id,name,per,total:0,week:0,lastWeek:0,done:new Set(),standup:new Set(),mentorDays:new Map(),mentorWeek:0,furthest:-1,lastT:0});
    return S.get(id); };
  roster.forEach(r=>get(r.name,r.per));
  const events=[];
  const credit=(s,pts,t)=>{ s.total+=pts; if(t>=wk) s.week+=pts; else if(t>=lastWk) s.lastWeek+=pts; };
  const data=rows.slice(1).map(r=>({r,t:cT>-1?new Date(r[cT]):new Date(0)})).sort((a,b)=>a.t-b.t);
  data.forEach(({r,t})=>{
    if(isNaN(t)) t=new Date(0);
    const name=displayName(cN>-1?r[cN]:""); if(!name) return;
    const per=cP>-1?cleanPer(r[cP]):"";
    if(cS>-1 && SPRINT.EXCLUDE_STATUS.includes(String(r[cS]||"").trim().toLowerCase())) return;
    const a=findAct(cA>-1?r[cA]:""); if(!a) return;
    if(a.i < archiveCut()) return;   /* archived: before the fresh start, earns nothing */
    const s=get(name,per); let gained=0;
    if(a.k==="standup"){ const dk=dayKey(t); if(!s.done.has(a.n) && !s.standup.has(dk)){ s.standup.add(dk); gained=a.p; } s.done.add(a.n); }
    else if(!s.done.has(a.n)){ s.done.add(a.n); gained=a.p; }
    if(gained){ const before=levelFor(s.total).lv; credit(s,gained,t); s.furthest=Math.max(s.furthest,a.lessonIdx); s.lastT=+t;
      const after=levelFor(s.total).lv;
      events.push({t,type:"commit",id:s.id,name,per,act:a.n,kind:a.k,pts:gained,levelUp:after>before?after:0}); }
    const helperRaw=cH>-1?String(r[cH]||"").trim():"";
    if(gained && helperRaw && !/^(no|none|nobody|n\/a)$/i.test(helperRaw)){
      const hn=displayName(helperRaw);
      if(hn && hn!==name && (!roster.length || S.has(hn+"|"+per))){   /* helper must be in this period's roster */
        const h=get(hn,per), dk=dayKey(t), c=h.mentorDays.get(dk)||0;
        if(c<SPRINT.MENTOR_DAILY_CAP){ h.mentorDays.set(dk,c+1); const before=levelFor(h.total).lv; credit(h,SPRINT.MENTOR_POINTS,t); if(t>=wk) h.mentorWeek++;
          events.push({t,type:"mentor",id:h.id,name:hn,per,act:name,pts:SPRINT.MENTOR_POINTS,levelUp:levelFor(h.total).lv>before?levelFor(h.total).lv:0}); }
      }
    }
  });
  const students=[...S.values()].map(s=>({...s, level:levelFor(s.total), version: s.furthest>-1 ? LESSONS[s.furthest].id.replace(".Q",".3") : "0.0"}));
  AUTO_LESSONS = detectLessons(events, now);
  return {students, events, weekStart:wk, autoLessons:AUTO_LESSONS};
}

/* "We're here": the lesson each period has been committing in lately,
   or the teacher's setting if that's further along. */
let AUTO_LESSONS = {};
const lessonIdx = id => LESSONS.findIndex(L=>L.id===id);
function detectLessons(events, now=new Date()){
  const out={}, byPer=new Map();
  events.filter(e=>e.type==="commit"&&e.per).forEach(e=>{ if(!byPer.has(e.per)) byPer.set(e.per,[]); byPer.get(e.per).push(e); });
  byPer.forEach((evs,per)=>{
    const recent=evs.filter(e=>now-e.t < 3*864e5);
    const use = recent.length>=5 ? recent : evs.slice(-30);
    const count=new Map();
    /* Warm Ups count 5x: the whole class does the same one together, so they're the best clue. */
    use.forEach(e=>{ const a=findAct(e.act); if(a) count.set(a.lessonIdx,(count.get(a.lessonIdx)||0)+(a.k==="standup"?5:1)); });
    let best=-1, bestN=0; count.forEach((n,i)=>{ if(n>bestN||(n===bestN&&i>best)){ best=i; bestN=n; } });
    if(best>-1) out[per]=LESSONS[best].id;
  });
  return out;
}
function currentLessonFor(per){
  const id=currentLessonRaw(per), start=startLessonIdx();
  return lessonIdx(id) < start ? LESSONS[start].id : id;   /* never point back into the archive */
}
function currentLessonRaw(per){
  const manual = per && SPRINT.PERIOD_LESSONS && SPRINT.PERIOD_LESSONS[per];
  const auto = per && AUTO_LESSONS[per];
  if(manual && auto) return lessonIdx(manual) >= lessonIdx(auto) ? manual : auto;
  if(manual || auto) return manual || auto;
  const any=Object.values(AUTO_LESSONS);
  if(!per && any.length){ const c={}; any.forEach(l=>c[l]=(c[l]||0)+1); return Object.entries(c).sort((a,b)=>b[1]-a[1]||lessonIdx(b[0])-lessonIdx(a[0]))[0][0]; }
  return SPRINT.CURRENT_LESSON;
}
const ymd = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
function daysThisWeek(wk){ const v=SPRINT.SHORT_WEEKS && SPRINT.SHORT_WEEKS[ymd(wk)]; return v ? Math.max(1,Math.min(5,v)) : 5; }

/* Sprint numbers for one period, or all periods ("ALL") */
function sprintFor(all, period){
  const list=all.students.filter(s=>period==="ALL"||s.per===period);
  const days=daysThisWeek(all.weekStart), scale=days/5;
  const n=Math.max(1,list.length)*scale;
  const pts=list.reduce((t,s)=>t+s.week,0);
  const onBoard=list.filter(s=>s.week>0).length;
  const tiers=SPRINT.TIERS.map(T=>{ const goal=Math.round(T.perStudent*n/25)*25; const ptsOk=pts>=goal; const allOk=!T.everyone||onBoard>=list.length;
    return {...T, goal, ptsOk, allOk, unlocked:ptsOk&&allOk}; });
  return {list, pts, onBoard, size:list.length, tiers, days, max:tiers[tiers.length-1].goal};
}
function periodsOf(all){ return [...new Set(all.students.map(s=>s.per).filter(Boolean))].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})); }

/* ---------- Demo data (used when the CSV links are blank) ---------- */
function demoData(now=new Date()){
  const first=["Ava","Liam","Maya","Noah","Zoe","Eli","Mia","Leo","Ivy","Kai","Nora","Owen","Luna","Finn","Sofia","Mateo","Ruby","Jaden","Aria","Diego","Chloe","Ethan","Layla","Isaac","Nina","Marcus","Priya","Caleb","Jasmine","Tyler","Hana","Lucas","Grace","Andre","Elena","Sam","Talia","Brody","Amara","Rowan","Leah","Nico","Paige","Omar","Willow","Gavin","Esme","Jonah","Sadie","Ezra","Kira","Miles","Daisy","Felix","Iris","Theo","Alana","Reid"];
  const last="ABCDEFGHJKLMNOPRSTVWYZ";
  let seed=42; const rnd=n=>{ seed=(seed*16807)%2147483647; return Math.floor(seed/2147483647*n); };
  const periods=["1","3","5"], roster=[];
  first.forEach((f,i)=>{ if(i>=78) return; roster.push({name:`${f} ${last[rnd(last.length)]}.`, per:periods[i%3]}); });
  const rows=[["Timestamp","Name","Period","Activity","Status","Helper"]];
  const startIdx=Math.max(ACTS.findIndex(a=>a.lesson==="1.3"), archiveCut());
  const days=[]; const d0=weekStart(now); d0.setDate(d0.getDate()-14);
  for(let d=new Date(d0); d<=now; d.setDate(d.getDate()+1)){ const wd=d.getDay(); if(wd>0&&wd<6) days.push(new Date(d)); }
  roster.forEach((s,si)=>{
    const drive=[0.15,0.35,0.6,0.8,0.95][si%5];
    const lateStarter = si%13===4;
    const DEMO_PACE={"1":"2.5","3":"2.4","5":"2.5"};
    const curIdx=ACTS.findIndex(a=>a.lesson===(DEMO_PACE[s.per]||SPRINT.CURRENT_LESSON));
    let ptr=startIdx+rnd(6);
    days.forEach((day,di)=>{
      if(lateStarter && di<days.length-1) return;
      if(si%7===3 && day>=weekStart(now)) return;   /* a few kids haven't committed yet this week */
      if(rnd(100)>drive*100+10) return;
      const isToday=dayKey(day)===dayKey(now);
      const hour=(h,m)=>{ const x=new Date(day); x.setHours(h,m,0,0); return x; };
      const paceL=LESSONS.findIndex(L=>L.id===(DEMO_PACE[s.per]||SPRINT.CURRENT_LESSON));
      const back=Math.max(0, Math.floor((days.length-1-di)/3));
      const wuL=LESSONS[Math.max(0,paceL-back)];
      const wus=wuL.acts.filter(a=>a.k==="standup");
      const wu=wus.length?ACTS.find(a=>a.n===wus[(days.length-1-di)%wus.length].n):null;
      if(wu){ const t=hour(9,5+rnd(10)); if(!isToday||t<now) rows.push([t.toISOString(),s.name,s.per,wu.n,"Pass",""]); }
      const count=1+rnd(Math.round(drive*6));
      for(let k=0;k<count && ptr<curIdx+4;k++){
        while(ptr<ACTS.length && ACTS[ptr].k==="standup") ptr++;
        const a=ACTS[ptr]; if(!a) break; ptr++;
        if(a.k==="bonus" && rnd(10)>drive*10) continue;
        const t=hour(9,25+k*7+rnd(6)); if(isToday&&t>now) break;
        const mates=roster.filter(x=>x.per===s.per&&x.name!==s.name);
        const helper = rnd(10)<2 ? mates[rnd(mates.length)].name : "";
        rows.push([t.toISOString(),s.name,s.per,a.n,"Pass",helper]);
      }
    });
  });
  const rosterRows=[["Name","Period"]].concat(roster.map(r=>[r.name,r.per]));
  return {rows, rosterRows};
}

/* Commit form link with the activity (and the student, if known) filled in */
function commitLink(actName, me){
  if(!SPRINT.FORM_URL) return "";
  const base=SPRINT.FORM_URL.split("?")[0].replace(/\/(edit|viewform).*$/,"/viewform");
  const q=["usp=pp_url"];
  if(SPRINT.FORM_ENTRY_ACTIVITY) q.push(`entry.${SPRINT.FORM_ENTRY_ACTIVITY}=${encodeURIComponent(actName)}`);
  if(me&&SPRINT.FORM_ENTRY_NAME) q.push(`entry.${SPRINT.FORM_ENTRY_NAME}=${encodeURIComponent(me.name)}`);
  if(me&&SPRINT.FORM_ENTRY_PERIOD) q.push(`entry.${SPRINT.FORM_ENTRY_PERIOD}=${encodeURIComponent(me.per)}`);
  return `${base}?${q.join("&")}`;
}
