function clearInput() {
    let calculatorInput = document.getElementById('calc-input');
    calculatorInput.value = '';
}

function addToInput(value) {
    let calculatorInput = document.getElementById('calc-input');

    if (value === '.' && calculatorInput.value.includes('.')) {
        return;
    }
    calculatorInput.value += value;
}

function backspace() {
    let calculatorInput = document.getElementById('calc-input');
    calculatorInput.value = calculatorInput.value.slice(0, -1);
}

function calculate() {
    let calculatorInput = document.getElementById('calc-input');
    calculatorInput.value = eval(calculatorInput.value)
}