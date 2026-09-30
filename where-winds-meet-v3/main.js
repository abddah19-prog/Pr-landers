/* ================= CONFIG ================= */
// Exit link used by every CTA. ${...} macros are filled from the page URL query string
// (e.g. ?external_id=XXX&payout=0.05). A macro with no value is left empty.
var CTA_URL = "https://ad.propellerads.com/conversion.php?aid=3923722&pid=&tid=159517&visitor_id=${external_id}&payout=${PAYOUT}";
var MACROS = {
  external_id: ["external_id", "visitor_id", "subid", "sub_id", "clickid", "click_id"],
  PAYOUT: ["payout", "PAYOUT"]
};
/* ========================================== */
(function () {
  var qs = new URLSearchParams(location.search);

  // ---------- CTA links ----------
  function param(keys) { for (var i = 0; i < keys.length; i++) { var v = qs.get(keys[i]); if (v) return v; } return ""; }
  var url = CTA_URL.replace(/\$\{(\w+)\}/g, function (_, k) { return encodeURIComponent(param(MACROS[k] || [k])); });
  document.querySelectorAll("a.cta").forEach(function (a) { a.href = url; });

  // ---------- Remote logos: show text fallback if an image fails ----------
  document.querySelectorAll("[data-fallback]").forEach(function (box) {
    var img = box.querySelector("img");
    if (!img) return;
    function fail() { box.classList.add("broken"); }
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener("error", fail);
  });

  // ---------- Nav: solid background on scroll ----------
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("solid", window.scrollY > 40); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  // ---------- Video controls: play/pause + sound ----------
  var bg = document.getElementById("bg");
  var playBtn = document.getElementById("play"), playLabel = document.getElementById("play-label");
  var sound = document.getElementById("sound"), soundLabel = document.getElementById("sound-label");
  var userPaused = false;

  function syncPlay() {
    var paused = bg.paused;
    playBtn.setAttribute("aria-pressed", paused);
    playBtn.setAttribute("aria-label", paused ? "Play video" : "Pause video");
    playLabel.textContent = paused ? "Play" : "Pause";
  }
  function syncSound() {
    sound.setAttribute("aria-pressed", !bg.muted);
    sound.setAttribute("aria-label", bg.muted ? "Turn sound on" : "Turn sound off");
    soundLabel.textContent = bg.muted ? "Sound" : "Mute";
  }
  bg.addEventListener("play", syncPlay);
  bg.addEventListener("pause", syncPlay);

  playBtn.addEventListener("click", function () {
    if (bg.paused) { userPaused = false; bg.play().catch(function () {}); }
    else { userPaused = true; bg.pause(); }
  });
  sound.addEventListener("click", function () {
    bg.muted = !bg.muted;
    if (!bg.muted) { bg.currentTime = 0; userPaused = false; bg.play().catch(function () {}); }
    syncSound();
  });
  syncPlay(); syncSound();

  // ---------- Sticky CTA, off-screen video pause, scroll reveals ----------
  var sticky = document.getElementById("sticky"), heroCta = document.getElementById("hero-cta");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) {
      sticky.classList.toggle("show", !en[0].isIntersecting && en[0].boundingClientRect.top < 0);
    }).observe(heroCta);
    // Saves data off-screen; never resumes a video the visitor paused
    new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { if (!userPaused) bg.play().catch(function () {}); }
      else bg.pause();
    }).observe(bg);
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    sticky.classList.add("show");
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
