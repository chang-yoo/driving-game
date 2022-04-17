var $img = document.querySelector('img');
var position = 0;
var x = 1200;

document.addEventListener('keydown', function rotate(event) {
  if (event.keyCode === 40) {
    $img.className = 'south';
  } else if (event.keyCode === 37) {
    $img.className = 'west';
  } else if (event.keyCode === 38) {
    $img.className = 'north';
  } else if (event.keyCode === 39) {
    $img.className = 'east';
  } else if (event.keyCode === 32) {
    start();
  }
});

function start() {
  if (position < x) {
    position++;
    $img.style.left = position + 'px';
    var id = setInterval(start, 16);
  } else {
    clearInterval(id);
  }
}
