/* ================= CONFIG ================= */
// Exit link used by every CTA. ${...} macros are filled from the page URL query string
// (e.g. ?external_id=XXX&payout=0.05). A macro with no value is left empty.
var CTA_URL = "https://ad.propellerads.com/conversion.php?aid=3923722&pid=&tid=159517&visitor_id=${external_id}&payout=${PAYOUT}";
var MACROS = {
  external_id: ["external_id", "visitor_id", "subid", "sub_id", "clickid", "click_id"],
  PAYOUT: ["payout", "PAYOUT"]
};
var DEFAULT_LANG = "en"; // force a language with ?lang=en|zh|ja|ko
/* ========================================== */

var I18N = {
  en: {
    _name: "English", _code: "EN", _html: "en",
    _title: "Where Winds Meet 2.0 – Free-to-Play Wuxia Action RPG | PC, Xbox, PS5",
    _desc: "Where Winds Meet 2.0: the open-world wuxia action RPG, free to play on Windows, Steam, Epic Games, PS5 and Xbox. Watch the trailer and start your journey.",
    "lang.label": "Language",
    "cta.play": "Play Free", "cta.playNow": "Play Free Now",
    "hero.badge": "Update 2.0", "hero.era": "A New Wuxia Era", "hero.sub": "Where Ink Meets the Blade",
    "hero.note": "Free to play · Cross-play · 100M+ players worldwide",
    "store.dl": "Download for", "store.on": "Available on",
    "v.play": "Play", "v.pause": "Pause", "v.playAria": "Play video", "v.pauseAria": "Pause video",
    "v.sound": "Sound", "v.mute": "Mute", "v.soundOn": "Turn sound on", "v.soundOff": "Turn sound off",
    "final.eyebrow": "Join over 100 million players", "final.h2": "Your Legend Begins",
    footer: "Independent promotional page, not affiliated with the publisher. Where Winds Meet is a trademark of its respective owners (Everstone Studio / NetEase Games). Windows and Xbox are trademarks of Microsoft Corporation; PlayStation and PS5 are trademarks of Sony Interactive Entertainment; Steam is a trademark of Valve Corporation; Epic Games is a trademark of Epic Games, Inc. Visuals from the official trailer."
  },
  zh: {
    _name: "简体中文", _code: "ZH", _html: "zh-Hans",
    _title: "Where Winds Meet 2.0 – 免费武侠动作角色扮演游戏 | PC、Xbox、PS5",
    _desc: "Where Winds Meet 2.0：开放世界武侠动作角色扮演游戏，可在 Windows、Steam、Epic Games、PS5 和 Xbox 上免费畅玩。观看预告片，开启你的江湖之旅。",
    "lang.label": "语言",
    "cta.play": "免费畅玩", "cta.playNow": "立即免费畅玩",
    "hero.badge": "2.0 版本更新", "hero.era": "武侠新纪元", "hero.sub": "当水墨遇见刀锋",
    "hero.note": "免费游玩 · 跨平台联机 · 全球超 1 亿玩家",
    "store.dl": "立即下载", "store.on": "现已登陆",
    "v.play": "播放", "v.pause": "暂停", "v.playAria": "播放视频", "v.pauseAria": "暂停视频",
    "v.sound": "声音", "v.mute": "静音", "v.soundOn": "开启声音", "v.soundOff": "关闭声音",
    "final.eyebrow": "加入全球超 1 亿玩家", "final.h2": "你的传奇，由此开启",
    footer: "独立推广页面，与发行商无关联。Where Winds Meet 为其各自所有者（Everstone Studio / 网易游戏）的商标。Windows 和 Xbox 是 Microsoft Corporation 的商标；PlayStation 和 PS5 是 Sony Interactive Entertainment 的商标；Steam 是 Valve Corporation 的商标；Epic Games 是 Epic Games, Inc. 的商标。画面取自官方预告片。"
  },
  ja: {
    _name: "日本語", _code: "JA", _html: "ja",
    _title: "Where Winds Meet 2.0 – 基本プレイ無料の武侠アクションRPG | PC・Xbox・PS5",
    _desc: "Where Winds Meet 2.0：オープンワールド武侠アクションRPG。Windows、Steam、Epic Games、PS5、Xbox で基本プレイ無料。トレーラーを見て冒険を始めよう。",
    "lang.label": "言語",
    "cta.play": "無料でプレイ", "cta.playNow": "今すぐ無料でプレイ",
    "hero.badge": "アップデート 2.0", "hero.era": "武侠の新時代", "hero.sub": "墨と刃が出会う場所",
    "hero.note": "基本プレイ無料 · クロスプレイ · 全世界1億人以上のプレイヤー",
    "store.dl": "ダウンロード", "store.on": "配信中",
    "v.play": "再生", "v.pause": "一時停止", "v.playAria": "動画を再生", "v.pauseAria": "動画を一時停止",
    "v.sound": "サウンド", "v.mute": "ミュート", "v.soundOn": "サウンドをオン", "v.soundOff": "サウンドをオフ",
    "final.eyebrow": "1億人以上のプレイヤーに加わろう", "final.h2": "あなたの伝説が始まる",
    footer: "本ページは独立したプロモーションページであり、パブリッシャーとは提携していません。Where Winds Meet は各権利者（Everstone Studio / NetEase Games）の商標です。Windows および Xbox は Microsoft Corporation の商標、PlayStation および PS5 は Sony Interactive Entertainment の商標、Steam は Valve Corporation の商標、Epic Games は Epic Games, Inc. の商標です。画像は公式トレーラーより。"
  },
  ko: {
    _name: "한국어", _code: "KO", _html: "ko",
    _title: "Where Winds Meet 2.0 – 무료 무협 액션 RPG | PC, Xbox, PS5",
    _desc: "Where Winds Meet 2.0: 오픈 월드 무협 액션 RPG. Windows, Steam, Epic Games, PS5, Xbox에서 무료로 플레이하세요. 트레일러를 보고 모험을 시작하세요.",
    "lang.label": "언어",
    "cta.play": "무료로 플레이", "cta.playNow": "지금 무료로 플레이",
    "hero.badge": "2.0 업데이트", "hero.era": "새로운 무협의 시대", "hero.sub": "먹과 칼날이 만나는 곳",
    "hero.note": "무료 플레이 · 크로스플레이 · 전 세계 1억 명 이상의 플레이어",
    "store.dl": "다운로드", "store.on": "지금 이용 가능",
    "v.play": "재생", "v.pause": "일시정지", "v.playAria": "동영상 재생", "v.pauseAria": "동영상 일시정지",
    "v.sound": "사운드", "v.mute": "음소거", "v.soundOn": "사운드 켜기", "v.soundOff": "사운드 끄기",
    "final.eyebrow": "1억 명 이상의 플레이어와 함께하세요", "final.h2": "당신의 전설이 시작된다",
    footer: "본 페이지는 퍼블리셔와 무관한 독립 홍보 페이지입니다. Where Winds Meet은 각 소유자(Everstone Studio / NetEase Games)의 상표입니다. Windows 및 Xbox는 Microsoft Corporation의 상표이며, PlayStation 및 PS5는 Sony Interactive Entertainment의 상표, Steam은 Valve Corporation의 상표, Epic Games는 Epic Games, Inc.의 상표입니다. 이미지는 공식 트레일러에서 가져왔습니다."
  }
};

