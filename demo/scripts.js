/* =====================================================
   MA'LUMOTLAR (keyin API / backend bilan almashtiriladi)
   img: "" bo'lsa placeholder ko'rinadi. Rasm yo'lini yozing: "img/behbudiy.jpg"
   ===================================================== */
   const DATA = {
    hero: [
      { title: "Mahmudxo‘ja Behbudiy", text: "Haq olinur, berilmas!", link: "#", img: "", hue: 220 },
      { title: "Abdulhamid Cho‘lpon", text: "Qisqa tavsif matni", link: "#", img: "", hue: 20 },
      { title: "Abdulla Qodiriy", text: "Qisqa tavsif matni", link: "#", img: "", hue: 150 }
    ],
  
    news: [
      { title: "Cho‘lpon. Aldanish", cat: "Yangiliklar", date: "17.09.2026", img: "", link: "#" },
      { title: "Cho‘lpon. Ey, Go‘zal Farg‘ona", cat: "Yangiliklar", date: "17.09.2026", img: "", link: "#" },
      { title: "Cho‘lpon dastxati", cat: "Yangiliklar", date: "14.09.2026", img: "", link: "#" },
      { title: "Abdulla Qodiriyning Berlindagi sirdoshi", cat: "Yangiliklar", date: "06.09.2026", img: "", link: "#" },
      { title: "Cho‘lpon. Binafsha", cat: "Yangiliklar", date: "13.07.2026", img: "", link: "#" },
      { title: "Yangilik sarlavhasi", cat: "Yangiliklar", date: "01.07.2026", img: "", link: "#" }
    ],
  
    jadidlar: [
      { name: "Muhammadsharif So‘fizoda", years: "1880 — 1937", img: "" },
      { name: "Munavvarqori Abdurashidxonov", years: "1878 — 1931", img: "" },
      { name: "Ashurali Zohiriy", years: "1885 — 1938", img: "" },
      { name: "Abduqodir Shakuriy", years: "1875 — 1943", img: "" },
      { name: "Tavallo", years: "1883 — 1937", img: "" },
      { name: "Jadid ismi", years: "0000 — 0000", img: "" }
    ],
  
    manbalar: {
      "Arxiv hujjatlari": [
        { title: "ЦА ФСБ РФ. Ф-2, о-9, д-513" },
        { title: "O‘zFA arxivi. 52-jamg‘arma, 1-ro‘yxat…" },
        { title: "Botu arxiv hujjatlari" },
        { title: "Saidrizo Alizodaning O‘zSSR NKVDdagi shaxsiy…" },
        { title: "Трудовой список Фитрат" }
      ],
      "Matbuot": [
        { title: "Matbuot nashri 1" }, { title: "Matbuot nashri 2" }, { title: "Matbuot nashri 3" },
        { title: "Matbuot nashri 4" }, { title: "Matbuot nashri 5" }
      ]
    },
  
    izlanishlar: {
      "Asarlar": [
        { title: "Ислом Усмонов. Қатағон курбонлари" },
        { title: "Наим Каримов. Истиқлолни уйғотган шоир" },
        { title: "Abdulhamid Cho‘lpon" },
        { title: "Раҳим Ҳошим. Сухан аз устодон ва дӯстон" },
        { title: "Mahmudxo‘ja Behbudiy diniy-ma’rifiy qarashlarining…" }
      ],
      "Maqolalar": [{ title: "Maqola 1" }, { title: "Maqola 2" }, { title: "Maqola 3" }, { title: "Maqola 4" }, { title: "Maqola 5" }],
      "Dissertatsiyalar": [{ title: "Dissertatsiya 1" }, { title: "Dissertatsiya 2" }, { title: "Dissertatsiya 3" }, { title: "Dissertatsiya 4" }, { title: "Dissertatsiya 5" }],
      "Esdaliklar": [{ title: "Esdalik 1" }, { title: "Esdalik 2" }, { title: "Esdalik 3" }, { title: "Esdalik 4" }, { title: "Esdalik 5" }]
    },
  
    tilimlo: {
      "Asarlar": [
        { title: "Abdurauf Fitrat. Nahf" },
        { title: "Sharq madaniyati va yozuvi" },
        { title: "Turkistoncha til qoidasi" },
        { title: "Очерк по истории развития движения нового алфавита…" },
        { title: "Qayum Ramazon. O‘zbek tilining imlo qoidalari" }
      ],
      "Maqolalar": [{ title: "Maqola 1" }, { title: "Maqola 2" }, { title: "Maqola 3" }, { title: "Maqola 4" }, { title: "Maqola 5" }],
      "Hikmatlar": [{ title: "Hikmat 1" }, { title: "Hikmat 2" }, { title: "Hikmat 3" }, { title: "Hikmat 4" }, { title: "Hikmat 5" }]
    },
  
    muxtoriyat: {
      "Asarlar": [
        { title: "Qahramon Rajabov. Farg‘ona vodiysidagi…" },
        { title: "Ш. Камолиддин, Т. Коджаоғлу…" },
        { title: "Saidakbar A’zamxo‘jayev. Turkiston muxtoriyati" },
        { title: "История Туркестанской автономии в архивных…" },
        { title: "Boymirza Hayit. “Bosmachilar”: Turkiston…" }
      ],
      "Maqolalar": [{ title: "Maqola 1" }, { title: "Maqola 2" }, { title: "Maqola 3" }, { title: "Maqola 4" }, { title: "Maqola 5" }],
      "She'rlar": [{ title: "She’r 1" }, { title: "She’r 2" }, { title: "She’r 3" }, { title: "She’r 4" }, { title: "She’r 5" }],
      "Esdaliklar": [{ title: "Esdalik 1" }, { title: "Esdalik 2" }, { title: "Esdalik 3" }, { title: "Esdalik 4" }, { title: "Esdalik 5" }]
    },
  
    media: {
      "Ko‘ruvlar": [
        { t: "Millat qahramonlari", s: "Tashkilotchilik faoliyati va “Oltoy” jamiyati" },
        { t: "Millat qahramonlari", s: "Murojaatlari" }
      ],
      "Suratlar": [{ t: "Suratlar", s: "Albom 1" }, { t: "Suratlar", s: "Albom 2" }],
      "Eshituvlar": [{ t: "Eshituvlar", s: "Audio 1" }, { t: "Eshituvlar", s: "Audio 2" }]
    },
  
    links: ["Lex.uz", "Havola 2", "Fanlar akademiyasi Tarix instituti", "Test (Quiz)", "Davlat portali", "Prezidentga murojaat", "Havola 7"]
  };
  
  /* =====================================================
     YORDAMCHI FUNKSIYALAR
     ===================================================== */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const hue = i => (i * 47 + 200) % 360;
  const imgOrNothing = src => (src ? `<img src="${src}" alt="" loading="lazy">` : "");
  
  /* =====================================================
     HEADER
     ===================================================== */
  $("#burger").addEventListener("click", () => $("#nav").classList.toggle("open"));
  $$(".nav .has-sub > a").forEach(a =>
    a.addEventListener("click", e => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        a.parentElement.classList.toggle("open");
      }
    })
  );
  $("#searchBtn").addEventListener("click", () => {
    const box = $("#searchBox");
    box.classList.toggle("open");
    if (box.classList.contains("open")) $("input", box).focus();
  });
  $(".lang-btn").addEventListener("click", () => $("#lang").classList.toggle("open"));
  document.addEventListener("click", e => {
    if (!e.target.closest("#lang")) $("#lang").classList.remove("open");
  });
  
  /* =====================================================
     HERO SLIDER
     ===================================================== */
  (function heroSlider() {
    const wrap = $("#heroSlides");
    wrap.innerHTML = DATA.hero.map((s, i) => `
      <div class="hero-slide ${i === 0 ? "active" : ""}">
        <div class="hero-bg" style="--h:${s.hue};${s.img ? `background-image:url('${s.img}')` : ""}"></div>
        <div class="hero-content">
          <h1>${s.title}</h1>
          <p>${s.text}</p>
          <a href="${s.link}" class="btn">To‘liq</a>
        </div>
      </div>`).join("");
  
    const slides = $$(".hero-slide", wrap);
    let cur = 0, timer;
    const go = n => {
      slides[cur].classList.remove("active");
      cur = (n + slides.length) % slides.length;
      slides[cur].classList.add("active");
    };
    const auto = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 6000); };
    $("#heroPrev").addEventListener("click", () => { go(cur - 1); auto(); });
    $("#heroNext").addEventListener("click", () => { go(cur + 1); auto(); });
    auto();
  })();
  
  /* =====================================================
     YANGILIKLAR
     ===================================================== */
  $("#newsTrack").innerHTML = DATA.news.map((n, i) => `
    <article class="news-card">
      <h3>${n.title}</h3>
      <div class="news-meta">
        <div><b>${n.cat}</b><time>${n.date}</time></div>
        <a href="${n.link}" class="btn">To‘liq</a>
      </div>
      <div class="news-img" style="--h:${hue(i)}">${imgOrNothing(n.img)}</div>
    </article>`).join("");
  
  /* =====================================================
     JADIDLAR
     ===================================================== */
  $("#portraitTrack").innerHTML = DATA.jadidlar.map((p, i) => `
    <a href="#" class="portrait" style="--h:${hue(i)}">
      ${imgOrNothing(p.img)}
      <div class="cap">${p.name}<small>(${p.years})</small></div>
    </a>`).join("");
  
  /* =====================================================
     TABLI BO'LIMLAR (Manbalar, Izlanishlar, Til va imlo, Turkiston muxtoriyati, Ko'r-eshit-o'qi)
     ===================================================== */
  $$(".tabbed").forEach(section => {
    const data = DATA[section.dataset.section];
    const isVideo = section.dataset.type === "video";
    const tabsEl = $(".tabs", section);
    const cardsEl = $(".cards", section);
    const names = Object.keys(data);
  
    tabsEl.innerHTML = names.map((n, i) => `<button class="tab ${i === 0 ? "active" : ""}" data-tab="${n}">${n}</button>`).join("");
  
    const render = name => {
      cardsEl.innerHTML = data[name].map((c, i) =>
        isVideo
          ? `<a href="#" class="video-card"><div class="play">&#9654;</div><div class="t">${c.t}</div><div class="s">${c.s}</div></a>`
          : `<a href="#" class="card" style="--h:${hue(i)}">${imgOrNothing(c.img)}${c.img ? "" : `<div class="ph">${c.title.charAt(0)}</div>`}<div class="cap">${c.title}</div></a>`
      ).join("");
    };
  
    tabsEl.addEventListener("click", e => {
      const b = e.target.closest(".tab");
      if (!b) return;
      $$(".tab", tabsEl).forEach(t => t.classList.remove("active"));
      b.classList.add("active");
      render(b.dataset.tab);
    });
    render(names[0]);
  
    // video bo'limi uchun nuqtalar
    const dots = $(".static-dots", section);
    if (dots) {
      dots.innerHTML = Array.from({ length: 8 }, (_, i) => `<i class="${i === 0 ? "active" : ""}"></i>`).join("");
      dots.addEventListener("click", e => {
        if (e.target.tagName !== "I") return;
        $$("i", dots).forEach(d => d.classList.remove("active"));
        e.target.classList.add("active");
      });
    }
  });
  
  /* =====================================================
     FOYDALI HAVOLALAR
     ===================================================== */
  $("#linksTrack").innerHTML = DATA.links.map(l => `<a href="#" class="link-item">${l}</a>`).join("");
  
  /* =====================================================
     UMUMIY CAROUSEL (strelka + nuqtalar)
     ===================================================== */
  $$("[data-carousel]").forEach(car => {
    const track = $(".track", car);
    const prev = $(".prev", car);
    const next = $(".next", car);
    const dotsEl = $(".dots", car);
    const step = () => Math.max(track.clientWidth * 0.8, 200);
  
    if (prev) prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    if (next) next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  
    if (dotsEl) {
      const buildDots = () => {
        const pages = Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth));
        dotsEl.innerHTML = Array.from({ length: pages }, (_, i) => `<i data-i="${i}"></i>`).join("");
        updateDots();
      };
      const updateDots = () => {
        const pages = $$("i", dotsEl).length;
        const maxScroll = track.scrollWidth - track.clientWidth;
        const idx = maxScroll > 0 ? Math.round((track.scrollLeft / maxScroll) * (pages - 1)) : 0;
        $$("i", dotsEl).forEach((d, i) => d.classList.toggle("active", i === idx));
      };
      dotsEl.addEventListener("click", e => {
        if (e.target.tagName !== "I") return;
        const pages = $$("i", dotsEl).length;
        const maxScroll = track.scrollWidth - track.clientWidth;
        track.scrollTo({ left: (maxScroll / Math.max(pages - 1, 1)) * Number(e.target.dataset.i), behavior: "smooth" });
      });
      track.addEventListener("scroll", updateDots, { passive: true });
      window.addEventListener("resize", buildDots);
      buildDots();
    }
  });
  
  /* =====================================================
     YUQORIGA TUGMASI
     ===================================================== */
  const toTop = $("#toTop");
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 600), { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));