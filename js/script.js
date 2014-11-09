$( document ).ready(function() {
    
    var currentMousePos = { x: -1, y: -1 };
    var dataGutter = $(".data-gutter");


    //***** User Triggers *****//
    
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
        toggleGutter();
    });


    
    //***** Functions *****//


    function showDataGutter(){
    	$(".data-gutter").animate({
    		bottom: 0
    	}, 500)
    }

    function hideDataGutter(){
    	$(".data-gutter").animate({
    		bottom: -150
    	}, 500)
    }




    // ELSEWHERE, your code that needs to know the mouse position without an event
    function toggleGutter(){
        if (currentMousePos.y > 500) {
            dataGutter.addClass("show-gutter");
        } else {
            dataGutter.removeClass("show-gutter");            
        }
    }



});