document.addEventListener("DOMContentLoaded", () => {
  alert(
    "hello welcome to the game\ngame rules:\n1.hit the mole when you see\n2.if you hit it successfully you get +1"
  );
  alert("you have 60 SECONDS");

  var square = document.querySelectorAll(".square");
  var scoreHtml = document.getElementById("result");
  var timer = document.getElementById("timer");
  var score = 0;
  var seconds = 60;
  function randomSquare() {
    let x = Math.floor((Math.random() * 10) % 6);
    //  console.log(x);
    square[x].setAttribute("src", "./images/mole.jpg");
    //square[x].addEventListener("mouseup", () => updateScore(x));
    setTimeout(() => {
      square[x].setAttribute("src", "./images/white.png");
    }, 600);
  }
  function updateScore(id) {
    if (id.getAttribute("src") === "./images/mole.jpg") {
      // console.log(x);
      ++score;
      scoreHtml.innerHTML = score;
    }
    console.log(score);
  }
  function realFunction() {
    // console.log(square);
    setInterval(randomSquare, 3000);
  }
  function counter() {
    if (seconds < 0) {
      alert("GAME OVER\nYour score is:" + score);
      window.location.reload();
    } else {
      if (seconds < 10) {
        timer.setAttribute("style", "text-align:center;color:red");
      }
      timer.innerHTML = seconds;
      --seconds;
    }
  }

  if (seconds > 1) {
    setInterval(counter, 1000);
    realFunction();
    square.forEach((s) => {
      console.log(s);
      s.addEventListener("click", () => updateScore(s));
    });
  }
});
