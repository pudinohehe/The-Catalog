console.log("Ta funfado");

const searchInput = document.querySelector('input[type="search"]');
console.log(searchInput);

let timer;

timer = searchInput.addEventListener('input', function() {
    clearTimeout(timer);

    timer = setTimeout(function() {
        console.log(searchInput.value);
    }, 150);
})  