document.addEventListener("DOMContentLoaded", () => {
  // Barcha jadidlar ro'yxati (ID lar va detail sahifasi uchun moslashtirilgan)
  const allJadids = [
    {
      id: 1,
      name: "Mahmudxo‘ja Behbudiy",
      dates: "(1875 — 1919)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Mahmudxoja_Behbudiy.jpg",
    },
    {
      id: 2,
      name: "Munavvarqori Abdurashidxonov",
      dates: "(1878 - 1931)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Munavvar_5VD2p8g.jpg",
    },
    {
      id: 3,
      name: "Abdurauf Fitrat",
      dates: "(1886 - 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Abdurauf_Fitrat_NrcgW0e.jpg",
    },
    {
      id: 4,
      name: "Abdulla Avloniy",
      dates: "(1878 - 1934)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/8cVFdh7BAKyyukKSO9QAW0s7twe5krP2eDWmSPFj.jpg",
    },
    {
      id: 5,
      name: "Abdulhamid Cho'lpon",
      dates: "(1897 - 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/cholpon_wE3WVig.jpg",
    },
    {
      id: 6,
      name: "Ubaydullaxo‘ja Asadullaxo‘jayev",
      dates: "(1878 — 1937)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Ubaydullaxoja_Asadullaxojayev.jpg",
    },
    {
      id: 7,
      name: "Abdulla Qodiriy",
      dates: "(1894 — 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Abdulla_Qodiriy_39LON6y.jpg",
    },
    {
      id: 8,
      name: "Ashurali Zohiriy",
      dates: "(1885 — 1938)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Ashurali_Zohiriy.jpg",
    },
    {
      id: 9,
      name: "Muhammadsharif So'fizoda",
      dates: "(1880 — 1937)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Muhammadsharif_Sozfizoda_B2zf9MV.jpg",
    },
    {
      id: 10,
      name: "Abduqodir Shakuriy",
      dates: "(1875 — 1943)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Abduqodir_Shakuriy.jpg",
    },
    {
      id: 11,
      name: "Sadriddin Ayniy",
      dates: "(1878 — 1954)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Sadriddin_Ayniy.jpg",
    },
    {
      id: 12,
      name: "Hamza Hakimzoda Niyoziy",
      dates: "(1889 — 1929)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Hamza_Hakimzoda_Niyoziy_E3JZNNb.jpg",
    },
    {
      id: 13,
      name: "Tavallo",
      dates: "(1883 — 1937)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Tavallo.jpg",
    },
    {
      id: 14,
      name: "Obidjon Mahmudov",
      dates: "(1871 — 1936)",
      image:
        "https://backend.jadidlar.uz/media/image/jadid/Obidjon_Mahmudov_7adBbGD.jpg",
    },
    {
      id: 15,
      name: "Is'hoqxon Ibrat",
      dates: "(1889 — 1929)",
      image: "https://backend.jadidlar.uz/media/image/jadid/Ishoqxon_Ibrat.jpg",
    },
  ];

  const itemsPerPage = 12; // Har bir sahifada 12 tadan card
  let currentPage = 1;
  let filteredJadids = [...allJadids];

  const gridContainer = document.querySelector(".jadids-grid");
  const searchInput = document.querySelector(".jadids-search-input");

  // Cardlarni ekranga chizish va ID berish
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
          <div class="jadid-card" data-id="${jadid.id}" style="cursor: pointer;">
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

    // Istalgan card bosilganda detail sahifasiga o'tish mantiqi
    document.querySelectorAll(".jadid-card").forEach((card) => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        window.location.href = `detail.html?id=${id}`;
      });
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
