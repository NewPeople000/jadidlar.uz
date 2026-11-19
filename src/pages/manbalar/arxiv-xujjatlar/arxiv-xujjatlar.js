document.addEventListener("DOMContentLoaded", () => {
  // 1. Ro'yxat bo'limi ma'lumotlari
  const royxatData = [
    {
      title: "O‘zMA. 34-jamg‘arma, 1-yig‘majild, 2819-ish",
      image:
        "https://backend.jadidlar.uz/media/images/4%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_2819-%D0%B8%D1%88.jpg",
    },
    {
      title: "O‘zMA. 34-jamg‘arma, 2-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/9%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_3232-%D0%B8%D1%88.jpg",
    },
    {
      title: "O‘zMA. 34-jamg‘arma, 3-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_2819-%D0%B8%D1%88_HDVxAnw.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma",
      image:
        "https://backend.jadidlar.uz/media/images/12%D0%8E%D0%B7%D0%A4A_%D0%9C%D0%94A._52-%D1%84%D0%BE%D0%BD%D0%B4_1-%D1%80%D1%9E%D0%B9%D1%85%D0%B0%D1%822.jpg",
    },
    {
      title: "O‘zMA. 34-jamg‘arma, 4-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/7%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_3232-%D0%B8%D1%88.jpg",
    },
    {
      title: "O‘zMA. 34-jamg‘arma, 5-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/10%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_3232-%D0%B8%D1%88.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/20%D0%8E%D0%B7%D0%A4%D0%90_%D0%9C%D0%94%D0%90._52-%D1%84%D0%BE%D0%BD%D0%B4_1-%D1%80%D1%9E%D0%B9%D1%85%D0%B0%D1%82_2-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_80-%D0%B2%D0%B0%D1%80%D0%B0%D2%9B.jpg",
    },
    {
      title: "Saidrizo Alizodaning O‘zSSR NKVDdagi shaxsiy ishi",
      image:
        "https://backend.jadidlar.uz/media/images/%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_3232-%D0%B8%D1%88.jpg",
    },

    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/3%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_2819-%D0%B8%D1%88.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/13%D0%8E%D0%B7%D0%A4A_%D0%9C%D0%94A._52-%D1%84%D0%BE%D0%BD%D0%B4_1-%D1%80%D1%9E%D0%B9%D1%85%D0%B0%D1%822.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/17%D0%8E%D0%B7%D0%9C%D0%90._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_3232-%D0%B8%D1%88_1-2-%D0%B2%D0%B0%D1%80%D0%B0%D2%9B%D0%BB%D0%B0%D1%80.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/5%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_2819-%D0%B8%D1%88.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/%D0%8E%D0%B7%D0%A4%D0%90_%D0%9C%D0%94%D0%90._52-%D1%84%D0%BE%D0%BD%D0%B4_1-%D1%80%D1%9E%D0%B9%D1%85%D0%B0%D1%82_2-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_61-%D0%B2%D0%B0%D1%80%D0%B0%D2%9B.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/15%D0%A1%D0%B0%D0%B8%D0%B4%D1%80%D0%B8%D0%B7%D0%BE_%D0%90%D0%BB%D0%B8%D0%B7%D0%BE%D0%B4%D0%B0%D0%BD%D0%B8%D0%BD%D0%B3_%D0%8E%D0%B7%D0%A1%D0%A1%D0%A0_%D0%9D%D0%9A%D0%92%D0%94%D0%B4%D0%B0%D0%B3%D0%B8_%D1%88%D0%B0%D1%85%D1%81%D0%B8%D0%B9_%D0%B4%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%B4%D0%B0%D0%BD.jpg",
    },
    {
      title: "O‘zFA xarakteri. 52-jamg‘arma, 1-ro‘yxat",
      image:
        "https://backend.jadidlar.uz/media/images/6%D0%8E%D0%B7%D0%9CA._34-%D1%84%D0%BE%D0%BD%D0%B4_1-%D0%B9%D0%B8%D2%93%D0%BC%D0%B0%D0%B6%D0%B8%D0%BB%D0%B4_2819-%D0%B8%D1%88.jpg",
    },
  ];
  // 2. Skaner bo'limi ma'lumotlari (1 dona card)[cite: 16]
  const skanerData = [
    {
      title: "Трудовой список Фитрат",
      image: "https://backend.jadidlar.uz/media/images/HdH1cEBQhCH8iukwU5xpbEA3cZrftciU0p5oASUf.jpg" // O'zingizdagi rasm havolasini qo'yasiz
    }
  ];

  const gridContainer = document.getElementById("archivesGrid");
  const tabRoyxat = document.getElementById("tabRoyxat");
  const tabSkaner = document.getElementById("tabSkaner");
  const breadcrumbHighlight = document.querySelector(".breadcrumb-highlight");
  const paginationContainer = document.querySelector(".pagination-container");

  // Cardlarni ekranga chiqaruvchi funksiya
  function renderArchives(data) {
    if (!gridContainer) return;
    let html = "";
    data.forEach((item) => {
      html += `
        <div class="book-card">
          <div class="book-card-image">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="book-card-actions">
            <button class="action-btn" title="Ko'rish">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button class="action-btn" title="Yuklab olish">
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

  // Paginationni yangilash (Ro'yxat uchun ko'p sahifa[cite: 14], Skaner uchun 1 ta sahifa[cite: 16])
  function updatePagination(isSkaner) {
    if (!paginationContainer) return;
    if (isSkaner) {
      paginationContainer.innerHTML = `
        <button class="page-btn">&lt;&lt;</button>
        <button class="page-number active">1</button>
        <button class="page-btn">&gt;&gt;</button>
      `;
    } else {
      paginationContainer.innerHTML = `
        <button class="page-btn">&lt;&lt;</button>
        <button class="page-number active">1</button>
        <button class="page-number">2</button>
        <button class="page-number">3</button>
        <button class="page-btn">...</button>
        <button class="page-number">5</button>
        <button class="page-btn">&gt;&gt;</button>
      `;
    }
  }

  // Aktiv tab stilini boshqarish
  function setActiveTab(activeTab, otherTab) {
    if (activeTab) {
      activeTab.style.color = "#2b4c7e";
      activeTab.style.fontWeight = "700";
      activeTab.style.borderBottom = "3px solid #2b4c7e";
      activeTab.style.paddingBottom = "10px";
      activeTab.style.marginBottom = "-12px";
    }
    if (otherTab) {
      otherTab.style.color = "#8a99ad";
      otherTab.style.fontWeight = "600";
      otherTab.style.borderBottom = "none";
      otherTab.style.paddingBottom = "0";
      otherTab.style.marginBottom = "0";
    }
  }

  // "Ro'yxat" bosilganda
  if (tabRoyxat) {
    tabRoyxat.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabRoyxat, tabSkaner);
      if (breadcrumbHighlight) breadcrumbHighlight.textContent = "RO'YXAT";
      renderArchives(royxatData);
      updatePagination(false);
    });
  }

  // "Skaner" bosilganda[cite: 16]
  if (tabSkaner) {
    tabSkaner.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabSkaner, tabRoyxat);
      if (breadcrumbHighlight) breadcrumbHighlight.textContent = "SKANER";
      renderArchives(skanerData);
      updatePagination(true);
    });
  }

  // Sahifa ochilganda dastlab "Ro'yxat" chiqib turadi
  renderArchives(royxatData);
});