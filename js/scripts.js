//  array with pokemon as IIFE
let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

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
  
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
//fetch pokemon details from API
 function loadDetails(item) { 
 let url = item.detailsUrl;
 return fetch(url).then(function (response) {
   return response.json();
 }).then(function (details) {
   // Now we add the details to the item
   item.imageUrl = details.sprites.other['official-artwork']['front_default'];
   item.height = details.height;
   item.weight = details.weight;
   item.types = details.types;
 }).catch(function (e) {
   console.error(e);
 });
}

function showDetails(pokemon) { 
  loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

  let modalContainer = document.querySelector('#modal-container');

    function showModal(pokemon) {
      modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button'); 
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'X';
      closeButtonElement.addEventListener('click', hideModal);

      let modalPokemonName = document.createElement('h1'); 
      modalPokemonName.innerText = pokemon.name;

      let modalPokemonImg = document.createElement('img'); 
      modalPokemonImg.src = pokemon.imageUrl;

      let modalPokemonHeight = document.createElement('p');
      modalPokemonHeight.innerText = 'Height: ' + pokemon.height;

      let modalPokemonWeight = document.createElement('p');
      modalPokemonWeight.innerText = 'Weight: ' + pokemon.weight;

      modal.appendChild(closeButtonElement);
      modal.appendChild(modalPokemonName);
      modal.appendChild(modalPokemonImg);
      modal.appendChild(modalPokemonHeight);
      modal.appendChild(modalPokemonWeight);

      pokemon.types.forEach(item => {
            let modalPokemonTypes = document.createElement('p');
            modalPokemonTypes.innerText = ('Type: ') + item.type.name;
            modal.appendChild(modalPokemonTypes);
        });

      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible'); 
    }

    function hideModal() {
      modalContainer.classList.remove('is-visible'); 
    }

    window.addEventListener('keydown', (e) => { 
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

    modalContainer.addEventListener('click', (e) => { 
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
