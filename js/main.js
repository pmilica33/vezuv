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



        //Validation contact

        $("#send-contact").on('click', (e) => {
          e.preventDefault();

          let isValidName = false;
          let isValidEmail = false;
          let isValidMessage = false;



          //Name and surname
          const nameSurname = $("#name-surname").val();
          isValidName = isValidNameSurname(nameSurname);

          //email
          const email = $("#inputEmail4").val();
          isValidEmail = isValidEmailF(email);


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




        // Apliciranje za posao

        $("#apliciraj").on('click', (e) => {
          if (name()) {
            if (email()) {
              if (tel()) {
                Swal.fire(
                  'Uspješno poslato!',
                  'Vaši podaci biće proslijeđeni!',
                  'success'
                )
                $("#karijera-modal").modal('hide');

              }
            }
          }
        });


        // Functions

        function isValidNameSurname(name) {
          const patternName = /^[a-z ,.'-]+$/i;
          return isValidName = name.length > 2 && name.match(patternName);
        }

        function isValidEmailF(email) {
          const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return isValidEmail = emailRegex.test(email);
        }



        $('#name-surname-apliciranje').on('keyup', () => name());
        $('#inputEmail4-apliciranje').on('keyup', () => email());
        $('#telephone').on('keyup', () => tel());


        // Name and surname
        function name() {
          let isValidName = false;
          const nameSurnameInput = $("#name-surname-apliciranje");
          const nameSurname = nameSurnameInput.val();
          const name = $("#name");

          isValidName = isValidNameSurname(nameSurname);
          displayError(isValidName, nameSurnameInput, name, "Nije pravilno ime i prezime");


          return isValidName;
        }


        // Email

        function email() {

          let isValidEmail = false;
          const emailInput = $("#inputEmail4-apliciranje");
          const em = $("#em");
          const email = emailInput.val();
          isValidEmail = isValidEmailF(email);
          displayError(isValidEmail, emailInput, em, "Email ne sadrži @ i .com");


          return isValidEmail;
        }


        // Telphone

        function tel() {
          let isValidPhone = false;
          const tel = $("#tel");

          const phoneInput = $("#telephone");
          const phone = phoneInput.val();
          isValidPhone = phone.length > 4 && !isNaN(phone);
          displayError(isValidPhone, phoneInput, tel, "Neispravan broj telefona");

          return isValidPhone;
        }



        // File

        $('#upload').on("change", function () {
          const file = this.files[0];
          console.log(this.files[0]);

          if (file) {
            if (file.size < 2097152) {
              let isExtensionOk = true;
              if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.type === "application/pdf") {
                isExtensionOk = true;
              } else {
                isExtensionOk = false;
              }
            }
          }
        });

        // Error function

        function displayError(isValid, element, error, message) {
          if (isValid) {
            element.css('border-color', '#009900');
            error.html("&#10004").css('color', '#009900');
            error.next().html("");

          } else {
            element.css('border-color', '#b70019');
            error.html("&times;").css('color', '#b70019');
            error.next().html(message);

          }
        }