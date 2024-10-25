$(document).ready(function () {
  // Toggle the navbar when the burger icon is clicked
  $(".burger-icon").click(function () {
    $(".nav-links").toggleClass("active");
    $(".btn-hide").toggleClass("active"); // Show/Hide the links
  });
});

$(document).ready(function () {
  $(".logo-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    arrows: false,
    dots: true,
  });
});
