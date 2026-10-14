(function () {
  "use strict";

  // Destination for every CTA (official site). Replace with your tracking link if needed.
  var CTA_URL = "https://endfield.gryphline.com/";

  var screenStart = document.getElementById("screenStart");
  var screenVideo = document.getElementById("screenVideo");
  var screenEnd = document.getElementById("screenEnd");
  var video = document.getElementById("video");
  var btnPlay = document.getElementById("btnPlay");
  var btnSkip = document.getElementById("btnSkip");
  var btnSound = document.getElementById("btnSound");
  var btnReplay = document.getElementById("btnReplay");
  var progressBar = document.getElementById("progressBar");
  var stickyCta = document.getElementById("stickyCta");
  var stage = document.getElementById("stage");

  var videoFailed = false;

  /* ---------- Screens: image → video → image ---------- */
  function showScreen(target) {
    [screenStart, screenVideo, screenEnd].forEach(function (s) {
      s.classList.toggle("is-active", s === target);
    });
  }

  function startVideo() {
    if (videoFailed) {
      showScreen(screenEnd);
      return;
    }
    showScreen(screenVideo);
    video.currentTime = 0;
    video.muted = false;
    updateSoundIcon();

    var p = video.play();
    if (p && typeof p.catch === "function") {
      p.catch(function () {
        // Autoplay with sound refused: retry muted.
        video.muted = true;
        updateSoundIcon();
        video.play().catch(function () {
          showScreen(screenEnd);
        });
      });
    }
  }

  function endVideo() {
    video.pause();
    showScreen(screenEnd);
  }

  function updateSoundIcon() {
    btnSound.textContent = video.muted ? "🔇" : "🔊";
  }

  btnPlay.addEventListener("click", startVideo);
  btnReplay.addEventListener("click", startVideo);
  btnSkip.addEventListener("click", endVideo);
  video.addEventListener("ended", endVideo);

  btnSound.addEventListener("click", function () {
    video.muted = !video.muted;
    updateSoundIcon();
  });

  // Tap on the video toggles pause / play
  video.addEventListener("click", function () {
    if (video.paused) { video.play(); } else { video.pause(); }
  });

  video.addEventListener("timeupdate", function () {
    if (video.duration) {
      progressBar.style.width = (video.currentTime / video.duration) * 100 + "%";
    }
  });

  // If video.mp4 is missing or unreadable, go straight from image to image + CTA
  function markVideoFailed() {
    videoFailed = true;
    if (screenVideo.classList.contains("is-active")) {
      showScreen(screenEnd);
    }
  }
  video.addEventListener("error", markVideoFailed, true);
  var source = video.querySelector("source");
  if (source) { source.addEventListener("error", markVideoFailed); }

  /* ---------- Image fallback ---------- */
  Array.prototype.forEach.call(document.querySelectorAll("img[data-fallback]"), function (img) {
    function hide() { img.classList.add("is-missing"); }
    img.addEventListener("error", hide);
    if (img.complete && img.naturalWidth === 0) { hide(); }
  });

  /* ---------- CTAs ---------- */
  Array.prototype.forEach.call(document.querySelectorAll(".js-cta"), function (link) {
    link.setAttribute("href", CTA_URL);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
    link.addEventListener("click", function () {
      if (!video.paused) { video.pause(); }
      if (window.console) {
        console.log("[prelander] CTA click:", link.getAttribute("data-source"));
      }
    });
  });

  /* ---------- Sticky CTA once the stage scrolls out ---------- */
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      stickyCta.classList.toggle("is-visible", !entries[0].isIntersecting);
    }, { threshold: 0.25 }).observe(stage);
  } else {
    stickyCta.classList.add("is-visible");
  }

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && screenVideo.classList.contains("is-active")) {
      endVideo();
    }
  });

  showScreen(screenStart);
})();
