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

    function toggleGutter(){
        if (currentMousePos.x > 1000) {
            dataGutter.addClass("show-gutter");
        } else {
            dataGutter.removeClass("show-gutter");            
        }
    }

    function indicateData(){
        dataGutter.addClass("show-gutter");
        flashIcon();
        setTimeout(function(){
            dataGutter.removeClass("show-gutter");
        }, 3000)
    }

    function flashIcon(){
        var icon = $('.fa-file-text-o');
        icon.addClass("flash-icon");
        setTimeout(function(){
            icon.removeClass("flash-icon");
        }, 4000)
    }

    indicateData();



});