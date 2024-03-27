document.getElementById('gameForm').addEventListener('submit', function (event) {
    // Reset the form
    document.getElementById('gameForm').reset();
    preview.src='';
});


function previewFile() {
    var preview = document.getElementById('screenshotPreview');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        console.log(reader.result);
        preview.style.display = "block";
    }

    if (file) {
        reader.readAsDataURL(file); // reads the data as a URL
    } else {
        preview.src = "";
        preview.style.display = "none";
    }
}


function submitForm() {
    const gameData = {
        gameTitle: document.getElementById('gameTitle').value,
        gameDetail: document.getElementById('gameDescription').value,
        gamePlay: document.getElementById('gameplay').value,
        price: parseFloat(document.getElementById('price').value),
        gameLabel: document.getElementById('gamelabel').value,
        picName : document.getElementById('gameScreenshot').files[0].name,
        authorId: document.getElementById('gameAuthor').value
    };

    var regex = /^\$?\d+(?:\.\d{0,2})?$/;
    if (!regex.test(gameData.price)) {
        alert("Please input numbers for price.");
        document.getElementById("price").value = "";
        document.getElementById("price").focus();
        return false;
    }else{
        fetch('http://localhost:8080/addGames', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameData),
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return false;
}

function showAllDataInTable(){
    var savedGameData = JSON.parse(localStorage.getItem('GameData')) || [];

    var table = document.getElementById('gamesTable');
    savedGameData.forEach(function(gameData) {
        var newRow = table.insertRow();
        newRow.innerHTML = `<td>${gameData.gameTitle}</td><td>${gameData.picName}</td><td>${gameData.gameDetail}</td><td>${gameData.gamePlay}</td><td>${gameData.price}</td><td>${gameData.gameLabel}</td>`;
    });
}

showAllDataInTable();