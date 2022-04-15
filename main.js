var $img = document.querySelector('img');

$img.addEventListener('keydown', rotate);

function rotate(event) {
  if (event.key === 40) {
    $img.className = 'south';
  } else if (event.key === 37) {
    $img.className = 'west';
  } else if (event.key === 38) {
    $img.className = 'north';
  } else {
    $img.className = 'east';
  }
}
