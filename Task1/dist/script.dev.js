"use strict";

var string = "";
var display = document.getElementById("display");
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'Ac') {
      string = "";
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'bcksp') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
//# sourceMappingURL=script.dev.js.map
