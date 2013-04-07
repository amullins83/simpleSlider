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

While the slider example above works, in general you will probably want to adapt the slider's
look and behavior to fit your site. So far, I have implemented these options:

- **min**: Determines slider's minimum value. Defaults to 0.

- **max**: Determines slider's maximum value. Defaults to 100.

- **value**: Determines slider's initial value. Defaults to `min`.

- **backgroundColor**: Determines slider background (unfilled) color. Defaults to `#ccc` (a light gray).

- **handleColor**: Determines the handle background color. Defaults to `#bbb` (a gray).

- **handleSelectedColor**: Determines the handle background color when the slider is active. Defaults to white.

- **fillColor**: Determines the background color of the slider to the left of the handle. Defaults to blue.

- **thickness**: Determines the girth of the slider bar. Must be a positive integer representing the number of pixels of thickness. Defaults to 20.

- **slideLength**: Determines the length of the slider bar. Must be a positive integer representing the number of pixels across. Defaults to 200.

- **handleRadius**: Determines the size of the handle (which is circular). Must be a positive integer. Defaults to `thickness`.

- **onslidechange**: The handler function to call whenever the slider is moved. Must be a function, and the default is the empty function (`function() {}`).

- **mechanizeTrigger**: The jQuery selector that identifies the object to whose value the slider will be bound. This allows
you to automate the slider with input from an outside source. If the outside source supplies input that is not valid (input is greater than max,
less than min, or not a number), the resulting slider value will be clipped to the min/max for the slider. Non-numeric input results in no change.
