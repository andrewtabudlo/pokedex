M.AutoInit();

let daenerys = new Trainer();

function getPokemon(id, trainer){
    return $.ajax({
    url: `http://pokeapi.co/api/v2/pokemon/${id}/`,
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
        trainer.addPokemon(pokemon);
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

// get starter pokemon
$.when(getPokemon(384, daenerys),getPokemon(149, daenerys),getPokemon(373, daenerys)).done(render);