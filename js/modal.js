// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    //In this case six
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    //return on 1
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

let modal = document.getElementById('myModal');

window.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target == modal) {
        modal.style.display = "none";
    }
});