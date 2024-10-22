function getCatsDataUsingAx() {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}

getCatsDataUsingAx();