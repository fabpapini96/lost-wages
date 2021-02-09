if (window.screen.width > 1200) {
    $(function () { // wait for document ready

        var controller = new ScrollMagic.Controller();

        var horizontalSlide = new TimelineMax()
            // animate panels
            .fromTo("section.section.sec2", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
            .fromTo("section.section.sec3", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        // .to("#js-slideContainer", 1, {x: "-33.33333%"})
        // .to("#js-slideContainer", 1, {x: "-66.66666%"})

        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#js-wrapper",
            triggerHook: "onLeave",
            duration: "300%"
        })
            .setPin("#js-wrapper")
            .setTween(horizontalSlide)
            .addTo(controller);


    })
}

function openItem(page) {
    window.location.href = page;
}

function showMenu() {
    $("#menu-dropdown").toggleClass("hidden", 500);
    $("#menu-icon").toggleClass("fa-times");
}

$(".product-sec-img").click(function(){
    $("#product-big-img").css("background-image", $(this).css("background-image"));
    $(".product-sec-img").removeClass("brightness-70");
    $(this).addClass("brightness-70");
})
