//JQuery
$(document).ready(function(){
    $("#flip").click(function(){
        document.getElementById("flip").innerHTML="QUI SOM"
        $("#panel").slideToggle("slow");
    });
});

//VIDEO
const video_player = document.getElementById("video");
const btn_play = document.getElementById("playButton");
const btn_mute = document.getElementById("muteButton");
      
function play_pause() {
    if (video_player.paused) {
        video_player.play();
        btn_play.innerHTML = "pause_circle";
    } else {
        video_player.pause();
        btn_play.innerHTML = "play_circle";
    }
}

function mute_unmute() {
    if (video_player.muted) {
        video_player.muted = false;
        btn_mute.innerHTML = "volume_up";
    } else {
        video_player.muted = true;
        btn_mute.innerHTML = "volume_off";
    }
}