$("document").ready(function(){
   //$("div p:last-child").css("background-color", "red");
   
   //$("div p:first-child").css("background-color", "yellow");
   
   $("div:nth-child(1)").css("background-color", "orange");
   
   $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
   
   $('h1').bind('click', mouseClick);
   
});

function mouseOverMe(){
    $("h1").html("Here");
}

function mouseOutMe(){
    $('h1').html('Click');
}

function mouseClick(){
    $('p').html('Clicked!!!!!!!!!!!!!!!!');
}
