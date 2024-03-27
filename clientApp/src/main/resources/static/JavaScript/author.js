const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

function UpdateAuthor(id) {
// Server
    fetch(`http://localhost:8081/author/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            var authorDetail = document.getElementById("Showcase");
            authorDetail.innerHTML = ''; // Clear existing content

            var author = data.data;
            localStorage.setItem("AuthorData", JSON.stringify(author));

            // name
            var authorName = document.createElement('div');
            authorName.className = 'game-header';
            authorName.innerHTML = `
            <h1 class="game-title">${author.name} - ${author.id}</h1>`;
            // birth
            var authorBirth = document.createElement('div');
            authorBirth.className = 'game-description';
            authorBirth.innerHTML = `
            <h2>Author Birth</h2>
            <p>${author.birthday}</p>`;
            // sex
            var authorSex = document.createElement('div');
            authorSex.className = 'game-description';
            authorSex.innerHTML = `
            <h2>Author Sex</h2>
            <p>${author.sex}</p>`;
            // age
            var authorAge = document.createElement('div');
            authorAge.className = 'game-description';
            authorAge.innerHTML = `
            <h2>Author Age</h2>
            <p>${author.age}</p>`;

            authorDetail.appendChild(authorName);
            authorDetail.appendChild(authorBirth);
            authorDetail.appendChild(authorSex);
            authorDetail.appendChild(authorAge);

        });
}

UpdateAuthor(id);