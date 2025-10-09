const toggleBtn = document.getElementById("toggleTheme") || document.getElementById("toggleTheme2");

if (toggleBtn) {

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}
