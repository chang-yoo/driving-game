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
    setInterval(moveToRight, 16);
  }
});

function moveToRight() {
  var num = 0;
  for (var i = 0; i < 100; i++) {
    num = i;
    var valueOfStyle = 'left:' + num + '%';
  } return $img.setAttribute('style', valueOfStyle);
}
