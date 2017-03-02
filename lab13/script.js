$(document).ready(function(){

  $.get("https://www.reddit.com/r/aww/.json", function(stuff){

    var redditArray = stuff.data.children;
    for(var i=0; i<redditArray.length; i++){

      var thumbnail = redditArray[i].data.thumbnail;
      var title = redditArray[i].data.title;
      var author = redditArray[i].data.author;
      var score = redditArray[i].data.score;
      var link = "https://www.reddit.com" + redditArray[i].data.permalink;

      $('section').append('<div class = "post"><h2>' + title + '</h2>'
      + 'author: ' + author + '<br>' + 'score: ' + score +
      '<a href="' + link + '"><img src="' + thumbnail + '"/></a></div>');

    }

  });

});
