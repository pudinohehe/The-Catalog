console.log("Ta funfado");

const searchInput = document.querySelector('input[type="search"]');

console.log(searchInput);

searchInput.addEventListener('input', function() {
    console.log(searchInput.value);
})