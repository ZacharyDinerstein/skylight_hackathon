$( document ).ready(function() {
    
    var currentMousePos = { x: -1, y: -1 };
    var dataGutter = $(".data-gutter");


    //***** User Triggers *****//
    
    $(document).mousemove(function(event) {
        if (dataGutter.attr("automated") == "false"){
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
            toggleGutter();
        }        
    });

    $("#lightboxOverlay").click(function(){
        alert("Hey");
    });

    
    //***** Functions *****//

    function toggleGutter(){
        if (currentMousePos.x > 1000) {
            dataGutter.addClass("show-gutter");
        } else {
            dataGutter.removeClass("show-gutter");            
        }
    }

});