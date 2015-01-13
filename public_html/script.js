$("document").ready(function(){
   //$("div p:last-child").css("background-color", "red");
   
   // $("div p:first-child").css("background-color", "yellow");
   
   $("div:nth-child(1)").css("background-color", "lightgray");
   
   $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
   
   $('h1').bind('click', mouseClick);
   
   //$('#oneButton').bind('click', alertButtonClicked);

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

//function alertButtonClick(){
// alert("There was a button clicked");
//}

$('#replaceWText').bind('click', replaceWText);

$('#randPara').bind('click', addAPara);

$('#removePara').bind('click', removeAPara);

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('More pointless randome text!');
}