# Pokedex

Pokedex website using HTML, CSS, SASS, Materialize, JavaScript, jQuery, AJAX, and Pokemon API.

## Links

andrewtabudlo.github.io/pokedex

## Technology Used

-JavaScript
-jQuery
-SASS

## Strategy

I approached this project by first tackling the AJAX calls needed.  At first I used the `complete:` status within each AJAX call to create objects that held the pokemon information. This required me to repeat the same lines of code 3 times.  Afterwards I refactored to a single function holding the AJAX call and used the `$.when()` and `$.done()` jQuery commands to produce the same effect(this will be the standard as `success:`,`complete:`, etc.. will be depreciated). The pokemon objects are held within an array in a trainer object, with methods to add pokemon and search for pokemon.

Loading screens are Fallout inspired and the menu screen has a pokedex theme.
