$(document).ready(function () {
  $(".nav-btn").on("click", function () {
    $(".nav-btn").toggleClass("close-btn");
    $(".nav-list").toggleClass("open-menu");
    $("body").toggleClass("scrollclose");
});

$(".nav-list a").on("click", function () {
    // Close the menu and navigate to the corresponding page
    $(".nav-btn").removeClass("close-btn");
    $(".nav-list").removeClass("open-menu");
    $("body").removeClass("scrollclose");
    
    // Navigate to the link's href
    window.location.href = $(this).attr("href");
});
  
  $(".accordion-content").css("display","none");
  // $(".accordion-title:first-of-type").addClass("open");
  $(".accordion-title").click(function(){
   $(".open").not(this).removeClass("open").next().slideUp(300);
   $(this).toggleClass("open").next().slideToggle(500);
  });

$(window).scroll(function () {
  const faqSec = $(".sec-accordion");
  const scrollPosition = $(window).scrollTop();
  const faqSecOffset = faqSec.offset().top;

  if (scrollPosition <= 500) {
    $(".pagetop").addClass("d-none");
  } else {
    $(".pagetop").removeClass("d-none");
  }

  if ($(window).width() <= 768) {
    if (scrollPosition >= faqSecOffset + 200) {
      $(".scrolltop").addClass("pos");
    } else {
      $(".scrolltop").removeClass("pos");
    }
  } else {
    if (scrollPosition >= faqSecOffset) {
      $(".scrolltop").addClass("pos");
    } else {
      $(".scrolltop").removeClass("pos");
    }
  }
});

//To Top Click
$(".pagetop").click(() => {
  window.scrollTo(0, 0);
});


});

