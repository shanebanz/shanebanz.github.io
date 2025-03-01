function clearInput() {
    let calculatorInput = document.getElementById('calc-input');
    calculatorInput.value = '';
}

function addToInput(value) {
    let calculatorInput = document.getElementById('calc-input');

    if (value === '.' && calculatorInput.value.includes('.')) {
        return; // preprevent yung duplication ng '.' because realistically we can't have two consecutive dots on a calculator
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