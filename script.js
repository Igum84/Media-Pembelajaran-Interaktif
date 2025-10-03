function mulaiBelajar() {
  alert("Selamat belajar! 🎉");
}

function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // Toggle class 'show' yang akan mengubah max-height di CSS
  nav.classList.toggle("show");

  // Perbarui status aria-expanded untuk aksesibilitas
  const isExpanded = nav.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", isExpanded);
}
