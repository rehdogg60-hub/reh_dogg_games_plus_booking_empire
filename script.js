const screens = {
  title: document.getElementById("titleScreen"),
  chaos: document.getElementById("chaosScreen"),
  audience: document.getElementById("audienceScreen"),
  tagTeams: document.getElementById("tagTeamsScreen"),
  rankings: document.getElementById("rankingsScreen"),
  merchSponsors: document.getElementById("merchSponsorsScreen"),
  help: document.getElementById("helpScreen"),
  news: document.getElementById("newsScreen"),
  creativeTeam: document.getElementById("creativeTeamScreen"),
  bookerOffice: document.getElementById("bookerOfficeScreen"),
  championships: document.getElementById("championshipsScreen"),
  contracts: document.getElementById("contractsScreen"),
  legends: document.getElementById("legendsScreen"),
  roster: document.getElementById("rosterScreen"),
  feud: document.getElementById("feudScreen"),
  booking: document.getElementById("bookingScreen"),
  results: document.getElementById("resultsScreen"),
  final: document.getElementById("finalReportScreen"),
  ppvBooking: document.getElementById("ppvBookingScreen"),
  ppvResults: document.getElementById("ppvResultsScreen"),
  boardReview: document.getElementById("boardReviewScreen"),
  gameOver: document.getElementById("gameOverScreen")
};

const roster = [
  { name: "Super Dragon Fly", gender: "Male", alignment: "Face", popularity: 74, charisma: 82, ringSkill: 78, stamina: 86, morale: 82, weakness: "Overconfidence", strength: "High-flying comebacks", finisher: "Sky Spiral Splash", finisherClip: "videos/super_dragon_fly_finisher.mp4", emoji: "🐉", image: "images/super-dragon-fly.png", colors: ["#1f83ff", "#2dff85"] },
  { name: "Iron Duchess", gender: "Female", alignment: "Heel", popularity: 69, charisma: 88, ringSkill: 81, stamina: 77, morale: 76, weakness: "Short temper", strength: "Commanding promos", finisher: "Royal Iron Lock", finisherClip: "videos/iron_duchess_finisher.mp4", emoji: "👑", image: "images/iron-duchess.png", colors: ["#ff2e41", "#ffd84f"] },
  { name: "The Midnight Bruiser", gender: "Male", alignment: "Heel", popularity: 80, charisma: 71, ringSkill: 75, stamina: 84, morale: 70, weakness: "Low patience", strength: "Brawling chaos", finisher: "Midnight Hammer", finisherClip: "videos/midnight_bruiser_finisher.mp4", emoji: "🌙", image: "images/midnight-bruiser.png", colors: ["#1b1e3f", "#ff2e41"] },
  { name: "Velvet Storm", gender: "Female", alignment: "Face", popularity: 77, charisma: 91, ringSkill: 70, stamina: 72, morale: 84, weakness: "Risky dives", strength: "Crowd connection", finisher: "Velvet Thunder", finisherClip: "videos/velvet_storm_finisher.mp4", emoji: "⚡", image: "images/velvet-storm.png", colors: ["#ff4fd8", "#72d7ff"] },
  { name: "Titan Rex", gender: "Male", alignment: "Face", popularity: 85, charisma: 67, ringSkill: 83, stamina: 88, morale: 79, weakness: "Stiff interviews", strength: "Power matches", finisher: "Rex Breaker", finisherClip: "videos/titan_rex_finisher.mp4", emoji: "🦖", image: "images/titan-rex.png", colors: ["#2dff85", "#ffd84f"] },
  { name: "Lady Voltage", gender: "Female", alignment: "Heel", popularity: 72, charisma: 84, ringSkill: 76, stamina: 80, morale: 75, weakness: "Too flashy", strength: "Electric entrances", finisher: "Voltage Drop", finisherClip: "videos/lady_voltage_finisher.mp4", emoji: "🔌", image: "images/lady-voltage.png", colors: ["#72d7ff", "#ff2e41"] },
  { name: "The Saint of Pain", gender: "Male", alignment: "Heel", popularity: 78, charisma: 79, ringSkill: 86, stamina: 73, morale: 68, weakness: "Dark pacing", strength: "Submission drama", finisher: "Final Confession", finisherClip: "videos/saint_of_pain_finisher.mp4", emoji: "🕯️", image: "images/saint-of-pain.png", colors: ["#5b2dff", "#ff2e41"] },
  { name: "Neon Panther", gender: "Female", alignment: "Face", popularity: 83, charisma: 86, ringSkill: 79, stamina: 90, morale: 88, weakness: "Reckless speed", strength: "Explosive offense", finisher: "Neon Pounce", finisherClip: "videos/neon_panther_finisher.mp4", emoji: "🐆", image: "images/neon-panther.png", colors: ["#2dff85", "#5b2dff"] },
  { name: "Big Harbor King", gender: "Male", alignment: "Face", popularity: 66, charisma: 74, ringSkill: 72, stamina: 91, morale: 81, weakness: "Slow starts", strength: "Comeback energy", finisher: "Dockside Slam", finisherClip: "videos/big_harbor_king_finisher.mp4", emoji: "⚓", image: "images/big-harbor-king.png", colors: ["#1f83ff", "#ffd84f"] },
  { name: "Queen Viper", gender: "Female", alignment: "Heel", popularity: 88, charisma: 93, ringSkill: 84, stamina: 76, morale: 72, weakness: "Political games", strength: "Main-event heat", finisher: "Viper Crown", finisherClip: "videos/queen_viper_finisher.mp4", emoji: "🐍", image: "images/queen-viper.png", colors: ["#ff2e41", "#2dff85"] }
];

const feudTypes = ["Betrayal", "Championship Chase", "Personal Grudge", "Respect Rivalry", "Jealousy Angle"];
const angleStyles = ["Promo Battle", "Backstage Attack", "Match Interference", "Social Media Trash Talk", "Contract Signing Chaos"];
const endings = ["Clean Win", "Dirty Win", "Double Turn", "Shocking Betrayal", "Injury Angle"];
const feudLengths = [
  { label: "Short: 2 weeks", value: 2 },
  { label: "Medium: 4 weeks", value: 4 },
  { label: "Long: 6 weeks", value: 6 }
];

const weeklyAngles = [
  "Heated Promo",
  "Surprise Attack",
  "Match Interference",
  "Emotional Interview",
  "Cheating Finish"
];

const weeklySegments = [
  "In-Ring Promo",
  "Backstage Interview",
  "Contract Signing",
  "Ambush Attack",
  "Open Challenge",
  "Heel Betrayal",
  "Tag-Team Tease",
  "Championship Celebration",
  "Social Media Callout",
  "Mystery Interruption"
];

const chemistryMap = {
  "Iron Duchess|Queen Viper": 16,
  "Lady Voltage|Neon Panther": 12,
  "Super Dragon Fly|The Midnight Bruiser": 10,
  "Big Harbor King|The Saint of Pain": 8,
  "Titan Rex|Velvet Storm": -12,
  "Super Dragon Fly|Titan Rex": -6
};

const championships = [
  {
    id: "world",
    name: "RDGP World Championship",
    division: "Male",
    champion: 4,
    prestige: 72,
    defenses: 0,
    history: ["Titan Rex crowned first RDGP World Champion."]
  },
  {
    id: "womens",
    name: "RDGP Women's Championship",
    division: "Female",
    champion: 9,
    prestige: 70,
    defenses: 0,
    history: ["Queen Viper captured the first RDGP Women's Championship."]
  },
  {
    id: "hardcore",
    name: "RDGP Hardcore Championship",
    division: "Open",
    champion: 2,
    prestige: 58,
    defenses: 0,
    history: ["The Midnight Bruiser became the first RDGP Hardcore Champion."]
  },
  {
    id: "tag",
    name: "RDGP Tag Team Championship",
    division: "Tag",
    championTeam: "neon-venom",
    prestige: 62,
    defenses: 0,
    history: ["Neon Venom became the first RDGP Tag Team Champions."]
  }
];

const defaultTagTeams = [
  { id: "neon-venom", name: "Neon Venom", members: [9, 7], alignment: "Mixed" },
  { id: "royal-storm", name: "Royal Storm", members: [1, 3], alignment: "Mixed" },
  { id: "harbor-saints", name: "Harbor Saints", members: [8, 6], alignment: "Mixed" }
];

const defaultAudiences = [
  {
    id: "hardcore",
    name: "Hardcore Fans",
    icon: "HC",
    size: 14500,
    satisfaction: 58,
    preferredMatchTypes: ["Hardcore Tag", "Injury Angle", "Dirty Win"],
    favoriteFeudStyles: ["Betrayal", "Personal Grudge", "Jealousy Angle"],
    preferredWrestlers: ["The Saint of Pain", "The Midnight Bruiser", "Queen Viper"],
    riskTolerance: 92,
    complaint: "Hardcore fans want more danger and less safe repetition."
  },
  {
    id: "casual",
    name: "Casual Fans",
    icon: "TV",
    size: 26000,
    satisfaction: 64,
    preferredMatchTypes: ["Championship Chase", "Clean Win", "Open Challenge"],
    favoriteFeudStyles: ["Championship Chase", "Respect Rivalry", "Personal Grudge"],
    preferredWrestlers: ["Titan Rex", "Neon Panther", "Queen Viper"],
    riskTolerance: 56,
    complaint: "Casual fans want big stars, titles, and simple stories."
  },
  {
    id: "family",
    name: "Family Audience",
    icon: "FA",
    size: 18500,
    satisfaction: 61,
    preferredMatchTypes: ["Clean Win", "Emotional Interview", "Tag-Team Tease"],
    favoriteFeudStyles: ["Respect Rivalry", "Championship Chase"],
    preferredWrestlers: ["Super Dragon Fly", "Velvet Storm", "Big Harbor King"],
    riskTolerance: 35,
    complaint: "Family fans dislike too much violence and dark betrayal angles."
  },
  {
    id: "social",
    name: "Social Media Audience",
    icon: "SM",
    size: 22000,
    satisfaction: 66,
    preferredMatchTypes: ["Social Media Callout", "Mystery Interruption", "Shocking Betrayal"],
    favoriteFeudStyles: ["Betrayal", "Jealousy Angle", "Championship Chase"],
    preferredWrestlers: ["Queen Viper", "Lady Voltage", "Neon Panther"],
    riskTolerance: 72,
    complaint: "Online fans punish slow pacing and repetitive shows."
  },
  {
    id: "technical",
    name: "Technical Wrestling Fans",
    icon: "TW",
    size: 13200,
    satisfaction: 57,
    preferredMatchTypes: ["Clean Win", "Long Feud", "Contract Signing"],
    favoriteFeudStyles: ["Respect Rivalry", "Championship Chase"],
    preferredWrestlers: ["Iron Duchess", "The Saint of Pain", "Titan Rex"],
    riskTolerance: 48,
    complaint: "Technical fans want skill, clean wrestling, and earned title matches."
  }
];

const chaosTemplates = [
  {
    id: "refuse-lose",
    category: "Backstage Drama",
    title: "Wrestler Refuses To Lose",
    severity: "Serious",
    text: "A featured wrestler is pushing back against tonight's planned finish.",
    choices: [
      { id: "calm", label: "Calm Situation", effect: { chaos: -6, morale: 4, loyalty: 3, reputation: 1, money: -1800 }, result: "You cooled the room down with a private meeting." },
      { id: "punish", label: "Punish Wrestler", effect: { chaos: 5, morale: -9, loyalty: -8, reputation: -1, lockerRoomRespect: 3 }, result: "Discipline sent a message, but morale took a hit." },
      { id: "promise", label: "Promise Opportunity", effect: { chaos: -2, morale: 7, loyalty: 5, fanTrust: -1 }, result: "A future opportunity bought peace for now." }
    ]
  },
  {
    id: "champ-injury",
    category: "Injury Crisis",
    title: "Champion Injury Scare",
    severity: "Major",
    text: "A champion is hurting before a major segment. The medical report is not comforting.",
    choices: [
      { id: "cancel", label: "Cancel Match", effect: { chaos: -5, heat: -8, morale: 3, fanTrust: -3, money: -5000 }, result: "You protected the wrestler, but fans grumbled." },
      { id: "replace", label: "Force Replacement", effect: { chaos: 4, heat: 3, morale: -3, money: -2200 }, result: "A replacement kept TV moving, with backstage tension." },
      { id: "danger", label: "Continue Dangerously", effect: { chaos: 12, heat: 12, risk: 14, morale: -10, reputation: -4 }, result: "The segment felt intense, but management hated the risk." }
    ]
  },
  {
    id: "sponsor-violence",
    category: "Sponsor Problems",
    title: "Sponsor Threatens Withdrawal",
    severity: "Serious",
    text: "A sponsor complains that the show is becoming too violent for their audience.",
    choices: [
      { id: "soften", label: "Go Family-Friendly", effect: { chaos: -4, sponsor: 10, hardcoreAudience: -5, familyAudience: 8, heat: -3 }, result: "Sponsors relaxed, while hardcore fans complained online." },
      { id: "defend", label: "Defend Creative", effect: { chaos: 5, sponsor: -9, hardcoreAudience: 6, reputation: 2 }, result: "You backed creative. Hardcore fans loved it, sponsors did not." },
      { id: "negotiate", label: "Negotiate Bonus Segment", effect: { chaos: -2, sponsor: 4, money: -1200, fanTrust: 1 }, result: "A sponsor-friendly segment bought goodwill." }
    ]
  },
  {
    id: "fan-revolt",
    category: "Fan Revolt",
    title: "Fans Reject The Champion",
    severity: "Major",
    text: "The crowd is hijacking segments and demanding a different contender.",
    choices: [
      { id: "listen", label: "Book Fan Favorite", effect: { chaos: -3, heat: 10, fanTrust: 8, morale: -2 }, result: "The audience felt heard and ticket demand jumped." },
      { id: "swerve", label: "Turn It Into Story", effect: { chaos: 6, heat: 15, risk: 7, socialAudience: 9 }, result: "The revolt became a hot storyline." },
      { id: "ignore", label: "Ignore Crowd", effect: { chaos: 10, fanTrust: -9, money: -3500 }, result: "Fans got louder and the board noticed." }
    ]
  },
  {
    id: "viral-moment",
    category: "Viral Social Media Moments",
    title: "Viral Superstar Moment",
    severity: "Minor",
    text: "A clip from RDGP is exploding online before the show even ends.",
    choices: [
      { id: "push", label: "Push The Moment", effect: { chaos: 2, heat: 10, socialAudience: 12, money: 5000, reputation: 2 }, result: "You rode the trend and the clip kept spreading." },
      { id: "merch", label: "Rush Merch", effect: { chaos: 3, money: 8500, morale: 2 }, result: "Fast merch turned buzz into cash." }
    ]
  },
  {
    id: "rival-shot",
    category: "Rival Promotion Attacks",
    title: "Rival Promotion Insults RDGP",
    severity: "Serious",
    text: "A rival promotion publicly mocks RDGP's booking and teases stealing talent.",
    choices: [
      { id: "respond", label: "Fire Back On-Air", effect: { chaos: 7, heat: 8, reputation: 3, rival: -4 }, result: "The response got loud and fans picked sides." },
      { id: "ignore", label: "Stay Professional", effect: { chaos: -3, reputation: 1, rival: 2 }, result: "You stayed calm, but rivals gained a little buzz." },
      { id: "lockers", label: "Hold Talent Meeting", effect: { chaos: -5, loyalty: 6, money: -1600 }, result: "The locker room felt protected." }
    ]
  },
  {
    id: "bad-finish",
    category: "Title Controversies",
    title: "Disputed Title Finish",
    severity: "Major",
    text: "A title finish looked controversial and fans are arguing about the result.",
    choices: [
      { id: "rematch", label: "Announce Rematch", effect: { chaos: -2, heat: 9, titlePrestige: 3, money: 2200 }, result: "A rematch cooled the controversy and lifted title buzz." },
      { id: "embrace", label: "Embrace Controversy", effect: { chaos: 9, heat: 14, risk: 8, socialAudience: 8 }, result: "The controversy became the loudest story in wrestling." },
      { id: "bury", label: "Move On Quickly", effect: { chaos: 5, fanTrust: -6, titlePrestige: -5 }, result: "Moving on made the title feel colder." }
    ]
  },
  {
    id: "broadcast-outage",
    category: "Production Problems",
    title: "Broadcast Outage",
    severity: "Catastrophic",
    text: "The feed drops during a key segment and the arena crew is scrambling.",
    choices: [
      { id: "refund", label: "Offer Fan Credit", effect: { chaos: -8, money: -9000, fanTrust: 7, sponsor: 2 }, result: "The apology cost money, but fans appreciated it." },
      { id: "improv", label: "Send Out Talkers", effect: { chaos: 2, heat: 4, morale: 2, reputation: 2 }, result: "Your best talkers kept the arena alive." },
      { id: "ignore", label: "Blame The Venue", effect: { chaos: 8, fanTrust: -8, sponsor: -5 }, result: "The excuse landed badly." }
    ]
  },
  {
    id: "payroll-crunch",
    category: "Financial Emergencies",
    title: "Payroll Crunch",
    severity: "Major",
    text: "Accounting warns that payroll and production costs are squeezing the company.",
    choices: [
      { id: "cut-costs", label: "Cut Event Costs", effect: { chaos: 2, money: 7000, morale: -3, heat: -4 }, result: "Costs dropped, but the show felt smaller." },
      { id: "bonus-show", label: "Run Bonus Special", effect: { chaos: 7, money: 5500, risk: 6, fatigue: 6 }, result: "A special event helped cash flow but tired the roster." },
      { id: "ask-sponsor", label: "Ask Sponsor Help", effect: { chaos: -1, sponsor: -3, money: 6500 }, result: "Sponsor help bought time, with strings attached." }
    ]
  },
  {
    id: "celebrity-buzz",
    category: "Surprise Opportunities",
    title: "Celebrity Appearance Offer",
    severity: "Minor",
    text: "A fictional local celebrity wants to appear on RDGP TV this week.",
    choices: [
      { id: "book", label: "Book Appearance", effect: { chaos: 3, casualAudience: 8, socialAudience: 7, money: 6500, heat: 5 }, result: "Mainstream attention gave RDGP a clean boost." },
      { id: "decline", label: "Keep Wrestling Focus", effect: { chaos: -2, technicalAudience: 4, hardcoreAudience: 3 }, result: "Core fans respected the focus." }
    ]
  }
];

const rivalPromotions = [
  {
    id: "tcw",
    name: "Titan Combat Wrestling",
    shortName: "TCW",
    style: "violent hardcore wrestling",
    popularity: 66,
    rosterStrength: 72,
    weeklyRating: 3.2,
    money: 125000,
    reputation: 62,
    fanbaseType: "hardcore fight fans"
  },
  {
    id: "gpe",
    name: "Galaxy Pro Elite",
    shortName: "GPE",
    style: "flashy entertainment and charisma",
    popularity: 70,
    rosterStrength: 68,
    weeklyRating: 3.4,
    money: 140000,
    reputation: 76,
    fanbaseType: "mainstream entertainment fans"
  },
  {
    id: "ucl",
    name: "Underground Chaos League",
    shortName: "UCL",
    style: "risky underground chaos wrestling",
    popularity: 58,
    rosterStrength: 64,
    weeklyRating: 3.0,
    money: 90000,
    reputation: 48,
    fanbaseType: "danger-seeking underground fans"
  }
];

const commentary = [
  "THE CROWD IS LOSING THEIR MINDS!",
  "This feud is getting hot, but management is nervous.",
  "That segment dragged like a wet towel.",
  "The fans are buying tickets now!",
  "That booking decision almost got you fired.",
  "This feud just exploded tonight!",
  "That segment felt electric!",
  "This rivalry may headline the pay-per-view!",
  "The crowd sat on their hands.",
  "Fans looked confused tonight.",
  "That booking decision hurt morale."
];

const weeklyShowNames = [
  "Slam Night",
  "Neon Collision",
  "Sudden Impact",
  "Riot Arena",
  "BattleLine Live",
  "RageZone"
];

const ppvEventNames = [
  "Empire Clash",
  "Neon Warfare",
  "Final Bell",
  "Gold Rush",
  "Heatwave Havoc",
  "Crown the Empire"
];

const ppvMoments = [
  "shocking return",
  "surprise betrayal",
  "breakout performance",
  "title upset",
  "injury scare",
  "rival promotion challenge",
  "legendary main event"
];

const sponsorCatalog = [
  { id: "neon-cola", name: "Neon Cola", type: "family friendly", payout: 9000, reputationRequirement: 40, riskTolerance: 45, preferredAudience: "mainstream entertainment" },
  { id: "slamburger", name: "SlamBurger", type: "mainstream entertainment", payout: 11500, reputationRequirement: 48, riskTolerance: 62, preferredAudience: "family friendly" },
  { id: "powerpro-energy", name: "PowerPro Energy", type: "sports performance", payout: 13500, reputationRequirement: 55, riskTolerance: 70, preferredAudience: "sports performance" },
  { id: "steel-city-gym", name: "Steel City Gym", type: "hardcore friendly", payout: 10500, reputationRequirement: 45, riskTolerance: 86, preferredAudience: "hardcore friendly" },
  { id: "ringside-threads", name: "RingSide Threads", type: "merchandise focused", payout: 8000, reputationRequirement: 35, riskTolerance: 58, preferredAudience: "merchandise focused" }
];

const rankingCategories = [
  { id: "mens", title: "Men's Singles Rankings", eligibility: wrestler => wrestler.gender === "Male", titleId: "world" },
  { id: "womens", title: "Women's Singles Rankings", eligibility: wrestler => wrestler.gender === "Female", titleId: "womens" },
  { id: "hardcore", title: "Hardcore Division Rankings", eligibility: () => true, titleId: "hardcore" },
  { id: "overall", title: "Overall Company Power Rankings", eligibility: () => true, titleId: null }
];

const weeklyEvents = [
  { title: "Wrestler Refuses To Lose", text: "Creative had to calm down the locker room after a tense meeting.", heat: 2, risk: 8, money: -2500, moraleA: -4, moraleB: -4 },
  { title: "Minor Injury", text: "A rough landing made management nervous, but the cameras caught every second.", heat: 5, risk: 12, money: -4000, moraleA: -6, moraleB: -2 },
  { title: "Social Media Controversy", text: "Fans argued all night online and accidentally made the feud trend.", heat: 8, risk: 10, money: 1500, moraleA: -2, moraleB: -2 },
  { title: "Surprise Fan Support", text: "The live crowd adopted the feud and started chanting before the segment began.", heat: 10, risk: -2, money: 5000, moraleA: 4, moraleB: 4 },
  { title: "Sponsor Complaint", text: "A sponsor disliked the chaos and asked the board for a cleaner show.", heat: -2, risk: 9, money: -6000, moraleA: 0, moraleB: -2 },
  { title: "Locker Room Argument", text: "The rivalry spilled backstage and morale took a hit.", heat: 4, risk: 7, money: -1500, moraleA: -5, moraleB: -5 },
  { title: "Surprise Chemistry Bonus", text: "The two wrestlers found a rhythm nobody expected.", heat: 12, risk: -3, money: 6500, moraleA: 5, moraleB: 5 },
  { title: "Contract Issue Rumors", text: "Rumors of a contract dispute made every line feel more real.", heat: 6, risk: 8, money: 1000, moraleA: -4, moraleB: 0 }
];

let money = 100000;
let selected = [];
let activeFeud = null;
let chosenWeeklyAngle = null;
let chosenSegment = null;
let lastResult = null;
let history = [];
let currentScreen = "title";
let feudHistory = {};
let completedFeuds = [];
let newsFeed = ["RDGP front office is watching the ratings war."];
let newsItems = [
  { week: 1, category: "RDGP company news", headline: "RDGP front office is watching the ratings war.", priority: "normal" }
];
let pendingPoach = null;
let pendingWorldEvent = null;
let hallOfLegends = [];
let legacyData = {
  totalCompanyRevenue: 0,
  ppvsHeld: 0,
  titlesDefended: 0,
  wrestlersDeveloped: 0,
  rivalsDefeated: 0,
  highestCompanyPopularity: 55,
  greatestFeuds: [],
  highestRatedPpvs: [],
  longestTitleReigns: [],
  biggestBetrayals: [],
  chaoticMoments: []
};
let ppvHype = {
  averageHeat: 0,
  bestRivalry: "None yet",
  audienceMomentum: 0
};
let gameWeek = 1;
let weeksUntilPpv = 4;
let currentPpvEvent = null;
let ppvCard = null;
let lastPpvResult = null;
let ticketMomentum = 1;
let companyPopularity = 55;
let pendingBoardReview = null;
let firedReason = "";
let recentAdviceHistory = [];
let previousScreenBeforeCreative = "title";
let activeSponsor = null;
let sponsorOffers = [];
let weeklyMerchRevenue = 0;
let sponsorHistory = [];
let tagTeams = [];
let tagFeudHistory = [];
let betrayalHistory = [];
let audiences = defaultAudiences.map(audience => ({ ...audience, trend: 0, history: [] }));
let audienceTrends = [];
let chaosMeter = 18;
let activeChaosEvent = null;
let recentDisasters = [];
let controversyHistory = [];
let tutorialActive = false;
let tutorialIndex = 0;
let tutorialHighlight = null;
let tutorialDemoActive = false;

const TUTORIAL_KEY = "bookingEmpireTutorialComplete";

const SAVE_KEY = "bookingEmpireV02Save";
const GAME_VERSION = "Version 1.0";

function storageGet(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    console.warn(`[Booking Empire] localStorage read failed for ${key}.`, error);
    return fallback;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`[Booking Empire] localStorage write failed for ${key}.`, error);
    return false;
  }
}

function storageRemove(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.warn(`[Booking Empire] localStorage remove failed for ${key}.`, error);
    return false;
  }
}

function createDefaultTagTeam(template) {
  const members = template.members.filter(index => roster[index]).slice(0, 2);
  const popularity = Math.round(members.reduce((sum, index) => sum + roster[index].popularity, 0) / members.length);
  const morale = Math.round(members.reduce((sum, index) => sum + roster[index].morale, 0) / members.length);
  return {
    id: template.id,
    name: template.name,
    members: [...members],
    alignment: template.alignment,
    chemistry: clamp(58 + Math.round((roster[members[0]].morale + roster[members[1]].morale) / 10)),
    popularity,
    momentum: Math.round((popularity + morale) / 2),
    tagRanking: 0,
    winLossRecord: { wins: 0, losses: 0 },
    loyalty: clamp(morale),
    feudHistory: [],
    betrayalHistory: []
  };
}

function normalizeTagTeam(team) {
  const fallback = createDefaultTagTeam(defaultTagTeams[0]);
  const members = Array.isArray(team?.members) ? team.members.filter(index => Number.isInteger(index) && roster[index]).slice(0, 2) : fallback.members;
  const base = createDefaultTagTeam({
    id: team?.id || `team-${Date.now()}`,
    name: team?.name || "New Tag Team",
    members: members.length === 2 ? members : fallback.members,
    alignment: team?.alignment || "Mixed"
  });
  return {
    ...base,
    chemistry: clamp(Number(team?.chemistry) || base.chemistry),
    popularity: clamp(Number(team?.popularity) || base.popularity),
    momentum: clamp(Number(team?.momentum) || base.momentum),
    tagRanking: Math.max(0, Number(team?.tagRanking) || 0),
    winLossRecord: {
      wins: Math.max(0, Number(team?.winLossRecord?.wins) || 0),
      losses: Math.max(0, Number(team?.winLossRecord?.losses) || 0)
    },
    loyalty: clamp(Number(team?.loyalty) || base.loyalty),
    feudHistory: Array.isArray(team?.feudHistory) ? team.feudHistory.slice(0, 6) : [],
    betrayalHistory: Array.isArray(team?.betrayalHistory) ? team.betrayalHistory.slice(0, 6) : []
  };
}

function resetTagTeams() {
  tagTeams = defaultTagTeams.map(createDefaultTagTeam);
  tagFeudHistory = [];
  betrayalHistory = [];
}

function resetAudiences() {
  audiences = defaultAudiences.map(audience => ({ ...audience, trend: 0, history: [] }));
  audienceTrends = ["Audience tracking started. RDGP fans are waiting for the next hot angle."];
}

function resetChaos() {
  chaosMeter = 18;
  activeChaosEvent = null;
  recentDisasters = [];
  controversyHistory = [];
}

function normalizeAudience(saved) {
  const base = defaultAudiences.find(audience => audience.id === saved?.id) || defaultAudiences[0];
  return {
    ...base,
    size: Math.max(1000, Math.round(Number(saved?.size) || base.size)),
    satisfaction: clamp(Number(saved?.satisfaction) || base.satisfaction),
    trend: Math.round(Number(saved?.trend) || 0),
    history: Array.isArray(saved?.history) ? saved.history.slice(-8) : []
  };
}

const tutorialSteps = [
  {
    screen: "bookerOffice",
    selector: "#bookerOfficeGrid",
    title: "Booker Office",
    text: "You are paid by commission. Make money or get fired."
  },
  {
    screen: "roster",
    selector: "#rosterGrid",
    title: "Roster Screen",
    text: "Pick wrestlers based on popularity, charisma, morale, and chemistry."
  },
  {
    screen: "feud",
    selector: "#feudPreview",
    title: "Feud Setup",
    text: "Feud type and ending affect heat, risk, morale, and revenue."
  },
  {
    screen: "booking",
    selector: "#weeklyAngles",
    title: "Weekly Show",
    text: "Use promos, attacks, and interviews to build heat."
  },
  {
    screen: "championships",
    selector: "#championshipGrid",
    title: "Championships",
    text: "Title feuds raise stakes but can damage belt prestige if booked badly."
  },
  {
    screen: "roster",
    selector: "#bookPpvBtn",
    title: "PPV Events",
    text: "Every 4 weeks, feuds should pay off at a major event."
  },
  {
    screen: "creativeTeam",
    selector: "#advisorGrid",
    title: "Rival Promotions",
    text: "Rivals can steal unhappy stars. Watch warnings from your advisors and news feed."
  },
  {
    screen: "contracts",
    selector: "#contractsGrid",
    title: "Contracts",
    text: "High salaries can drain your company money. Keep morale and loyalty healthy."
  }
];

function defaultBookerProfile() {
  return {
    bookerName: "Head Booker",
    reputation: 50,
    salaryEarned: 0,
    commissionRate: 0.05,
    jobSecurity: 75,
    boardConfidence: 70,
    fanTrust: 50,
    lockerRoomRespect: 50,
    weeklyCommission: 0,
    bestWeek: { amount: 0, label: "No profitable week yet" },
    worstWeek: { amount: 0, label: "No losses recorded" },
    recentProfit: [],
    recentRatings: [],
    weeksSurvived: 0
  };
}

let bookerProfile = defaultBookerProfile();
resetTagTeams();

function normalizeBookerProfile(saved = {}) {
  const profile = { ...defaultBookerProfile(), ...(saved || {}) };
  profile.reputation = clamp(Number(profile.reputation ?? 50));
  profile.salaryEarned = Math.max(0, Number(profile.salaryEarned) || 0);
  profile.commissionRate = Number(profile.commissionRate) || 0.05;
  profile.jobSecurity = clamp(Number(profile.jobSecurity ?? 75));
  profile.boardConfidence = clamp(Number(profile.boardConfidence ?? 70));
  profile.fanTrust = clamp(Number(profile.fanTrust ?? 50));
  profile.lockerRoomRespect = clamp(Number(profile.lockerRoomRespect ?? 50));
  profile.weeklyCommission = Math.max(0, Number(profile.weeklyCommission) || 0);
  profile.bestWeek = profile.bestWeek || { amount: 0, label: "No profitable week yet" };
  profile.worstWeek = profile.worstWeek || { amount: 0, label: "No losses recorded" };
  profile.recentProfit = Array.isArray(profile.recentProfit) ? profile.recentProfit.slice(-8) : [];
  profile.recentRatings = Array.isArray(profile.recentRatings) ? profile.recentRatings.slice(-8) : [];
  profile.weeksSurvived = Math.max(0, Number(profile.weeksSurvived) || 0);
  return profile;
}

const audio = {
  enabled: localStorage.getItem("bookingEmpireSound") !== "off",
  musicActive: false,
  unlocked: false,
  music: new Audio("sounds/menu_theme.mp3"),
  click: new Audio("sounds/click.mp3"),
  crowd: new Audio("sounds/crowd.mp3"),
  ppvTheme: new Audio("sounds/ppv_theme.mp3"),
  newsAlert: new Audio("sounds/news_alert.mp3"),
  titleWin: new Audio("sounds/title_win.mp3"),
  firedTheme: new Audio("sounds/fired_theme.mp3"),
  lastAlertAt: 0
};

audio.music.loop = true;
audio.music.volume = 0.22;
audio.click.volume = 1;
audio.crowd.volume = 1;
audio.ppvTheme.loop = true;
audio.ppvTheme.volume = 0.28;
audio.newsAlert.volume = 0.82;
audio.titleWin.volume = 0.9;
audio.firedTheme.volume = 0.58;
Object.values(audio).forEach(sound => {
  if (sound instanceof Audio) sound.preload = "auto";
});

function inferStartingAge(wrestler) {
  if (wrestler.name.includes("Big Harbor") || wrestler.name.includes("Saint")) return 39;
  if (wrestler.name.includes("Titan") || wrestler.name.includes("Midnight")) return 34;
  if (wrestler.name.includes("Queen") || wrestler.name.includes("Iron")) return 32;
  if (wrestler.name.includes("Neon") || wrestler.name.includes("Dragon")) return 25;
  return 28;
}

function inferPotential(wrestler) {
  const youthBonus = wrestler.name.includes("Neon") || wrestler.name.includes("Dragon") ? 12 : 0;
  return clamp(Math.round((wrestler.charisma + wrestler.ringSkill + wrestler.popularity) / 3 + youthBonus), 45, 98);
}

function getCareerStage(wrestler) {
  const age = wrestler.age || 28;
  if (age <= 23) return "Rookie";
  if (age <= 28 && wrestler.momentum < 78) return "Rising Star";
  if (age <= 35) return "Prime";
  if (age <= 41) return "Veteran";
  return "Declining";
}

