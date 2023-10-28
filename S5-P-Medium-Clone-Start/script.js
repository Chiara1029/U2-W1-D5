window.addEventListener("scroll", function () {
  const navBar = document.getElementById("navBar");
  const navBtn = document.getElementById("navButton");
  if (window.scrollY > 450) {
    navBar.classList.add("scrolled");
    navBtn.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
    navBtn.classList.remove("scrolled");
  }
});
