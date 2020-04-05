let pic_flip= ["pictures/wink_edit.png","pictures/basic_smile_edit.png"];
i=0;
let x=document.getElementById("basic_smile");
let menu = document.getElementById('menu');
let div2= document.getElementsByClassName('sections2');

x.addEventListener('mouseenter',function ()
{
   // x=pic_flip[1];
   // i++;
   //  console.log(pic_flip.length);
   //  x.src=["pictures/wink_edit.png","pictures/basic_smile.png"];
    x.src=pic_flip[i];
    i++;
    if(i>pic_flip.length)
    {
        i=0;
        x.src=pic_flip[i];
        i++;
    }
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

