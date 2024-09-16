// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});

// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });
});

$(document).ready(function () {
  $(".menu-background").on("click", function () {
      $(".header-menu").toggleClass("open-menu");
      if($(".header-menu").hasClass("open-menu")){
        $(".menu-background").html("<img src='/assets/img/aa.png' class='sp menu-image1'>");}
        else{
          $(".menu-background").html("<img src='/assets/img/img_mu.png' class='sp menu-image'>");
        }
      }
  );
  
 })
