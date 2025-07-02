$(document).ready(function () {
  let currentPlayer = "X";
  let scoreX = 0;
  let scoreO = 0;

  function resetBoard(){
    for(let i = 1; i <= 9; i++){
        $(`#b${i}`).text("");
    }
  }
  function checkWin() {
    const c1 = $("#b1").text();
    const c2 = $("#b2").text();
    const c3 = $("#b3").text();
    const c4 = $("#b4").text();
    const c5 = $("#b5").text();
    const c6 = $("#b6").text();
    const c7 = $("#b7").text();
    const c8 = $("#b8").text();
    const c9 = $("#b9").text();

    if (
      (c1 === currentPlayer && c2 === currentPlayer && c3 === currentPlayer) ||
      (c4 === currentPlayer && c5 === currentPlayer && c6 === currentPlayer) ||
      (c7 === currentPlayer && c8 === currentPlayer && c9 === currentPlayer) ||
      (c1 === currentPlayer && c4 === currentPlayer && c7 === currentPlayer) ||
      (c2 === currentPlayer && c5 === currentPlayer && c8 === currentPlayer) ||
      (c3 === currentPlayer && c6 === currentPlayer && c9 === currentPlayer) ||
      (c1 === currentPlayer && c5 === currentPlayer && c9 === currentPlayer) ||
      (c3 === currentPlayer && c5 === currentPlayer && c7 === currentPlayer)
    ) {
      $(".status").text("Player " + currentPlayer + " Wins!");
      if (currentPlayer === "X") {
        scoreX++;
        $("#scoreX").text(scoreX);
      } else {
        scoreO++;
        $("#scoreO").text(scoreO);
      }

      Swal.fire({
        title: `Player ${currentPlayer} Wins! 🎉`,
        icon: "success",
        confirmButtonText: "OK"
      });
      resetBoard();

      $(".cell").off("click");
      return true;
    }
    return false;
  }

  function isDraw() {
    let filled = 0;
    $(".cell").each(function () {
      if ($(this).text() !== "") filled++;
    });
    return filled === 9;
  }

  function cellClickHandler() {
    if ($(this).text() !== "") {
      Swal.fire({
        title: "Invalid Move!",
        text: "This cell is already filled.",
        icon: "warning",
        confirmButtonText: "OK"
      });
      return;
    }

    $(this).text(currentPlayer);
    if (!checkWin()) {
      if (isDraw()) {
        $(".status").text("It's a Draw!");
        Swal.fire({
          title: "It's a Draw!",
          icon: "info",
          confirmButtonText: "Play Again"
        });
        resetBoard();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        $(".status").text("Player " + currentPlayer + "'s Turn");
      }
    }
  }

  $(".cell").on("click", cellClickHandler);

  $(".restart-btn").on("click", function () {
   
    $(".status").text("Player X's Turn");
    currentPlayer = "X";
    $(".cell").off("click").on("click", cellClickHandler);
  });
});
