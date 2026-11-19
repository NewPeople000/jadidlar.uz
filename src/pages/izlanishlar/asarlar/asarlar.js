document.addEventListener("DOMContentLoaded", () => {
  const izlanishlarData = {
    asarlar: [
      {
        title: "Abdulla Qodiriy qoldirgan hazina",
        image: "https://backend.jadidlar.uz/media/images/Untitled_iuA6bWb.jpg",
      },
      {
        title: "Botirxon Akram. Shoirning ëruq yulduzi",
        image:
          "https://backend.jadidlar.uz/media/images/1-logo_122_otm729W_8LPYPAw.jpg",
      },
      {
        title: "Naim Karimov. Istiqlolni uyg‘otgan shoir",
        image: "https://backend.jadidlar.uz/media/images/Untitled_7aIPdKI.jpg",
      },
      {
        title: "Odob axloq kitobi",
        image:
          "https://backend.jadidlar.uz/media/images/1-logo_122_otm729W_DxO6lO4.jpg",
      },
      {
        title: "Д. Қурбонов. Чўлпон ҳаёти ва...",
        image: "https://backend.jadidlar.uz/media/images/Untitled_hTdiTpC.jpg",
      },
      {
        title: "Abdulla Qodiriy. Turkiy adabiyot durdonalari",
        image: "https://backend.jadidlar.uz/media/images/Untitled_pYquZo5.jpg",
      },
    ],
    maqolalar: [
      {
        title:
          "Dilafruz Negmatova Fitrat tashbehni o'xshatish bilan almashtiradi",
        image: "https://backend.jadidlar.uz/media/images/Untitled_AcYCPuH.jpg",
      },
      {
        title: "Jadid gazetasining 45-soni",
        image: "https://backend.jadidlar.uz/media/images/Untitled_HzozYLt.jpg",
      },
      {
        title: "Jadid gazetasining 45-soni",
        image: "https://backend.jadidlar.uz/media/images/Untitled_3O71Z0t.jpg",
      },
      {
        title: "Jadid gazetasining 45-soni",
        image: "https://backend.jadidlar.uz/media/images/Untitled_R3wEFJK.jpg",
      },
      {
        title: "Jadid gazetasining 45-soni",
        image: "https://backend.jadidlar.uz/media/images/Untitled_YhhcsNx.jpg",
      },
      {
        title: "Jadid gazetasining 45-soni",
        image: "https://backend.jadidlar.uz/media/images/Untitled_rWFa1yf.jpg",
      },
    ],
    dissertatsiyalar: [
      {
        title:
          "Axrarova Azizaxon. O‘zbekiston SSRda xotin-qizlarning qatag‘on qilinisнi (1920-1950-yillar)",
        image: "https://backend.jadidlar.uz/media/images/Untitled_DGQMgyR.jpg",
      },
      {
        title:
          "Axrarova Azizaxon. O‘zbekiston SSRda xotin-qizlarning qatag‘on qilinisнi (1920-1950-yillar)",
        image: "https://backend.jadidlar.uz/media/images/Untitled_66fJVFZ.jpg",
      },
    ],
    esdaliklar: [
      {
        title: "Xolida Ahrorova. O‘tgani yurakdan o‘tdi",
        image: "https://backend.jadidlar.uz/media/images/%D1%9E%D1%82.jpg",
      },
      {
        title: "Abdulla Qodiriy zamondoshlari xotirasida",
        image:
          "https://backend.jadidlar.uz/media/images/%D0%90%D0%B1%D0%B4%D1%83%D0%BB%D0%BB%D0%B0_%D2%9A%D0%BE%D0%B4%D0%B8%D1%80%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BC%D0%BE%D0%BD%D0%B4%D0%BE%D1%88%D0%BB%D0%B0%D1%80%D0%B8_%D1%85%D0%BE%D1%82%D0%B8%D1%80%D0%B0%D1%81%D0%B8%D0%B4%D0%B0_boxYxOS.jpg",
      },
    ],
  };

  const gridContainer = document.getElementById("izlanishlarGrid");
  if (!gridContainer) {
    console.error("Xatolik: #izlanishlarGrid topilmadi!");
    return;
  }

  const tabs = document.querySelectorAll(".izlanishlar-tab");
  const breadcrumbHighlight = document.querySelector(".breadcrumb-highlight");

  function renderCards(data) {
    if (!data || data.length === 0) {
      gridContainer.innerHTML = `
          <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 0; text-align: center;">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            <p style="color: #8a99ad; font-size: 16px; font-weight: 600; margin-top: 15px;">Ma'lumot yo'q</p>
          </div>
        `;
      return;
    }

    let html = "";
    data.forEach((item) => {
      html += `
          <div class="book-card">
            <div class="book-card-image">
              <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/220x340?text=Jadidlar'">
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

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach((t) => {
        t.classList.remove("active");
        t.style.color = "#8a99ad";
        t.style.fontWeight = "600";
        t.style.borderBottom = "none";
        t.style.paddingBottom = "0";
        t.style.marginBottom = "0";
      });

      tab.classList.add("active");
      tab.style.color = "#2b4c7e";
      tab.style.fontWeight = "700";
      tab.style.borderBottom = "3px solid #2b4c7e";
      tab.style.paddingBottom = "10px";
      tab.style.marginBottom = "-12px";

      const categoryName = tab.textContent;
      if (breadcrumbHighlight)
        breadcrumbHighlight.textContent = categoryName.toUpperCase();

      const catKey = tab.getAttribute("data-category");
      renderCards(izlanishlarData[catKey] || []);
    });
  });

  renderCards(izlanishlarData.asarlar);

  const activeTab = document.querySelector(".izlanishlar-tab.active");
  if (activeTab) {
    activeTab.style.color = "#2b4c7e";
    activeTab.style.fontWeight = "700";
    activeTab.style.borderBottom = "3px solid #2b4c7e";
    activeTab.style.paddingBottom = "10px";
    activeTab.style.marginBottom = "-12px";
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetCategory = link.getAttribute("data-target");

    // Tegishli tabni topib bosish simulatsiyasini qilamiz
    const correspondingTab = document.querySelector(
      `.izlanishlar-tab[data-category="${targetCategory}"]`
    );
    if (correspondingTab) {
      correspondingTab.click();

      // Grid qismiga silliq pastga tushish (scroll)
      document
        .getElementById("izlanishlarGrid")
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});
