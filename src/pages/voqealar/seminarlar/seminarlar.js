const seminarlarItems = [
  {
    title: "Buxoro jadidlari: islohot va tanazzul",
    date: "25.02.2024",
    image: "https://backend.jadidlar.uz/media/image/%D0%91%D1%83%D1%85%D0%BE%D1%80%D0%BE_%D0%B6%D0%B0%D0%B4%D0%B8%D0%B4%D0%BB%D0%B0%D1%80%D0%B8_%D0%B8%D1%81%D0%BB%D0%BE%D2%B3%D0%BE%D1%82_%D0%B2%D0%B0_%D1%82%D0%B0%D0%BD%D0%B0%D0%B7%D0%B7%D1%83%D0%BB.jpg",
    paragraphs: [
      "Buxorodagi islohotchilik harakati XX asr boshlarida Yevropa ilg'or g'oyalari ta'sirida shakllana boshladi. Milliy taraqqiyparvar ziyolilar mamlakatning umumjahon taraqqiyotidan ortda qolayotganini ko'rib, iqtisodiy, diniy va ma'naviy sohalardagi turg'unlikni bartaraf etish hamda keng qamrovli islohotlarni amalga oshirish yo'lida harakat qildilar.",
      "Buxoroda islohotchilik harakati murakkab va sinovlarga boy yo'lni bosib o'tdi. Jadidchilikning vujudga kelishida XX asr boshlarida Rossiya, Eron va Turkiyadagi ijtimoiy-siyosiy jarayonlar hamda amirlikdagi ma'rifatparvarlarning faoliyati muhim rol o'ynadi.",
    ],
  },
  {
    title: "\"Cho'lpon otilmagan, u bolta bilan chopib o'ldirilgan\".",
    date: "25.02.2024",
    image:
      "https://backend.jadidlar.uz/media/image/Cholpon_otilmagan_u_bolta_bilan_chopib_oldirilgan..jpg",
    paragraphs: [
      "4-oktabr sanasi o'zbek xalqi tarixida eng og'ir va fojiali kunlardan biri sifatida yodga olinadi. 1938-yilning ana shu kunida o'z davrining ko'zga ko'ringan ma'rifatparvar ziyolilari qatag'on qurboniga aylandi. Asossiz ayblovlar bilan qatag'on qilingan ko'plab ziyolilarning dafn etilish jarayoni ham odatiy tartibda o'tmagani, hatto ayrimlari tergov va sud jarayonlaridagi shafqatsizliklar oqibatida halok bo'lgani haqidagi ma'lumotlar adabiyotshunos olim, akademik Naim Karimov bilan suhbatlarda ham tilga olingan.",
    ],
  },
];

const ITEMS_PER_PAGE = 4;
let currentPage = 1;
let activeDetailIndex = null;

const pageTitleEl = document.querySelector(".page-title");
const breadcrumbEl = document.querySelector(".breadcrumb");
const seminarsGrid = document.getElementById("seminarsGrid");
const paginationEl = document.getElementById("pagination");

async function injectComponent(id, path) {
  const el = document.getElementById(id);
  if (!el || el.children.length > 0) return;

  try {
    const res = await fetch(path);
    if (res.ok) {
      el.innerHTML = await res.text();
    }
  } catch (_) {
    // layout.js yuklagan bo'lsa jim o'tkazib yuboriladi
  }
}

function updateBreadcrumb(detailTitle = "") {
  if (!breadcrumbEl) return;

  if (detailTitle) {
    breadcrumbEl.innerHTML = `
      <a href="../../home page/index.html">BOSH SAHIFA</a>
      <span class="slash">/</span>
      <a href="#" class="breadcrumb-list-link">SEMINARLAR</a>
      <span class="slash">/</span>
      <span class="current">${detailTitle}</span>
    `;
  } else {
    breadcrumbEl.innerHTML = `
      <a href="../../home page/index.html">BOSH SAHIFA</a>
      <span class="slash">/</span>
      <span class="current">SEMINARLAR</span>
      <span class="slash">/</span>
    `;
  }
}

function showListView() {
  activeDetailIndex = null;
  if (pageTitleEl) {
    pageTitleEl.style.display = "";
    pageTitleEl.textContent = "Seminarlar";
  }
  if (seminarsGrid) {
    seminarsGrid.className = "news-grid";
  }
  updateBreadcrumb("");
  renderSeminars();
}

