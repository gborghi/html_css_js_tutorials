$(".question").click(function () {
   $(this).next().slideToggle("slow");
   $(this).children().toggleClass("collapse");
})

/*$("#q2").click(function () {
   $("#a2").slideToggle("slow");
   $("#arrow2-down").toggleClass("collapse");
   $("#arrow2-up").toggleClass("collapse");
})

$("#q3").click(function () {
   $("#a3").slideToggle("slow");
   $("#arrow3-down").toggleClass("collapse");
   $("#arrow3-up").toggleClass("collapse");
})*/
