/* =============================================
   SLIDES MA'LUMOTLARI
   (hero va jadidlar carousellarida ishlatiladi)
============================================= */

const slides = [
  {
    name: "Mahmudxo'ja Behbudiy",
    description: "Tarix eng mashhur va mo'tabar hodisalardan boshlanur.",
    image:
      "https://backend.jadidlar.uz/media/slayder/ChatGPT_Image_26_%D0%B4%D0%B5%D0%BA._2025_%D0%B3._12_38_01_WLkBiX9.png",
    link: "#behbudiy",
  },
  {
    name: "G'ozi Yunus",
    description: "Saodat bashari ittifoqidadur.",
    image: "https://backend.jadidlar.uz/media/slayder/yunusgozi_PSDCHkR.png",
    link: "#gozi-yunus",
  },
  {
    name: "Hoji Muin",
    description: "Aksarsiz millat jonsiz gavda hukmidadir.",
    image:
      "https://backend.jadidlar.uz/media/slayder/%D0%A5%D0%BE%D0%B6%D0%B8_%D0%9C%D1%83%D0%B8%D0%BD_1.png",
    link: "#hoji-muin",
  },
  {
    name: "Ashurali Zohiriy",
    description: "Millat tilini yo'qotsa, dini va millatini ham yo'qotur.",
    image:
      "https://backend.jadidlar.uz/media/slayder/%D0%90%D1%88%D1%83%D1%80%D0%B0%D0%BB%D0%B8.png",
    link: "#ashurali",
  },
  {
    name: "Abdulla Avloniy",
    description: "Tarbiya biz uchun yo hayot, yo mamot masalasidur.",
    image:
      "https://backend.jadidlar.uz/media/slayder/snapedit_1709296294610.jpeg",
    link: "#avloniy",
  },
  {
    name: "Vadud Mahmud",
    description: "Boshimizga har balo kelsa, ilmsizligimizdan keladur.",
    image: "https://backend.jadidlar.uz/media/slayder/Mahmud.png",
    link: "#vadud",
  },
  {
    name: "Abdulhamid Cho'lpon",
    description: "Adabiyot yashasa - millat yashar.",
    image: "https://backend.jadidlar.uz/media/slayder/cHO.jpeg",
    link: "#cholpon",
  },
  {
    name: "Sadriddin Ayniy",
    description: "Har millat o'z tili ila faxr etar.",
    image:
      "https://backend.jadidlar.uz/media/slayder/snapedit_1714970696860.jpeg",
    link: "#sadriddin",
  },
  {
    name: "Abdurauf Fitrat",
    description: "Har bir millat taraqqiysi uchun asosiy sabab ilmdir.",
    image:
      "https://backend.jadidlar.uz/media/slayder/snapedit_1709970407706.jpeg",
    link: "#abdurauf",
  },
  {
    name: "Munavvarqori Abdurashidxonov",
    description: "Isrof o'rinsiz va zarursiz yerrlarga moni sarf etmakdir.",
    image: "https://backend.jadidlar.uz/media/slayder/Munavvar_Q1g7Ccy.png",
    link: "#munavvarqori",
  },
  {
    name: "Hamza Hakimzoda Niyoziy",
    description: "Millat ma'rifat bilan tirik",
    image:
      "https://backend.jadidlar.uz/media/slayder/Hamza_Hakimzoda_kwgc8O6.png",
    link: "#hamza",
  },
  {
    name: "Begali Qosimov",
    description: "... yolg'iz din ushlansa, dunyo qo'ldan ketadi.",
    image: "https://backend.jadidlar.uz/media/slayder/begali_qosim_1QoefX0.jpg",
    link: "#begali",
  },
];

/* =============================================
   HERO CAROUSEL
   (birinchi, katta slayder – rasm + matn)
============================================= */

const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");
const heroPerson = document.getElementById("heroPerson");
const heroLink = document.getElementById("heroLink");
const heroContent = document.getElementById("heroContent");
const heroImage = document.getElementById("heroImage");
const heroSlider = document.getElementById("heroSlider");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");
const heroPagination = document.getElementById("heroPagination");

let heroCurrentSlide = 0;
let heroAutoPlay;
let heroAnimating = false;

/* DOTS YARATISH */

slides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.className = "hero-dot";
  dot.type = "button";
  dot.setAttribute("aria-label", slide.name);

  dot.addEventListener("click", () => {
    heroShowSlide(index);
    heroRestartAutoPlay();
  });

  heroPagination.appendChild(dot);
});

const heroDots = document.querySelectorAll(".hero-dot");

/* SLIDE KO'RSATISH */

