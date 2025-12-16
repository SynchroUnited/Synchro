const $ = (id) => document.getElementById(id);

function formatTime(s){
  const m = Math.floor(s / 60);
  const r = s % 60;
  return (m > 0 ? `${m}m ` : "") + `${r}s`;
}

function tick(){
  const now = new Date();
  const ms = now.getTime();
  const sec = Math.floor(ms / 1000);

  // Fenêtre 30s
  const windowIndex = Math.floor(sec / 30);
  const windowStart = windowIndex * 30;
  const windowEnd = windowStart + 30;
  const remaining = windowEnd - sec;


  const secIntoHour = sec % 3600;
  const specialStart = 59 * 60 + 30; // 3570
  let specialIn = specialStart - secIntoHour;
  if (specialIn < 0) specialIn += 3600;

  $("windowLabel").textContent = `#${windowIndex}`;
  $("countdown").textContent = `${remaining}s`;
  $("specialIn").textContent = formatTime(specialIn);

  $("year").textContent = new Date().getFullYear();
}

$("connectBtn").addEventListener("click", () => {
  alert("Prototype : connexion wallet pas encore branchée.");
});

$("participateBtn").addEventListener("click", () => {
  alert("Prototype : participation désactivée tant que le système n’a pas démarré (T0).");
});

$("networkPill").textContent = "Réseau : Base (plus tard)";
tick();
setInterval(tick, 250);
