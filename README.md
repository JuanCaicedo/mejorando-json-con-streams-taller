### :bangbang: *Acuérdate de leer todas las instrucciones*

# 1. Leer el gato

El primer paso es poder leer los datos del gato y mandarlos al cliente. Esos
puntos estan en un archivo JSON. Podríamos leer el archivo con `require` o
`fs.readFile`, pero no nos darán la flexibildad de los streams.

- Cambia la ruta `/datos` de `routes/index.js`
- Lee `data/gato.json` con `fs.createReadStream`
- El `res` de express es un writable stream, entonces toma el resultado del paso
  anterior y pasaselo a `res` usando `pipe`
- Deberías poder ver los datos con el navegador o con `curl` llendo
  a <http://localhost:3000/datos>
