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
    }
})};

getArticuno();
getMoltres();
getDragonite();

console.log(pokedex);

$('#kantoButton').click(function(){
    event.preventDefault();
    $('#systemMessage').addClass('scale-out');
    $('#menuScreen').addClass('scale-in');
});
