const aboutPageData = {
  description:
    "3000 yillik milliy davlatchilik yo'limizdagi eng muhim tarixiy bosqichlardan biri sanalmish, 19-yuzyillik oxiri - 20-yuzyillik 30-yillarida kechgan Jadidchilik milliy harakatining ahamiyati, jadid bobolarimiz turmushi, ishi va merosini keng targ'ib qilishni ko'zlagan, yozma, tovushli, ko'rgazmali, raqamli ma'lumotlarni o'z ichiga olgan va uzluksiz boyitib boriladigan \"jadidlar.uz\" elektron platformasi O'zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi O'zbek tilini rivojlantirish jamg'armasining buyurtmasiga ko'ra 2021 - 2023-yillari Tarix institutida \"jadidlar.uz\" elektron platformasini yaratish\" amaliy loyihasi doirasida ishlab chiqildi.",
  participants: [
    {
      name: "Azamat Ziyo",
      role: "Akademik, loyiha boshlig‘i",
      image: "https://backend.jadidlar.uz/media/image/Azamat_Ziyo-min.JPG",
    },
    {
      name: "Dilnoza Jamolova",
      role: "Tarix fanlari doktori, professor",
      image: "https://backend.jadidlar.uz/media/image/Dilnoza_Jamolova-min.jpg",
    },
    {
      name: "Muhayyo Isoqova",
      role: "Tarix fanlari doktori, professor",
      image: "https://backend.jadidlar.uz/media/image/Muhayyo_Isoqova-min.JPG",
    },
    {
      name: "Odiljon Zaripov",
      role: "Tarix fanlari bo‘yicha falsafa doktori, katta ilmiy xodim",
      image: "https://backend.jadidlar.uz/media/image/Odil_Zaripova-min.JPG",
    },
    {
      name: "Gulmira Ochilova",
      role: "Tarix fanlari bo‘yicha falsafa doktori, katta ilmiy xodim",
      image: "https://backend.jadidlar.uz/media/image/Gulmira_Ochilova-min.JPG",
    },
    {
      name: "Mashhura Darmonova",
      role: "Tarix fanlari bo‘yicha falsafa doktori, katta ilmiy xodim",
      image: "https://backend.jadidlar.uz/media/image/Mashhura_kJKUGOV.jpg",
    },
    {
      name: "Abduvali Yo‘ldoshev",
      role: "Tarix fanlari bo‘yicha falsafa doktori, katta ilmiy xodim",
      image: "https://backend.jadidlar.uz/media/image/Abduvali_Yoldoshev-min.JPG",
    },
    {
      name: "Sherali Qo‘ldoshev",
      role: "Tarix fanlari doktori",
      image: "https://backend.jadidlar.uz/media/image/Sherali.jpg",
    },



    {
      name: "Umida Teshaboyeva",
      role: "Tarix fanlari bo‘yicha falsafa doktori",
      image: "https://backend.jadidlar.uz/media/image/Umida_vZKcrLM.jpg",
    },
    {
      name: "Baxtiyor Hasanov",
      role: "Tarix fanlari doktori, professor",
      image: "https://backend.jadidlar.uz/media/image/Baxtiyor.jpg",
    },
    {
      name: "Saodat Nazarova",
      role: "Tarix fanlari bo‘yicha falsafa doktori",
      image: "https://backend.jadidlar.uz/media/image/Saodat_pUsgU4m.jpg",
    },
    {
      name: "Asadullo Hasanov",
      role: "kichik ilmiy xodim Tarix fanlari bo'yicha falsafa doktori (PhD)",
      image: "https://backend.jadidlar.uz/media/image/Asadullo_Hasanov-min.JPG",
    },
    {
      name: "Dalerjon Mirzayev",
      role: "kichik ilmiy xodim Tarix fanlari bo'yicha falsafa doktori (PhD)",
      image: "https://backend.jadidlar.uz/media/image/Dalerjon_Mirzayev-min.JPG",
    },
  ],
};

const creatorsDescriptionEl = document.getElementById("creatorsDescription");
const participantsGridEl = document.getElementById("participantsGrid");

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

function renderAboutPage() {
  if (creatorsDescriptionEl) {
    creatorsDescriptionEl.textContent = aboutPageData.description;
  }

  if (!participantsGridEl) return;

  participantsGridEl.innerHTML = aboutPageData.participants
    .map(
      (person) => `
        <article class="participant-card">
          <div class="participant-thumb">
            <img
              src="${
                person.image ||
                "https://via.placeholder.com/300x240?text=Ishtirokchi"
              }"
              alt="${person.name}"
              onerror="this.src='https://via.placeholder.com/300x240?text=Ishtirokchi'"
            />
          </div>
          <div class="participant-body">
            <h3 class="participant-name">${person.name}</h3>
            <p class="participant-role">${person.role}</p>
          </div>
        </article>
      `
    )
    .join("");
}

injectComponent("navbar", "../../components/navbar.html");
injectComponent("footer", "../../components/footer.html");
renderAboutPage();
