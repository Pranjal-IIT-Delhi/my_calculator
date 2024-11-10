function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
    let display = document.getElementById("display");
    display.value = eval(display.value) / 100;
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        expression = expression.replace('^', '**').replace('π', Math.PI).replace('e', Math.E);
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
