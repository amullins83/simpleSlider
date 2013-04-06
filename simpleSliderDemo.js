$(function() {
    $("#slide-one").slider();
	$("#slide-one").slideChange(function(value) {
		$("#result").text(value);
	});
});