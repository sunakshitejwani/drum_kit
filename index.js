var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("hello");
  });
}

document.querySelector(".drum").addEventListener("click", function() {
  alert("hello");
});

function handleClick() {
  alert("hello");
}
