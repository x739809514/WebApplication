document.getElementById('sidebarToggle').onclick = function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
};


var existingData = JSON.parse(localStorage.getItem("GameData")) || [];

function updateGameList() {
    var gamesListDiv = document.querySelector('.games-list');
    gamesListDiv.innerHTML = ''; // Clear existing content

    existingData.forEach(function(game,index) {
        var gameDiv = document.createElement('div');
        gameDiv.className = 'game';
        gameDiv.innerHTML = `
            <a href="Htmls/games.html?id=${index}"">
            <img src="Resources/Images/${game.screenshot}" alt="${game.title}">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-genre">${game.gamelabel}</p>
            <p class="game-price">${game.price}</p>
            <p class="game-description">${game.description}</p>
            <p class="game-gameplay">${game.gameplay}</p>
            </a>
        `;
        gamesListDiv.appendChild(gameDiv);
    });
}

updateGameList();