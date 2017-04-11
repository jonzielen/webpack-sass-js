//require('jquery');
require('jquery-ui');
require('bootstrap');

(function() {
  function createStuff(elem = 'DIV', text, className) {
    var newElem = document.createElement(elem);
    newElem.innerHTML = text;
    newElem.classList.add(className);
    document.getElementsByTagName('body')[0].appendChild(newElem);
  }

  createStuff('DIV', 'hello', 'jom');
  createStuff('DIV', 'second div!!', 'div-2');

  let name = 'Jon';
  let nameString = `My name is ${name}.`;

  createStuff('h5', nameString, 'div-2');

  const sayHello = name => console.log(`Hello ${name}!`);
  sayHello(name);

  $('body').append('<p>test</p>');
})();

$(function() {
  $("#accordion").accordion();
  $("#datepicker").datepicker();
});
