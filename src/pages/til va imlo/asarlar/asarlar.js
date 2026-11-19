const tilData = {
  asarlar: [
    {
      title: "Turkistoncha til qoidasi",
      image:
        "https://backend.jadidlar.uz/media/images/Turkistoncha_til_qoidasi.jpg",
    },
    {
      title: "O'zbekcha til sabog'lig'i",
      image: "https://backend.jadidlar.uz/media/images/Til_sabogligi.jpg",
    },
    {
      title: "Rus-o'zbek tilining siyosiy va iqtisodiy lug'atchasi",
      image:
        "https://backend.jadidlar.uz/media/images/Rus-ozbek_tilining_lugatchasi.jpg",
    },
    {
      title: "Очерк по истории развития движения нового алфавита...",
      image: "https://backend.jadidlar.uz/media/images/OCherk.jpg",
    },
    {
      title: "Kitobi ilmi imlo",
      image: "https://backend.jadidlar.uz/media/images/Kitobi_ilmi_imlo.jpg",
    },
    {
      title: "Huquqiy va siyosiy lug'at",
      image:
        "https://backend.jadidlar.uz/media/images/Huquqiy_va_siyosiy_lugat.jpg",
    },
  ],

  maqolalar: [
    {
      title: "G‘ozi Olim Yunus. Turk Osiyo turklarining yangi alifbosi",
      image: "https://backend.jadidlar.uz/media/images/Til_bWAdHlg.jpg",
    },
    {
      title: "G‘ozi Olim Yunus. O‘zbek tilining tovushlari",
      image: "https://backend.jadidlar.uz/media/images/Til.jpg",
    },
  ],

  hikmatlar: [
    {
      text: "Jumla mahkum fanodur, kechiyur oxir “davron!” – Ma'nosi – Barcha insonlar bu dunyoning vaqtinchalik mahbusidir, oxir-oqibat ular o'zlari qo'zonadigan davronni albatta tortajaklar.",
      author: "Ibrohim Davron",
    },
    {
      text: "Oling bizlar uchun baldoq, marjonlar kerakmasdur, Bering qog‘oz, qalamlar, zebi gardonlar kerakmasdur.",
      author: "Tavallo",
    },
    {
      text: "Har millat o‘z tili ila faxr etar.",
      author: "Sadriddin Ayniy",
    },
    {
      text: "Qaysi bir millatkim o‘z tilini begona lug‘atlardan ozod saqlasa va o‘z millatini muhofaza qilsa, din va ozodligini qo‘ldan bermaydur.",
      author: "Sadriddin Ayniy",
    },
  ],
};

// =====================================
// ELEMENTLAR
// =====================================
const gridContainer = document.getElementById("tilGrid");
const tabs = document.querySelectorAll(".til-tab");
const searchInput = document.getElementById("searchInput");
const breadcrumbHighlight = document.querySelector(".breadcrumb-highlight");

let currentCategory = "asarlar";

// =====================================
// CARDLARNI CHIQARISH
// =====================================
function renderCards(data) {
  if (!gridContainer) return;

  const isQuotes = currentCategory === "hikmatlar";
  gridContainer.classList.toggle("quotes-grid", isQuotes);

  if (!data || data.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-results">
        Ma'lumot topilmadi
      </div>
    `;
    return;
  }

  // HIKMATLAR
  if (isQuotes) {
    gridContainer.innerHTML = data
      .map(
        (item) => `
        <div class="quote-card">
          <p class="quote-text">${item.text}</p>
          <div class="quote-author">${item.author}</div>
        </div>
      `
      )
      .join("");
    return;
  }

  // ASARLAR VA MAQOLALAR
  gridContainer.innerHTML = data
    .map(
      (item) => `
      <div class="book-card">
        <div class="book-card-image">
          <img
            src="${item.image}"
            alt="${item.title}"
            onerror="this.src='https://via.placeholder.com/220x340?text=Jadidlar'"
          >
        </div>

        <div class="book-card-actions">
          <button class="action-btn" type="button" title="Ko'rish">
            <svg width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>

          <button class="action-btn" type="button" title="Yuklab olish">
            <svg width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>

        <div class="book-card-content">
          <h3>${item.title}</h3>
        </div>
      </div>
    `
    )
    .join("");
}

// =====================================
// BO'LIMNI ALMASHTIRISH
// =====================================
function changeCategory(category, updateUrl = true) {
  const normalized = (category || "asarlar").toLowerCase().trim();
  if (!tilData[normalized]) return;

  currentCategory = normalized;

  // TAB ACTIVE
  tabs.forEach((tab) => {
    const tabCat = (tab.dataset.category || "").toLowerCase().trim();
    tab.classList.toggle("active", tabCat === normalized);
  });

  // BREADCRUMB
  if (breadcrumbHighlight) {
    const activeTab = [...tabs].find(
      (tab) => (tab.dataset.category || "").toLowerCase().trim() === normalized
    );

    breadcrumbHighlight.textContent = activeTab
      ? activeTab.textContent.trim().toUpperCase()
      : normalized.toUpperCase();
  }

  // SEARCH TOZALASH
  if (searchInput) {
    searchInput.value = "";
  }

  // URL HASH
  if (updateUrl && window.location.hash !== "#" + normalized) {
    history.replaceState(null, "", "#" + normalized);
  }

  // MA'LUMOTLARNI CHIQARISH
  renderCards(tilData[normalized]);
}

// =====================================
// TABLAR
// =====================================
tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    changeCategory(this.dataset.category);
  });
});

// =====================================
// NAVBAR DROPDOWN
// =====================================
document.addEventListener("click", function (e) {
  const link = e.target.closest(".til-imlo-nav");
  if (!link) return;

  const category = (link.dataset.category || "").toLowerCase().trim();
  if (!tilData[category]) return;

  let isSamePage = false;
  try {
    const rawHref = link.getAttribute("href");
    if (rawHref) {
      const targetUrl = new URL(rawHref, window.location.origin);
      isSamePage =
        decodeURIComponent(window.location.pathname) ===
        decodeURIComponent(targetUrl.pathname);
    }
  } catch (_) {
    isSamePage = false;
  }

  // Sahifadagi tablar mavjud bo'lsa yoki aynan shu sahifada bo'lsak refresh qilmaymiz
  if (isSamePage || tabs.length > 0) {
    e.preventDefault();
    changeCategory(category);
  }
});

// Brauzer hash o'zgarganda
window.addEventListener("hashchange", function () {
  const hashCategory = window.location.hash
    .replace("#", "")
    .toLowerCase()
    .trim();
  if (tilData[hashCategory]) {
    changeCategory(hashCategory, false);
  }
});

// =====================================
// SEARCH
// =====================================
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    const list = tilData[currentCategory] || [];

    const filteredData = list.filter((item) => {
      const searchableText =
        currentCategory === "hikmatlar"
          ? `${item.text || ""} ${item.author || ""}`
          : item.title || "";

      return searchableText.toLowerCase().includes(query);
    });

    renderCards(filteredData);
  });
}

// =====================================
// SAHIFA OCHILGANDA
// =====================================
const hashCategory = window.location.hash.replace("#", "").toLowerCase().trim();
const initialCategory = tilData[hashCategory] ? hashCategory : "asarlar";

changeCategory(initialCategory, false);
