$(function() {
    $slideOne = $("#slide-one").slider();
	$slideOne.slideChange(function(value) {
		$("#result").text(parseInt(value));
	});
});