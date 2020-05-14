var numberClicked = false;
function add(char) {
    if(numberClicked == false){
        if(isNaN(char) == true){
        }
        else {
            document.getElementById('display').value += char;
        }
    }
    else {
        document.getElementById('display').value += char;
    }

    if(isNaN(char) == true) {
        numberClicked = false;
        not()
    }
    else {
        numberClicked = true;
    }
}
function calculate() {
    var display = document.getElementById('display');
    var resurt = eval(display.value);
    document.getElementById('result').value = resurt;
}
function reset() {
    document.getElementById('display').value = "";
    document.getElementById('resurt').value = "";
}
function not() {
    alert("다시 입력해 주세요")
}