async function getCatsData(){
    let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    let data = await response.json();
    console.log(data);
}

getCatsData();