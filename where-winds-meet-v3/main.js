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
    _title: "Where Winds Meet 2.0 – Free-to-Play Wuxia Action RPG | PC, Console, Mobile",
    _desc: "Where Winds Meet 2.0: the open-world wuxia action RPG, free to play on Windows, Steam, Epic, PS5, Xbox, iOS and Android. Explore the world, the combat and the trailer.",
    "lang.label": "Language",
    "nav.home": "Home", "nav.world": "World", "nav.combat": "Combat", "nav.media": "Media", "nav.faq": "FAQ",
    "cta.play": "Play Free", "cta.playNow": "Play Free Now", "cta.start": "Start Your Journey",
    "hero.badge": "Update 2.0", "hero.era": "A New Wuxia Era", "hero.sub": "Where Ink Meets the Blade",
    "hero.note": "Free to play · Cross-play · 100M+ players worldwide",
    "store.dl": "Download for", "store.on": "Available on",
    "sound.label": "Sound", "sound.on": "Turn sound on", "sound.off": "Turn sound off", "scroll": "Scroll down",
    "world.eyebrow": "The Jianghu", "world.h2": "A World of Legends",
    "world.lead": "10th-century China. A divided empire, rival martial schools and a destiny waiting to be written: yours.",
    "tab.world": "Open World", "tab.heroes": "Heroes", "tab.combat": "Combat",
    "s1.h": "Vast Open World", "s1.p": "Misty mountains, imperial cities and forgotten temples: over 20 regions to explore on foot, on horseback or through the skies.",
    "s2.h": "Your Hero, Your Path", "s2.p": "Create your character, choose your martial school and build your reputation across the Jianghu.",
    "s3.h": "Cinematic Martial Arts", "s3.p": "Parries, counters and legendary techniques: every duel plays out like a scene from a wuxia film.",
    "alt.world": "Open-world landscape in Where Winds Meet", "alt.heroes": "Heroes in jade robes from Where Winds Meet", "alt.combat": "Cinematic combat in Where Winds Meet",
    "combat.eyebrow": "Gameplay", "combat.h2": "Master the Blade",
    "f1.h": "Action Combat", "f1.p": "Dodges, perfect parries and devastating combos.",
    "f2.h": "Solo & Co-op", "f2.p": "A full solo campaign plus adventures with friends.",
    "f3.h": "Cross-Play", "f3.p": "Your progress follows you across PC, console and mobile.",
    "f4.h": "100% Free", "f4.p": "No payment required to play, no pay-to-win.",
    "media.eyebrow": "Media", "media.h2": "Official 2.0 Trailer", "media.play": "Play the trailer with sound", "close": "Close",
    "faq.eyebrow": "FAQ", "faq.h2": "Frequently Asked Questions",
    q1: "Is Where Winds Meet really free?", a1: "Yes. The game is free to play. Optional purchases are cosmetic and are not required to progress.",
    q2: "Which platforms can I play on?", a2: "Windows PC (Steam, Epic Games Store), PlayStation 5, Xbox, iOS and Android.",
    q3: "Can I play with friends on other devices?", a3: "Yes. Cross-play lets you team up with friends on PC, console and mobile, and your progress carries over between devices.",
    q4: "Is it single-player or multiplayer?", a4: "Both. Enjoy a full story campaign solo, or explore and fight alongside other players in co-op.",
    q5: "What's new in Update 2.0?", a5: "Update 2.0 opens a new wuxia era with fresh content to explore. Watch the trailer above for a first look.",
    q6: "How do I start playing?", a6: "Tap “Play Free”, install the game on your device and begin your journey in minutes.",
    "final.eyebrow": "Join over 100 million players", "final.h2": "Your Legend Begins",
    footer: "Independent promotional page, not affiliated with the publisher. Where Winds Meet is a trademark of its respective owners (Everstone Studio / NetEase Games). Visuals from the official trailer."
  },

  zh: {
    _name: "简体中文", _code: "ZH", _html: "zh-Hans",
    _title: "Where Winds Meet 2.0 – 免费武侠动作角色扮演游戏 | PC、主机、手机",
    _desc: "Where Winds Meet 2.0：开放世界武侠动作角色扮演游戏，可在 Windows、Steam、Epic、PS5、Xbox、iOS 和 Android 上免费畅玩。",
    "lang.label": "语言",
    "nav.home": "首页", "nav.world": "世界观", "nav.combat": "战斗", "nav.media": "媒体", "nav.faq": "常见问题",
    "cta.play": "免费畅玩", "cta.playNow": "立即免费畅玩", "cta.start": "开启江湖之旅",
    "hero.badge": "2.0 版本更新", "hero.era": "武侠新纪元", "hero.sub": "当水墨遇见刀锋",
    "hero.note": "免费游玩 · 跨平台联机 · 全球超 1 亿玩家",
    "store.dl": "立即下载", "store.on": "现已登陆",
    "sound.label": "声音", "sound.on": "开启声音", "sound.off": "关闭声音", "scroll": "向下滚动",
    "world.eyebrow": "江湖", "world.h2": "传奇世界",
    "world.lead": "公元十世纪的中国。山河破碎，门派林立，一段属于你的传奇正待书写。",
    "tab.world": "开放世界", "tab.heroes": "英雄", "tab.combat": "战斗",
    "s1.h": "广袤开放世界", "s1.p": "云雾山峦、帝国都城、失落古刹：超过 20 个区域，可徒步、策马或凌空探索。",
    "s2.h": "你的英雄，你的道路", "s2.p": "创建角色，选择武学流派，在江湖中闯出你的名号。",
    "s3.h": "电影级武侠战斗", "s3.p": "格挡、反击、绝学招式：每一场对决都如武侠电影般震撼。",
    "alt.world": "Where Winds Meet 开放世界风景", "alt.heroes": "Where Winds Meet 中身着青衣的英雄", "alt.combat": "Where Winds Meet 电影级战斗画面",
    "combat.eyebrow": "玩法", "combat.h2": "执剑问江湖",
    "f1.h": "动作战斗", "f1.p": "闪避、完美格挡与毁灭性连招。",
    "f2.h": "单人与合作", "f2.p": "完整的单人剧情，也可与好友结伴冒险。",
    "f3.h": "跨平台", "f3.p": "PC、主机与手机进度互通。",
    "f4.h": "完全免费", "f4.p": "无需付费即可游玩，没有付费变强。",
    "media.eyebrow": "媒体", "media.h2": "2.0 版本官方预告片", "media.play": "播放有声预告片", "close": "关闭",
    "faq.eyebrow": "常见问题", "faq.h2": "常见问题解答",
    q1: "Where Winds Meet 真的免费吗？", a1: "是的。游戏免费游玩，可选购买内容为外观类，不影响游戏进度。",
    q2: "可以在哪些平台上游玩？", a2: "Windows PC（Steam、Epic 游戏商城）、PlayStation 5、Xbox、iOS 和 Android。",
    q3: "可以和使用其他设备的好友一起玩吗？", a3: "可以。跨平台联机让你与 PC、主机和手机上的好友组队，游戏进度在各设备间同步。",
    q4: "这是单人游戏还是多人游戏？", a4: "两者皆有。你可以独自体验完整的剧情，也可以与其他玩家合作探索与战斗。",
    q5: "2.0 版本有哪些新内容？", a5: "2.0 版本开启武侠新纪元，带来全新的探索内容。观看上方预告片，抢先一睹为快。",
    q6: "如何开始游玩？", a6: "点击“免费畅玩”，在你的设备上安装游戏，几分钟内即可踏上江湖之旅。",
    "final.eyebrow": "加入全球超 1 亿玩家", "final.h2": "你的传奇，由此开启",
    footer: "独立推广页面，与发行商无关联。Where Winds Meet 为其各自所有者（Everstone Studio / 网易游戏）的商标。画面取自官方预告片。"
  },

  ja: {
    _name: "日本語", _code: "JA", _html: "ja",
    _title: "Where Winds Meet 2.0 – 基本プレイ無料の武侠アクションRPG | PC・コンソール・モバイル",
    _desc: "Where Winds Meet 2.0：オープンワールド武侠アクションRPG。Windows、Steam、Epic、PS5、Xbox、iOS、Androidで基本プレイ無料。",
    "lang.label": "言語",
    "nav.home": "ホーム", "nav.world": "世界観", "nav.combat": "バトル", "nav.media": "メディア", "nav.faq": "よくある質問",
    "cta.play": "無料でプレイ", "cta.playNow": "今すぐ無料でプレイ", "cta.start": "冒険を始める",
    "hero.badge": "アップデート 2.0", "hero.era": "武侠の新時代", "hero.sub": "墨と刃が出会う場所",
    "hero.note": "基本プレイ無料 · クロスプレイ · 全世界1億人以上のプレイヤー",
    "store.dl": "ダウンロード", "store.on": "配信中",
    "sound.label": "サウンド", "sound.on": "サウンドをオン", "sound.off": "サウンドをオフ", "scroll": "下へスクロール",
    "world.eyebrow": "江湖", "world.h2": "伝説の世界",
    "world.lead": "10世紀の中国。分裂した帝国、競い合う武術の流派、そしてあなたが紡ぐ運命。",
    "tab.world": "オープンワールド", "tab.heroes": "ヒーロー", "tab.combat": "バトル",
    "s1.h": "広大なオープンワールド", "s1.p": "霧深い山々、帝都、忘れられた寺院。20以上の地域を徒歩で、馬で、そして空から探索しよう。",
    "s2.h": "あなたの英雄、あなたの道", "s2.p": "キャラクターを作成し、武術の流派を選び、江湖に名を轟かせよう。",
    "s3.h": "映画のような武術バトル", "s3.p": "パリィ、カウンター、伝説の奥義。すべての決闘が武侠映画のワンシーンに。",
    "alt.world": "Where Winds Meet のオープンワールドの風景", "alt.heroes": "Where Winds Meet の翡翠色の衣装をまとったヒーロー", "alt.combat": "Where Winds Meet の映画のようなバトル",
    "combat.eyebrow": "ゲームプレイ", "combat.h2": "刃を極めよ",
    "f1.h": "アクションバトル", "f1.p": "回避、ジャストパリィ、そして強烈なコンボ。",
    "f2.h": "ソロ＆協力プレイ", "f2.p": "充実したソロストーリーに加え、仲間との冒険も。",
    "f3.h": "クロスプレイ", "f3.p": "PC・コンソール・モバイルで進行状況を引き継げます。",
    "f4.h": "完全無料", "f4.p": "プレイに支払いは不要。Pay to Win なし。",
    "media.eyebrow": "メディア", "media.h2": "2.0 公式トレーラー", "media.play": "トレーラーを音声付きで再生", "close": "閉じる",
    "faq.eyebrow": "FAQ", "faq.h2": "よくある質問",
    q1: "Where Winds Meet は本当に無料ですか？", a1: "はい。基本プレイ無料です。任意の課金は見た目のアイテムで、進行には必要ありません。",
    q2: "どのプラットフォームで遊べますか？", a2: "Windows PC（Steam、Epic Games Store）、PlayStation 5、Xbox、iOS、Android に対応しています。",
    q3: "別のデバイスの友達と一緒に遊べますか？", a3: "はい。クロスプレイで PC・コンソール・モバイルの友達とパーティを組めます。進行状況もデバイス間で引き継がれます。",
    q4: "ソロプレイですか？マルチプレイですか？", a4: "両方楽しめます。ストーリーをソロでじっくり遊ぶことも、他のプレイヤーと協力して探索・戦闘することもできます。",
    q5: "アップデート 2.0 の新要素は？", a5: "アップデート 2.0 で武侠の新時代が幕を開け、新たなコンテンツが登場します。上のトレーラーでいち早くチェックしよう。",
    q6: "どうやって始めればいいですか？", a6: "「無料でプレイ」をタップし、お使いのデバイスにゲームをインストールすれば、数分で冒険を始められます。",
    "final.eyebrow": "1億人以上のプレイヤーに加わろう", "final.h2": "あなたの伝説が始まる",
    footer: "本ページは独立したプロモーションページであり、パブリッシャーとは提携していません。Where Winds Meet は各権利者（Everstone Studio / NetEase Games）の商標です。画像は公式トレーラーより。"
  },

  ko: {
    _name: "한국어", _code: "KO", _html: "ko",
    _title: "Where Winds Meet 2.0 – 무료 무협 액션 RPG | PC, 콘솔, 모바일",
    _desc: "Where Winds Meet 2.0: 오픈 월드 무협 액션 RPG. Windows, Steam, Epic, PS5, Xbox, iOS, Android에서 무료로 플레이하세요.",
    "lang.label": "언어",
    "nav.home": "홈", "nav.world": "세계관", "nav.combat": "전투", "nav.media": "미디어", "nav.faq": "FAQ",
    "cta.play": "무료로 플레이", "cta.playNow": "지금 무료로 플레이", "cta.start": "모험 시작하기",
    "hero.badge": "2.0 업데이트", "hero.era": "새로운 무협의 시대", "hero.sub": "먹과 칼날이 만나는 곳",
    "hero.note": "무료 플레이 · 크로스플레이 · 전 세계 1억 명 이상의 플레이어",
    "store.dl": "다운로드", "store.on": "지금 이용 가능",
    "sound.label": "사운드", "sound.on": "사운드 켜기", "sound.off": "사운드 끄기", "scroll": "아래로 스크롤",
    "world.eyebrow": "강호", "world.h2": "전설의 세계",
    "world.lead": "10세기 중국. 분열된 제국, 경쟁하는 무림 문파, 그리고 당신이 써 내려갈 운명.",
    "tab.world": "오픈 월드", "tab.heroes": "영웅", "tab.combat": "전투",
    "s1.h": "광활한 오픈 월드", "s1.p": "안개 낀 산맥, 제국의 도시, 잊힌 사원까지. 20개 이상의 지역을 걷고, 말을 타고, 하늘을 날며 탐험하세요.",
    "s2.h": "나만의 영웅, 나만의 길", "s2.p": "캐릭터를 만들고 무술 유파를 선택해 강호에 이름을 떨치세요.",
    "s3.h": "영화 같은 무술 액션", "s3.p": "패링, 반격, 전설의 초식까지. 모든 결투가 무협 영화의 한 장면처럼 펼쳐집니다.",
    "alt.world": "Where Winds Meet 오픈 월드 풍경", "alt.heroes": "Where Winds Meet 비취색 의상의 영웅들", "alt.combat": "Where Winds Meet 영화 같은 전투 장면",
    "combat.eyebrow": "게임플레이", "combat.h2": "칼날을 지배하라",
    "f1.h": "액션 전투", "f1.p": "회피, 완벽한 패링, 파괴적인 콤보.",
    "f2.h": "솔로 & 협동", "f2.p": "풍성한 솔로 캠페인과 친구와 함께하는 모험.",
    "f3.h": "크로스플레이", "f3.p": "PC, 콘솔, 모바일 어디서나 진행 상황이 이어집니다.",
    "f4.h": "100% 무료", "f4.p": "플레이에 결제가 필요 없고, Pay-to-Win도 없습니다.",
    "media.eyebrow": "미디어", "media.h2": "2.0 공식 트레일러", "media.play": "트레일러를 소리와 함께 재생", "close": "닫기",
    "faq.eyebrow": "FAQ", "faq.h2": "자주 묻는 질문",
    q1: "Where Winds Meet은 정말 무료인가요?", a1: "네. 무료로 플레이할 수 있습니다. 선택 구매 항목은 외형 아이템이며 진행에 필요하지 않습니다.",
    q2: "어떤 플랫폼에서 플레이할 수 있나요?", a2: "Windows PC(Steam, Epic Games Store), PlayStation 5, Xbox, iOS, Android에서 플레이할 수 있습니다.",
    q3: "다른 기기를 쓰는 친구와 함께 플레이할 수 있나요?", a3: "네. 크로스플레이로 PC, 콘솔, 모바일의 친구와 파티를 맺을 수 있으며, 진행 상황도 기기 간에 이어집니다.",
    q4: "싱글 플레이인가요, 멀티 플레이인가요?", a4: "둘 다 가능합니다. 스토리 캠페인을 혼자 즐기거나, 다른 플레이어와 협동하여 탐험하고 전투할 수 있습니다.",
    q5: "2.0 업데이트의 새로운 점은 무엇인가요?", a5: "2.0 업데이트로 새로운 무협의 시대가 열리며, 탐험할 새로운 콘텐츠가 추가됩니다. 위의 트레일러에서 먼저 확인해 보세요.",
    q6: "어떻게 시작하나요?", a6: "“무료로 플레이”를 탭하고 기기에 게임을 설치하면 몇 분 만에 모험을 시작할 수 있습니다.",
    "final.eyebrow": "1억 명 이상의 플레이어와 함께하세요", "final.h2": "당신의 전설이 시작된다",
    footer: "본 페이지는 퍼블리셔와 무관한 독립 홍보 페이지입니다. Where Winds Meet은 각 소유자(Everstone Studio / NetEase Games)의 상표입니다. 이미지는 공식 트레일러에서 가져왔습니다."
  }
};

