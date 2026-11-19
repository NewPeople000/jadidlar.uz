/**
 * Universal Pagination yaratuvchi funksiya
 * @param {string} containerId - Pagination joylashadigan element ID si
 * @param {number} totalPages - Jami sahifalar soni
 * @param {number} currentPage - Hozirgi aktiv sahifa
 * @param {function} onPageChange - Sahifa o'zgarganda ishlaydigan funksiya
 */
function renderPagination(containerId, totalPages, currentPage, onPageChange) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  container.classList.add("jadids-pagination");

  // 1. Oldingi sahifa tugmasi (<<)
  const prevBtn = document.createElement("button");
  prevBtn.className = "page-arrow";
  prevBtn.innerHTML = "&lt;&lt;";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  container.appendChild(prevBtn);

  // Sahifa raqamlarini hisoblash (1, 2, 3 ... ko'rinishida)
  const pages = getPaginationNumbers(totalPages, currentPage);

  pages.forEach((page) => {
    const btn = document.createElement("button");

    if (page === "...") {
      btn.className = "page-btn page-dots";
      btn.textContent = "...";
      btn.disabled = true;
    } else {
      btn.className = `page-btn ${page === currentPage ? "active" : ""}`;
      btn.textContent = page;
      btn.onclick = () => {
        if (page !== currentPage) onPageChange(page);
      };
    }
    container.appendChild(btn);
  });

  // 2. Keyingi sahifa tugmasi (>>)
  const nextBtn = document.createElement("button");
  nextBtn.className = "page-arrow";
  nextBtn.innerHTML = "&gt;&gt;";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  container.appendChild(nextBtn);
}

// Nuqtalar (...) bilan raqamlarni tartiblash mantiqi
function getPaginationNumbers(total, current) {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, "...", total];
  }
  if (current >= total - 2) {
    return [1, "...", total - 2, total - 1, total];
  }
  return [1, "...", current, "...", total];
}

