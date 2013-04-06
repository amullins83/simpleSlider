$.fn.slider = function(options) {
    $self = $(this).addClass("slider");
    if(typeof(options) === "undefined")
        options = {};
    
    var slideOpts = {
        min:options.min || 0,
        max:options.max || 100,
        value:options.value || 0,
        backgroundColor:options.backgroundColor || "#ccc",
        handleColor:options.handleColor || "#bbb",
        fillColor:options.fillColor || "#00f"
		onslidechange:options.onslidechange || function() {}
    };

    if(slideOpts.min === slideOpts.max)
        slideOpts.max++;

    $self.calculatePosition = function() {
        return $self.width()*((slideOpts.value - slideOpts.min)/(slideOpts.max - slideOpts.min));
    };
    $self.calculateValue = function() {
        $self.data("value", parseInt($handle.css("left"))/$self.width()*(slideOpts.max-slideOpts.min) + slideOpts.min);
        return slideOpts.value = $self.data("value");
    };
	$self.slideChange = function(callback) {
		if(typeof(callback) === "function")
			slideOpts.onslidechange = callback;
	};
    $handle = $("<div class='handle'/>").offset({left:$self.calculatePosition()});
    $fill = $("<div class='fill'/>").width($self.calculatePosition()).css({backgroundColor:slideOpts.fillColor});
    $self.append($fill);
    $self.append($handle);
    
    $self.data("value",slideOpts.value);
    $self.on("mousedown", function() {
        $handle.addClass("selected");
        $(document).bind("mousemove", function(e) {
            var leftOffset = e.pageX - $self.offset().left;
            if(leftOffset < 0)
                $handle.css({left:0});
            else if(leftOffset > $self.width())
                $handle.css({left:$self.width()});
            else
                $handle.css({left:leftOffset});
            $fill.width(parseInt($handle.css("left")));
            $self.calculateValue();
			slideOpts.onslidechange();
        });
    });
        $(document).on("mouseup", function() {
            $(document).unbind("mousemove");
            $handle.removeClass("selected");
        });
};