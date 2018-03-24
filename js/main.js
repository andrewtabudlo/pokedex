class Pokedex {
    constructor(pokemon) {
        this.pokemon = [];
    }

    addPokemon(x) {
            this.pokemon.push(x);
        }
}

class Pokemon {
    constructor(id,name,image,type,weight,height,hp,attack,defense,abilities) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
        this.weight = weight;
        this.height = height;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;

    }
};

let pokedex = new Pokedex();

let getArticuno = function(){
    $.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/144/',
    dataType: 'json',
    method: 'GET',
    success: function(data) {
        console.log(data);
        let types = [];
        let getTypes = function(){
            for (let i = 0; i < data.types.length; i++){
                types.push(data.types[i].type.name);
            }
        }
        getTypes();
        let abilities = [];
        let getAbilities = function(){
            for (let i = 0; i < data.abilities.length; i++){
                abilities.push(data.abilities[i].ability.name);
            }
        }
        getAbilities();
        let articuno = new Pokemon(data.id,data.name,data.sprites.front_default,types,data.weight,data.height,data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat,abilities);
        pokedex.addPokemon(articuno);
        $('#pokemonOnePic').attr('src',pokedex.pokemon[0].image);
    }
})};

let getMoltres = function(){
    $.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/146/',
    dataType: 'json',
    method: 'GET',
    success: function(data) {
        console.log(data);
        let types = [];
        let getTypes = function(){
            for (let i = 0; i < data.types.length; i++){
                types.push(data.types[i].type.name);
            }
        }
        getTypes();
        let abilities = [];
        let getAbilities = function(){
            for (let i = 0; i < data.abilities.length; i++){
                abilities.push(data.abilities[i].ability.name);
            }
        }
        getAbilities();
        let moltres = new Pokemon(data.id,data.name,data.sprites.front_default,types,data.weight,data.height,data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat,abilities);
        pokedex.addPokemon(moltres);
    }
})};

let getDragonite = function(){
    $.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/149/',
    dataType: 'json',
    method: 'GET',
    success: function(data) {
        console.log(data);
        let types = [];
        let getTypes = function(){
            for (let i = 0; i < data.types.length; i++){
                types.push(data.types[i].type.name);
            }
        }
        getTypes();
        let abilities = [];
        let getAbilities = function(){
            for (let i = 0; i < data.abilities.length; i++){
                abilities.push(data.abilities[i].ability.name);
            }
        }
        getAbilities();
        let dragonite = new Pokemon(data.id,data.name,data.sprites.front_default,types,data.weight,data.height,data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat,abilities);
        pokedex.addPokemon(dragonite);
    },
    complete: function() {
        $('#kantoButton').addClass('pulse').removeClass('disabled');
        $('#pokemonPic1').attr('src',pokedex.pokemon[0].image);
        $('#pokemonPic2').attr('src',pokedex.pokemon[1].image);
        $('#pokemonPic3').attr('src',pokedex.pokemon[2].image);
    }
})};

getArticuno();
getMoltres();
getDragonite();

console.log(pokedex);

let createMenus = function() {
    for (let i = 0; i < pokedex.length; i++){
        $('<img></img>').html(pokemon[i].image).attr('class','pokeImage');

    }
};

$('#kantoButton').click(function(){
    event.preventDefault();
    $('#systemMessage').addClass('invisible');
    $('#menuScreen').addClass('visible').removeClass('invisible');
});
