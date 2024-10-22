function fetchCatData() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

fetchCatData();


const fetchPromise = fetch('https://api.thecatapi.com/v1/images/search?limit=10');

// Log the fetchPromise to check its methods and properties
console.log(fetchPromise);