
//playerInput = getPlayerChoice(playerInput);

/************* GAME FUNCTIONS **************/

/**
 * 
 * @returns une chaîne de caractère contenant un des trois mots au hasard
 */

function getComputerChoice() {

    // On détermine un nombre aléatoire entre 0 et 2

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let randomNumber = getRandomInt(0, 3);

    // En fonction du nombre, on affecte un mot différent

    let computerChoice;

    switch (randomNumber) {
        case 0:
            computerChoice = 'paper';
            break;
        case 1:
            computerChoice = 'stone';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}

/**
 * 
 * @param {*} playerChoice 
 * @param {*} computerChoice 
 * @returns a message to display to the user indicating wether s/he won, lost or tied. 
 */

function findWinner(playerChoice, computerChoice) {

    let message;

    if (playerChoice == computerChoice) {
        message = "Egalité";
    } else if (playerChoice == "stone") {
        if (computerChoice == "scissors") {
            message = "Gagné !";
        } else {
            message = "Perdu !";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "stone") {
            message = "Gagné !";
        } else {
            message = "Perdu !";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            message = "Gagné !";
        } else {
            message = "Perdu !";
        }
    }


    return message;

}

function playGame(playersChoice) {

    let computerChoice = getComputerChoice();
    let result = [];
    result.push(computerChoice);
    result.push(findWinner(playersChoice, computerChoice));

    //console.log ("uchoice", uChoice);
    //console.log("computer", computerChoice);
    
    return result;


}


/************* DISPLAY FUNCTIONS **************/

function displayResults(result, playersChoice) {
    let computer = result[0];
    let player = playersChoice;
    let gameResult = result[1];

    addWrapper();
    displayImagePart(player, "player");
    displayResultPart(gameResult, player, computer);
    displayImagePart(computer, "computer");
}

function addWrapper() {
    //Adding wrapper
    let gameWrapper = document.createElement('div');
    gameWrapper.id = "game-playing";
    document.body.appendChild(gameWrapper);
    setTimeout(() => { gameWrapper.style.display = "flex" }, 1000);
}

function displayImagePart(playerOrComputer, part) {

    //Getting wrapper
    let gameWrapper = document.getElementById('game-playing');

    //Adding players choice
    let playerDiv = document.createElement('div');
    playerDiv.classList.add('game-part');
    gameWrapper.appendChild(playerDiv);

    let playerDivTitle = document.createElement('h3');
    if (part == "player") {
        playerDivTitle.innerText = "Vous";
    } else {
        playerDivTitle.innerText = "L'ordinateur";
    }

    playerDiv.appendChild(playerDivTitle);

    let playerImage = document.createElement('img');
    playerImage.classList.add("img");
    playerImage.id = playerOrComputer + "-game";
    playerImage.setAttribute('src', "img/" + playerOrComputer + ".jpg");
    playerImage.setAttribute('alt', playerOrComputer);
    playerDiv.appendChild(playerImage);
}

function displayResultPart(gameResult, player, computer) {

     //Getting wrapper
    let gameWrapper = document.getElementById('game-playing');

      //Adding players choice
    let resultDiv = document.createElement('div');
    resultDiv.classList.add('game-part');
    gameWrapper.appendChild(resultDiv);

     //Result
    let result = document.createElement('p');
    result.innerText = gameResult;
    result.classList.add('result');
    resultDiv.appendChild(result);

    //Message
    let message = determineMessage(player, computer);
    let messageParagraph =  document.createElement('p');
    messageParagraph.classList.add('result-msg');
    if(!message){
        message="";
    }
    messageParagraph.innerText = message;
    resultDiv.append(messageParagraph);

}

function determineMessage(player, computer) {
    let message;
    if (player == "stone" & computer == "scissors" || computer == "stone" & player == "scissors") {
        message = "La pierre écrase les ciseaux";       
    } else if (player == "stone" & computer == "paper" || computer == "stone" & player == "paper") {
        message = "La feuille enveloppe la pierre";
    } else if (player == "scissors" & computer == "paper" || computer == "scissors" & player == "paper") {
        message = "Le ciseau coupe la feuille";
    } else if (player = computer) {
        message = "";
    }
return message;
}

