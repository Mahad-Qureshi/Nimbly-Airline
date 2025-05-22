$(document).ready(function () {
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: false,
        pauseOnHover: true,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>', // Unicode for left arrow
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 768, // for screens smaller than 768px
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}