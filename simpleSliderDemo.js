$(function() {
	sliderList = [];
    
	sliderList.push($("#slide-one").slider());
	
	sliderList.push($("#slide-orange").slider({
		fillColor:"#f80",
		handleColor:"#fa0",
		handleSelectedColor:"#ff0"
	}));
	
	sliderList.push($("#slide-big").slider({
		fillColor:"#08f",
		handleColor:"#c00",
		handleSelectedColor:"#f00",
		thickness:100,
		slideLength:300
	}));
	
	sliderList.push($("#slide-min32").slider({
		fillColor:"#800",
		handleColor:"#0aa",
		handleSelectedColor:"#0ff",
		min:32,
		max:212
	}));
	
	sliderList.push($("#slide-default90").slider({
		fillColor:"#bcd",
		handleColor:"#bcd",
		handleSelectedColor:"#cde",
		value:90
	}));
	
	sliderList.push($("#slide-handleHalf").slider({
		fillColor:"#fff",
		handleColor:"#000",
		handleSelectedColor:"#444",
		handleRadius:10
	}));
	
	sliderList.push($("#slide-mech").slider({
		fillColor:"red",
		handleColor:"blue",
		mechanizeTrigger:"#mechanizer"
	}));
	
	for(var i in sliderList)
		sliderList[i].slideChange(function(value) {
			this.siblings(".result").text(parseInt(value));
		});
	
	sliderList[-1].slideChange(function(value) {
		$("#mechanizer").val(parseInt(value));	
	});
	
});
