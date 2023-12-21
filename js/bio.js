$(document).ready(function(){
    $(".member").click(function(){
      $(this).find(".bio").toggle("slow");
      $(this).toggleClass("expanded");
    });
  });