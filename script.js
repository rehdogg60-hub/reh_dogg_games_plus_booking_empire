const screens = {
  title: document.getElementById("titleScreen"),
  championships: document.getElementById("championshipsScreen"),
  roster: document.getElementById("rosterScreen"),
  feud: document.getElementById("feudScreen"),
  booking: document.getElementById("bookingScreen"),
  results: document.getElementById("resultsScreen"),
  final: document.getElementById("finalReportScreen"),
  ppvBooking: document.getElementById("ppvBookingScreen"),
  ppvResults: document.getElementById("ppvResultsScreen"),
  gameOver: document.getElementById("gameOverScreen")
};

const roster = [
  { name: "Super Dragon Fly", gender: "Male", alignment: "Face", popularity: 74, charisma: 82, ringSkill: 78, stamina: 86, morale: 82, weakness: "Overconfidence", strength: "High-flying comebacks", finisher: "Sky Spiral Splash", emoji: "🐉", image: "images/super-dragon-fly.png", colors: ["#1f83ff", "#2dff85"] },
  { name: "Iron Duchess", gender: "Female", alignment: "Heel", popularity: 69, charisma: 88, ringSkill: 81, stamina: 77, morale: 76, weakness: "Short temper", strength: "Commanding promos", finisher: "Royal Iron Lock", emoji: "👑", image: "images/iron-duchess.png", colors: ["#ff2e41", "#ffd84f"] },
  { name: "The Midnight Bruiser", gender: "Male", alignment: "Heel", popularity: 80, charisma: 71, ringSkill: 75, stamina: 84, morale: 70, weakness: "Low patience", strength: "Brawling chaos", finisher: "Midnight Hammer", emoji: "🌙", image: "images/midnight-bruiser.png", colors: ["#1b1e3f", "#ff2e41"] },
  { name: "Velvet Storm", gender: "Female", alignment: "Face", popularity: 77, charisma: 91, ringSkill: 70, stamina: 72, morale: 84, weakness: "Risky dives", strength: "Crowd connection", finisher: "Velvet Thunder", emoji: "⚡", image: "images/velvet-storm.png", colors: ["#ff4fd8", "#72d7ff"] },
  { name: "Titan Rex", gender: "Male", alignment: "Face", popularity: 85, charisma: 67, ringSkill: 83, stamina: 88, morale: 79, weakness: "Stiff interviews", strength: "Power matches", finisher: "Rex Breaker", emoji: "🦖", image: "images/titan-rex.png", colors: ["#2dff85", "#ffd84f"] },
  { name: "Lady Voltage", gender: "Female", alignment: "Heel", popularity: 72, charisma: 84, ringSkill: 76, stamina: 80, morale: 75, weakness: "Too flashy", strength: "Electric entrances", finisher: "Voltage Drop", emoji: "🔌", image: "images/lady-voltage.png", colors: ["#72d7ff", "#ff2e41"] },
  { name: "The Saint of Pain", gender: "Male", alignment: "Heel", popularity: 78, charisma: 79, ringSkill: 86, stamina: 73, morale: 68, weakness: "Dark pacing", strength: "Submission drama", finisher: "Final Confession", emoji: "🕯️", image: "images/saint-of-pain.png", colors: ["#5b2dff", "#ff2e41"] },
  { name: "Neon Panther", gender: "Female", alignment: "Face", popularity: 83, charisma: 86, ringSkill: 79, stamina: 90, morale: 88, weakness: "Reckless speed", strength: "Explosive offense", finisher: "Neon Pounce", emoji: "🐆", image: "images/neon-panther.png", colors: ["#2dff85", "#5b2dff"] },
  { name: "Big Harbor King", gender: "Male", alignment: "Face", popularity: 66, charisma: 74, ringSkill: 72, stamina: 91, morale: 81, weakness: "Slow starts", strength: "Comeback energy", finisher: "Dockside Slam", emoji: "⚓", image: "images/big-harbor-king.png", colors: ["#1f83ff", "#ffd84f"] },
  { name: "Queen Viper", gender: "Female", alignment: "Heel", popularity: 88, charisma: 93, ringSkill: 84, stamina: 76, morale: 72, weakness: "Political games", strength: "Main-event heat", finisher: "Viper Crown", emoji: "🐍", image: "images/queen-viper.png", colors: ["#ff2e41", "#2dff85"] }
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
let pendingPoach = null;
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

const SAVE_KEY = "bookingEmpireV02Save";

const audio = {
  enabled: localStorage.getItem("bookingEmpireSound") !== "off",
  musicActive: false,
  unlocked: false,
  music: new Audio("sounds/menu_theme.mp3"),
  click: new Audio("sounds/click.mp3"),
  crowd: new Audio("sounds/crowd.mp3")
};

audio.music.loop = true;
audio.music.volume = 0.22;
audio.click.volume = 1;
audio.crowd.volume = 1;
Object.values(audio).forEach(sound => {
  if (sound instanceof Audio) sound.preload = "auto";
});

roster.forEach(wrestler => {
  wrestler.salary = wrestler.salary || Math.round(2200 + wrestler.popularity * 95 + wrestler.ringSkill * 28);
  wrestler.loyalty = wrestler.loyalty || clamp(Math.round((wrestler.morale + wrestler.stamina) / 2));
  wrestler.contractLength = wrestler.contractLength || (wrestler.popularity >= 82 ? 4 : 6);
  wrestler.active = wrestler.active !== false;
  wrestler.promoSkill = wrestler.promoSkill || clamp(Math.round((wrestler.charisma * 0.75) + (wrestler.popularity * 0.25)));
  wrestler.aggression = wrestler.aggression || clamp(Math.round((100 - wrestler.morale) * 0.35 + wrestler.ringSkill * 0.35 + (wrestler.alignment === "Heel" ? 18 : 8)));
  wrestler.ego = wrestler.ego || clamp(Math.round(wrestler.popularity * 0.55 + wrestler.charisma * 0.25 + (wrestler.alignment === "Heel" ? 18 : 5)));
  wrestler.crowdConnection = wrestler.crowdConnection || clamp(Math.round(wrestler.popularity * 0.55 + wrestler.charisma * 0.35 + (wrestler.alignment === "Face" ? 8 : 0)));
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

function toggleSound() {
  unlockAudio();
  playClick();
  if (audio.enabled && audio.musicActive) {
    audio.music.pause();
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

function setResultsMusicDuck(ducked) {
  audio.music.volume = ducked ? 0.12 : 0.22;
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
      loyalty: w.loyalty,
      contractLength: w.contractLength,
      active: w.active,
      promoSkill: w.promoSkill,
      aggression: w.aggression,
      ego: w.ego,
      crowdConnection: w.crowdConnection
    })),
    activeFeud,
    championships,
    rivalPromotions,
    newsFeed,
    pendingPoach,
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
        roster[index].salary = Number(contract.salary) || roster[index].salary;
        roster[index].loyalty = clamp(Number(contract.loyalty) || roster[index].loyalty);
        roster[index].contractLength = Math.max(0, Number(contract.contractLength) || roster[index].contractLength);
        roster[index].active = contract.active !== false;
        roster[index].promoSkill = clamp(Number(contract.promoSkill) || roster[index].promoSkill);
        roster[index].aggression = clamp(Number(contract.aggression) || roster[index].aggression);
        roster[index].ego = clamp(Number(contract.ego) || roster[index].ego);
        roster[index].crowdConnection = clamp(Number(contract.crowdConnection) || roster[index].crowdConnection);
      });
    }
    feudHistory = data.feudHistory || {};
    completedFeuds = Array.isArray(data.completedFeuds) ? data.completedFeuds : [];
    if (Array.isArray(data.rivalPromotions)) restoreRivals(data.rivalPromotions);
    newsFeed = Array.isArray(data.newsFeed) && data.newsFeed.length ? data.newsFeed : newsFeed;
    pendingPoach = data.pendingPoach || null;
    ppvHype = data.ppvHype || ppvHype;
    gameWeek = Math.max(1, Number(data.gameWeek) || 1);
    weeksUntilPpv = clamp(Number(data.weeksUntilPpv ?? 4), 0, 4);
    currentPpvEvent = data.currentPpvEvent || null;
    ppvCard = data.ppvCard || null;
    lastPpvResult = data.lastPpvResult || null;
    ticketMomentum = Math.max(0.7, Math.min(1.8, Number(data.ticketMomentum) || 1));
    companyPopularity = clamp(Number(data.companyPopularity) || companyPopularity);
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
    show("gameOver");
    return;
  }
  if (activeFeud && savedScreen === "results" && lastResult) {
    showResults(false);
    return;
  }
  if (savedScreen === "final") {
    show("final");
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
    if (Number.isInteger(saved.champion) && roster[saved.champion]) belt.champion = saved.champion;
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
  grid.innerHTML = championships.map(belt => {
    const champion = roster[belt.champion];
    const history = belt.history.length
      ? belt.history.slice(-4).reverse().map(item => `<li>${item}</li>`).join("")
      : "<li>No title history yet.</li>";
    return `
      <article class="belt-card belt-${belt.id}">
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
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  currentScreen = name;
  updateMoney();
  if (name !== "results") setResultsMusicDuck(false);
}

function updateMoney() {
  document.getElementById("rosterMoney").textContent = moneyText(money);
  document.getElementById("bookingMoney").textContent = moneyText(money);
  updatePpvPanel();
  updateNewsTicker();
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
  ticker.textContent = newsFeed.slice(-4).join(" • ");
}

function addNews(headline) {
  newsFeed.push(headline);
  newsFeed = newsFeed.slice(-12);
  updateNewsTicker();
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

function renderRoster() {
  const grid = document.getElementById("rosterGrid");
  grid.innerHTML = "";
  roster.forEach((wrestler, index) => {
    if (wrestler.active === false) return;
    const card = document.createElement("article");
    card.className = `wrestler-card ${selected.includes(index) ? "selected" : ""}`;
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
        <div class="mini-stat">Finisher <strong>${wrestler.finisher}</strong></div>
        <div class="mini-stat">Contract <strong>${wrestler.contractLength} wk</strong></div>
        <div class="mini-stat">Salary <strong>${moneyText(wrestler.salary)}</strong></div>
        <div class="mini-stat">Loyalty <strong>${wrestler.loyalty}</strong></div>
        <div class="mini-stat">Promo <strong>${wrestler.promoSkill}</strong></div>
        <div class="mini-stat">Crowd <strong>${wrestler.crowdConnection}</strong></div>
      </div>
      <p><strong>Strength:</strong> ${wrestler.strength}</p>
      <p><strong>Weakness:</strong> ${wrestler.weakness}</p>
      <div class="finisher-panel" aria-label="${wrestler.finisher} finisher preview">
        <div class="finisher-media" data-video-mp4="" data-video-webm="" data-gif="">
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
    card.addEventListener("click", () => toggleSelect(index));
    grid.appendChild(card);
  });
  document.getElementById("selectedCount").textContent = `${selected.length} / 2 selected`;
  document.getElementById("toFeudBtn").disabled = selected.length !== 2;
}

function toggleSelect(index) {
  if (selected.includes(index)) {
    selected = selected.filter(i => i !== index);
  } else if (selected.length < 2 && roster[index].active !== false) {
    selected.push(index);
  }
  renderRoster();
  if (currentScreen === "roster") saveGame("roster");
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
  document.getElementById("feudPreview").innerHTML = `
    <h3>Projected Feud</h3>
    <p>${a.name} (${a.alignment}) vs ${b.name} (${b.alignment})</p>
    ${belt ? `<p class="title-feud-badge">Title Feud: <strong>${belt.name}</strong> (${prestigeLabel(belt.prestige)})</p>` : ""}
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
  const result = applyWeeklyAngle(chosenWeeklyAngle);
  const segmentResult = applyWeeklySegment(chosenSegment);
  const event = rollWeeklyEvent();
  applyContractWeek();
  const rivalReport = generateRivalRatings();
  pendingPoach = checkPoachingInterest();
  const belt = getActiveTitle();
  const baseIncome = activeFeud.heat * 500 * (belt ? titleRevenueMultiplier(belt) : 1);
  const riskPenalty = activeFeud.risk * 200;
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  const moralePenalty = a.morale < 35 || b.morale < 35 ? 5000 : 0;
  const buzzBonus = segmentResult.buzzScore >= 105 ? 9000 : segmentResult.buzzScore >= 82 ? 4500 : segmentResult.buzzScore < 45 ? -2500 : 0;
  const moneyResult = Math.round(baseIncome - riskPenalty - moralePenalty + event.money + buzzBonus);
  money += moneyResult;
  activeFeud.totalRevenue += moneyResult;
  result.text = `${result.text} ${segmentResult.text}`;
  result.heatChange += segmentResult.heatChange;
  result.riskChange += segmentResult.riskChange;
  result.moraleA += segmentResult.moraleA;
  result.moraleB += segmentResult.moraleB;
  result.segment = segmentResult;
  result.money = moneyResult;
  result.event = event;
  result.rivalReport = rivalReport;
  result.poach = pendingPoach;
  result.showName = weeklyShowNames[(activeFeud.currentWeek + completedFeuds.length) % weeklyShowNames.length];
  result.crowd = calculateCrowdReaction(chosenWeeklyAngle, chosenSegment, segmentResult);
  result.rating = calculateWeeklyRating(chosenWeeklyAngle, chosenSegment, result.crowd.score, segmentResult);
  result.commentary = pickCommentary(moneyResult, result.heatChange, activeFeud.risk, result.rating, result.crowd.level);
  history.push({ angle: chosenWeeklyAngle, segment: chosenSegment, ...result });
  updateDecisionRecords(chosenWeeklyAngle, moneyResult);
  lastResult = result;
  advancePpvCalendar(result);

  if (money <= 0) {
    show("gameOver");
    saveGame("gameOver");
    return;
  }
  showResults(false);
  saveGame("results");
}

function applyContractWeek() {
  roster.forEach(wrestler => {
    if (wrestler.active === false) return;
    wrestler.contractLength = Math.max(0, wrestler.contractLength - 1);
    money -= Math.round(wrestler.salary * 0.18);
    if (wrestler.contractLength <= 1) {
      wrestler.loyalty = clamp(wrestler.loyalty - 4);
      addNews(`${wrestler.name} is nearing the end of their RDGP contract.`);
    }
  });
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
    <div class="result-line"><span>Money Result</span><strong class="${lastResult.money >= 0 ? "positive" : "negative"}">${moneyText(lastResult.money)}</strong></div>
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
  ` : "";
  renderRivalPanel(lastResult.rivalReport);
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
    } else {
      wrestler.loyalty = clamp(wrestler.loyalty - 5);
      addNews(`${wrestler.name} stayed for now, but morale remains shaky.`);
    }
  }
  pendingPoach = null;
  renderPoachPanel(null);
  renderRoster();
  updateMoney();
  saveGame(currentScreen);
}

function firstEligibleChampion(belt) {
  const index = roster.findIndex(wrestler => wrestler.active !== false && (belt.division === "Open" || wrestler.gender === belt.division));
  return index >= 0 ? index : 0;
}

function continueAfterResults() {
  if (pendingPoach) {
    showSaveMessage("Resolve the talent watch decision first.");
    return;
  }
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
  const belt = getActiveTitle();
  const finalRevenue = Math.round((finalRating * 22000 + activeFeud.heat * 450 - activeFeud.risk * 280) * (belt ? titleRevenueMultiplier(belt) : 1));
  money += finalRevenue;
  activeFeud.totalRevenue += finalRevenue;
  if (money <= 0) {
    show("gameOver");
    saveGame("gameOver");
    return;
  }

  const grade = finalRating >= 4.5 ? "A" : finalRating >= 3.6 ? "B" : finalRating >= 2.7 ? "C" : finalRating >= 1.8 ? "D" : "F";
  const titleResult = belt ? resolveTitlePayoff(belt, finalRating) : null;
  updateFeudHistory(finalRating);
  updatePpvHype(finalRating);
  document.getElementById("finalTitle").textContent = `${a.name} vs ${b.name}`;
  document.getElementById("finalReport").innerHTML = `
    <div class="report-line"><span>Ending</span><strong>${activeFeud.ending}</strong></div>
    <p class="kayfabe">${endingText}</p>
    ${titleResult ? `<div class="report-line title-result"><span>${belt.name}</span><strong>${titleResult}</strong></div>` : ""}
    <div class="report-line"><span>Final Rating</span><strong>${finalRating.toFixed(1)} / 5 stars</strong></div>
    <div class="report-line"><span>Total Revenue</span><strong>${moneyText(activeFeud.totalRevenue)}</strong></div>
    <div class="report-line"><span>Final Company Money</span><strong>${moneyText(money)}</strong></div>
    <div class="report-line"><span>Best Decision</span><strong>${activeFeud.bestDecision?.angle || "None"} (${moneyText(activeFeud.bestDecision?.money || 0)})</strong></div>
    <div class="report-line"><span>Worst Decision</span><strong>${activeFeud.worstDecision?.angle || "None"} (${moneyText(activeFeud.worstDecision?.money || 0)})</strong></div>
    <div class="report-line"><span>Monthly PPV Hype</span><strong>${Math.round(ppvHype.audienceMomentum)}</strong></div>
    <div class="report-line"><span>Best Rivalry</span><strong>${ppvHype.bestRivalry}</strong></div>
    <div class="report-line"><span>Booker Grade</span><strong>${grade}</strong></div>
  `;
  show("final");
  saveGame("final");
  playCrowdPop();
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
    roster[winner].morale = clamp(roster[winner].morale + 7);
    belt.history.push(`${winnerName} defended against ${roster[loser].name}. Prestige ${signed(qualityDelta)}.`);
    trimTitleHistory(belt);
    return `${winnerName} retained. ${prestigeLabel(belt.prestige)}.`;
  }

  belt.champion = winner;
  belt.defenses = 0;
  roster[winner].morale = clamp(roster[winner].morale + 9);
  roster[winner].popularity = clamp(roster[winner].popularity + 5);
  if (roster[oldChampion]) roster[oldChampion].morale = clamp(roster[oldChampion].morale - 5);
  belt.history.push(`${winnerName} defeated ${oldChampionName} to win the title. Prestige ${signed(qualityDelta)}.`);
  trimTitleHistory(belt);
  return `New champion: ${winnerName}. ${prestigeLabel(belt.prestige)}.`;
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
  if (money <= 0) {
    show("gameOver");
    saveGame("gameOver");
    return;
  }
  const grade = averageRating >= 4.5 ? "A" : averageRating >= 3.7 ? "B" : averageRating >= 2.9 ? "C" : averageRating >= 2.1 ? "D" : "F";
  applyPpvBusinessEffects(grade, averageRating);
  lastPpvResult = {
    eventName: ppvCard.eventName,
    results,
    totalRevenue: finalRevenue,
    averageRating: Number(averageRating.toFixed(1)),
    grade,
    topMatch: topMatch.headline,
    pressurePenalty
  };
  addNews(`${ppvCard.eventName} earned ${moneyText(finalRevenue)} with a ${grade} grade. Top match: ${topMatch.headline}.`);
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
    titleResult
  };
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
    roster[winner].morale = clamp(roster[winner].morale + 7);
    belt.history.push(`${roster[winner].name} retained at ${ppvCard?.eventName || currentPpvEvent || "a big event"}. Prestige ${signed(qualityDelta)}.`);
    trimTitleHistory(belt);
    return `${roster[winner].name} retained ${belt.name}.`;
  }
  const oldName = roster[champion]?.name || "Vacant";
  belt.champion = winner;
  belt.defenses = 0;
  roster[winner].morale = clamp(roster[winner].morale + 10);
  roster[winner].popularity = clamp(roster[winner].popularity + 5);
  if (roster[champion]) roster[champion].morale = clamp(roster[champion].morale - 5);
  belt.history.push(`${roster[winner].name} upset ${oldName} at ${currentPpvEvent || "a big event"}. Prestige ${signed(qualityDelta)}.`);
  trimTitleHistory(belt);
  return `New champion: ${roster[winner].name}.`;
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
      </div>
      ${result.titleResult ? `<p>${result.titleResult}</p>` : ""}
      ${result.moment ? `<p class="commentary">Special moment: ${result.moment.toUpperCase()}</p>` : ""}
      ${result.injury ? `<p class="negative">Injury scare hurt morale backstage.</p>` : ""}
    </article>
  `).join("");
  document.getElementById("ppvBusinessSummary").innerHTML = `
    <div class="report-line"><span>Total Revenue</span><strong>${moneyText(lastPpvResult.totalRevenue)}</strong></div>
    <div class="report-line"><span>Company Money</span><strong>${moneyText(money)}</strong></div>
    <div class="report-line"><span>PPV Grade</span><strong>${lastPpvResult.grade}</strong></div>
    <div class="report-line"><span>Top Match</span><strong>${lastPpvResult.topMatch}</strong></div>
    <div class="report-line"><span>Company Popularity</span><strong>${Math.round(companyPopularity)}</strong></div>
    <div class="report-line"><span>Future Ticket Momentum</span><strong>${Math.round(ticketMomentum * 100)}%</strong></div>
    ${lastPpvResult.pressurePenalty ? `<div class="report-line"><span>Rival Pressure Penalty</span><strong class="negative">-${moneyText(lastPpvResult.pressurePenalty)}</strong></div>` : ""}
  `;
}

function resetGame() {
  money = 100000;
  roster.forEach(w => { w.morale = clamp(w.morale + 12); });
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
  ppvHype = { averageHeat: 0, bestRivalry: "None yet", audienceMomentum: 0 };
  renderRoster();
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
document.getElementById("backTitleFromBeltsBtn").addEventListener("click", () => show("title"));
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
document.getElementById("runWeekBtn").addEventListener("click", runWeek);
document.getElementById("continueBtn").addEventListener("click", continueAfterResults);
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

document.addEventListener("pointerdown", event => {
  const button = event.target.closest("button");
  if (!button || button.id === "soundBtn") return;
  unlockAudio();
  playClick();
}, { passive: true });

renderRoster();
updateMoney();
updateSoundButton();
updateContinueButton();