document.addEventListener("DOMContentLoaded", () => {
  // Sizning barcha jadidlaringiz ro'yxati
  const allJadids = [
    {
      name: "Mahmudxo‘ja Behbudiy",
      dates: "(1875 — 1919)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Mahmudxoja_Behbudiy.jpg",
    },
    {
      name: "Munavvarqori Abdurashidxonov",
      dates: "(1878 - 1931)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Munavvar_5VD2p8g.jpg",
    },
    {
      name: "Abdurauf Fitrat",
      dates: "(1886 - 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Abdurauf_Fitrat_NrcgW0e.jpg",
    },
    {
      name: "Abdulla Avloniy",
      dates: "(1878 - 1934)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/8cVFdh7BAKyyukKSO9QAW0s7twe5krP2eDWmSPFj.jpg",
    },
    {
      name: "Abdulhamid Cho'lpon",
      dates: "(1897 - 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/cholpon_wE3WVig.jpg",
    },
    {
      name: "Ubaydullaxo‘ja Asadullaxo‘jayev",
      dates: "(1878 — 1937)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Ubaydullaxoja_Asadullaxojayev.jpg",
    },
    {
      name: "Abdulla Qodiriy",
      dates: "(1894 — 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Abdulla_Qodiriy_39LON6y.jpg",
    },
    {
      name: "Ashurali Zohiriy",
      dates: "(1885 — 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Ashurali_Zohiriy.jpg",
    },
    {
      name: "Muhammadsharif So'fizoda",
      dates: "(1880 — 1937)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Muhammadsharif_Sozfizoda_B2zf9MV.jpg",
    },
    {
      name: "Abduqodir Shakuriy",
      dates: "(1875 — 1943)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Abduqodir_Shakuriy.jpg",
    },
    {
      name: "Sadriddin Ayniy",
      dates: "(1878 — 1954)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Sadriddin_Ayniy.jpg",
    },
    {
      name: "Hamza Hakimzoda Niyoziy",
      dates: "(1889 — 1929)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Hamza_Hakimzoda_Niyoziy_E3JZNNb.jpg",
    },
    {
      name: "Tavallo",
      dates: "(1883 — 1937)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Tavallo.jpg",
    },
    {
      name: "Obidjon Mahmudov",
      dates: "(1871 — 1936)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Obidjon_Mahmudov_7adBbGD.jpg",
    },
    {
      name: "Is'hoqxon Ibrat",
      dates: "(1889 — 1929)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Ishoqxon_Ibrat.jpg",
    },
    {
      name: "G'ulom Zafariy",
      dates: "(1889 — 1938)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Gulom_Zafariy_tVloMc6.jpg",
    },
    {
      name: "Muxtor Saidjanov",
      dates: "(1893 — 1937)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Ishoqxon_Ibrat.jpg",
    },
    {
      name: "Mirzo Abdulvohid Burhonov - Munzim",
      dates: "(1893 — 1937)",
      image: "https://backend.jadidlar.uz/media/image/jadid/%D0%9C%D1%83%D0%BD%D0%B7%D0%B8%D0%BC.jpg",
    },
    {
      name: "Xoji Muin",
      dates: "(1883 — 1942)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Hoji_Muin_h1AJBEn.jpg",
    },
    {
      name: "Said Ahmad Vasliy",
      dates: "(1870 — 1925)",
      image: "https://backend.jadidlar.uz/media/image/jadid/logo_2_W4ze2xk.jpeg",
    },
    {
      name: "Muso Saidjonov",
      dates: "(1893 — 1937)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Muso_Saidjonov_VZr6sNl.jpg",
    },
    {
      name: "Majid Qodiriy",
      dates: "(1886 — 1938)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Majid_Qodiriy_UACdgeF.jpg",
    },
    {
      name: "Polat Soliyev",
      dates: "(1882 — 1938)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Polat_Soliyev_6A6tWta.jpg",
    },
    {
      name: "Botu",
      dates: "(1904 — 1938)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Botu.jpg",
    },
  ];

  const itemsPerPage = 12; // Har bir sahifada 12 tadan card chiqadi
  let currentPage = 1;
  let filteredJadids = [...allJadids];

  const gridContainer = document.querySelector(".jadids-grid");
  const searchInput = document.querySelector(".jadids-search-input");

  // Cardlarni ekranga chizish
  function renderCards(page) {
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = filteredJadids.slice(startIndex, endIndex);

    if (pageItems.length === 0) {
      gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #1b355a; font-size: 18px;">Ma'lumot topilmadi</p>`;
      return;
    }

    pageItems.forEach((jadid) => {
      const cardHTML = `
        <div class="jadid-card">
          <div class="jadid-card-image">
            <img src="${jadid.image}" alt="${jadid.name}">
          </div>
          <div class="jadid-card-content">
            <h3>${jadid.name}</h3>
            <p>${jadid.dates}</p>
          </div>
        </div>
      `;
      gridContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
  }

  // Sahifa o'zgarganda ishlaydigan funksiya
  function handlePageChange(newPage) {
    currentPage = newPage;
    renderCards(currentPage);

    const totalPages = Math.max(
      1,
      Math.ceil(filteredJadids.length / itemsPerPage)
    );
    if (typeof renderPagination === "function") {
      renderPagination(
        "pagination-container",
        totalPages,
        currentPage,
        handlePageChange
      );
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Qidiruv (Search) mantiqi
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      filteredJadids = allJadids.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      currentPage = 1;
      const totalPages = Math.max(
        1,
        Math.ceil(filteredJadids.length / itemsPerPage)
      );
      renderCards(currentPage);
      if (typeof renderPagination === "function") {
        renderPagination(
          "pagination-container",
          totalPages,
          currentPage,
          handlePageChange
        );
      }
    });
  }

  // Dastlabki yuklanish
  const initialTotalPages = Math.max(
    1,
    Math.ceil(filteredJadids.length / itemsPerPage)
  );
  renderCards(currentPage);
  if (typeof renderPagination === "function") {
    renderPagination(
      "pagination-container",
      initialTotalPages,
      currentPage,
      handlePageChange
    );
  }
});
