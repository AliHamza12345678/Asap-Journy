// ✅ 1. Dark Mode Toggle Function
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Optional: Save mode in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// ✅ 2. Apply saved dark mode on reload
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// ✅ 3. Scroll to Top Button Logic
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// ✅ 4. Preloader Hide After Load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
    document.body.classList.add("loaded"); // for smooth fade-in
  }, 500);
});
function openModal() {
  document.getElementById("videoModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("videoModal").style.display = "none";
}
// Subscribe button logic
document.addEventListener("DOMContentLoaded", function () {
  const subscribeBtn = document.querySelector(".btn-subscribe");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "payment.html";
    });
  }
});
document.querySelectorAll(".btn-subscribe").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "payment.html";
  });
});

