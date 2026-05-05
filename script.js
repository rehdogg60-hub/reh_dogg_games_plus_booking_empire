const screens = {
  title: document.getElementById("titleScreen"),
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
  "Tag Match Tease",
  "Cheating Finish",
  "Emotional Interview"
];

const commentary = [
  "THE CROWD IS LOSING THEIR MINDS!",
  "This feud is getting hot, but management is nervous.",
  "That segment dragged like a wet towel.",
  "The fans are buying tickets now!",
  "That booking decision almost got you fired."
];

let money = 100000;
let selected = [];
let activeFeud = null;
let chosenWeeklyAngle = null;
let lastResult = null;
let history = [];

const audio = {
  enabled: localStorage.getItem("bookingEmpireSound") !== "off",
  unlocked: false,
  music: new Audio("background_music.mp3"),
  click: new Audio("button_click.wav")
};

audio.music.loop = true;
audio.music.volume = 0.25;
audio.click.volume = 0.75;

function updateSoundButton() {
  const button = document.getElementById("soundBtn");
  if (button) button.textContent = audio.enabled ? "Sound On" : "Sound Off";
}

function unlockAudio() {
  if (audio.unlocked) return;
  audio.unlocked = true;
  Object.values(audio).forEach(sound => {
    if (!(sound instanceof Audio)) return;
    try {
      sound.play()
        .then(() => {
          sound.pause();
          sound.currentTime = 0;
        })
        .catch(() => {});
    } catch (error) {}
  });
}

function playClick() {
  if (!audio.enabled || !audio.unlocked) return;
  try {
    audio.click.currentTime = 0;
    audio.click.play().catch(() => {});
  } catch (error) {}
}

function playMusic() {
  if (!audio.enabled || !audio.unlocked) return;
  try {
    audio.music.play().catch(() => {});
  } catch (error) {}
}

function toggleSound() {
  unlockAudio();
  if (audio.enabled) playClick();
  audio.enabled = !audio.enabled;
  localStorage.setItem("bookingEmpireSound", audio.enabled ? "on" : "off");
  updateSoundButton();
  if (audio.enabled) {
    playMusic();
  } else {
    audio.music.pause();
  }
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
  updateMoney();
}

function updateMoney() {
  document.getElementById("rosterMoney").textContent = moneyText(money);
  document.getElementById("bookingMoney").textContent = moneyText(money);
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
      <div class="silhouette"></div>
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
  ["feudType", "angleStyle", "feudLength", "ending"].forEach(id => {
    document.getElementById(id).addEventListener("change", updateFeudPreview);
  });
  updateFeudPreview();
  show("feud");
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
  const heat = calculateStartingHeat(a, b, feudType);
  const risk = feudType === "Personal Grudge" || feudType === "Betrayal" ? 14 : 8;
  const projectedRevenue = heat * 500 * Number(document.getElementById("feudLength").value);
  document.getElementById("feudPreview").innerHTML = `
    <h3>Projected Feud</h3>
    <p>${a.name} (${a.alignment}) vs ${b.name} (${b.alignment})</p>
    <p>Starting Heat: <strong>${heat}</strong> | Starting Risk: <strong>${risk}</strong></p>
    <p>Projected Revenue: <strong>${moneyText(projectedRevenue)}</strong></p>
  `;
}

function createFeud() {
  const [aIndex, bIndex] = selected;
  const a = roster[aIndex];
  const b = roster[bIndex];
  const feudType = document.getElementById("feudType").value;
  const angleStyle = document.getElementById("angleStyle").value;
  const feudLength = Number(document.getElementById("feudLength").value);
  const ending = document.getElementById("ending").value;
  const heat = calculateStartingHeat(a, b, feudType);
  const risk = feudType === "Personal Grudge" || feudType === "Betrayal" ? 14 : 8;
  activeFeud = {
    wrestlerA: aIndex,
    wrestlerB: bIndex,
    feudType,
    angleStyle,
    feudLength,
    ending,
    currentWeek: 1,
    heat,
    risk,
    projectedRevenue: heat * 500 * feudLength,
    totalRevenue: 0,
    bestDecision: null,
    worstDecision: null
  };
  history = [];
  showBooking();
}

function showBooking() {
  chosenWeeklyAngle = null;
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  document.getElementById("bookingTitle").textContent = `${a.name} vs ${b.name}`;
  document.getElementById("weekText").textContent = `${activeFeud.currentWeek} / ${activeFeud.feudLength}`;
  document.getElementById("planText").textContent = `${activeFeud.feudType} with ${activeFeud.angleStyle}. Planned ending: ${activeFeud.ending}.`;
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
    "Tag Match Tease": "Safe, steady momentum.",
    "Cheating Finish": "Great for heels, risky.",
    "Emotional Interview": "Faces shine with low risk."
  }[angle];
}

