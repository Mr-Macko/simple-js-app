// array dataset with pokemon
let pokemonList = [
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
];
]; */

// UPDATED to forEach: prints list (name and height) of all containing pokemon in dataset. 
pokemonList.forEach(function(pokemon){
document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')')
if (pokemon.height > 0.6) document.write(' - Wow! that is tall')
else document.write('</p>');
});

// additional array with pokemon as IIFE
let pokemonRepository = (function (){
  let pokemonList = [
    {
      name: 'caterpie',
      height: '0.3',
      type: ['bug']
    },
    {
      name: 'weedle',
      height: '0.3',
      type: ['bug', 'poison']
    },
    {
      name: 'pidgey',
      height: '0.3',
      type: ['flying', 'normal']
    },
  ];

  return {
    getAll: function() {
      return pokemonList;
    },
    add: function(pokemon) {
      pokemonList.push(pokemon);
    }
  };
})();