function heroShowSlide(index) {
  if (heroAnimating) return;

  heroAnimating = true;
  heroCurrentSlide = (index + slides.length) % slides.length;

  heroContent.classList.add("fade-out");
  heroImage.classList.add("fade-out");

  setTimeout(() => {
    const slide = slides[heroCurrentSlide];

    heroTitle.textContent = slide.name;
    heroDescription.textContent = slide.description;
    heroPerson.src = slide.image;
    heroPerson.alt = slide.name;
    heroLink.href = slide.link;

    heroDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === heroCurrentSlide);
    });

    heroContent.classList.remove("fade-out");
    heroImage.classList.remove("fade-out");

    setTimeout(() => {
      heroAnimating = false;
    }, 600);
  }, 500);
}

/* NEXT / PREVIOUS */

heroNext.addEventListener("click", () => {
  heroShowSlide(heroCurrentSlide + 1);
  heroRestartAutoPlay();
});

heroPrev.addEventListener("click", () => {
  heroShowSlide(heroCurrentSlide - 1);
  heroRestartAutoPlay();
});

/* AVTOMATIK */

function heroStartAutoPlay() {
  clearInterval(heroAutoPlay);
  heroAutoPlay = setInterval(() => {
    heroShowSlide(heroCurrentSlide + 1);
  }, 5000);
}

function heroRestartAutoPlay() {
  heroStartAutoPlay();
}

heroStartAutoPlay();

/* DRAG (sichqoncha / sensor) */

let heroStartX = 0;
let heroDragging = false;

heroSlider.addEventListener("pointerdown", (e) => {
  if (e.target.closest("button, a")) return;
  heroStartX = e.clientX;
  heroDragging = true;
  heroSlider.classList.add("dragging");
  heroSlider.setPointerCapture(e.pointerId);
});

heroSlider.addEventListener("pointerup", (e) => {
  if (!heroDragging) return;
  const diff = e.clientX - heroStartX;
  if (Math.abs(diff) > 60) {
    diff < 0
      ? heroShowSlide(heroCurrentSlide + 1)
      : heroShowSlide(heroCurrentSlide - 1);
    heroRestartAutoPlay();
  }
  heroDragging = false;
  heroSlider.classList.remove("dragging");
});

heroSlider.addEventListener("pointercancel", () => {
  heroDragging = false;
  heroSlider.classList.remove("dragging");
});

heroSlider.addEventListener("mouseenter", () => clearInterval(heroAutoPlay));
heroSlider.addEventListener("mouseleave", () => {
  if (!heroDragging) heroStartAutoPlay();
});

/* DASTLABKI HOLAT */

heroDots[0].classList.add("active");

/* =============================================
   JADIDLAR CAROUSEL
   (kichik kartalar slayderi - rasmlar API dan olinadi)
============================================= */

// API dan olingan rasmlar va ma'lumotlar (backend.jadidlar.uz/api/jadidlar/)
let jadidlarList = [
  {
    id: 56,
    fullname: "Mahmudxo‘ja Behbudiy",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Mahmudxoja_Behbudiy.jpg",
  },
  {
    id: 7,
    fullname: "Munavvarqori Abdurashidxonov",
    image: "https://backend.jadidlar.uz/media/image/jadid/Munavvar_5VD2p8g.jpg",
  },
  {
    id: 31,
    fullname: "Abdurauf Fitrat",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Abdurauf_Fitrat_NrcgW0e.jpg",
  },
  {
    id: 10,
    fullname: "Abdulla Avloniy",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/8cVFdh7BAKyyukKSO9QAW0s7twe5krP2eDWmSPFj.jpg",
  },
  {
    id: 5,
    fullname: "Abdulhamid Cho‘lpon",
    image: "https://backend.jadidlar.uz/media/image/jadid/cholpon_wE3WVig.jpg",
  },
  {
    id: 59,
    fullname: "Ubaydullaxo‘ja Asadullaxo‘jayev",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Ubaydullaxoja_Asadullaxojayev.jpg",
  },
  {
    id: 38,
    fullname: "Abdulla Qodiriy",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Abdulla_Qodiriy_39LON6y.jpg",
  },
  {
    id: 12,
    fullname: "Ashurali Zohiriy",
    image: "https://backend.jadidlar.uz/media/image/jadid/Ashurali_Zohiriy.jpg",
  },
  {
    id: 44,
    fullname: "Muhammadsharif So‘fizoda",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Muhammadsharif_Sozfizoda_B2zf9MV.jpg",
  },
  {
    id: 15,
    fullname: "Abduqodir Shakuriy",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Abduqodir_Shakuriy.jpg",
  },
  {
    id: 25,
    fullname: "Sadriddin Ayniy",
    image: "https://backend.jadidlar.uz/media/image/jadid/Sadriddin_Ayniy.jpg",
  },
  {
    id: 8,
    fullname: "Hamza Hakimzoda Niyoziy",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Hamza_Hakimzoda_Niyoziy_E3JZNNb.jpg",
  },
  {
    id: 49,
    fullname: "Tavallo",
    image: "https://backend.jadidlar.uz/media/image/jadid/Tavallo.jpg",
  },
  {
    id: 14,
    fullname: "Obidjon Mahmudov",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Obidjon_Mahmudov_7adBbGD.jpg",
  },
  {
    id: 33,
    fullname: "Is'hoqxon Ibrat",
    image: "https://backend.jadidlar.uz/media/image/jadid/Ishoqxon_Ibrat.jpg",
  },
  {
    id: 58,
    fullname: "G‘ulom Zafariy",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Gulom_Zafariy_tVloMc6.jpg",
  },
  {
    id: 224,
    fullname: "Muxtor Saidjonov",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/%D0%9C%D1%83%D1%85%D1%82%D0%BE%D1%80_%D0%A1%D0%B0%D0%B8%D0%B4%D0%B6%D0%BE%D0%BD%D0%BE%D0%B2.jpg",
  },
  {
    id: 244,
    fullname: "Mirzo Abdulvohid Burhonov - Munzim",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/%D0%9C%D1%83%D0%BD%D0%B7%D0%B8%D0%BC.jpg",
  },
  {
    id: 156,
    fullname: "Said Ahmad Vasliy",
    image: "https://backend.jadidlar.uz/media/image/jadid/logo_2_W4ze2xk.jpeg",
  },
  {
    id: 64,
    fullname: "Hoji Muin",
    image:
      "https://backend.jadidlar.uz/media/image/jadid/Hoji_Muin_h1AJBEn.jpg",
  },
];

