
$(document).ready(function () {

  jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });


  $("#submit").on("click", function () {
    var food1 = document.getElementById("num1").value;
    var food2 = document.getElementById("num2").value;
    var food3 = document.getElementById("num3").value;
    var food4 = document.getElementById("num4").value;
    var food5 = document.getElementById("num5").value;

    var apikey = "637cf9cc5a93de2763c8c4a918f292a1";
    var queryURL = "https://food2fork.com/api/search?key=" + apikey + "&q=" + food1 + "," + food2 + "," + food3 + "," + food4 + "," + food5;
    console.log(food2);
    console.log(queryURL);


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var results = JSON.parse(response).recipes;
      console.log(JSON.parse(response));
      for (i = 0; i < 4; i++) {
        var foodImg = results[i].image_url;
        var foodLink = results[i].source_url;
        console.log(foodImg);

        var actualImage = $("<img>");
        actualImage.attr({"src": foodImg, width: "250", height: "200", id: "img" + (i+1)});
        var imgLink = $("<a>");
        imgLink.attr({"href": foodLink, target: "_blank"});
        $("#card").append(actualImage);
        $("#img" + (i+1)).wrap(imgLink);
      }
    });
    // var actualImage = $("<img>")
    // actualImage.attr("src", foodImg);
    // $("#card").append(actualImage);

  });

});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '310',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
