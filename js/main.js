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

// let nav = $(".navbar");
// let oTop = $('#first-card').offset().top;
// $(window).scroll(function () {

//   if (nav.offset().top + nav.outerHeight(true) > oTop) {
//     $('#first-card').addClass("animate-left");
//   } else {
//     $('#first-card').removeClasss("animate-left");

//   }
// });



//Validation

$("#send-contact").on('click', (e) => {
  e.preventDefault();

  let isValidName = false;
  let isValidEmail = false;
  let isValidMessage = false;



  //Name and surname

  const patternName = /^[a-z ,.'-]+$/i;
  const nameSurname = $("#name-surname").val();

  isValidName = nameSurname.length > 2 && nameSurname.match(patternName);

  //email
  const email = $("#inputEmail4").val();
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  isValidEmail = emailRegex.test(email);

  //Message

  const message = $("#message").val();
  isValidMessage = message.length !== 0;


  if (!isValidName) {
    Swal.fire({
      icon: 'error',
      title: 'Morate unijeti ime i prezime!',

    })

  } else if (!isValidEmail) {
    Swal.fire({
      icon: 'error',
      title: 'Morate unijeti pravilan email!',

    })
  } else if (!isValidMessage) {
    Swal.fire({
      icon: 'error',
      title: 'Napišite poruku!',

    })
  };
  //Good job
  if (isValidName && isValidEmail && isValidMessage) {
    Swal.fire(
      'Uspješno poslato!',
      'Vaši podaci biće proslijeđeni!',
      'success'
    )
  }

});