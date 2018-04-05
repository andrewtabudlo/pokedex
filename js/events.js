$('#kantoButton').click(function(e){
  e.preventDefault();
  $('#systemMessage').addClass('hide');
  $('#menuScreen').removeClass('hide');
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
    });}, 500);
  setTimeout(function(){
      $('#pokemonCard').removeClass('scale-out');}, 500);
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
    });}, 500);
  setTimeout(function(){
      $('#pokemonCard').removeClass('scale-out');}, 500);
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
  }, 500);
})

$('form').on('submit',function(e){
  e.preventDefault();
  let compareName = $('input[type=search]').val();
  let searchCounter = 0;
  for (let i = 0; i < daenerys.pokemon.length; i++) {
      if (compareName == daenerys.pokemon[i].name || compareName == daenerys.pokemon[i].id) {
          let selectedPokemon = "#selector" + (i+1);
          $(selectedPokemon).trigger('click');         
      } else { 
        searchCounter++;
      }
      if (searchCounter === daenerys.pokemon.length) {
          alert("You haven't caught that pokemon yet.");
      }
      $('input[type=search]').val('');
  };
})