const jadidlarTrack = document.getElementById("jadidlarTrack");
const jadidlarWindow = document.getElementById("jadidlarWindow");
const jadidlarPrev = document.getElementById("jadidlarPrev");
const jadidlarNext = document.getElementById("jadidlarNext");
const jadidlarPagination = document.getElementById("jadidlarPagination");

let jadidlarIndex = 0;
let jadidlarTimer;
let jadidlarStartX = 0;
let jadidlarDragging = false;
let jadidlarVisible = 5;
let jadidlarGap = 18;

/* EKRANGA QARAB KARTALAR SONI */

function jadidlarResponsive() {
  if (window.innerWidth <= 650) {
    jadidlarVisible = 1;
    jadidlarGap = 13;
  } else if (window.innerWidth <= 1100) {
    jadidlarVisible = 3;
    jadidlarGap = 18;
  } else {
    jadidlarVisible = 5;
    jadidlarGap = 18;
  }
}

/* KARTALAR YARATISH */

function jadidlarCreateCards() {
  if (!jadidlarTrack) return;
  jadidlarTrack.innerHTML = "";

  jadidlarList.forEach((item) => {
    const card = document.createElement("a");
    card.className = "jadidlar-card";
    card.href = `https://jadidlar.uz/jadidlar/${item.id}`;
    card.target = "_blank";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.fullname;
    img.loading = "lazy";
    img.draggable = false;

    const info = document.createElement("div");
    info.className = "jadidlar-card-info";

    const name = document.createElement("h3");
    name.textContent = item.fullname;

    info.appendChild(name);
    card.appendChild(img);
    card.appendChild(info);
    jadidlarTrack.appendChild(card);
  });
}

/* DOTS YARATISH */

function jadidlarCreateDots() {
  if (!jadidlarPagination) return;
  jadidlarPagination.innerHTML = "";

  const maxIndex = Math.max(0, jadidlarList.length - jadidlarVisible);
  const totalDots = Math.min(8, maxIndex + 1);

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("button");
    dot.className = "jadidlar-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `${i + 1}-jadid`);

    dot.addEventListener("click", () => {
      const targetIndex = Math.round(
        (i / Math.max(1, totalDots - 1)) * maxIndex
      );
      jadidlarGoTo(targetIndex);
      jadidlarRestart();
    });

    jadidlarPagination.appendChild(dot);
  }
}

/* DOTS YANGILASH */

function jadidlarUpdateDots() {
  if (!jadidlarPagination) return;
  const dots = jadidlarPagination.querySelectorAll(".jadidlar-dot");
  if (!dots.length) return;

  const maxIndex = Math.max(0, jadidlarList.length - jadidlarVisible);
  const activeDotIndex =
    maxIndex > 0
      ? Math.round((jadidlarIndex / maxIndex) * (dots.length - 1))
      : 0;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeDotIndex);
  });
}

/* SURISH */

