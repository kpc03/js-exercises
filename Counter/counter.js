let count = 0;

// creating a function to show the value in label
function updateLabelText(){
    const label = document.getElementById("showLabel");
    if(label){
        label.innerHTML = count;
    }else{
        console.error("label is not found");
    }
}

// combining both the buttons under one function to make it less redundant and also easy to debug.
function handleCounterButtons(){
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");

    if(!increment || !decrement){
        console.error("Buttons are not present in the code");
        return;
    }

    increment.addEventListener("click", function(){
        count++;
        updateLabelText();
    })

    decrement.addEventListener("click", function(){
        count--;
        updateLabelText();
    })
}

handleCounterButtons();