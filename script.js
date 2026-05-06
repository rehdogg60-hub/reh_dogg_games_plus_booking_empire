const screens = {
  title: document.getElementById("titleScreen"),
  championships: document.getElementById("championshipsScreen"),
  roster: document.getElementById("rosterScreen"),
  feud: document.getElementById("feudScreen"),
  booking: document.getElementById("bookingScreen"),
  results: document.getElementById("resultsScreen"),
  final: document.getElementById("finalReportScreen"),
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
let lastResult = null;
let history = [];
let currentScreen = "title";
let feudHistory = {};
let completedFeuds = [];
let ppvHype = {
  averageHeat: 0,
  bestRivalry: "None yet",
  audienceMomentum: 0
};

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
    activeFeud,
    championships,
    chosenWeeklyAngle,
    lastResult,
    history,
    feudHistory,
    completedFeuds,
    ppvHype,
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
    feudHistory = data.feudHistory || {};
    completedFeuds = Array.isArray(data.completedFeuds) ? data.completedFeuds : [];
    ppvHype = data.ppvHype || ppvHype;
    activeFeud = data.activeFeud && typeof data.activeFeud === "object" ? data.activeFeud : null;
    if (Array.isArray(data.championships)) restoreChampionships(data.championships);
    chosenWeeklyAngle = data.chosenWeeklyAngle || null;
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
}

function updatePpvPanel() {
  const hypeText = document.getElementById("ppvHypeText");
  const bestText = document.getElementById("ppvBestText");
  if (!hypeText || !bestText) return;
  hypeText.textContent = Math.round(ppvHype.audienceMomentum || 0);
  bestText.textContent = ppvHype.bestRivalry && ppvHype.bestRivalry !== "None yet"
    ? `Best rivalry: ${ppvHype.bestRivalry}`
    : "No completed rivalries yet.";
}

function renderRoster() {
  const grid = document.getElementById("rosterGrid");
  grid.innerHTML = "";
  roster.forEach((wrestler, index) => {
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
  } else if (selected.length < 2) {
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
  const wrap = document.getElementById("titleSelectWrap");
  const select = document.getElementById("titleSelect");
  const eligible = eligibleTitlesForSelection();
  titleFeud.disabled = eligible.length === 0;
  if (eligible.length === 0) titleFeud.checked = false;
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
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  document.getElementById("bookingTitle").textContent = `${a.name} vs ${b.name}`;
  document.getElementById("weekText").textContent = `${activeFeud.currentWeek} / ${activeFeud.feudLength}`;
  const belt = getActiveTitle();
  document.getElementById("planText").textContent = `${activeFeud.feudType} with ${activeFeud.angleStyle}. ${belt ? `${belt.name} is on the line. ` : ""}Planned ending: ${activeFeud.ending}.`;
  updateBars();
  renderMorale();
  renderWeeklyAngles();
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
      document.getElementById("runWeekBtn").disabled = false;
    });
    box.appendChild(btn);
  });
  document.getElementById("runWeekBtn").disabled = true;
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
  const event = rollWeeklyEvent();
  const belt = getActiveTitle();
  const baseIncome = activeFeud.heat * 500 * (belt ? titleRevenueMultiplier(belt) : 1);
  const riskPenalty = activeFeud.risk * 200;
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  const moralePenalty = a.morale < 35 || b.morale < 35 ? 5000 : 0;
  const moneyResult = Math.round(baseIncome - riskPenalty - moralePenalty + event.money);
  money += moneyResult;
  activeFeud.totalRevenue += moneyResult;
  result.money = moneyResult;
  result.event = event;
  result.showName = weeklyShowNames[(activeFeud.currentWeek + completedFeuds.length) % weeklyShowNames.length];
  result.crowd = calculateCrowdReaction(chosenWeeklyAngle);
  result.rating = calculateWeeklyRating(chosenWeeklyAngle, result.crowd.score);
  result.commentary = pickCommentary(moneyResult, result.heatChange, activeFeud.risk, result.rating, result.crowd.level);
  history.push({ angle: chosenWeeklyAngle, ...result });
  updateDecisionRecords(chosenWeeklyAngle, moneyResult);
  lastResult = result;

  if (money <= 0) {
    show("gameOver");
    saveGame("gameOver");
    return;
  }
  showResults(false);
  saveGame("results");
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

function calculateCrowdReaction(angle) {
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  let score = activeFeud.heat + ((a.popularity + b.popularity) / 2) * 0.35;
  if (a.alignment !== b.alignment) score += 12;
  if (a.alignment === b.alignment && activeFeud.feudType !== "Respect Rivalry" && activeFeud.feudType !== "Betrayal") score -= 10;
  if (angle === "Heated Promo") score += ((a.charisma + b.charisma) / 2 - 60) * 0.35;
  if (angle === "Cheating Finish" && (a.alignment === "Heel" || b.alignment === "Heel")) score += 8;
  if (angle === "Emotional Interview" && (a.alignment === "Face" || b.alignment === "Face")) score += 7;
  score = clamp(score, 0, 130);
  let level = "Dead Crowd";
  if (score >= 105) level = "Nuclear Heat";
  else if (score >= 88) level = "Huge Pop";
  else if (score >= 68) level = "Good Reaction";
  else if (score >= 45) level = "Mild Interest";
  return { level, score };
}

function calculateWeeklyRating(angle, crowdScore) {
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
  document.getElementById("eventPanel").innerHTML = lastResult.event ? `
    <strong>Backstage Event: ${lastResult.event.title}</strong>
    <p>${lastResult.event.text}</p>
    <small>Heat ${signed(lastResult.event.heat)} | Risk ${signed(lastResult.event.risk)} | Money ${moneyText(lastResult.event.money)}</small>
  ` : "";
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

function continueAfterResults() {
  activeFeud.currentWeek += 1;
  if (activeFeud.currentWeek > activeFeud.feudLength) {
    runFinalPayoff();
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

function resetGame() {
  money = 100000;
  roster.forEach(w => { w.morale = clamp(w.morale + 12); });
  selected = [];
  activeFeud = null;
  chosenWeeklyAngle = null;
  lastResult = null;
  history = [];
  renderRoster();
  show("title");
}

document.getElementById("startBtn").addEventListener("click", () => {
  unlockAudio();
  playMusic();
  selected = [];
  activeFeud = null;
  chosenWeeklyAngle = null;
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
document.getElementById("newFeudBtn").addEventListener("click", () => {
  selected = [];
  activeFeud = null;
  chosenWeeklyAngle = null;
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