function jadidlarGoTo(index) {
  if (!jadidlarTrack) return;
  jadidlarResponsive();

  const cards = jadidlarTrack.querySelectorAll(".jadidlar-card");
  if (!cards.length) return;

  const maxIndex = Math.max(0, cards.length - jadidlarVisible);

  if (index > maxIndex) index = 0;
  if (index < 0) index = maxIndex;

  jadidlarIndex = index;

  const cardWidth = cards[0].getBoundingClientRect().width;
  const offset = jadidlarIndex * (cardWidth + jadidlarGap);

  jadidlarTrack.style.transform = `translateX(-${offset}px)`;
  jadidlarUpdateDots();
}

function jadidlarNextSlide() {
  jadidlarGoTo(jadidlarIndex + 1);
}
function jadidlarPrevSlide() {
  jadidlarGoTo(jadidlarIndex - 1);
}

/* AUTOPLAY */

function jadidlarStartAuto() {
  clearInterval(jadidlarTimer);
  jadidlarTimer = setInterval(() => {
    jadidlarNextSlide();
  }, 5000);
}

function jadidlarRestart() {
  jadidlarStartAuto();
}

/* TUGMALAR */

jadidlarNext.addEventListener("click", () => {
  jadidlarNextSlide();
  jadidlarRestart();
});
jadidlarPrev.addEventListener("click", () => {
  jadidlarPrevSlide();
  jadidlarRestart();
});

/* DRAG */

jadidlarWindow.addEventListener("pointerdown", (e) => {
  if (e.target.closest("a")) return;
  jadidlarStartX = e.clientX;
  jadidlarDragging = true;
  jadidlarWindow.classList.add("dragging");
  jadidlarWindow.setPointerCapture(e.pointerId);
});

jadidlarWindow.addEventListener("pointerup", (e) => {
  if (!jadidlarDragging) return;
  const diff = e.clientX - jadidlarStartX;
  if (Math.abs(diff) > 50) {
    diff < 0 ? jadidlarNextSlide() : jadidlarPrevSlide();
    jadidlarRestart();
  }
  jadidlarDragging = false;
  jadidlarWindow.classList.remove("dragging");
});

jadidlarWindow.addEventListener("pointercancel", () => {
  jadidlarDragging = false;
  jadidlarWindow.classList.remove("dragging");
});

jadidlarWindow.addEventListener("mouseenter", () =>
  clearInterval(jadidlarTimer)
);
jadidlarWindow.addEventListener("mouseleave", () => {
  if (!jadidlarDragging) jadidlarStartAuto();
});

window.addEventListener("resize", () => {
  jadidlarResponsive();
  jadidlarGoTo(jadidlarIndex);
});

/* BOSHLASH */

jadidlarCreateCards();
jadidlarCreateDots();
jadidlarResponsive();
jadidlarGoTo(0);
jadidlarStartAuto();

/* API DAN JADIDLARNI YUKLASH */
async function fetchJadidlarFromApi() {
  try {
    const res = await fetch("https://backend.jadidlar.uz/api/jadidlar/");
    if (!res.ok) return;
    const data = await res.json();
    if (data && Array.isArray(data.results) && data.results.length > 0) {
      jadidlarList = data.results.map((x) => ({
        id: x.id,
        fullname: x.fullname,
        image: x.image,
      }));
      jadidlarCreateCards();
      jadidlarCreateDots();
      jadidlarGoTo(0);
    }
  } catch (e) {
    // CORS yoki tarmoq bo'lmaganda jadidlarList zaxirasi ishlaydi
  }
}
fetchJadidlarFromApi();

/* =============================================
   YANGILIKLAR CAROUSEL
============================================= */

