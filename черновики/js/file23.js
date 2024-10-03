// создаем переменную которая хранит "X"
let safe = "X";

let firstDiv = document.getElementById("word");

let global = true;

let newP = document.createElement("p");
word.after(newP);
newP.id = "newPs";
newP.textContent = "Игрок Х, ходи первым!";

let button = document.createElement("button");
button.textContent = "Заново";
button.id = "restartButton";
firstDiv.before(button);

button.addEventListener("click", function () {
  for (let element of document.querySelectorAll(".divchiki")) {
    element.textContent = "";
  }
  safe = "X";
  global = true;
  newP.textContent = "Игрок Х, ходи первым!";
});

let winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

createDiv();

firstDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("divchiki")) {
    krestiki(event.target);
  }
});

function krestiki(cell) {
  if (cell.innerHTML == "" && global == true) {
    cell.innerHTML = safe; // эта переменная
    // вызвать ф-цию которая изменяет перем

    let pobeda = check();
    if (pobeda != null) {
      setTimeout(() => alert(`Победитель - ${pobeda}`), 50);
      global = false;
      newP.textContent = `Игрок ${pobeda} победил!`;
      return;
    }

    let draw = nobody();

    if (draw) {
      setTimeout(() => alert("Ничья"), 50);
      global = false;
      newP.textContent = "Ничья";
      return;
    }

    change();
    newP.textContent = `Игрок ${safe}, твой ход!`;
  }
}

let scoreBoard = document.createElement('div');
let playerXScoreElement = document.createElement('p');
let playerOScoreElement = document.createElement("p");
scoreBoard.id = 'scoreBoard';
playerOScore.id = "playerOScore";
playerXScore.id = "playerXScore";
scoreBoard.appendChild(playerOScoreElement);
scoreBoard.appendChild(playerXScoreElement);
firstDiv.before(scoreBoard);

function updateScoreBoard(){
  let playerXwins = localStorage.getItem('X_wins');
    let playerOwins = localStorage.getItem("O_wins");
    playerOScoreElement.innerText = `Игрок O: ${playerOwins}`;
    playerXScoreElement.innerText = `Игрок X: ${playerXwins}`;
}

//обратные кавычки позволяют с помощью доллара и фигурных скобок ${...} значение переменной внутри нее подставить в текст
function change() {
  if (safe == "X") {
    safe = "O";
  } else {
    safe = "X";
  }
}
// ф-ция, изме. глоб. перем. с Х на О и обратно

function check() {
  for (let comb of winCombination) {
    let A = document.getElementById(comb[0]);
    let B = document.getElementById(comb[1]);
    let C = document.getElementById(comb[2]);
    if (
      A.textContent == B.textContent &&
      A.textContent == C.textContent &&
      A.textContent != ""
    ) {
      let winner = cellA.innerText;
      let winCount = localStorage.getItem(`${winner}_wins`) || 0;
      localStorage.setItem(`${winner}_wins`, +winCount + 1);
      updateScoreBoard();
      return winner;
      
    }
  }
  return null;
}

function createDiv() {
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    firstDiv.append(newDiv);
    newDiv.className = "divchiki";
    newDiv.id = i;
  }
}

function nobody() {
  for (let element of document.querySelectorAll(".divchiki")) {
    if (element.textContent == "") {
      return false;
    }
  }
  return true;
}
