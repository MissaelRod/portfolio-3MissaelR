$("document").ready(function() {

    $("div:nth-child(1)").css("background-color", "lightgray");

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);

    $('#show').css('visibility', 'hidden');

    $('#hide').bind('click', hideThePage);
//lets the accordion do what it was told to do
    $('#superHumans').accordion({header: "h3"});

    $('#show').bind('click', showThePage);

});
//hides the page when you click a button
function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
//shows the page when you click a button
function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function mouseOverMe() {
    $("h1").html("Last");
}

function mouseOutMe() {
    $('h1').html('Here');
}
//shows "Clicked!" when you hit a button
function mouseClick() {
    $('p').html('Clicked!!!!!!!!');
}

$('#replaceWText').bind('click', replaceWText);

$('#randPara').bind('click', addAPara);

$('#removePara').bind('click', removeAPara);

function removeAPara() {
    $('#randPara p:last').remove();
}
//adds new text
function addAPara() {
    $('#randPara').append('<p>Now Click Number 1!</p>');
}
//changes text to something else
function replaceWText() {
    $('#replaceWText').text('More pointless text!');
}