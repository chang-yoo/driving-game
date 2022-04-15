var $img = document.querySelector('img');

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      $img.className = 'west';
      break;
    case 38:
      $img.className = 'north';
      break;
    case 39:
      $img.className = 'east';
      break;
    case 40:
      $img.className = 'south';
      break;
  }
};
