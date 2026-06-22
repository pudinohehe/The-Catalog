const searchInput = document.querySelector('input[type="search"]');
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
        console.log(films);
        })
    }


    }, 150);
})  