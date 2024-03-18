/* script.js for Webpage with Textboxes and Button */

// Change text on button click
$(document).ready(function() {
    $('#changeButton').click(function() {
        $('#textBox1').val('New Text 1');
        $('#textBox2').val('New Text 2');
    });
});
