M.AutoInit();

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

function getPokemon(id){
    return $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    dataType: 'json',
    method: 'GET',
    })
    .done(function(data) {
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
        let pokemon = new Pokemon(data.id,data.name,data.sprites.front_default,types,data.weight,data.height,data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat,abilities);
        daenerys.addPokemon(pokemon);
    });
}

let render = function() {
    $('#kantoButton').addClass('pulse').removeClass('disabled');
    $('#loadingBar').addClass('scale-out');
    $('#pokemonPic1').attr('src',daenerys.pokemon[0].image);
    $('#cardTitle1').html('#' + daenerys.pokemon[0].id + ' ' + daenerys.pokemon[0].name);
    $('#statsList1').append(`<li class="collection-item">HP: ${daenerys.pokemon[0].hp}/${daenerys.pokemon[0].hp}</li>`);
    $('#statsList1').append(`<li class="collection-item">Attack: ${daenerys.pokemon[0].attack}</li>`);
    $('#statsList1').append(`<li class="collection-item">Defense: ${daenerys.pokemon[0].defense}</li>`);
    $('#miscList1').append(`<li class="collection-item">Height: ${daenerys.pokemon[0].height}</li>`);
    $('#miscList1').append(`<li class="collection-item">Weight: ${daenerys.pokemon[0].weight}</li>`);
    daenerys.pokemon[0].abilities.forEach(function(ability){
        $('#abilitiesList1').append(`<li class="collection-item">${ability}</li>`);
      });
    $('#thumbPic1').attr('src', daenerys.pokemon[0].image);
    $('#thumbPic2').attr('src', daenerys.pokemon[1].image);
    $('#thumbPic3').attr('src', daenerys.pokemon[2].image);
    $('#smallName1').html('#' + daenerys.pokemon[0].id + ' ' + daenerys.pokemon[0].name);
    $('#smallName2').html('#' + daenerys.pokemon[1].id + ' ' + daenerys.pokemon[1].name);
    $('#smallName3').html('#' + daenerys.pokemon[2].id + ' ' + daenerys.pokemon[2].name);
};

$.when(getPokemon(384),getPokemon(149),getPokemon(373)).done(render);


// let getDragonite = function(){
//     $.ajax({
//     url: 'https://pokeapi.co/api/v2/pokemon/149/',
//     dataType: 'json',
//     method: 'GET',
//     success: function(data) {
//         console.log(data);
//         let types = [];
//         let getTypes = function(){
//             for (let i = 0; i < data.types.length; i++){
//                 types.push(data.types[i].type.name);
//             }
//         }
//         getTypes();
//         let abilities = [];
//         let getAbilities = function(){
//             for (let i = 0; i < data.abilities.length; i++){
//                 abilities.push(data.abilities[i].ability.name);
//             }
//         }
//         getAbilities();
//         let dragonite = new Pokemon(data.id,data.name,data.sprites.front_default,types,data.weight,data.height,data.stats[3].base_stat,data.stats[4].base_stat,data.stats[5].base_stat,abilities);
//         daenerys.addPokemon(dragonite);
//     },
//     complete: function() {
//       setTimeout(function(){
        
        
        
//         $('#pokemonPic2').attr('src',daenerys.pokemon[1].image);
//         $('#pokemonPic3').attr('src',daenerys.pokemon[2].image);
        
//         $('#cardTitle2').html('#' + daenerys.pokemon[1].id + ' ' + daenerys.pokemon[1].name);
//         $('#cardTitle3').html('#' + daenerys.pokemon[2].id + ' ' + daenerys.pokemon[2].name);
        
//         $('#statsList2').append(`<li class="collection-item">HP: ${daenerys.pokemon[1].hp}/${daenerys.pokemon[1].hp}</li>`);
//         $('#statsList3').append(`<li class="collection-item">HP: ${daenerys.pokemon[2].hp}/${daenerys.pokemon[2].hp}</li>`);
        
//         $('#statsList2').append(`<li class="collection-item">Attack: ${daenerys.pokemon[1].attack}</li>`);
//         $('#statsList3').append(`<li class="collection-item">Attack: ${daenerys.pokemon[2].attack}</li>`);
        
//         $('#statsList2').append(`<li class="collection-item">Defense: ${daenerys.pokemon[1].defense}</li>`);
//         $('#statsList3').append(`<li class="collection-item">Defense: ${daenerys.pokemon[2].defense}</li>`);
        
