var $img = document.querySelector('img');

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
    setInterval(start, 16);
  }
});
function start() {
  var num = 0;
  num += 10;
  $img.style.left = num + 'px';
}
