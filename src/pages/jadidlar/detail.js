document.addEventListener("DOMContentLoaded", () => {
  // 1. Umumiy biografiya matni
  const defaultBio = `
    <p><b>Bolaligi.</b> 1875-yil 19-yanvarda Samarqand yaqinidagi Baxshitepa qishlogʻida tugʻilgan. Otasi Behbudxoʻja Solihxoʻja oʻgʻli Ahmad Yassaviyning avlodlaridan boʻlib, imom-xatiblik bilan shugʻullanib kelgan. Onasi (ismi nomaʼlum) 1893-yili, otasi 1894-yili vafot etgan.</p>
    <p><b>Maʼlumoti.</b> Mahmudxoʻja togʻasi qozi Muhammad Siddiq tarbiyasi va qaramogʻida oʻsib voyaga yetgan. Kichik togʻasi Mulla Odildan arab tili grammatikasini oʻrgangan. Buxoro madrasalarida moddiy qiyinchiliklar sabab oʻqishni nihoyasiga yetkazolmagan.</p>
    <p><b>Faoliyati.</b> Samarqandga qaytib, Muhammad Siddiq qozixonasida mirzolik qila boshlagan. Qozilikdan mufti darajasigacha koʻtarilgan.</p>
    <p>1899 – 1900-yillari Mahmudxoʻja Behbudiy haj ziyoratiga borgan. Vataniga qaytgan Mahmudxoʻja Behbudiy tariximizning tanazzul bosqichlari, sabablarini taftish qilgan, bu masalalar borasida maslakdoshlari Baqo Hoji, Hoʻqandboy Abduxoliq oʻgʻli, Badriddin singari dunyoqarashi keng insonlar bilan munozaralar oʻtkazgan. 1903-yili alloma tashabbusi bilan shogirdlari Siddiqiy Ajziy Halvoyi, Abduqodir Shakuriy Rajabamin qishlogʻida, Hoji Muin Xoʻja Nisbatdor mahallasida jadid maktablarini ochganlar.</p>
    <p>Behbudiy 1908-yili “Qiroatxonayi Behbudiya” (keyinchalik “Behbudiya” nomi bilan mashhur boʻlgan) kutubxonasini ochgan. Ushbu kutubxona ikki navbatda – soat 9 dan 17 gacha va soat 18 dan 24 gacha ishlab, 60 dan 110 gacha boʻlgan kitobxonlarga xizmat koʻrsatgan. Behbudiy “Samarqand kutubxona islomiyasi” maqolasida kutubxonada 600 ta kitob va risola, gazeta va jurnallar esa undan ham koʻp boʻlganini yozgan.</p>
    <p>1914-yilgi sayohati davomida Kavkaz, Qrim, Turkiya, Misr, Yunoniston, Bulgʻoriston, Avstriya va Germaniyaning turli shaharlarida boʻlib, u yerlardan oʻz kutubxonasi uchun juda koʻp kitob va risolalar olib kelgan.</p>
    <p>Mahmudxoʻja Behbudiy 1913-yildan matbuot ishlarini yoʻlga qoʻyagan va shu yilning aprelidan “Samarqand” gazetasi hamda avgust oyidan “Oyina” jurnali chiqa boshlagan. “Samarqand” gazetasi oʻzbek va tojik tillarida, haftada ikki marta, dastlab ikki, soʻng toʻrt sahifada chop etilgan. 1913-yil 17-sentyabrda gazetaning 45-soni chiqqan boʻlib, bir tomondan, mustamlakachilar senzurasi, ikkinchi tomondan, yetarli mablagʻ boʻlmagani sabab toʻxtatilgan.</p>
    <p>“Oyina” haftalik jurnal boʻlib, oʻzbek va tojik tilidagi maqolalar berib borilgan. Uning obunachilari nafaqat Turkiston, balki Kavkaz, Tatariston, Eron, Afgʻoniston, Hindiston va Turkiyada ham bor edilar. 1915-yilgacha nashr qilingan jurnalda Turkiston aholisining haq-huquqi, tarixi, til-adabiyot masalalariga bagʻishlangan gʻoyat muhim maqolalar, bahslar berib borilgan. Ayniqsa, til masalasi muharrirning hamisha diqqat markazida turgan. Mahmudxoʻja Behbudiy millat taraqqiysi uchun bir necha tilni bilishlikni shart deb hisoblagan.</p>
    <p>Mahmudxoʻja Behbudiy millat ziyolilaridan Abdurauf Fitrat, Siddiqiy, Hoji Muin, Akobir Shomansur, Muhammad Said, Saidrizo Alizoda, Saidahmad Vasliy, Tavallo, Sadriddin Ayniy, Hakim Buxoriy, Niyoziy Rajabzodaning maqolalari va sheʼrlarini “Oyina” sahifalarida chop etib borgan. Nashr yosh qalamkashlar, boʻlgʻusi adib va maʼrifatparvarlar uchun tajriba maydoni vazifasini ham oʻtagani maʼlum.</p>
    <p><b>Ilmiy-adabiy merosi.</b> Behbudiy umri davomida “Turkiston viloyatining gazeti”, “Tujjor”, “Samarqand” gazetalari va “Oyina” jurnalida yuzlab maqolalar yozgan. Ularda millat va Vatan, jamiyat va axloq haqidagi qarashlarini ifoda etgan. “Risolai asbobi savod” (1904), “Risolai jugʻrofiyai umroniy” (1905), “Risolayi jugʻrofiyoyi Rusiy” (1905), “Kitobat ul-atfol” (1908), “Amaliyoti islom” (1908), “Tarixi islom” (1909) kabi darslik va qoʻllanmalar muallifi hamdir.</p>
    <p><b>Oʻlimi.</b> 1919-yili Favqulodda komissiya aygʻoqchilari yordamida Shahrisabz bekligida qoʻlga olingan. Oradan taxminan ikki oy oʻtgach, Qarshiga keltirib zindonga tashlangan. Bir necha kundan soʻng Qarshi begi Togʻaybekning buyrugʻi bilan yordamchisi Nuriddinxoʻja Ogʻaliq Ahmadxoʻja oʻgʻli tomonidan zindon yaqinidagi “podsholik chorbogʻi”da oʻldirilgan.</p>
  `;

  // 2. Jadidlar bazasi
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

  // 3. Asarlar bazasi
  const booksData = [
    {
      title: "Mahmudxo‘ja Behbudiy. Tanlangan asarlar I jild",
      image: "https://backend.jadidlar.uz/media/images/1-jild.webp",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Kitobat al atfol",
      image:
        "https://backend.jadidlar.uz/media/images/Screenshot_from_2024-02-28_14-33-43.png",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. “Oyina” (1914 – 1915)",
      image: "https://backend.jadidlar.uz/media/images/1-logo_122_FtliAwQ.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Yoshlarg'a murojaat",
      image: "https://backend.jadidlar.uz/media/images/YOM.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Muxtasar tarixislom",
      image: "https://backend.jadidlar.uz/media/images/Muxtasar.jpg",
    },
    {
      title:
        "Mahmudxo‘ja Behbudiy. Ш. ​ Камолиддин, Т . Коджаоглу.Проект культурной автономии ТуркестанаМахмудходжи Бехбуди",
      image:
        "https://backend.jadidlar.uz/media/images/%D0%A8._%D0%9A%D0%B0%D0%BC%D0%BE%D0%BB%D0%B8%D0%B4%D0%B4%D0%B8%D0%BD_%D0%A2._%D0%9A%D0%BE%D0%B4%D0%B6%D0%B0%D0%BE%D0%B3%D0%BB%D1%83._%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D1%83%D1%80%D0%BD%D0%BE%D0%B9_%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%B8_%D0%A2%D1%83%D1%80%D0%BA%D0%B5%D1%81%D1%82%D0%B0%D0%BD%D0%B0_%D0%9C%D0%B0%D1%85%D0%BC%D1%83%D0%B4%D1%85%D0%BE%D0%B4%D0%B6%D0%B8_%D0%91%D0%B5%D1%85%D0%B1%D1%83%D0%B4%D0%B8.jpg",
    },

    {
      title: "Mahmudxo‘ja Behbudiy. Rahnamoi savodi avval",
      image: "https://backend.jadidlar.uz/media/images/Untitled_HfmZTbl.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy.Risolayi mudaxxili jug'rofiyayi umroniy",
      image: "https://backend.jadidlar.uz/media/images/Untitled_vh84erj.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Танланган асарлар",
      image:
        "https://backend.jadidlar.uz/media/images/1-logo_122_otm729W_Rqlj55L.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Танланган асарлар",
      image: "https://backend.jadidlar.uz/media/images/Untitled_Orbcxio.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Танланган асарлар",
      image: "https://backend.jadidlar.uz/media/images/Untitled_BtfOyRM.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy.Tanlangan asarlar II jild",
      image: "https://backend.jadidlar.uz/media/images/2-jild.webp",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Танланган асарлар",
      image:
        "https://backend.jadidlar.uz/media/images/1-logo_122_otm729W_3Mg4lux.jpg",
    },
  ];

  // 4. Maqolalar bazasi (Ma'lumotlarini o'zingiz xohlagancha o'zgartirasiz)
  const articlesData = [
    {
      title: "Mahmudxo‘ja Behbudiy. Buxoro amorati",
      image:
        "https://backend.jadidlar.uz/media/images/hoja0TJHlRUFpa78UNgFfsY7qbkaXzJVrxrRIuMt.png",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Teatr, musiqa, sher",
      image:
        "https://backend.jadidlar.uz/media/images/i2MczVrYpINZnbHJbBXhhu133To5zPTFh27Nf8Ls.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. E'tidolg'a da'vat",
      image:
        "https://backend.jadidlar.uz/media/images/AudVFheuYULu22x4myApupPBbPFpmiskn2KWYl2p.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Turkistonda maktab jarida va ulamo",
      image:
        "https://backend.jadidlar.uz/media/images/RyQaKAuK8YlaxhXzAlWpb41N2vCctoaofM0ZsQSZ.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Til masalasi",
      image:
        "https://backend.jadidlar.uz/media/images/j1Ac8WNLoMq3lOEmyRwZJRLc87lGcdN7tL2eCqYB.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Ikki emas to'rt til lozim",
      image:
        "https://backend.jadidlar.uz/media/images/mdvn6Wb7ewmarFWUxAlXrwdoXF7rTiqOROBbzCfc.jpg",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Ikki emas to'rt til lozim",
      image:
        "https://backend.jadidlar.uz/media/images/c57gCRyNbYoVmNDFhPe3r3FV7zjXdOQizyxLevzB.png",
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Ikki emas to'rt til lozim",
      image:
        "https://backend.jadidlar.uz/media/images/Jahon-adab-2003-08-1.jpg",
    },
  ];

  // URL dan ID ni o'qib olish
  const urlParams = new URLSearchParams(window.location.search);
  const jadidId = parseInt(urlParams.get("id")) || 1;
  const jadid = allJadids.find((item) => item.id === jadidId) || allJadids[0];

  // Sahifani to'ldirish
  if (document.getElementById("pageTitle"))
    document.getElementById(
      "pageTitle"
    ).textContent = `${jadid.name} - Jadidlar`;
  if (document.getElementById("breadcrumbName"))
    document.getElementById("breadcrumbName").textContent =
      jadid.name.toUpperCase();
  if (document.getElementById("detailName"))
    document.getElementById("detailName").textContent = jadid.name;
  if (document.getElementById("detailDates"))
    document.getElementById("detailDates").textContent = jadid.dates;
  if (document.getElementById("detailImage")) {
    document.getElementById("detailImage").src = jadid.image;
    document.getElementById("detailImage").alt = jadid.name;
  }
  if (document.getElementById("detailBio"))
    document.getElementById("detailBio").innerHTML = defaultBio;

  const tabJadidHaqida = document.getElementById("tabJadidHaqida");
  const tabAsarlar = document.getElementById("tabAsarlar");
  const tabMaqolalar = document.getElementById("tabMaqolalar");
  const tabSherlar = document.getElementById("tabSherlar");
  const tabEsdaliklar = document.getElementById("tabEsdaliklar");
  const tabHikmatli = document.getElementById("tabHikmatli");

  const bioSection = document.getElementById("bioSection");
  const contentSection = document.getElementById("contentSection");

  // Bo'sh quti HTML kodi (Ma'lumot yo'q)
  // Bo'sh quti (Toza SVG quti va yozuv)
  const emptyBoxHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 50px 0; text-align: center; width: 100%;">
      <div style="width: 250px; height: 250px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
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
      </div>
      <p style="color: #8a99ad; font-size: 16px; font-weight: 600; margin: 0;">Ma'lumot yo'q</p>
    </div>
  `;

  // Aktiv tabni belgilash
  function setActiveTab(activeTab) {
    [
      tabJadidHaqida,
      tabAsarlar,
      tabMaqolalar,
      tabSherlar,
      tabEsdaliklar,
      tabHikmatli,
    ].forEach((tab) => {
      if (tab) {
        tab.style.color = "#8a99ad";
        tab.style.borderBottom = "none";
        tab.style.paddingBottom = "0";
        tab.style.marginBottom = "0";
      }
    });
    if (activeTab) {
      activeTab.style.color = "#2b4c7e";
      activeTab.style.borderBottom = "3px solid #2b4c7e";
      activeTab.style.paddingBottom = "10px";
      activeTab.style.marginBottom = "-13px";
    }
  }

  // Card grid yaratish
  function renderGrid(data) {
    let gridHTML = `<div class="books-grid">`;
    data.forEach((item) => {
      gridHTML += `
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
    gridHTML += `</div>`;
    return gridHTML;
  }


  // 5. Esdaliklar bazasi (Siz yuborgan rasm bo'yicha 3 ta card)
  const memoirsData = [
    {
      title: "Mahmudxo‘ja Behbudiy. Behbudiy hazratlari to‘g‘risida",
      image: "https://backend.jadidlar.uz/media/images/537MvkccnlVOHC1IT5954Ld0VJtZiy75qDfz1rZx.jpg", // O'z rasm manzilingizni qo'yasiz
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Sayohat",
      image: "https://backend.jadidlar.uz/media/images/iBEJPHO2tLTkc1Jkzf9w0QSW40ZF74el3RmuHiFk.jpg", // O'z rasm manzilingizni qo'yasiz
    },
    {
      title: "Mahmudxo‘ja Behbudiy. Muftiy",
      image: "https://backend.jadidlar.uz/media/images/Z5UiJGrwK8AaGAYXOVo3V2gdJCEqP4AwnubBO4gI.png", // O'z rasm manzilingizni qo'yasiz
    }
  ];


  // 6. Hikmatli so'zlar bazasi (Qolganlarini shu yerga o'zingiz qo'shib ketaverasiz)
  const quotesData = [
    {
      text: "Din va dunyodan boxabar bo'lmoqni xohlaydigan har kim uchun tarix o'qumoq kerak, chunki har nimarsada ishning asli tarixdan bilinur.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Ikki emas, to'rt til lozim.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: `Eski hukumat zohiran bizni madaniy qilmoq uchun "russkiy tuzemniy" ismida bizning uchun maktablar ochib o'z fahmlarincha bizni dunyo va oxiratda nek baxt ya'ni nasoro (xristian) qilaturg'on misso'nerlarga topshirdilar.`,
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Eski zolim hukumatning ish va din buzguvchi odamlari va misso'nerlari madrasalarimiz va maktablarimiz to'g'risida ham bizni hayvonotg'a va jaholat maydonig'a ham yo'q va mahv bo'lsh chuqurig'a sudraydurg'on zakunlar vaz' etdi.",
      author: "Mahmudxo‘ja Behbudiy"
    },


    {
      text: "Turkiston Rusiyag‘a tobe’ bo‘lgondin so‘ngra (polojeniya) zako‘n joriy bo‘ldi va ul tartibg‘a zulmcha hukumatning misso‘nerlari bul sabab bizni axloq va odob va shariatimizg‘a xalal kelturadurg‘on va bizni yo‘q etmoqg‘a sudraydurg‘on boblar tuzatdilar.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Madfun zolim hukumat usuli jadida maktablarig‘a mone’ edi.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Аziz birodarlar, oʼgʼul toʼylarigʼa sarf qilaturgʼon aqchalaringizni mana shul ilmi zamoniy yoʼligʼa sarf etingiz, sizdan oʼgʼlungizga mol meros qolmasun, balki, albatta, ilm va tarbiya meros qolsun.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Ey hazrati ulamo! Ey tujjor, ahli kasaba va agʼniyo! Ey gʼayratlik yoshlar! Nifoq va bir-birigʼa dushmanlikni tashlangiz. Xudo haqqi, arvohi anbiyo hurmati va bu kunlarda qornini toʼygʼizolmayturgan yetim va bevalar haqqi bir-biringiz ila ittifoq etub, jamiyatlar barpo qilib, xoliq Xudoning nafigʼa, din va millat yoʼligʼa xizmat etingiz. Millat va xalq sizdan xizmat va yaxshilik talab etadur, nafsoniyat va gʼurur emas.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Xalqning jismoniy va ruhoniy tarbiyati uchun murabbiylar, yaʼni, ulamolarning diniy va zamonaviy ulum va fununning darajai kamolda bilmoqlari, albatta, lozimdur.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Har millat va din ahlining boshchi va hodiysi ulamolardur.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Millatlar taraqqiyigʼa bir necha sabablar boʼlub, tub sababi ulamo ila agʼniyoning hamiyat va gʼayratlaridur. Taraqqiy qilgʼon va yo endi taraqqiy qilguvchi millatlar ahvoligʼa diqqat qilinsa, mazkur ikki sinf muhtaramni oʼz millatlarigʼa soʼz va aqcha ila xizmat etganlari favran zohir boʼlur.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Bizni hozirgi mansabdorlarimizning xizmati faqat toʼgʼrilik va yomonlarni ushlab teyishli joyigʼa topshurmoq, podshohlik soliqlarini vaqtigʼa yigʼib bermoq va xalqni tinch saqlamoqdan iboratdur.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Haq olinur, berilmaydur!",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Tarix koʼb ahamiyatli va foydali bir narsadur. Tarixning foydalaridan baʼzisi ushbudurki: bir millat na tariqada, qaysi yoʼl ila taraqqiy etganin oʼqub ibrat olmak yoki bir millatning na sabablardan tanazzul etib, oxiri munqariz boʼlub ketganin oʼqub, mundan ham istifoda etmak mumkindur.",
      author: "Mahmudxo‘ja Behbudiy"
    },
    {
      text: "Makotib taraqqiyning boshlangʼichi, madaniyat va saodatning durdonasidur. Har millat, eng avval makotibi ibtidoiyasini zamoncha isloh etub koʼpayturmaguncha taraqqiy yoʼligʼa kirub madaniyatdan foydalana olmas.",
      author: "Mahmudxo‘ja Behbudiy"
    },
  ];

  // Hikmatli so'zlarni chiqaruvchi funksiya
  function renderQuotes(data) {
    let quotesHTML = `<div class="quotes-container">`;
    data.forEach((item) => {
      quotesHTML += `
        <div class="quote-card">
          <p class="quote-text">“${item.text}”</p>
          <span class="quote-author">${item.author}</span>
        </div>
      `;
    });
    quotesHTML += `</div>`;
    return quotesHTML;
  }

  // "Hikmatli so'zlar" tabi bosilganda ishlaydigan qism
  if (tabHikmatli) {
    tabHikmatli.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabHikmatli);
      if (bioSection) bioSection.style.display = "none";
      if (contentSection) contentSection.innerHTML = renderQuotes(quotesData);
    });
  }

  // Hodisalar
  if (tabJadidHaqida) {
    tabJadidHaqida.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabJadidHaqida);
      if (bioSection) bioSection.style.display = "block";
      if (contentSection) contentSection.innerHTML = "";
    });
  }

  if (tabAsarlar) {
    tabAsarlar.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabAsarlar);
      if (bioSection) bioSection.style.display = "none";
      if (contentSection) contentSection.innerHTML = renderGrid(booksData);
    });
  }

  if (tabMaqolalar) {
    tabMaqolalar.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabMaqolalar);
      if (bioSection) bioSection.style.display = "none";
      if (contentSection) contentSection.innerHTML = renderGrid(articlesData);
    });
  }

  if (tabSherlar) {
    tabSherlar.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabSherlar);
      if (bioSection) bioSection.style.display = "none";
      if (contentSection) contentSection.innerHTML = emptyBoxHTML;
    });
  }

  // Esdaliklar bosilganda cardlarni chiqarish
  if (tabEsdaliklar) {
    tabEsdaliklar.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveTab(tabEsdaliklar);
      if (bioSection) bioSection.style.display = "none";
      if (contentSection) contentSection.innerHTML = renderGrid(memoirsData);
    });
  }
});