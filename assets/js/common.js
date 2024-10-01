$(document).ready(function () {
  $(".nav-btn").on("click", function () {
    $(".nav-btn").toggleClass("close-btn");
    $(".nav-list").toggleClass("open-menu");
    // $(".nav-container").toggleClass("nopadding");
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

$(window).scroll(function(){
  const footerMain = $(".footer");
  const scrollPosition = $(window).scrollTop();
  const windowHeight = $(window).height();
  const footerMainOffset = footerMain.offset().top;

  if (scrollPosition <= 300) {
    $(".pagetop").addClass("d-none");
  } else {
    $(".pagetop").removeClass("d-none");
  }

  if ($(window).width() <= 768) {
       
    if (scrollPosition + windowHeight >= footerMainOffset) {
      $(".scrolltop").addClass("pos");
    } else {
      $(".scrolltop").removeClass("pos");
    }
  } else {
    if (scrollPosition + windowHeight >= footerMainOffset) {
      $(".scrolltop").addClass("pos");
    } else {
      $(".scrolltop").removeClass("pos");
    }
  }

  //To Top Click
  setTimeout(() => {
       $(".pagetop").click(() => {
       window.scrollTo(0, 0);
       });
  }, 300);
});

// navbar background color
$(window).scroll(function () {
  const scrollPosition = $(window).scrollTop();

  if (scrollPosition > 0) {
      $(".sec-nav").addClass("transparent"); // Add transparent class when scrolling
  } else {
      $(".sec-nav").removeClass("transparent"); // Remove it when at the top
  }
});



});

