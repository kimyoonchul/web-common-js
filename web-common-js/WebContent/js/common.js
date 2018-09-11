// ex) 10000 -> 10,000 like php number_format
function number_format(number){
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// null check function like php ==
function is_null(value){
	if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ 
		return true 
	}else{ 
		return false 
	}
}

// only_number
(function($) {
    $.fn.OnlyNumber = function(options) {
    	var settings = $.extend({
    		type : "normal", // normal, money
    		is_int : false
    	},options);
    	
    	$(this).bind("keyup change", function(e){
    		var text = '' ;
    		if(settings.is_int == true){
    			text = $(this).val().replace(/[^0-9]/g,'');
    		}else{
    			text = $(this).val().replace(/[^0-9\.]/g,'');
    		}
    		if(settings.type == "money"){
    			text = number_format(text);
    		}
    		$(this).val(text);
    	});
    };
})(jQuery);