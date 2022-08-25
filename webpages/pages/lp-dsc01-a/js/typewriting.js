var typeWriting = new TypeWriting({
    targetElement   : document.getElementsByClassName('terminal')[0],
    inputString     : 'DATA SCIENCE DEGREE',
    typing_interval : 85, // Interval between each character
    blink_interval  : '0.9s', // Interval of the cursor blinks
    cursor_color    : '#fff', // Color of the cursor
    }, function() {
    console.log("END");
});
