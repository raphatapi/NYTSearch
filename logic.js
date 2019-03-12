// var apiKey = "A4EsuRaEGPGFV8ovw3AlcGLtils8M9AX";


var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
// var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
// apiKey + "&q=";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=A4EsuRaEGPGFV8ovw3AlcGLtils8M9AX";
var articleCounter = 0;

function runQuery(numArticles, queryURL) {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(NYTData) {
        console.log("URL: " + queryURL);
        console.log(NYTData);

        for(var i = 0; i < numArticles; i++) {

            articleCounter++;

            var articleSection = $("<div>");
            articleSection.addClass("articles");
            articleSection.attr("id", "article-" + articleCounter);
            $("#articles").append(articleSection);

            if(NYTData.response.docs[i].headline !== "null") {
                $("#article-" + articleCounter).append("<h3 class='article-headline'><span class='lable lable-primary'>" + articleCounter + "</span><strong>" + NYTData.response.docs[i].headline.main + "</strong></h3>");
            };

            if(NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
                $("#article-" + articleCounter).append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");
            }

            $("#article-" + articleCounter).append("<h5>Section: " + NYTData.response.docs[i].section_name + "</h5>");
            $("#article-" + articleCounter).append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
            $("#article-" + articleCounter).append("<a href='" + NYTData.response.docs[i].web_url + "'>" +
            NYTData.response.docs[i].web_url + "</a>");

        }
    });
};

$("#search").on("click", function(event) {

    event.preventDefault();

    articleCounter = 0;

    $("#articles").empty();

    searchTerm = $("#search-term").val().trim();
    numResults = $("#number-results").val();
    startYear = $("#start-date-input").val().trim();
    endYear = $("#end-date-input").val().trim();

    // If the user provides a startYear -- the startYear will be included in the queryURL
  if (parseInt(startYear)) {
    searchURL = searchURL + "&begin_date=" + startYear + "0101";
  }

  // If the user provides a startYear -- the endYear will be included in the queryURL
  if (parseInt(endYear)) {
    searchURL = searchURL + "&end_date=" + endYear + "0101";
  }

  runQuery(numResults, searchURL);
});

$("#delete").on("click", function() {
    articleCounter = 0;
    $("#articles").empty();
});