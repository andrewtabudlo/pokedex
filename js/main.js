$.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/?offset=130',
    dataType: 'json',
    method: 'GET',
    success: function(data) {
        console.log(data.results);
    }
})

let articuno = function(){
    $.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/144/',
    dataType: 'json',
    method: 'GET',
    success: function(data) {
        console.log(data);
    }
})};

$('#kantoButton').click(function(){
    event.preventDefault();
    $('#systemMessage').addClass('scale-out');
})
