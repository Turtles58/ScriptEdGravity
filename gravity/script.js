//sets element to the variable $pic
$("Document").ready(function(){
    $("#pic").click(function(){
    $('#ground').css('top', $('#ground').offset().top-80);
    var pixels = $('#ground').css('top');
    $('#ground').css('top', $('#ground').offset().top+80)
    $("#pic").animate({top: pixels}, 400);
    console.log("hi");
    });
});
