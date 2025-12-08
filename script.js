document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const fullText = el.textContent;
  el.textContent = "";

  let i = 0;
  function type() {
    if (i < fullText.length) {
      el.textContent += fullText.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }

  type();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");

  // Load saved preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "☀️";
      localStorage.setItem("darkMode", "enabled");
    } else {
      toggle.textContent = "🌙";
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

