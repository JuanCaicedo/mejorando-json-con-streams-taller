### :bangbang: *Acuérdate de leer todas las instrucciones*

# 4. Pedir los datos del sol

Vamos a pedir otros puntos y los vamos a mandar en la misma respuesta.

1. Dentro de la ruta `/datos`,
  usa
  [request](https://github.com/request/request#request---simplified-http-client)
  para pedir los datos de este url

    ```
    https://raw.githubusercontent.com/JuanCaicedo/better-json-through-streams/master/data/sun-points.json`
    ```
2. No le pases un callback a `request`, con lo cual te devolvera un stream. Pon
  ese valor en una variable. Yo la llamaré `datosSol`.
3. Pasale `datosSol` a `streamDePuntos`, del mismo modo que lo hiciste con
  `datosGato`. Te devolvera un stream, que yo llamaré `streamSol`
4. LLama la funcion `highland` con un array que tenga `streamGato` y
   `streamSol`. Luego usa [merge](http://highlandjs.org/#merge) para juntar los
   puntos que salen de los dos streams. Pon el resultado de estas operaciones en
   una variable, yo la llamaré `streamJunto`.
5. Remplaza `streamGato` con `streamJunto` al momento de llamar `map` y
   `intersperse`.
6. Si vas a <http://localhost:3000/>, verás la imagen completa.