function showDetailView(index) {
  const item = seminarlarItems[index];
  if (!item || !seminarsGrid) return;

  activeDetailIndex = index;

  if (pageTitleEl) {
    pageTitleEl.style.display = "none";
  }
  if (paginationEl) {
    paginationEl.innerHTML = "";
  }

  updateBreadcrumb(item.title);
  seminarsGrid.className = "detail-view";

  const paragraphsHtml = (item.paragraphs || [item.title])
    .map((p) => `<p>${p}</p>`)
    .join("");

  seminarsGrid.innerHTML = `
    <div class="detail-heading">${item.title}</div>
    <div class="detail-paragraphs">${paragraphsHtml}</div>
    <div class="detail-actions">
      <button type="button" class="back-to-list-btn" id="backToListBtn">Seminarlarga qaytish</button>
      <button type="button" class="share-btn" id="shareDetailBtn">
        <span>Ulashish</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 2L11 13"></path>
          <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
        </svg>
      </button>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSeminars() {
  if (!seminarsGrid) return;
  if (activeDetailIndex !== null) {
    showDetailView(activeDetailIndex);
    return;
  }

  const totalPages = Math.max(
    1,
    Math.ceil(seminarlarItems.length / ITEMS_PER_PAGE)
  );
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = seminarlarItems.slice(start, start + ITEMS_PER_PAGE);

  seminarsGrid.innerHTML = pageItems
    .map(
      (item, idx) => `
      <article class="news-card">
        <div class="news-card-thumb">
          <img
            src="${item.image}"
            alt="${item.title}"
            onerror="this.src='https://via.placeholder.com/400x280?text=Jadidlar'"
          >
        </div>
        <div class="news-card-body">
          <h2 class="news-card-title">${item.title}</h2>
          <div class="news-card-footer">
            <span class="news-card-date">${item.date}</span>
            <button type="button" class="news-more-btn" data-index="${
              start + idx
            }">To'liq</button>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  if (!paginationEl) return;

  if (totalPages <= 1) {
    paginationEl.innerHTML = "";
    return;
  }

  let html = `
    <button type="button" class="page-btn" data-page="1" ${
      currentPage === 1 ? "disabled" : ""
    } title="Birinchi sahifa">&laquo;</button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button type="button" class="page-btn ${
        i === currentPage ? "active" : ""
      }" data-page="${i}">${i}</button>
    `;
  }

  html += `
    <button type="button" class="page-btn" data-page="${totalPages}" ${
    currentPage === totalPages ? "disabled" : ""
  } title="Oxirgi sahifa">&raquo;</button>
  `;

  paginationEl.innerHTML = html;
}

if (seminarsGrid) {
  seminarsGrid.addEventListener("click", (e) => {
    const moreBtn = e.target.closest(".news-more-btn");
    if (moreBtn) {
      const idx = Number(moreBtn.dataset.index);
      if (Number.isInteger(idx) && seminarlarItems[idx]) {
        showDetailView(idx);
      }
      return;
    }

    if (e.target.closest("#backToListBtn")) {
      showListView();
      return;
    }

    const shareBtn = e.target.closest("#shareDetailBtn");
    if (shareBtn && activeDetailIndex !== null) {
      const currentItem = seminarlarItems[activeDetailIndex];
      const shareData = {
        title: currentItem.title,
        text: currentItem.title,
        url: window.location.href,
      };

      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      }
    }
  });
}

if (breadcrumbEl) {
  breadcrumbEl.addEventListener("click", (e) => {
    if (e.target.closest(".breadcrumb-list-link")) {
      e.preventDefault();
      showListView();
    }
  });
}

if (paginationEl) {
  paginationEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-btn");
    if (!btn || btn.disabled) return;
    currentPage = Number(btn.dataset.page) || 1;
    renderSeminars();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

injectComponent("navbar", "../../../components/navbar.html");
injectComponent("footer", "../../../components/footer.html");
renderSeminars();

// =====================================
// VOQEALAR SAHIFALARINI BIR-BIRIGA ULASH
// =====================================
const VOQEALAR_PATHS = {
  yangiliklar: "../yangiliklar/index.html",
  yiginlar: "../yig'inlar/index.html",
  seminarlar: "../seminarlar/index.html",
};

function detectVoqealarSection(text = "") {
  const normalized = decodeURIComponent(text)
    .toLowerCase()
    .replace(/['’`]/g, "")
    .trim();

  if (normalized.includes("yiginlar")) return "yiginlar";
  if (normalized.includes("seminarlar")) return "seminarlar";
  if (normalized.includes("yangiliklar")) return "yangiliklar";
  return "";
}

function syncVoqealarActiveNav() {
  const currentKey = detectVoqealarSection(window.location.pathname);
  if (!currentKey) return;

  document
    .querySelectorAll(".dropdown-menu a, .voqealar-nav")
    .forEach((link) => {
      const key =
        (link.dataset.voqealar || "").toLowerCase().trim() ||
        detectVoqealarSection(link.getAttribute("href") || "") ||
        detectVoqealarSection(link.textContent || "");

      if (key) {
        link.classList.toggle("active", key === currentKey);
      }
    });
}

document.addEventListener("click", function (e) {
  const link = e.target.closest(".dropdown-menu a, .voqealar-nav");
  if (!link) return;

  const parentDropdown = link.closest(".dropdown");
  const isVoqealarDropdown =
    parentDropdown &&
    parentDropdown
      .querySelector(":scope > a")
      ?.textContent.toLowerCase()
      .includes("voqealar");

  if (!link.classList.contains("voqealar-nav") && !isVoqealarDropdown) {
    return;
  }

  const key =
    (link.dataset.voqealar || "").toLowerCase().trim() ||
    detectVoqealarSection(link.getAttribute("href") || "") ||
    detectVoqealarSection(link.textContent || "");

  const targetUrl = VOQEALAR_PATHS[key];
  if (!targetUrl) return;

  e.preventDefault();

  const currentKey = detectVoqealarSection(window.location.pathname);
  if (currentKey === key) {
    if (activeDetailIndex !== null) {
      showListView();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    syncVoqealarActiveNav();
    return;
  }

  window.location.href = targetUrl;
});

syncVoqealarActiveNav();
