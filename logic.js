
// $("#search-article").on("click", function() {

//     event.preventDefault();

    var apiKey = "A4EsuRaEGPGFV8ovw3AlcGLtils8M9AX";
//     var term = $("#search-term").val().trim();
//     var startYear = $("#start-date-input").val().trim() + "0101";
//     var endYear = $("#end-date-input").val().trim() + "1231";
//     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey;

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(NYTData) {
//         console.log(NYTData);
//     });

// });

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bernie&api-key=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(NYTData) {
    console.log(NYTData);
});