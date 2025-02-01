console.log("Hello I am making a calculator")


let display = document.getElementById("screenNum")
// function addNumber(mumber, result) {
//     let addNumber1 = document.getElementsByClassName("buttons-2")

// }
function appendNumber(number) {
    display.value += number;
}


function appendOperator(operator) {
    let lastChar = display.value.slice(-1)
    if (['+', '-', '*', '/'].includes(lastChar)) return;
    display.value += operator;
}

function clearDisplay() {
    display.value = ""
}

function calculateResult() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
}