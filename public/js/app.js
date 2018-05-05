
  var songIDs = []

  $('#sbmt').on('click', () => {
    event.preventDefault()
    var songName = $('#songName').val()
    var video
    var data = {
      songName: songName
    }
    console.log(songName)
    $.post('/song/create', data).then(function (r) {
      console.log(r)
      console.log('ping')
      getVideos()
    })
    // video = songIDs[songIDs.length-1]
    // onYouTubeIframeAPIReady(video)
  })

  function getVideos () {
    $.get('/all/videos').then(function (r) {
    for(var i = 0; i<r.length; i++){  
      console.log(r[i].video_id)
      var songID = r[i].video_id
      onYouTubeIframeAPIReady(songID)
    }
    })

  }
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
  
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
     
  
        function onYouTubeIframeAPIReady(video) {
          player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: video,
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

