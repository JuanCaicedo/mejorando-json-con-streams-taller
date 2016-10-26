### :bangbang: *Acuérdate de leer todas las instrucciones*

# 2. Recibir el gato en el servidos

El servidor va a mandar los datos del gato como un stream de JSON valido.
Usaremos `oboe` desde el cliente para pedir los datos e interpretar la
respuesta.

- En `public/javascripts/app.js` usa `oboe` para leer los datos del servidor.
  Estan en `localhost:3000/datos`.
- Usa la función `node` del resultado de `oboe` para escuchar todo nodo que
  tenga `x`, `y` y `color`.
- El callback de `node` te dará acceso a el objeto que leyó. Digamos que se
  llama `punto`. Dentro del callback usa la funcion `buscar`, junto con el `x` y
  `y` del `punto` para encontrar la casilla que corresponde.
- Añádele el valor de `color` del `punto` esa casilla. Lo puedes hacer con
  [addClass](http://stackoverflow.com/questions/11115998/is-there-a-way-to-add-remove-several-classes-in-one-single-instruction-with-clas)
- Ve a la página principal <http://localhost:3000>. Deberías ver la imágen del
  gato.
- Puede ser util usar la función `fail` de `oboe` para pasarle cualquier error
  a `console.error`.

## Links útiles

- Duck typing con `oboe` <http://www.oboejs.com/examples#duck-typing>
- Errores con `oboe` <http://www.oboejs.com/api#fail-event>
