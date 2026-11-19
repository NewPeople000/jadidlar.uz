document.addEventListener("DOMContentLoaded", () => {
  // Komponentlar papkasi root'ga nisbatan qayerda joylashganini aniqlaymiz
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (navbarPlaceholder) {
    fetch("/src/components/navbar.html")
      .then((res) => {
        if (!res.ok) throw new Error("Navbar topilmadi");
        return res.text();
      })
      .then((data) => {
        navbarPlaceholder.innerHTML = data;
        highlightActiveMenu();
      })
      .catch((err) => console.error("Navbar xatosi:", err));
  }

  if (footerPlaceholder) {
    fetch("/src/components/footer.html")
      .then((res) => {
        if (!res.ok) throw new Error("Footer topilmadi");
        return res.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      .catch((err) => console.error("Footer xatosi:", err));
  }
});

// Qaysi sahifada turganingizga qarab menyuni active qilish
function highlightActiveMenu() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("#nav_bar a, .nav-menu a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href !== "#" && currentPath.includes(href)) {
      link.classList.add("active");
    }
  });
}
