$(document).ready(function () {
  let $preloader = $("#page-preloader");
  $preloader.fadeOut(1000);

  /* $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
      $(".header").addClass(".header__active");
    } else {
      $(".header").removeClass(".header__active");
    }
  }); */

  // Show the first tab and hide the rest
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  // Click function
  $("#tabs-nav li").click(function (e) {
    e.preventDefault();
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  $(".accordion__header").click(function () {
    $(".accordion__body").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);

    $(".accordion__item")
      .not($(this).closest(".accordion__item"))
      .removeClass("open-accordion");
    $(this).closest(".accordion__item").toggleClass("open-accordion");
  });

  $(".js-modal").click(function (e) {
    e.preventDefault();
    $(".modal-1").fadeIn("fast");
  });
  $(".js-modal-2").click(function (e) {
    e.preventDefault();
    $(".modal-2").fadeIn("fast");
  });
  $(".js-modal-3").click(function (e) {
    e.preventDefault();
    $(".modal-3").fadeIn("fast");
  });
  $(".js-modal-4").click(function (e) {
    e.preventDefault();
    $(".modal-4").fadeIn("fast");
  });

  $(".modal__close, .modal__overlay").click(function(){
    $(".modal").fadeOut("fast");
  });

  AOS.init({
    once: true,
    anchorPlacement: "bottom-bottom",
    duration: 800,
  });

  onElementHeightChange(document.body, function () {
    AOS.refresh();
  });
});
