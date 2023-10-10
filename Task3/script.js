function appendCharacter(char) {
    const display = document.querySelector('input[name="display"]');
    display.value += char;
}

function clearDisplay() {
    const display = document.querySelector('input[name="display"]');
    display.value = '';
}

function deleteLastCharacter() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.querySelector('input[name="display"]');
    const result = eval(display.value);
    display.value = result;
}
let isNewCalculation = false;

function appendCharacter(char) {
    const display = document.querySelector('input[name="display"]');
    if (isNewCalculation) {
        display.value = '';
        isNewCalculation = false;
    }
    display.value += char;
}

function clearDisplay() {
    const display = document.querySelector('input[name="display"]');
    display.value = '';
}

function deleteLastCharacter() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.querySelector('input[name="display"]');
    const result = eval(display.value);
    display.value = result;
    isNewCalculation = true;
}
