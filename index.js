var CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_-+=[{]}|;:,.<>/?";
var CHARACTERS_LENGTH = CHARACTERS.length;

var len = document.getElementById('length');
var pass = document.getElementById('password');
var generate = function() {
  var password = '';
  for (let x = 0; x < parseInt(len.value || 1, 10); x++) {
    password += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_LENGTH));
  }
  pass.setAttribute('value', password);
};

document.getElementsByTagName('button').item(0).addEventListener('click', generate);
generate();
