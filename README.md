# Pokedex

Pokedex website using HTML, CSS, SASS, Materialize, JavaScript, jQuery, AJAX, and Pokemon API.

Mobile wireframe - https://wireframe.cc/JqNmem

Desktop wireframe - https://wireframe.cc/7VaaqW

## Objective

To create a "Pokedex" using data pulled from pokeapi.co.  This project demonstrates an understanding of managing AJAX calls and Object Oriented Programming.  We chose 3 pokemon as starter pokemon and are required to display information pulled from the api.

## Strategy

I approached this project by first tackling the AJAX calls needed.  At first I used the `complete:` status within each AJAX call to create objects that held the pokemon information. This required me to repeat the same lines of code 3 times.  Afterwards I refactored to a single function holding the AJAX call and used the `$.when()` and `$.done()` jQuery commands to produce the same effect(this will be the standard as `success:`,`complete:`, etc.. will be depreciated). The pokemon objects are held within an array in a trainer object, with methods to add pokemon and search for pokemon.

Loading screens are Fallout inspired and the menu screen has a pokedex theme.

## Future Additions

I plan on adding functionality to add new pokemon, create more trainers, and trade between trainers.