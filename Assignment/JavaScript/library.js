document.getElementById('gameForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Retrieve form data
    var title = document.getElementById('gameTitle').value;
    var screenshot = document.getElementById('gameScreenshot').files[0];
    var description = document.getElementById('gameDescription').value;
    var gameplay = document.getElementById('gameplay').value;
    var preview = document.getElementById('screenshotPreview');
    var price = document.getElementById('price').value;
    var label = document.getElementById('gamelabel').value;

    // Display in table
    var table = document.getElementById('gamesTable');
    var newRow = table.insertRow();
    newRow.innerHTML = `<td>${title}</td><td>${screenshot.name}</td><td>${description}</td><td>${gameplay}</td><td>${price}</td><td>${label}</td>`;


    var jsonData = {
        title: title,
        screenshot: screenshot.name, 
        description: description,
        gameplay: gameplay,
        price: price,
        gamelabel: label,
    };
    
    // Save data in local
    var existingData = JSON.parse(localStorage.getItem("GameData")) || [];
    if (!Array.isArray(existingData)) {
        existingData = [];
    }
    console.log(existingData);
    existingData.push(jsonData);
    localStorage.setItem("GameData", JSON.stringify(existingData));

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


function validatePrice() {
    var priceInput = document.getElementById("price").value;
    var regex = /^\$?\d+(?:\.\d{0,2})?$/;
    if (!regex.test(priceInput)) {
        alert("Please input numbers for price.");
        document.getElementById("price").value = "";
        document.getElementById("price").focus();
        return false;
    }
    return true;
}

function showAllDataInTable(){
    var savedGameData = JSON.parse(localStorage.getItem('GameData')) || [];

    var table = document.getElementById('gamesTable');
    savedGameData.forEach(function(gameData) {
        var newRow = table.insertRow();
        newRow.innerHTML = `<td>${gameData.title}</td><td>${gameData.screenshot}</td><td>${gameData.description}</td><td>${gameData.gameplay}</td><td>${gameData.price}</td><td>${gameData.gamelabel}</td>`;
    });
}

showAllDataInTable();