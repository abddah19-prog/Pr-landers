/* ================= CONFIG ================= */
// Lien de sortie de tous les CTA. Les macros ${...} sont remplacées par les paramètres
// de l'URL de la page (ex. ?external_id=XXX&payout=0.05). Une macro sans valeur est vidée.
var CTA_URL = "https://ad.propellerads.com/conversion.php?aid=3923722&pid=&tid=159517&visitor_id=${external_id}&payout=${PAYOUT}";
var MACROS = {
  external_id: ["external_id", "visitor_id", "subid", "sub_id", "clickid", "click_id"],
  PAYOUT: ["payout", "PAYOUT"]
};
/* ========================================== */
(function () {
  var qs = new URLSearchParams(location.search);
  function param(keys) { for (var i = 0; i < keys.length; i++) { var v = qs.get(keys[i]); if (v) return v; } return ""; }
  var url = CTA_URL.replace(/\$\{(\w+)\}/g, function (_, k) { return encodeURIComponent(param(MACROS[k] || [k])); });
  document.querySelectorAll("a.cta").forEach(function (a) { a.href = url; });

  // Navigation : fond opaque au scroll + menu mobile
  var nav = document.getElementById("nav"), menu = document.getElementById("menu"), burger = document.getElementById("burger");
  function onScroll() { nav.classList.toggle("solid", window.scrollY > 40); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  // Son de la vidéo de fond
  var bg = document.getElementById("bg"), sound = document.getElementById("sound"), ico = document.getElementById("sound-ico");
  sound.addEventListener("click", function () {
    bg.muted = !bg.muted;
    if (!bg.muted) { bg.currentTime = 0; bg.play(); }
    ico.textContent = bg.muted ? "🔇" : "🔊";
    sound.setAttribute("aria-label", bg.muted ? "Activer le son" : "Couper le son");
  });

  // Carrousel Univers (onglets + rotation automatique)
  var tabs = document.querySelectorAll(".tab"), slides = document.querySelectorAll(".slide"), cur = 0, auto;
  function show(i) {
    cur = i;
    tabs.forEach(function (t, j) { t.classList.toggle("on", j === i); t.setAttribute("aria-selected", j === i); });
    slides.forEach(function (s, j) { s.classList.toggle("on", j === i); });
  }
  function start() { clearInterval(auto); auto = setInterval(function () { show((cur + 1) % slides.length); }, 5000); }
  tabs.forEach(function (t) { t.addEventListener("click", function () { show(+t.dataset.i); start(); }); });
  start();

  // Modal trailer (avec son)
  var modal = document.getElementById("modal"), trailer = document.getElementById("trailer");
  function openModal() { modal.hidden = false; bg.pause(); trailer.currentTime = 0; trailer.play(); }
  function closeModal() { modal.hidden = true; trailer.pause(); bg.play(); }
  document.getElementById("open-trailer").addEventListener("click", openModal);
  document.getElementById("close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // CTA sticky (dès que le CTA du hero sort de l'écran) + apparitions au scroll
  var sticky = document.getElementById("sticky"), heroCta = document.getElementById("hero-cta");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) {
      sticky.classList.toggle("show", !en[0].isIntersecting && en[0].boundingClientRect.top < 0);
    }).observe(heroCta);
    new IntersectionObserver(function (en) { en[0].isIntersecting ? bg.play().catch(function () {}) : bg.pause(); }).observe(bg);
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    sticky.classList.add("show");
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
