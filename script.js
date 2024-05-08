console.log("hello game !")

// document.addEventListener('DOMContentLoaded', function() {
//     playMP3('sounds/backgroundEffect.mp3');
//   });
  
//   function play() {
//     const audio = new Audio("sounds/backgroundEffect.mp3");
//     if(audio.paused)
//     audio.play()
//     else
//        {
//         audio.pause()
//         console.log('audio paused')    }
//   }

//   function stop() {
//     const audio = new Audio("sounds/backgroundEffect.mp3");
//     audio.pause()
//   }

const audio = document.getElementById('myAudio');

function play() {
  audio.play();
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
}