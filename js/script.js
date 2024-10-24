// script.js
$(document).ready(function () {
  // DOM manipulation example
  $("#animateBtn").click(function () {
    $("h1").animate({ fontSize: "3rem" }, 1000);
  });

  // Example of adding a class to an element for dynamic styling
  $("nav").addClass("nav-styles");
});
