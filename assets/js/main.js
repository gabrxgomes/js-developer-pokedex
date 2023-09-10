//console.log("sucesso!");


const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}';

/* 

fetch(url).then(function (response){
    console.log(response)

    response.json().then(function(responseBody) {
        console.log(responseBody)
    })
}) // o fetch nos retorna uma promice, uma promessa que ira nos retornar algo da requisição

//essa função puxa nosso url e quando recebe uma resposta ele printa no console a mensagem
// e a função abaixo so vai rodar dps que tivermos nossa solicitação ok.


//o uso do then significa "quando der certo execute o console.log"
.catch(function (error) {
    onsole.error(error)
}) //pra quando der errado a condição acima como um else

//podemo usar o finaly para executar uma função ao final de tudo

.finally(function() {
    console.log('Requisição concluida')
})





// por padrão fetch usa o metodo get nativamente

*/

/* OU
fetch(url)
     .then ( (response) => {
         return response. json()
        })
     .then ( function (jsonBody) {
         console. log (jsonBody)
        })
     .catch( function (error) {
        console.error(error)
        })
     .finally(function () {
         console.log ('Requisição concluida!')
        })

*/

/*
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
    .finally(() => console.log('requisição concluida'))
    
// com isso podemos manipular a nossa lista de pokemons puxadas da api
*/
/*
function convertPokemonTypesToLi(pokemonTypes) {

    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)

}
*/
//agora vamos converter a nossa lista em json em uma lista html
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0;



function loadPokemonItens(offset, limit) {

    


    PokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">

                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}

                </ol>

                <img src="${pokemon.photo}" 
                     alt="${pokemon.name}">



            </div>
                    
        </li> 
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

// fim da conversão

/*
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {

        debugger
        console.log(pokemonList)

    })
    .catch((error) => console.error(error))
    .finally(() => console.log('requisição concluida'))
*/




//fetch(url)
    
