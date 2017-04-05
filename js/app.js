(function() {
  console.log('TEST');

  var newDiv = document.createElement('DIV');
  newDiv.innerHTML = 'hello';
  newDiv.classList.add('jom');
  document.getElementsByTagName('body')[0].appendChild(newDiv);

  var div2 = document.createElement('DIV');
  div2.innerHTML = 'second div!!';
  div2.classList.add('div-2');
  document.getElementsByTagName('body')[0].appendChild(div2);
})();
