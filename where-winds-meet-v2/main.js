/* ================= CONFIG ================= */
// Lien de sortie. Les macros ${...} sont remplacées par les paramètres de l'URL de la page
// (ex. ?external_id=XXX&payout=0.05). Une macro sans valeur est vidée.
var CTA_URL = "https://ad.propellerads.com/conversion.php?aid=3923722&pid=&tid=159517&visitor_id=${external_id}&payout=${PAYOUT}";
var MACROS = {
  external_id: ["external_id", "visitor_id", "subid", "sub_id", "clickid", "click_id"],
  PAYOUT: ["payout", "PAYOUT"]
};
var TIMER_MIN = 10; // durée du compte à rebours (par visiteur, persistée en session)
/* ========================================== */
(function () {
  var qs = new URLSearchParams(location.search);
  function param(keys) { for (var i = 0; i < keys.length; i++) { var v = qs.get(keys[i]); if (v) return v; } return ""; }
  var url = CTA_URL.replace(/\$\{(\w+)\}/g, function (_, k) {
    return encodeURIComponent(param(MACROS[k] || [k]));
  });
  var ctas = document.querySelectorAll("a.cta");
  for (var i = 0; i < ctas.length; i++) ctas[i].href = url;

  // Son : 1er tap sur la vidéo = active le son
  var vid = document.getElementById("vid"), snd = document.getElementById("snd"), player = document.getElementById("player");
  function toggle(e) {
    if (e) e.stopPropagation();
    vid.muted = !vid.muted; if (!vid.muted) { vid.currentTime = 0; vid.play(); }
    snd.classList.remove("pulse");
    snd.textContent = vid.muted ? "🔇 Activer le son" : "🔊 Son activé";
    snd.setAttribute("aria-label", vid.muted ? "Activer le son" : "Couper le son");
  }
  snd.addEventListener("click", toggle);
  player.addEventListener("click", toggle);
  // Économie data : pause quand la vidéo sort de l'écran
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { en[0].isIntersecting ? vid.play().catch(function(){}) : vid.pause(); }, { threshold: .25 }).observe(player);
  }

  // Compte à rebours (persiste pendant la session)
  var end;
  try { end = +sessionStorage.getItem("wwm_end"); } catch (e) {}
  if (!end || end < Date.now()) { end = Date.now() + TIMER_MIN * 60000; try { sessionStorage.setItem("wwm_end", end); } catch (e) {} }
  var clocks = document.querySelectorAll("[data-clock]"), mm = document.querySelector("[data-mm]"), ss = document.querySelector("[data-ss]");
  function tick() {
    var s = Math.max(0, Math.round((end - Date.now()) / 1000)), m = ("0" + Math.floor(s / 60)).slice(-2), sec = ("0" + s % 60).slice(-2);
    for (var i = 0; i < clocks.length; i++) clocks[i].textContent = m + ":" + sec;
    mm.firstChild.nodeValue = m; ss.firstChild.nodeValue = sec;
  }
  tick(); setInterval(tick, 1000);

  // Quiz
  var results = {
    blade: ["🗡️", "Maître de la Lame", "Rapide et précis : les duels du Jianghu sont faits pour vous. Votre profil est prêt."],
    spear: ["🔱", "Seigneur de la Lance", "Puissance et portée : les champs de bataille vous attendent. Votre profil est prêt."],
    fan:   ["🪭", "Ombre de l'Éventail", "Grâce et mystère : vos ennemis ne vous verront pas venir. Votre profil est prêt."]
  };
  var pick = "blade", steps = document.querySelectorAll(".qstep"), bar = document.getElementById("qbar"), label = document.getElementById("qlabel");
  function go(n) {
    for (var i = 0; i < steps.length; i++) steps[i].classList.toggle("on", +steps[i].dataset.step === n);
    bar.style.width = (n === 2 ? 50 : n === 3 ? 100 : 0) + "%";
    label.textContent = n === 3 ? "Résultat ✔" : "Question " + n + "/2";
  }
  document.querySelectorAll('[data-step="1"] .opt').forEach(function (b) { b.addEventListener("click", function () { pick = b.dataset.v; go(2); }); });
  document.querySelectorAll('[data-step="2"] .opt').forEach(function (b) {
    b.addEventListener("click", function () {
      var r = results[pick];
      document.getElementById("rico").textContent = r[0];
      document.getElementById("rtitle").textContent = r[1];
      document.getElementById("rtext").textContent = r[2];
      go(3);
    });
  });

  // CTA sticky : visible dès que le CTA du hero sort de l'écran
  var sticky = document.getElementById("sticky"), heroCta = document.getElementById("hero-cta");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { sticky.classList.toggle("show", !en[0].isIntersecting && en[0].boundingClientRect.top < 0); }).observe(heroCta);
    var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    sticky.classList.add("show");
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
