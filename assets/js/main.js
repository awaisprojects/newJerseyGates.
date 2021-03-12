window.onscroll = function () {
  toggleNavBarBackground();
};

$("button.navbar-toggler").on("click", () => {
  toggleNavBarBackground();
});

let isMobile = window.innerWidth <= 768;
function toggleNavBarBackground() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50 ||
    isMobile
  ) {
    document.querySelector("nav").classList.add("bgNavebar");
  } else if (!isMobile) {
    document.querySelector("nav").classList.remove("bgNavebar");
  }
}
