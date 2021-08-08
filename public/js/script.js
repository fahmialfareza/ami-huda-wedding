AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 2, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$(document).ready(function () {

    if (window.matchMedia('(max-width: 767px)').matches) {
        $("#navbar").removeClass("fixed-top mb-4 mt-4");
        $("#navbar").addClass("fixed-bottom");
        $("#navbar-list").removeClass("mx-auto");
        $("#navbar-list").removeClass("mb-2");
        $("#navbar-list").removeClass("mt-2");
        $("#btn-ami").removeClass("ml-4");
        $("#btn-ami").addClass("ml-1");
        $("#btn-huda").removeClass("ml-4");
        $("#btn-huda").addClass("ml-1 mr-1");
        $("#rsvp").removeClass("d-flex");
        $(".pesan-rspv").removeClass("col mr-3");
        $(".pesan-rspv").addClass("col-sm-4");
        $(".waktu").removeClass("col");
        $(".waktu").addClass("col-sm-4 text-center");

    } 

     if (window.matchMedia('(max-width: 640px)').matches) {
        $("#navbar").removeClass("fixed-top mb-4 mt-4");
        $("#navbar").addClass("fixed-bottom");
        $("#navbar-list").removeClass("mx-auto");
        $("#navbar-list").removeClass("mb-2");
        $("#navbar-list").removeClass("mt-2");
        $("#btn-ami").removeClass("ml-4");
        // $("#btn-ami").addClass("");
        $("#btn-huda").removeClass("ml-4");
        // $("#btn-huda").addClass("");
        $("#rsvp").removeClass("d-flex");
        $(".pesan-rspv").removeClass("col");
        $(".pesan-rspv").addClass("col-sm-4");
        $(".waktu").removeClass("col");
        $(".waktu").addClass("col-sm-4 text-center");

    } 
});