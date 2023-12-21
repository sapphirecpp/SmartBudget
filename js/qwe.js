$(document).ready(function(){
    $(".funk").click(function(){
      $(this).find("p").toggle("slow");
      $(this).toggleClass("expanded");
    });
  });