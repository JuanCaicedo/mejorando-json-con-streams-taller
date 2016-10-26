### :bangbang: *Acuérdate de leer todas las instrucciones*

# 3. Mandar solo un stream de objectos

Vamos manipular los datos un poco antes de mandarlos al cliente. En este momento
va a parecer más complicado que útil, pero nos dará más flexibilidad después.

1. En `routes/index.js` crea una nueva función que se va a encargar de leer el
  JSON y va a devolver un stream de puntos. Yo la voy a llamar `streamDePuntos`.
  Esta función recibira un argumento, que yo llamaré `stream`.
2. Dentro de `streamDePuntos`, usa
  la [función generadora de highland](http://highlandjs.org/#_(source)) para
  crear un nuevo stream. Esta es la que tiene la forma

  ```
  highland(function(push, next){

  });
  ```

3. Dentro de la función de `highland`, llama la función `oboe` y pásale el
  `stream`. Escucha todos los nodos que tengan `x`, `y` y `color`.
4. Dentro del callback del `node` de oboe, llama la función `push` con `null`
  (significando que no hubo error) y con el punto que encontró oboe.
5. Usa la función [done](http://www.oboejs.com/api#done) de `oboe` para registrar
  un callback para cuando `oboe` termine de interpretar los datos. Dentro de ese
  callback llama la función `push` con `null` y `highland.nil`. Esto le dirá al
  nuevo stream que no habrá más datos y ya puede terminar.
6. Volviendo a la ruta `/datos'`, en vez de pasarle el stream del gato a `res`,
  ahora pasaselo como argumento a `streamDePuntos`. El resultado de esta función
  será una stream, que se puede llamar `streamGato`.
7. LLama la función [map](http://highlandjs.org/#map) de `streamGato` y pásale
  `JSON.stringify`. Esto transformará cana punto en un string a medida que pase
  por el stream.
8. LLama la función [intersperse](http://highlandjs.org/#intersperse) del
  resultado del paso anterior y pásale `,`. Pudes hacer esto
  usando
  [chaining](http://www.programmerinterview.com/index.php/javascript/javascript-method-chaining/).
  Esto pondrá comas entre los objectos que pasen por el stream.
9. Pon el resultado del paso 8 en una variable. Yo la llamaré `streamPuntos`.
10. Crea un nuevo stream con `highland` pasandole un array de `[`, el
    `streamPuntos`, y `]`.
11. Llama la función [invoke](http://highlandjs.org/#invoke) del resultado del
    paso 10 (usando chaining). Pásale `'split'`, y `['']`. Esto llamará la
    función `split` de cada string que pase por el stream dandole el argumento
    `''`, lo cual dividirá el string en carácteres.
12. Llama la función `sequence` del resultado del paso 11 (usando chaining).
    Esto transformará el stream para que sea un stream de carácteres,
    manteniendo su orden.
13. Pásale el resultado del paso 12 a `res` usando `pipe`.
14. Al final deberías poder ir a <http://localhost:3000/datos> y ver un array de
    puntos.
