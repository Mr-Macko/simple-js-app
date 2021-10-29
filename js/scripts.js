// array dataset with pokemon
let pokemonList = [
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

// UPDATED to forEach: prints list (name and height) of all containing pokemon in dataset. 
pokemonList.forEach(function(pokemon){
document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')')
if (pokemon.height > 0.6) document.write(' - Wow! that is tall')
else document.write('</p>');
});