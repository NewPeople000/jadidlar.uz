// jadidlarList.js – carousel ostidagi statik kartalarni chiqarish
// Bu fayl "scripts.js" faylidagi `slides` massivini qayta ishlatadi.
// Har bir slayd uchun carousel kabi `<a class="jadidlar-card">` elementini yaratadi
// va #cardsContainer elementiga qo'shadi.

(function () {
  // DOM elementini topamiz
  const container = document.getElementById('cardsContainer');
  if (!container) return;

  // Har bir slide bo'yicha kartani yaratish
  slides.forEach((slide) => {
    const a = document.createElement('a');
    a.className = 'jadidlar-card';
    a.href = slide.link || '#';
    a.style.textDecoration = 'none';

    const img = document.createElement('img');
    img.src = slide.image;
    img.alt = slide.name;
    img.loading = 'lazy';
    a.appendChild(img);

    const info = document.createElement('div');
    info.className = 'jadidlar-card-info';

    const h3 = document.createElement('h3');
    h3.textContent = slide.name;
    info.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = slide.description;
    info.appendChild(p);

    a.appendChild(info);
    container.appendChild(a);
  });
})();
