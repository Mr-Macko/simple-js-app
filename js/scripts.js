let pokemonList = [
    {name: 'bulbasaur', height: '7', type: ['grass', 'poison']},
    {name: 'charmander', height: '6', type: ['fire']},
    {name: 'squirtle', height: '5', type: ['water']},
]
    {name: 'bulbasaur', height: '0.7', type: ['grass', 'poison']},
    {name: 'charmander', height: '0.6', type: ['fire']},
    {name: 'squirtle', height: '0.5', type: ['water']},
// prints list (name and height) of all containing pokemon in dataset
for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 0.6) document.write( '<p>' + pokemonList[i].name + ' (heigt: ' + pokemonList[i].height + ')' + ' - Wow! That is tall.' + '</p>');
  else document.write('<p>' + pokemonList[i].name + ' (heigt: ' + pokemonList[i].height + ')' + '</p>');
};