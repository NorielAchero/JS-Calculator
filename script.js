let screenValue = "";

function screenProcessing(value){

    if(value === "clear"){
        screenValue = "";
    }
    else if(value === "calculate"){
        screenValue = eval(screenValue);
    }
    else{
        screenValue += value;
    }

    var text = document.getElementById("result");
    text.value = screenValue;

}

