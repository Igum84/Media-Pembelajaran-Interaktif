function mulaiBelajar() {
  alert("Selamat belajar! 🎉");
  // Logika lanjutan bisa ditambahkan di sini, misalnya:
  // window.location.href = '#materi';
}

function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  const menuToggle = document.querySelector(".menu-toggle");

  // 1. Toggle class 'show' untuk membuka/menutup menu
  nav.classList.toggle("show");

  // 2. Kelola status aria-expanded untuk aksesibilitas
  const isExpanded = nav.classList.contains("show");
  menuToggle.setAttribute("aria-expanded", isExpanded);
}
