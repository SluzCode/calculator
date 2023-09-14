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

window.addEventListener("keydown", (event) => {
  console.log(event.code.slice(-1));}
  )

const screen = document.querySelector('.screen');