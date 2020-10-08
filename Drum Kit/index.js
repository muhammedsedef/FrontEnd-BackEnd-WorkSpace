var buttonList = document.querySelectorAll(".drum");
var lengthButton = buttonList.length;

// checking clicked button!

for(var i = 0; i<lengthButton; i++){
  buttonList[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    animateButton(this.innerHTML);
  });

}

// checking pressed keyboard!

document.addEventListener("keydown",function(e){
  makeSound(e.key);
  animateButton(e.key);
});

function makeSound(key){
  switch (key) {

    case "w":
      var audio = new Audio ("sounds/tom-1.mp3");
      audio.play()
      break;

    case "a":
        var audio = new Audio ("sounds/tom-2.mp3");
        audio.play()
        break;

    case "s":
        var audio = new Audio ("sounds/tom-3.mp3");
        audio.play()
        break;

    case "d":
        var audio = new Audio ("sounds/tom-4.mp3");
        audio.play()
        break;

    case "j":
        var audio = new Audio ("sounds/snare.mp3");
        audio.play()
        break;

    case "k":
        var audio = new Audio ("sounds/crash.mp3");
        audio.play()
        break;

    case "l":
        var audio = new Audio ("sounds/kick-bass.mp3");
        audio.play()
        break;

    default:
  }
}

function animateButton(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){ // setTimeout help us to execute the function inner after the time we set
    activeButton.classList.remove("pressed");
  },500); //after half second the class is applied by us is removed

}
