$("document").ready(function() {
    //$("div p:last-child").css("background-color", "red");

    // $("div p:first-child").css("background-color", "yellow");

    $("div:nth-child(1)").css("background-color", "lightgray");

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);

    $('#show').css('visibility', 'hidden');

    $('#hide').bind('click', hideThePage);

    $('#superHumans').accordion({header: "h3"});

    $('#show').bind('click', showThePage);

});

function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function mouseOverMe() {
    $("h1").html("Here");
}

function mouseOutMe() {
    $('h1').html('Click');
}

function mouseClick() {
    $('p').html('Clicked!!!!!!!!!!!!!!!!');
}

//function alertButtonClick(){
// alert("There was a button clicked");
//}

$('#replaceWText').bind('click', replaceWText);

$('#randPara').bind('click', addAPara);

$('#removePara').bind('click', removeAPara);

function removeAPara() {
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED!</p>');
}

function replaceWText() {
    $('#replaceWText').text('More pointless text!');
}