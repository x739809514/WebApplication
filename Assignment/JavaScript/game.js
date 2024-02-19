const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

var existingData = JSON.parse(localStorage.getItem("GameData")) || [];

function updateGameList(index) {
    var gamesDiv = document.getElementById("Showcase");
    gamesDiv.innerHTML = ''; // Clear existing content

    var data = existingData[index];
    if (!data) {
        console.error('Invalid game index:', index);
        return; // Exit the function if data is undefined
    }   

    var gamehead = document.createElement('div');
    gamehead.className = 'game-header';
    gamehead.innerHTML = `
        <img src="../Resources/Images/${data.screenshot}" alt="${data.title}" class="game-image">
        <h1 class="game-title">${data.title}</h1>
    `;

    var gameDescription = document.createElement('div');
    gameDescription.className = 'game-description';
    gameDescription.innerHTML = `
        <h2>About the Game</h2>
        <p>
            ${data.description}
        </p>
    `;

    var gameInstructions = document.createElement('div');
    gameInstructions.className = 'game-instructions';
    gameInstructions.innerHTML = `
        <h2>How to Play</h2>
        <p>${data.gameplay}</p>
    `;
    gamesDiv.appendChild(gamehead);
    gamesDiv.appendChild(gameDescription);
    gamesDiv.appendChild(gameInstructions);
}

updateGameList(id);