(() => {
  const windowEl = document.getElementById("newsWindow");
  const track = document.getElementById("newsTrack");
  const prevBtn = document.getElementById("newsPrev");
  const nextBtn = document.getElementById("newsNext");
  const pagination = document.getElementById("newsPagination");

  if (!windowEl || !track || !prevBtn || !nextBtn || !pagination) return;

  const cards = Array.from(track.querySelectorAll(".news-card"));

  let currentIndex = 0;
  let autoPlay;
  let startX = 0;
  let dragging = false;

  function getStep() {
    const card = cards[0];
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function getMaxIndex() {
    const step = getStep();
    if (!step) return 0;
    const visible = Math.floor((windowEl.clientWidth + 1) / step);
    return Math.max(0, cards.length - visible);
  }

  function createDots() {
    pagination.innerHTML = "";
    const maxIndex = getMaxIndex();

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "news-dot";
      dot.setAttribute("aria-label", `${i + 1}-yangiliklar`);

      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
        restartAutoPlay();
      });

      pagination.appendChild(dot);
    }
  }

  function updateCarousel() {
    const maxIndex = getMaxIndex();
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    track.style.transform = `translateX(-${currentIndex * getStep()}px)`;

    const dots = pagination.querySelectorAll(".news-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function moveNext() {
    const max = getMaxIndex();
    if (max === 0) return;
    currentIndex = currentIndex >= max ? 0 : currentIndex + 1;
    updateCarousel();
  }

  function movePrev() {
    const max = getMaxIndex();
    if (max === 0) return;
    currentIndex = currentIndex <= 0 ? max : currentIndex - 1;
    updateCarousel();
  }

  function startAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
      moveNext();
    }, 5000);
  }

  function restartAutoPlay() {
    startAutoPlay();
  }

  nextBtn.addEventListener("click", () => {
    moveNext();
    restartAutoPlay();
  });
  prevBtn.addEventListener("click", () => {
    movePrev();
    restartAutoPlay();
  });

  windowEl.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a, button")) return;
    startX = e.clientX;
    dragging = true;
    windowEl.setPointerCapture(e.pointerId);
  });

  windowEl.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 50) {
      diff < 0 ? moveNext() : movePrev();
      restartAutoPlay();
    }
    dragging = false;
  });

  windowEl.addEventListener("pointercancel", () => {
    dragging = false;
  });

  windowEl.addEventListener("mouseenter", () => clearInterval(autoPlay));
  windowEl.addEventListener("mouseleave", () => {
    if (!dragging) startAutoPlay();
  });

  window.addEventListener("resize", () => {
    createDots();
    updateCarousel();
  });

  /* BOSHLASH */
  createDots();
  updateCarousel();
  startAutoPlay();
})();

document.addEventListener("DOMContentLoaded", () => {
  // Barcha section'lardagi tablarni alohida-alohida boshqarish
  const sections = document.querySelectorAll(
    ".sources-section, .research-section"
  );

  sections.forEach((section) => {
    const tabButtons = section.querySelectorAll(".tab-btn");
    const tabContents = section.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Faqat shu section ichidagi active klasslarni olib tashlash
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Bosilgan tabga active qo'shish
        button.classList.add("active");

        // Mos tab contentni ko'rsatish
        const tabId = button.getAttribute("data-tab");
        const targetContent = section.querySelector(`#${tabId}`);

        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const linguaButtons = document.querySelectorAll(".lingua-tab-btn");
  const linguaContents = document.querySelectorAll(".lingua-tab-content");

  linguaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      linguaButtons.forEach((btn) => btn.classList.remove("active"));
      linguaContents.forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
      });

      button.classList.add("active");

      const targetId = button.getAttribute("data-lingua-tab");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.style.display = "block";
      }
    });
  });
});

// Ma'lumotlarni shu yerdan tahrirlaysiz
const jadidContentData = {
  asarlar: [
    {
      title: "A. Qo'qonboyev. Farg'onada sovet hokimiyatini...",
      image: "https://backend.jadidlar.uz/media/images/Fargona.jpg",
      fileUrl: "#",
    },
    {
      title: "История Туркестанский автономии в архивных документах",
      image: "https://backend.jadidlar.uz/media/images/TMQR.jpg",
      fileUrl: "#",
    },
    {
      title: "Qahramon Rajabov. Turkiston muxtoriyati tarixi",
      image: "https://backend.jadidlar.uz/media/images/jallod.png",
      fileUrl: "#",
    },
    {
      title:
        "Qahramon Rajabov. Turkiston muxtoriyati vazirlari hamda milliy majlis a'zolari hayoti taqdiri",
      image: "https://backend.jadidlar.uz/media/images/%D0%A4%D0%B0%D1%80.jpg",
      fileUrl: "#",
    },
    {
      title: "Boymirza Hayit. “Bosmachilar”: Turkiston milliy kurashi tarixi",
      image:
        "https://backend.jadidlar.uz/media/images/%D0%9A%D0%BE%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%8F.jpg",
      fileUrl: "#",
    },
  ],
  maqolalar: [
    {
      title: "Xo‘qandda bo‘lg‘an voqea",
      image:
        "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_ccWahal.jpeg",
      fileUrl: "#",
    },
    {
      title: "Favqulotda namoyish",
      image:
        "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_ZL7HNMv.jpeg",
      fileUrl: "#",
    },
    {
      title: "Namoyish to'g'risinda",
      image: "https://backend.jadidlar.uz/media/images/Hurriyat_9u4ouXl.jpeg",
      fileUrl: "#",
    },
    {
      title: "G'ulom Zafariy. Bolshiviklar va muxtoriyat hukumati",
      image:
        "https://backend.jadidlar.uz/media/images/Ishchilar_dunyosi_GStpuNf.jpeg",
      fileUrl: "#",
    },
    {
      title: "Muxtoriyat hukumatining vazifasi",
      image:
        "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_2oCqmir.jpeg",
      fileUrl: "#",
    },
  ],
  // Bo'sh massiv bo'lsa "Ma'lumot yo'q" ko'rinadi
  sherlar: [],
  esdaliklar: [
    {
      title: "Mahmudxo'ja Behbudiy. Behbudiy hazratlari to'g'risida",
      image:
        "https://backend.jadidlar.uz/media/images/537MvkccnlVOHC1IT5954Ld0VJtZiy75qDfz1rZx.jpg",
      fileUrl: "#",
    },
    {
      title: "Abdulla Qodiriy. Otam haqida",
      image:
        "https://backend.jadidlar.uz/media/images/lPKeTI1hTYnyTpl8AGDyfWTzMyOdAAsYZafCudtb.jpg",
      fileUrl: "#",
    },
    {
      title:
        "Shokirjon Rahimiy. Xon o'rdasi (Osori atiqa qo'mitasining a'zosi Shokirj...",
      image:
        "https://backend.jadidlar.uz/media/images/Z5UiJGrwK8AaGAYXOVo3V2gdJCEqP4AwnubBO4gI.png",
      fileUrl: "#",
    },
    {
      title: "Abdulla Qodiriy. Xotiralar",
      image:
        "https://backend.jadidlar.uz/media/images/1Qmd9ygg2Sq7BrnnrgCDShLFTsr30DC0fMyYUsk7.jpg",
      fileUrl: "#",
    },
    {
      title: "Tavallo. Xotiralar",
      image:
        "https://backend.jadidlar.uz/media/images/MbFGwNonFaAAia2RHlR4OAGvj0be9BTSJIpzhn4E.jpg",
      fileUrl: "#",
    },
  ],
};

