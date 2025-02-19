/*Dark Mode*/
$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
    } else {
        $( "body" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
    }
});
/*Home Slider*/
let swiper = new Swiper(".home-slider", {
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    loop: true,  
});

/*About */
var slideIndex = 0;
slowSlides();  // Call the correct function

function slowSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(slowSlides, 2000);  // Corrected function call
}
