(function () {
  var html = document.documentElement;
  var btn = document.createElement("button");
  btn.className = "theme-btn";
  btn.textContent = "🌙";
  document.querySelector("header").appendChild(btn);
  if (localStorage.getItem("theme") === "dark") {
    html.setAttribute("data-theme", "dark");
    btn.textContent = "☀️";
  }
  btn.onclick = function () {
    var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    btn.textContent = next === "dark" ? "☀️" : "🌙";
  };
})();