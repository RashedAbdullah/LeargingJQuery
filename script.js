console.log(`'JQUERY' is here`);

// $(document).ready(function(){
//     $(".p1").click(function(){
//       $(this).hide();
//     });
// });

// $(document).ready(function () {
//     $(".p3").mouseover(function () { 
//         $(this).hide();
//     });
// });


$(document).ready(function () {
    $(`.forNext`).slick({
        autoplay: true, // (for autoplay next or previos)
        autoplaySpeed: 1000,
        arrows: true, //(default true, we can turn as false);
        dots: true,
        prevArrow: `<button type="button" class="slick-prev"><</button>`,
        nextArrow: `<button type="button" class="slick-next">></button>`
    })


    $(`.forNext2`).slick({
        autoplay: false, // (for auto next and previos)
        autoplaySpeed: 1000,
        arrows: true, //(default true, we can turn as false);
        dots: true,
        prevArrow: `<button type="button" class="slick-prev"><</button>`,
        nextArrow: `<button type="button" class="slick-next">></button>`,
        slidesToShow: 2,
    })


});