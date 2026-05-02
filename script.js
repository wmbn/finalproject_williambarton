(function () {
  var html = document.documentElement;

  var plants = [
    { img: "Orchidaceae.jpg", title: "Orchidaceae", desc: "28,000 Cosmopolitan Species That Ostensibly Resemble Insects" },
    { img: "Asteraceae.jpg", title: "Asteraceae", desc: "32,000 Species and Composite Flower Heads Actually Made of Several Florets" },
    { img: "Iridaceae.jpg", title: "Iridaceae", desc: "2,500 Species and Plants Who Have Inspired the Description of Pollinator Syndromes" },
    { img: "Rosaceae.jpg", title: "Rosaceae", desc: "4,800 Species with Famous Members like Apples, Almonds, Cherries, and of Course the Rose" },
    { img: "Strelitziaceae.jpg", title: "Strelitziaceae", desc: "Only Seven Species and Grown for Striking Flowers/Foliage" }
  ];
  var index = 0;

  function updateFeature() {
    var p = plants[index];
    var img = document.getElementById("feature-img");
    var title = document.getElementById("feature-title");
    var desc = document.getElementById("feature-desc");
    if (img) img.src = p.img;
    if (title) title.textContent = p.title;
    if (desc) desc.textContent = p.desc;
  }

  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  if (prev) prev.onclick = function () { index = (index - 1 + plants.length) % plants.length; updateFeature(); };
  if (next) next.onclick = function () { index = (index + 1) % plants.length; updateFeature(); };

  var btn = document.createElement("button");
  btn.className = "theme-btn";
  btn.textContent = "◐";
  btn.setAttribute("aria-label", "Toggle theme");
  document.querySelector("header").appendChild(btn);

  if (localStorage.getItem("theme") === "dark") {
    html.setAttribute("data-theme", "dark");
    btn.textContent = "◑";
  }

  btn.onclick = function () {
    var nextTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    btn.textContent = nextTheme === "dark" ? "◑" : "◐";
  };
})();