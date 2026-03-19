// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Simple Alert for click
function showMessage(text) {
  alert(text);
}

// Smooth scroll
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
