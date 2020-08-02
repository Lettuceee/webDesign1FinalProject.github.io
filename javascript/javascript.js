var number = Math.floor((Math.random() * 5) + 0);
var number2 = Math.floor((Math.random() * 0) + -5);
$("img:nth-of-type(n+1)").css("transform", "rotate(" + number + "deg)");
$("img:nth-of-type(n+2)").css("transform", "rotate(" + number2 + "deg)");