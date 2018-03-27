class Trainer {
    constructor(pokemon) {
      this.pokemon = [];
    }

    addPokemon(x) {
      this.pokemon.push(x);
        }
    all() {
      return this.pokemon;
    }
    get(key) {
      for (let i = 0; i < this.pokemon.length; i++) {
        if (this.pokemon[i].name === key) {
          return this.pokemon[i];
        }
      }
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

let daenerys = new Trainer();

//create li for each

let getSalamence = function(){
    $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/373/',
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
        daenerys.addPokemon(articuno);
    }
})};

let getRayquaza = function(){
    $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/384/',
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
        daenerys.addPokemon(moltres);
    }
})};

let getDragonite = function(){
    $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/149/',
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
        daenerys.addPokemon(dragonite);
    },
    complete: function() {
      setTimeout(function(){
        $('#kantoButton').addClass('pulse').removeClass('disabled');
        $('#pokemonPic1').attr('src',daenerys.pokemon[0].image);
        $('#pokemonPic2').attr('src',daenerys.pokemon[1].image);
        $('#pokemonPic3').attr('src',daenerys.pokemon[2].image);
        $('#cardTitle1').html('#' + daenerys.pokemon[0].id + ' ' + daenerys.pokemon[0].name);
        $('#cardTitle2').html('#' + daenerys.pokemon[1].id + ' ' + daenerys.pokemon[1].name);
        $('#cardTitle3').html('#' + daenerys.pokemon[2].id + ' ' + daenerys.pokemon[2].name);
        $('#hp1').html('HP: ' + daenerys.pokemon[0].hp + '/' + daenerys.pokemon[0].hp);
        $('#hp2').html('HP: ' + daenerys.pokemon[1].hp + '/' + daenerys.pokemon[1].hp);
        $('#hp3').html('HP: ' + daenerys.pokemon[2].hp + '/' + daenerys.pokemon[2].hp);
        $('#attack1').html('Attack: ' + daenerys.pokemon[0].attack);
        $('#attack2').html('Attack: ' + daenerys.pokemon[1].attack);
        $('#attack3').html('Attack: ' + daenerys.pokemon[2].attack);
        $('#defense1').html('Defense: ' + daenerys.pokemon[0].defense);
        $('#defense2').html('Defense: ' + daenerys.pokemon[1].defense);
        $('#defense3').html('Defense: ' + daenerys.pokemon[2].defense);
        $('#height1').html('Height: ' + daenerys.pokemon[0].height);
        $('#height2').html('Height: ' + daenerys.pokemon[1].height);
        $('#height3').html('Height: ' + daenerys.pokemon[2].height);
        $('#weight1').html('Weight: ' + daenerys.pokemon[0].weight);
        $('#weight2').html('Weight: ' + daenerys.pokemon[1].weight);
        $('#weight3').html('Weight: ' + daenerys.pokemon[2].weight);
        daenerys.pokemon[0].abilities.forEach(function(ability){
          $('#abilitiesList1').append(`<li class="list-group-item">${ability}</li>`);
        });
        daenerys.pokemon[1].abilities.forEach(function(ability){
          $('#abilitiesList2').append(`<li class="list-group-item">${ability}</li>`);
        });
        daenerys.pokemon[2].abilities.forEach(function(ability){
          $('#abilitiesList3').append(`<li class="list-group-item">${ability}</li>`);
        });
      },5000);
      }
    }
)};

getSalamence();
getRayquaza();
getDragonite();

console.log(daenerys);

$('#kantoButton').click(function(){
    event.preventDefault();
    $('#systemMessage').addClass('d-none');
    $('#menuScreen').addClass('visible').removeClass('invisible');
    $('#bootScroll').addClass('d-none');
});