(function () {
  var qs = new URLSearchParams(location.search);

  // ---------- CTA links ----------
  function param(keys) { for (var i = 0; i < keys.length; i++) { var v = qs.get(keys[i]); if (v) return v; } return ""; }
  var url = CTA_URL.replace(/\$\{(\w+)\}/g, function (_, k) { return encodeURIComponent(param(MACROS[k] || [k])); });
  document.querySelectorAll("a.cta").forEach(function (a) { a.href = url; });

  // ---------- i18n ----------
  var lang, bg = document.getElementById("bg");
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || ""; }
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
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.alt = t(el.dataset.i18nAlt); });
    document.getElementById("lang-cur").textContent = d._name;
    document.getElementById("lang-code").textContent = d._code;
    document.querySelectorAll("#lang-list [data-lang]").forEach(function (li) { li.setAttribute("aria-selected", li.dataset.lang === code); });
    updateSound();
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

  // ---------- Nav: solid background on scroll + mobile menu ----------
  var nav = document.getElementById("nav"), menu = document.getElementById("menu"), burger = document.getElementById("burger");
  function onScroll() { nav.classList.toggle("solid", window.scrollY > 40); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
    if (open) closeList();
  });
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  // ---------- Background video sound ----------
  var sound = document.getElementById("sound"), ico = document.getElementById("sound-ico");
  function updateSound() {
    ico.textContent = bg.muted ? "🔇" : "🔊";
    sound.setAttribute("aria-label", t(bg.muted ? "sound.on" : "sound.off"));
  }
  sound.addEventListener("click", function () {
    bg.muted = !bg.muted;
    if (!bg.muted) { bg.currentTime = 0; bg.play(); }
    updateSound();
  });

  // ---------- World carousel (tabs + autoplay) ----------
  var tabs = document.querySelectorAll(".tab"), slides = document.querySelectorAll(".slide"), cur = 0, auto;
  function show(i) {
    cur = i;
    tabs.forEach(function (tb, j) { tb.classList.toggle("on", j === i); tb.setAttribute("aria-selected", j === i); });
    slides.forEach(function (s, j) { s.classList.toggle("on", j === i); });
  }
  function start() { clearInterval(auto); auto = setInterval(function () { show((cur + 1) % slides.length); }, 5000); }
  tabs.forEach(function (tb) { tb.addEventListener("click", function () { show(+tb.dataset.i); start(); }); });
  start();

  // ---------- Trailer modal (with sound) ----------
  var modal = document.getElementById("modal"), trailer = document.getElementById("trailer");
  function openModal() { modal.hidden = false; bg.pause(); trailer.currentTime = 0; trailer.play(); }
  function closeModal() { modal.hidden = true; trailer.pause(); bg.play(); }
  document.getElementById("open-trailer").addEventListener("click", openModal);
  document.getElementById("close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // ---------- Sticky CTA + scroll reveals ----------
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

  // ---------- Initial language: ?lang= > saved choice > English ----------
  var start0 = qs.get("lang") || stored() || DEFAULT_LANG;
  setLang(I18N[start0] ? start0 : DEFAULT_LANG, false);
})();
