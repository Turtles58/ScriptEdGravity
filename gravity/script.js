//sets element to the variable $pic
$("Document").ready(function(){
    $("#pic").click(function(){
    $("#pic").animate({top: "+=400px"}, 400);
    console.log("hi");
    });
});