const cardsBox = document.getElementById("jadidCardsBox");
const emptyBox = document.getElementById("jadidEmptyBox");
const tabButtonsList = document.querySelectorAll(".jadid-tab-btn");

function renderJadidCards(categoryName) {
  const currentItems = jadidContentData[categoryName] || [];
  cardsBox.innerHTML = "";

  if (currentItems.length === 0) {
    cardsBox.style.display = "none";
    emptyBox.style.display = "flex";
    return;
  }

  emptyBox.style.display = "none";
  cardsBox.style.display = "grid";

  currentItems.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "jadid-card";

    cardEl.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="jadid-card-image">
      
      <div class="jadid-top-actions">
        <button class="jadid-icon-btn" title="Yuklab olish" onclick="event.stopPropagation()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button class="jadid-icon-btn" title="Ulashish" onclick="event.stopPropagation()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 14 20 9 15 4"/>
            <path d="M4 20v-7a4 4 0 0 1 4-4h12"/>
          </svg>
        </button>
      </div>

      <div class="jadid-card-overlay">
        <h3 class="jadid-card-title">${item.title}</h3>
      </div>
    `;

    cardsBox.appendChild(cardEl);
  });
}

tabButtonsList.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtonsList.forEach((b) => b.classList.remove("active-tab"));
    btn.classList.add("active-tab");
    renderJadidCards(btn.getAttribute("data-target"));
  });
});

// Sahifa yuklanganda birinchi bo'limni chiqarish
renderJadidCards("asarlar");

// --- MA'LUMOTLAR ---
const mediaData = {
  koruvlar: [
    {
      title: "",
      image:
        "https://backend.jadidlar.uz/media/files/LH10jNkwZzir6dgXDJ4mYPyyjuUbBCCh_front.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_OEpSbo8.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/fargona.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/aldanish.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/vijdon.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_gowj0dV.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_0ueKPVJ.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_IGLWnht.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_FGa5LIJ.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_msnuP8z.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_T1Gf6rz.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image: "https://backend.jadidlar.uz/media/files/Untitled_cWG7O3o.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image:
        "https://backend.jadidlar.uz/media/files/photo_2026-03-28_17-59-35.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image:
        "https://backend.jadidlar.uz/media/files/photo_2026-02-08_15-21-11.jpg",
      videoUrl: "#",
    },
    {
      title: "",
      image:
        "https://backend.jadidlar.uz/media/files/photo_2026-02-07_18-02-02.jpg",
      videoUrl: "#",
    },
  ],

  suratlar: [
    { image: "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-38-23.jpg" },
    { image: "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-22-47.jpg",},
    { image:"https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-46-06.jpg",},
    { image:"https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-18-52.jpg",},
    { image: "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-57-39.jpg" },
    { image: "https://backend.jadidlar.uz/media/images/photo_2025-08-04_14-45-42.jpg" },
    { image: "https://backend.jadidlar.uz/media/images/Dada_3.jpg" },
    { image: "https://backend.jadidlar.uz/media/images/Ibrat.jpg" },
    { image: "https://backend.jadidlar.uz/media/images/OM9BO8MswNbFwVRcJ3iSITfYoAPHfvM9w9V6v8gR.jpg"},
    { image: "https://backend.jadidlar.uz/media/images/VyunGm3WyqqOqtFH8OjFt4gbn7fM0IDkb2CLjOB0.jpg"},
    { image: "https://backend.jadidlar.uz/media/images/uydNfl1Q2G3IriJv2JTw5V45i9kEp0aZw7EOfzI5.jpg"},
    { image: "https://backend.jadidlar.uz/media/images/MYElTto7XnulpLVcULpFTrRj8HvWLrnOXANGi13G.jpg"},
    { image: "https://backend.jadidlar.uz/media/images/huBHX9JNoF5TQzxTxgsZNFrbKBHH2OOFXGF1dFX6.jpg"},
    { image: "https://backend.jadidlar.uz/media/images/lw30P0YBsBfkrf1czQGveSObBLl6RR8e3tm6G9OQ.jpg"},
    { image: "https://backend.jadidlar.uz/media/images/BLNxrlKCc2kwsHyN4cWvb8B24eMSLVRdTcAoSdaP.jpg"},
    { image: "https://backend.jadidlar.uz/media/images/6673ml2GcatLE7l840fy1M8LduyVPipCkq3eZG0d.jpg"},  
    { image: "https://backend.jadidlar.uz/media/images/UjXOEyS2Bx2sxkig3BJCjdOQFEbp5ALDWUdBUmQh.jpg"},  
    { image: "https://backend.jadidlar.uz/media/images/9EkU1OB2oT4ub3fVsGTikaKVXSkM7CP7numidkOk.jpg"},  
    { image: "https://backend.jadidlar.uz/media/images/0OJLlG5U8Kr3idMM7JwU7BRjqIjYYjsUhmoAerry.jpg"},  
    { image: "https://backend.jadidlar.uz/media/images/photo_7_2024-03-25_10-05-52.jpg"},  
    { image: "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-38-23.jpg"},  
    { image: "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-22-47.jpg"},  
    { image: "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-46-06.jpg"},  
  ],

  eshituvlar: [
    { title: "Vadud Mahmud she'ri", src: "/src/assets/sound/ElevenLabs_2026-11-12T11_45_42_Jahongir - Calm, Proud, Deep_gen_s59_sim100_v4.mp3.lnk" },
    { title: "Abdulhamid Cho'lponning 'Qor qo'ynida lola' hikoyasi", src: "#" },
    { title: "Jadichilik ma'rifati: Mahmudxo'ja Behbudiy", src: "#" },
    {
      title: "Buxoro jadidchiligining yirik namoyondalaridan biri...",
      src: "#",
    },
  ],
};

// --- TABLARNI BOSHQARISH ---
const tabBtns = document.querySelectorAll(".media-tab-btn");
const tabContents = document.querySelectorAll(".media-tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active-tab"));
    btn.classList.add("active-tab");

    const targetId = btn.getAttribute("data-target");
    tabContents.forEach((content) => {
      if (content.id === targetId) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

// --- 1. KORUVLAR SLIDER VA PAGINATION (Har 3 sekundda o'tadi) ---
const videoTrack = document.getElementById("videoSliderTrack");
const videoDotsContainer = document.getElementById("videoDots");
let videoCurrentIndex = 0;
let videoAutoInterval;

function initVideoSlider() {
  if (!videoTrack) return;
  videoTrack.innerHTML = "";
  videoDotsContainer.innerHTML = "";

  const items = mediaData.koruvlar;
  const itemsPerSlide = window.innerWidth <= 900 ? 1 : 2;
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  items.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "media-video-slide";
    slide.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="media-play-overlay">
        <div class="media-play-btn-icon">▶</div>
        <h3 class="media-video-title">${item.title}</h3>
      </div>
    `;
    videoTrack.appendChild(slide);
  });

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.className = `media-dot ${i === 0 ? "active-dot" : ""}`;
    dot.addEventListener("click", () => {
      videoCurrentIndex = i;
      updateVideoSliderPosition(itemsPerSlide, totalSlides);
      resetVideoAutoSlide(itemsPerSlide, totalSlides);
    });
    videoDotsContainer.appendChild(dot);
  }

  startVideoAutoSlide(itemsPerSlide, totalSlides);
}

