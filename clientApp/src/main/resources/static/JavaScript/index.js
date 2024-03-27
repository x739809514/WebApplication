// sider bar
document.getElementById('sidebarToggle').onclick = function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
};

// local storage
// var existingData = JSON.parse(localStorage.getItem("GameData")) || [];
// function updateGameList() {
//     var gamesListDiv = document.querySelector('.games-list');
//     gamesListDiv.innerHTML = ''; // Clear existing content
//
//     existingData.forEach(function(game,index) {
//         var gameDiv = document.createElement('div');
//         gameDiv.className = 'game';
//         gameDiv.innerHTML = `
//             <a href="Htmls/games.html?id=${index}"">
//             <img src="Resources/Images/${game.screenshot}" alt="${game.title}">
//             <h3 class="game-title">${game.title}</h3>
//             <p class="game-genre">${game.gamelabel}</p>
//             <p class="game-price">${game.price}</p>
//             <p class="game-description">${game.description}</p>
//             <p class="game-gameplay">${game.gameplay}</p>
//             </a>
//         `;
//         gamesListDiv.appendChild(gameDiv);
//     });
// }


// Server
fetch('http://localhost:8081/index')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        localStorage.setItem("GameData",JSON.stringify(data.data.records));

        var gamesListDiv = document.querySelector('.games-list');
        gamesListDiv.innerHTML = ''; // Clear existing content

        if (Array.isArray(data.data.records)) {
            data.data.records.forEach(game => {
                if (game && typeof game === 'object') {
                    var gameDiv = document.createElement('div');
                    gameDiv.className = 'game';
                    gameDiv.innerHTML = `
                        <a href="Htmls/games.html?id=${game.id}"">
                            <img src="Images/${game.picName}" alt="${game.gameTitle}">
                            <h3 class="game-title">${game.gameTitle}</h3>
                            <p class="game-genre">${game.gameLabel}</p>
                            <p class="game-price">${game.price}</p>
                            <p class="game-description">${game.gameDetail}</p>
                            <p class="game-gameplay">${game.gamePlay}</p>
                        </a>
                    `;
                    gamesListDiv.appendChild(gameDiv);
                }
            });
        } else {
            console.error('Invalid game data:', data.data.records);
        }
    })
    .catch(error => {
        console.error('Error fetching game data:', error);
    });
