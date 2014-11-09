$( document ).ready(function() {
    setMainVidHeight();
    
    

    //***** User Triggers *****//
    
    $(window).resize(setMainVidHeight);
    $(".data-gutter-trigger").hover(function(){
    	showDataGutter();
    	console.log("mouse in");
    }, function(){
    	hideDataGutter();
    	console.log("mouse out");
    })


    


    //***** Functions *****//

    function setMainVidHeight(){
    	var mainVidHeight = $(".main-video").height();
   		$(".main-video-wrapper").height(mainVidHeight + 100);
    }

    function showDataGutter(){
    	$(".data-gutter").animate({
    		bottom: 0
    	}, 500)
    }

    function hideDataGutter(){
    	$(".data-gutter").animate({
    		bottom: -81
    	}, 500)
    }

});