roster.forEach(wrestler => {
  wrestler.weeklySalary = wrestler.weeklySalary || wrestler.salary || Math.round(2200 + wrestler.popularity * 95 + wrestler.ringSkill * 28);
  wrestler.salary = wrestler.weeklySalary;
  wrestler.loyalty = wrestler.loyalty || clamp(Math.round((wrestler.morale + wrestler.stamina) / 2));
  wrestler.contractLength = wrestler.contractLength || (wrestler.popularity >= 82 ? 4 : 6);
  wrestler.askingPrice = wrestler.askingPrice || 0;
  wrestler.contractStatus = wrestler.contractStatus || "Secure";
  wrestler.moraleImpact = wrestler.moraleImpact || 0;
  wrestler.titlePromiseWeeks = wrestler.titlePromiseWeeks || 0;
  wrestler.ignoredDemandWeeks = wrestler.ignoredDemandWeeks || 0;
  wrestler.active = wrestler.active !== false;
  wrestler.age = wrestler.age || inferStartingAge(wrestler);
  wrestler.momentum = wrestler.momentum ?? Math.round((wrestler.popularity + wrestler.morale) / 2);
  wrestler.potential = wrestler.potential ?? inferPotential(wrestler);
  wrestler.fatigue = wrestler.fatigue || 0;
  wrestler.injuryRisk = wrestler.injuryRisk || Math.round(8 + (100 - wrestler.stamina) * 0.22);
  wrestler.careerStage = wrestler.careerStage || getCareerStage(wrestler);
  wrestler.injuryWeeks = wrestler.injuryWeeks || 0;
  wrestler.lossStreak = wrestler.lossStreak || 0;
  wrestler.breakout = wrestler.breakout || false;
  wrestler.promoSkill = wrestler.promoSkill || clamp(Math.round((wrestler.charisma * 0.75) + (wrestler.popularity * 0.25)));
  wrestler.aggression = wrestler.aggression || clamp(Math.round((100 - wrestler.morale) * 0.35 + wrestler.ringSkill * 0.35 + (wrestler.alignment === "Heel" ? 18 : 8)));
  wrestler.ego = wrestler.ego || clamp(Math.round(wrestler.popularity * 0.55 + wrestler.charisma * 0.25 + (wrestler.alignment === "Heel" ? 18 : 5)));
  wrestler.crowdConnection = wrestler.crowdConnection || clamp(Math.round(wrestler.popularity * 0.55 + wrestler.charisma * 0.35 + (wrestler.alignment === "Face" ? 8 : 0)));
  wrestler.localPopularity = wrestler.localPopularity ?? clamp(Math.round(wrestler.popularity * 0.55 + wrestler.crowdConnection * 0.35 + (wrestler.alignment === "Face" ? 5 : 0)));
  wrestler.nationalPopularity = wrestler.nationalPopularity ?? clamp(Math.round(wrestler.popularity * 0.75 + wrestler.charisma * 0.15 + wrestler.ringSkill * 0.1));
  wrestler.onlinePopularity = wrestler.onlinePopularity ?? clamp(Math.round(wrestler.popularity * 0.45 + wrestler.charisma * 0.38 + wrestler.momentum * 0.17 + (["Queen Viper", "Lady Voltage", "Neon Panther"].includes(wrestler.name) ? 8 : 0)));
  wrestler.merchPopularity = wrestler.merchPopularity ?? clamp(Math.round(wrestler.popularity * 0.65 + wrestler.crowdConnection * 0.25 + wrestler.momentum * 0.1));
  wrestler.merchSales = wrestler.merchSales || 0;
  wrestler.merchMomentum = wrestler.merchMomentum ?? clamp(Math.round(wrestler.momentum * 0.7 + wrestler.morale * 0.3));
  wrestler.rankingPoints = wrestler.rankingPoints ?? Math.round(wrestler.popularity * 0.45 + wrestler.ringSkill * 0.25 + wrestler.momentum * 0.2 + wrestler.morale * 0.1);
  wrestler.currentRank = wrestler.currentRank || 0;
  wrestler.previousRank = wrestler.previousRank || 0;
  wrestler.winLossRecord = wrestler.winLossRecord || { wins: 0, losses: 0 };
  wrestler.contenderStatus = wrestler.contenderStatus || "Unranked";
  wrestler.legacyPoints = wrestler.legacyPoints || Math.round(wrestler.popularity * 0.35 + wrestler.momentum * 0.25 + wrestler.ringSkill * 0.2 + wrestler.charisma * 0.2);
  wrestler.titleWins = wrestler.titleWins || 0;
  wrestler.titleDefenses = wrestler.titleDefenses || 0;
  wrestler.ppvMainEvents = wrestler.ppvMainEvents || 0;
  wrestler.highRatedFeuds = wrestler.highRatedFeuds || 0;
  wrestler.viralPromos = wrestler.viralPromos || 0;
  wrestler.legendaryRivalries = wrestler.legendaryRivalries || 0;
  if (!wrestler.finisherClip) {
    console.warn(`[Booking Empire] Missing finisherClip for ${wrestler.name}; animated placeholder will be used.`);
  }
});

function updateSoundButton() {
  const button = document.getElementById("soundBtn");
  if (button) button.textContent = audio.enabled && audio.musicActive ? "Sound Off" : "Sound On";
}

function unlockAudio() {
  if (audio.unlocked) return;
  audio.unlocked = true;
}

function playClick() {
  if (!audio.enabled || !audio.unlocked) return;
  playEffect(audio.click, 1);
}

function playEffect(source, volume = 1) {
  if (!audio.enabled || !audio.unlocked || !(source instanceof Audio)) return;
  try {
    const sound = source.cloneNode(true);
    sound.volume = volume;
    sound.play().catch(() => {});
  } catch (error) {
    try {
      source.currentTime = 0;
      source.volume = volume;
      source.play().catch(() => {});
    } catch (fallbackError) {}
  }
}

function playMusic() {
  if (!audio.enabled || !audio.unlocked) return;
  stopTrack(audio.ppvTheme);
  stopTrack(audio.firedTheme);
  try {
    audio.music.play()
      .then(() => {
        audio.musicActive = true;
        updateSoundButton();
      })
      .catch(() => {
        audio.musicActive = false;
        updateSoundButton();
      });
  } catch (error) {}
}

function stopTrack(track) {
  if (!(track instanceof Audio)) return;
  try {
    track.pause();
    track.currentTime = 0;
  } catch (error) {}
}

function playLoopTrack(track, volume) {
  if (!audio.enabled || !audio.unlocked || !(track instanceof Audio)) return;
  try {
    if (typeof volume === "number") track.volume = volume;
    track.play().catch(() => {});
  } catch (error) {}
}

function updateScreenAudio(name) {
  if (!audio.enabled || !audio.unlocked) return;
  const ppvScreen = name === "ppvBooking" || name === "ppvResults";
  if (name === "gameOver") {
    stopTrack(audio.music);
    stopTrack(audio.ppvTheme);
    playLoopTrack(audio.firedTheme, 0.54);
    return;
  }
  if (ppvScreen) {
    stopTrack(audio.music);
    stopTrack(audio.firedTheme);
    playLoopTrack(audio.ppvTheme, 0.28);
    return;
  }
  stopTrack(audio.ppvTheme);
  stopTrack(audio.firedTheme);
  if (audio.musicActive) playMusic();
}

function toggleSound() {
  unlockAudio();
  playClick();
  if (audio.enabled && audio.musicActive) {
    audio.music.pause();
    stopTrack(audio.ppvTheme);
    stopTrack(audio.firedTheme);
    audio.musicActive = false;
    audio.enabled = false;
  } else {
    audio.enabled = true;
    playMusic();
  }
  localStorage.setItem("bookingEmpireSound", audio.enabled ? "on" : "off");
  updateSoundButton();
  if (localStorage.getItem(SAVE_KEY)) saveGame(currentScreen);
}

function playCrowdPop() {
  if (!audio.enabled || !audio.unlocked) return;
  playEffect(audio.crowd, 1);
}

function playNewsAlert() {
  if (!audio.enabled || !audio.unlocked) return;
  const now = Date.now();
  if (now - audio.lastAlertAt < 1200) return;
  audio.lastAlertAt = now;
  playEffect(audio.newsAlert, 0.78);
}

function playTitleWin() {
  if (!audio.enabled || !audio.unlocked) return;
  playEffect(audio.titleWin, 0.9);
}

function setResultsMusicDuck(ducked) {
  audio.music.volume = ducked ? 0.12 : 0.22;
  audio.ppvTheme.volume = ducked ? 0.14 : 0.28;
}

function getPairKey(aIndex, bIndex) {
  return [aIndex, bIndex].sort((a, b) => a - b).join("-");
}

function saveGame(screenName = currentScreen) {
  const data = {
    version: "0.2",
    savedAt: Date.now(),
    money,
    selected,
    morale: roster.map(w => w.morale),
    alignments: roster.map(w => w.alignment),
    contracts: roster.map(w => ({
      salary: w.salary,
      weeklySalary: w.weeklySalary,
      loyalty: w.loyalty,
      contractLength: w.contractLength,
      askingPrice: w.askingPrice,
      contractStatus: w.contractStatus,
      moraleImpact: w.moraleImpact,
      titlePromiseWeeks: w.titlePromiseWeeks,
      ignoredDemandWeeks: w.ignoredDemandWeeks,
      age: w.age,
      momentum: w.momentum,
      potential: w.potential,
      fatigue: w.fatigue,
      injuryRisk: w.injuryRisk,
      careerStage: w.careerStage,
      injuryWeeks: w.injuryWeeks,
      lossStreak: w.lossStreak,
      breakout: w.breakout,
      active: w.active,
      promoSkill: w.promoSkill,
      aggression: w.aggression,
      ego: w.ego,
      crowdConnection: w.crowdConnection,
      merchPopularity: w.merchPopularity,
      merchSales: w.merchSales,
      merchMomentum: w.merchMomentum,
      rankingPoints: w.rankingPoints,
      currentRank: w.currentRank,
      previousRank: w.previousRank,
      winLossRecord: w.winLossRecord,
      contenderStatus: w.contenderStatus,
      localPopularity: w.localPopularity,
      nationalPopularity: w.nationalPopularity,
      onlinePopularity: w.onlinePopularity,
      legacyPoints: w.legacyPoints,
      titleWins: w.titleWins,
      titleDefenses: w.titleDefenses,
      ppvMainEvents: w.ppvMainEvents,
      highRatedFeuds: w.highRatedFeuds,
      viralPromos: w.viralPromos,
      legendaryRivalries: w.legendaryRivalries
    })),
    activeFeud,
    championships,
    rivalPromotions,
    newsFeed,
    newsItems,
    pendingPoach,
    pendingWorldEvent,
    hallOfLegends,
    legacyData,
    chosenWeeklyAngle,
    chosenSegment,
    lastResult,
    history,
    feudHistory,
    completedFeuds,
    ppvHype,
    gameWeek,
    weeksUntilPpv,
    currentPpvEvent,
    ppvCard,
    lastPpvResult,
    ticketMomentum,
    companyPopularity,
    bookerProfile,
    pendingBoardReview,
    firedReason,
    recentAdviceHistory,
    activeSponsor,
    sponsorOffers,
    weeklyMerchRevenue,
    sponsorHistory,
    tagTeams,
    tagFeudHistory,
    betrayalHistory,
    audiences,
    audienceTrends,
    chaosMeter,
    activeChaosEvent,
    recentDisasters,
    controversyHistory,
    screen: screenName,
    finalTitle: document.getElementById("finalTitle")?.textContent || "",
    finalReportHtml: document.getElementById("finalReport")?.innerHTML || "",
    soundPreference: audio.enabled ? "on" : "off"
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    updateContinueButton();
    return true;
  } catch (error) {
    showSaveMessage("Could not save booking career.");
    return false;
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) {
      showSaveMessage("No active booking career found.");
      return false;
    }
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") throw new Error("Invalid save data");
    money = Number(data.money) || 100000;
    selected = Array.isArray(data.selected)
      ? data.selected.filter(index => Number.isInteger(index) && roster[index]).slice(0, 2)
      : [];
    if (Array.isArray(data.morale)) {
      data.morale.forEach((value, index) => {
        if (roster[index]) roster[index].morale = clamp(Number(value) || roster[index].morale);
      });
    }
    if (Array.isArray(data.alignments)) {
      data.alignments.forEach((value, index) => {
        if (roster[index] && (value === "Face" || value === "Heel")) roster[index].alignment = value;
      });
    }
    if (Array.isArray(data.contracts)) {
      data.contracts.forEach((contract, index) => {
        if (!roster[index] || !contract) return;
        roster[index].weeklySalary = Number(contract.weeklySalary || contract.salary) || roster[index].weeklySalary;
        roster[index].salary = roster[index].weeklySalary;
        roster[index].loyalty = clamp(Number(contract.loyalty) || roster[index].loyalty);
        roster[index].contractLength = Math.max(0, Number(contract.contractLength) || roster[index].contractLength);
        roster[index].askingPrice = Number(contract.askingPrice) || 0;
        roster[index].contractStatus = contract.contractStatus || roster[index].contractStatus || "Secure";
        roster[index].moraleImpact = Number(contract.moraleImpact) || 0;
        roster[index].titlePromiseWeeks = Math.max(0, Number(contract.titlePromiseWeeks) || 0);
        roster[index].ignoredDemandWeeks = Math.max(0, Number(contract.ignoredDemandWeeks) || 0);
        roster[index].age = Number(contract.age) || roster[index].age;
        roster[index].momentum = clamp(Number(contract.momentum) || roster[index].momentum);
        roster[index].potential = clamp(Number(contract.potential) || roster[index].potential);
        roster[index].fatigue = clamp(Number(contract.fatigue) || roster[index].fatigue);
        roster[index].injuryRisk = clamp(Number(contract.injuryRisk) || roster[index].injuryRisk);
        roster[index].careerStage = contract.careerStage || roster[index].careerStage;
        roster[index].injuryWeeks = Math.max(0, Number(contract.injuryWeeks) || 0);
        roster[index].lossStreak = Math.max(0, Number(contract.lossStreak) || 0);
        roster[index].breakout = Boolean(contract.breakout);
        roster[index].active = contract.active !== false;
        roster[index].promoSkill = clamp(Number(contract.promoSkill) || roster[index].promoSkill);
        roster[index].aggression = clamp(Number(contract.aggression) || roster[index].aggression);
        roster[index].ego = clamp(Number(contract.ego) || roster[index].ego);
        roster[index].crowdConnection = clamp(Number(contract.crowdConnection) || roster[index].crowdConnection);
        roster[index].merchPopularity = clamp(Number(contract.merchPopularity) || roster[index].merchPopularity);
        roster[index].merchSales = Math.max(0, Number(contract.merchSales) || roster[index].merchSales || 0);
        roster[index].merchMomentum = clamp(Number(contract.merchMomentum) || roster[index].merchMomentum);
        roster[index].rankingPoints = Math.max(0, Number(contract.rankingPoints) || roster[index].rankingPoints || 0);
        roster[index].currentRank = Math.max(0, Number(contract.currentRank) || roster[index].currentRank || 0);
        roster[index].previousRank = Math.max(0, Number(contract.previousRank) || roster[index].previousRank || roster[index].currentRank || 0);
        roster[index].winLossRecord = {
          wins: Math.max(0, Number(contract.winLossRecord?.wins) || 0),
          losses: Math.max(0, Number(contract.winLossRecord?.losses) || 0)
        };
        roster[index].contenderStatus = contract.contenderStatus || roster[index].contenderStatus || "Unranked";
        roster[index].localPopularity = clamp(Number(contract.localPopularity) || roster[index].localPopularity || roster[index].popularity);
        roster[index].nationalPopularity = clamp(Number(contract.nationalPopularity) || roster[index].nationalPopularity || roster[index].popularity);
        roster[index].onlinePopularity = clamp(Number(contract.onlinePopularity) || roster[index].onlinePopularity || roster[index].popularity);
        roster[index].legacyPoints = Math.max(0, Number(contract.legacyPoints) || roster[index].legacyPoints || 0);
        roster[index].titleWins = Math.max(0, Number(contract.titleWins) || 0);
        roster[index].titleDefenses = Math.max(0, Number(contract.titleDefenses) || 0);
        roster[index].ppvMainEvents = Math.max(0, Number(contract.ppvMainEvents) || 0);
        roster[index].highRatedFeuds = Math.max(0, Number(contract.highRatedFeuds) || 0);
        roster[index].viralPromos = Math.max(0, Number(contract.viralPromos) || 0);
        roster[index].legendaryRivalries = Math.max(0, Number(contract.legendaryRivalries) || 0);
      });
    }
    feudHistory = data.feudHistory || {};
    completedFeuds = Array.isArray(data.completedFeuds) ? data.completedFeuds : [];
    if (Array.isArray(data.rivalPromotions)) restoreRivals(data.rivalPromotions);
    newsFeed = Array.isArray(data.newsFeed) && data.newsFeed.length ? data.newsFeed : newsFeed;
    newsItems = Array.isArray(data.newsItems) && data.newsItems.length
      ? data.newsItems
      : newsFeed.map(headline => ({ week: gameWeek, category: "RDGP company news", headline, priority: "normal" }));
    pendingPoach = data.pendingPoach || null;
    pendingWorldEvent = data.pendingWorldEvent || null;
    hallOfLegends = Array.isArray(data.hallOfLegends) ? data.hallOfLegends : [];
    legacyData = normalizeLegacyData(data.legacyData);
    ppvHype = data.ppvHype || ppvHype;
    gameWeek = Math.max(1, Number(data.gameWeek) || 1);
    weeksUntilPpv = clamp(Number(data.weeksUntilPpv ?? 4), 0, 4);
    currentPpvEvent = data.currentPpvEvent || null;
    ppvCard = data.ppvCard || null;
    lastPpvResult = data.lastPpvResult || null;
    ticketMomentum = Math.max(0.7, Math.min(1.8, Number(data.ticketMomentum) || 1));
    companyPopularity = clamp(Number(data.companyPopularity) || companyPopularity);
    bookerProfile = normalizeBookerProfile(data.bookerProfile);
    pendingBoardReview = data.pendingBoardReview || null;
    firedReason = data.firedReason || "";
    recentAdviceHistory = Array.isArray(data.recentAdviceHistory) ? data.recentAdviceHistory.slice(-12) : [];
    activeSponsor = data.activeSponsor || null;
    sponsorOffers = Array.isArray(data.sponsorOffers) ? data.sponsorOffers : [];
    weeklyMerchRevenue = Math.max(0, Number(data.weeklyMerchRevenue) || 0);
    sponsorHistory = Array.isArray(data.sponsorHistory) ? data.sponsorHistory.slice(-20) : [];
    tagTeams = Array.isArray(data.tagTeams) && data.tagTeams.length ? data.tagTeams.map(normalizeTagTeam) : defaultTagTeams.map(createDefaultTagTeam);
    tagFeudHistory = Array.isArray(data.tagFeudHistory) ? data.tagFeudHistory : [];
    betrayalHistory = Array.isArray(data.betrayalHistory) ? data.betrayalHistory : [];
    audiences = Array.isArray(data.audiences) && data.audiences.length ? data.audiences.map(normalizeAudience) : defaultAudiences.map(audience => ({ ...audience, trend: 0, history: [] }));
    audienceTrends = Array.isArray(data.audienceTrends) ? data.audienceTrends.slice(-20) : [];
    chaosMeter = clamp(Number(data.chaosMeter) || 18);
    activeChaosEvent = data.activeChaosEvent || null;
    recentDisasters = Array.isArray(data.recentDisasters) ? data.recentDisasters.slice(-20) : [];
    controversyHistory = Array.isArray(data.controversyHistory) ? data.controversyHistory.slice(-20) : [];
    activeFeud = data.activeFeud && typeof data.activeFeud === "object" ? data.activeFeud : null;
    if (Array.isArray(data.championships)) restoreChampionships(data.championships);
    chosenWeeklyAngle = data.chosenWeeklyAngle || null;
    chosenSegment = data.chosenSegment || null;
    lastResult = data.lastResult || null;
    history = Array.isArray(data.history) ? data.history : [];
    if (data.soundPreference === "off") audio.enabled = false;
    if (data.soundPreference === "on") audio.enabled = true;
    if (typeof data.finalTitle === "string") document.getElementById("finalTitle").textContent = data.finalTitle || "Payoff Complete";
    if (typeof data.finalReportHtml === "string") document.getElementById("finalReport").innerHTML = data.finalReportHtml;
    renderRoster();
    updatePpvPanel();
    updateSoundButton();
    restoreSavedScreen(data.screen);
    return true;
  } catch (error) {
    showSaveMessage("Save data was corrupted. Start a new career or delete the save.");
    return false;
  }
}

function updateContinueButton() {
  const button = document.getElementById("continueSaveBtn");
  if (!button) return;
  button.classList.toggle("has-save", Boolean(localStorage.getItem(SAVE_KEY)));
}

function showSaveMessage(message) {
  const box = document.getElementById("saveMessage");
  if (!box) return;
  box.textContent = message;
  box.classList.add("show");
  window.clearTimeout(showSaveMessage.timer);
  showSaveMessage.timer = window.setTimeout(() => box.classList.remove("show"), 3200);
}

function deleteSave() {
  if (!localStorage.getItem(SAVE_KEY)) {
    showSaveMessage("No active booking career found.");
    return;
  }
  if (!window.confirm("Delete saved Booking Empire career?")) return;
  localStorage.removeItem(SAVE_KEY);
  updateContinueButton();
  showSaveMessage("Saved booking career deleted.");
}

function restoreSavedScreen(savedScreen) {
  if (savedScreen === "gameOver") {
    renderFiredScreen();
    show("gameOver");
    return;
  }
  if (activeFeud && savedScreen === "results" && lastResult) {
    showResults(false);
    return;
  }
  if (savedScreen === "final") {
    bindFinisherButtons(document.getElementById("finalReport"));
    show("final");
    return;
  }
  if (savedScreen === "contracts") {
    renderContracts();
    show("contracts");
    return;
  }
  if (savedScreen === "news") {
    renderNewsScreen();
    show("news");
    return;
  }
  if (savedScreen === "help") {
    show("help");
    return;
  }
  if (savedScreen === "merchSponsors") {
    renderMerchSponsors();
    show("merchSponsors");
    return;
  }
  if (savedScreen === "rankings") {
    renderRankings();
    show("rankings");
    return;
  }
  if (savedScreen === "tagTeams") {
    renderTagTeams();
    show("tagTeams");
    return;
  }
  if (savedScreen === "audience") {
    renderAudienceAnalytics();
    show("audience");
    return;
  }
  if (savedScreen === "chaos") {
    renderChaosDesk();
    show("chaos");
    return;
  }
  if (savedScreen === "creativeTeam") {
    renderCreativeTeam();
    show("creativeTeam");
    return;
  }
  if (savedScreen === "bookerOffice") {
    renderBookerOffice();
    show("bookerOffice");
    return;
  }
  if (savedScreen === "boardReview" && pendingBoardReview) {
    renderBoardReview();
    show("boardReview");
    return;
  }
  if (savedScreen === "legends") {
    renderLegends();
    show("legends");
    return;
  }
  if (savedScreen === "ppvBooking" && ppvCard) {
    renderPpvBooking();
    show("ppvBooking");
    return;
  }
  if (savedScreen === "ppvResults" && lastPpvResult) {
    renderPpvResults();
    show("ppvResults");
    return;
  }
  if (activeFeud) {
    showBooking();
    return;
  }
  show("roster");
}

function restoreChampionships(savedBelts) {
  savedBelts.forEach(saved => {
    const belt = championships.find(item => item.id === saved.id);
    if (!belt) return;
    if (belt.division === "Tag") {
      if (saved.championTeam) belt.championTeam = saved.championTeam;
    } else if (Number.isInteger(saved.champion) && roster[saved.champion]) belt.champion = saved.champion;
    belt.prestige = clamp(Number(saved.prestige) || belt.prestige);
    belt.defenses = Math.max(0, Number(saved.defenses) || 0);
    belt.history = Array.isArray(saved.history) ? saved.history.slice(0, 8) : belt.history;
  });
}

function restoreRivals(savedRivals) {
  savedRivals.forEach(saved => {
    const rival = rivalPromotions.find(item => item.id === saved.id);
    if (!rival) return;
    rival.popularity = clamp(Number(saved.popularity) || rival.popularity);
    rival.rosterStrength = clamp(Number(saved.rosterStrength) || rival.rosterStrength);
    rival.weeklyRating = Math.max(0.5, Math.min(5, Number(saved.weeklyRating) || rival.weeklyRating));
    rival.money = Number(saved.money) || rival.money;
    rival.reputation = clamp(Number(saved.reputation) || rival.reputation);
  });
}

function prestigeLabel(prestige) {
  if (prestige <= 30) return "Cold Title";
  if (prestige <= 60) return "Respected Title";
  if (prestige <= 85) return "Hot Title";
  return "Legendary Title";
}

function renderChampionships() {
  const grid = document.getElementById("championshipGrid");
  if (!grid) return;
  recalculateRankings(false);
  recalculateTagRankings();
  grid.innerHTML = championships.map(belt => {
    const prestigeClass = belt.prestige >= 86
      ? "legendary-title"
      : belt.prestige >= 61
        ? "hot-title"
        : belt.prestige <= 30
          ? "cold-title"
          : "respected-title";
    const champion = belt.division === "Tag" ? tagTeams.find(team => team.id === belt.championTeam) : roster[belt.champion];
    const contenders = belt.division === "Tag"
      ? getTagContenders().slice(0, 3).map((team, index) => `<li>#${index + 1} ${team.name} (${Math.round(team.momentum)} mom)</li>`).join("")
      : getTitleContenders(belt).slice(0, 3).map((item, index) => `<li>#${index + 1} ${item.wrestler.name} (${Math.round(item.wrestler.rankingPoints)} pts)</li>`).join("");
    const history = belt.history.length
      ? belt.history.slice(-4).reverse().map(item => `<li>${item}</li>`).join("")
      : "<li>No title history yet.</li>";
    return `
      <article class="belt-card belt-${belt.id} ${prestigeClass}">
        <div class="belt-icon" aria-hidden="true">
          <span class="belt-strap"></span>
          <span class="belt-plate"></span>
          <span class="belt-side left"></span>
          <span class="belt-side right"></span>
        </div>
        <div>
          <h3>${belt.name}</h3>
          <p class="belt-champion">Champion: <strong>${champion?.name || "Vacant"}</strong></p>
          <div class="belt-meta">
            <span>Prestige <strong>${Math.round(belt.prestige)}</strong></span>
            <span>${prestigeLabel(belt.prestige)}</span>
            <span>Defenses <strong>${belt.defenses}</strong></span>
          </div>
          <div class="contender-list"><strong>Top Contenders</strong><ol>${contenders || "<li>No eligible contenders.</li>"}</ol></div>
          <ul class="belt-history">${history}</ul>
        </div>
      </article>
    `;
  }).join("");
}

