var i=0;
var outCount=0;
$(document).ready(function(){
    "use strict";
  $(".boundary").mouseover(function(event){
    $(".boundary").addClass("youlose");
     $("#status").text("Sorry, You lose!");
     $("#status").css("color","red");
     outCount++;
    
});
 $("#end").mouseover(function(event){
    if(i>0 && outCount==0){
        $("#status").text("Congratulations, You won!");
        $("#status").css("color","green");
    }
    else{
        $("#status").text("Sorry, You lose!");
        $("#status").css("color","red");
        outCount++;
    }

 });

 $("#start").mouseover(function(){
    $(".boundary").css('background-color','#eeeeee');
    location.reload();
    
});
$("#maze").mouseenter(function(){
    i++;
  });

$("#maze").mouseleave(function(){
    if(i>0){
        outCount++;
    }
  });

})