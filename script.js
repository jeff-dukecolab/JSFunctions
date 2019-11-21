var target = document.getElementById('changeThis');
var oneContainer = document.getElementById('valueOfOne');

var one = 1;

// this declares the function, but it doesn't do anything until it's told to execute
function changeStuff() {
  target.innerHTML = 'new content';
  plusOne();
  console.log(one);
}

function plusOne(length, width) {
  one = one + 1;
  oneContainer.innerHTML = one;
  return (one);
}

plusOne(1,2)