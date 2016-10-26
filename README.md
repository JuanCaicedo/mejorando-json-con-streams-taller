### :bangbang: *Acuérdate de leer todas las instrucciones*

# 5. Acceptar errores del sol

La meta final es poder hacer que la aplicación aun sirva si no tienes conexión
entre el servidor (tu computador) y github.

1. En `streamDePuntos`, dentro de la función que le pasas a highland, `stream`
   (el arugmento que le pasas a `streamDePuntos`) es un stream regular. Escucha
   el evento `'error'` de este stream (antes de pasarselo a `oboe`).
2. En el listener del evento, pasale el argumento que te de, yo lo llamaré `err`
   a `console.error`.
3. Después llama `push` con `null` y `highland.nil`. Esto terminará el stream.
4. Apaga tu conexión de internet, y vuelve a <http://localhost:3000/>
