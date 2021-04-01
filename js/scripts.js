$(document).ready(function () {
  // toggles side nav
  $(".fas.fa-bars").on("click", () => {
    $("#sideNav").slideToggle("slow");
  });

  // scrolls to top of screen using arrow
  $(".back-to-top-link").click(function () {
    window.scrollTo({
      top: 0,
    });
  });

  // shows and hides back to top arrow
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".fixed-arrow").show();
    } else {
      $(".fixed-arrow").hide();
    }
  });
});
