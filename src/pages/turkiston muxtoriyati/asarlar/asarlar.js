const muxtoriyatData = {
  asarlar: [
    {
      title: "Sh. Kamoliddin, T. Kodjaoglu... Turkiston muxtoriyati",
      image:
        "https://backend.jadidlar.uz/media/images/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82.jpg",
    },
    {
      title: "A. Qo'qonboyev. Farg'onada sovet hokimiyatini o'rnatish",
      image: "https://backend.jadidlar.uz/media/images/Fargona.jpg",
    },
  ],
  maqolalar: [
    {
      title: "Temur Xo‘jao‘g‘li. Muxtoriyat loyihasi",
      image: "https://backend.jadidlar.uz/media/images/QT.jpg",
    },
    {
      title: "Umar Rashidov. Aybsiz aybdorlar",
      image: "https://backend.jadidlar.uz/media/images/91-11_a0cTlBb.jpg",
    },
  ],
  sherlar: [
    {
      title: "Turkiston muxtoriyati",
      image:
        "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_cKWpkTJ.jpg",
    },
    {
      title: "Tabriki muxtoriyat",
      image:
        "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_gCRUDPN.jpg",
    },
    {
      title: "Muxtoriyat sadosi",
      image: "https://backend.jadidlar.uz/media/images/Ulug_Turkiston.jpg",
    },
  ],
  esdaliklar: [],
};

const EMPTY_BOX_PNG = "../../../assets/icons/empty-box-C96_cn2P.png";
const validCategories = Object.keys(muxtoriyatData);

const gridContainer = document.getElementById("muxtoriyatGrid");
const tabs = document.querySelectorAll(".muxtoriyat-tab");
const breadcrumbHighlight = document.querySelector(".breadcrumb-highlight");
const searchInput = document.getElementById("searchInput");

let activeCategory = "asarlar";

function renderEmptyState() {
  if (!gridContainer) return;
  gridContainer.innerHTML = `
    <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 0; text-align: center;">
      <img
        src="${EMPTY_BOX_PNG}"
        alt="Ma'lumot yo'q"
        style="max-width: 220px; width: 100%; height: auto; object-fit: contain; margin-bottom: 16px;"
      >
      <p style="color: #8a99ad; font-size: 16px; font-weight: 600; margin: 0;">Ma'lumot yo'q</p>
    </div>
  `;
}

function renderCards(items) {
  if (!gridContainer) return;

  if (!items || items.length === 0) {
    renderEmptyState();
    return;
  }

  let html = "";
  items.forEach((item) => {
    html += `
      <div class="book-card">
        <div class="book-card-image">
          <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/220x340?text=Jadidlar'">
        </div>
        <div class="book-card-actions">
          <button class="action-btn" type="button" title="Ko'rish">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
          <button class="action-btn" type="button" title="Yuklab olish">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </button>
        </div>
        <div class="book-card-content">
          <h3>${item.title}</h3>
        </div>
      </div>
    `;
  });
  gridContainer.innerHTML = html;
}

function filterAndRender() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const categoryItems = muxtoriyatData[activeCategory] || [];
  const filtered = query
    ? categoryItems.filter((item) => item.title.toLowerCase().includes(query))
    : categoryItems;
  renderCards(filtered);
}

function activateCategory(category, updateHash = true) {
  const normalized = (category || "asarlar").toLowerCase();
  const targetCategory = validCategories.includes(normalized)
    ? normalized
    : "asarlar";

  activeCategory = targetCategory;

  let activeTabText = targetCategory.toUpperCase();
  tabs.forEach((tab) => {
    const isMatch =
      (tab.getAttribute("data-category") || "").toLowerCase() ===
      targetCategory;
    tab.classList.toggle("active", isMatch);
    if (isMatch) {
      activeTabText = tab.textContent.trim().toUpperCase();
    }
  });

  if (breadcrumbHighlight) {
    breadcrumbHighlight.textContent = activeTabText;
  }

  if (updateHash && window.location.hash !== `#${targetCategory}`) {
    history.pushState(null, "", `#${targetCategory}`);
  }

  filterAndRender();
}

// Sahifa ichidagi tablar bosilganda
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    activateCategory(tab.getAttribute("data-category"), true);
  });
});

// Navbar dropdown ichidagi Turkiston muxtoriyati bandlari bosilganda
document.addEventListener("click", (e) => {
  const navLink = e.target.closest(".turkiston-nav");
  if (!navLink) return;

  const catKey = (navLink.getAttribute("data-category") || "").toLowerCase();
  const hasTabHere = Array.from(tabs).some(
    (tab) => (tab.getAttribute("data-category") || "").toLowerCase() === catKey
  );

  if (hasTabHere) {
    e.preventDefault();
    activateCategory(catKey, true);
    navLink.blur();
  }
});

// Brauzer Orqaga/Oldinga yoki hash o'zgarganda
window.addEventListener("hashchange", () => {
  const hashCategory = window.location.hash
    .replace("#", "")
    .trim()
    .toLowerCase();
  if (validCategories.includes(hashCategory)) {
    activateCategory(hashCategory, false);
  }
});

if (searchInput) {
  searchInput.addEventListener("input", filterAndRender);
}

// Boshlang'ich yuklanish
const initialHash = window.location.hash.replace("#", "").trim().toLowerCase();
activateCategory(
  validCategories.includes(initialHash) ? initialHash : "asarlar",
  false
);