function runWeek() {
  const result = applyWeeklyAngle(chosenWeeklyAngle);
  const baseIncome = activeFeud.heat * 500;
  const riskPenalty = activeFeud.risk * 200;
  const a = roster[activeFeud.wrestlerA];
  const b = roster[activeFeud.wrestlerB];
  const moralePenalty = a.morale < 35 || b.morale < 35 ? 5000 : 0;
  const moneyResult = Math.round(baseIncome - riskPenalty - moralePenalty);
  money += moneyResult;
  activeFeud.totalRevenue += moneyResult;
  result.money = moneyResult;
  result.commentary = pickCommentary(moneyResult, result.heatChange, activeFeud.risk);
  history.push({ angle: chosenWeeklyAngle, ...result });
  updateDecisionRecords(chosenWeeklyAngle, moneyResult);
  lastResult = result;

  if (money <= 0) {
    show("gameOver");
    return;
  }
  showResults(false);
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
    heatChange = 6;
    riskChange = 2;
    moraleA = 2;
    moraleB = 2;
    text = `A tag match tease gave fans just enough action without giving away the payoff.`;
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

function pickCommentary(moneyResult, heatChange, risk) {
  if (moneyResult > 30000) return commentary[0];
  if (risk > 70) return commentary[1];
  if (heatChange < 0) return commentary[2];
  if (moneyResult > 10000) return commentary[3];
  return commentary[4];
}

function showResults(finalPayoff) {
  document.getElementById("resultTitle").textContent = finalPayoff ? "Final Payoff" : `Week ${activeFeud.currentWeek} Complete`;
  document.getElementById("kayfabeText").textContent = lastResult.text;
  document.getElementById("resultStats").innerHTML = `
    <div class="result-line"><span>Heat Change</span><strong class="${lastResult.heatChange >= 0 ? "positive" : "negative"}">${lastResult.heatChange >= 0 ? "+" : ""}${lastResult.heatChange}</strong></div>
    <div class="result-line"><span>Risk Change</span><strong class="${lastResult.riskChange >= 0 ? "negative" : "positive"}">${lastResult.riskChange >= 0 ? "+" : ""}${lastResult.riskChange}</strong></div>
    <div class="result-line"><span>Money Result</span><strong class="${lastResult.money >= 0 ? "positive" : "negative"}">${moneyText(lastResult.money)}</strong></div>
    <div class="result-line"><span>Company Money</span><strong>${moneyText(money)}</strong></div>
  `;
  document.getElementById("commentaryText").textContent = lastResult.commentary;
  show("results");
}

function continueAfterResults() {
  activeFeud.currentWeek += 1;
  if (activeFeud.currentWeek > activeFeud.feudLength) {
    runFinalPayoff();
  } else {
    showBooking();
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
  const finalRevenue = Math.round(finalRating * 22000 + activeFeud.heat * 450 - activeFeud.risk * 280);
  money += finalRevenue;
  activeFeud.totalRevenue += finalRevenue;
  if (money <= 0) {
    show("gameOver");
    return;
  }

  const grade = finalRating >= 4.5 ? "A" : finalRating >= 3.6 ? "B" : finalRating >= 2.7 ? "C" : finalRating >= 1.8 ? "D" : "F";
  document.getElementById("finalTitle").textContent = `${a.name} vs ${b.name}`;
  document.getElementById("finalReport").innerHTML = `
    <div class="report-line"><span>Ending</span><strong>${activeFeud.ending}</strong></div>
    <p class="kayfabe">${endingText}</p>
    <div class="report-line"><span>Final Rating</span><strong>${finalRating.toFixed(1)} / 5 stars</strong></div>
    <div class="report-line"><span>Total Revenue</span><strong>${moneyText(activeFeud.totalRevenue)}</strong></div>
    <div class="report-line"><span>Final Company Money</span><strong>${moneyText(money)}</strong></div>
    <div class="report-line"><span>Best Decision</span><strong>${activeFeud.bestDecision?.angle || "None"} (${moneyText(activeFeud.bestDecision?.money || 0)})</strong></div>
    <div class="report-line"><span>Worst Decision</span><strong>${activeFeud.worstDecision?.angle || "None"} (${moneyText(activeFeud.worstDecision?.money || 0)})</strong></div>
    <div class="report-line"><span>Booker Grade</span><strong>${grade}</strong></div>
  `;
  show("final");
}

function resetGame() {
  money = 100000;
  roster.forEach(w => { w.morale = clamp(w.morale + 12); });
  selected = [];
  activeFeud = null;
  renderRoster();
  show("title");
}

document.getElementById("startBtn").addEventListener("click", () => {
  unlockAudio();
  playMusic();
  renderRoster();
  show("roster");
});
document.getElementById("soundBtn").addEventListener("click", toggleSound);
document.getElementById("toFeudBtn").addEventListener("click", setupFeudScreen);
document.getElementById("backRosterBtn").addEventListener("click", () => show("roster"));
document.getElementById("createFeudBtn").addEventListener("click", createFeud);
document.getElementById("runWeekBtn").addEventListener("click", runWeek);
document.getElementById("continueBtn").addEventListener("click", continueAfterResults);
document.getElementById("newFeudBtn").addEventListener("click", () => {
  selected = [];
  renderRoster();
  show("roster");
});
document.getElementById("restartBtn").addEventListener("click", resetGame);

document.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button || button.id === "soundBtn") return;
  unlockAudio();
  playClick();
});

renderRoster();
updateMoney();
updateSoundButton();
