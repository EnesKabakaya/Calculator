let calculatorOut = document.querySelector('.calculator-out');
let calculatorButtons = document.querySelectorAll('button');

calculatorButtons.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id == 'clear') {
            calculatorOut.value = '';
        }
        else if (calculatorOut.value != '' && item.id == 'equals') {
            calculatorOut.value = eval(calculatorOut.value);
        }
        else if (calculatorOut.value == '' && item.id == 'equals') {
            calculatorOut.value = 'Enter number';
            setTimeout(() => {
                calculatorOut.value = '';
            }, 3000);
        }
        else if (item.id == "backspace") {
            var calculatorDisplay = calculatorOut.value.toString();
            calculatorOut.value = calculatorDisplay.substr(0, calculatorDisplay.length - 1);
        }
        else {
            calculatorOut.value += item.id;
        }
    })
})