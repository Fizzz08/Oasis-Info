"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Get the input element
  var input = document.querySelector('.textspace'); // Get all the buttons

  var buttons = document.querySelectorAll('button');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the button value
      var buttonText = this.textContent;
    });
  });
});
//# sourceMappingURL=cal.dev.js.map