function updateVideoSliderPosition(itemsPerSlide, totalSlides) {
  if (videoCurrentIndex >= totalSlides) {
    videoCurrentIndex = 0;
  }
  const slideWidth = videoTrack.clientWidth + 24; // gap bilan hisobga olamiz
  videoTrack.style.transform = `translateX(-${
    videoCurrentIndex * slideWidth
  }px)`;

  const dots = videoDotsContainer.querySelectorAll(".media-dot");
  dots.forEach((d, idx) => {
    if (idx === videoCurrentIndex) {
      d.classList.add("active-dot");
    } else {
      d.classList.remove("active-dot");
    }
  });
}

function startVideoAutoSlide(itemsPerSlide, totalSlides) {
  videoAutoInterval = setInterval(() => {
    videoCurrentIndex++;
    if (videoCurrentIndex >= totalSlides) {
      videoCurrentIndex = 0;
    }
    updateVideoSliderPosition(itemsPerSlide, totalSlides);
  }, 3000);
}

function resetVideoAutoSlide(itemsPerSlide, totalSlides) {
  clearInterval(videoAutoInterval);
  startVideoAutoSlide(itemsPerSlide, totalSlides);
}

// --- 2. SURATLAR SLIDER VA PAGINATION (Har 3 sekundda o'tadi) ---
const suratTrack = document.getElementById("suratlarSliderTrack");
const suratDotsContainer = document.getElementById("suratlarDots");
let suratCurrentIndex = 0;
let suratAutoInterval;

