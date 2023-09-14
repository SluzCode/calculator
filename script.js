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



window.addEventListener("keydown", (event) => {
    let display = screen.textContent;
    console.log(event.code.slice(-1));
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