function moneyText(value) {
  return `$${Math.round(value).toLocaleString()}`;
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function show(name) {
  if (!screens[name]) return;
  const transition = document.getElementById("screenTransition");
  if (transition && currentScreen !== name) {
    transition.classList.remove("play", "ppv", "alert");
    void transition.offsetWidth;
    transition.classList.add("play");
    if (name === "ppvBooking" || name === "ppvResults") transition.classList.add("ppv");
    if (["news", "chaos", "contracts", "gameOver"].includes(name)) transition.classList.add("alert");
  }
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  currentScreen = name;
  document.body.dataset.screen = name;
  document.body.classList.toggle("ppv-mode", name === "ppvBooking" || name === "ppvResults");
  document.body.classList.toggle("tv-mode", name === "booking" || name === "results");
  document.body.classList.toggle("alert-mode", ["news", "chaos", "contracts", "gameOver"].includes(name));
  updateMoney();
  if (name !== "results") setResultsMusicDuck(false);
  updateScreenAudio(name);
}

function maybeShowTutorialPrompt() {
  const prompt = document.getElementById("tutorialPrompt");
  if (!prompt || localStorage.getItem(TUTORIAL_KEY) === "yes") return;
  prompt.hidden = false;
}

function closeTutorialPrompt(markComplete = false) {
  const prompt = document.getElementById("tutorialPrompt");
  if (prompt) prompt.hidden = true;
  if (markComplete) localStorage.setItem(TUTORIAL_KEY, "yes");
}

function ensureTutorialContext(step) {
  if (step.screen === "bookerOffice") renderBookerOffice();
  if (step.screen === "roster") renderRoster();
  if (step.screen === "feud") {
    if (selected.length !== 2) selected = roster.map((wrestler, index) => wrestler.active !== false ? index : -1).filter(index => index >= 0).slice(0, 2);
    setupFeudScreen();
  }
  if (step.screen === "booking") {
    if (!activeFeud) {
      if (selected.length !== 2) selected = [0, 1];
      createTutorialDemoFeud();
    }
    showBooking();
    return;
  }
  if (step.screen === "championships") renderChampionships();
  if (step.screen === "creativeTeam") renderCreativeTeam();
  if (step.screen === "contracts") renderContracts();
  show(step.screen);
}

function createTutorialDemoFeud() {
  const [aIndex, bIndex] = selected.length === 2 ? selected : [0, 1];
  const a = roster[aIndex];
  const b = roster[bIndex];
  const feudType = "Championship Chase";
  activeFeud = {
    wrestlerA: aIndex,
    wrestlerB: bIndex,
    feudType,
    angleStyle: "Promo Battle",
    feudLength: 4,
    ending: "Clean Win",
    titleFeud: false,
    titleId: null,
    currentWeek: 1,
    heat: calculateStartingHeat(a, b, feudType),
    risk: 8,
    projectedRevenue: 0,
    totalRevenue: 0,
    bestDecision: null,
    worstDecision: null
  };
  tutorialDemoActive = true;
}

function clearTutorialHighlight() {
  if (tutorialHighlight) tutorialHighlight.classList.remove("tutorial-glow");
  tutorialHighlight = null;
}

function positionTutorialTip(target) {
  const tip = document.getElementById("tutorialTip");
  if (!tip || !target) return;
  const rect = target.getBoundingClientRect();
  const center = rect.left + rect.width / 2;
  tip.style.left = `${Math.max(12, Math.min(window.innerWidth - 332, center - 160))}px`;
  tip.style.top = rect.top > window.innerHeight * 0.42
    ? `${Math.max(12, rect.top - tip.offsetHeight - 18)}px`
    : `${Math.min(window.innerHeight - tip.offsetHeight - 12, rect.bottom + 18)}px`;
}

function renderTutorialStep() {
  const step = tutorialSteps[tutorialIndex];
  if (!step) {
    finishTutorial();
    return;
  }
  ensureTutorialContext(step);
  const overlay = document.getElementById("tutorialOverlay");
  overlay.hidden = false;
  document.getElementById("tutorialStepText").textContent = `Tip ${tutorialIndex + 1} / ${tutorialSteps.length}`;
  document.getElementById("tutorialTipTitle").textContent = step.title;
  document.getElementById("tutorialTipText").textContent = step.text;
  document.getElementById("tutorialNextBtn").textContent = tutorialIndex === tutorialSteps.length - 1 ? "Finish Tutorial" : "Next Tip";
  window.setTimeout(() => {
    clearTutorialHighlight();
    tutorialHighlight = document.querySelector(step.selector);
    if (tutorialHighlight) {
      tutorialHighlight.classList.add("tutorial-glow");
      tutorialHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
      positionTutorialTip(tutorialHighlight);
    }
  }, 80);
}

function startTutorial() {
  tutorialActive = true;
  tutorialIndex = 0;
  closeTutorialPrompt(false);
  renderTutorialStep();
}

function nextTutorialTip() {
  if (!tutorialActive) return;
  tutorialIndex += 1;
  renderTutorialStep();
}

function finishTutorial() {
  tutorialActive = false;
  tutorialIndex = 0;
  clearTutorialHighlight();
  document.getElementById("tutorialOverlay").hidden = true;
  localStorage.setItem(TUTORIAL_KEY, "yes");
  if (tutorialDemoActive) {
    activeFeud = null;
    selected = [];
    history = [];
    tutorialDemoActive = false;
  }
  show("title");
}

function updateMoney() {
  setAnimatedText(document.getElementById("rosterMoney"), moneyText(money));
  setAnimatedText(document.getElementById("bookingMoney"), moneyText(money));
  const contractsMoney = document.getElementById("contractsMoney");
  if (contractsMoney) setAnimatedText(contractsMoney, moneyText(money));
  if (currentScreen === "bookerOffice") renderBookerOffice();
  if (currentScreen === "merchSponsors") renderMerchSponsors();
  updatePpvPanel();
  updateNewsTicker();
}

function setAnimatedText(element, value) {
  if (!element) return;
  const previous = element.textContent;
  element.textContent = value;
  if (previous && previous !== value) {
    element.classList.remove("number-pulse");
    void element.offsetWidth;
    element.classList.add("number-pulse");
  }
}

function updatePpvPanel() {
  const hypeText = document.getElementById("ppvHypeText");
  const bestText = document.getElementById("ppvBestText");
  const calendarText = document.getElementById("ppvCalendarText");
  const bookButton = document.getElementById("bookPpvBtn");
  if (!hypeText || !bestText) return;
  hypeText.textContent = Math.round(ppvHype.audienceMomentum || 0);
  bestText.textContent = ppvHype.bestRivalry && ppvHype.bestRivalry !== "None yet"
    ? `Best rivalry: ${ppvHype.bestRivalry}`
    : "No completed rivalries yet.";
  if (calendarText) {
    const eventName = currentPpvEvent || getCurrentPpvName();
    calendarText.textContent = weeksUntilPpv <= 0
      ? `${eventName} is ready to book.`
      : `${weeksUntilPpv} week${weeksUntilPpv === 1 ? "" : "s"} until ${eventName}.`;
  }
  if (bookButton) {
    const ready = weeksUntilPpv <= 0;
    bookButton.disabled = !ready;
    bookButton.textContent = ready ? "Book Big Event" : `Big Event in ${weeksUntilPpv}`;
  }
}

function updateNewsTicker() {
  const ticker = document.getElementById("newsTickerText");
  if (!ticker) return;
  ticker.textContent = newsItems.slice(-5).map(item => item.headline || item).join(" • ");
}

function addNews(headline, category = "RDGP company news", priority = "normal") {
  const item = { week: gameWeek, category, headline, priority };
  newsItems.push(item);
  newsItems = newsItems.slice(-40);
  newsFeed = newsItems.slice(-12).map(entry => entry.headline);
  if (priority === "major") playNewsAlert();
  updateNewsTicker();
}

function activeRoster() {
  return roster.filter(wrestler => wrestler.active !== false);
}

function averageRosterMorale() {
  const active = activeRoster();
  return active.length
    ? active.reduce((sum, wrestler) => sum + wrestler.morale, 0) / active.length
    : 0;
}

function averageTitlePrestige() {
  return championships.reduce((sum, belt) => sum + belt.prestige, 0) / championships.length;
}

function adjustBookerStats(changes = {}, note = "") {
  const softened = { ...changes };
  if (bookerProfile.reputation >= 75 && softened.jobSecurity < 0) {
    softened.jobSecurity = Math.round(softened.jobSecurity * 0.72);
  }
  if (bookerProfile.reputation <= 30) {
    ["jobSecurity", "fanTrust", "lockerRoomRespect"].forEach(key => {
      if (softened[key] < 0) softened[key] = Math.round(softened[key] * 1.25);
    });
  }
  ["reputation", "jobSecurity", "boardConfidence", "fanTrust", "lockerRoomRespect"].forEach(key => {
    if (typeof softened[key] === "number") {
      bookerProfile[key] = clamp(bookerProfile[key] + softened[key]);
    }
  });
  if (note) addNews(note, "RDGP company news", Math.abs(softened.jobSecurity || 0) >= 6 ? "major" : "normal");
}

function recordBookerCommission(netProfit, label) {
  const commission = Math.max(0, Math.round(netProfit * bookerProfile.commissionRate));
  bookerProfile.weeklyCommission = commission;
  bookerProfile.salaryEarned += commission;
  if (!bookerProfile.bestWeek || netProfit > bookerProfile.bestWeek.amount) {
    bookerProfile.bestWeek = { amount: netProfit, label };
  }
  if (!bookerProfile.worstWeek || netProfit < bookerProfile.worstWeek.amount) {
    bookerProfile.worstWeek = { amount: netProfit, label };
  }
  bookerProfile.recentProfit.push(netProfit);
  bookerProfile.recentProfit = bookerProfile.recentProfit.slice(-8);
  bookerProfile.weeksSurvived = Math.max(bookerProfile.weeksSurvived, gameWeek - 1);
  return commission;
}

function applyBookerWeeklyPerformance(result) {
  const label = `${result.showName || "TV"} Week ${activeFeud.currentWeek}`;
  const commission = recordBookerCommission(result.money || 0, label);
  bookerProfile.recentRatings.push(Number(result.rating || 0));
  bookerProfile.recentRatings = bookerProfile.recentRatings.slice(-8);

  const morale = averageRosterMorale();
  const rivalPressure = getRivalPressure();
  let jobDelta = 0;
  let boardDelta = 0;
  let fanDelta = 0;
  let lockerDelta = 0;
  let repDelta = 0;

  if (result.money >= 18000) {
    jobDelta += 5;
    boardDelta += 4;
    repDelta += 2;
  } else if (result.money >= 0) {
    jobDelta += 2;
    boardDelta += 1;
  } else {
    jobDelta -= result.money < -15000 ? 9 : 5;
    boardDelta -= result.money < -15000 ? 7 : 3;
    repDelta -= 2;
  }

  if ((result.rating || 0) >= 4.1 || ["Huge Pop", "Nuclear Heat"].includes(result.crowd?.level)) {
    fanDelta += 5;
    lockerDelta += 2;
    jobDelta += 3;
    repDelta += 2;
  } else if ((result.rating || 0) < 2.2 || result.crowd?.level === "Dead Crowd") {
    fanDelta -= 6;
    jobDelta -= 4;
    repDelta -= 2;
  }

  if (activeFeud.heat < 45) jobDelta -= 3;
  if (morale < 45) {
    lockerDelta -= 6;
    jobDelta -= 4;
  } else if (morale >= 72) {
    lockerDelta += 3;
    jobDelta += 1;
  }
  if (averageTitlePrestige() < 42) {
    boardDelta -= 3;
    jobDelta -= 2;
  }
  if (rivalPressure > 95) {
    fanDelta -= 2;
    jobDelta -= 2;
  }
  if (pendingPoach) {
    lockerDelta -= 3;
    jobDelta -= 2;
  }
  if (commission > 0 && result.money >= 0) repDelta += 1;
  if (bookerProfile.reputation >= 80 && result.money >= 0) {
    money += 2000;
    result.business.sponsorBonus = 2000;
    addNews("Sponsors trust your booking reputation and added a small bonus.", "Sponsor reaction");
  }

  adjustBookerStats({
    reputation: repDelta,
    jobSecurity: jobDelta,
    boardConfidence: boardDelta,
    fanTrust: fanDelta,
    lockerRoomRespect: lockerDelta
  });

  result.booker = {
    commission,
    jobSecurity: bookerProfile.jobSecurity,
    reputation: bookerProfile.reputation,
    boardConfidence: bookerProfile.boardConfidence,
    fanTrust: bookerProfile.fanTrust,
    lockerRoomRespect: bookerProfile.lockerRoomRespect
  };
  if ((gameWeek - 1) > 0 && (gameWeek - 1) % 4 === 0) {
    generateSponsorOffers(true);
    pendingBoardReview = buildBoardReview();
  }
}

function applyBookerPpvPerformance(grade, averageRating, profit) {
  const commission = recordBookerCommission(profit, `${currentPpvEvent || ppvCard?.eventName || "Big Event"} PPV`);
  bookerProfile.recentRatings.push(Number(averageRating || 0));
  bookerProfile.recentRatings = bookerProfile.recentRatings.slice(-8);
  const gradeScore = { A: 10, B: 6, C: 2, D: -6, F: -12 }[grade] || 0;
  adjustBookerStats({
    reputation: grade === "A" ? 5 : grade === "B" ? 3 : grade === "F" ? -6 : grade === "D" ? -3 : 1,
    jobSecurity: gradeScore,
    boardConfidence: gradeScore,
    fanTrust: grade === "A" ? 7 : grade === "B" ? 4 : grade === "F" ? -8 : grade === "D" ? -5 : 1,
    lockerRoomRespect: grade === "A" ? 4 : grade === "F" ? -5 : grade === "D" ? -3 : 1
  }, `${grade} grade big event changed your board confidence. Commission earned: ${moneyText(commission)}.`);
}

function buildBoardReview() {
  const recentProfit = bookerProfile.recentProfit.slice(-4);
  const recentRatings = bookerProfile.recentRatings.slice(-4);
  const profitTotal = recentProfit.reduce((sum, value) => sum + value, 0);
  const averageRating = recentRatings.length
    ? recentRatings.reduce((sum, value) => sum + value, 0) / recentRatings.length
    : 0;
  const morale = averageRosterMorale();
  const rivalPressure = getRivalPressure();
  const titlePrestige = averageTitlePrestige();
  let message = "The board sees a steady hand, but expects sharper profits.";
  if (bookerProfile.jobSecurity < 20) message = "One more bad cycle could get you fired.";
  else if (bookerProfile.jobSecurity < 40) message = "The board is losing patience.";
  else if (profitTotal > 25000 && averageRating >= 3.5) message = "The board likes the momentum. Keep the gates hot.";
  return {
    week: gameWeek,
    profitTotal,
    averageRating: Number(averageRating.toFixed(1)),
    morale: Math.round(morale),
    rivalPressure,
    titlePrestige: Math.round(titlePrestige),
    companyMoney: money,
    ppvHype: Math.round(ppvHype.audienceMomentum || 0),
    salaryEarned: bookerProfile.salaryEarned,
    jobSecurity: Math.round(bookerProfile.jobSecurity),
    message
  };
}

function renderBoardReview() {
  if (!pendingBoardReview) pendingBoardReview = buildBoardReview();
  document.getElementById("boardReviewTitle").textContent = `Week ${pendingBoardReview.week} Board Review`;
  document.getElementById("boardReviewMessage").textContent = pendingBoardReview.message;
  document.getElementById("boardReviewStats").innerHTML = `
    <div class="report-line"><span>Company Money</span><strong>${moneyText(pendingBoardReview.companyMoney)}</strong></div>
    <div class="report-line"><span>Recent Profit/Loss</span><strong class="${pendingBoardReview.profitTotal >= 0 ? "positive" : "negative"}">${moneyText(pendingBoardReview.profitTotal)}</strong></div>
    <div class="report-line"><span>Average Show Rating</span><strong>${pendingBoardReview.averageRating.toFixed(1)} / 5</strong></div>
    <div class="report-line"><span>PPV Hype</span><strong>${pendingBoardReview.ppvHype}</strong></div>
    <div class="report-line"><span>Roster Morale</span><strong>${pendingBoardReview.morale}</strong></div>
    <div class="report-line"><span>Rival Pressure</span><strong>${pendingBoardReview.rivalPressure}</strong></div>
    <div class="report-line"><span>Title Prestige</span><strong>${pendingBoardReview.titlePrestige}</strong></div>
    <div class="report-line"><span>Player Salary Earned</span><strong>${moneyText(pendingBoardReview.salaryEarned)}</strong></div>
    <div class="report-line"><span>Job Security</span><strong>${pendingBoardReview.jobSecurity}</strong></div>
  `;
}

function renderBookerOffice() {
  const warning = document.getElementById("bookerOfficeWarning");
  const salary = document.getElementById("bookerSalaryText");
  const name = document.getElementById("bookerNameText");
  const grid = document.getElementById("bookerOfficeGrid");
  if (!grid) return;
  name.textContent = bookerProfile.bookerName || "Head Booker";
  salary.textContent = moneyText(bookerProfile.salaryEarned);
  warning.textContent = bookerProfile.jobSecurity < 20
    ? "One more bad cycle could get you fired."
    : bookerProfile.jobSecurity < 40
      ? "The board is losing patience."
      : "The board is watching every dollar and every feud.";
  const items = [
    ["Reputation", bookerProfile.reputation, "Your name value with sponsors, wrestlers, and fans."],
    ["Job Security", bookerProfile.jobSecurity, "If this hits 0, the board fires you."],
    ["Board Confidence", bookerProfile.boardConfidence, "How much patience the directors have."],
    ["Fan Trust", bookerProfile.fanTrust, "How much the audience believes in your stories."],
    ["Locker Room Respect", bookerProfile.lockerRoomRespect, "How strongly the roster follows your creative lead."]
  ];
  grid.innerHTML = `
    ${items.map(([label, value, text]) => `
      <article class="office-card">
        <span>${label}</span>
        <strong>${Math.round(value)}</strong>
        <div class="bar ${label === "Job Security" ? "risk" : "heat"}"><b style="width:${clamp(value)}%"></b></div>
        <p>${text}</p>
      </article>
    `).join("")}
    <article class="office-card office-money">
      <span>Commission Rate</span>
      <strong>${Math.round(bookerProfile.commissionRate * 100)}%</strong>
      <p>Weekly commission is paid only from positive net profit.</p>
    </article>
    <article class="office-card office-money">
      <span>Last Commission</span>
      <strong>${moneyText(bookerProfile.weeklyCommission)}</strong>
      <p>Best week: ${bookerProfile.bestWeek?.label || "None"} (${moneyText(bookerProfile.bestWeek?.amount || 0)})</p>
    </article>
    <article class="office-card office-money">
      <span>Worst Week</span>
      <strong>${moneyText(bookerProfile.worstWeek?.amount || 0)}</strong>
      <p>${bookerProfile.worstWeek?.label || "No losses recorded"}</p>
    </article>
    <article class="office-card office-money">
      <span>Weeks Survived</span>
      <strong>${Math.max(bookerProfile.weeksSurvived, gameWeek - 1)}</strong>
      <p>Current company money: ${moneyText(money)}</p>
    </article>
  `;
}

function renderNewsScreen() {
  const list = document.getElementById("newsList");
  if (!list) return;
  const recent = newsItems.slice(-24).reverse();
  list.innerHTML = recent.map(item => `
    <article class="news-card ${item.priority === "major" ? "major-news" : ""}">
      <span>${item.category}</span>
      <h3>${item.headline}</h3>
      <small>Week ${item.week || gameWeek}</small>
    </article>
  `).join("");
}

function defaultLegacyData() {
  return {
    totalCompanyRevenue: 0,
    ppvsHeld: 0,
    titlesDefended: 0,
    wrestlersDeveloped: 0,
    rivalsDefeated: 0,
    highestCompanyPopularity: companyPopularity,
    greatestFeuds: [],
    highestRatedPpvs: [],
    longestTitleReigns: [],
    biggestBetrayals: [],
    chaoticMoments: []
  };
}

function normalizeLegacyData(saved = {}) {
  const base = defaultLegacyData();
  return {
    ...base,
    ...saved,
    totalCompanyRevenue: Math.max(0, Number(saved.totalCompanyRevenue) || 0),
    ppvsHeld: Math.max(0, Number(saved.ppvsHeld) || 0),
    titlesDefended: Math.max(0, Number(saved.titlesDefended) || 0),
    wrestlersDeveloped: Math.max(0, Number(saved.wrestlersDeveloped) || 0),
    rivalsDefeated: Math.max(0, Number(saved.rivalsDefeated) || 0),
    highestCompanyPopularity: clamp(Number(saved.highestCompanyPopularity) || companyPopularity),
    greatestFeuds: Array.isArray(saved.greatestFeuds) ? saved.greatestFeuds.slice(0, 8) : [],
    highestRatedPpvs: Array.isArray(saved.highestRatedPpvs) ? saved.highestRatedPpvs.slice(0, 8) : [],
    longestTitleReigns: Array.isArray(saved.longestTitleReigns) ? saved.longestTitleReigns.slice(0, 8) : [],
    biggestBetrayals: Array.isArray(saved.biggestBetrayals) ? saved.biggestBetrayals.slice(0, 8) : [],
    chaoticMoments: Array.isArray(saved.chaoticMoments) ? saved.chaoticMoments.slice(0, 8) : []
  };
}

function legacyTier(points) {
  if (points >= 240) return "Legend";
  if (points >= 190) return "Icon";
  if (points >= 145) return "Main Eventer";
  if (points >= 105) return "Star";
  if (points >= 70) return "Cult Favorite";
  return "Forgotten";
}

function addLegacyPoints(index, points, reason = "") {
  const wrestler = roster[index];
  if (!wrestler) return;
  wrestler.legacyPoints = Math.max(0, Math.round((wrestler.legacyPoints || 0) + points));
  if (reason && points >= 10) addNews(`${wrestler.name} gained legacy: ${reason}.`, "Championship buzz", "normal");
}

function trackLegacyRecord(collection, item, scoreKey = "score", limit = 8) {
  legacyData[collection] = [item, ...(legacyData[collection] || [])]
    .sort((a, b) => (b[scoreKey] || 0) - (a[scoreKey] || 0))
    .slice(0, limit);
}

function renderLegacyList(items, emptyText) {
  return items?.length
    ? items.map(item => `
      <article class="legacy-plaque">
        <span>${item.label || item.tier || item.category || "Legacy"}</span>
        <h3>${item.name || item.title}</h3>
        <p>${item.note || item.detail || ""}</p>
        <small>${item.score !== undefined ? `Score ${Math.round(item.score)}` : item.value || ""}</small>
      </article>
    `).join("")
    : `<article class="legacy-plaque"><span>Waiting</span><h3>${emptyText}</h3><p>Keep booking history-making moments.</p></article>`;
}

function renderLegends() {
  const legendsGrid = document.getElementById("legendsGrid");
  if (!legendsGrid) return;
  legacyData.highestCompanyPopularity = Math.max(legacyData.highestCompanyPopularity || 0, companyPopularity);
  document.getElementById("legacyWeeksText").textContent = Math.max(bookerProfile.weeksSurvived, gameWeek - 1);
  document.getElementById("legacyRevenueText").textContent = moneyText(legacyData.totalCompanyRevenue);
  document.getElementById("legacyBookerGradeText").textContent = finalBookerGrade();
  const topMerch = activeRoster().slice().sort((a, b) => (b.merchSales || 0) - (a.merchSales || 0))[0];
  const topProfit = activeRoster().slice().sort((a, b) => (b.legacyPoints || 0) - (a.legacyPoints || 0))[0];
  document.getElementById("legacyMilestones").innerHTML = `
    <article class="legacy-banner"><span>PPVs Held</span><strong>${legacyData.ppvsHeld}</strong></article>
    <article class="legacy-banner"><span>Titles Defended</span><strong>${legacyData.titlesDefended}</strong></article>
    <article class="legacy-banner"><span>Wrestlers Developed</span><strong>${legacyData.wrestlersDeveloped}</strong></article>
    <article class="legacy-banner"><span>Rivals Defeated</span><strong>${legacyData.rivalsDefeated}</strong></article>
    <article class="legacy-banner"><span>Highest Popularity</span><strong>${Math.round(legacyData.highestCompanyPopularity)}</strong></article>
    <article class="legacy-banner"><span>Top Merch Seller</span><strong>${topMerch ? topMerch.name : "None"}</strong></article>
    <article class="legacy-banner"><span>Top Legacy Star</span><strong>${topProfit ? topProfit.name : "None"}</strong></article>
  `;
  legendsGrid.innerHTML = hallOfLegends.length
    ? hallOfLegends.slice().reverse().map(legend => `
      <article class="legacy-plaque hall-inductee">
        <span>${legend.tier || legacyTier(legend.legacyPoints || 0)}</span>
        <h3>${legend.name}</h3>
        <p>${legend.note}</p>
        ${legend.highlights?.length ? `<p>${legend.highlights.join(" | ")}</p>` : ""}
        <small>Legacy ${Math.round(legend.legacyPoints || 0)} | Popularity ${legend.popularity} | Momentum ${legend.momentum}</small>
      </article>
    `).join("")
    : `<article class="legacy-plaque"><span>Hall Empty</span><h3>No RDGP Hall of Fame inductees yet.</h3><p>Retire an icon, then decide if they deserve the neon plaque.</p></article>`;
  document.getElementById("legacyRosterGrid").innerHTML = activeRoster()
    .slice()
    .sort((a, b) => (b.legacyPoints || 0) - (a.legacyPoints || 0))
    .slice(0, 8)
    .map(wrestler => `
      <article class="legacy-plaque">
        <span>${legacyTier(wrestler.legacyPoints || 0)}</span>
        <h3>${wrestler.name}</h3>
        <p>Titles ${wrestler.titleWins || 0} | Defenses ${wrestler.titleDefenses || 0} | PPV Main Events ${wrestler.ppvMainEvents || 0}</p>
        <small>Legacy ${Math.round(wrestler.legacyPoints || 0)} | Merch ${moneyText(wrestler.merchSales || 0)}</small>
      </article>
    `).join("");
  document.getElementById("legacyRecordsGrid").innerHTML = [
    renderLegacyList([{
      title: "Booker Legacy Report",
      label: finalBookerGrade(),
      score: bookerProfile.reputation,
      note: `Final reputation ${Math.round(bookerProfile.reputation)} | Salary earned ${moneyText(bookerProfile.salaryEarned)} | Best feud ${bestCompletedFeud()} | Worst feud ${worstCompletedFeud()} | Best PPV ${legacyData.highestRatedPpvs[0]?.title || "None yet"}.`
    }], "No booker legacy yet."),
    renderLegacyList(legacyData.greatestFeuds, "No legendary feuds recorded yet."),
    renderLegacyList(legacyData.highestRatedPpvs, "No PPV classics yet."),
    renderLegacyList(legacyData.longestTitleReigns, "No title reign records yet."),
    renderLegacyList(legacyData.biggestBetrayals, "No major betrayals recorded yet."),
    renderLegacyList(legacyData.chaoticMoments, "No chaotic moments recorded yet.")
  ].join("");
}

function isChampion(index) {
  return championships.some(belt => belt.champion === index);
}

function championSalaryBoost(index) {
  return championships.reduce((boost, belt) => {
    if (belt.champion !== index) return boost;
    if (belt.id === "world") return boost + 0.32;
    if (belt.id === "womens") return boost + 0.24;
    return boost + 0.18;
  }, 0);
}

function getRecentWinBonus(index) {
  const recent = completedFeuds.slice(-4);
  return recent.some(feud => feud.names?.includes(roster[index].name)) ? 0.08 : 0;
}

function hasRivalInterest(index) {
  const wrestler = roster[index];
  return Boolean(pendingPoach?.wrestlerIndex === index || (wrestler.active !== false && (wrestler.morale < 42 || wrestler.loyalty < 38 || wrestler.contractLength <= 1)));
}

function calculateAskingPrice(index) {
  const wrestler = roster[index];
  const base = 2300 + wrestler.popularity * 110 + wrestler.ringSkill * 38 + wrestler.charisma * 28;
  const moralePush = wrestler.morale < 40 ? 0.16 : wrestler.morale > 78 ? -0.05 : 0;
  const rivalPush = hasRivalInterest(index) ? 0.22 : 0;
  const total = base * (1 + championSalaryBoost(index) + getRecentWinBonus(index) + moralePush + rivalPush);
  return Math.round(total);
}

function getContractStatus(index) {
  const wrestler = roster[index];
  if (wrestler.active === false) return "Released";
  if (hasRivalInterest(index) && (wrestler.morale < 34 || wrestler.loyalty < 32 || wrestler.contractLength <= 1)) return "At Risk of Leaving";
  if (pendingPoach?.wrestlerIndex === index || hasRivalInterest(index)) return "Rival Interest";
  if (wrestler.morale < 36 || wrestler.loyalty < 34) return "Unhappy";
  if (calculateAskingPrice(index) > wrestler.weeklySalary * 1.18) return "Demanding Raise";
  if (wrestler.contractLength <= 2) return "Expiring Soon";
  return "Secure";
}

function refreshContractMeta() {
  roster.forEach((wrestler, index) => {
    if (wrestler.active === false) return;
    wrestler.careerStage = getCareerStage(wrestler);
    wrestler.askingPrice = calculateAskingPrice(index);
    wrestler.contractStatus = getContractStatus(index);
    wrestler.moraleImpact = wrestler.titlePromiseWeeks > 0 ? 6 : wrestler.contractStatus === "Secure" ? 2 : wrestler.contractStatus === "At Risk of Leaving" ? -10 : wrestler.contractStatus === "Unhappy" ? -7 : wrestler.contractStatus === "Demanding Raise" ? -4 : -2;
  });
}

function getWeeklyPayroll() {
  return roster.reduce((sum, wrestler) => wrestler.active === false ? sum : sum + Math.round(wrestler.weeklySalary || wrestler.salary || 0), 0);
}

function renderContracts() {
  refreshContractMeta();
  const grid = document.getElementById("contractsGrid");
  if (!grid) return;
  const activeRoster = roster.map((wrestler, index) => ({ wrestler, index })).filter(item => item.wrestler.active !== false);
  document.getElementById("weeklyPayrollText").textContent = moneyText(getWeeklyPayroll());
  document.getElementById("atRiskText").textContent = activeRoster.filter(item => ["At Risk of Leaving", "Rival Interest", "Unhappy"].includes(item.wrestler.contractStatus)).length;
  const avgLoyalty = activeRoster.length ? activeRoster.reduce((sum, item) => sum + item.wrestler.loyalty, 0) / activeRoster.length : 0;
  document.getElementById("avgLoyaltyText").textContent = Math.round(avgLoyalty);
  grid.innerHTML = activeRoster.map(({ wrestler, index }) => `
    <article class="contract-card status-${wrestler.contractStatus.toLowerCase().replaceAll(" ", "-")}">
      <div class="contract-head">
        <div>
          <h3>${wrestler.name}</h3>
          <span class="contract-badge">${wrestler.contractStatus}</span>
        </div>
        <strong>${isChampion(index) ? "Champion" : wrestler.alignment}</strong>
      </div>
      <div class="contract-stats">
        <span>Salary <strong>${moneyText(wrestler.weeklySalary)}</strong></span>
        <span>Asking <strong>${moneyText(wrestler.askingPrice)}</strong></span>
        <span>Length <strong>${wrestler.contractLength} wk</strong></span>
        <span>Morale <strong>${Math.round(wrestler.morale)}</strong></span>
        <span>Loyalty <strong>${Math.round(wrestler.loyalty)}</strong></span>
        <span>Rival Interest <strong>${hasRivalInterest(index) ? "Yes" : "No"}</strong></span>
      </div>
      ${wrestler.titlePromiseWeeks ? `<p class="contract-promise">Title shot promised: ${wrestler.titlePromiseWeeks} week${wrestler.titlePromiseWeeks === 1 ? "" : "s"} left.</p>` : ""}
      <div class="contract-actions">
        <button data-contract-action="raise" data-index="${index}">Offer Raise</button>
        <button data-contract-action="promise" data-index="${index}">Promise Title Shot</button>
        <button data-contract-action="extend" data-index="${index}">Extend Contract</button>
        <button data-contract-action="ignore" data-index="${index}">Ignore Demand</button>
        <button data-contract-action="release" data-index="${index}" class="danger-btn">Release</button>
      </div>
    </article>
  `).join("");
  grid.querySelectorAll("[data-contract-action]").forEach(button => {
    button.addEventListener("click", () => handleContractAction(Number(button.dataset.index), button.dataset.contractAction));
  });
}

function handleContractAction(index, action) {
  const wrestler = roster[index];
  if (!wrestler || wrestler.active === false) return;
  refreshContractMeta();
  if (action === "raise") {
    const newSalary = Math.max(wrestler.weeklySalary, wrestler.askingPrice);
    const cost = Math.round((newSalary - wrestler.weeklySalary) * 2 + newSalary);
    money -= cost;
    wrestler.weeklySalary = newSalary;
    wrestler.salary = newSalary;
    wrestler.morale = clamp(wrestler.morale + 10);
    wrestler.loyalty = clamp(wrestler.loyalty + 16);
    wrestler.ignoredDemandWeeks = 0;
    addNews(`${wrestler.name} accepted a raise worth ${moneyText(newSalary)} per week.`);
  } else if (action === "promise") {
    const trustBoost = bookerProfile.reputation >= 75 ? 4 : bookerProfile.reputation < 35 ? -5 : 0;
    wrestler.titlePromiseWeeks = 4;
    wrestler.morale = clamp(wrestler.morale + 12 + trustBoost);
    wrestler.loyalty = clamp(wrestler.loyalty + 8 + Math.round(trustBoost / 2));
    addNews(`${wrestler.name} was promised a title opportunity within four weeks.`);
  } else if (action === "extend") {
    const bonus = Math.round(wrestler.askingPrice * 2.2);
    money -= bonus;
    wrestler.contractLength += 6;
    wrestler.weeklySalary = Math.max(wrestler.weeklySalary, Math.round(wrestler.askingPrice * 0.92));
    wrestler.salary = wrestler.weeklySalary;
    wrestler.loyalty = clamp(wrestler.loyalty + 10);
    wrestler.morale = clamp(wrestler.morale + 5);
    wrestler.ignoredDemandWeeks = 0;
    addNews(`${wrestler.name} extended their RDGP contract for a ${moneyText(bonus)} signing bonus.`);
  } else if (action === "ignore") {
    wrestler.ignoredDemandWeeks += 1;
    wrestler.morale = clamp(wrestler.morale - 7);
    wrestler.loyalty = clamp(wrestler.loyalty - 9);
    addNews(`${wrestler.name}'s contract demand was ignored. Rival interest may rise.`);
  } else if (action === "release") {
    if (activeFeud && [activeFeud.wrestlerA, activeFeud.wrestlerB].includes(index)) {
      showSaveMessage("Finish or clear the active feud before releasing that wrestler.");
      return;
    }
    releaseWrestler(index);
  }
  if (money <= 0) {
    fireBooker("Company money reached $0 while handling contracts.");
    return;
  }
  refreshContractMeta();
  renderContracts();
  renderRoster();
  updateMoney();
  saveGame("contracts");
}

function releaseWrestler(index) {
  const wrestler = roster[index];
  wrestler.active = false;
  selected = selected.filter(item => item !== index);
  money += Math.round(wrestler.weeklySalary * 1.5);
  if (wrestler.popularity >= 78) {
    ppvHype.audienceMomentum = clamp(ppvHype.audienceMomentum - 8, 0, 150);
    companyPopularity = clamp(companyPopularity - 4);
    adjustBookerStats({ reputation: -3, jobSecurity: -5, fanTrust: -5, lockerRoomRespect: -4 }, `${wrestler.name}'s release hurt your booker reputation.`);
  }
  championships.forEach(belt => {
    if (belt.champion === index) {
      belt.history.push(`${wrestler.name} was released and ${belt.name} was vacated.`);
      belt.champion = firstEligibleChampion(belt);
      belt.prestige = clamp(belt.prestige - 10);
      trimTitleHistory(belt);
    }
  });
  addNews(`${wrestler.name} was released from RDGP. Payroll gets lighter, but fans noticed.`);
}

function getCurrentPpvName() {
  const monthIndex = Math.max(0, Math.floor((gameWeek - 1) / 4));
  return ppvEventNames[monthIndex % ppvEventNames.length];
}

function getRivalPressure() {
  const topRival = rivalPromotions.reduce((top, rival) => rival.weeklyRating > top.weeklyRating ? rival : top, rivalPromotions[0]);
  return clamp(Math.round(topRival.weeklyRating * 18 + topRival.popularity * 0.35), 0, 130);
}

function advancePpvCalendar(result) {
  gameWeek += 1;
  weeksUntilPpv = Math.max(0, weeksUntilPpv - 1);
  const titleBonus = activeFeud?.titleFeud ? 6 : 0;
  const crowdBonus = result.crowd ? result.crowd.score / 18 : 0;
  const buzzBonus = result.segment ? result.segment.buzzScore / 22 : 0;
  const moralePenalty = Math.max(0, 45 - Math.min(roster[activeFeud.wrestlerA].morale, roster[activeFeud.wrestlerB].morale)) / 5;
  const ratingSwing = (result.rating - 2.4) * 4;
  const riskDrag = activeFeud.risk > 95 ? 5 : activeFeud.risk > 75 ? 2 : 0;
  ppvHype.audienceMomentum = clamp(ppvHype.audienceMomentum + ratingSwing + crowdBonus + buzzBonus + titleBonus - moralePenalty - riskDrag, 0, 150);
  ppvHype.averageHeat = activeFeud ? Math.max(ppvHype.averageHeat || 0, activeFeud.heat) : ppvHype.averageHeat;
  if (activeFeud && activeFeud.heat >= 80) {
    ppvHype.bestRivalry = `${roster[activeFeud.wrestlerA].name} vs ${roster[activeFeud.wrestlerB].name}`;
  }
  if (weeksUntilPpv <= 0) {
    currentPpvEvent = currentPpvEvent || getCurrentPpvName();
    addNews(`${currentPpvEvent} is open for booking. The board expects a major payoff card.`);
  }
}

function generateWorldEvents(result, segmentResult) {
  const count = 1 + Math.floor(Math.random() * 3);
  const events = [];
  const pool = [
    createSocialTrendEvent,
    createLockerRoomRumorEvent,
    createSponsorComplaintEvent,
    createInjuryUpdateEvent,
    createRivalSigningEvent,
    createFanCampaignEvent,
    createTitleControversyEvent,
    createBackstageArgumentEvent,
    createMerchBoostEvent
  ];
  for (let i = 0; i < count; i += 1) {
    const event = pool[Math.floor(Math.random() * pool.length)](result, segmentResult);
    if (event) events.push(event);
  }
  events.forEach(event => {
    if (event.choices) {
      pendingWorldEvent = pendingWorldEvent || event;
    } else {
      applyWorldEventEffect(event.effect || {});
    }
    addNews(event.headline, event.category, event.priority || "normal");
  });
  return events;
}

function randomActiveWrestler(filter = () => true) {
  const active = roster.map((wrestler, index) => ({ wrestler, index })).filter(item => item.wrestler.active !== false && filter(item));
  return active[Math.floor(Math.random() * active.length)] || { wrestler: roster[0], index: 0 };
}

function randomRival() {
  return rivalPromotions[Math.floor(Math.random() * rivalPromotions.length)];
}

function randomBelt() {
  return championships[Math.floor(Math.random() * championships.length)];
}

function createSocialTrendEvent(result) {
  const star = activeFeud ? randomActiveWrestler(item => [activeFeud.wrestlerA, activeFeud.wrestlerB].includes(item.index)) : randomActiveWrestler();
  return {
    type: "social media trend",
    category: "Fan reaction",
    headline: `${star.wrestler.name} trends after a wild ${chosenSegment || "TV"} segment.`,
    effect: { heat: 4, popularity: { index: star.index, amount: 2 }, money: result.rating >= 3.5 ? 3500 : 1200 }
  };
}

function createLockerRoomRumorEvent() {
  const star = randomActiveWrestler();
  return {
    type: "locker room rumor",
    category: "Wrestler morale news",
    headline: `${star.wrestler.name} is reportedly frustrated with their creative direction.`,
    effect: { morale: { index: star.index, amount: -4 }, risk: 3 }
  };
}

function createSponsorComplaintEvent() {
  return {
    type: "sponsor complaint",
    category: "Sponsor reaction",
    headline: "A sponsor complains that this week's show got too chaotic for prime time.",
    priority: "major",
    effect: { money: -4500, risk: 5, companyPopularity: -1 }
  };
}

function createInjuryUpdateEvent() {
  const star = randomActiveWrestler();
  return {
    type: "injury scare",
    category: "Injury updates",
    headline: `${star.wrestler.name} is dealing with a minor injury scare after the latest taping.`,
    priority: "major",
    effect: { morale: { index: star.index, amount: -5 }, risk: 6, popularity: { index: star.index, amount: 1 } }
  };
}

function createRivalSigningEvent() {
  const rival = randomRival();
  return {
    type: "rival signing",
    category: "Rival promotion news",
    headline: `${rival.shortName} signs a buzzworthy free agent and gains momentum.`,
    effect: { rivalId: rival.id, rivalPopularity: 3, rivalStrength: 4, companyPopularity: -1 }
  };
}

function createFanCampaignEvent() {
  const star = randomActiveWrestler(item => item.wrestler.morale < 88);
  return {
    type: "fan campaign",
    category: "Fan reaction",
    headline: `Fans are demanding ${star.wrestler.name} get a title opportunity.`,
    priority: "major",
    wrestlerIndex: star.index,
    choices: [
      { label: "Promise title shot", effect: { promiseTitle: star.index, morale: { index: star.index, amount: 12 }, heat: 5 } },
      { label: "Book major segment", effect: { morale: { index: star.index, amount: 5 }, popularity: { index: star.index, amount: 3 }, money: -2200, heat: 3 } },
      { label: "Ignore fan pressure", effect: { morale: { index: star.index, amount: -7 }, companyPopularity: -3 } }
    ]
  };
}

function createTitleControversyEvent() {
  const belt = randomBelt();
  return {
    type: "title controversy",
    category: "Championship buzz",
    headline: `${belt.name} sparks debate after fans question the current title scene.`,
    priority: "major",
    beltId: belt.id,
    choices: [
      { label: "Announce title focus", effect: { beltId: belt.id, beltPrestige: 5, money: -1800, heat: 4 } },
      { label: "Stoke controversy", effect: { beltId: belt.id, beltPrestige: 2, risk: 6, heat: 7 } },
      { label: "Let it fade", effect: { beltId: belt.id, beltPrestige: -5, companyPopularity: -2 } }
    ]
  };
}

function createBackstageArgumentEvent() {
  const star = randomActiveWrestler();
  return {
    type: "backstage argument",
    category: "Wrestler morale news",
    headline: `A backstage argument involving ${star.wrestler.name} leaks to the wrestling press.`,
    effect: { morale: { index: star.index, amount: -6 }, risk: 5, heat: 2 }
  };
}

function createMerchBoostEvent() {
  const star = randomActiveWrestler(item => item.wrestler.popularity >= 70);
  return {
    type: "surprise merchandise boost",
    category: "RDGP company news",
    headline: `${star.wrestler.name}'s merchandise suddenly catches fire with fans.`,
    effect: { money: 6500, popularity: { index: star.index, amount: 2 }, companyPopularity: 1 }
  };
}

function applyWorldEventEffect(effect) {
  if (!effect) return;
  money += Number(effect.money) || 0;
  companyPopularity = clamp(companyPopularity + (Number(effect.companyPopularity) || 0));
  if (activeFeud) {
    activeFeud.heat = clamp(activeFeud.heat + (Number(effect.heat) || 0), 0, 130);
    activeFeud.risk = clamp(activeFeud.risk + (Number(effect.risk) || 0), 0, 130);
  }
  if (effect.morale && roster[effect.morale.index]) {
    roster[effect.morale.index].morale = clamp(roster[effect.morale.index].morale + effect.morale.amount);
  }
  if (effect.popularity && roster[effect.popularity.index]) {
    roster[effect.popularity.index].popularity = clamp(roster[effect.popularity.index].popularity + effect.popularity.amount);
  }
  if (Number.isInteger(effect.promiseTitle) && roster[effect.promiseTitle]) {
    roster[effect.promiseTitle].titlePromiseWeeks = 4;
  }
  const belt = effect.beltId ? championships.find(item => item.id === effect.beltId) : null;
  if (belt) {
    belt.prestige = clamp(belt.prestige + (Number(effect.beltPrestige) || 0), 0, 100);
  }
  const rival = effect.rivalId ? rivalPromotions.find(item => item.id === effect.rivalId) : null;
  if (rival) {
    rival.popularity = clamp(rival.popularity + (Number(effect.rivalPopularity) || 0));
    rival.rosterStrength = clamp(rival.rosterStrength + (Number(effect.rivalStrength) || 0));
  }
  refreshContractMeta();
}

function renderWorldEventsPanel(events = []) {
  const panel = document.getElementById("worldEventsPanel");
  if (!panel) return;
  if (!events.length && !pendingWorldEvent) {
    panel.innerHTML = "";
    panel.classList.remove("warning");
    return;
  }
  panel.classList.toggle("warning", Boolean(pendingWorldEvent));
  const eventList = events.map(event => `<li><strong>${event.category}</strong> ${event.headline}</li>`).join("");
  const choiceHtml = pendingWorldEvent ? `
    <div class="world-choice">
      <strong>Booker Response Needed</strong>
      <p>${pendingWorldEvent.headline}</p>
      <div class="poach-actions">
        ${pendingWorldEvent.choices.map((choice, index) => `<button data-world-choice="${index}">${choice.label}</button>`).join("")}
      </div>
    </div>
  ` : "";
  panel.innerHTML = `
    <span class="static-label">World Events</span>
    <ul>${eventList}</ul>
    ${choiceHtml}
  `;
  panel.querySelectorAll("[data-world-choice]").forEach(button => {
    button.addEventListener("click", () => resolveWorldEventChoice(Number(button.dataset.worldChoice)));
  });
}

function resolveWorldEventChoice(choiceIndex) {
  if (!pendingWorldEvent) return;
  const choice = pendingWorldEvent.choices[choiceIndex];
  if (!choice) return;
  applyWorldEventEffect(choice.effect);
  addNews(`${choice.label}: ${pendingWorldEvent.headline}`, pendingWorldEvent.category, "major");
  pendingWorldEvent = null;
  renderWorldEventsPanel(lastResult?.worldEvents || []);
  renderRoster();
  updateMoney();
  if (money <= 0) {
    fireBooker("Company money reached $0 after a world event response.");
    return;
  }
  saveGame(currentScreen);
}

function renderRoster() {
  const grid = document.getElementById("rosterGrid");
  grid.innerHTML = "";
  roster.forEach((wrestler, index) => {
    if (wrestler.active === false) return;
    const card = document.createElement("article");
    const presentationClasses = [
      selected.includes(index) ? "selected" : "",
      isChampion(index) ? "champion-card" : "",
      wrestler.breakout ? "breakout-card" : "",
      wrestler.injuryWeeks ? "injured-card" : "",
      wrestler.momentum >= 78 ? "hot-momentum" : ""
    ].filter(Boolean).join(" ");
    card.className = `wrestler-card ${presentationClasses}`;
    card.style.setProperty("--c1", wrestler.colors[0]);
    card.style.setProperty("--c2", wrestler.colors[1]);
    card.innerHTML = `
      <div class="portrait-row">
        <div class="avatar">
          <img src="${wrestler.image}" alt="${wrestler.name} portrait" onerror="this.remove(); this.parentElement.textContent='${wrestler.emoji}';">
        </div>
        <div>
          <h3>${wrestler.name}</h3>
          <span class="alignment ${wrestler.alignment.toLowerCase()}">${wrestler.alignment}</span>
        </div>
      </div>
      <div class="stats">
        <div class="mini-stat">Popularity <strong>${wrestler.popularity}</strong></div>
        <div class="mini-stat">Charisma <strong>${wrestler.charisma}</strong></div>
        <div class="mini-stat">Ring Skill <strong>${wrestler.ringSkill}</strong></div>
        <div class="mini-stat">Stamina <strong>${wrestler.stamina}</strong></div>
        <div class="mini-stat">Morale <strong>${wrestler.morale}</strong></div>
        <div class="mini-stat">Age <strong>${wrestler.age}</strong></div>
        <div class="mini-stat">Stage <strong>${wrestler.careerStage}</strong></div>
        <div class="mini-stat">Momentum <strong>${growthArrow(wrestler.momentum - 50)} ${wrestler.momentum}</strong></div>
        <div class="mini-stat">Potential <strong>${wrestler.potential}</strong></div>
        <div class="mini-stat">Fatigue <strong>${wrestler.fatigue >= 70 ? "⚠ " : ""}${wrestler.fatigue}</strong></div>
        <div class="mini-stat">Injury Risk <strong>${wrestler.injuryRisk >= 55 ? "⚠ " : ""}${wrestler.injuryRisk}</strong></div>
        <div class="mini-stat">Finisher <strong>${wrestler.finisher}</strong></div>
        <div class="mini-stat">Contract <strong>${wrestler.contractLength} wk</strong></div>
        <div class="mini-stat">Salary <strong>${moneyText(wrestler.weeklySalary)}</strong></div>
        <div class="mini-stat">Loyalty <strong>${wrestler.loyalty}</strong></div>
        <div class="mini-stat">Promo <strong>${wrestler.promoSkill}</strong></div>
        <div class="mini-stat">Crowd <strong>${wrestler.crowdConnection}</strong></div>
      </div>
      <p><strong>Strength:</strong> ${wrestler.strength}</p>
      <p><strong>Weakness:</strong> ${wrestler.weakness}</p>
      <div class="growth-strip">
        <span class="${wrestler.breakout ? "breakout-on" : ""}">${wrestler.breakout ? "BREAKOUT STAR" : "Career Watch"}</span>
        <span>${wrestler.injuryWeeks ? `Injured ${wrestler.injuryWeeks} wk` : "Cleared"}</span>
      </div>
      <div class="training-actions">
        <button data-training="promo" data-index="${index}">Promo Training</button>
        <button data-training="strength" data-index="${index}">Strength Training</button>
        <button data-training="stamina" data-index="${index}">Stamina Training</button>
        <button data-training="media" data-index="${index}">Media Training</button>
      </div>
      <div class="finisher-panel" data-finisher-index="${index}" aria-label="${wrestler.finisher} finisher preview" role="button" tabindex="0">
        <div class="finisher-media" data-video-mp4="${wrestler.finisherClip || ""}" data-video-webm="" data-gif="">
          <span class="finisher-icon">${finisherIcon(wrestler)}</span>
          <span class="action-silhouette"></span>
        </div>
        <div class="finisher-copy">
          <small>Finisher Preview</small>
          <strong>${wrestler.finisher}</strong>
        </div>
        <span class="view-finisher">View Finisher</span>
      </div>
    `;
    card.querySelectorAll("[data-training]").forEach(button => {
      button.addEventListener("click", event => {
        event.stopPropagation();
        trainWrestler(Number(button.dataset.index), button.dataset.training);
      });
    });
    bindFinisherButtons(card);
    card.addEventListener("click", () => toggleSelect(index));
    grid.appendChild(card);
  });
  document.getElementById("selectedCount").textContent = `${selected.length} / 2 selected`;
  document.getElementById("toFeudBtn").disabled = selected.length !== 2;
}

function toggleSelect(index) {
  if (roster[index]?.injuryWeeks > 0 && !selected.includes(index)) {
    showSaveMessage(`${roster[index].name} is injured and must miss ${roster[index].injuryWeeks} week${roster[index].injuryWeeks === 1 ? "" : "s"}.`);
    return;
  }
  if (selected.includes(index)) {
    selected = selected.filter(i => i !== index);
  } else if (selected.length < 2 && roster[index].active !== false) {
    selected.push(index);
  }
  renderRoster();
  if (currentScreen === "roster") saveGame("roster");
}

function growthArrow(value) {
  if (value >= 25) return "↑";
  if (value <= -15) return "↓";
  return "→";
}

function trainWrestler(index, type) {
  const wrestler = roster[index];
  if (!wrestler || wrestler.active === false) return;
  if (wrestler.injuryWeeks > 0 && type !== "media") {
    showSaveMessage(`${wrestler.name} is injured. Use Media Training or let them rest.`);
    return;
  }
  const costMap = { promo: 3200, strength: 3600, stamina: 3000, media: 2800 };
  const cost = costMap[type] || 3000;
  money -= cost;
  const successChance = clamp(42 + wrestler.potential * 0.35 - wrestler.fatigue * 0.25 + (wrestler.careerStage === "Rising Star" ? 8 : 0), 20, 86);
  const success = Math.random() * 100 < successChance;
  if (type === "promo") {
    wrestler.charisma = clamp(wrestler.charisma + (success ? 2 : 0));
    wrestler.promoSkill = clamp(wrestler.promoSkill + (success ? 3 : 1));
  } else if (type === "strength") {
    wrestler.ringSkill = clamp(wrestler.ringSkill + (success ? 2 : 0));
    wrestler.fatigue = clamp(wrestler.fatigue + 7);
  } else if (type === "stamina") {
    wrestler.stamina = clamp(wrestler.stamina + (success ? 3 : 1));
    wrestler.fatigue = clamp(wrestler.fatigue - 5);
  } else {
    wrestler.popularity = clamp(wrestler.popularity + (success ? 2 : 1));
    wrestler.crowdConnection = clamp(wrestler.crowdConnection + (success ? 3 : 1));
  }
  wrestler.momentum = clamp(wrestler.momentum + (success ? 4 : 1));
  wrestler.morale = clamp(wrestler.morale + (success ? 2 : -1));
  wrestler.injuryRisk = clamp(wrestler.injuryRisk + (type === "strength" ? 2 : -1));
  addNews(`${wrestler.name} completed ${type} training ${success ? "and improved" : "with modest gains"}.`, "RDGP company news");
  if (money <= 0) {
    fireBooker("Company money reached $0 while funding training.");
    return;
  }
  refreshContractMeta();
  renderRoster();
  updateMoney();
  saveGame("roster");
}

function finisherIcon(wrestler) {
  const icons = {
    "Super Dragon Fly": "✦",
    "Iron Duchess": "♛",
    "The Midnight Bruiser": "◆",
    "Velvet Storm": "⚡",
    "Titan Rex": "▲",
    "Lady Voltage": "✹",
    "The Saint of Pain": "✚",
    "Neon Panther": "◇",
    "Big Harbor King": "⚓",
    "Queen Viper": "◈"
  };
  return icons[wrestler.name] || "★";
}

function bindFinisherButtons(root = document) {
  root.querySelectorAll("[data-finisher-index]").forEach(button => {
    if (button.dataset.finisherBound === "yes") return;
    button.dataset.finisherBound = "yes";
    button.addEventListener("click", event => {
      event.stopPropagation();
      openFinisherPreview(Number(button.dataset.finisherIndex));
    });
    button.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      openFinisherPreview(Number(button.dataset.finisherIndex));
    });
  });
}

