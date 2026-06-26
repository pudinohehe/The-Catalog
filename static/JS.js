const searchInput = document.querySelector('input[type="search"]');
const resultContainer = document.querySelector('.results')
console.log(searchInput);


let timer;

searchInput.addEventListener('input', function() {
    clearTimeout(timer);

    timer = setTimeout(function() {
        console.log(searchInput.value);
    if (searchInput.value != "") {
        fetch('/search-films?name=' + searchInput.value)
        .then(response => response.json())
        .then(films => {
            resultContainer.innerHTML = '';
            films.forEach(function(film) {
                const cardstructure = `
                <div class="movie-card">
                    <h3>${film.title}</h3>
                    <p> description: ${film.description}</p>
                    </div>`;
                resultContainer.innerHTML += cardstructure;
            })
            console.log(films);
        })
    }


    }, 150);
})  