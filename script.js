
document.addEventListener('DOMContentLoaded', function() {
  // alert("sqd")
        localStorage.setItem("gameOn" , false)
  });

  var blueLeftArrow = document.getElementById("blueLeftArrow")
  var blueRightArrow = document.getElementById("blueRightArrow")
  var redLeftArrow = document.getElementById("redLeftArrow")
  var redRightArrow = document.getElementById("redRightArrow")
  var playButton = document.getElementById("playButton")
  var blueInput = document.getElementById("blueName")
  var redInput = document.getElementById("redName")





  var rightArrows = document.getElementsByClassName("rightArrow")
  var blueAvatar = document.getElementById("blueAvatar")
  var redAvatar = document.getElementById("redAvatar")

  avatarList= ["avatar1" ,"avatar2" ,"avatar3","avatar4","avatar5"]
  



    blueLeftArrow.addEventListener("click" , previousAvatar)
    playButton.addEventListener("click" , gameOn)

    blueRightArrow.addEventListener("click" , nextAvatar)
    redLeftArrow.addEventListener("click" , redPreviousAvatar)
    redRightArrow.addEventListener("click" , redNextAvatar)
  
  // for(let i = 0 ; i< rightArrows.length ; i++){
  //   rightArrows[i].addEventListener("click" , previousAvatar)
  // }
var j = 0
  function nextAvatar(){
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
    j === avatarList.length-1 ? j = 0 : j++ 
      blueAvatar.src = `images/${avatarList[j]}.png`
  } 

  function previousAvatar(){
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
    j === 0 ? j = avatarList.length-1 : j-- 
      blueAvatar.src = `images/${avatarList[j]}.png`
  }
k = 0
  function redNextAvatar(){
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
    k === avatarList.length-1 ? k = 0 : k++ 
      redAvatar.src = `images/${avatarList[k]}.png`
  } 

  function redPreviousAvatar(){
    const audio = new Audio("sounds/hover.mp3")
    audio.play();
    k === 0 ? k = avatarList.length-1 : k-- 
      redAvatar.src = `images/${avatarList[k]}.png`
  }

  function gameOn(){
    console.log()
    localStorage.setItem("blueAvatar" ,`images/${avatarList[j]}.png` )
    localStorage.setItem("blueName" , blueName.value)
    localStorage.setItem("redAvatar" ,`images/${avatarList[k]}.png` )
    localStorage.setItem("redName" , redName.value)
    window.location.href = "game.html";
  }
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


