// array dataset with pokemon
/* let pokemonList = [
  {
    name: 'bulbasaur',
    height: '0.7',
    type: ['grass', 'poison']
  },
  {
    name: 'charmander',
    height: '0.6',
    type: ['fire']
  },
  {
    name: 'squirtle',
    height: '0.5',
    type: ['water']
  },
]; */

// UPDATED to forEach: prints list (name and height) of all containing pokemon in dataset. 
// Commended this code snippet for nostalgic reasons.
/* pokemonList.forEach(function(pokemon){
document.write('<p id='pokedex-style'>' + pokemon.name + ' (height: ' + pokemon.height + ')')
if (pokemon.height > 0.6) document.write(' - Wow! that is tall')
else document.write('</p>');
}); */




// additional array with pokemon as IIFE
let pokemonRepository = (function () {
  let repository = [
    {
      name: 'caterpie',
      height: '0.3',
      types: ['bug']
    },
    {
      name: 'weedle',
      height: '0.3',
      types: ['bug', 'poison']
    },
    {
      name: 'pidgey',
      height: '0.3',
      types: ['flying', 'normal']
    },
  ];

  function add(pokemon) {
      repository.push(pokemon);
  }
  
  function getAll() {
    return repository;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  function showDetails(pokemon){
    console.log(pokemon.name)
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
