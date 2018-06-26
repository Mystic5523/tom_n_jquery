
$(document).ready(function(){
    
    
    
    
  $("#submit").on("click", function(){  
    var food1 = document.getElementById("num1").value;
    var food2 = document.getElementById("num2").value;
    var food3 = document.getElementById("num3").value;
    var food4 = document.getElementById("num4").value;
    var food5 = document.getElementById("num5").value;

    var apikey = "637cf9cc5a93de2763c8c4a918f292a1";
    var queryURL = "https://food2fork.com/api/search?key=" + apikey + "&q=" + food1 + "," + food2 + "," + food3 + "," + food4 + "," + food5;
    console.log(food2);



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.recipes;
        var foodImg = response.recipes.image_url; 

        var actualImage = $("<img>")
        actualImage.attr("src", foodImg);
        $("#card").append(actualImage);

    });
  
  
//this is a test 

 var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      var recipeVid = 'M7lc1UVf-VE'
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: recipeVid,
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
        player.stopVideo();}
      })


});
