let count = 0;
let scoreX = 0;
let scoreO = 0;
function resetGame() {
  count = 0;
  for(let i = 1 ; i <= 9 ; i++){
    document.getElementById(`b${i}`).innerHTML = "";
  }
  $("#turn").innerHTML = "X";
}

function draw() {
  if (count == 9) {
    Swal.fire({
      title: `Draw!!`,
      icon: "question",
      draggable: true,
    });
    reset()
  }
}

function checkWinner(value) {
  let flag = true;
  for (let i = 1; i <= 9; i++) {
    let v = document.getElementById(`b${i}`).innerHTML;
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }

  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }
  flag = true;
  for (let i = 4; i <= 6; i++) {
    let v = document.getElementById(`b${i}`).innerHTML
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }
  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }
  flag = true;
  for (let i = 7; i <= 9; i++) {
    let v = document.getElementById(`b${i}`).innerHTML;
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }

  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }

  flag = true;
  for (let i = 1; i <= 7; i += 3) {
    let v = document.getElementById(`b${i}`).innerHTML;
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }
  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }

  flag = true;
  for (let i = 2; i <= 8; i += 3) {
    let v = document.getElementById(`b${i}`).innerHTML;
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }

  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }

  flag = true;
  for (let i = 3; i <= 9; i += 3) {
    let v = document.getElementById(`b${i}`).innerHTML;
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }
  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }

  flag = true;
  for (let i = 1; i <= 9; i += 4) {
    let v = document.getElementById(`b${i}`).innerHTML;
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }
  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }

  flag = true;
  for (let i = 3; i <= 7; i += 2) {
    let v = document.getElementById(`b${i}`).innerHTML;
    // console.log(v);
    if (v != value) {
      flag = false;
      break;
    }
  }
  if (flag) {
    Swal.fire({
      title: `player ${value} Wins !!`,
      icon: "success",
      draggable: true,
    });
    resetGame();
    if (value == "X") {
      scoreX++;
      document.getElementById("scoreX").innerHTML = scoreX;
    } else {
      scoreO++;
      document.getElementById("scoreO").innerHTML = scoreO;
    }
  }
}

$(document).ready(function () {
  $(".cell").on("click", function () {
    let tile = this;

    if (tile.innerHTML == "") {
      if (count % 2 == 0) {
        document.getElementById("turn").innerHTML = "O"
        tile.innerHTML = "X";
      } else {
        document.getElementById("turn").innerHTML = "X"
        tile.innerHTML = "O"
      }
      count++;
    } else {
      Swal.fire({
        title: "OOPS!",
        text: "Can not be overwrite",
        icon: "warning",
      });
    }

    if (count >= 5) {
      const win = checkWinner(tile.innerHTML);
      if (!win) draw();
    }

  })

  $("#reset").on("click", function () {
    resetGame();
  })
})