$.fn.slider = function(options) {
    var $self = this.addClass("slider");
    if(typeof(options) === "undefined")
        options = {};
    
    var slideOpts = {
        min:options.min || 0,
        max:options.max || 100,
        value:options.value || 0,
        backgroundColor:options.backgroundColor || "#ccc",
        handleColor:options.handleColor || "#bbb",
        handleSelectedColor:options.handleSelectedColor || "#fff",
		fillColor:options.fillColor || "#00f",
		vertical: options.vertical || false,
		mechanize: options.mechanize || false,
		thickness: options.thickness || 20,
		slideLength: options.slideLength || 200,
		handleRadius: options.handleRadius,
		onslidechange:options.onslidechange || function() {}
    };

    if(slideOpts.min === slideOpts.max)
        slideOpts.max++; // Prevents divide by zero on calculate position
	
	if(slideOpts.value < slideOpts.min)
		slideOpts.value = slideOpts.min;
	else if(slideOpts.value > slideOpts.max)
		slideOpts.value = slideOpts.max;
	
	if(typeof(slideOpts.handleRadius) === "undefined")
		slideOpts.handleRadius = slideOpts.thickness;
	
	var $handle = $("<div/>");
	
	$handle.addClass("handle").css({
		backgroundColor:slideOpts.handleColor,
		borderRadius:slideOpts.handleRadius,
		width:slideOpts.handleRadius*2,
		height:slideOpts.handleRadius*2,
		top: -slideOpts.handleRadius/2
	});
	
	var halfHandleWidth = $handle.width()/2;
	
	$self.handle = $handle.css({left:-halfHandleWidth+$self.offset().left});
    
	
	$self.css({
		height:slideOpts.thickness,
		width:slideOpts.slideLength,
		backgroundColor:slideOpts.backgroundColor
	});

	$self.calculatePosition = function() {
        return $self.width()*( (slideOpts.value - slideOpts.min) / 
								      (slideOpts.max - slideOpts.min) ) - halfHandleWidth;
    };
    
	$self.calculateValue = function() {
        $self.data("value",
				   (parseInt($handle.css("left")) + $handle.width()/2 ) /
					$self.width()*(slideOpts.max-slideOpts.min) + slideOpts.min);
        return slideOpts.value = $self.data("value");
    };
	
	$self.onslidechange = slideOpts.onslidechange;
	
    $handle.css({
		left:$self.calculatePosition()
	});
	
    var $fill = $("<div class='fill'/>")
				.css({
					backgroundColor:slideOpts.fillColor,
					height:slideOpts.thickness,
					width: $self.calculatePosition() + halfHandleWidth
				});
			
    $self.append($fill);
	$self.append($handle);
    
    $self.data("value",slideOpts.value);
    
	$self.on("mousedown", function() {
        $handle.addClass("selected").css({
			backgroundColor:slideOpts.handleSelectedColor
		});
		
        $self.bind("mousemove", function(e) {
            var leftOffset = e.pageX - $self.offset().left;
            if(leftOffset < 0)
                $handle.css({
					left: -$handle.width()/2
				});
            else if(leftOffset > $self.width())
                $handle.css({
					left: ( $self.width() - $handle.width()/2 )
				});
            else
                $handle.css({
					left: ( leftOffset - $handle.width()/2 )
				});
            
			$fill.width( parseInt($handle.css("left")) + $handle.width()/2 );
			
			$self.onslidechange( $self.calculateValue() );
        });
    });

    $(document).on("mouseup", function() {
            $self.unbind("mousemove");
            $handle.removeClass("selected").css({
				backgroundColor:slideOpts.handleColor
			});
    });
	
	return $self;
};

$.fn.slideChange = function(callback) {
	if(typeof(callback) === "function")
		//this.each(function() {
			this.onslidechange = callback;
		//});
};