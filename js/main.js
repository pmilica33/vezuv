//Navbar
$("#toggler-button").click(() => {
  $("#navbar")[0].classList.toggle("navbar-toggler-clicked");
  $('#navbar')[0].classList.toggle("bg-transparent");
})



//Validation contact

$("#send-contact").on('click', (e) => {
  e.preventDefault();

  let isValidName = false;
  let isValidEmail = false;
  let isValidMessage = false;
  let isTwo = false;



  //Name and surname
  const nameSurname = $("#name-surname").val();
  isValidName = isValidNameSurname(nameSurname);

  isTwo = isTwoString(nameSurname);

  //email
  const email = $("#inputEmail4").val();
  isValidEmail = isValidEmailF(email);


  //Message

  const message = $("#message").val();
  isValidMessage = message.length !== 0;

  if (!isValidName) {
    Swal.fire({
      icon: 'error',
      title: 'Morate unijeti slova!',

    })
    return;

  } else if (!isTwo) {
    Swal.fire({
      icon: 'error',
      title: 'Morate unijeti i ime i prezime!',

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
    $('#contact-form').trigger("reset");

  }

});




// Apliciranje za posao


//Button apliciraj
$("#apliciraj").on('click', (e) => {
  if (name()) {
    if (email()) {
      if (tel()) {
        if (isEmptyFile() && file()) {
          Swal.fire(
            'Uspješno poslato!',
            'Vaši podaci biće proslijeđeni!',
            'success'
          )
          reset();
        }
      }
    }
  }
});


// Functions

reset = () => {
  $("#karijera-modal").modal('hide');
  $('#form-apliciraj').trigger("reset");
  $('#name').html("");
  $('#error-text').html("");
  $('#em').html("");
  $('#tel').html("");
  $(":input").css('border-color', '#ced4da');
  $(".lijevo-dugme").attr("data-after", "");
  $("#file-image").attr('src', './images/ic_cloud_upload_24px.svg');
  $(".lijevo-dugme").css("color", "#4f4f62");

}


//Regex

function isValidNameSurname(name) {
  const patternName = /^[a-z ,.'-]+$/i;
  return isValidName = name.length > 2 && name.match(patternName);
}

function isTwoString(name) {
  const regex = /^[a-zA-Z]+[ ]+[a-zA-Z]+$/;
  return regex.test(name);
}

function isValidEmailF(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return isValidEmail = emailRegex.test(email);
}

//Onkeyup function

$('#name-surname-apliciranje').on('keyup', () => name());
$('#inputEmail4-apliciranje').on('keyup', () => email());
$('#telephone').on('keyup', () => tel());
$('#upload').on("change", () => file());



// Name and surname
function name() {
  let isValidName = false;
  let isTwo = false;
  const nameSurnameInput = $("#name-surname-apliciranje");
  const nameSurname = nameSurnameInput.val();
  const name = $("#name");

  isValidName = isValidNameSurname(nameSurname);
  isTwo = isTwoString(nameSurname);
  displayError(isTwo, nameSurnameInput, name, "Nije upisano i ime i prezime");



  return isValidName && isTwo;
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


function file() {

  const file = document.getElementById("upload").files[0];
  console.log(file);

  if (file) {
    if (file.size < 2097152) {
      if (file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.type === 'application/msword') {

        $("#file-image").attr('src', './images/doc.png');

      } else if (file.type === "application/pdf") {

        $("#file-image").attr('src', './images/pdf.png');
      }

      $(".lijevo-dugme").attr("data-after", file.name).css('color', '#009900');
      return true;

    } else {

      $(".lijevo-dugme").attr("data-after", "Maksimalna velicina: 2MB").css('color', '#b70019');
      return false;


    }
  } else {
    $(".lijevo-dugme").attr("data-after", "Unesi CV").css('color', '#b70019');
    return false;

  }
}

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

function isEmptyFile() {
  if ($('#upload').get(0).files.length === 0) {
    Swal.fire(
      'Unesite CV!',
      'Niste unijeli CV!',
      'error'
    )
    return false;
  }
  return true;
}