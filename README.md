# web-common-js
웹 개발에 유용한 스크립트 모음입니다.<br>
here is usefull script for web development

<script src="js/common.js"></script>
<script src="lib/jquery-3.3.1.min.js"></script>
<style>
div {margin-bottom:10px;}
h5 {margin-bottom:0px;}
</style>
<h1>그냥 해봐 == JUST DO IT! return true</h1>
<div>
	<h5>number_format Test</h5>
	<input id="number_format_text" type="text" value="10000"/><input type="button" value="number_format" onclick="number_format_test()"/>
</div>
<div>
	<h5>is_null_text Test</h5>
	<input id="is_null_text" type="text" value="test"/><input type="button" value="is_null" onclick="is_null_test()"/>
</div>
<script>
	function number_format_test(){
		var to_be = $("#number_format_text").val();
		var as_is = number_format(to_be);
		$("#number_format_text").val(as_is);
	}
	function is_null_test(){
		var value = $("#is_null_text").val();
		var result = is_null(value);
		alert(" value null is : [ "+result+" ]");
	}
</script>
