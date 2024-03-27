// For Json
// fetch('http://localhost:8081/author')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         localStorage.setItem("AuthorData",JSON.stringify(data.data));
//     })
//     .catch(error => {
//         console.error('Error fetching game data:', error);
//     });

function submitAuthorForm() {
    const authorData = {
        id: document.getElementById('authorId').value,
        birthday: document.getElementById('birthday').value,
        name: document.getElementById('name').value,
        sex: document.getElementById('sex').value,
        age: document.getElementById('age').value,
    };

    var regex = /\D/;
    if (regex.test(authorData.id)) {
        alert("Please input numbers for id.");
        document.getElementById("authorId").value = "";
        document.getElementById("authorId").focus();
        return false;
    }else{
        console.log(JSON.stringify(authorData));
        fetch('http://localhost:8080/addAuthor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authorData),
        })
            .then(response => response.text())
            .then(data => alert(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return false;
}