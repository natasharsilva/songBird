const canvas1 = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
let isStopped = true

const $scoreValue = document.querySelector('.scoreValue')

let frame = 0; // the frame counter
let bg = new Background()
let newSong = new Lyrics(adele);
// let bg = new Background();

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
var player2;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '-Y2ugxRPGOA',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// YOUTUBE VIDEO
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
    if (event.data == YT.PlayerState.PLAYING) {
        event.target.playVideo();
    } else if (event.data === YT.PlayerState.PAUSED) {
    } else if (event.data === YT.PlayerState.ENDED) {

    }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        isStopped = false;
        animation();
    } else if (event.data === YT.PlayerState.PAUSED) {
        isStopped = true;
    } else if (event.data === YT.PlayerState.ENDED) {
        // stop lyrics
    }
}

function animation() {
    if(!isStopped){
        updateEverything();
        drawLyrics(ctx);
        window.requestAnimationFrame(animation);
    }
}

function drawLyrics(ctx) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    bg.draw(ctx);
    newSong.draw(ctx);
}


function updateEverything() {
    frame++;
    $scoreValue.innerHTML = `Score: ${newSong.score}`
    newSong.update()
}


document.onkeydown = event => {
    let key = event.key
    
    if (key === "Backspace") {
        newSong.currentText = newSong.currentText.substr(0, newSong.currentText.length-1)
    }
    if (key.length === 1) {
        newSong.addCharacter(event.key)
    }
    if (event.keyCode === 13) { // enter
        newSong.missingWordsIndex++;
        newSong.currentLyricIndex++;
        newSong.correctAnswers.push(false);
    }
}