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
let solution = null;
let operator = null;
let clearScreen = false;


window.addEventListener("keydown", (event) => {
    let display = screen.textContent;
    console.log(event.code);

    if (!isValidKeyInput(event.code)) {
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

function isValidKeyInput(input) {
    let output = input.includes("Digit") || input.includes("Numpad")
    return output;
}


// Button event listeners

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button2');

const digitButtons = document.querySelectorAll('.digit');

const operatorButtons = document.querySelectorAll('.operator');

const actionButtons = document.querySelectorAll('.action')

// we use the .forEach method to iterate through each button



digitButtons.forEach((button) => {

    button.addEventListener('click', () => {
        let display = screen.textContent;
        console.log(button.id);

        toScreen = button.id;
        if ((operator && input1) && clearScreen){
            screen.textContent = '';
            display = '';
            clearScreen = false;
        }

        if (screen.textContent.length > 12) {
            return
        }
        else if (toScreen == 'decimal') {
            if (!display.includes('.')) {
                screen.textContent = display + '.';
            }
        }

        else {
            screen.textContent = display + toScreen;
            console.log(screen.textContent.length);
        }
    });

    // button.addEventListener('click', function (e) {
    //     e.target.style.background = 'lightblue';
    // });
});


operatorButtons.forEach((button) => {

    
    button.addEventListener('click', () => {
        let display = screen.textContent;
        console.log(button.id);

            

if (display) {
            if (!operator) {
            operator = button.id;
            button.classList.add('active')
            // console.log(button.classList)
            }
            
            if (input1 == null) {
                input1 = +display;
                clearScreen = true;
            } 
    
            else if (input1) {
                // input2 = +display
            }
            
            if (input1&&input2) {
                solution = operate(input1, input2, operator);
                console.log(solution)
                screen.textContent = solution.toString();
                input1 = solution;
                input2 = null;
                operator = button.id;
                clearScreen = true;
                button.classList.remove('active');
            }
}

        console.log(input1)

    });
    // button.addEventListener('click', function (e) {
    //     e.target.style.background = 'lightblue';
    // });
});

actionButtons.forEach((button) => {

    
    button.addEventListener('click', () => {
        let display = screen.textContent;
        console.log(button.id);
        action = button.id;
        
        if (action=='ce') {
            screen.textContent = '';
            input1 = null;
            input2 = null;
            solution = null;
            operator = null;
            clearScreen = false;
            operatorButtons.forEach((button) => {
                button.classList.remove('active')
            })
        } 
        else if (action='c') {
            screen.textContent = '';
            operator = null;
        }

        // console.log(input1)

    });
    // button.addEventListener('click', function (e) {
    //     e.target.style.background = 'lightblue';
    // });
});



buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.id);
        console.log(button.classList[2]);
    });

    button.addEventListener('click', function (e) {
        console.log(e.target);
    });

    // button.addEventListener('click', function (e) {
    //     e.target.style.background = 'lightblue';
    // });
});
