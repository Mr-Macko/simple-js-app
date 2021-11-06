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
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    })
  }
  function showDetails(pokemon){
    console.log(pokemon)
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