function openFinisherPreview(index) {
  const wrestler = roster[index];
  const modal = document.getElementById("finisherModal");
  const media = document.getElementById("finisherModalMedia");
  const fallback = document.getElementById("finisherModalFallback");
  if (!wrestler || !modal || !media || !fallback) return;
  document.getElementById("finisherModalName").textContent = wrestler.name;
  document.getElementById("finisherModalTitle").textContent = wrestler.finisher;
  media.innerHTML = "";
  fallback.hidden = true;

  if (wrestler.finisherClip) {
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = wrestler.image;
    video.src = wrestler.finisherClip;
    video.addEventListener("error", () => {
      console.warn(`[Booking Empire] Missing or unloadable finisher clip for ${wrestler.name}: ${wrestler.finisherClip}`);
      media.innerHTML = finisherPlaceholderMarkup(wrestler);
      fallback.hidden = false;
    }, { once: true });
    media.appendChild(video);
  } else {
    console.warn(`[Booking Empire] No finisher clip assigned for ${wrestler.name}.`);
    media.innerHTML = finisherPlaceholderMarkup(wrestler);
    fallback.hidden = false;
  }
  modal.hidden = false;
}

function closeFinisherPreview() {
  const modal = document.getElementById("finisherModal");
  const media = document.getElementById("finisherModalMedia");
  if (media) media.innerHTML = "";
  if (modal) modal.hidden = true;
}

function finisherPlaceholderMarkup(wrestler) {
  return `
    <div class="finisher-placeholder" style="--c1:${wrestler.colors?.[0] || "#ffd84f"}; --c2:${wrestler.colors?.[1] || "#72d7ff"}">
      <span class="finisher-icon">${finisherIcon(wrestler)}</span>
      <span class="action-silhouette"></span>
    </div>
  `;
}

function fillSelect(id, items) {
  const el = document.getElementById(id);
  el.innerHTML = "";
  items.forEach(item => {
    const option = document.createElement("option");
    option.value = typeof item === "object" ? item.value : item;
    option.textContent = typeof item === "object" ? item.label : item;
    el.appendChild(option);
  });
}

function setupFeudScreen() {
  const [a, b] = selected.map(i => roster[i]);
  document.getElementById("feudPairTitle").textContent = `${a.name} vs ${b.name}`;
  fillSelect("feudType", feudTypes);
  fillSelect("angleStyle", angleStyles);
  fillSelect("feudLength", feudLengths);
  fillSelect("ending", endings);
  const titleFeud = document.getElementById("titleFeud");
  titleFeud.checked = false;
  renderTitleOptions();
  ["feudType", "angleStyle", "feudLength", "ending", "titleSelect"].forEach(id => {
    document.getElementById(id).onchange = updateFeudPreview;
  });
  titleFeud.onchange = () => {
    renderTitleOptions();
    updateFeudPreview();
  };
  updateFeudPreview();
  show("feud");
}

function eligibleTitlesForSelection() {
  if (selected.length !== 2) return [];
  const [a, b] = selected.map(i => roster[i]);
  return championships.filter(belt => {
    if (belt.division === "Open") return true;
    return a.gender === belt.division && b.gender === belt.division;
  });
}

function renderTitleOptions() {
  const titleFeud = document.getElementById("titleFeud");
  const panel = document.getElementById("titleFeudPanel");
  const hint = document.getElementById("titleFeudHint");
  const wrap = document.getElementById("titleSelectWrap");
  const select = document.getElementById("titleSelect");
  const eligible = eligibleTitlesForSelection();
  titleFeud.disabled = eligible.length === 0;
  if (eligible.length === 0) titleFeud.checked = false;
  panel.classList.toggle("disabled", eligible.length === 0);
  panel.classList.toggle("checked", titleFeud.checked);
  hint.textContent = eligible.length
    ? `${eligible.length} eligible championship${eligible.length > 1 ? "s" : ""} available.`
    : "No eligible title for this pairing.";
  wrap.classList.toggle("hidden", !titleFeud.checked || eligible.length === 0);
  select.innerHTML = eligible.map(belt => `<option value="${belt.id}">${belt.name}</option>`).join("");
}

function getActiveTitle() {
  if (!activeFeud?.titleFeud) return null;
  return championships.find(belt => belt.id === activeFeud.titleId) || null;
}

function calculateStartingHeat(a, b, feudType) {
  let heat = (a.popularity + b.popularity + a.charisma + b.charisma) / 4;
  if (a.alignment !== b.alignment) heat += 12;
  else if (feudType === "Respect Rivalry" || feudType === "Betrayal") heat += 4;
  else heat -= 10;
  return clamp(Math.round(heat));
}

function updateFeudPreview() {
  const [a, b] = selected.map(i => roster[i]);
  const feudType = document.getElementById("feudType").value;
  const titleFeud = document.getElementById("titleFeud").checked;
  const titleId = document.getElementById("titleSelect").value;
  const belt = titleFeud ? championships.find(item => item.id === titleId) : null;
  const heat = calculateStartingHeat(a, b, feudType) + (belt ? titleHeatBonus(belt) : 0);
  const risk = feudType === "Personal Grudge" || feudType === "Betrayal" ? 14 : 8;
  const projectedRevenue = heat * (belt ? titleRevenueMultiplier(belt) : 1) * 500 * Number(document.getElementById("feudLength").value);
  const previousHistory = describePreviousHistory(selected[0], selected[1]);
  recalculateRankings(false);
  document.getElementById("feudPreview").innerHTML = `
    <h3>Projected Feud</h3>
    <p>${a.name} (${a.alignment}) vs ${b.name} (${b.alignment})</p>
    ${belt ? `<p class="title-feud-badge">Title Feud: <strong>${belt.name}</strong> (${prestigeLabel(belt.prestige)})</p>` : ""}
    <p class="ranking-note"><strong>${a.name}:</strong> ${rankingLine(selected[0])}</p>
    <p class="ranking-note"><strong>${b.name}:</strong> ${rankingLine(selected[1])}</p>
    <p>Starting Heat: <strong>${heat}</strong> | Starting Risk: <strong>${risk}</strong></p>
    <p>Projected Revenue: <strong>${moneyText(projectedRevenue)}</strong></p>
    <div class="history-note"><strong>Previous History:</strong> ${previousHistory}</div>
  `;
}

function titleHeatBonus(belt) {
  return Math.round(8 + belt.prestige / 12);
}

function titleRevenueMultiplier(belt) {
  return 1 + belt.prestige / 180;
}

function describePreviousHistory(aIndex, bIndex) {
  const record = feudHistory[getPairKey(aIndex, bIndex)];
  if (!record) return "No previous rivalry. This is fresh matchmaking.";
  const parts = [];
  if (record.previousFeuds) parts.push(`${record.previousFeuds} previous feud${record.previousFeuds > 1 ? "s" : ""}`);
  if (record.betrayals) parts.push(`${record.betrayals} betrayal${record.betrayals > 1 ? "s" : ""}`);
  if (record.crowdHistory >= 85) parts.push("the crowd remembers their legendary feud");
  else if (record.crowdHistory >= 65) parts.push("fans still remember their chemistry");
  if (record.wins) parts.push(`${record.wins} decisive payoff${record.wins > 1 ? "s" : ""}`);
  return parts.length ? parts.join(", ") + "." : "A past rivalry exists, but the crowd needs a reminder.";
}

function createFeud() {
  const [aIndex, bIndex] = selected;
  const a = roster[aIndex];
  const b = roster[bIndex];
  const feudType = document.getElementById("feudType").value;
  const angleStyle = document.getElementById("angleStyle").value;
  const feudLength = Number(document.getElementById("feudLength").value);
  const ending = document.getElementById("ending").value;
  const titleFeud = document.getElementById("titleFeud").checked;
  const titleId = document.getElementById("titleSelect").value;
  const title = titleFeud ? championships.find(item => item.id === titleId) : null;
  const heat = calculateStartingHeat(a, b, feudType) + (title ? titleHeatBonus(title) : 0);
  const risk = feudType === "Personal Grudge" || feudType === "Betrayal" ? 14 : 8;
  if (title) {
    [a, b].forEach(wrestler => {
      if (wrestler.titlePromiseWeeks > 0) {
        wrestler.titlePromiseWeeks = 0;
        wrestler.morale = clamp(wrestler.morale + 8);
        wrestler.loyalty = clamp(wrestler.loyalty + 6);
      }
    });
  }
  activeFeud = {
    wrestlerA: aIndex,
    wrestlerB: bIndex,
    feudType,
    angleStyle,
    feudLength,
    ending,
    titleFeud: Boolean(title),
    titleId: title?.id || null,
    currentWeek: 1,
    heat,
    risk,
    projectedRevenue: heat * 500 * feudLength * (title ? titleRevenueMultiplier(title) : 1),
    totalRevenue: 0,
    bestDecision: null,
    worstDecision: null
  };
  history = [];
  showBooking();
  saveGame("booking");
}

function showBooking() {
  chosenWeeklyAngle = null;
  chosenSegment = null;
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  document.getElementById("bookingTitle").textContent = `${a.name} vs ${b.name}`;
  document.getElementById("weekText").textContent = `${activeFeud.currentWeek} / ${activeFeud.feudLength}`;
  const belt = getActiveTitle();
  document.getElementById("planText").textContent = `${activeFeud.feudType} with ${activeFeud.angleStyle}. ${belt ? `${belt.name} is on the line. ` : ""}Planned ending: ${activeFeud.ending}.`;
  updateBars();
  renderMorale();
  renderWeeklyAngles();
  renderWeeklySegments();
  show("booking");
}

function updateBars() {
  const heat = clamp(activeFeud.heat);
  const risk = clamp(activeFeud.risk);
  document.getElementById("heatText").textContent = Math.round(heat);
  document.getElementById("riskText").textContent = Math.round(risk);
  document.getElementById("heatBar").style.width = `${heat}%`;
  document.getElementById("riskBar").style.width = `${risk}%`;
}

function renderMorale() {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  document.getElementById("moraleBox").innerHTML = [a, b].map(w => `
    <div class="morale-line">
      <span>${w.name}</span>
      <div class="bar"><b style="width:${clamp(w.morale)}%"></b></div>
      <strong>${Math.round(w.morale)}</strong>
    </div>
  `).join("");
}

