const sonic = document.getElementById("sonic");

function jump() {
  if (sonic.classList != "jump") {
    sonic.classList.add("jump");

    setTimeout(function () {
        sonic.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let sonicTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});