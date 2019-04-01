var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'vWwgrjjIMXA',
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
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            // incomplete lyrics start showing
            
        } else if(event.data === YT.PlayerState.PAUSED) {
           // stop lyrics
        } else if(event.data === YT.PlayerState.ENDED) {

        }
      }

      function stopVideo() {
        player.stopVideo();
      }

      document.onkeydown = event => {
          // when ENTER key pressed check input value
            //detect if it is the correct word
                //increase points
                //video resume
            // else
                // just resume video

        if (event.keyCode === 37) { // left
          this.vx = -10
        }
        if (event.keyCode === 39) { // left
          this.vx = 10
        }
      }

