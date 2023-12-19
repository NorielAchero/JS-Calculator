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

document.addEventListener('keydown', function(event) {

    if (event.keyCode === 48 || event.keyCode === 96) {
      document.getElementById('0').click();
    }
    else if(event.keyCode === 49 || event.keyCode === 97) {
        document.getElementById('1').click();
    }
    else if(event.keyCode === 50 || event.keyCode === 98) {
        document.getElementById('2').click();
    }
    else if(event.keyCode === 51 || event.keyCode === 99) {
        document.getElementById('3').click();
    }
    else if(event.keyCode === 52 || event.keyCode === 100) {
        document.getElementById('4').click();
    }
    else if(event.keyCode === 53 || event.keyCode === 101) {
        document.getElementById('5').click();
    }
    else if(event.keyCode === 54 || event.keyCode === 102) {
        document.getElementById('6').click();
    }
    else if(event.keyCode === 55 || event.keyCode === 103) {
        document.getElementById('7').click();
    }
    else if(event.keyCode === 56 || event.keyCode === 104) {
        document.getElementById('8').click();
    }
    else if(event.keyCode === 57 || event.keyCode === 105) {
        document.getElementById('9').click();
    }
    else if(event.keyCode === 110) {
        document.getElementById('.').click();
    }
    else if(event.keyCode === 107) {
        document.getElementById('+').click();
    }
    else if(event.keyCode === 109) {
        document.getElementById('-').click();
    }
    else if(event.keyCode === 106) {
        document.getElementById('*').click();
    }
    else if(event.keyCode === 111) {
        document.getElementById('/').click();
    }
    else if(event.keyCode === 13) {
        document.getElementById('enter').click();
    }
    else if(event.keyCode === 8) {
        document.getElementById('clear').click();
    }
  })