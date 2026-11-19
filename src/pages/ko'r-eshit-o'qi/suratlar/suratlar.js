const suratlarItems = [
  {
    title: "OLIMJON QODIRIY O'LIMI GUVOHNOMASI",
    hoverTitle: "SURATLAR JAMG'ARMASI",
    date: "29.08.2025",
    image:
      "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-38-23.jpg",
  },
  {
    title: "UBAYDULLA XO'JAYEV, SAIDA XO'JAYEVA...",
    date: "29.08.2025",
    image:
      "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-22-47.jpg",
  },
  {
    title: "SATTOR JABBOR VA OILASI",
    date: "29.08.2025",
    image:
      "https://backend.jadidlar.uz/media/images/photo_2025-08-18_12-46-06.jpg",
  },
];

const ITEMS_PER_PAGE = 10;
let currentPage = 1;

const photosGridEl = document.getElementById("photosGrid");
const paginationEl = document.getElementById("pagination");
const photoModalEl = document.getElementById("photoModal");
const photoModalImgEl = document.getElementById("photoModalImg");
const photoModalCaptionEl = document.getElementById("photoModalCaption");
const photoModalCloseEl = document.getElementById("photoModalClose");
const photoModalBackdropEl = document.getElementById("photoModalBackdrop");

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

function openPhotoModal(item) {
  if (!photoModalEl || !photoModalImgEl) return;
  photoModalImgEl.src =
    item.image || "https://via.placeholder.com/600x450?text=Jadidlar";
  photoModalImgEl.alt = item.title;
  if (photoModalCaptionEl) {
    photoModalCaptionEl.textContent = item.title;
  }
  photoModalEl.classList.add("is-open");
  photoModalEl.setAttribute("aria-hidden", "false");
}

function closePhotoModal() {
  if (!photoModalEl) return;
  photoModalEl.classList.remove("is-open");
  photoModalEl.setAttribute("aria-hidden", "true");
}

function renderPhotos() {
  if (!photosGridEl) return;

  const totalPages = Math.max(
    1,
    Math.ceil(suratlarItems.length / ITEMS_PER_PAGE)
  );
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = suratlarItems.slice(start, start + ITEMS_PER_PAGE);

  photosGridEl.innerHTML = pageItems
    .map(
      (item, idx) => `
        <article class="photo-card" data-index="${start + idx}">
        <div class="photo-card-thumb">
          <img
            src="${
              item.image || "https://via.placeholder.com/300x320?text=Surat"
            }"
            alt="${item.title}"
            onerror="this.src='https://via.placeholder.com/300x320?text=Surat'"
          />
          <span class="photo-date-badge">${item.date || ""}</span>
        </div>
        <div class="photo-card-caption" title="${item.title}">
          <span class="caption-default">${item.title}</span>
          <span class="caption-hover">${item.hoverTitle || item.title}</span>
        </div>
      </article>
      `
    )
    .join("");

  renderPagination(totalPages);
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

if (photosGridEl) {
  photosGridEl.addEventListener("click", (e) => {
    const card = e.target.closest(".photo-card");
    if (!card) return;
    const idx = Number(card.dataset.index);
    if (Number.isInteger(idx) && suratlarItems[idx]) {
      openPhotoModal(suratlarItems[idx]);
    }
  });
}

if (paginationEl) {
  paginationEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-btn");
    if (!btn || btn.disabled) return;
    currentPage = Number(btn.dataset.page) || 1;
    renderPhotos();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (photoModalCloseEl) {
  photoModalCloseEl.addEventListener("click", closePhotoModal);
}
if (photoModalBackdropEl) {
  photoModalBackdropEl.addEventListener("click", closePhotoModal);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePhotoModal();
});

injectComponent("navbar", "../../../components/navbar.html");
injectComponent("footer", "../../../components/footer.html");
renderPhotos();