//         $('#miscList2').append(`<li class="collection-item">Height: ${daenerys.pokemon[1].height}</li>`);
//         $('#miscList3').append(`<li class="collection-item">Height: ${daenerys.pokemon[2].height}</li>`);
        
//         $('#miscList2').append(`<li class="collection-item">Weight: ${daenerys.pokemon[1].weight}</li>`);
//         $('#miscList3').append(`<li class="collection-item">Weight: ${daenerys.pokemon[2].weight}</li>`);

//         daenerys.pokemon[1].abilities.forEach(function(ability){
//           $('#abilitiesList2').append(`<li class="collection-item">${ability}</li>`);
//         });
//         daenerys.pokemon[2].abilities.forEach(function(ability){
//           $('#abilitiesList3').append(`<li class="collection-item">${ability}</li>`);
//         });
//       },5000);
//       }
//     }
// )};

console.log(daenerys);

$('#kantoButton').click(function(){
    event.preventDefault();
    $('#systemMessage').addClass('hide');
    $('#menuScreen').addClass('visible').removeClass('hide');
    $('#bootScroll').addClass('hide');
});

$('#selector1').click(function(e){
    $('#pokemonCard').addClass('scale-out');
    setTimeout(function(){
        $('#pokemonPic1').attr('src',daenerys.pokemon[0].image);
        $('#cardTitle1').html('#' + daenerys.pokemon[0].id + ' ' + daenerys.pokemon[0].name);
        $('#statsList1').html(`<li class="collection-item">HP: ${daenerys.pokemon[0].hp}/${daenerys.pokemon[0].hp}</li><li class="collection-item">Attack: ${daenerys.pokemon[0].attack}</li><li class="collection-item">Defense: ${daenerys.pokemon[0].defense}</li>`);
        $('#miscList1').html(`<li class="collection-item">Height: ${daenerys.pokemon[0].height}</li><li class="collection-item">Weight: ${daenerys.pokemon[0].weight}</li>`);
        $('#abilitiesList1').html('');
        daenerys.pokemon[0].abilities.forEach(function(ability){
            $('#abilitiesList1').append(`<li class="collection-item">${ability}</li>`);
      });
    }, 500);
    setTimeout(function(){
        $('#pokemonCard').removeClass('scale-out');
    }, 1000);
})

$('#selector2').click(function(e){
    $('#pokemonCard').addClass('scale-out');
    setTimeout(function(){
        $('#pokemonPic1').attr('src',daenerys.pokemon[1].image);
        $('#cardTitle1').html('#' + daenerys.pokemon[1].id + ' ' + daenerys.pokemon[1].name);
        $('#statsList1').html(`<li class="collection-item">HP: ${daenerys.pokemon[1].hp}/${daenerys.pokemon[1].hp}</li><li class="collection-item">Attack: ${daenerys.pokemon[1].attack}</li><li class="collection-item">Defense: ${daenerys.pokemon[1].defense}</li>`);
        $('#miscList1').html(`<li class="collection-item">Height: ${daenerys.pokemon[1].height}</li><li class="collection-item">Weight: ${daenerys.pokemon[1].weight}</li>`);
        $('#abilitiesList1').html('');
        daenerys.pokemon[1].abilities.forEach(function(ability){
            $('#abilitiesList1').append(`<li class="collection-item">${ability}</li>`);
      });
    }, 500);
    setTimeout(function(){
        $('#pokemonCard').removeClass('scale-out');
    }, 1000);
})

$('#selector3').click(function(e){
    $('#pokemonCard').addClass('scale-out');
    setTimeout(function(){
        $('#pokemonPic1').attr('src',daenerys.pokemon[2].image);
        $('#cardTitle1').html('#' + daenerys.pokemon[2].id + ' ' + daenerys.pokemon[2].name);
        $('#statsList1').html(`<li class="collection-item">HP: ${daenerys.pokemon[2].hp}/${daenerys.pokemon[2].hp}</li><li class="collection-item">Attack: ${daenerys.pokemon[2].attack}</li><li class="collection-item">Defense: ${daenerys.pokemon[2].defense}</li>`);
        $('#miscList1').html(`<li class="collection-item">Height: ${daenerys.pokemon[2].height}</li><li class="collection-item">Weight: ${daenerys.pokemon[2].weight}</li>`);
        $('#abilitiesList1').html('');
        daenerys.pokemon[2].abilities.forEach(function(ability){
            $('#abilitiesList1').append(`<li class="collection-item">${ability}</li>`);
      });
    }, 500);
    setTimeout(function(){
        $('#pokemonCard').removeClass('scale-out');
    }, 1000);
})