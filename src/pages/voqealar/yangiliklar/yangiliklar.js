const yangiliklarItems = [
  {
    title: "Cho'lpon domladan tirik yodgorlar",
    date: "28.10.2026",
    image:
      "https://backend.jadidlar.uz/media/image/476833609_1872218926855831_207808196596176029_n.jpg",
    url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fiskandar.abdulbosit.madgaziyev%2Fposts%2Fpfbid0sKQgMqLDNyHsR6g29zcGBTsoYMnVKufRTsoZz732PARY9whj8MA87ya6chS84WhFl&show_te",
  },
  {
    title: "Abdulla Qodiriyning noyob surati",
    date: "28.10.2026",
    image:
      "https://backend.jadidlar.uz/media/image/870559263_1658011742670066_4746651412700684403_n.jfif",
    url: "",
  },
  {
    title: "Prezident tashabbusi: jadidlar avlodlari birlashdi",
    date: "26.10.2026",
    image:
      "https://backend.jadidlar.uz/media/image/LH10jNkwZzir6dgXDJ4mYPyyjuUbBCCh_front.jpg",
    url: "",
  },
  {
    title:
      "PREZIDENT TASHABBUSI: JADIDLAR AVLODLARI TARIXIY MEROSNI KELAJAK AVLODGA YETKAZISH...",
    date: "26.10.2026",
    image:
      "https://backend.jadidlar.uz/media/image/photo_2026-10-19_17-03-01.jpg",
    url: "",
  },
  {
    title: "Cho'lpon dastxati",
    date: "14.09.2026",
    image:
      "../../../assets/images/JADIDLAR _ Jadidlar_files/19Мўминжон_Муҳаммаджонов_дастхати.jpg",
    url: "",
  },
  {
    title: "Abdulla Qodiriyning Berlindagi sirdoshi",
    date: "06.09.2026",
    image:
      "../../../assets/images/JADIDLAR _ Jadidlar_files/8cVFdh7BAKyyukKSO9QAW0s7twe5krP2eDWmSPFj.jpg",
    url: "",
  },
  {
    title: "Cho'lpon. Binafsha",
    date: "13.07.2026",
    image:
      "../../../assets/images/JADIDLAR _ Jadidlar_files/cholpon_wE3WVig.jpg",
    url: "",
  },
];

const ITEMS_PER_PAGE = 4;
let currentPage = 1;

const newsGrid = document.getElementById("newsGrid");
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

function renderNews() {
  if (!newsGrid) return;

  const totalPages = Math.max(
    1,
    Math.ceil(yangiliklarItems.length / ITEMS_PER_PAGE)
  );
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = yangiliklarItems.slice(start, start + ITEMS_PER_PAGE);

  newsGrid.innerHTML = pageItems
    .map(
      (item, idx) => `
      <article class="news-card" data-index="${start + idx}">
        <div class="news-card-thumb">
          <img
            src="${item.image}"
            alt="${item.title}"
            onerror="this.src='https://via.placeholder.com/300x180?text=Jadidlar'"
          >
        </div>
        <div class="news-card-body">
          <h2 class="news-card-title">${item.title}</h2>
          <div class="news-card-footer">
            <span class="news-card-date">${item.date}</span>
            <a
              href="${item.url || "#"}"
              class="news-more-btn"
              data-index="${start + idx}"
              ${item.url ? 'target="_blank" rel="noopener noreferrer"' : ""}
              style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;"
            >To'liq</a>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  renderPagination(totalPages);
}

// Faqat "To'liq" tugmasi bosilganda yangi vkladkada ochish
if (newsGrid) {
  newsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".news-more-btn");
    if (!btn) return;

    e.preventDefault();

    const index = Number(btn.dataset.index);
    const targetUrl =
      (Number.isInteger(index) && yangiliklarItems[index]?.url) ||
      btn.getAttribute("href");

    if (targetUrl && targetUrl !== "#") {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  });
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

if (paginationEl) {
  paginationEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-btn");
    if (!btn || btn.disabled) return;
    currentPage = Number(btn.dataset.page) || 1;
    renderNews();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

injectComponent("navbar", "../../../components/navbar.html");
injectComponent("footer", "../../../components/footer.html");
renderNews();

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
    window.scrollTo({ top: 0, behavior: "smooth" });
    syncVoqealarActiveNav();
    return;
  }

  window.location.href = targetUrl;
});

syncVoqealarActiveNav();