function initSuratlarSlider() {
  if (!suratTrack) return;
  suratTrack.innerHTML = "";
  suratDotsContainer.innerHTML = "";

  const items = mediaData.suratlar;
  const itemsPerSlide =
    window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 5;
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  items.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "media-surat-slide";
    slide.innerHTML = `<img src="${item.image}" alt="Surat">`;
    suratTrack.appendChild(slide);
  });

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.className = `media-dot ${i === 0 ? "active-dot" : ""}`;
    dot.addEventListener("click", () => {
      suratCurrentIndex = i;
      updateSuratSliderPosition(itemsPerSlide, totalSlides);
      resetSuratAutoSlide(itemsPerSlide, totalSlides);
    });
    suratDotsContainer.appendChild(dot);
  }

  startSuratAutoSlide(itemsPerSlide, totalSlides);
}

function updateSuratSliderPosition(itemsPerSlide, totalSlides) {
  if (suratCurrentIndex >= totalSlides) {
    suratCurrentIndex = 0;
  }
  const slideWidth = suratTrack.clientWidth + 24;
  suratTrack.style.transform = `translateX(-${
    suratCurrentIndex * slideWidth
  }px)`;

  const dots = suratDotsContainer.querySelectorAll(".media-dot");
  dots.forEach((d, idx) => {
    if (idx === suratCurrentIndex) {
      d.classList.add("active-dot");
    } else {
      d.classList.remove("active-dot");
    }
  });
}

function startSuratAutoSlide(itemsPerSlide, totalSlides) {
  suratAutoInterval = setInterval(() => {
    suratCurrentIndex++;
    if (suratCurrentIndex >= totalSlides) {
      suratCurrentIndex = 0;
    }
    updateSuratSliderPosition(itemsPerSlide, totalSlides);
  }, 3000);
}

function resetSuratAutoSlide(itemsPerSlide, totalSlides) {
  clearInterval(suratAutoInterval);
  startSuratAutoSlide(itemsPerSlide, totalSlides);
}

// --- 3. ESHITUVLAR (AUDIO LIST) ---
const audioListContainer = document.getElementById("audioListContainer");
const currentAudioTitle = document.getElementById("currentAudioTitle");

if (audioListContainer) {
  mediaData.eshituvlar.forEach((audio) => {
    const item = document.createElement("div");
    item.className = "media-audio-item";
    item.innerHTML = `
      <button style="background:#163269; color:#fff; border:none; width:30px; height:30px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center;">▶</button>
      <span>${audio.title}</span>
    `;
    item.addEventListener("click", () => {
      currentAudioTitle.innerText = audio.title;
    });
    audioListContainer.appendChild(item);
  });
}

// Ishga tushirish
window.addEventListener("DOMContentLoaded", () => {
  initVideoSlider();
  initSuratlarSlider();
});

// Ekran o'lchami o'zgarganda sliderlar to'g'ri ishlashi uchun
window.addEventListener("resize", () => {
  initVideoSlider();
  initSuratlarSlider();
});




document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("marqueeTrack");
  
  // Kartochkalarni uzluksiz aylanishi uchun ichidagilarni yana bir marta nusxalab qo'shamiz
  const items = track.innerHTML;
  track.innerHTML += items;

  // Track'ning asl kengligini hisoblaymiz (birinchi yarmigacha bo'lgan masofa)
  setTimeout(() => {
      const trackWidth = track.scrollWidth / 2;
      track.style.setProperty("--marquee-width", `-${trackWidth}px`);
      track.style.animation = "scrollInfinite 35s linear infinite";
  }, 2000);
});


document.getElementById("scrollTopBtn").addEventListener("click", function () {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});