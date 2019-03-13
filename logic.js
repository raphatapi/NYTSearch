$("#search-article").on("click", function() {

    event.preventDefault();
    var apiKey = "A4EsuRaEGPGFV8ovw3AlcGLtils8M9AX";
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-date-input").val().trim() + "0101";
    var endYear = $("#end-date-input").val().trim() + "1231";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(NYTData) {
        
        var numArticles = $("#number-results option:selected").text();
        for(var i = 0; i < numArticles; i++) {
            var headline = NYTData.response.docs[i].headline.main;
            var byline = NYTData.response.docs[i].byline.original;
            var section = NYTData.response.docs[i].section_name;
            var isoDate = NYTData.response.docs[i].pub_date;
            var date = new Date(isoDate);
            var url = NYTData.response.docs[i].web_url;

            console.log(NYTData, headline, byline, section, date, url);

            var month=new Array();
            month[0]="Jan";
            month[1]="Feb";
            month[2]="Mar";
            month[3]="Apr";
            month[4]="May";
            month[5]="Jun";
            month[6]="Jul";
            month[7]="Aug";
            month[8]="Sep";
            month[9]="Oct";
            month[10]="Nov";
            month[11]="Dec";

            var cardArticle = $("<div>").addClass("card mb-3");
            var bodyArticle = $("<div>").addClass("card-body").attr("id", "article" + (i + 1));

            $("#articles").append(cardArticle.append(bodyArticle));

            bodyArticle.append($("<p>").addClass("headline").html((i + 1) + ". <b>" + headline + "</b>"));
            bodyArticle.append($("<p>").addClass("byline").html(byline));
            bodyArticle.append($("<p>").addClass("article").html("Section: " + section));
            bodyArticle.append($("<p>").addClass("date").html("Published on " + month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()));
            bodyArticle.append($("<p>").addClass("url").html("<a href=" + url + ">Click here to read the full article.</a>"));
        }
    });

});