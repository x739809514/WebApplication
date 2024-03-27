const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

var existingData = JSON.parse(localStorage.getItem("GameData")) || [];


function searchAuthor(id) {
    return fetch(`http://localhost:8081/author/${id}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.data) {
                return data.data;
            } else {
                throw new Error('Author not found or invalid data structure');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            return null;
        });
}


function updateGameList(index) {
    var gamesDiv = document.getElementById("Showcase");
    gamesDiv.innerHTML = ''; // Clear existing content

    var data = existingData[index-1];
    if (!data) {
        console.error('Invalid game index:', index);
        return; // Exit the function if data is undefined
    }   

    var gamehead = document.createElement('div');
    gamehead.className = 'game-header';
    gamehead.innerHTML = `
        <img src="../Images/${data.picName}" alt="${data.gameTitle}" class="game-image">
        <h1 class="game-title">${data.gameTitle}</h1>
        
    `;

    var gameAuthor = document.createElement('div');
    gameAuthor.className = 'game-description';
    searchAuthor(data.authorId).then(author => {
        gameAuthor.innerHTML = `
        <a href="Author.html?id=${author.id}"">
        <h2>Author</h2>
        <p>${author.name}</p>
    `;
    });

    var gameDescription = document.createElement('div');
    gameDescription.className = 'game-description';
    gameDescription.innerHTML = `
        <h2>About the Game</h2>
        <p>
            ${data.gameDetail}
        </p>
        <h2>Game Price</h2>
        <p>
            ${data.price}
        </p>
    `;

    var gameInstructions = document.createElement('div');
    gameInstructions.className = 'game-instructions';
    gameInstructions.innerHTML = `
        <h2>How to Play</h2>
        <p>${data.gamePlay}</p>
    `;
    gamesDiv.appendChild(gamehead);
    gamesDiv.appendChild(gameAuthor);
    gamesDiv.appendChild(gameDescription);
    gamesDiv.appendChild(gameInstructions);
}

updateGameList(id);