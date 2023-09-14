function add(input1, input2) {
    return input1 + input2;
}

function subtract(input1, input2) {
    return input1 - input2;
}

function multiply(input1, input2) {
    return input1 * input2;
}

function divide(input1, input2) {
    return input1 / input2;
}

function operate(input1, input2, operator) {
    switch (operator) {
        case "+":
            return add(input1, input2);
            break;
        case "-":
            return subtract(input1, input2);
            break;
        case "*":
            return multiply(input1, input2);
            break;
        case "/":
            return divide(input1, input2);
            break;
        default:
            break;
    }
}

const keys = document.querySelectorAll('.key');
let toScreen = [];
const screen = document.querySelector('.screen');

let input1 = null;
let input2 = null;
let output = null;
let operator = null;


window.addEventListener("keydown", (event) => {
    let display = screen.textContent;
    console.log(event.code);
    
    if (!isValidinput(event.code)){
        return;
    }
    toScreen = event.code.slice(-1);
    if (screen.textContent.length > 12) {
        return
    }
    else {
        screen.textContent = display + toScreen;
        console.log(screen.textContent.length);
    }
}
)

function isValidinput(input){
   let output = input.includes("Digit")||input.includes("Numpad")
   return output;
}
