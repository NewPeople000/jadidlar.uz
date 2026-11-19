document.addEventListener("DOMContentLoaded", () => {
  // Har bir kategoriya uchun ma'lumotlar bazasi
  const categoriesData = {
    tarix: [
      {
        title: "Hoji Muin. Vasliyning tarjimayi holi",
        image: "https://backend.jadidlar.uz/media/images/Maorif.jpg",
      },
      {
        title: "Xo'qandda",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_GdDcDBS.jpeg",
      },
      {
        title: "Xo'qandda bo'lg'an voqea",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_ccWahal.jpeg",
      },
      {
        title: "Xo'qand fojialari",
        image: "https://backend.jadidlar.uz/media/images/Chayon_oOHrqDF.jpeg",
      },
      {
        title: "Xo'qand poytaxt",
        image: "https://backend.jadidlar.uz/media/images/Chayon_hiiivxu.jpeg",
      },
      {
        title: "Xo'qand muxtoriyatchilariga...",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_iZFWNz8.jpeg",
      },
      {
        title: "Xo'qand voqealari va Xitoy tab'asalari",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_7D92NL9.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_RWPwbFu.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image: "https://backend.jadidlar.uz/media/images/Chayon_Z8GXjVI.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_VHfoais.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_t6tkGD7.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image: "https://backend.jadidlar.uz/media/images/Najot.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_7HWgvOA.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image: "https://backend.jadidlar.uz/media/images/Hurriyat_9u4ouXl.jpeg",
      },
      {
        title: "Xo'qand vakillari",
        image:
          "https://backend.jadidlar.uz/media/images/Ulug_Turkiston_TS7rLpQ.jpeg",
      },
    ],
    siyosat: [
      {
        title: "Siyosiy jarayonlar va jadidlar qarashlari",
        image:
          "https://backend.jadidlar.uz/media/images/jHXUhkpzjvibyHAOqIxx8Cq1OiuzffPta1ve9OyY.jpg",
      },
      {
        title: "Siyosiy jarayonlar va jadidlar qarashlari",
        image:
          "https://backend.jadidlar.uz/media/images/zbCxjhhf05oDFgGSQrMVfZ1WGclTB1Sa5ah7eu0k.jpg",
      },
    ],
    iqtisod: [
      {
        title: "Turkistonda savdo-sotiq masalalari",
        image:
          "https://backend.jadidlar.uz/media/images/LjarRic2vVMtS0KQ1vTeqmEum1t3RFh5B9g9LJyT.jpg",
      },
      {
        title: "Turkistonda savdo-sotiq masalalari",
        image:
          "https://backend.jadidlar.uz/media/images/SjjaD5aMecjl4v2jqvm2ldcQ6avQYn5iYRa9pyCK.jpg",
      },
    ],
    madaniyat: [],
    ijtimoiy: [],
    adabiyot: [
      {
        title: "G‘ozi Olim Yunus. Adabiyot to‘g‘risida xato nazar",
        image: "https://backend.jadidlar.uz/media/images/YVtYC0KP11MsU1kkJBtMG48aZQZ0DhUGgxiy44NO.jpg"
      },
      {
        title: "G‘ozi Olim Yunus. Adabiyot to'g'risida xato nazar",
        image: "https://backend.jadidlar.uz/media/images/i9ZFpceMlcBKyvwOqdfU2hM1ZmElCGn0YuFS8AE5.jpg"
      }
    ],
    talim: [],
    boshqa: [],
    bibliografik: [],
  };

  const gridContainer = document.getElementById("matbuotGrid");
  const tabs = document.querySelectorAll(".matbuot-tab");
  const breadcrumbHighlight = document.querySelector(".breadcrumb-highlight");

  // Cardlarni chiqaruvchi funksiya
  function renderCards(data) {
    if (!gridContainer) return;

    // Agar ma'lumot bo'sh bo'lsa (masalan: Madaniyat va san'at), bo'sh qutichani chiqaramiz
    if (data.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 0; text-align: center;">
          
          <svg
              width="260"
              height="260"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48 12V22M32 16L36 25M64 16L60 25"
                stroke="#CBD5E1"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path d="M48 32L76 44V74L48 86L20 74V44L48 32Z" fill="#6366F1" />
              <path d="M48 32L76 44L48 56L20 44L48 32Z" fill="#4338CA" />
              <path d="M48 56L76 44V74L48 86V56Z" fill="#818CF8" />
              <path d="M20 44L48 56L40 66L12 54L20 44Z" fill="#A5B4FC" />
              <path d="M76 44L48 56L56 66L84 54L76 44Z" fill="#C7D2FE" />
            </svg>
          
          <p style="color: #8a99ad; font-size: 16px; font-weight: 600; margin-top: 15px;">Ma'lumot yo'q</p>
        </div>
      `;
      return;
    }

    // Agar ma'lumot bo'lsa, cardlarni chizamiz
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

  // Tablar bo'yicha bosish hodisasi
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Aktiv classni almashtirish
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

      // Breadcrumb matnini o'zgartirish
      const categoryName = tab.textContent;
      if (breadcrumbHighlight) breadcrumbHighlight.textContent = categoryName;

      // Tegishli ma'lumotni chiqarish
      const catKey = tab.getAttribute("data-category");
      renderCards(categoriesData[catKey] || []);
    });
  });

  // Dastlabki yuklanganda "Tarix" bo'limini chiqarish
  renderCards(categoriesData.tarix);

  // Dastlabki tab stilini o'rnatish
  const activeTab = document.querySelector(".matbuot-tab.active");
  if (activeTab) {
    activeTab.style.color = "#2b4c7e";
    activeTab.style.fontWeight = "700";
    activeTab.style.borderBottom = "3px solid #2b4c7e";
    activeTab.style.paddingBottom = "10px";
    activeTab.style.marginBottom = "-12px";
  }
});
