$(".number").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate({
      Counter: $(this).text(),
    }, {
      duration: 4000,
      easing: "swing",
      step: function (now) {
        $(this).text(Math.ceil(now));
      },
    });
});

//Navbar
$("#toggler-button").click(() => {
  $("#navbar")[0].classList.toggle("navbar-toggler-clicked");
  $('#navbar')[0].classList.toggle("bg-transparent");
})

// $(document).ready(function () {
//   $(".navbar-nav .nav-item").bind("click", function (event) {
//     event.preventDefault();
//     var clickedItem = $(this);
//     $(".mr-auto .nav-item").each(function () {
//       $(this).removeClass("active");
//     });
//     clickedItem.addClass("active");
//   });
// });

let nav = $(".navbar");
let oTop = $('#header-text-section').offset().top;
$(window).scroll(function () {

  if (nav.offset().top + nav.outerHeight(true) > oTop || $(document).width() < 1199) {
    whiteNav();
  } else {
    nav.removeClass("white-nav");
    $("#logo-image").attr("src", "img/LogoWhite.svg");
    $("#millenial-image").attr("src", "img/MillenialWhite.svg");
    nav.addClass("animatedFadeNav");
  }
});