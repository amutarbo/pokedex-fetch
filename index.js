
    //Queremos que nuestro script se inicie cuando cargue la pagina
    window.addEventListener("DOMContentLoaded", function (e) {
        // Con esto vemos todo el documento de ditto
        // AVISO:   https://pokeapi.co/api/v2/pokemon/1' = Bulbasur
        //          https://pokeapi.co/api/v2/pokemon/2' = Ivysaur

        // Cada vez que hago refresh aumenta el bucle
        for (let contador = 1; contador < 5; contador++) {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + contador;
            fetch(url)
                .then(response => response.json())
                .then(function (data) {
                    const pokemon = document.querySelector(".pokemon");
                    const nombrePokemon = pokemon.querySelector(".nombrePokemon");
                    const numeroPokemon = pokemon.querySelector(".numeroPokemon");
                    const tipoPokemon = pokemon.querySelector(".tipoPokemon");

                    nombrePokemon.innerText = data.name;
                    numeroPokemon.innerText = data.id;
                    tipoPokemon
                        .innerText =
                        data.types[0].type.name;
                });
        }



        /*
            fetch('https://pokeapi.co/api/v2/pokemon/2')
                .then(response => response.json())
                .then(function (data) {
                    const pokemon = document.querySelector(".pokemon");
                    const nombrePokemon = pokemon.querySelector(".nombrePokemon");
                    const numeroPokemon = pokemon.querySelector(".numeroPokemon");
                    const tipoPokemon = pokemon.querySelector(".tipoPokemon");

                    nombrePokemon.innerText = data.name;
                    numeroPokemon.innerText = data.id;
                    tipoPokemon.innerText = data.types[0].type.name;
                });



        */


    });
