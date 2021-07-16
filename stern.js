$(function(){


    $("#conteiner>i").click(function()

    {
        $(this).siblings().removeClass("sternGeklict");
        $(this).addClass("sternGeklict");
        $(this).prevAll().addClass("sternGeklict");
   
        
    });


    $("#conteiner>i").mouseenter(function()
    {
     $(this).addClass("sternAktiv");
     $(this).prevAll().addClass("sternAktiv");

        
    });

    $("#conteiner>i").mouseleave(function()
    {
        $(this).removeClass("sternAktiv");
     $(this).prevAll().removeClass("sternAktiv");
    });


});

   

    
    
    





