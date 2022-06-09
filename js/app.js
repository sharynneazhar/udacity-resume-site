window.addEventListener("scroll", function (event) {
  if (window.scrollY > 10) {
    document.querySelector("header").classList.add("header-shadow");
  } else {
    document.querySelector("header").classList.remove("header-shadow");
  }
});
