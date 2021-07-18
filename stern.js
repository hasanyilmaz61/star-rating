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


    $("#clikt").click(function(){

        let x= $("#conteiner>i.sternGeklict");

        if(x.length == 0)
        {
            alert("Noch kein Stern ausgewählt");
        }
        else
        {
            $("#ergebnis").text("Sie haben " + x.length + " Sterne gegeben.");
        }


    } );

});

   

    
    
    