(function () {
  var qs = new URLSearchParams(location.search);

  // ---------- CTA links ----------
  function param(keys) { for (var i = 0; i < keys.length; i++) { var v = qs.get(keys[i]); if (v) return v; } return ""; }
  var url = CTA_URL.replace(/\$\{(\w+)\}/g, function (_, k) { return encodeURIComponent(param(MACROS[k] || [k])); });
  document.querySelectorAll("a.cta").forEach(function (a) { a.href = url; });

  // ---------- Remote logo: show text fallback if the image fails ----------
  document.querySelectorAll("[data-fallback]").forEach(function (box) {
    var img = box.querySelector("img");
    if (!img) return;
    function fail() { box.classList.add("broken"); }
    if (img.complete && img.naturalWidth === 0) fail();
    else img.addEventListener("error", fail);
  });

  // ---------- Video controls: play/pause + sound ----------
  var lang = DEFAULT_LANG;
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || ""; }
  var bg = document.getElementById("bg");
  var playBtn = document.getElementById("play"), playLabel = document.getElementById("play-label");
  var sound = document.getElementById("sound"), soundLabel = document.getElementById("sound-label");
  var userPaused = false;

  function syncPlay() {
    var paused = bg.paused;
    playBtn.setAttribute("aria-pressed", paused);
    playBtn.setAttribute("aria-label", t(paused ? "v.playAria" : "v.pauseAria"));
    playLabel.textContent = t(paused ? "v.play" : "v.pause");
  }
  function syncSound() {
    sound.setAttribute("aria-pressed", !bg.muted);
    sound.setAttribute("aria-label", t(bg.muted ? "v.soundOn" : "v.soundOff"));
    soundLabel.textContent = t(bg.muted ? "v.sound" : "v.mute");
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

  // ---------- i18n ----------
  function store(v) { try { localStorage.setItem("wwm_lang", v); } catch (e) {} }
  function stored() { try { return localStorage.getItem("wwm_lang"); } catch (e) { return null; } }

  function setLang(code, save) {
    if (!I18N[code]) code = DEFAULT_LANG;
    lang = code;
    var d = I18N[code];
    document.documentElement.lang = d._html;
    document.title = d._title;
    document.querySelector('meta[name="description"]').setAttribute("content", d._desc);
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.getElementById("lang-cur").textContent = d._name;
    document.getElementById("lang-code").textContent = d._code;
    document.querySelectorAll("#lang-list [data-lang]").forEach(function (li) { li.setAttribute("aria-selected", li.dataset.lang === code); });
    syncPlay(); syncSound();
    if (save) {
      store(code);
      var u = new URL(location.href); u.searchParams.set("lang", code);
      history.replaceState(null, "", u);
    }
  }

  // ---------- Language dropdown ----------
  var wrap = document.getElementById("lang"), btn = document.getElementById("lang-btn"), list = document.getElementById("lang-list");
  var items = [].slice.call(list.querySelectorAll("[data-lang]")), fi = 0;
  items.forEach(function (li) { li.tabIndex = -1; });
  function focusItem(i) { fi = (i + items.length) % items.length; items[fi].focus(); }
  function openList() {
    list.hidden = false; btn.setAttribute("aria-expanded", "true");
    focusItem(Math.max(0, items.findIndex(function (li) { return li.dataset.lang === lang; })));
  }
  function closeList(refocus) { list.hidden = true; btn.setAttribute("aria-expanded", "false"); if (refocus) btn.focus(); }
  btn.addEventListener("click", function () { list.hidden ? openList() : closeList(); });
  btn.addEventListener("keydown", function (e) { if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); openList(); } });
  list.addEventListener("click", function (e) {
    var li = e.target.closest("[data-lang]"); if (!li) return;
    setLang(li.dataset.lang, true); closeList(true);
  });
  list.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); focusItem(fi + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); focusItem(fi - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLang(items[fi].dataset.lang, true); closeList(true); }
    else if (e.key === "Escape" || e.key === "Tab") { closeList(e.key === "Escape"); }
  });
  document.addEventListener("click", function (e) { if (!list.hidden && !wrap.contains(e.target)) closeList(); });

  // ---------- Nav: solid background on scroll ----------
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("solid", window.scrollY > 40); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

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

  // ---------- Initial language: ?lang= > saved choice > English ----------
  var start = qs.get("lang") || stored() || DEFAULT_LANG;
  setLang(I18N[start] ? start : DEFAULT_LANG, false);
})();
