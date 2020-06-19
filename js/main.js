$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");
  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
    window.scrollTo(0, 0);
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let dataTarget = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(dataTarget).toggleClass("visible");
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
