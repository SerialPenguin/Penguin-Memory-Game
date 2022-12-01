// Variabler deklareras och tilldelas.
const playerTurnLbl = document.querySelector(".player-turn-lbl");
const playerOneInput = document.querySelector("#player1");
const playerTwoInput = document.querySelector("#player2");
const startGameBtn = document.querySelector(".start-game-btn");
const playerOneName = document.querySelector(".player-one-name");
const playerTwoName = document.querySelector(".player-two-name");
const resetGameBtn = document.querySelector(".reset-game-btn");
const endGameBtn = document.querySelector(".end-game-btn");
const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score");
const backFace = document.querySelector(".back-face");
const frontFace = document.querySelector(".front-face");
const cardContainer = document.querySelector(".cards");
let pointCounterPlayerOne = 0;
let pointCounterPlayerTwo = 0;
let playerTurn = document.querySelector(".player-turn");

// Här deklaras och tilldelas variablerna för spelarna samt deras startpoäng, i ett varsitt objekt.
let playerOne = {
  name: "",
  score: 0,
};

let playerTwo = {
  name: "",
  score: 0,
};

// Här deklareras spelarna in i en array som sedan används för att kunna alternera spelare.
let players = [playerOne, playerTwo];

// Här deklareras variabeln som visar vilken spelares tur det är.
let gameTurn = 0;

// När vi klickar på knappen startGameBtn så körs funktionerna startGame och updateDisplay.
startGameBtn.addEventListener("click", function () {
  startGame();
  updateDisplay();
});

//När man trycker på knappen startGameBtn döljs menyn och spelplanen visas.

function startGame() {
  let startContainer = document.querySelector(".start-container");
  startContainer.style.display = "none";
  let gameContainer = document.querySelector(".game-area");
  gameContainer.style.display = "block";
  console.log(startContainer);
  playerTurnLbl.innerHTML = playerOneInput.value;
}

//Här visas namnnen som spelarna har skrivit in i inputfälten.
function updateDisplay() {
  playerOne.name = playerOneInput.value;
  playerOneName.innerText = playerOne.name;
  playerTwo.name = playerTwoInput.value;
  playerTwoName.innerText = playerTwo.name;
}

// När någon av spelarna trycker på knappen endGameBtn, döljs spelplanen, visas menyn igen.

endGameBtn.addEventListener("click", function () {
  endGame();
});

function endGame() {
  let startContainer = document.querySelector(".start-container");
  // Startmenyn visas
  startContainer.style.display = "block";
  let gameContainer = document.querySelector(".game-area");
  // Spelplanen döljs
  gameContainer.style.display = "none";

  // Här deklareras en variabel.
  let removeInput = document.querySelectorAll("input");

  // Här ersätts den sparade strängen med en tom sträng vid avslut av spel.
  removeInput[0].value = "";
  removeInput[1].value = "";
  pointCounterPlayerOne = 0;
  //Här kallas funktionen ResetCards vilket återställer korten med baksidan nedåt.
  ResetCards();
}

//Återställer poäng när man trycker "Starta om spel".
function resetPlayersScore() {
  playerOne.score = 0;
  playerTwo.score = 0;
  console.log(playerTwo.score);
  playerOneScore.textContent = playerOne.score;
  playerTwoScore.textContent = playerTwo.score;
}

// updateDisplay()

//Denna funktion gör så att spelplanen återställs.
function ResetCards() {
  cardContainer.innerHTML = "";

  let randomizedArray = shuffleArray(gameCardsArray);

  createMemoryCards(randomizedArray);

  setMemoryCardId();
  let penguinPictureArray = document.querySelectorAll("img");

  for (let i = 0; i < cardArray.length; i++) {
    if (penguinPictureArray) {
      penguinPictureArray[i].addEventListener("click", function (event) {
        console.log(event.target.src);
        let parentElementClass = event.target.parentElement.classList[1];
        let parentElementId = event.target.parentElement.id;
        console.log(parentElementClass);
        console.log(parentElementId);
        choosenCards.push([event.target.src, parentElementId]);
        checkCardSelection();
        event.currentTarget.style.opacity = "1";
      });
    }
  }
}

