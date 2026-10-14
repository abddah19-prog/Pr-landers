(function () {
  "use strict";

  // Destination for every CTA (official site). Replace with your tracking link if needed.
  var CTA_URL = "https://endfield.gryphline.com/";

  // Seconds the key art stays on screen before the trailer starts by itself (0 = never).
  var AUTO_START_DELAY = 4;

  var screenStart = document.getElementById("screenStart");
  var screenVideo = document.getElementById("screenVideo");
  var screenEnd = document.getElementById("screenEnd");
  var video = document.getElementById("video");
  var btnPlay = document.getElementById("btnPlay");
  var btnSkip = document.getElementById("btnSkip");
  var btnSound = document.getElementById("btnSound");
  var btnUnmute = document.getElementById("btnUnmute");
  var btnReplay = document.getElementById("btnReplay");
  var progressBar = document.getElementById("progressBar");
  var countdown = document.getElementById("countdown");
  var countdownNum = document.getElementById("countdownNum");
  var stickyCta = document.getElementById("stickyCta");
  var stage = document.getElementById("stage");

  var videoFailed = false;
  var countdownTimer = null;

  /* ---------- Screens: image → video → image ---------- */
  function showScreen(target) {
    [screenStart, screenVideo, screenEnd].forEach(function (s) {
      s.classList.toggle("is-active", s === target);
    });
  }

  function updateSoundUI() {
    btnSound.textContent = video.muted ? "🔇" : "🔊";
    btnUnmute.classList.toggle("is-hidden", !video.muted);
  }

  function stopCountdown() {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    countdown.classList.add("is-hidden");
  }

  // withSound = true when started by a user click (browsers then allow audio)
  function startVideo(withSound) {
    stopCountdown();
    if (videoFailed) {
      showScreen(screenEnd);
      return;
    }
    showScreen(screenVideo);
    progressBar.style.width = "0%";
    try { video.currentTime = 0; } catch (e) { /* metadata not loaded yet */ }
    video.muted = !withSound;
    updateSoundUI();

    var p = video.play();
    if (p && typeof p.catch === "function") {
      p.catch(function () {
        // Playback with sound refused: retry muted.
        video.muted = true;
        updateSoundUI();
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

  function startCountdown() {
    if (!AUTO_START_DELAY) {
      countdown.classList.add("is-hidden");
      return;
    }
    var left = AUTO_START_DELAY;
    countdownNum.textContent = left;
    countdownTimer = setInterval(function () {
      left -= 1;
      countdownNum.textContent = left;
      if (left <= 0) {
        stopCountdown();
        if (screenStart.classList.contains("is-active")) {
          startVideo(false);
        }
      }
    }, 1000);
  }

  btnPlay.addEventListener("click", function () { startVideo(true); });
  btnReplay.addEventListener("click", function () { startVideo(true); });
  btnSkip.addEventListener("click", endVideo);
  video.addEventListener("ended", endVideo);

  btnSound.addEventListener("click", function () {
    video.muted = !video.muted;
    updateSoundUI();
  });

  btnUnmute.addEventListener("click", function () {
    video.muted = false;
    updateSoundUI();
    if (video.paused) { video.play(); }
  });

  // Tap on the video: unmute first, then toggle pause / play
  video.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      updateSoundUI();
      return;
    }
    if (video.paused) { video.play(); } else { video.pause(); }
  });

  video.addEventListener("timeupdate", function () {
    if (video.duration) {
      progressBar.style.width = (video.currentTime / video.duration) * 100 + "%";
    }
  });

  /* ---------- Video sources: local video.mp4 first, then the online trailer ----------
     The browser moves to the next <source> on its own; only when the LAST one fails
     do we consider the video unavailable and go straight to the end image + CTA. */
  var sources = video.querySelectorAll("source");
  if (sources.length) {
    sources[sources.length - 1].addEventListener("error", function () {
      videoFailed = true;
      if (screenVideo.classList.contains("is-active")) {
        showScreen(screenEnd);
      }
    });
  }

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
      stopCountdown();
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
    }, { threshold: 0.3 }).observe(stage);
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
  startCountdown();
})();
