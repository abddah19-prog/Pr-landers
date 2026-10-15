(function () {
  "use strict";

  // Tracking link for every CTA. The ${SUBID} / {cost} / ... macros are left as-is:
  // they are replaced by the traffic source when the ad is served.
  var CTA_URL = "https://trk.gamsec.com/5A0E/2J1A6/?source=prp&visitor_id=${SUBID}&cost={cost}&zoneid={zoneid}&campaignid={campaignid}&device={device}&browser={browser}&os={os}&osversion={osversion}&country={country}&language={language}&isp={isp}&user_activity={user_activity}&via={via}&campaign_id={campaignid}";

  var player = document.getElementById("player");
  var video = document.getElementById("video");
  var btnPlay = document.getElementById("btnPlay");
  var btnCenter = document.getElementById("btnCenter");
  var btnMute = document.getElementById("btnMute");
  var btnExpand = document.getElementById("btnExpand");
  var volume = document.getElementById("volume");
  var progressBar = document.getElementById("progressBar");
  var shade = document.getElementById("playerShade");

  /* ---------- CTAs ---------- */
  Array.prototype.forEach.call(document.querySelectorAll(".js-cta"), function (link) {
    link.setAttribute("href", CTA_URL);
    link.addEventListener("click", function () {
      if (!video.paused) { video.pause(); }
    });
  });

  /* ---------- Play / pause ---------- */
  function updatePlayUI() {
    var paused = video.paused;
    player.classList.toggle("is-paused", paused);
    btnPlay.innerHTML = paused
      ? '<span class="icon-play" aria-hidden="true"></span>'
      : '<span class="icon-pause" aria-hidden="true"></span>';
    btnPlay.setAttribute("aria-label", paused ? "再生 / Play" : "一時停止 / Pause");
  }

  function togglePlay() {
    if (video.paused) {
      var p = video.play();
      if (p && typeof p.catch === "function") { p.catch(updatePlayUI); }
    } else {
      video.pause();
    }
  }

  btnPlay.addEventListener("click", togglePlay);
  btnCenter.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updatePlayUI);
  video.addEventListener("pause", updatePlayUI);

  /* ---------- Sound ---------- */
  function updateSoundUI() {
    var silent = video.muted || video.volume === 0;
    btnMute.textContent = silent ? "🔇" : (video.volume < 0.5 ? "🔉" : "🔊");
    btnMute.setAttribute("aria-label", silent ? "音声オン / Unmute" : "ミュート / Mute");
    volume.value = video.muted ? 0 : video.volume;
  }

  btnMute.addEventListener("click", function () {
    if (video.muted || video.volume === 0) {
      video.muted = false;
      if (video.volume === 0) { video.volume = 0.8; }
    } else {
      video.muted = true;
    }
    updateSoundUI();
  });

  volume.addEventListener("input", function () {
    var v = parseFloat(volume.value);
    video.volume = v;
    video.muted = v === 0;
    btnMute.textContent = v === 0 ? "🔇" : (v < 0.5 ? "🔉" : "🔊");
  });

  video.volume = parseFloat(volume.value);

  /* ---------- Enlarge / reduce ---------- */
  function setExpanded(on) {
    player.classList.toggle("is-expanded", on);
    shade.classList.toggle("is-visible", on);
    btnExpand.setAttribute("aria-label", on ? "縮小 / Reduce" : "拡大 / Enlarge");
    btnExpand.setAttribute("title", on ? "縮小 / Reduce" : "拡大 / Enlarge");
  }

  btnExpand.addEventListener("click", function () {
    setExpanded(!player.classList.contains("is-expanded"));
  });
  shade.addEventListener("click", function () { setExpanded(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setExpanded(false); }
  });

  /* ---------- Progress ---------- */
  video.addEventListener("timeupdate", function () {
    if (video.duration) {
      progressBar.style.width = (video.currentTime / video.duration) * 100 + "%";
    }
  });

  /* ---------- Hide the player if the video cannot load ---------- */
  video.addEventListener("error", function () {
    player.style.display = "none";
  });

  /* ---------- Muted autoplay (allowed by browsers); fall back to paused state ---------- */
  video.muted = true;
  var start = video.play();
  if (start && typeof start.catch === "function") {
    start.catch(updatePlayUI);
  }
  updatePlayUI();
  updateSoundUI();
})();
