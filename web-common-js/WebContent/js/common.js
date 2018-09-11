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