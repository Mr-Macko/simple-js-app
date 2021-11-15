//  array with pokemon as IIFE
let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  function add(pokemon) {
      repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.list-group');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    listpokemon.classList.add('group-list-item')
    button.innerText = pokemon.name;
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.setAttribute("data-target", "#modal-container");
		button.setAttribute("data-toggle", "modal");
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
// Bootstrap Modal
function showModal (item) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('.modal-header');
  
  modalTitle.empty();
  modalBody.empty();

  let nameElement = $('<h1>' + item.name + '</h1>');
  let imageElement = $('<img class="modal-img" style="width:50%">');
  imageElement.attr("src", item.imageUrl);
  let heightElement = $('<p>' + 'Height: ' + item.height + '</p>');
  let weightElement = $('<p>' + 'Weight: ' + item.weight + '</p>');
  let typesElement = $('<p>' + 'Types: ' + item.types + '</p>');

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typesElement);
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});