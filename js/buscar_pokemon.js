  /**
             * Función para buscar un Pokémon en la PokeAPI
             */
  async function buscarPokemon() {
    // Obtener el valor del input y convertirlo a minúsculas
    let name = document.getElementById("pokemonName").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try {
        // Realizar la solicitud a la API
        let response = await fetch(url);
        let data = await response.json();

        // Mostrar la información del Pokémon en el elemento <p>
        document.getElementById("pokemonData").innerText = `
            Nombre: ${data.name}
            Altura: ${data.height}
            Peso: ${data.weight}
            Habilidades: ${data.abilities.map(a => a.ability.name).join(", ")}
        `;
    } catch (error) {
        // Mostrar un mensaje de error si el Pokémon no es encontrado
        document.getElementById("pokemonData").innerText = "Pokémon no encontrado.";
    }
}