# documentacion codigo consumir pokeapi con metodo `fetch()` y `await`

>Esta línea obtiene todas las habilidades del Pokémon, extrae sus nombres y las convierte en una cadena de texto separada por comas.

- Esta línea de JS extrae y formatea las habilidades del Pokémon desde la API de PokeAPI. Aquí está el paso a paso:

```javascript

Habilidades: ${data.abilities.map(a => a.ability.name).join(", ")}

```

1. `data.abilities`
- `data` es el objeto JSON devuelto por la API.
- `data.abilities` es un array de objetos que representan las habilidades del Pokémon.

### Ejemplo de estructura de data.abilities para Pikachu:

```json
    [
      {
        "ability": { "name": "static", "url": "https://pokeapi.co/api/v2/ability/9/" }
      },
      {
        "ability": { "name": "lightning-rod", "url": "https://pokeapi.co/api/v2/ability/31/" }
      }
    ]

```

```javascript

2. `.map(a => a.ability.name)`

```


- `.map()` es un método de arrays en JavaScript que crea un nuevo array transformando cada elemento del array original.
- `a => a.ability.name` extrae solo el nombre de la habilidad de cada objeto en data.abilities.
- Resultado del `map()` para Pikachu:
  
```bash

    ["static", "lightning-rod"]

```

3. `.join(", ")`

- `join(", ")` convierte el array en una sola cadena, separando los elementos con una coma y un espacio.
  - Resultado final para Pikachu:

```bash

"static, lightning-rod"

```

```javascript

// Realizar la solicitud a la API
let response = await fetch(url);
let data = await response.json();

```

## Explicación

1. `let response = await fetch(url);`

   - `fetch(url)` es una función de JavaScript que realiza una solicitud HTTP a la URL proporcionada.
   - La palabra clave `await` se usa para esperar a que la solicitud se complete antes de continuar con la ejecución del código.
   - El resultado de la solicitud (la respuesta HTTP) se almacena en la **variable** `response`.

2. `let data = await response.json();`
  
   - `.json()` es un método de la respuesta response que convierte los datos de la respuesta en un objeto JavaScript.
   - `await` se usa nuevamente porque `.json()` también devuelve una Promesa que debe resolverse antes de obtener los datos.
   - El resultado final, que es un objeto con la información del Pokémon, se guarda en la **variable** `data`.

### Resumen

- Se hace una solicitud a la API con `fetch(url)`.
- Se espera a que la respuesta llegue con `await`.
- Se convierte la respuesta a un objeto JavaScript con `.json()`.
- Ahora data contiene toda la información del Pokémon y se puede usar en el código.
  