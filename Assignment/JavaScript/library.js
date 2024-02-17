document.getElementById('gameForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Retrieve form data
    var title = document.getElementById('gameTitle').value;
    var screenshot = document.getElementById('gameScreenshot').files[0];
    var description = document.getElementById('gameDescription').value;
    var gameplay = document.getElementById('gameplay').value;
    var preview = document.getElementById('screenshotPreview');

    // Display in table (for screenshots, showing a placeholder or the filename for simplicity)
    var table = document.getElementById('gamesTable');
    var newRow = table.insertRow();
    newRow.innerHTML = `<td>${title}</td><td>${screenshot.name}</td><td>${description}</td><td>${gameplay}</td>`;


    var jsonData = {
        title: title,
        screenshot: screenshot.name, 
        description: description,
        gameplay: gameplay
    };
    

    // Save data in local
    localStorage.setItem("GameData",JSON.stringify(jsonData));
    // Test
    var data = JSON.parse(localStorage.getItem("GameData"),JSON.stringify(jsonData));
    console.log(data);

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