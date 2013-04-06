simpleSlider
============

My own attempt at a jQuery-based slider object

Installation
------------

Add these files to your project:

- simpleSlider.js
- simpleSlider.css

Link to them in your page:

    <link href="simpleSlider.css" rel="stylesheet" type="text/css"/>
    <script src="simpleSlider.js" type="text/javascript"></script>
    
This project uses the popular [jQuery library](http://jquery.com). In order to use it, add this line to your page **before** the link to simpleSlider:

    <script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>
    
I cannot guarantee that my files will always work with the latest version of jQuery, but if you let me know of any problems, I'll look into it.

Usage
-----

Add an empty `<div>` to your DOM wherever you'd like your slider to go. For example:

    <div id="slide-one"></div>
    
Now, in your main page script, select it and call `.slider()` on it:

    $("#slide-one").slider();
    
After that, you need to pass a callback to the `.slideChange` function:

    $("#slide-one").slideChange(function(value) {
          $("#result").text(value);
    });
    
Every time the slider position changes, the callback will be called with an argument equal to the slider's `data-value` attribute.

Options
-------

More info to come!