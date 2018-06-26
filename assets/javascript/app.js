
$(document).ready(function(){
    
    
    
    
  $("#submit").on("click", function(){  
    var food = document.getElementById("num1").value;
    var apikey = "637cf9cc5a93de2763c8c4a918f292a1";
    var queryURL = "http://food2fork.com/api/search?key=" + apikey + "&q=" + food;
    console.log(food);



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;

    })
  }
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
        player.stopVideo();
      }
