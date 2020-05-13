const scroll = new SmoothScroll('a[href*="#"]', { offset: -50 });
const upper = document.querySelector("#upper");
$(".light-box").fancybox();

$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    upper.classList.add("scrolled");
  } else {
    upper.classList.remove("scrolled");
  }
});
