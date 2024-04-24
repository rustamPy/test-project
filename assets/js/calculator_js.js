const display = document.getElementById('display');
let calculated = false;
let str = '';

function addToView(character) {
    if (calculated || display.value === 'Error') {
        clearView();
    }
    calculated = false;
    display.value += character;
}

function clearView() {
    display.value = '';
    str = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (display.value) {
            if (!calculated) {
            str += display.value;}
            display.value = eval(display.value);
            if (!calculated) {
            str += `=${display.value}`;}
            calculated = true;
        }
    } catch (error) {
        display.value = 'Error';
        str = '';
    }
}

const history = document.getElementById('history');
let order = 1;

function saveInHistory() {
    if (str) {
        history.value += `${order}) ${str}\n`;
        order++;
        // Reset str for the next calculation
        str = '';
    }
}

function clearHistory() {
    if (history) {
        history.value = '';
        order = 1;
    }
}