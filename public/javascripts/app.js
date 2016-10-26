const URL = 'http://localhost:3000/datos';

function buscar(x, y) {
  var grid = document.querySelector('.grid');
  return grid.children[y].children[x];
}

oboe('http://localhost:3000/datos')
  .node('{x y color}', function(punto) {
    var casilla = buscar(punto.x, punto.y);
    casilla.classList.add(punto.color);
  })
  .fail(function(error) {
    console.error('error', error);
  });