//När man klickar på återställ spel-kanppen kallas funktionerna som gör att poängen och spelplanen återställs.
resetGameBtn.addEventListener("click", () => {
  resetPlayersScore();

  ResetCards();
});

//En array med ett objekt för varje kort i spelet.
const gameObjectArray = [
  {
    frontFace: "Penguin One",
    path: "assets/penguin-One.png",
  },
  {
    frontFace: "Penguin Two",
    path: "assets/Penguin-Two.jpg",
  },
  {
    frontFace: "Penguin Three",
    path: "assets/Penguin-Three.jpg",
  },
  {
    frontFace: "Penguin Four",
    path: "assets/Penguin-Four.jpg",
  },
  {
    frontFace: "Penguin Five",
    path: "assets/Penguin-Five.jpg",
  },
  {
    frontFace: "Penguin Six",
    path: "assets/Penguin-Six.png",
  },
  {
    frontFace: "Penguin Seven",
    path: "assets/Penguin-Seven.png",
  },
  {
    frontFace: "Penguin Eight",
    path: "assets/Penguin-Eight.png",
  },
  {
    frontFace: "Penguin Nine",
    path: "assets/Penguin-Nine.png",
  },
  {
    frontFace: "Penguin Ten",
    path: "assets/Penguin-Ten.png",
  },
  {
    frontFace: "Penguin Eleven",
    path: "assets/Penguin-Eleven.png",
  },

  {
    frontFace: "Penguin Twelve",
    path: "assets/Penguin-Twelve.jpg",
  },
];

//En tom array skapas
let cardArray = [];

//En funktion som skapar memorykorten: divarna får en klass, image-elementen tilldelas en src, divarna läggs till i cardContainer
//, image-elementen läggs till i divarna. Därefter läggs allt in i den tomma listan cardArray. image-elementen döljs sedan
// med hjälp av opacity 0.
function createMemoryCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    let cardDiv = document.createElement("div");
    let cardImg = document.createElement("img");
    cardDiv.classList.add("card-div");

    console.log(arr[i][1]);
    cardImg.src = arr[i][1];
    cardContainer.append(cardDiv);
    cardDiv.append(cardImg);
    cardArray.push(arr[i]);

    cardImg.style.opacity = "0";
  }
}
//Denna funktion sätter unika id på alla divblock
function setMemoryCardId() {
  let cardDivs = document.querySelectorAll(".card-div");
  for (let i = 0; i < cardDivs.length; i++) {
    cardDivs[i].setAttribute("id", "b" + i);
  }
}
//Vi skapar en tom array till vilken vi sen ska pusha på vår gameObjectArray
// med både frontface-namn samt path.
let gameCardsArray = [];

function createCardArray() {
  for (i = 0; i < gameObjectArray.length; i++) {
    gameCardsArray.push([
      gameObjectArray[i].frontFace,
      gameObjectArray[i].path,
    ]);
  }
}
//Vi kallar på funktionen två gånger(hade också kunnat skrivas .length*2). Detta för att få totalt 24 kort.
createCardArray();
createCardArray();

//Vi förbereder en array som är färdigblandad innan korten ritas us, "creatas".

