var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    //console.log(this.innerHTML);
    var audio;
    this.style.color = "white";
    let identity = this.innerHTML;
    if (identity === "w") {
      audio = new Audio("sounds/crash.mp3");
      audio.play();
    } else if (identity === "a") {
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    } else if (identity === "s") {
      audio = new Audio("sounds/snare.mp3");
      audio.play();
    } else if (identity === "d") {
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    } else if (identity === "j") {
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    } else if (identity === "k") {
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    } else if (identity === "l") {
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    }
  });
}
