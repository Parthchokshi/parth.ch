$(document).ready(function(){
    $(".button-collapse").sideNav();
    $("a.resetbutton").click(function(){
        $('input, textarea').val('');
        $('input, textarea').blur();
    });

    console.log("Hey");
    console.log($(window).width());

    
});



