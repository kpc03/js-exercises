document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("userValue");
    const showTemp = document.getElementById("showTemp");
    const celsiusTemp = document.getElementById("btnCel");
    const fahrenheitTemp = document.getElementById("btnFah");
    let finalOutput = 0;
    let tempValue = 0;

    celsiusTemp.disabled = true;
    fahrenheitTemp.disabled = true;

    userInput.addEventListener("input", function (){
        tempValue = userInput.value.trim();
        // console.log(tempValue);

        if(tempValue !== ""){
            celsiusTemp.disabled = false;
            fahrenheitTemp.disabled = false;
        }else{
            celsiusTemp.disabled = true;
            fahrenheitTemp.disabled = true;
        }
    })

    function temperatureConversion () {
        if(!celsiusTemp || !fahrenheitTemp){
            console.error("buttons not there in code");
            return;
        }

        celsiusTemp.addEventListener("click", function() {
            finalOutput = Math.round((tempValue - 32) * 5 / 9);
            // console.log(finalOutput);
            showTemperatureValue("°C");
        })

        fahrenheitTemp.addEventListener("click", function() {
            finalOutput = Math.round((tempValue * 9 / 5) + 32);
            // console.log(finalOutput);
            showTemperatureValue("°F");
        })
    }

    function showTemperatureValue(unit){
        showTemp.innerHTML = `${finalOutput}${unit}`;
    }

    temperatureConversion();
});