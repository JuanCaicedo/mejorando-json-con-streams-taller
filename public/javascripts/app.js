const URL = 'http://localhost:3000/datos';

function buscar(x, y) {
  var grid = document.querySelector('.grid');
  return grid.children[y].children[x];
}
