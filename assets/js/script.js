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
