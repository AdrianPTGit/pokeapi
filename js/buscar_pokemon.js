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

        // Obtener la URL de la imagen oficial
        let imageUrl = data.sprites.other["official-artwork"].front_default;

        // Mostrar la información del Pokémon 
        document.getElementById("pokemonData").innerHTML = `
            <h3>Nombre:</h3> <p>${data.name}</p>
            <h3>Altura:</h3> <p>${data.height}</p>
            <h3>Peso:</h3> <p>${data.weight}</p>
            <h3>Habilidades:</h3><p>${data.abilities.map(a => a.ability.name).join(", ")}</p>
            
            
        `;

        document.getElementById("imagen").innerHTML = `
            <img src="${imageUrl}" alt="${data.name}" style="width:400px; height:auto;">
        `

    } catch (error) {
        // Mostrar un mensaje de error si el Pokémon no es encontrado
        document.getElementById("pokemonData").innerText = "Pokémon no encontrado.";
    }
}
