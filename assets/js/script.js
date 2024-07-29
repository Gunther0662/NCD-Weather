const apiKey = da88eeff417e83399bfc8ee28928bda3






$(function() {
    const availableTags = [
     "Dallas",
     "New York",
     "Georgia",
    
    ];

$("#search-bar").autocomplete({
    source: availableTags
});
});

$(function () {
    $('#searchButton').click(function () {
        let searchTerm = $('#searchInput').val();

    });
});