function renderWeeklyAngles() {
  const box = document.getElementById("weeklyAngles");
  box.innerHTML = "";
  weeklyAngles.forEach(angle => {
    const btn = document.createElement("button");
    btn.className = "angle-btn";
    btn.innerHTML = `<strong>${angle}</strong><br><span>${angleHint(angle)}</span>`;
    btn.addEventListener("click", () => {
      chosenWeeklyAngle = angle;
      document.querySelectorAll(".angle-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      updateRunWeekButton();
    });
    box.appendChild(btn);
  });
  document.getElementById("runWeekBtn").disabled = true;
}

function renderWeeklySegments() {
  const box = document.getElementById("weeklySegments");
  box.innerHTML = "";
  weeklySegments.forEach(segment => {
    const btn = document.createElement("button");
    btn.className = "segment-btn";
    btn.innerHTML = `<strong>${segment}</strong><br><span>${segmentHint(segment)}</span>`;
    btn.addEventListener("click", () => {
      chosenSegment = segment;
      document.querySelectorAll(".segment-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      updateRunWeekButton();
    });
    box.appendChild(btn);
  });
}

function updateRunWeekButton() {
  document.getElementById("runWeekBtn").disabled = !chosenWeeklyAngle || !chosenSegment;
}

function segmentHint(segment) {
  return {
    "In-Ring Promo": "Mic skills and crowd connection matter.",
    "Backstage Interview": "Safer character spotlight.",
    "Contract Signing": "Big fight feel with ego risk.",
    "Ambush Attack": "Aggression creates heat.",
    "Open Challenge": "Ring skill and popularity test.",
    "Heel Betrayal": "Explosive if a heel is involved.",
    "Tag-Team Tease": "Chemistry and fan curiosity.",
    "Championship Celebration": "Best with a title feud or champion.",
    "Social Media Callout": "Buzz can spike fast.",
    "Mystery Interruption": "Risky surprise TV."
  }[segment];
}

function angleHint(angle) {
  return {
    "Heated Promo": "Charisma can create big heat.",
    "Surprise Attack": "Fast heat, higher risk.",
    "Match Interference": "Chaotic TV moment with moderate risk.",
    "Emotional Interview": "Faces shine with low risk.",
    "Cheating Finish": "Great for heels, risky.",
  }[angle];
}

function runWeek() {
  [activeFeud.wrestlerA, activeFeud.wrestlerB].forEach(index => {
    const wrestler = roster[index];
    if (wrestler?.injuryWeeks > 0) {
      activeFeud.heat = clamp(activeFeud.heat - 4, 0, 130);
      activeFeud.risk = clamp(activeFeud.risk + 6, 0, 130);
      addNews(`${wrestler.name} worked hurt, making the feud harder to manage.`, "Injury updates", "major");
    }
  });
  const result = applyWeeklyAngle(chosenWeeklyAngle);
  const segmentResult = applyWeeklySegment(chosenSegment);
  const event = rollWeeklyEvent();
  const payrollReport = applyContractWeek();
  const rivalReport = generateRivalRatings();
  pendingPoach = checkPoachingInterest();
  const belt = getActiveTitle();
  const baseIncome = activeFeud.heat * 500 * (belt ? titleRevenueMultiplier(belt) : 1);
  const riskPenalty = activeFeud.risk * 200;
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  const moralePenalty = a.morale < 35 || b.morale < 35 ? 5000 : 0;
  const buzzBonus = segmentResult.buzzScore >= 105 ? 9000 : segmentResult.buzzScore >= 82 ? 4500 : segmentResult.buzzScore < 45 ? -2500 : 0;
  const grossRevenue = Math.round(baseIncome + buzzBonus);
  const eventCost = Math.max(0, -event.money) + Math.round(activeFeud.risk * 35);
  const moneyResult = Math.round(baseIncome - riskPenalty - moralePenalty + event.money + buzzBonus);
  const netProfit = Math.round(moneyResult - payrollReport.payrollCost);
  money += moneyResult;
  activeFeud.totalRevenue += netProfit;
  result.text = `${result.text} ${segmentResult.text}`;
  result.heatChange += segmentResult.heatChange;
  result.riskChange += segmentResult.riskChange;
  result.moraleA += segmentResult.moraleA;
  result.moraleB += segmentResult.moraleB;
  result.segment = segmentResult;
  result.money = netProfit;
  result.business = {
    grossRevenue,
    payrollCost: payrollReport.payrollCost,
    eventCost,
    riskPenalty,
    moralePenalty,
    netProfit
  };
  result.event = event;
  result.rivalReport = rivalReport;
  result.poach = pendingPoach;
  result.showName = weeklyShowNames[(activeFeud.currentWeek + completedFeuds.length) % weeklyShowNames.length];
  result.crowd = calculateCrowdReaction(chosenWeeklyAngle, chosenSegment, segmentResult);
  result.rating = calculateWeeklyRating(chosenWeeklyAngle, chosenSegment, result.crowd.score, segmentResult);
  result.growthEvents = applyGrowthAndDecline(result, segmentResult);
  const rankingMoves = applyWeeklyRankingMovement(result, segmentResult);
  const merchRevenue = calculateWeeklyMerchRevenue(result, segmentResult);
  const sponsorReport = applySponsorWeek(result);
  const moneyBeforeMerchEvent = money;
  const merchEvent = rollMerchSponsorEvent(result);
  const merchEventRevenue = Math.max(0, money - moneyBeforeMerchEvent);
  result.money += merchRevenue + sponsorReport.payout + merchEventRevenue;
  activeFeud.totalRevenue += merchRevenue + sponsorReport.payout + merchEventRevenue;
  result.business.merchRevenue = merchRevenue + merchEventRevenue;
  result.business.sponsorPayout = sponsorReport.payout;
  result.sponsorReport = sponsorReport;
  result.merchEvent = merchEvent;
  result.rankingMoves = rankingMoves;
  result.worldEvents = generateWorldEvents(result, segmentResult);
  result.chaosEvent = rollChaosEvent("weekly");
  [activeFeud.wrestlerA, activeFeud.wrestlerB].forEach(index => {
    addLegacyPoints(index, Math.round(Math.max(1, result.rating * 2 + (result.crowd.score || 0) / 28)), "weekly TV momentum");
    if (["Legendary Promo", "Viral Segment", "Breakout Performance"].includes(segmentResult.special?.label)) {
      roster[index].viralPromos += 1;
      addLegacyPoints(index, 8, segmentResult.special.label);
    }
  });
  result.audienceReport = applyAudienceReaction({
    label: result.showName || "Weekly TV",
    wrestlers: [a, b],
    angle: chosenWeeklyAngle,
    segment: chosenSegment,
    feudType: activeFeud.feudType,
    ending: activeFeud.ending,
    heat: activeFeud.heat,
    risk: activeFeud.risk,
    rating: result.rating,
    titleMatch: Boolean(belt),
    viral: ["Legendary Promo", "Viral Segment", "Breakout Performance"].includes(segmentResult.special?.label),
    betrayal: activeFeud.feudType === "Betrayal" || chosenSegment === "Heel Betrayal" || activeFeud.ending === "Shocking Betrayal",
    injury: event.title?.includes("Injury") || result.growthEvents?.some(note => note.includes("injury")),
    tooSafe: activeFeud.risk < 24 && ["Heated Promo", "Emotional Interview"].includes(chosenWeeklyAngle),
    tooComplex: activeFeud.feudType === "Jealousy Angle" && chosenSegment === "Mystery Interruption",
    sloppy: result.rating < 2.2,
    baseRevenue: grossRevenue
  });
  result.money += result.audienceReport.revenueImpact;
  result.business.audienceRevenue = result.audienceReport.revenueImpact;
  activeFeud.totalRevenue += result.audienceReport.revenueImpact;
  if (result.money > 0) legacyData.totalCompanyRevenue += result.money;
  legacyData.highestCompanyPopularity = Math.max(legacyData.highestCompanyPopularity || 0, companyPopularity);
  result.commentary = pickCommentary(result.money, result.heatChange, activeFeud.risk, result.rating, result.crowd.level);
  history.push({ angle: chosenWeeklyAngle, segment: chosenSegment, ...result });
  updateDecisionRecords(chosenWeeklyAngle, netProfit);
  lastResult = result;
  advancePpvCalendar(result);
  applyBookerWeeklyPerformance(result);

  if (money <= 0 || bookerProfile.jobSecurity <= 0) {
    fireBooker(money <= 0 ? "Company money reached $0." : "Job security reached 0.");
    return;
  }
  showResults(false);
  saveGame("results");
}

function applyContractWeek() {
  let payrollCost = 0;
  roster.forEach(wrestler => {
    if (wrestler.active === false) return;
    wrestler.contractLength = Math.max(0, wrestler.contractLength - 1);
    const weeklySalary = Math.round(wrestler.weeklySalary || wrestler.salary || 0);
    payrollCost += weeklySalary;
    money -= weeklySalary;
    if (wrestler.titlePromiseWeeks > 0) {
      if (isChampion(roster.indexOf(wrestler))) {
        wrestler.titlePromiseWeeks = 0;
        wrestler.morale = clamp(wrestler.morale + 4);
        wrestler.loyalty = clamp(wrestler.loyalty + 4);
        addNews(`${wrestler.name}'s title promise was satisfied with championship gold.`);
      }
    }
    if (wrestler.titlePromiseWeeks > 0) {
      wrestler.titlePromiseWeeks = Math.max(0, wrestler.titlePromiseWeeks - 1);
      if (wrestler.titlePromiseWeeks === 0 && !isChampion(roster.indexOf(wrestler))) {
        wrestler.morale = clamp(wrestler.morale - 18);
        wrestler.loyalty = clamp(wrestler.loyalty - 10);
        addNews(`${wrestler.name}'s promised title shot never happened. Morale crashed.`);
      }
    }
    if (wrestler.contractLength <= 1) {
      wrestler.loyalty = clamp(wrestler.loyalty - 4);
      addNews(`${wrestler.name} is nearing the end of their RDGP contract.`);
    }
    if (wrestler.ignoredDemandWeeks >= 2 && (wrestler.morale < 42 || wrestler.loyalty < 42)) {
      wrestler.loyalty = clamp(wrestler.loyalty - 4);
      wrestler.morale = clamp(wrestler.morale - 3);
    }
  });
  refreshContractMeta();
  return { payrollCost };
}

function rollWeeklyEvent() {
  const event = { ...weeklyEvents[Math.floor(Math.random() * weeklyEvents.length)] };
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  activeFeud.heat = clamp(activeFeud.heat + event.heat, 0, 130);
  activeFeud.risk = clamp(activeFeud.risk + event.risk, 0, 130);
  a.morale = clamp(a.morale + event.moraleA);
  b.morale = clamp(b.morale + event.moraleB);
  return event;
}

function applyWeeklySegment(segment) {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  const avgPromo = (a.promoSkill + b.promoSkill) / 2;
  const avgAggression = (a.aggression + b.aggression) / 2;
  const avgCrowd = (a.crowdConnection + b.crowdConnection) / 2;
  const chemistry = getChemistry(a.name, b.name);
  let heatChange = 0;
  let riskChange = 0;
  let moraleA = 0;
  let moraleB = 0;
  let buzzScore = 45 + chemistry;
  let text = "";

  if (segment === "In-Ring Promo") {
    heatChange = avgPromo >= 78 ? 11 : 3;
    riskChange = avgPromo < 55 ? 5 : 1;
    buzzScore += avgPromo * 0.45;
    text = avgPromo >= 78 ? "Huge crowd chants erupted during the promo." : "The promo got through, but the crowd wanted sharper lines.";
  } else if (segment === "Backstage Interview") {
    heatChange = 5 + Math.round(avgPromo / 30);
    riskChange = 1;
    moraleA = 2;
    moraleB = 2;
    buzzScore += avgPromo * 0.28;
    text = "A backstage interview gave both personalities room to breathe.";
  } else if (segment === "Contract Signing") {
    heatChange = 9 + Math.round((a.ego + b.ego) / 45);
    riskChange = 7;
    moraleA = a.ego > 78 ? -2 : 0;
    moraleB = b.ego > 78 ? -2 : 0;
    buzzScore += 18;
    text = "The contract signing nearly collapsed as egos took over the table.";
  } else if (segment === "Ambush Attack") {
    heatChange = 10 + Math.round(avgAggression / 35);
    riskChange = 9;
    moraleB = -5;
    buzzScore += avgAggression * 0.35;
    text = "The ambush attack made the arena gasp before security flooded the scene.";
  } else if (segment === "Open Challenge") {
    heatChange = 7 + Math.round(((a.ringSkill + b.ringSkill) / 2) / 35);
    riskChange = 4;
    moraleA = 1;
    buzzScore += ((a.ringSkill + b.ringSkill) / 2) * 0.32;
    text = "The open challenge gave fans a competitive hook for next week.";
  } else if (segment === "Heel Betrayal") {
    const heelInvolved = a.alignment === "Heel" || b.alignment === "Heel";
    heatChange = heelInvolved ? 15 : 6;
    riskChange = 11;
    moraleB = -8;
    buzzScore += heelInvolved ? 30 : 8;
    text = heelInvolved ? "The betrayal shocked the arena and made the rivalry feel dangerous." : "The betrayal landed, but fans questioned the motivation.";
  } else if (segment === "Tag-Team Tease") {
    heatChange = 6 + Math.max(0, Math.round(chemistry / 5));
    riskChange = 2;
    moraleA = 2;
    moraleB = 2;
    buzzScore += 12 + chemistry;
    text = "A tag-team tease sparked fantasy booking all over the fanbase.";
  } else if (segment === "Championship Celebration") {
    const belt = getActiveTitle();
    heatChange = belt ? 12 : 4;
    riskChange = belt ? 3 : 6;
    moraleA = 3;
    buzzScore += belt ? 26 : 6;
    text = belt ? "The championship celebration made the belt feel important." : "The celebration looked flashy, but fans wanted higher stakes.";
  } else if (segment === "Social Media Callout") {
    heatChange = avgPromo >= 70 ? 8 : 2;
    riskChange = 5;
    buzzScore += avgPromo * 0.5 + 14;
    text = "The social media callout gave the feud life outside the arena.";
  } else {
    heatChange = 9;
    riskChange = 8;
    buzzScore += 20 + Math.random() * 28;
    text = "A mystery interruption threw the broadcast into dramatic confusion.";
  }

  const special = rollSpecialMoment(segment, buzzScore);
  heatChange += special.heat;
  riskChange += special.risk;
  moraleA += special.morale;
  moraleB += special.morale;
  buzzScore += special.buzz;
  text = `${text} ${special.text}`;

  activeFeud.heat = clamp(activeFeud.heat + heatChange, 0, 135);
  activeFeud.risk = clamp(activeFeud.risk + riskChange, 0, 135);
  a.morale = clamp(a.morale + moraleA);
  b.morale = clamp(b.morale + moraleB);
  if (buzzScore >= 92) {
    a.popularity = clamp(a.popularity + 1);
    b.popularity = clamp(b.popularity + 1);
  }

  return {
    name: segment,
    text,
    heatChange,
    riskChange,
    moraleA,
    moraleB,
    chemistry,
    buzzScore: clamp(Math.round(buzzScore), 0, 130),
    buzzLevel: buzzLevel(buzzScore),
    special
  };
}

function getChemistry(nameA, nameB) {
  const key = [nameA, nameB].sort().join("|");
  return chemistryMap[key] || 0;
}

function buzzLevel(score) {
  if (score >= 105) return "Viral";
  if (score >= 82) return "Trending";
  if (score >= 55) return "Mixed Reactions";
  return "Fans Rejecting Segment";
}

function rollSpecialMoment(segment, buzzScore) {
  const roll = Math.random();
  if (roll < 0.08 && buzzScore > 80) return { label: "Legendary Promo", heat: 10, risk: -2, morale: 4, buzz: 18, text: "A legendary promo moment instantly became replay material." };
  if (roll < 0.15) return { label: "Accidental Botch", heat: -5, risk: 10, morale: -4, buzz: 8, text: "An accidental botch made fans nervous and management tense." };
  if (roll < 0.23) return { label: "Viral Segment", heat: 7, risk: 2, morale: 2, buzz: 22, text: "The clip went viral before the show ended." };
  if (roll < 0.29) return { label: "Crowd Hijack", heat: -3, risk: 8, morale: -2, buzz: 12, text: "The crowd hijacked the segment and forced commentary to improvise." };
  if (roll < 0.36) return { label: "Breakout Performance", heat: 8, risk: 0, morale: 5, buzz: 15, text: "One performer broke out and felt bigger than before." };
  return { label: "Solid Segment", heat: 0, risk: 0, morale: 0, buzz: 0, text: "" };
}

function generateRivalRatings() {
  const headlines = rivalPromotions.map(rival => {
    const styleBoost = rival.id === "tcw" ? Math.random() * 0.7 : rival.id === "gpe" ? Math.random() * 0.6 : Math.random() * 0.8;
    const base = 0.8 + rival.popularity * 0.022 + rival.rosterStrength * 0.014 + rival.reputation * 0.006;
    rival.weeklyRating = Math.max(0.5, Math.min(5, base + styleBoost - Math.random() * 0.7));
    const popDelta = rival.weeklyRating >= 4 ? 3 : rival.weeklyRating < 2.4 ? -2 : 1;
    rival.popularity = clamp(rival.popularity + popDelta);
    rival.money += Math.round(rival.weeklyRating * 6500 - rival.rosterStrength * 85);
    rival.reputation = clamp(rival.reputation + (rival.weeklyRating >= 4.2 ? 2 : rival.weeklyRating < 2.2 ? -2 : 0));
    if (rival.id === "tcw") return `${rival.shortName} delivered a brutal ${rival.weeklyRating.toFixed(1)}-star hardcore main event.`;
    if (rival.id === "gpe") return `${rival.name} ran a flashy ${rival.weeklyRating.toFixed(1)}-star entertainment showcase.`;
    return `${rival.shortName} created risky underground chaos for a ${rival.weeklyRating.toFixed(1)}-star rating.`;
  });
  const hottest = rivalPromotions.reduce((top, rival) => rival.weeklyRating > top.weeklyRating ? rival : top, rivalPromotions[0]);
  addNews(`${hottest.shortName} is the hottest rival promotion this week.`);
  return { headlines, hottest: hottest.name };
}

function checkPoachingInterest() {
  const leaving = roster
    .map((wrestler, index) => ({ wrestler, index }))
    .find(item => item.wrestler.active !== false && item.wrestler.ignoredDemandWeeks >= 3 && item.wrestler.contractLength <= 1 && (item.wrestler.morale < 34 || item.wrestler.loyalty < 34));
  if (leaving) {
    const rival = chooseInterestedRival(leaving.wrestler);
    leaving.wrestler.active = false;
    rival.rosterStrength = clamp(rival.rosterStrength + 8);
    rival.popularity = clamp(rival.popularity + 5);
    selected = selected.filter(index => index !== leaving.index);
    championships.forEach(belt => {
      if (belt.champion === leaving.index) {
        belt.history.push(`${leaving.wrestler.name} left RDGP for ${rival.shortName}. ${belt.name} was vacated.`);
        belt.champion = firstEligibleChampion(belt);
        belt.prestige = clamp(belt.prestige - 14);
        trimTitleHistory(belt);
      }
    });
    addNews(`${leaving.wrestler.name} walked out and signed with ${rival.shortName} after ignored contract demands.`);
    adjustBookerStats({ reputation: -5, jobSecurity: -10, fanTrust: -4, lockerRoomRespect: -8 }, `${leaving.wrestler.name} leaving RDGP shook the board room.`);
    return null;
  }
  const candidates = roster
    .map((wrestler, index) => ({ wrestler, index }))
    .filter(item => item.wrestler.active !== false && (item.wrestler.morale < 42 || item.wrestler.loyalty < 38 || item.wrestler.contractLength <= 1));
  if (!candidates.length || Math.random() > 0.55) return null;
  candidates.sort((a, b) => (a.wrestler.morale + a.wrestler.loyalty) - (b.wrestler.morale + b.wrestler.loyalty));
  const target = candidates[0];
  const rival = chooseInterestedRival(target.wrestler);
  addNews(`${target.wrestler.name} is considering leaving for ${rival.shortName}.`);
  return {
    wrestlerIndex: target.index,
    rivalId: rival.id,
    wrestlerName: target.wrestler.name,
    rivalName: rival.name,
    rivalShort: rival.shortName
  };
}

function chooseInterestedRival(wrestler) {
  if (wrestler.stamina >= 86 || wrestler.ringSkill >= 84) return rivalPromotions[0];
  if (wrestler.charisma >= 84) return rivalPromotions[1];
  return rivalPromotions[2];
}

function calculateCrowdReaction(angle, segment = "", segmentResult = null) {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  let score = activeFeud.heat + ((a.popularity + b.popularity) / 2) * 0.35;
  if (a.alignment !== b.alignment) score += 12;
  if (a.alignment === b.alignment && activeFeud.feudType !== "Respect Rivalry" && activeFeud.feudType !== "Betrayal") score -= 10;
  if (angle === "Heated Promo") score += ((a.charisma + b.charisma) / 2 - 60) * 0.35;
  if (angle === "Cheating Finish" && (a.alignment === "Heel" || b.alignment === "Heel")) score += 8;
  if (angle === "Emotional Interview" && (a.alignment === "Face" || b.alignment === "Face")) score += 7;
  if (segmentResult) score += segmentResult.buzzScore * 0.12 + segmentResult.chemistry * 0.4;
  if (segment === "Heel Betrayal" && (a.alignment === "Heel" || b.alignment === "Heel")) score += 6;
  score = clamp(score, 0, 130);
  let level = "Dead Crowd";
  if (score >= 105) level = "Nuclear Heat";
  else if (score >= 88) level = "Huge Pop";
  else if (score >= 68) level = "Good Reaction";
  else if (score >= 45) level = "Mild Interest";
  return { level, score };
}

function audienceLevel(score) {
  if (score >= 85) return "Nuclear";
  if (score >= 70) return "Hot";
  if (score >= 52) return "Solid";
  if (score >= 35) return "Cold";
  return "Angry";
}

function audienceMatchScore(audience, context) {
  const wrestlers = context.wrestlers || [];
  let score = audience.satisfaction * 0.45 + (context.heat || 0) * 0.22 + (context.rating || 3) * 8;
  const text = `${context.angle || ""} ${context.segment || ""} ${context.feudType || ""} ${context.ending || ""} ${context.matchType || ""}`;
  const favoriteCount = wrestlers.filter(wrestler => audience.preferredWrestlers.includes(wrestler.name)).length;
  score += favoriteCount * 8;
  score += wrestlers.reduce((sum, wrestler) => {
    if (audience.id === "hardcore") return sum + (wrestler.aggression || 50) * 0.05;
    if (audience.id === "casual") return sum + (wrestler.nationalPopularity || wrestler.popularity) * 0.06;
    if (audience.id === "family") return sum + (wrestler.alignment === "Face" ? 6 : -3);
    if (audience.id === "social") return sum + (wrestler.onlinePopularity || wrestler.charisma) * 0.07;
    if (audience.id === "technical") return sum + (wrestler.ringSkill || 50) * 0.07;
    return sum;
  }, 0);
  audience.favoriteFeudStyles.forEach(style => {
    if (text.includes(style)) score += 7;
  });
  audience.preferredMatchTypes.forEach(type => {
    if (text.includes(type)) score += 6;
  });
  if (context.titleMatch) score += audience.id === "casual" ? 10 : audience.id === "technical" ? 6 : 4;
  if (context.viral) score += audience.id === "social" ? 14 : 4;
  if (context.betrayal) score += audience.id === "hardcore" || audience.id === "social" ? 10 : audience.id === "family" ? -12 : 2;
  if (context.risk > audience.riskTolerance) score -= Math.round((context.risk - audience.riskTolerance) * (audience.id === "family" ? 0.55 : 0.35));
  if (context.injury) score -= audience.id === "hardcore" ? 3 : audience.id === "family" ? 14 : 8;
  if (context.tooSafe && audience.id === "hardcore") score -= 9;
  if (context.tooComplex && audience.id === "casual") score -= 8;
  if (context.sloppy && audience.id === "technical") score -= 12;
  return clamp(Math.round(score));
}

function applyAudienceReaction(context) {
  const reactions = audiences.map(audience => {
    const before = audience.satisfaction;
    const score = audienceMatchScore(audience, context);
    const change = Math.round((score - 55) / 8);
    audience.satisfaction = clamp(audience.satisfaction + change);
    const growth = Math.round((score - 50) * audience.size * 0.0015);
    audience.size = Math.max(1000, audience.size + growth);
    audience.trend = change;
    const note = `${audience.name}: ${audienceLevel(score)} reaction (${signed(change)} satisfaction, ${growth >= 0 ? "+" : ""}${growth} fans).`;
    audience.history.unshift(note);
    audience.history = audience.history.slice(0, 8);
    return { id: audience.id, name: audience.name, score, level: audienceLevel(score), change, sizeChange: growth, before, after: audience.satisfaction, note };
  });
  const avgSatisfaction = reactions.reduce((sum, reaction) => sum + reaction.after, 0) / Math.max(1, reactions.length);
  const ticketMultiplier = Math.max(0.78, Math.min(1.35, avgSatisfaction / 62));
  const revenueImpact = Math.round((context.baseRevenue || 0) * (ticketMultiplier - 1));
  if (revenueImpact) money += revenueImpact;
  ticketMomentum = Math.max(0.75, Math.min(1.85, ticketMomentum + (avgSatisfaction - 60) / 800));
  const top = reactions.reduce((best, reaction) => reaction.score > best.score ? reaction : best, reactions[0]);
  const bottom = reactions.reduce((worst, reaction) => reaction.score < worst.score ? reaction : worst, reactions[0]);
  const trend = `${context.label || "RDGP show"}: ${top.name} were hottest while ${bottom.name} complained. Ticket impact ${moneyText(revenueImpact)}.`;
  audienceTrends.unshift(trend);
  audienceTrends = audienceTrends.slice(0, 20);
  if (Math.abs(revenueImpact) >= 2500) addNews(trend, "Fan reaction", revenueImpact > 0 ? "major" : "normal");
  return { reactions, avgSatisfaction: Math.round(avgSatisfaction), ticketMultiplier, revenueImpact, top: top.name, complaint: bottom.note };
}

function renderAudienceReactionPanel(report) {
  const panel = document.getElementById("audiencePanel");
  if (!panel || !report) return;
  panel.innerHTML = `
    <div class="static-label">Audience Reaction Split</div>
    <div class="audience-reaction-grid">
      ${report.reactions.map(reaction => `
        <div class="audience-mini ${reaction.level.toLowerCase()}">
          <span>${reaction.name}</span>
          <strong>${reaction.level}</strong>
          <div class="bar"><b style="width:${reaction.score}%"></b></div>
          <small>${signed(reaction.change)} satisfaction | ${reaction.sizeChange >= 0 ? "+" : ""}${reaction.sizeChange} fans</small>
        </div>
      `).join("")}
    </div>
    <p>${report.complaint}</p>
    <small>Ticket sales impact: <strong class="${report.revenueImpact >= 0 ? "positive" : "negative"}">${moneyText(report.revenueImpact)}</strong></small>
  `;
}

function calculateWeeklyRating(angle, segment = "", crowdScore, segmentResult = null) {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  let raw = 0.5
    + ((a.charisma + b.charisma) / 2) * 0.012
    + ((a.popularity + b.popularity) / 2) * 0.01
    + ((a.ringSkill + b.ringSkill) / 2) * 0.008
    + activeFeud.heat * 0.014
    + crowdScore * 0.008
    - activeFeud.risk * 0.008;
  if (angle === "Heated Promo") raw += ((a.charisma + b.charisma) / 2) >= 78 ? 0.25 : -0.15;
  if (angle === "Match Interference") raw += 0.12;
  if (angle === "Cheating Finish") raw += 0.15;
  if (segmentResult) raw += segmentResult.buzzScore * 0.006 + segmentResult.chemistry * 0.015;
  if (segment === "In-Ring Promo") raw += ((a.promoSkill + b.promoSkill) / 2) >= 80 ? 0.25 : 0;
  if (segmentResult?.special?.label === "Accidental Botch") raw -= 0.35;
  if (["Legendary Promo", "Viral Segment", "Breakout Performance"].includes(segmentResult?.special?.label)) raw += 0.25;
  return Math.max(0.5, Math.min(5, raw));
}

function applyGrowthAndDecline(result, segmentResult) {
  const notes = [];
  const involved = [activeFeud.wrestlerA, activeFeud.wrestlerB];
  involved.forEach(index => {
    const wrestler = roster[index];
    if (!wrestler || wrestler.active === false) return;
    const strongWeek = result.rating >= 3.7 || ["Huge Pop", "Nuclear Heat"].includes(result.crowd?.level);
    const poorWeek = result.rating < 2.1 || segmentResult?.special?.label === "Accidental Botch";
    const viral = ["Legendary Promo", "Viral Segment", "Breakout Performance"].includes(segmentResult?.special?.label);
    wrestler.fatigue = clamp(wrestler.fatigue + 5 + Math.round(activeFeud.risk / 28));
    wrestler.injuryRisk = clamp(Math.round(8 + (100 - wrestler.stamina) * 0.2 + wrestler.fatigue * 0.28 + activeFeud.risk * 0.08));
    if (strongWeek) {
      wrestler.momentum = clamp(wrestler.momentum + 7 + (viral ? 5 : 0) + (isChampion(index) ? 3 : 0));
      wrestler.popularity = clamp(wrestler.popularity + (viral ? 2 : 1));
      wrestler.morale = clamp(wrestler.morale + 3);
      wrestler.lossStreak = 0;
      notes.push(`${wrestler.name} gained momentum from a hot week.`);
    }
    if (chosenWeeklyAngle === "Heated Promo" || chosenSegment === "In-Ring Promo") {
      wrestler.charisma = clamp(wrestler.charisma + (strongWeek ? 1 : 0));
      wrestler.promoSkill = clamp(wrestler.promoSkill + (strongWeek ? 1 : 0));
    }
    if (poorWeek) {
      wrestler.momentum = clamp(wrestler.momentum - 6);
      wrestler.morale = clamp(wrestler.morale - 4);
      wrestler.lossStreak += 1;
      if (wrestler.lossStreak >= 2) wrestler.popularity = clamp(wrestler.popularity - 1);
      notes.push(`${wrestler.name} lost steam after rough booking.`);
    }
    if (!wrestler.breakout && wrestler.potential >= 76 && wrestler.momentum >= 78 && (viral || Math.random() < 0.08)) {
      wrestler.breakout = true;
      wrestler.popularity = clamp(wrestler.popularity + 5);
      wrestler.weeklySalary = Math.round(wrestler.weeklySalary * 1.12);
      wrestler.salary = wrestler.weeklySalary;
      legacyData.wrestlersDeveloped += 1;
      addLegacyPoints(index, 18, "breakout star moment");
      notes.push(`${wrestler.name} is becoming a breakout star!`);
      addNews(`${wrestler.name} is becoming a breakout star!`, "Fan reaction", "major");
    }
    const injuryRoll = Math.random() * 100;
    const injuryChance = activeFeud.risk * 0.05 + wrestler.fatigue * 0.07 + wrestler.injuryRisk * 0.04;
    if (injuryRoll < injuryChance) {
      const injury = wrestler.fatigue > 78 || activeFeud.risk > 100 ? "serious injury" : wrestler.fatigue > 60 ? "burnout" : "minor injury";
      const weeks = injury === "serious injury" ? 4 : injury === "burnout" ? 2 : 1;
      wrestler.injuryWeeks = Math.max(wrestler.injuryWeeks, weeks);
      wrestler.momentum = clamp(wrestler.momentum - (injury === "serious injury" ? 14 : 7));
      wrestler.stamina = clamp(wrestler.stamina - (injury === "serious injury" ? 4 : 1));
      wrestler.morale = clamp(wrestler.morale - 5);
      notes.push(`${wrestler.name} suffered ${injury} and may miss ${weeks} week${weeks === 1 ? "" : "s"}.`);
      addNews(`${wrestler.name} suffered ${injury} during a risky program.`, "Injury updates", "major");
    }
    wrestler.careerStage = getCareerStage(wrestler);
  });
  notes.push(...applyRosterAgingAndRecovery(involved));
  return notes.slice(0, 5);
}

function applyWeeklyRankingMovement(result, segmentResult) {
  const moves = [];
  [activeFeud.wrestlerA, activeFeud.wrestlerB].forEach(index => {
    let delta = 0;
    if ((result.rating || 0) >= 4) delta += 7;
    else if ((result.rating || 0) >= 3) delta += 3;
    else if ((result.rating || 0) < 2) delta -= 6;
    if (["Viral Segment", "Breakout Performance", "Legendary Promo"].includes(segmentResult?.special?.label)) delta += 8;
    if (roster[index].breakout) delta += 3;
    if (roster[index].injuryWeeks > 0) delta -= 5;
    if (roster[index].morale < 35) delta -= 3;
    if (delta !== 0) {
      adjustRankingPoints(index, delta, "weekly segment");
      moves.push(`${roster[index].name} ${delta > 0 ? "+" : ""}${delta}`);
    }
  });
  recalculateRankings(true);
  return moves;
}

function applyRosterAgingAndRecovery(exemptIndexes = []) {
  const notes = [];
  roster.forEach((wrestler, index) => {
    if (wrestler.active === false) return;
    if (!exemptIndexes.includes(index)) {
      wrestler.fatigue = clamp(wrestler.fatigue - 4);
      wrestler.momentum = clamp(wrestler.momentum - (wrestler.momentum > 70 ? 1 : 0));
    }
    if (wrestler.injuryWeeks > 0) {
      wrestler.injuryWeeks = Math.max(0, wrestler.injuryWeeks - 1);
      wrestler.fatigue = clamp(wrestler.fatigue - 8);
      wrestler.momentum = clamp(wrestler.momentum - 2);
    }
    if (gameWeek > 1 && gameWeek % 12 === 0) wrestler.age += 1;
    if (wrestler.age >= 39) {
      wrestler.stamina = clamp(wrestler.stamina - (wrestler.careerStage === "Declining" ? 2 : 1));
      if (wrestler.momentum < 35 || wrestler.fatigue > 86) {
        wrestler.ringSkill = clamp(wrestler.ringSkill - 1);
      }
    }
    wrestler.careerStage = getCareerStage(wrestler);
    if (!exemptIndexes.includes(index) && wrestler.age >= 42 && wrestler.momentum < 38 && Math.random() < 0.08) {
      retireWrestler(index, "requested retirement after a long RDGP run");
      notes.push(`${wrestler.name} requested retirement and joined the Hall of Legends.`);
    }
  });
  return notes;
}

function retireWrestler(index, reason) {
  const wrestler = roster[index];
  if (!wrestler || wrestler.active === false) return;
  wrestler.active = false;
  selected = selected.filter(item => item !== index);
  const score = Math.round((wrestler.legacyPoints || 0) + wrestler.popularity * 0.3 + (wrestler.merchSales || 0) / 12000);
  const tier = legacyTier(score);
  const shouldAsk = typeof window !== "undefined" && typeof window.confirm === "function";
  const inducted = shouldAsk
    ? window.confirm(`${wrestler.name} ${reason}.\n\nLegacy tier: ${tier}\nLegacy score: ${score}\n\nInduct this wrestler into the RDGP Hall of Fame?`)
    : score >= 105;
  if (inducted) {
    hallOfLegends.push({
      name: wrestler.name,
      popularity: wrestler.popularity,
      momentum: wrestler.momentum,
      careerStage: wrestler.careerStage,
      legacyPoints: score,
      tier,
      highlights: [
        `${wrestler.titleWins || 0} title wins`,
        `${wrestler.titleDefenses || 0} defenses`,
        `${wrestler.ppvMainEvents || 0} PPV main events`,
        `${moneyText(wrestler.merchSales || 0)} merch sold`
      ],
      note: `${wrestler.name} ${reason}. Inducted as a ${tier}.`
    });
  }
  championships.forEach(belt => {
    if (belt.champion === index) {
      belt.history.push(`${wrestler.name} retired and vacated ${belt.name}.`);
      belt.champion = firstEligibleChampion(belt);
      trimTitleHistory(belt);
    }
  });
  addNews(`${wrestler.name} ${reason}.${inducted ? " RDGP Hall of Fame induction approved." : " Hall of Fame induction was declined."}`, "RDGP company news", "major");
}

function applyWeeklyAngle(angle) {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  let heatChange = 0;
  let riskChange = 0;
  let moraleA = 0;
  let moraleB = 0;
  let text = "";
  const faceInvolved = a.alignment === "Face" || b.alignment === "Face";
  const heelInvolved = a.alignment === "Heel" || b.alignment === "Heel";
  const avgCharisma = (a.charisma + b.charisma) / 2;

  if (angle === "Heated Promo") {
    heatChange = avgCharisma >= 75 ? 10 : -5;
    riskChange = 2;
    text = `${a.name} and ${b.name} traded fire on the microphone until the arena shook.`;
  } else if (angle === "Surprise Attack") {
    heatChange = 12;
    riskChange = 8;
    moraleB = -5;
    text = `${a.name} blindsided ${b.name} backstage, sending security into panic mode.`;
  } else if (angle === "Cheating Finish") {
    heatChange = heelInvolved ? 15 : 5;
    riskChange = 12;
    moraleB = -8;
    text = `A crooked finish had the crowd screaming, but the locker room was not thrilled.`;
  } else if (angle === "Emotional Interview") {
    heatChange = faceInvolved ? 10 : 3;
    riskChange = 1;
    moraleA = 3;
    moraleB = 3;
    text = `An emotional interview made the feud feel personal and real.`;
  } else {
    heatChange = 9;
    riskChange = 6;
    moraleA = heelInvolved ? 1 : -1;
    moraleB = -3;
    text = `${a.name} stormed the segment during ${b.name}'s moment, turning the broadcast into pure chaos.`;
  }

  activeFeud.heat = clamp(activeFeud.heat + heatChange, 0, 120);
  activeFeud.risk = clamp(activeFeud.risk + riskChange, 0, 120);
  a.morale = clamp(a.morale + moraleA);
  b.morale = clamp(b.morale + moraleB);

  return { text, heatChange, riskChange, moraleA, moraleB };
}

function updateDecisionRecords(angle, moneyResult) {
  if (!activeFeud.bestDecision || moneyResult > activeFeud.bestDecision.money) {
    activeFeud.bestDecision = { angle, money: moneyResult };
  }
  if (!activeFeud.worstDecision || moneyResult < activeFeud.worstDecision.money) {
    activeFeud.worstDecision = { angle, money: moneyResult };
  }
}

function pickCommentary(moneyResult, heatChange, risk, rating = 0, crowdLevel = "") {
  const good = [commentary[0], commentary[5], commentary[6], commentary[7], commentary[3]];
  const bad = [commentary[2], commentary[8], commentary[9], commentary[10], commentary[4]];
  if (crowdLevel === "Nuclear Heat" || rating >= 4.5) return good[Math.floor(Math.random() * good.length)];
  if (rating >= 3.6 || moneyResult > 15000) return good[Math.floor(Math.random() * good.length)];
  if (risk > 75) return commentary[1];
  if (heatChange < 0 || rating < 2.1 || moneyResult < 0) return bad[Math.floor(Math.random() * bad.length)];
  return "Management is watching closely, but the audience is still with it.";
}

function showResults(finalPayoff) {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  const reactionPercent = clamp(lastResult.crowd?.score || 0, 0, 120) / 120 * 100;
  const heatPercent = clamp(activeFeud.heat, 0, 130) / 130 * 100;
  const riskPercent = clamp(activeFeud.risk, 0, 130) / 130 * 100;
  document.getElementById("resultTitle").textContent = finalPayoff ? "Final Payoff" : `Week ${activeFeud.currentWeek} Complete`;
  document.getElementById("showNameText").textContent = lastResult.showName || "Slam Night";
  document.getElementById("mainEventText").textContent = `${a.name} vs ${b.name}`;
  document.getElementById("kayfabeText").textContent = lastResult.text;
  document.getElementById("crowdReactionText").textContent = lastResult.crowd?.level || "Good Reaction";
  document.getElementById("crowdBar").style.width = `${reactionPercent}%`;
  document.getElementById("resultHeatBar").style.width = `${heatPercent}%`;
  document.getElementById("resultRiskBar").style.width = `${riskPercent}%`;
  document.getElementById("resultHeatText").textContent = Math.round(activeFeud.heat);
  document.getElementById("resultRiskText").textContent = Math.round(activeFeud.risk);
  document.getElementById("ratingText").textContent = `${(lastResult.rating || 0).toFixed(1)} Stars`;
  renderStarReveal(lastResult.rating || 0);
  document.getElementById("resultStats").innerHTML = `
    <div class="result-line"><span>Heat Change</span><strong class="${lastResult.heatChange >= 0 ? "positive" : "negative"}">${lastResult.heatChange >= 0 ? "+" : ""}${lastResult.heatChange}</strong></div>
    <div class="result-line"><span>Risk Change</span><strong class="${lastResult.riskChange >= 0 ? "negative" : "positive"}">${lastResult.riskChange >= 0 ? "+" : ""}${lastResult.riskChange}</strong></div>
    <div class="result-line"><span>${a.name} Morale</span><strong>${Math.round(a.morale)}</strong></div>
    <div class="result-line"><span>${b.name} Morale</span><strong>${Math.round(b.morale)}</strong></div>
    <div class="result-line"><span>Gross Revenue</span><strong class="positive">${moneyText(lastResult.business?.grossRevenue || 0)}</strong></div>
    <div class="result-line"><span>Merch Revenue</span><strong class="positive">${moneyText(lastResult.business?.merchRevenue || 0)}</strong></div>
    <div class="result-line"><span>Sponsor Payout</span><strong class="${lastResult.business?.sponsorPayout ? "positive" : "negative"}">${moneyText(lastResult.business?.sponsorPayout || 0)}</strong></div>
    <div class="result-line"><span>Audience Ticket Impact</span><strong class="${(lastResult.business?.audienceRevenue || 0) >= 0 ? "positive" : "negative"}">${moneyText(lastResult.business?.audienceRevenue || 0)}</strong></div>
    <div class="result-line"><span>Payroll Cost</span><strong class="negative">-${moneyText(lastResult.business?.payrollCost || 0)}</strong></div>
    <div class="result-line"><span>Event Cost / Risk</span><strong class="negative">-${moneyText((lastResult.business?.eventCost || 0) + (lastResult.business?.riskPenalty || 0) + (lastResult.business?.moralePenalty || 0))}</strong></div>
    ${lastResult.business?.sponsorBonus ? `<div class="result-line"><span>Reputation Sponsor Bonus</span><strong class="positive">${moneyText(lastResult.business.sponsorBonus)}</strong></div>` : ""}
    <div class="result-line"><span>Net Profit/Loss</span><strong class="${lastResult.money >= 0 ? "positive" : "negative"}">${moneyText(lastResult.money)}</strong></div>
    <div class="result-line"><span>Booker Commission</span><strong class="positive">${moneyText(lastResult.booker?.commission || 0)}</strong></div>
    <div class="result-line"><span>Job Security</span><strong>${Math.round(lastResult.booker?.jobSecurity || bookerProfile.jobSecurity)}</strong></div>
    <div class="result-line"><span>Company Money</span><strong>${moneyText(money)}</strong></div>
  `;
  document.getElementById("segmentPanel").innerHTML = lastResult.segment ? `
    <div class="static-label">Promo & Segment</div>
    <strong>${lastResult.segment.name}</strong>
    <p>${lastResult.segment.text}</p>
    <div class="segment-metrics">
      <span>Buzz <strong>${lastResult.segment.buzzLevel}</strong></span>
      <span>Chemistry <strong>${signed(lastResult.segment.chemistry)}</strong></span>
      <span>Moment <strong>${lastResult.segment.special.label}</strong></span>
    </div>
  ` : "";
  document.getElementById("eventPanel").innerHTML = lastResult.event ? `
    <strong>Backstage Event: ${lastResult.event.title}</strong>
    <p>${lastResult.event.text}</p>
    <small>Heat ${signed(lastResult.event.heat)} | Risk ${signed(lastResult.event.risk)} | Money ${moneyText(lastResult.event.money)}</small>
    ${lastResult.merchEvent ? `<p class="positive">Merch/Sponsor Event: ${lastResult.merchEvent}</p>` : ""}
    ${lastResult.sponsorReport ? `<p>Sponsor: ${lastResult.sponsorReport.warning} Satisfaction ${signed(lastResult.sponsorReport.satisfactionChange || 0)}</p>` : ""}
    ${lastResult.growthEvents?.length ? `<div class="growth-results"><strong>Career Movement</strong><ul>${lastResult.growthEvents.map(note => `<li>${note}</li>`).join("")}</ul></div>` : ""}
  ` : "";
  document.getElementById("rankingPanel").innerHTML = lastResult.rankingMoves?.length ? `
    <div class="static-label">Ranking Movement</div>
    <p>${lastResult.rankingMoves.join(" | ")}</p>
    <small>${a.name}: ${rankingLine(activeFeud.wrestlerA)}<br>${b.name}: ${rankingLine(activeFeud.wrestlerB)}</small>
  ` : "";
  renderChaosPanel(lastResult.chaosEvent);
  renderRivalPanel(lastResult.rivalReport);
  renderAudienceReactionPanel(lastResult.audienceReport);
  renderWorldEventsPanel(lastResult.worldEvents || []);
  renderPoachPanel(lastResult.poach);
  document.getElementById("commentaryText").textContent = lastResult.commentary;
  show("results");
  setResultsMusicDuck(true);
  const broadcastPanel = document.getElementById("broadcastPanel");
  broadcastPanel.classList.remove("shake", "huge-reaction", "dead-reaction");
  void broadcastPanel.offsetWidth;
  broadcastPanel.classList.toggle("shake", ["Huge Pop", "Nuclear Heat"].includes(lastResult.crowd?.level));
  broadcastPanel.classList.toggle("huge-reaction", ["Huge Pop", "Nuclear Heat"].includes(lastResult.crowd?.level));
  broadcastPanel.classList.toggle("dead-reaction", lastResult.crowd?.level === "Dead Crowd");
  if (["Huge Pop", "Nuclear Heat"].includes(lastResult.crowd?.level)) playCrowdPop();
}

function signed(value) {
  return `${value >= 0 ? "+" : ""}${value}`;
}

function renderStarReveal(rating) {
  const stars = document.getElementById("starReveal");
  const fullStars = Math.max(1, Math.round(rating));
  stars.innerHTML = "";
  for (let i = 1; i <= 5; i += 1) {
    const star = document.createElement("span");
    star.textContent = i <= fullStars ? "*" : "-";
    star.style.animationDelay = `${i * 130}ms`;
    stars.appendChild(star);
    setTimeout(() => playClick(), i * 130);
  }
}

function renderRivalPanel(report) {
  const panel = document.getElementById("rivalPanel");
  if (!panel || !report) {
    if (panel) panel.innerHTML = "";
    return;
  }
  panel.innerHTML = `
    <div class="static-label">Ratings War</div>
    <strong>Hottest Promotion: ${report.hottest}</strong>
    <ul>${report.headlines.map(line => `<li>${line}</li>`).join("")}</ul>
  `;
}

function renderPoachPanel(poach) {
  const panel = document.getElementById("poachPanel");
  if (!panel) return;
  if (!poach) {
    panel.innerHTML = "";
    panel.classList.remove("warning");
    return;
  }
  panel.classList.add("warning");
  panel.innerHTML = `
    <div class="static-label breaking">Talent Watch</div>
    <strong>${poach.wrestlerName} is considering leaving for ${poach.rivalShort}.</strong>
    <p>Choose how the front office responds before moving on.</p>
    <div class="poach-actions">
      <button type="button" data-poach-action="raise">Offer Raise</button>
      <button type="button" data-poach-action="title">Promise Title Opportunity</button>
      <button type="button" data-poach-action="ignore">Ignore</button>
    </div>
  `;
  panel.querySelectorAll("[data-poach-action]").forEach(button => {
    button.addEventListener("click", () => resolvePoachChoice(button.dataset.poachAction));
  });
}

function resolvePoachChoice(action) {
  if (!pendingPoach) return;
  const wrestler = roster[pendingPoach.wrestlerIndex];
  const rival = rivalPromotions.find(item => item.id === pendingPoach.rivalId);
  if (!wrestler || wrestler.active === false) return;
  if (action === "raise") {
    const cost = Math.round(wrestler.salary * 2.5);
    money -= cost;
    wrestler.salary = Math.round(wrestler.salary * 1.18);
    wrestler.loyalty = clamp(wrestler.loyalty + 18);
    wrestler.morale = clamp(wrestler.morale + 10);
    wrestler.contractLength += 4;
    addNews(`${wrestler.name} accepted an RDGP raise and stayed loyal.`);
  } else if (action === "title") {
    wrestler.loyalty = clamp(wrestler.loyalty + 12);
    wrestler.morale = clamp(wrestler.morale + 16);
    wrestler.contractLength += 2;
    addNews(`${wrestler.name} stayed after being promised a title opportunity.`);
  } else {
    const leaveChance = wrestler.morale < 30 || wrestler.loyalty < 28 || wrestler.contractLength <= 0 ? 0.72 : 0.38;
    if (Math.random() < leaveChance) {
      wrestler.active = false;
      if (rival) {
        rival.rosterStrength = clamp(rival.rosterStrength + 7);
        rival.popularity = clamp(rival.popularity + 4);
      }
      championships.forEach(belt => {
        if (belt.champion === pendingPoach.wrestlerIndex) {
          belt.history.push(`${wrestler.name} left RDGP while holding ${belt.name}. The title was vacated.`);
          belt.champion = firstEligibleChampion(belt);
          belt.prestige = clamp(belt.prestige - 12);
          trimTitleHistory(belt);
        }
      });
      selected = selected.filter(index => index !== pendingPoach.wrestlerIndex);
      addNews(`${wrestler.name} left RDGP and signed with ${pendingPoach.rivalShort}.`);
      adjustBookerStats({ reputation: -5, jobSecurity: -10, fanTrust: -4, lockerRoomRespect: -8 }, `${wrestler.name} leaving RDGP damaged your job security.`);
    } else {
      wrestler.loyalty = clamp(wrestler.loyalty - 5);
      addNews(`${wrestler.name} stayed for now, but morale remains shaky.`);
    }
  }
  pendingPoach = null;
  renderPoachPanel(null);
  renderRoster();
  updateMoney();
  if (money <= 0 || bookerProfile.jobSecurity <= 0) {
    fireBooker(money <= 0 ? "Company money reached $0 while responding to rival poaching." : "A roster walkout destroyed your job security.");
    return;
  }
  saveGame(currentScreen);
}

function firstEligibleChampion(belt) {
  const index = roster.findIndex(wrestler => wrestler.active !== false && (belt.division === "Open" || wrestler.gender === belt.division));
  return index >= 0 ? index : 0;
}

function continueAfterResults() {
  if (pendingWorldEvent) {
    showSaveMessage("Respond to the breaking world event first.");
    return;
  }
  if (pendingPoach) {
    showSaveMessage("Resolve the talent watch decision first.");
    return;
  }
  if (pendingBoardReview) {
    renderBoardReview();
    show("boardReview");
    saveGame("boardReview");
    return;
  }
  advanceAfterResults();
}

function advanceAfterResults() {
  activeFeud.currentWeek += 1;
  if (activeFeud.currentWeek > activeFeud.feudLength) {
    runFinalPayoff();
  } else if (weeksUntilPpv <= 0) {
    preparePpvBooking();
  } else {
    showBooking();
    saveGame("booking");
  }
}

function finishBoardReview() {
  pendingBoardReview = null;
  if (!activeFeud) {
    renderRoster();
    show("roster");
    saveGame("roster");
    return;
  }
  advanceAfterResults();
}

function runFinalPayoff() {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  let heatBonus = 0;
  let riskBonus = 0;
  let moraleA = 0;
  let moraleB = 0;
  let endingText = "";

  if (activeFeud.ending === "Clean Win") {
    heatBonus = a.alignment === "Face" || b.alignment === "Face" ? 8 : 2;
    riskBonus = -5;
    moraleA = 4;
    moraleB = 4;
    endingText = "The feud ended with a decisive clean win and a respectful roar from the crowd.";
  } else if (activeFeud.ending === "Dirty Win") {
    heatBonus = 12;
    riskBonus = 10;
    moraleB = -8;
    endingText = "A dirty win sent fans into a frenzy and officials into damage control.";
  } else if (activeFeud.ending === "Double Turn") {
    heatBonus = 18;
    riskBonus = 18;
    [a.alignment, b.alignment] = [b.alignment, a.alignment];
    endingText = "The crowd watched both wrestlers flip sides in a risky double turn.";
  } else if (activeFeud.ending === "Shocking Betrayal") {
    heatBonus = activeFeud.feudType === "Betrayal" || activeFeud.feudType === "Respect Rivalry" ? 22 : 10;
    riskBonus = 14;
    moraleB = -12;
    endingText = "A shocking betrayal closed the show and lit up every wrestling feed.";
  } else {
    heatBonus = 26;
    riskBonus = 28;
    moraleA = -15;
    moraleB = -15;
    money -= 10000;
    endingText = "The injury angle created huge short-term buzz, but sponsors hated the risk.";
  }

  activeFeud.heat = clamp(activeFeud.heat + heatBonus, 0, 130);
  activeFeud.risk = clamp(activeFeud.risk + riskBonus, 0, 130);
  a.morale = clamp(a.morale + moraleA);
  b.morale = clamp(b.morale + moraleB);

  const finalRatingRaw = (activeFeud.heat * .035) + ((a.ringSkill + b.ringSkill) / 2 * .015) + ((a.popularity + b.popularity) / 2 * .01) - (activeFeud.risk * .012);
  const finalRating = Math.max(1, Math.min(5, finalRatingRaw));
  const payoffGrowth = applyFinalPayoffGrowth(finalRating);
  const belt = getActiveTitle();
  const finalRevenue = Math.round((finalRating * 22000 + activeFeud.heat * 450 - activeFeud.risk * 280) * (belt ? titleRevenueMultiplier(belt) : 1));
  money += finalRevenue;
  activeFeud.totalRevenue += finalRevenue;
  recordBookerCommission(finalRevenue, `${a.name} vs ${b.name} payoff`);
  adjustBookerStats({
    reputation: finalRating >= 4 ? 4 : finalRating < 2 ? -4 : 1,
    jobSecurity: finalRating >= 4 ? 5 : finalRating < 2 ? -7 : 1,
    boardConfidence: finalRevenue >= 50000 ? 4 : finalRevenue < 10000 ? -5 : 1,
    fanTrust: finalRating >= 4 ? 5 : finalRating < 2 ? -5 : 1,
    lockerRoomRespect: activeFeud.risk > 105 ? -4 : 2
  });
  if (money <= 0 || bookerProfile.jobSecurity <= 0) {
    fireBooker(money <= 0 ? "Company money reached $0 during the feud payoff." : "The board lost all confidence after the feud payoff.");
    return;
  }

  const grade = finalRating >= 4.5 ? "A" : finalRating >= 3.6 ? "B" : finalRating >= 2.7 ? "C" : finalRating >= 1.8 ? "D" : "F";
  const titleResult = belt ? resolveTitlePayoff(belt, finalRating) : null;
  const feudWinner = titleResult?.winnerIndex ?? chooseFeudWinner(finalRating);
  const feudLoser = feudWinner === activeFeud.wrestlerA ? activeFeud.wrestlerB : activeFeud.wrestlerA;
  recordMatchResult(feudWinner, feudLoser, finalRating, belt ? "title feud payoff" : "feud payoff");
  updateFeudHistory(finalRating);
  updatePpvHype(finalRating);
  [activeFeud.wrestlerA, activeFeud.wrestlerB].forEach(index => {
    addLegacyPoints(index, Math.round(finalRating * 8 + activeFeud.heat / 12 + activeFeud.totalRevenue / 18000), "feud payoff");
    if (finalRating >= 4) roster[index].highRatedFeuds += 1;
    if (finalRating >= 4.5) roster[index].legendaryRivalries += 1;
  });
  trackLegacyRecord("greatestFeuds", {
    title: `${a.name} vs ${b.name}`,
    label: belt ? "Title Feud" : activeFeud.feudType,
    score: Math.round(finalRating * 30 + activeFeud.heat * 0.4 + activeFeud.totalRevenue / 2500 + (belt ? 15 : 0) + chaosMeter * 0.1),
    note: `${finalRating.toFixed(1)} stars, ${moneyText(activeFeud.totalRevenue)} revenue, heat ${Math.round(activeFeud.heat)}.`
  });
  document.getElementById("finalTitle").textContent = `${a.name} vs ${b.name}`;
  document.getElementById("finalReport").innerHTML = `
    <div class="report-line"><span>Ending</span><strong>${activeFeud.ending}</strong></div>
    <p class="kayfabe">${endingText}</p>
    ${titleResult ? `<div class="report-line title-result"><span>${belt.name}</span><strong>${titleResult.text}</strong></div>` : ""}
    <button class="finisher-result-btn" type="button" data-finisher-index="${feudWinner}">View ${roster[feudWinner].finisher}</button>
    <div class="report-line"><span>Final Rating</span><strong>${finalRating.toFixed(1)} / 5 stars</strong></div>
    <div class="report-line"><span>Payoff Winner</span><strong>${roster[feudWinner].name}</strong></div>
    <div class="report-line"><span>Total Revenue</span><strong>${moneyText(activeFeud.totalRevenue)}</strong></div>
    ${payoffGrowth.length ? `<div class="report-line"><span>Career Movement</span><strong>${payoffGrowth.join(" ")}</strong></div>` : ""}
    <div class="report-line"><span>Final Company Money</span><strong>${moneyText(money)}</strong></div>
    <div class="report-line"><span>Best Decision</span><strong>${activeFeud.bestDecision?.angle || "None"} (${moneyText(activeFeud.bestDecision?.money || 0)})</strong></div>
    <div class="report-line"><span>Worst Decision</span><strong>${activeFeud.worstDecision?.angle || "None"} (${moneyText(activeFeud.worstDecision?.money || 0)})</strong></div>
    <div class="report-line"><span>Monthly PPV Hype</span><strong>${Math.round(ppvHype.audienceMomentum)}</strong></div>
    <div class="report-line"><span>Best Rivalry</span><strong>${ppvHype.bestRivalry}</strong></div>
    <div class="report-line"><span>Booker Commission</span><strong>${moneyText(bookerProfile.weeklyCommission)}</strong></div>
    <div class="report-line"><span>Job Security</span><strong>${Math.round(bookerProfile.jobSecurity)}</strong></div>
    <div class="report-line"><span>Booker Grade</span><strong>${grade}</strong></div>
  `;
  bindFinisherButtons(document.getElementById("finalReport"));
  show("final");
  saveGame("final");
  playCrowdPop();
}

function applyFinalPayoffGrowth(finalRating) {
  const notes = [];
  [activeFeud.wrestlerA, activeFeud.wrestlerB].forEach(index => {
    const wrestler = roster[index];
    if (!wrestler || wrestler.active === false) return;
    if (finalRating >= 4) {
      wrestler.momentum = clamp(wrestler.momentum + 10);
      wrestler.popularity = clamp(wrestler.popularity + 2);
      wrestler.ringSkill = clamp(wrestler.ringSkill + (wrestler.potential > 78 ? 1 : 0));
      wrestler.loyalty = clamp(wrestler.loyalty + 3);
      notes.push(`${wrestler.name} leveled up from a great payoff.`);
    } else if (finalRating < 2.2) {
      wrestler.momentum = clamp(wrestler.momentum - 8);
      wrestler.morale = clamp(wrestler.morale - 5);
      wrestler.lossStreak += 1;
      notes.push(`${wrestler.name} cooled off after a weak payoff.`);
    }
    if (isChampion(index)) {
      wrestler.momentum = clamp(wrestler.momentum + 5);
      wrestler.weeklySalary = Math.round(wrestler.weeklySalary * 1.04);
      wrestler.salary = wrestler.weeklySalary;
    }
    wrestler.careerStage = getCareerStage(wrestler);
  });
  return notes;
}

function updateFeudHistory(finalRating) {
  const key = getPairKey(activeFeud.wrestlerA, activeFeud.wrestlerB);
  const record = feudHistory[key] || { wins: 0, betrayals: 0, previousFeuds: 0, crowdHistory: 0 };
  record.previousFeuds += 1;
  record.crowdHistory = Math.max(record.crowdHistory, Math.round(activeFeud.heat));
  if (["Clean Win", "Dirty Win"].includes(activeFeud.ending)) record.wins += 1;
  if (["Shocking Betrayal", "Double Turn"].includes(activeFeud.ending) || activeFeud.feudType === "Betrayal") record.betrayals += 1;
  feudHistory[key] = record;
  completedFeuds.push({
    names: `${roster[activeFeud.wrestlerA].name} vs ${roster[activeFeud.wrestlerB].name}`,
    heat: Math.round(activeFeud.heat),
    rating: Number(finalRating.toFixed(1)),
    revenue: activeFeud.totalRevenue
  });
}

function resolveTitlePayoff(belt, finalRating) {
  const aIndex = activeFeud.wrestlerA;
  const bIndex = activeFeud.wrestlerB;
  const oldChampion = belt.champion;
  const winner = chooseTitleWinner(belt, finalRating);
  const loser = winner === aIndex ? bIndex : aIndex;
  const winnerName = roster[winner].name;
  const oldChampionName = roster[oldChampion]?.name || "Vacant";
  const qualityDelta = finalRating >= 4.1 ? 8 : finalRating >= 3.0 ? 3 : -8;
  belt.prestige = clamp(belt.prestige + qualityDelta, 0, 100);

  if (winner === oldChampion) {
    belt.defenses += 1;
    roster[winner].titleDefenses += 1;
    legacyData.titlesDefended += 1;
    addLegacyPoints(winner, 12 + Math.round(finalRating * 2), `${belt.name} defense`);
    trackLegacyRecord("longestTitleReigns", {
      title: `${winnerName} - ${belt.name}`,
      label: "Title Reign",
      score: belt.defenses,
      note: `${belt.defenses} successful defense${belt.defenses === 1 ? "" : "s"}.`
    }, "score");
    roster[winner].morale = clamp(roster[winner].morale + 7);
    roster[winner].merchMomentum = clamp((roster[winner].merchMomentum || 50) + 5);
    belt.history.push(`${winnerName} defended against ${roster[loser].name}. Prestige ${signed(qualityDelta)}.`);
    trimTitleHistory(belt);
    return { text: `${winnerName} retained. ${prestigeLabel(belt.prestige)}.`, winnerIndex: winner, loserIndex: loser };
  }

  belt.champion = winner;
  belt.defenses = 0;
  roster[winner].titleWins += 1;
  playTitleWin();
  addLegacyPoints(winner, 22 + Math.round(finalRating * 3), `${belt.name} title win`);
  if (roster[oldChampion]) addLegacyPoints(oldChampion, 5, `${belt.name} reign ended`);
  roster[winner].morale = clamp(roster[winner].morale + 9);
  roster[winner].popularity = clamp(roster[winner].popularity + 5);
  roster[winner].merchMomentum = clamp((roster[winner].merchMomentum || 50) + 15);
  roster[winner].merchPopularity = clamp((roster[winner].merchPopularity || 50) + 8);
  if (roster[oldChampion]) roster[oldChampion].morale = clamp(roster[oldChampion].morale - 5);
  belt.history.push(`${winnerName} defeated ${oldChampionName} to win the title. Prestige ${signed(qualityDelta)}.`);
  trimTitleHistory(belt);
  return { text: `New champion: ${winnerName}. ${prestigeLabel(belt.prestige)}.`, winnerIndex: winner, loserIndex: loser };
}

function chooseFeudWinner(finalRating) {
  const aIndex = activeFeud.wrestlerA;
  const bIndex = activeFeud.wrestlerB;
  if (activeFeud.ending === "Clean Win") {
    const face = [aIndex, bIndex].find(index => roster[index].alignment === "Face");
    return face ?? higherStarPower(aIndex, bIndex);
  }
  if (activeFeud.ending === "Dirty Win") {
    const heel = [aIndex, bIndex].find(index => roster[index].alignment === "Heel");
    return heel ?? higherStarPower(aIndex, bIndex);
  }
  if (activeFeud.ending === "Shocking Betrayal") return activeFeud.wrestlerA;
  if (activeFeud.ending === "Injury Angle") return higherStamina(aIndex, bIndex);
  if (activeFeud.ending === "Double Turn") return finalRating >= 3.4 ? lowerRankedUpset(aIndex, bIndex) : higherStarPower(aIndex, bIndex);
  return higherStarPower(aIndex, bIndex);
}

function lowerRankedUpset(aIndex, bIndex) {
  return (roster[aIndex].currentRank || 99) > (roster[bIndex].currentRank || 99) ? aIndex : bIndex;
}

function chooseTitleWinner(belt, finalRating) {
  const aIndex = activeFeud.wrestlerA;
  const bIndex = activeFeud.wrestlerB;
  const championInFeud = belt.champion === aIndex || belt.champion === bIndex;
  const champion = championInFeud ? belt.champion : null;
  const challenger = champion === aIndex ? bIndex : aIndex;
  if (activeFeud.ending === "Clean Win") {
    const face = [aIndex, bIndex].find(index => roster[index].alignment === "Face");
    return face ?? (champion ?? higherStarPower(aIndex, bIndex));
  }
  if (activeFeud.ending === "Dirty Win") {
    const heel = [aIndex, bIndex].find(index => roster[index].alignment === "Heel");
    return heel ?? (champion ?? higherStarPower(aIndex, bIndex));
  }
  if (activeFeud.ending === "Shocking Betrayal") return challenger;
  if (activeFeud.ending === "Injury Angle") return champion ?? higherStamina(aIndex, bIndex);
  if (activeFeud.ending === "Double Turn") return finalRating >= 3.4 ? challenger : (champion ?? higherStarPower(aIndex, bIndex));
  return champion ?? higherStarPower(aIndex, bIndex);
}

function higherStarPower(aIndex, bIndex) {
  const a = roster[aIndex];
  const b = roster[bIndex];
  return a.popularity + a.ringSkill >= b.popularity + b.ringSkill ? aIndex : bIndex;
}

function higherStamina(aIndex, bIndex) {
  return roster[aIndex].stamina >= roster[bIndex].stamina ? aIndex : bIndex;
}

function trimTitleHistory(belt) {
  belt.history = belt.history.slice(-8);
}

function updatePpvHype(finalRating) {
  const totalHeat = completedFeuds.reduce((sum, feud) => sum + feud.heat, 0);
  ppvHype.averageHeat = completedFeuds.length ? totalHeat / completedFeuds.length : 0;
  const best = completedFeuds.reduce((top, feud) => {
    if (!top) return feud;
    return feud.rating + feud.heat / 100 > top.rating + top.heat / 100 ? feud : top;
  }, null);
  ppvHype.bestRivalry = best ? best.names : "None yet";
  ppvHype.audienceMomentum = clamp((ppvHype.averageHeat * 0.7) + (finalRating * 12) + completedFeuds.length * 3, 0, 130);
}

function preparePpvBooking() {
  if (weeksUntilPpv > 0) {
    showSaveMessage(`The next big event opens in ${weeksUntilPpv} week${weeksUntilPpv === 1 ? "" : "s"}.`);
    return;
  }
  currentPpvEvent = currentPpvEvent || getCurrentPpvName();
  ppvCard = buildPpvCard();
  renderPpvBooking();
  show("ppvBooking");
  saveGame("ppvBooking");
}

function buildPpvCard() {
  const matches = [
    createPpvMatch("Opener", null),
    createPpvMatch("Mid-Card Match", null),
    createPpvMatch("Women's Title Match", "womens"),
    createPpvMatch("Hardcore Title Match", "hardcore"),
    createPpvMatch("World Title Main Event", "world")
  ];
  const expectedRevenue = matches.reduce((sum, match) => sum + match.projectedRevenue, 0);
  return {
    eventName: currentPpvEvent,
    week: gameWeek,
    hype: Math.round(ppvHype.audienceMomentum || 0),
    rivalPressure: getRivalPressure(),
    expectedRevenue,
    matches
  };
}

function createPpvMatch(slot, titleId) {
  const belt = titleId ? championships.find(item => item.id === titleId) : null;
  let pair = belt ? chooseTitleMatchPair(belt) : chooseFeatureMatchPair(slot);
  const a = roster[pair[0]];
  const b = roster[pair[1]];
  const activePair = activeFeud && getPairKey(pair[0], pair[1]) === getPairKey(activeFeud.wrestlerA, activeFeud.wrestlerB);
  const historyRecord = feudHistory[getPairKey(pair[0], pair[1])] || {};
  const baseHeat = activePair
    ? activeFeud.heat
    : ((a.popularity + b.popularity + a.charisma + b.charisma) / 4) + (historyRecord.crowdHistory || 0) * 0.18;
  const titleHeat = belt ? titleHeatBonus(belt) + belt.prestige * 0.18 : 0;
  const risk = clamp(activePair ? activeFeud.risk : 14 + Math.abs(a.aggression - b.aggression) * 0.18 + (belt ? 8 : 0), 0, 130);
  const projectedRating = projectPpvRating(pair[0], pair[1], baseHeat + titleHeat, risk, belt);
  const projectedRevenue = Math.round((projectedRating * 14500 + (baseHeat + titleHeat) * 430 + ppvHype.audienceMomentum * 210) * (belt ? titleRevenueMultiplier(belt) : 1) * ticketMomentum);
  return {
    slot,
    wrestlerA: pair[0],
    wrestlerB: pair[1],
    titleId: belt?.id || null,
    heat: Math.round(baseHeat + titleHeat),
    risk: Math.round(risk),
    projectedRating: Number(projectedRating.toFixed(1)),
    projectedRevenue
  };
}

function chooseTitleMatchPair(belt) {
  const champion = Number.isInteger(belt.champion) && roster[belt.champion]?.active !== false ? belt.champion : firstEligibleChampion(belt);
  if (activeFeud) {
    const candidates = [activeFeud.wrestlerA, activeFeud.wrestlerB];
    if (candidates.includes(champion)) {
      const challenger = candidates.find(index => index !== champion && isEligibleForBelt(index, belt));
      if (Number.isInteger(challenger)) return [champion, challenger];
    }
  }
  const challenger = roster
    .map((wrestler, index) => ({ wrestler, index }))
    .filter(item => item.index !== champion && item.wrestler.active !== false && isEligibleForBelt(item.index, belt))
    .sort((x, y) => (y.wrestler.popularity + y.wrestler.ringSkill + y.wrestler.morale) - (x.wrestler.popularity + x.wrestler.ringSkill + x.wrestler.morale))[0]?.index;
  return [champion, challenger ?? champion];
}

function chooseFeatureMatchPair(slot) {
  if (activeFeud && slot === "Mid-Card Match") return [activeFeud.wrestlerA, activeFeud.wrestlerB];
  const activeIndexes = roster.map((wrestler, index) => ({ wrestler, index })).filter(item => item.wrestler.active !== false);
  const sorted = activeIndexes.sort((x, y) => (y.wrestler.popularity + y.wrestler.charisma + y.wrestler.ringSkill) - (x.wrestler.popularity + x.wrestler.charisma + x.wrestler.ringSkill));
  if (slot === "Opener") return [sorted[6]?.index ?? 0, sorted[7]?.index ?? 1];
  return [sorted[2]?.index ?? 0, sorted[3]?.index ?? 1];
}

function isEligibleForBelt(index, belt) {
  return belt.division === "Open" || roster[index].gender === belt.division;
}

function projectPpvRating(aIndex, bIndex, heat, risk, belt) {
  const a = roster[aIndex];
  const b = roster[bIndex];
  const chemistry = getChemistry(a.name, b.name) / 28;
  const titleLift = belt ? belt.prestige / 55 : 0;
  const raw = 0.7 + heat * 0.022 + ((a.ringSkill + b.ringSkill) / 2) * 0.017 + ((a.popularity + b.popularity) / 2) * 0.009 + chemistry + titleLift - risk * 0.01;
  return Math.max(0.5, Math.min(5, raw));
}

function renderPpvBooking() {
  if (!ppvCard) return;
  document.getElementById("ppvBookingTitle").textContent = ppvCard.eventName;
  document.getElementById("ppvBookingSub").textContent = "Gold lights, rival pressure, championship stakes, and one monthly card to prove RDGP belongs on top.";
  document.getElementById("ppvWeekText").textContent = ppvCard.week;
  document.getElementById("ppvBookingHype").textContent = ppvCard.hype;
  document.getElementById("ppvRivalPressure").textContent = ppvCard.rivalPressure;
  document.getElementById("ppvExpectedRevenue").textContent = moneyText(ppvCard.expectedRevenue);
  document.getElementById("ppvCardSlots").innerHTML = ppvCard.matches.map(match => {
    const belt = match.titleId ? championships.find(item => item.id === match.titleId) : null;
    const a = roster[match.wrestlerA];
    const b = roster[match.wrestlerB];
    return `
      <article class="ppv-match-card ${belt ? "title-match" : ""}">
        <span class="match-slot">${match.slot}</span>
        <h3>${a.name} vs ${b.name}</h3>
        <p class="ranking-note">${rankedMatchLabel(match.wrestlerA, match.wrestlerB)}</p>
        ${belt ? `<p class="title-result">${belt.name} on the line</p>` : `<p>Featured rivalry showcase</p>`}
        <div class="ppv-match-meta">
          <span>Heat <strong>${match.heat}</strong></span>
          <span>Risk <strong>${match.risk}</strong></span>
          <span>Projected <strong>${match.projectedRating.toFixed(1)}★</strong></span>
          <span>Revenue <strong>${moneyText(match.projectedRevenue)}</strong></span>
        </div>
      </article>
    `;
  }).join("");
}

function rankedMatchLabel(aIndex, bIndex) {
  recalculateRankings(false);
  const a = roster[aIndex];
  const b = roster[bIndex];
  const topMatch = (a.currentRank || 99) <= 5 && (b.currentRank || 99) <= 5;
  return topMatch
    ? `Ranked contenders: Overall #${a.currentRank} vs #${b.currentRank}`
    : `Ranks: Overall #${a.currentRank || "-"} vs #${b.currentRank || "-"}`;
}

function rankingScore(wrestler) {
  return (wrestler.rankingPoints || 0) + (wrestler.momentum || 0) * 0.35 + (wrestler.popularity || 0) * 0.2 - (wrestler.injuryWeeks || 0) * 12;
}

function recalculateRankings(commitMovement = false) {
  const active = roster.map((wrestler, index) => ({ wrestler, index })).filter(item => item.wrestler.active !== false);
  if (commitMovement) active.forEach(item => item.wrestler.previousRank = item.wrestler.currentRank || 0);
  active
    .slice()
    .sort((a, b) => rankingScore(b.wrestler) - rankingScore(a.wrestler))
    .forEach((item, index) => {
      item.wrestler.currentRank = index + 1;
      item.wrestler.contenderStatus = index === 0 ? "#1 Company Contender" : index < 5 ? "Ranked Contender" : "Developing";
    });
}

function getRankingList(categoryId) {
  const category = rankingCategories.find(item => item.id === categoryId) || rankingCategories[3];
  return roster
    .map((wrestler, index) => ({ wrestler, index }))
    .filter(item => item.wrestler.active !== false && category.eligibility(item.wrestler))
    .sort((a, b) => rankingScore(b.wrestler) - rankingScore(a.wrestler));
}

function movementLabel(wrestler) {
  if ((wrestler.momentum || 0) >= 82) return "On Fire";
  if ((wrestler.lossStreak || 0) >= 2 || (wrestler.momentum || 0) < 35) return "Cold Streak";
  if (!wrestler.previousRank || wrestler.previousRank === wrestler.currentRank) return "Holding Steady";
  return wrestler.currentRank < wrestler.previousRank ? "Rising" : "Falling";
}

function movementText(wrestler) {
  if (!wrestler.previousRank) return "New";
  const diff = wrestler.previousRank - wrestler.currentRank;
  if (diff > 0) return `+${diff}`;
  if (diff < 0) return `${diff}`;
  return "0";
}

function getTitleContenders(belt) {
  const categoryId = belt.id === "world" ? "mens" : belt.id === "womens" ? "womens" : "hardcore";
  return getRankingList(categoryId).filter(item => item.index !== belt.champion);
}

function getWrestlerDivisionRank(index, categoryId) {
  const position = getRankingList(categoryId).findIndex(item => item.index === index);
  return position >= 0 ? position + 1 : null;
}

function rankingLine(index) {
  const wrestler = roster[index];
  const divisions = [];
  if (wrestler.gender === "Male") divisions.push(`Men #${getWrestlerDivisionRank(index, "mens") || "-"}`);
  if (wrestler.gender === "Female") divisions.push(`Women #${getWrestlerDivisionRank(index, "womens") || "-"}`);
  divisions.push(`Hardcore #${getWrestlerDivisionRank(index, "hardcore") || "-"}`);
  divisions.push(`Overall #${wrestler.currentRank || "-"}`);
  return `${divisions.join(" | ")} | ${wrestler.contenderStatus}`;
}

function renderRankings() {
  recalculateRankings(false);
  const world = getTitleContenders(championships.find(belt => belt.id === "world"))[0]?.wrestler;
  const womens = getTitleContenders(championships.find(belt => belt.id === "womens"))[0]?.wrestler;
  const hardcore = getTitleContenders(championships.find(belt => belt.id === "hardcore"))[0]?.wrestler;
  document.getElementById("worldContenderText").textContent = world ? `${world.name} for RDGP World Championship` : "No contender";
  document.getElementById("womensContenderText").textContent = womens ? `${womens.name} for RDGP Women's Championship` : "No contender";
  document.getElementById("hardcoreContenderText").textContent = hardcore ? `${hardcore.name} for RDGP Hardcore Championship` : "No contender";
  document.getElementById("rankingsGrid").innerHTML = rankingCategories.map(category => `
    <section class="ranking-board">
      <h3>${category.title}</h3>
      <div class="ranking-list">
        ${getRankingList(category.id).map((item, rank) => `
          <article class="ranking-card ${rank === 0 ? "top-rank" : ""}">
            <strong class="rank-number">#${rank + 1}</strong>
            <div class="avatar rank-avatar">
              <img src="${item.wrestler.image}" alt="${item.wrestler.name} portrait" onerror="this.remove(); this.parentElement.textContent='${item.wrestler.emoji}';">
            </div>
            <div>
              <h4>${item.wrestler.name}</h4>
              <p>${item.wrestler.winLossRecord.wins}-${item.wrestler.winLossRecord.losses} | ${movementLabel(item.wrestler)} (${movementText(item.wrestler)})</p>
              <div class="ranking-meta">
                <span>Points <strong>${Math.round(item.wrestler.rankingPoints || 0)}</strong></span>
                <span>Momentum <strong>${Math.round(item.wrestler.momentum || 0)}</strong></span>
                <span>${rank < 3 ? "Contender" : item.wrestler.contenderStatus}</span>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function teamMembers(team) {
  return team.members.map(index => roster[index]).filter(Boolean);
}

function teamPower(team) {
  return (team.chemistry || 0) * 0.35 + (team.popularity || 0) * 0.25 + (team.momentum || 0) * 0.3 + (team.loyalty || 0) * 0.1;
}

function recalculateTagRankings() {
  tagTeams
    .filter(team => teamMembers(team).length === 2)
    .sort((a, b) => teamPower(b) - teamPower(a))
    .forEach((team, index) => team.tagRanking = index + 1);
}

function getTagChampionship() {
  return championships.find(belt => belt.id === "tag");
}

function getTagChampions() {
  const belt = getTagChampionship();
  return tagTeams.find(team => team.id === belt?.championTeam) || null;
}

function getTagContenders() {
  recalculateTagRankings();
  const champions = getTagChampions();
  return tagTeams
    .filter(team => team.id !== champions?.id)
    .sort((a, b) => (a.tagRanking || 99) - (b.tagRanking || 99));
}

function fillTagTeamSelects() {
  const options = activeRoster().map((wrestler, index) => `<option value="${roster.indexOf(wrestler)}">${wrestler.name}</option>`).join("");
  document.getElementById("tagPartnerA").innerHTML = options;
  document.getElementById("tagPartnerB").innerHTML = options;
}

function renderTagTeams() {
  fillTagTeamSelects();
  recalculateTagRankings();
  const champions = getTagChampions();
  const contender = getTagContenders()[0];
  const heat = Math.round(tagTeams.reduce((sum, team) => sum + team.popularity + team.chemistry, 0) / Math.max(1, tagTeams.length * 2));
  document.getElementById("tagChampionsText").textContent = champions?.name || "Vacant";
  document.getElementById("tagContenderText").textContent = contender?.name || "No contender";
  document.getElementById("tagDivisionHeatText").textContent = heat;
  document.getElementById("tagTeamsGrid").innerHTML = tagTeams
    .sort((a, b) => (a.tagRanking || 99) - (b.tagRanking || 99))
    .map(team => {
      const members = teamMembers(team);
      return `
        <article class="tag-card ${team.id === champions?.id ? "tag-champs" : ""}">
          <div class="tag-banner">${team.name}</div>
          <div class="duo-portraits">
            ${members.map(member => `<div class="avatar tag-avatar"><img src="${member.image}" alt="${member.name}" onerror="this.remove(); this.parentElement.textContent='${member.emoji}';"></div>`).join("")}
          </div>
          <h3>#${team.tagRanking || "-"} ${team.name}</h3>
          <p>${members.map(member => member.name).join(" + ")}</p>
          <div class="tag-metrics">
            <span>Chemistry <strong>${Math.round(team.chemistry)}</strong></span>
            <div class="bar heat"><b style="width:${clamp(team.chemistry)}%"></b></div>
            <span>Momentum <strong>${Math.round(team.momentum)}</strong></span>
            <div class="bar"><b style="width:${clamp(team.momentum)}%"></b></div>
          </div>
          <div class="ranking-meta">
            <span>${team.alignment}</span>
            <span>${team.winLossRecord.wins}-${team.winLossRecord.losses}</span>
            <span>Loyalty ${Math.round(team.loyalty)}</span>
          </div>
          <div class="tag-history">
            <strong>Recent Story</strong>
            <span>${team.betrayalHistory[0] || team.feudHistory[0] || "No major tag storyline yet."}</span>
          </div>
          <div class="contract-actions">
            <button data-tag-action="standard" data-team-id="${team.id}">Standard Tag</button>
            <button data-tag-action="tornado" data-team-id="${team.id}">Tornado Tag</button>
            <button data-tag-action="elimination" data-team-id="${team.id}">Elimination Tag</button>
            <button data-tag-action="hardcore" data-team-id="${team.id}">Hardcore Tag</button>
          </div>
        </article>
      `;
    }).join("");
  document.querySelectorAll("[data-tag-action]").forEach(button => {
    button.addEventListener("click", () => runTagFeud(button.dataset.teamId, button.dataset.tagAction));
  });
}

function createTagTeam() {
  const name = document.getElementById("tagTeamName").value.trim();
  const a = Number(document.getElementById("tagPartnerA").value);
  const b = Number(document.getElementById("tagPartnerB").value);
  const alignment = document.getElementById("tagAlignment").value;
  if (!name || a === b || !roster[a] || !roster[b]) {
    showSaveMessage("Choose a team name and two different wrestlers.");
    return;
  }
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `team-${Date.now()}`;
  if (tagTeams.some(team => team.id === id)) {
    showSaveMessage("That team name already exists.");
    return;
  }
  tagTeams.push(createDefaultTagTeam({ id, name, members: [a, b], alignment }));
  addNews(`${name} officially joined the RDGP tag division.`, "RDGP company news");
  document.getElementById("tagTeamName").value = "";
  renderTagTeams();
  saveGame("tagTeams");
}

function runTagFeud(teamId, matchType) {
  const team = tagTeams.find(item => item.id === teamId);
  const opponent = getTagContenders().find(item => item.id !== teamId) || tagTeams.find(item => item.id !== teamId);
  if (!team || !opponent) return;
  const risk = { standard: 8, tornado: 15, elimination: 12, hardcore: 24 }[matchType] || 8;
  const feudTypes = ["team vs team feud", "partner jealousy angle", "tag tournament feud", "respect rivalry", "betrayal storyline"];
  const feudType = feudTypes[Math.floor(Math.random() * feudTypes.length)];
  const heat = Math.round((team.chemistry + opponent.chemistry + team.popularity + opponent.popularity) / 4 + risk * 0.7);
  const teamScore = teamPower(team) + Math.random() * 22;
  const opponentScore = teamPower(opponent) + Math.random() * 22;
  const winner = teamScore >= opponentScore ? team : opponent;
  const loser = winner.id === team.id ? opponent : team;
  winner.winLossRecord.wins += 1;
  loser.winLossRecord.losses += 1;
  winner.chemistry = clamp(winner.chemistry + 6);
  winner.momentum = clamp(winner.momentum + 8);
  winner.popularity = clamp(winner.popularity + Math.round(heat / 30));
  loser.chemistry = clamp(loser.chemistry - (matchType === "hardcore" ? 5 : 3));
  loser.momentum = clamp(loser.momentum - 5);
  const belt = getTagChampionship();
  if (team.id === belt.championTeam || opponent.id === belt.championTeam || winner.tagRanking === 1) {
    if (winner.id === belt.championTeam) {
      belt.defenses += 1;
      belt.history.push(`${winner.name} retained in a ${matchType} tag match.`);
    } else if (loser.id === belt.championTeam || winner.tagRanking <= 2) {
      belt.championTeam = winner.id;
      belt.defenses = 0;
      belt.history.push(`${winner.name} won the RDGP Tag Team Championship in a ${matchType} tag match.`);
    }
    belt.prestige = clamp(belt.prestige + (heat >= 75 ? 5 : heat < 45 ? -4 : 2));
    trimTitleHistory(belt);
  }
  if (Math.random() * 100 < betrayalChance(loser, risk)) triggerTagBetrayal(loser);
  const feudNote = `${winner.name} defeated ${loser.name} in a ${matchType} tag match during a ${feudType}.`;
  winner.feudHistory.unshift(feudNote);
  loser.feudHistory.unshift(feudNote);
  winner.feudHistory = winner.feudHistory.slice(0, 6);
  loser.feudHistory = loser.feudHistory.slice(0, 6);
  tagFeudHistory.unshift(feudNote);
  tagFeudHistory = tagFeudHistory.slice(0, 20);
  money += Math.round(heat * 280 - risk * 180);
  addNews(`${winner.name} defeated ${loser.name}. Crowd chants boosted tag division heat.`, "RDGP company news", "major");
  recalculateTagRankings();
  renderTagTeams();
  updateMoney();
  saveGame("tagTeams");
}

function betrayalChance(team, risk) {
  const morale = teamMembers(team).reduce((sum, member) => sum + member.morale, 0) / 2;
  return Math.max(3, risk * 0.35 + Math.max(0, 45 - morale) * 0.3 + Math.max(0, 45 - team.loyalty) * 0.25);
}

function triggerTagBetrayal(team) {
  const members = teamMembers(team);
  if (members.length < 2) return;
  const betrayer = members[0].morale < members[1].morale ? members[0] : members[1];
  const victim = members[0] === betrayer ? members[1] : members[0];
  team.chemistry = clamp(team.chemistry - 18);
  team.loyalty = clamp(team.loyalty - 16);
  betrayer.morale = clamp(betrayer.morale + 4);
  victim.morale = clamp(victim.morale - 12);
  const note = `${betrayer.name} betrayed ${victim.name} after jealousy boiled over in ${team.name}.`;
  team.betrayalHistory.unshift(note);
  betrayalHistory.unshift(note);
  trackLegacyRecord("biggestBetrayals", {
    title: `${betrayer.name} betrays ${victim.name}`,
    label: "Tag Betrayal",
    score: Math.round(team.popularity * 0.45 + team.chemistry * 0.25 + chaosMeter * 0.4),
    note
  });
  addLegacyPoints(roster.indexOf(betrayer), 9, "shocking tag betrayal");
  addNews(note, "Wrestler morale news", "major");
  showSaveMessage(note);
}

function hottestWrestlerForAudience(audience) {
  return activeRoster()
    .map(wrestler => {
      let score = wrestler.popularity + wrestler.momentum * 0.3;
      if (audience.id === "hardcore") score += wrestler.aggression * 0.45 + (audience.preferredWrestlers.includes(wrestler.name) ? 14 : 0);
      if (audience.id === "casual") score += wrestler.nationalPopularity * 0.45;
      if (audience.id === "family") score += wrestler.localPopularity * 0.35 + (wrestler.alignment === "Face" ? 12 : -5);
      if (audience.id === "social") score += wrestler.onlinePopularity * 0.55 + wrestler.charisma * 0.2;
      if (audience.id === "technical") score += wrestler.ringSkill * 0.55;
      return { wrestler, score };
    })
    .sort((a, b) => b.score - a.score)[0]?.wrestler;
}

function audienceTicketImpact() {
  const avg = audiences.reduce((sum, audience) => sum + audience.satisfaction, 0) / Math.max(1, audiences.length);
  return Math.round(((avg / 62) - 1) * 100);
}

function renderAudienceAnalytics() {
  const total = audiences.reduce((sum, audience) => sum + audience.size, 0);
  const hot = audiences.slice().sort((a, b) => b.satisfaction - a.satisfaction)[0];
  document.getElementById("audienceTotalText").textContent = total.toLocaleString();
  document.getElementById("audienceHotText").textContent = hot ? hot.name : "No data";
  document.getElementById("audienceTicketText").textContent = `${audienceTicketImpact()}%`;
  document.getElementById("audienceGrid").innerHTML = audiences.map(audience => {
    const favorite = hottestWrestlerForAudience(audience);
    return `
      <article class="audience-card audience-${audience.id}">
        <div class="audience-icon">${audience.icon}</div>
        <h3>${audience.name}</h3>
        <div class="audience-statline">
          <span>Size <strong>${audience.size.toLocaleString()}</strong></span>
          <span>Trend <strong class="${audience.trend >= 0 ? "positive" : "negative"}">${signed(audience.trend || 0)}</strong></span>
        </div>
        <div class="audience-meter">
          <span>Satisfaction</span>
          <div class="bar"><b style="width:${audience.satisfaction}%"></b></div>
          <strong>${Math.round(audience.satisfaction)}</strong>
        </div>
        <p><strong>Hottest wrestler:</strong> ${favorite ? favorite.name : "None"}</p>
        <p><strong>Likes:</strong> ${audience.favoriteFeudStyles.slice(0, 3).join(", ")}</p>
        <p><strong>Complaint:</strong> ${audience.complaint}</p>
      </article>
    `;
  }).join("");
  document.getElementById("audienceTrendsList").innerHTML = (audienceTrends.length ? audienceTrends : ["No fan trend reports yet."]).map(item => `
    <article class="news-card"><strong>${item}</strong></article>
  `).join("");
}

function severityWeight(severity) {
  return { Minor: 8, Serious: 15, Major: 24, Catastrophic: 34 }[severity] || 10;
}

function rollChaosEvent(context = "weekly") {
  const baseChance = context === "ppv" ? 42 : context === "monthly" ? 36 : 24;
  const chance = baseChance + chaosMeter * 0.35 + (activeFeud?.risk || 0) * 0.08;
  if (activeChaosEvent || Math.random() * 100 > chance) return null;
  const template = chaosTemplates[Math.floor(Math.random() * chaosTemplates.length)];
  const event = {
    ...template,
    context,
    week: gameWeek,
    resolved: false,
    createdAt: Date.now()
  };
  activeChaosEvent = event;
  chaosMeter = clamp(chaosMeter + Math.round(severityWeight(event.severity) / 3));
  recentDisasters.unshift(`${event.severity} ${event.category}: ${event.title}`);
  recentDisasters = recentDisasters.slice(0, 20);
  addNews(`RED ALERT: ${event.title}. ${event.text}`, event.category, event.severity === "Minor" ? "normal" : "major");
  return event;
}

function changeAudience(id, amount) {
  const audience = audiences.find(item => item.id === id);
  if (!audience) return;
  audience.satisfaction = clamp(audience.satisfaction + amount);
  audience.trend = (audience.trend || 0) + amount;
}

function applyChaosEffect(effect = {}) {
  chaosMeter = clamp(chaosMeter + (effect.chaos || 0));
  money += Math.round(effect.money || 0);
  if (activeFeud) {
    activeFeud.heat = clamp(activeFeud.heat + (effect.heat || 0), 0, 130);
    activeFeud.risk = clamp(activeFeud.risk + (effect.risk || 0), 0, 130);
  }
  if (effect.morale || effect.loyalty || effect.fatigue) {
    const targets = activeFeud ? [activeFeud.wrestlerA, activeFeud.wrestlerB] : activeRoster().map(wrestler => roster.indexOf(wrestler)).slice(0, 4);
    targets.forEach(index => {
      const wrestler = roster[index];
      if (!wrestler) return;
      wrestler.morale = clamp(wrestler.morale + (effect.morale || 0));
      wrestler.loyalty = clamp((wrestler.loyalty || 50) + (effect.loyalty || 0));
      wrestler.fatigue = clamp((wrestler.fatigue || 0) + (effect.fatigue || 0));
    });
  }
  if (effect.titlePrestige) championships.forEach(belt => belt.prestige = clamp(belt.prestige + effect.titlePrestige));
  if (effect.sponsor && activeSponsor) activeSponsor.satisfaction = clamp(activeSponsor.satisfaction + effect.sponsor);
  if (effect.rival) rivalPromotions.forEach(rival => rival.popularity = clamp(rival.popularity + effect.rival));
  changeAudience("hardcore", effect.hardcoreAudience || 0);
  changeAudience("casual", effect.casualAudience || 0);
  changeAudience("family", effect.familyAudience || 0);
  changeAudience("social", effect.socialAudience || 0);
  changeAudience("technical", effect.technicalAudience || 0);
  adjustBookerStats({
    reputation: effect.reputation || 0,
    fanTrust: effect.fanTrust || 0,
    lockerRoomRespect: effect.lockerRoomRespect || 0,
    jobSecurity: effect.jobSecurity || 0,
    boardConfidence: effect.boardConfidence || 0
  });
}

function resolveChaosChoice(choiceId) {
  if (!activeChaosEvent || activeChaosEvent.resolved) return;
  const choice = activeChaosEvent.choices.find(item => item.id === choiceId);
  if (!choice) return;
  applyChaosEffect(choice.effect);
  const note = `${activeChaosEvent.title}: ${choice.result}`;
  activeChaosEvent.resolved = true;
  controversyHistory.unshift(note);
  controversyHistory = controversyHistory.slice(0, 20);
  trackLegacyRecord("chaoticMoments", {
    title: activeChaosEvent.title,
    label: activeChaosEvent.severity,
    score: severityWeight(activeChaosEvent.severity) + Math.round(chaosMeter / 2),
    note
  });
  if (activeChaosEvent.category === "Backstage Drama" || activeChaosEvent.title.includes("betray")) {
    trackLegacyRecord("biggestBetrayals", {
      title: activeChaosEvent.title,
      label: activeChaosEvent.category,
      score: severityWeight(activeChaosEvent.severity) + Math.round((activeFeud?.heat || 50) / 3),
      note
    });
  }
  recentDisasters.unshift(note);
  recentDisasters = recentDisasters.slice(0, 20);
  addNews(note, activeChaosEvent.category, activeChaosEvent.severity === "Minor" ? "normal" : "major");
  activeChaosEvent = null;
  showSaveMessage("Crisis response locked in.");
  if (currentScreen === "results") renderChaosPanel(null);
  if (currentScreen === "ppvResults") renderPpvResults();
  if (currentScreen === "chaos") renderChaosDesk();
  saveGame(currentScreen);
}

function renderChaosCard(event, compact = false) {
  if (!event) return `<article class="chaos-card calm"><h3>No active crisis</h3><p>Chaos is under control for now.</p></article>`;
  return `
    <article class="chaos-card severity-${event.severity.toLowerCase()}">
      <span class="red-alert">RED ALERT | ${event.category} | ${event.severity}</span>
      <h3>${event.title}</h3>
      <p>${event.text}</p>
      <div class="chaos-choice-grid">
        ${event.choices.map(choice => `<button type="button" data-chaos-choice="${choice.id}">${choice.label}</button>`).join("")}
      </div>
      ${compact ? "" : `<small>High chaos creates buzz, but it also hurts morale, sponsors, and job security.</small>`}
    </article>
  `;
}

function bindChaosChoiceButtons(scope = document) {
  scope.querySelectorAll("[data-chaos-choice]").forEach(button => {
    button.addEventListener("click", () => resolveChaosChoice(button.dataset.chaosChoice));
  });
}

function renderChaosPanel(event) {
  const panel = document.getElementById("chaosPanel");
  if (!panel) return;
  const crisis = event || activeChaosEvent;
  panel.innerHTML = crisis ? renderChaosCard(crisis, true) : "";
  bindChaosChoiceButtons(panel);
}

function renderChaosDesk() {
  document.getElementById("chaosMeterText").textContent = Math.round(chaosMeter);
  document.getElementById("activeCrisisText").textContent = activeChaosEvent ? activeChaosEvent.title : "None";
  document.getElementById("chaosHistoryCount").textContent = controversyHistory.length;
  const alertPanel = document.getElementById("chaosAlertPanel");
  alertPanel.innerHTML = renderChaosCard(activeChaosEvent);
  bindChaosChoiceButtons(alertPanel);
  document.getElementById("chaosHistoryList").innerHTML = (recentDisasters.length ? recentDisasters : ["No chaos reports yet. Enjoy the quiet while it lasts."]).map(item => `
    <article class="news-card major-news"><span>Chaos Log</span><h3>${item}</h3></article>
  `).join("");
}

function adjustRankingPoints(index, amount, reason = "") {
  const wrestler = roster[index];
  if (!wrestler) return;
  wrestler.rankingPoints = Math.max(0, Math.round((wrestler.rankingPoints || 0) + amount));
  if (reason && Math.abs(amount) >= 8) addNews(`${wrestler.name} ${amount > 0 ? "gained" : "lost"} ranking points: ${reason}.`, "Fan reaction", Math.abs(amount) >= 14 ? "major" : "normal");
}

function recordMatchResult(winnerIndex, loserIndex, rating, context = "feud") {
  if (!roster[winnerIndex] || !roster[loserIndex]) return;
  roster[winnerIndex].winLossRecord.wins += 1;
  roster[loserIndex].winLossRecord.losses += 1;
  const upsetBonus = roster[loserIndex].currentRank && roster[winnerIndex].currentRank && roster[loserIndex].currentRank < roster[winnerIndex].currentRank ? 6 : 0;
  adjustRankingPoints(winnerIndex, 12 + Math.round(rating * 3) + upsetBonus, `${context} win`);
  adjustRankingPoints(loserIndex, -5 - Math.round(Math.max(0, 3 - rating) * 3), `${context} loss`);
  addLegacyPoints(winnerIndex, 6 + Math.round(rating * 2) + upsetBonus, `${context} win`);
  addLegacyPoints(loserIndex, Math.max(1, Math.round(rating)), `${context} performance`);
  roster[winnerIndex].momentum = clamp((roster[winnerIndex].momentum || 50) + 6);
  roster[loserIndex].momentum = clamp((roster[loserIndex].momentum || 50) - 4);
  if (roster[loserIndex].injuryWeeks > 0) adjustRankingPoints(loserIndex, -4, "injury");
  recalculateRankings(true);
}

function getSponsorTemplate(id) {
  return sponsorCatalog.find(sponsor => sponsor.id === id) || null;
}

function topMerchSeller() {
  return activeRoster().slice().sort((a, b) => (b.merchSales || 0) - (a.merchSales || 0))[0] || null;
}

function calculateSponsorOffer(template) {
  const prestige = averageTitlePrestige();
  const pressure = getRivalPressure();
  const ppvGradeBonus = lastPpvResult?.grade === "A" ? 1.28 : lastPpvResult?.grade === "B" ? 1.14 : lastPpvResult?.grade === "F" ? 0.82 : 1;
  const businessScore = companyPopularity * 0.35 + bookerProfile.jobSecurity * 0.22 + prestige * 0.18 + Math.max(0, 110 - pressure) * 0.12 + bookerProfile.reputation * 0.13;
  return Math.round(template.payout * ppvGradeBonus * (0.72 + businessScore / 190));
}

function generateSponsorOffers(force = false) {
  if (!force && sponsorOffers.length) return sponsorOffers;
  const activeId = activeSponsor?.id;
  sponsorOffers = sponsorCatalog
    .filter(template => template.id !== activeId && bookerProfile.reputation >= template.reputationRequirement - 8)
    .map(template => ({
      ...template,
      payout: calculateSponsorOffer(template),
      satisfactionPreview: clamp(55 + bookerProfile.fanTrust * 0.18 + companyPopularity * 0.16 - Math.max(0, getRivalPressure() - 85) * 0.14)
    }))
    .sort((a, b) => b.payout - a.payout)
    .slice(0, 3);
  if (!sponsorOffers.length) {
    sponsorOffers = sponsorCatalog.slice(0, 2).map(template => ({ ...template, payout: Math.round(template.payout * 0.65), satisfactionPreview: 45 }));
  }
  return sponsorOffers;
}

function sponsorWarning() {
  if (!activeSponsor) return "No active sponsor. Generate offers after strong shows or every four weeks.";
  if (activeSponsor.satisfaction < 30) return `${activeSponsor.name} may walk if risk and fan trust do not improve.`;
  if (activeSponsor.satisfaction < 50) return `${activeSponsor.name} is uneasy. Keep ratings up and scandals down.`;
  return `${activeSponsor.name} is satisfied with the current RDGP direction.`;
}

function renderMerchSponsors() {
  generateSponsorOffers(false);
  const seller = topMerchSeller();
  document.getElementById("weeklyMerchText").textContent = moneyText(weeklyMerchRevenue);
  document.getElementById("topMerchSellerText").textContent = seller ? `${seller.name} (${moneyText(seller.merchSales || 0)})` : "None yet";
  document.getElementById("activeSponsorText").textContent = activeSponsor ? activeSponsor.name : "No active sponsor";
  document.getElementById("sponsorSatisfactionText").textContent = activeSponsor ? Math.round(activeSponsor.satisfaction) : "0";
  document.getElementById("sponsorPayoutText").textContent = activeSponsor ? moneyText(activeSponsor.payout) : "$0";
  document.getElementById("sponsorWarningText").textContent = sponsorWarning();

  const offerGrid = document.getElementById("sponsorOffersGrid");
  offerGrid.innerHTML = sponsorOffers.length ? sponsorOffers.map(offer => `
    <article class="sponsor-card">
      <div class="sponsor-logo">${offer.name.split(" ").map(word => word[0]).join("")}</div>
      <h3>${offer.name}</h3>
      <p>${offer.type} sponsor. Prefers ${offer.preferredAudience} audiences.</p>
      <div class="sponsor-meta">
        <span>Payout <strong>${moneyText(offer.payout)}</strong></span>
        <span>Risk Tolerance <strong>${offer.riskTolerance}</strong></span>
        <span>Rep Needed <strong>${offer.reputationRequirement}</strong></span>
      </div>
      <div class="contract-actions">
        <button data-sponsor-action="accept" data-sponsor-id="${offer.id}">Accept Sponsor</button>
        <button data-sponsor-action="negotiate" data-sponsor-id="${offer.id}">Negotiate Higher Payout</button>
        <button data-sponsor-action="reject" data-sponsor-id="${offer.id}">Reject</button>
      </div>
    </article>
  `).join("") : `<article class="sponsor-card"><h3>No current offers</h3><p>Strong ratings and PPV grades will attract sponsors.</p></article>`;
  offerGrid.querySelectorAll("[data-sponsor-action]").forEach(button => {
    button.addEventListener("click", () => handleSponsorAction(button.dataset.sponsorId, button.dataset.sponsorAction));
  });

  const merchGrid = document.getElementById("merchGrid");
  merchGrid.innerHTML = activeRoster().slice().sort((a, b) => (b.merchSales || 0) - (a.merchSales || 0)).map(wrestler => `
    <article class="merch-card">
      <div class="avatar merch-avatar">
        <img src="${wrestler.image}" alt="${wrestler.name} portrait" onerror="this.remove(); this.parentElement.textContent='${wrestler.emoji}';">
      </div>
      <div>
        <h3>${wrestler.name}</h3>
        <div class="merch-bars">
          <span>Popularity <strong>${Math.round(wrestler.merchPopularity || 0)}</strong></span>
          <div class="bar heat"><b style="width:${clamp(wrestler.merchPopularity || 0)}%"></b></div>
          <span>Momentum <strong>${Math.round(wrestler.merchMomentum || 0)}</strong></span>
          <div class="bar"><b style="width:${clamp(wrestler.merchMomentum || 0)}%"></b></div>
        </div>
        <p>Lifetime merch sales: <strong>${moneyText(wrestler.merchSales || 0)}</strong></p>
      </div>
    </article>
  `).join("");
}

function handleSponsorAction(id, action) {
  const offer = sponsorOffers.find(item => item.id === id);
  if (!offer) return;
  if (action === "reject") {
    sponsorOffers = sponsorOffers.filter(item => item.id !== id);
    addNews(`${offer.name} sponsor offer was rejected by RDGP.`, "Sponsor reaction");
  } else if (action === "negotiate") {
    const successChance = clamp(bookerProfile.reputation + bookerProfile.boardConfidence * 0.25 - 35, 20, 82);
    if (Math.random() * 100 < successChance) {
      offer.payout = Math.round(offer.payout * 1.22);
      offer.satisfactionPreview = clamp(offer.satisfactionPreview - 8);
      addNews(`${offer.name} increased its offer after a tough negotiation.`, "Sponsor reaction", "major");
    } else {
      sponsorOffers = sponsorOffers.filter(item => item.id !== id);
      addNews(`${offer.name} walked away from negotiations with RDGP.`, "Sponsor reaction", "major");
    }
  } else {
    activeSponsor = {
      id: offer.id,
      name: offer.name,
      type: offer.type,
      payout: offer.payout,
      riskTolerance: offer.riskTolerance,
      preferredAudience: offer.preferredAudience,
      satisfaction: offer.satisfactionPreview,
      weeksActive: 0
    };
    sponsorHistory.unshift(`${offer.name} signed for ${moneyText(offer.payout)} per week.`);
    sponsorHistory = sponsorHistory.slice(0, 20);
    sponsorOffers = [];
    addNews(`${offer.name} became RDGP's active sponsor.`, "Sponsor reaction", "major");
  }
  renderMerchSponsors();
  saveGame("merchSponsors");
}

function calculateWeeklyMerchRevenue(result, segmentResult) {
  let total = 0;
  const activeIndexes = activeFeud ? [activeFeud.wrestlerA, activeFeud.wrestlerB] : [];
  activeRoster().forEach(wrestler => {
    const involved = activeIndexes.some(index => roster[index] === wrestler);
    let momentumDelta = 0;
    if (involved) momentumDelta += result.rating >= 3.8 ? 7 : result.rating < 2.2 ? -5 : 2;
    if (segmentResult?.special?.label === "Viral Segment" || segmentResult?.special?.label === "Breakout Performance") momentumDelta += involved ? 8 : 0;
    if (isChampion(roster.indexOf(wrestler))) momentumDelta += 3;
    if (wrestler.breakout) momentumDelta += 4;
    if (wrestler.injuryWeeks > 0) momentumDelta -= 6;
    if (wrestler.lossStreak >= 2) momentumDelta -= 4;
    if (wrestler.morale < 35) momentumDelta -= 3;
    wrestler.merchMomentum = clamp((wrestler.merchMomentum || 50) + momentumDelta);
    wrestler.merchPopularity = clamp(Math.round((wrestler.popularity * 0.55) + (wrestler.crowdConnection * 0.2) + (wrestler.merchMomentum * 0.25)));
    const sales = Math.max(0, Math.round((wrestler.merchPopularity * 55 + wrestler.merchMomentum * 38) * (involved ? 1.25 : 0.72)));
    wrestler.merchSales = (wrestler.merchSales || 0) + sales;
    total += sales;
  });
  weeklyMerchRevenue = Math.round(total);
  money += weeklyMerchRevenue;
  return weeklyMerchRevenue;
}

function rollMerchSponsorEvent(result) {
  const roll = Math.random();
  const seller = topMerchSeller();
  if (roll < 0.12 && seller) {
    const boost = Math.round(3500 + seller.merchPopularity * 60);
    seller.merchMomentum = clamp(seller.merchMomentum + 10);
    seller.merchSales += boost;
    weeklyMerchRevenue += boost;
    money += boost;
    addNews(`${seller.name} had a T-shirt sales spike worth ${moneyText(boost)}.`, "RDGP company news", "major");
    return "T-shirt sales spike";
  }
  if (roll < 0.2 && activeSponsor) {
    activeSponsor.satisfaction = clamp(activeSponsor.satisfaction - 9);
    addNews(`${activeSponsor.name} complained about this week's sponsor fit.`, "Sponsor reaction", "major");
    return "Sponsor complaint";
  }
  if (roll < 0.28 && seller) {
    seller.merchMomentum = clamp(seller.merchMomentum - 8);
    addNews(`${seller.name} faced a small merch scandal after fans rejected a design.`, "Sponsor reaction");
    return "Merch scandal";
  }
  if (roll < 0.36 && activeFeud) {
    const star = roster[activeFeud.wrestlerA];
    star.merchMomentum = clamp(star.merchMomentum + 7);
    addNews(`Fans demanded new ${star.name} merch after the latest segment.`, "Fan reaction");
    return "Fan demand for new merch";
  }
  if (roll < 0.43) {
    const championIndex = championships[Math.floor(Math.random() * championships.length)].champion;
    const champion = roster[championIndex];
    if (champion?.active !== false) {
      const boom = Math.round(4200 + champion.popularity * 70);
      champion.merchMomentum = clamp((champion.merchMomentum || 50) + 9);
      champion.merchSales = (champion.merchSales || 0) + boom;
      weeklyMerchRevenue += boom;
      money += boom;
      addNews(`${champion.name}'s championship merch boomed for ${moneyText(boom)}.`, "Championship buzz", "major");
      return "Champion merch boom";
    }
  }
  return "";
}

function applySponsorWeek(result) {
  if (!activeSponsor) return { payout: 0, satisfactionChange: 0, warning: "No active sponsor." };
  activeSponsor.weeksActive += 1;
  let change = 0;
  if (result.money >= 0) change += 4;
  else change -= 6;
  if ((result.rating || 0) >= 3.7) change += 6;
  if ((result.rating || 0) < 2.2) change -= 8;
  if (activeFeud?.risk > activeSponsor.riskTolerance) change -= Math.round((activeFeud.risk - activeSponsor.riskTolerance) / 6);
  if (bookerProfile.fanTrust < 42) change -= 5;
  if (result.event?.title?.includes("Injury") || result.growthEvents?.some(note => note.includes("injury"))) change -= 8;
  if (averageTitlePrestige() >= 72) change += 4;
  activeSponsor.satisfaction = clamp(activeSponsor.satisfaction + change);
  const payout = activeSponsor.satisfaction < 25 ? 0 : Math.round(activeSponsor.payout * (activeSponsor.satisfaction >= 75 ? 1.15 : 1));
  money += payout;
  if (activeSponsor.satisfaction <= 0) {
    addNews(`${activeSponsor.name} pulled its RDGP sponsorship after repeated problems.`, "Sponsor reaction", "major");
    sponsorHistory.unshift(`${activeSponsor.name} left after satisfaction hit 0.`);
    activeSponsor = null;
  }
  return { payout, satisfactionChange: change, warning: sponsorWarning() };
}

function moodForScore(score) {
  if (score >= 85) return "Urgent";
  if (score >= 65) return "Warning";
  if (score >= 42) return "Concerned";
  return "Calm";
}

function moodRank(mood) {
  return { Calm: 1, Concerned: 2, Warning: 3, Urgent: 4 }[mood] || 1;
}

function choosePriorityAdvice(candidates) {
  return candidates.sort((a, b) => moodRank(b.mood) - moodRank(a.mood))[0];
}

function lowestMoraleWrestler() {
  return activeRoster()
    .slice()
    .sort((a, b) => a.morale - b.morale)[0];
}

function highestFatigueWrestler() {
  return activeRoster()
    .slice()
    .sort((a, b) => b.fatigue - a.fatigue)[0];
}

function hottestTitle() {
  return championships.slice().sort((a, b) => b.prestige - a.prestige)[0];
}

function coldestTitle() {
  return championships.slice().sort((a, b) => a.prestige - b.prestige)[0];
}

function activeFeudNames() {
  if (!activeFeud) return "No active feud";
  return `${roster[activeFeud.wrestlerA].name} vs ${roster[activeFeud.wrestlerB].name}`;
}

function getRatingsAnalystAdvice() {
  const rivalPressure = getRivalPressure();
  const belt = activeFeud ? getActiveTitle() : null;
  const candidates = [
    {
      mood: money < 35000 ? "Urgent" : money < 65000 ? "Warning" : "Calm",
      text: money < 35000
        ? "Cash is tight. Avoid high-risk angles until weekly profit turns positive."
        : `Company money is ${moneyText(money)}. Keep heat above 70 to stay profitable.`
    },
    {
      mood: rivalPressure > 100 ? "Warning" : rivalPressure > 82 ? "Concerned" : "Calm",
      text: rivalPressure > 100
        ? "Rivals are hot this week. A title feud or major promo can protect RDGP ratings."
        : `Rival pressure sits at ${rivalPressure}. You have room to build patiently.`
    },
    {
      mood: ppvHype.audienceMomentum < 35 ? "Concerned" : "Calm",
      text: ppvHype.audienceMomentum < 35
        ? "PPV hype is cold. Stack a strong weekly segment before the next big event."
        : `PPV hype is ${Math.round(ppvHype.audienceMomentum)}. Push the hottest rivalry toward the card.`
    },
    {
      mood: belt && activeFeud.heat >= 75 ? "Calm" : "Concerned",
      text: belt && activeFeud.heat >= 75
        ? `${activeFeudNames()} has enough heat to sell a ${belt.name} program.`
        : activeFeud ? `${activeFeudNames()} needs more heat before it feels like a money match.` : "Create a feud with high popularity and charisma for faster revenue."
    }
  ];
  return { advisor: "The Ratings Analyst", focus: "Money, ratings, rival promotions", icon: "$", ...choosePriorityAdvice(candidates) };
}

function getLockerRoomAdvice() {
  refreshContractMeta();
  const low = lowestMoraleWrestler();
  const risky = activeRoster().find(wrestler => ["At Risk of Leaving", "Rival Interest", "Unhappy"].includes(wrestler.contractStatus));
  const candidates = [
    {
      mood: low && low.morale < 30 ? "Urgent" : low && low.morale < 45 ? "Warning" : "Calm",
      text: low && low.morale < 45
        ? `${low.name} is unhappy. A raise, title promise, or safer booking could calm things down.`
        : "The room is mostly steady. Keep promises clean and payroll predictable."
    },
    {
      mood: risky ? "Warning" : "Calm",
      text: risky
        ? `${risky.name} has ${risky.contractStatus}. Rival poaching risk is real.`
        : "No major contract fire is burning right now."
    },
    {
      mood: bookerProfile.lockerRoomRespect < 35 ? "Urgent" : bookerProfile.lockerRoomRespect < 50 ? "Concerned" : "Calm",
      text: bookerProfile.lockerRoomRespect < 50
        ? "Locker room respect is slipping. Avoid broken title promises this month."
        : "The roster still respects your creative lead."
    }
  ];
  return { advisor: "The Locker Room Insider", focus: "Morale, contracts, loyalty, backstage issues", icon: "LR", ...choosePriorityAdvice(candidates) };
}

function getStorylineProducerAdvice() {
  const coldTitle = coldestTitle();
  const hotTitle = hottestTitle();
  const candidates = [
    {
      mood: activeFeud && activeFeud.heat < 50 ? "Concerned" : "Calm",
      text: activeFeud && activeFeud.heat < 50
        ? "This feud needs a betrayal, contract signing, or sharper promo hook."
        : activeFeud ? `${activeFeudNames()} has enough story shape. Start planning the payoff.` : "Pair a face and heel with strong charisma for instant story traction."
    },
    {
      mood: activeFeud && activeFeud.currentWeek >= activeFeud.feudLength - 1 && activeFeud.heat < 75 ? "Warning" : "Calm",
      text: activeFeud && activeFeud.currentWeek >= activeFeud.feudLength - 1
        ? "The payoff is close. Make this week feel like the final chapter."
        : "Use weekly segments to create a beginning, twist, and payoff."
    },
    {
      mood: coldTitle.prestige < 38 ? "Concerned" : "Calm",
      text: coldTitle.prestige < 38
        ? `${coldTitle.name} is cold. Give it a clean, focused title feud soon.`
        : `${hotTitle.name} feels strongest. It can anchor a big-event card.`
    }
  ];
  return { advisor: "The Storyline Producer", focus: "Feuds, promos, PPV payoff, character arcs", icon: "TV", ...choosePriorityAdvice(candidates) };
}

function getRiskManagerAdvice() {
  const tired = highestFatigueWrestler();
  const injured = activeRoster().find(wrestler => wrestler.injuryWeeks > 0);
  const candidates = [
    {
      mood: bookerProfile.jobSecurity < 20 ? "Urgent" : bookerProfile.jobSecurity < 40 ? "Warning" : "Calm",
      text: bookerProfile.jobSecurity < 40
        ? "Job security is low. Book profitable, low-risk TV until the board calms down."
        : "Job security is stable enough for calculated risks."
    },
    {
      mood: tired && tired.fatigue > 82 ? "Urgent" : tired && tired.fatigue > 62 ? "Warning" : "Calm",
      text: tired && tired.fatigue > 62
        ? `${tired.name} is carrying too much fatigue. Dangerous angles could cause an injury.`
        : "Fatigue is manageable. Keep monitoring high-risk programs."
    },
    {
      mood: injured ? "Warning" : "Calm",
      text: injured
        ? `${injured.name} is injured. Do not anchor a risky feud around them right now.`
        : "No injured active wrestler is blocking creative plans."
    },
    {
      mood: activeFeud && activeFeud.risk > 95 ? "Urgent" : activeFeud && activeFeud.risk > 72 ? "Warning" : "Calm",
      text: activeFeud && activeFeud.risk > 72
        ? `${activeFeudNames()} is getting risky. Mix in interviews or promos to cool danger.`
        : activeFeud ? "Current feud risk is manageable." : "Build heat before taking major risks."
    }
  ];
  return { advisor: "The Risk Manager", focus: "Injuries, fatigue, bad morale, financial danger", icon: "!", ...choosePriorityAdvice(candidates) };
}

function getCreativeAdvice() {
  return [
    getRatingsAnalystAdvice(),
    getLockerRoomAdvice(),
    getStorylineProducerAdvice(),
    getRiskManagerAdvice()
  ];
}

function renderCreativeTeam() {
  const grid = document.getElementById("advisorGrid");
  if (!grid) return;
  const advice = getCreativeAdvice();
  recentAdviceHistory = advice.map(item => ({
    week: gameWeek,
    advisor: item.advisor,
    mood: item.mood,
    text: item.text
  })).concat(recentAdviceHistory).slice(0, 12);
  document.getElementById("creativeFocusText").textContent = activeFeud ? activeFeudNames() : "Company Strategy";
  grid.innerHTML = advice.map(item => `
    <article class="advisor-card mood-${item.mood.toLowerCase()}">
      <div class="advisor-head">
        <span class="advisor-icon">${item.icon}</span>
        <div>
          <h3>${item.advisor}</h3>
          <small>${item.focus}</small>
        </div>
      </div>
      <div class="advisor-mood">${item.mood}</div>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function openCreativeTeam() {
  previousScreenBeforeCreative = currentScreen === "creativeTeam" ? previousScreenBeforeCreative : currentScreen;
  renderCreativeTeam();
  show("creativeTeam");
  saveGame("creativeTeam");
}

function closeCreativeTeam() {
  const target = previousScreenBeforeCreative || "title";
  if (target === "booking" && activeFeud) {
    showBooking();
    return;
  }
  if (target === "roster") renderRoster();
  show(target in screens ? target : "title");
}

function runPpvEvent() {
  if (!ppvCard) ppvCard = buildPpvCard();
  const results = ppvCard.matches.map((match, index) => resolvePpvMatch(match, index === ppvCard.matches.length - 1));
  const totalRevenue = results.reduce((sum, result) => sum + result.revenue, 0);
  const averageRating = results.reduce((sum, result) => sum + result.rating, 0) / Math.max(1, results.length);
  const topMatch = results.reduce((top, result) => result.rating > top.rating ? result : top, results[0]);
  const rivalPressure = ppvCard.rivalPressure;
  const pressurePenalty = rivalPressure > 95 ? 9000 : rivalPressure > 78 ? 4000 : 0;
  const finalRevenue = Math.max(0, Math.round(totalRevenue - pressurePenalty));
  money += finalRevenue;
  const grade = averageRating >= 4.5 ? "A" : averageRating >= 3.7 ? "B" : averageRating >= 2.9 ? "C" : averageRating >= 2.1 ? "D" : "F";
  applyBookerPpvPerformance(grade, averageRating, finalRevenue);
  if (money <= 0 || bookerProfile.jobSecurity <= 0) {
    fireBooker(money <= 0 ? "Company money reached $0 after the big event." : "The board fired you after a failed big event cycle.");
    return;
  }
  applyPpvBusinessEffects(grade, averageRating);
  const ppvChaosEvent = rollChaosEvent("ppv");
  const ppvAudienceReport = applyAudienceReaction({
    label: ppvCard.eventName,
    wrestlers: [...new Set(ppvCard.matches.flatMap(match => [match.wrestlerA, match.wrestlerB]))].map(index => roster[index]).filter(Boolean),
    matchType: "PPV title matches championship spectacle",
    feudType: "Championship Chase",
    ending: grade === "A" ? "Clean Win" : grade === "F" ? "Overbooked finish" : "Big Event",
    heat: ppvCard.hype,
    risk: Math.round(ppvCard.matches.reduce((sum, match) => sum + match.risk, 0) / Math.max(1, ppvCard.matches.length)),
    rating: averageRating,
    titleMatch: ppvCard.matches.some(match => match.titleId),
    viral: results.some(result => ["shocking return", "surprise betrayal", "breakout performance", "title upset", "legendary main event"].includes(result.moment)),
    betrayal: results.some(result => result.moment === "surprise betrayal"),
    injury: results.some(result => result.injury),
    tooSafe: averageRating < 3 && ppvCard.hype < 55,
    tooComplex: grade === "D" || grade === "F",
    sloppy: averageRating < 2.4,
    baseRevenue: finalRevenue
  });
  const finalRevenueWithAudience = finalRevenue + ppvAudienceReport.revenueImpact;
  legacyData.ppvsHeld += 1;
  legacyData.totalCompanyRevenue += finalRevenueWithAudience;
  legacyData.highestCompanyPopularity = Math.max(legacyData.highestCompanyPopularity || 0, companyPopularity);
  if (grade === "A" && rivalPressure >= 70) legacyData.rivalsDefeated += 1;
  trackLegacyRecord("highestRatedPpvs", {
    title: ppvCard.eventName,
    label: grade,
    score: Math.round(averageRating * 20 + finalRevenueWithAudience / 4500),
    note: `${averageRating.toFixed(1)} star average, ${moneyText(finalRevenueWithAudience)} revenue, top match ${topMatch.headline}.`
  });
  const mainEvent = ppvCard.matches[ppvCard.matches.length - 1];
  if (mainEvent) [mainEvent.wrestlerA, mainEvent.wrestlerB].forEach(index => {
    roster[index].ppvMainEvents += 1;
    addLegacyPoints(index, 14 + Math.round(averageRating * 2), "PPV main event");
  });
  lastPpvResult = {
    eventName: ppvCard.eventName,
    results,
    totalRevenue: finalRevenueWithAudience,
    audienceReport: ppvAudienceReport,
    chaosEvent: ppvChaosEvent,
    averageRating: Number(averageRating.toFixed(1)),
    grade,
    topMatch: topMatch.headline,
    pressurePenalty
  };
  addNews(`${ppvCard.eventName} earned ${moneyText(finalRevenue)} with a ${grade} grade. Top match: ${topMatch.headline}.`);
  generateSponsorOffers(true);
  ppvHype.audienceMomentum = clamp(averageRating * 16 + Math.max(0, ppvHype.audienceMomentum - 45), 0, 130);
  ppvHype.bestRivalry = topMatch.headline;
  currentPpvEvent = null;
  ppvCard = null;
  weeksUntilPpv = 4;
  gameWeek += 1;
  renderPpvResults();
  show("ppvResults");
  saveGame("ppvResults");
  playCrowdPop();
}

function resolvePpvMatch(match, isMainEvent) {
  const a = roster[match.wrestlerA];
  const b = roster[match.wrestlerB];
  const belt = match.titleId ? championships.find(item => item.id === match.titleId) : null;
  const moment = Math.random() < (isMainEvent ? 0.42 : 0.24) ? ppvMoments[Math.floor(Math.random() * ppvMoments.length)] : null;
  let rating = projectPpvRating(match.wrestlerA, match.wrestlerB, match.heat + (moment === "legendary main event" ? 18 : 0), match.risk, belt);
  if (moment === "breakout performance") rating += 0.35;
  if (moment === "injury scare") rating -= 0.25;
  rating = Math.max(0.5, Math.min(5, rating));
  const crowd = rating >= 4.5 ? "Nuclear Heat" : rating >= 3.8 ? "Huge Pop" : rating >= 3 ? "Good Reaction" : rating >= 2 ? "Mild Interest" : "Dead Crowd";
  const revenue = Math.round((rating * 17000 + match.heat * 480 - match.risk * 190 + (isMainEvent ? 10000 : 0)) * (belt ? titleRevenueMultiplier(belt) : 1) * ticketMomentum);
  const titleResult = belt ? resolvePpvTitleMatch(belt, match, rating, moment) : "";
  const winnerIndex = belt && titleResult?.winnerIndex !== undefined
    ? titleResult.winnerIndex
    : choosePpvWinner(match, rating, moment);
  const loserIndex = winnerIndex === match.wrestlerA ? match.wrestlerB : match.wrestlerA;
  recordMatchResult(winnerIndex, loserIndex, rating, belt ? "PPV title match" : "PPV match");
  const growthNotes = applyPpvPerformanceGrowth(match, rating, moment, isMainEvent);
  const injury = moment === "injury scare" || (Math.random() < match.risk / 700);
  if (injury) {
    a.morale = clamp(a.morale - 5);
    b.morale = clamp(b.morale - 5);
  } else {
    a.morale = clamp(a.morale + (rating >= 3.5 ? 3 : -2));
    b.morale = clamp(b.morale + (rating >= 3.5 ? 3 : -2));
  }
  return {
    slot: match.slot,
    headline: `${a.name} vs ${b.name}`,
    title: belt?.name || "",
    rating: Number(rating.toFixed(1)),
    crowd,
    revenue,
    moment,
    injury,
    titleResult: titleResult?.text || titleResult || "",
    winnerName: roster[winnerIndex].name,
    winnerIndex,
    growthNotes
  };
}

function choosePpvWinner(match, rating, moment) {
  if (moment === "title upset") return lowerRankedUpset(match.wrestlerA, match.wrestlerB);
  if (moment === "breakout performance") {
    const breakout = [match.wrestlerA, match.wrestlerB].find(index => roster[index].potential >= 74);
    if (breakout !== undefined) return breakout;
  }
  const aScore = rankingScore(roster[match.wrestlerA]) + Math.random() * 18 + rating;
  const bScore = rankingScore(roster[match.wrestlerB]) + Math.random() * 18 + rating;
  return aScore >= bScore ? match.wrestlerA : match.wrestlerB;
}

function applyPpvPerformanceGrowth(match, rating, moment, isMainEvent) {
  const notes = [];
  [match.wrestlerA, match.wrestlerB].forEach(index => {
    const wrestler = roster[index];
    if (!wrestler || wrestler.active === false) return;
    wrestler.fatigue = clamp(wrestler.fatigue + (isMainEvent ? 10 : 6) + Math.round(match.risk / 35));
    if (rating >= 4) {
      wrestler.momentum = clamp(wrestler.momentum + (isMainEvent ? 12 : 8));
      wrestler.popularity = clamp(wrestler.popularity + (isMainEvent ? 3 : 2));
      wrestler.morale = clamp(wrestler.morale + 4);
      if (wrestler.potential >= 74) wrestler.ringSkill = clamp(wrestler.ringSkill + 1);
      notes.push(`${wrestler.name} gained PPV momentum.`);
    } else if (rating < 2.3) {
      wrestler.momentum = clamp(wrestler.momentum - 7);
      wrestler.morale = clamp(wrestler.morale - 4);
      notes.push(`${wrestler.name} cooled off on the big stage.`);
    }
    if (!wrestler.breakout && (moment === "breakout performance" || (rating >= 4.5 && wrestler.potential >= 72))) {
      wrestler.breakout = true;
      wrestler.popularity = clamp(wrestler.popularity + 6);
      wrestler.weeklySalary = Math.round(wrestler.weeklySalary * 1.14);
      wrestler.salary = wrestler.weeklySalary;
      notes.push(`${wrestler.name} became a breakout PPV star!`);
      addNews(`${wrestler.name} became a breakout PPV star!`, "Fan reaction", "major");
    }
    wrestler.careerStage = getCareerStage(wrestler);
  });
  return notes;
}

function resolvePpvTitleMatch(belt, match, rating, moment) {
  const champion = belt.champion;
  const challenger = match.wrestlerA === champion ? match.wrestlerB : match.wrestlerA;
  const upset = moment === "title upset" || (rating >= 4.4 && Math.random() < 0.38);
  const winner = upset ? challenger : champion;
  const qualityDelta = rating >= 4.1 ? 9 : rating >= 3 ? 4 : -7;
  belt.prestige = clamp(belt.prestige + qualityDelta, 0, 100);
  if (winner === champion) {
    belt.defenses += 1;
    roster[winner].titleDefenses += 1;
    legacyData.titlesDefended += 1;
    addLegacyPoints(winner, 14 + Math.round(rating * 2), `${belt.name} PPV defense`);
    trackLegacyRecord("longestTitleReigns", {
      title: `${roster[winner].name} - ${belt.name}`,
      label: "Title Reign",
      score: belt.defenses,
      note: `${belt.defenses} successful defense${belt.defenses === 1 ? "" : "s"}.`
    }, "score");
    roster[winner].morale = clamp(roster[winner].morale + 7);
    roster[winner].merchMomentum = clamp((roster[winner].merchMomentum || 50) + 5);
    belt.history.push(`${roster[winner].name} retained at ${ppvCard?.eventName || currentPpvEvent || "a big event"}. Prestige ${signed(qualityDelta)}.`);
    trimTitleHistory(belt);
    return { text: `${roster[winner].name} retained ${belt.name}.`, winnerIndex: winner };
  }
  const oldName = roster[champion]?.name || "Vacant";
  belt.champion = winner;
  belt.defenses = 0;
  roster[winner].titleWins += 1;
  playTitleWin();
  addLegacyPoints(winner, 25 + Math.round(rating * 3), `${belt.name} PPV title win`);
  if (roster[champion]) addLegacyPoints(champion, 6, `${belt.name} PPV reign ended`);
  roster[winner].morale = clamp(roster[winner].morale + 10);
  roster[winner].popularity = clamp(roster[winner].popularity + 5);
  roster[winner].merchMomentum = clamp((roster[winner].merchMomentum || 50) + 15);
  roster[winner].merchPopularity = clamp((roster[winner].merchPopularity || 50) + 8);
  if (roster[champion]) roster[champion].morale = clamp(roster[champion].morale - 5);
  belt.history.push(`${roster[winner].name} upset ${oldName} at ${currentPpvEvent || "a big event"}. Prestige ${signed(qualityDelta)}.`);
  trimTitleHistory(belt);
  return { text: `New champion: ${roster[winner].name}.`, winnerIndex: winner };
}

function applyPpvBusinessEffects(grade, averageRating) {
  const moraleDelta = grade === "A" ? 6 : grade === "B" ? 3 : grade === "C" ? 1 : grade === "D" ? -3 : -7;
  const popularityDelta = grade === "A" ? 7 : grade === "B" ? 4 : grade === "C" ? 1 : grade === "D" ? -4 : -8;
  companyPopularity = clamp(companyPopularity + popularityDelta);
  roster.forEach(wrestler => {
    if (wrestler.active !== false) wrestler.morale = clamp(wrestler.morale + moraleDelta);
  });
  championships.forEach(belt => {
    belt.prestige = clamp(belt.prestige + (averageRating >= 4 ? 3 : averageRating < 2.5 ? -4 : 1), 0, 100);
  });
  rivalPromotions.forEach(rival => {
    rival.popularity = clamp(rival.popularity + (grade === "A" ? -2 : grade === "F" ? 4 : grade === "D" ? 2 : 0));
  });
  ticketMomentum = Math.max(0.75, Math.min(1.8, ticketMomentum + (grade === "A" ? 0.12 : grade === "B" ? 0.06 : grade === "D" ? -0.07 : grade === "F" ? -0.12 : 0.02)));
}

function renderPpvResults() {
  if (!lastPpvResult) return;
  document.getElementById("ppvResultTitle").textContent = lastPpvResult.eventName;
  document.getElementById("ppvResultSummary").textContent = `${lastPpvResult.eventName} closed with a ${lastPpvResult.grade} grade and ${lastPpvResult.averageRating.toFixed(1)}★ average.`;
  document.getElementById("ppvResultList").innerHTML = lastPpvResult.results.map(result => `
    <article class="ppv-result-card">
      <span class="match-slot">${result.slot}</span>
      <h3>${result.headline}</h3>
      ${result.title ? `<p class="title-result">${result.title}</p>` : ""}
      <div class="ppv-match-meta">
        <span>Rating <strong>${result.rating.toFixed(1)}★</strong></span>
        <span>Crowd <strong>${result.crowd}</strong></span>
        <span>Revenue <strong>${moneyText(result.revenue)}</strong></span>
        <span>Winner <strong>${result.winnerName}</strong></span>
      </div>
      ${result.titleResult ? `<p>${result.titleResult}</p>` : ""}
      ${result.moment ? `<p class="commentary">Special moment: ${result.moment.toUpperCase()}</p>` : ""}
      ${Number.isInteger(result.winnerIndex) ? `<button class="finisher-result-btn" type="button" data-finisher-index="${result.winnerIndex}">View Winner Finisher</button>` : ""}
      ${result.growthNotes?.length ? `<p class="positive">${result.growthNotes.join(" ")}</p>` : ""}
      ${result.injury ? `<p class="negative">Injury scare hurt morale backstage.</p>` : ""}
    </article>
  `).join("");
  bindFinisherButtons(document.getElementById("ppvResultList"));
  document.getElementById("ppvBusinessSummary").innerHTML = `
    <div class="report-line"><span>Total Revenue</span><strong>${moneyText(lastPpvResult.totalRevenue)}</strong></div>
    <div class="report-line"><span>Company Money</span><strong>${moneyText(money)}</strong></div>
    <div class="report-line"><span>PPV Grade</span><strong>${lastPpvResult.grade}</strong></div>
    <div class="report-line"><span>Top Match</span><strong>${lastPpvResult.topMatch}</strong></div>
    ${lastPpvResult.audienceReport ? `<div class="report-line"><span>Audience Ticket Impact</span><strong class="${lastPpvResult.audienceReport.revenueImpact >= 0 ? "positive" : "negative"}">${moneyText(lastPpvResult.audienceReport.revenueImpact)}</strong></div>` : ""}
    ${lastPpvResult.audienceReport ? `<div class="report-line"><span>Hottest Audience</span><strong>${lastPpvResult.audienceReport.top}</strong></div>` : ""}
    ${lastPpvResult.chaosEvent ? `<div class="report-line"><span>PPV Crisis</span><strong>${lastPpvResult.chaosEvent.title}</strong></div>` : ""}
    <div class="report-line"><span>Booker Commission</span><strong>${moneyText(bookerProfile.weeklyCommission)}</strong></div>
    <div class="report-line"><span>Job Security</span><strong>${Math.round(bookerProfile.jobSecurity)}</strong></div>
    <div class="report-line"><span>Company Popularity</span><strong>${Math.round(companyPopularity)}</strong></div>
    <div class="report-line"><span>Future Ticket Momentum</span><strong>${Math.round(ticketMomentum * 100)}%</strong></div>
    ${lastPpvResult.pressurePenalty ? `<div class="report-line"><span>Rival Pressure Penalty</span><strong class="negative">-${moneyText(lastPpvResult.pressurePenalty)}</strong></div>` : ""}
  `;
  if (lastPpvResult.chaosEvent) {
    document.getElementById("ppvBusinessSummary").insertAdjacentHTML("beforeend", `<div class="chaos-panel">${renderChaosCard(lastPpvResult.chaosEvent, true)}</div>`);
    bindChaosChoiceButtons(document.getElementById("ppvBusinessSummary"));
  }
}

function finalBookerGrade() {
  const score = bookerProfile.reputation * 0.35
    + bookerProfile.jobSecurity * 0.25
    + bookerProfile.fanTrust * 0.15
    + bookerProfile.lockerRoomRespect * 0.15
    + Math.min(100, money / 2500) * 0.1;
  if (score >= 85) return "A";
  if (score >= 70) return "B";
  if (score >= 55) return "C";
  if (score >= 38) return "D";
  return "F";
}

function bestCompletedFeud() {
  if (!completedFeuds.length) return "None completed";
  return completedFeuds.reduce((best, feud) => (feud.rating || 0) > (best.rating || 0) ? feud : best, completedFeuds[0]).names || "None completed";
}

function worstCompletedFeud() {
  if (!completedFeuds.length) return "None completed";
  return completedFeuds.reduce((worst, feud) => (feud.rating || 5) < (worst.rating || 5) ? feud : worst, completedFeuds[0]).names || "None completed";
}

function renderFiredScreen() {
  document.getElementById("gameOverTitle").textContent = "You were fired as Head Booker of RDGP.";
  document.getElementById("gameOverReason").textContent = firedReason || "The board decided the booking empire needed new leadership.";
  document.getElementById("firedReport").innerHTML = `
    <div class="report-line"><span>Final Company Money</span><strong>${moneyText(money)}</strong></div>
    <div class="report-line"><span>Total Salary Earned</span><strong>${moneyText(bookerProfile.salaryEarned)}</strong></div>
    <div class="report-line"><span>Best Feud</span><strong>${bestCompletedFeud()}</strong></div>
    <div class="report-line"><span>Worst Feud</span><strong>${worstCompletedFeud()}</strong></div>
    <div class="report-line"><span>Final Reputation</span><strong>${Math.round(bookerProfile.reputation)}</strong></div>
    <div class="report-line"><span>Weeks Survived</span><strong>${Math.max(bookerProfile.weeksSurvived, gameWeek - 1)}</strong></div>
    <div class="report-line"><span>Final Grade</span><strong>${finalBookerGrade()}</strong></div>
  `;
}

function fireBooker(reason) {
  firedReason = reason;
  renderFiredScreen();
  show("gameOver");
  saveGame("gameOver");
}

function resetGame() {
  money = 100000;
  roster.forEach(w => {
    w.active = true;
    w.morale = clamp(w.morale + 12);
    w.age = inferStartingAge(w);
    w.momentum = Math.round((w.popularity + w.morale) / 2);
    w.fatigue = 0;
    w.injuryWeeks = 0;
    w.lossStreak = 0;
    w.breakout = false;
    w.careerStage = getCareerStage(w);
    w.merchPopularity = clamp(Math.round(w.popularity * 0.65 + w.crowdConnection * 0.25 + w.momentum * 0.1));
    w.merchSales = 0;
    w.merchMomentum = clamp(Math.round(w.momentum * 0.7 + w.morale * 0.3));
    w.localPopularity = clamp(Math.round(w.popularity * 0.55 + w.crowdConnection * 0.35 + (w.alignment === "Face" ? 5 : 0)));
    w.nationalPopularity = clamp(Math.round(w.popularity * 0.75 + w.charisma * 0.15 + w.ringSkill * 0.1));
    w.onlinePopularity = clamp(Math.round(w.popularity * 0.45 + w.charisma * 0.38 + w.momentum * 0.17));
    w.rankingPoints = Math.round(w.popularity * 0.45 + w.ringSkill * 0.25 + w.momentum * 0.2 + w.morale * 0.1);
    w.currentRank = 0;
    w.previousRank = 0;
    w.winLossRecord = { wins: 0, losses: 0 };
    w.contenderStatus = "Unranked";
    w.legacyPoints = Math.round(w.popularity * 0.35 + w.momentum * 0.25 + w.ringSkill * 0.2 + w.charisma * 0.2);
    w.titleWins = 0;
    w.titleDefenses = 0;
    w.ppvMainEvents = 0;
    w.highRatedFeuds = 0;
    w.viralPromos = 0;
    w.legendaryRivalries = 0;
  });
  selected = [];
  activeFeud = null;
  chosenWeeklyAngle = null;
  chosenSegment = null;
  lastResult = null;
  history = [];
  gameWeek = 1;
  weeksUntilPpv = 4;
  currentPpvEvent = null;
  ppvCard = null;
  lastPpvResult = null;
  ticketMomentum = 1;
  companyPopularity = 55;
  bookerProfile = defaultBookerProfile();
  pendingBoardReview = null;
  firedReason = "";
  recentAdviceHistory = [];
  previousScreenBeforeCreative = "title";
  activeSponsor = null;
  sponsorOffers = [];
  weeklyMerchRevenue = 0;
  sponsorHistory = [];
  resetTagTeams();
  resetAudiences();
  resetChaos();
  legacyData = defaultLegacyData();
  ppvHype = { averageHeat: 0, bestRivalry: "None yet", audienceMomentum: 0 };
  pendingPoach = null;
  pendingWorldEvent = null;
  newsItems = [{ week: 1, category: "RDGP company news", headline: "RDGP front office is watching the ratings war.", priority: "normal" }];
  newsFeed = newsItems.map(item => item.headline);
  hallOfLegends = [];
  renderRoster();
  recalculateRankings(true);
  show("title");
}

document.getElementById("startBtn").addEventListener("click", () => {
  unlockAudio();
  playMusic();
  selected = [];
  activeFeud = null;
  chosenWeeklyAngle = null;
  chosenSegment = null;
  lastResult = null;
  history = [];
  renderRoster();
  show("roster");
});
document.getElementById("championshipsBtn").addEventListener("click", () => {
  renderChampionships();
  show("championships");
});
document.getElementById("newsBtn").addEventListener("click", () => {
  renderNewsScreen();
  show("news");
});
document.getElementById("merchSponsorsBtn").addEventListener("click", () => {
  renderMerchSponsors();
  show("merchSponsors");
});
document.getElementById("rankingsBtn").addEventListener("click", () => {
  renderRankings();
  show("rankings");
});
document.getElementById("tagTeamsBtn").addEventListener("click", () => {
  renderTagTeams();
  show("tagTeams");
});
document.getElementById("audienceBtn").addEventListener("click", () => {
  renderAudienceAnalytics();
  show("audience");
});
document.getElementById("chaosBtn").addEventListener("click", () => {
  renderChaosDesk();
  show("chaos");
});
document.getElementById("helpBtn").addEventListener("click", () => show("help"));
document.getElementById("creativeTeamBtn").addEventListener("click", openCreativeTeam);
document.getElementById("bookerOfficeBtn").addEventListener("click", () => {
  renderBookerOffice();
  show("bookerOffice");
});
document.getElementById("contractsBtn").addEventListener("click", () => {
  renderContracts();
  show("contracts");
});
document.getElementById("legendsBtn").addEventListener("click", () => {
  renderLegends();
  show("legends");
});
document.getElementById("backTitleFromBeltsBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromMerchBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromRankingsBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromTagsBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromAudienceBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromChaosBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromNewsBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromHelpBtn").addEventListener("click", () => show("title"));
document.getElementById("backFromCreativeBtn").addEventListener("click", closeCreativeTeam);
document.getElementById("backTitleFromBookerBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromContractsBtn").addEventListener("click", () => show("title"));
document.getElementById("backTitleFromLegendsBtn").addEventListener("click", () => show("title"));
document.getElementById("continueSaveBtn").addEventListener("click", () => {
  unlockAudio();
  playMusic();
  loadGame();
});
document.getElementById("deleteSaveBtn").addEventListener("click", deleteSave);
document.getElementById("soundBtn").addEventListener("click", toggleSound);
document.getElementById("toFeudBtn").addEventListener("click", setupFeudScreen);
document.getElementById("backRosterBtn").addEventListener("click", () => show("roster"));
document.getElementById("createFeudBtn").addEventListener("click", createFeud);
document.getElementById("createTagTeamBtn").addEventListener("click", createTagTeam);
document.getElementById("bookingCreativeBtn").addEventListener("click", openCreativeTeam);
document.getElementById("refreshAdviceBtn").addEventListener("click", () => {
  renderCreativeTeam();
  saveGame("creativeTeam");
});
document.getElementById("runWeekBtn").addEventListener("click", runWeek);
document.getElementById("continueBtn").addEventListener("click", continueAfterResults);
document.getElementById("continueBoardBtn").addEventListener("click", finishBoardReview);
document.getElementById("bookPpvBtn").addEventListener("click", preparePpvBooking);
document.getElementById("backRosterFromPpvBtn").addEventListener("click", () => {
  show("roster");
  saveGame("roster");
});
document.getElementById("runPpvBtn").addEventListener("click", runPpvEvent);
document.getElementById("ppvBackRosterBtn").addEventListener("click", () => {
  renderRoster();
  show("roster");
  saveGame("roster");
});
document.getElementById("nextMonthBtn").addEventListener("click", () => {
  if (activeFeud) {
    showBooking();
    saveGame("booking");
  } else {
    renderRoster();
    show("roster");
    saveGame("roster");
  }
});
document.getElementById("newFeudBtn").addEventListener("click", () => {
  selected = [];
  activeFeud = null;
  chosenWeeklyAngle = null;
  chosenSegment = null;
  lastResult = null;
  history = [];
  renderRoster();
  show("roster");
  saveGame("roster");
});
document.getElementById("restartBtn").addEventListener("click", resetGame);
document.getElementById("startTutorialBtn").addEventListener("click", startTutorial);
document.getElementById("skipTutorialBtn").addEventListener("click", () => closeTutorialPrompt(true));
document.getElementById("restartTutorialBtn").addEventListener("click", startTutorial);
document.getElementById("tutorialNextBtn").addEventListener("click", nextTutorialTip);
document.getElementById("tutorialDoneBtn").addEventListener("click", finishTutorial);
document.getElementById("closeFinisherModal").addEventListener("click", closeFinisherPreview);
document.getElementById("finisherModal").addEventListener("click", event => {
  if (event.target.id === "finisherModal") closeFinisherPreview();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeFinisherPreview();
});
window.addEventListener("resize", () => {
  if (tutorialActive && tutorialHighlight) positionTutorialTip(tutorialHighlight);
});

document.addEventListener("pointerdown", event => {
  const button = event.target.closest("button");
  if (!button || button.id === "soundBtn") return;
  unlockAudio();
  playClick();
}, { passive: true });

renderRoster();
recalculateRankings(true);
updateMoney();
updateSoundButton();
updateContinueButton();
maybeShowTutorialPrompt();
