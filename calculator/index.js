$("#button1").click(
  function(test){
    $(".prova").text("Perchè mi clicchi?");
    return test;
  }
);

$( "#button2" ).click(
  function(test){
    $(".prova").text("Ciao"); return test;
  }
);

$( "#somma" ).click(
  function(test){
    var num1=parseFloat($("#fname").val());
    var num2=parseFloat($("#lname").val());
    $("#sum").val(num1+num2);
    return test;
  }
);