//Funktion som gör att vi kan randomisera, shuffla vår array.
function shuffleArray(array) {
  let curId = array.length;

  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;

    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

//Den blandade listan sparas i en variabel.
let randomizedArray = shuffleArray(gameCardsArray);

//Vi använde den blandade listan för att rita ut korten på spelplanen.
createMemoryCards(randomizedArray);

setMemoryCardId();

// Vi testar om pathsen matchar varandra inom cardArray
// Vi testar om två kort matchar

//src ska vara lika men inte id, detta för att man inte ska kunna klicka på samma kort två ggr.
//Därefter får spelaren som fått ett par poäng.
//funktion som tar bort korrekta kort kallas.
//Om kortens src ej är lika återgår korten till opacity 0. Nästa spelare tur.
function doesCardsMatch(path1, path2) {
  console.log(path1);
  console.log(path2);
  console.log(path1[0] == path2[0]);
  console.log(path1[1] != path2[1]);
  if (path1[0] == path2[0] && path1[1] != path2[1]) {
    getPoints();
    disableCorrectCard(path1[1], path2[1]);
  } else {
    setTimeout(() => {
      let cardImg = document.querySelectorAll("img");
      for (let i = 0; i < cardImg.length; i++) {
        cardImg[i].style.opacity = "0";
        cardImg[i].parentElement.classList.remove("card-animation");
      }
    }, 1500);
    checkPlayerTurn();
  }
}

// Om man får ett par, försvinner dessa kort från spelplanen med denna funktion.
//här kallas även funktion om en av spelarna når upp till 2 poäng.
function disableCorrectCard(card1, card2) {
  let correctCard1 = document.querySelector("#" + card1);
  let correctCard2 = document.querySelector("#" + card2);
  correctCard1.style.visibility = "hidden";
  correctCard2.style.visibility = "hidden";
  getWinner();
}
// Vi tar ut alla bilder och gör så att vi kan klicka på dem för att få ut deras path i consolen
// Vi har loopat den nya arrayen med 24 objekt och tagit ut img src för den specifika bilden
let penguinPictureArray = document.querySelectorAll("img");

//EventListener vid click på bild.
//Om man väljer mer än 2 kort, return false. Man ska bara kunna välja två kort!
//Vi lägger in de båda kortens src och id i en lista, choosenCards.
//images blir synliga med opacity 1 och vi lägger till classen som gör anmiationen möljig.

for (i = 0; i < cardArray.length; i++) {
  penguinPictureArray[i].addEventListener("click", function (event) {
    if (choosenCards.length == 2) {
      return false;
    }
    console.log(event.target.src);
    let parentElementClass = event.target.parentElement.classList[1];
    let parentElementId = event.target.parentElement.id;
    let parentElementTest = event.target.parentElement;
    console.log(parentElementClass);
    console.log(parentElementId);
    choosenCards.push([event.target.src, parentElementId]);
    checkCardSelection();
    event.currentTarget.style.opacity = "1";
    parentElementTest.classList.add("card-animation");
  });
}
//Tom array där vi lägger in de valda korten.
let choosenCards = [];

//listan choosenCards ska enbart ta emot 2 kort i en array som då kontrollerar om de matchar, sedan töms denna array igen.
function checkCardSelection() {
  if (choosenCards.length === 2) {
    doesCardsMatch(choosenCards[0], choosenCards[1]);
    choosenCards = [];
  }
}

// Funktion som plussar på poäng till den spelare som fått par, läggs till i <p> i html-koden.
function getPoints() {
  if (switchPlayer === 1) {
    pointCounterPlayerOne = pointCounterPlayerOne + 1;
    document.querySelector(".player-one-score").innerHTML =
      pointCounterPlayerOne;
  } else if (switchPlayer === 2) {
    pointCounterPlayerTwo = pointCounterPlayerTwo + 1;
    document.querySelector(".player-two-score").innerHTML =
      pointCounterPlayerTwo;
  }
}

//function som utser en vinnare om en spelare fått 2 poäng. En alert med text kommer upp. Detta sker
//0.7 sek efter spelaren fått 2 poäng. Vi behövde denna SetTimeout för att kort skulle visas och poäng skulle
//ges innan alert visades.
function getWinner() {
  if (pointCounterPlayerOne === 2 || pointCounterPlayerTwo === 2) {
    if (pointCounterPlayerOne === 2) {
      setTimeout(function () {
        alert(`${playerOne.name} you are the winner`);
      }, 700);
    } else if (pointCounterPlayerTwo === 2) {
      setTimeout(function () {
        alert(`${playerTwo.name} you are the winner`);
      }, 700);
    }
  }
}

// variabel deklareras med startvärde 1.
let switchPlayer = 1;

//function som kallas längre upp i functionen doesCardMatch, för att bestämma vilken spelares tur det är.
function checkPlayerTurn() {
  if (switchPlayer === 1) {
    switchPlayer = 2;
    playerTurnLbl.innerHTML = playerTwoInput.value;
    console.log("Nu är det spelare tvås tur");
  } else if (switchPlayer === 2) {
    switchPlayer = 1;
    playerTurnLbl.innerHTML = playerOneInput.value;
    console.log("Nu är det spelare etts tur");
  }
}
