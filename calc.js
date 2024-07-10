const label=document.getElementById('label');

const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 =document.getElementById('nine');
const btn0 = document.getElementById('zero');
const btndev =document.getElementById('dev');
const btnmul = document.getElementById('mult');
const btnplus= document.getElementById('plus');
const btnmin = document.getElementById('min');
const btneql= document.getElementById('eql');
const resett=document.getElementById('reset');
let numeq;





// Event handler for numeric buttons (0-9)
function handleNumericButtonClick(value) {
    // Get the current label text
    const currentText = label.textContent;

    // Append the clicked value to the existing text
    label.textContent = currentText + value;
}
function reset() {
    label.textContent = '';
}
function plus(equation) {
    if (equation.includes('+')) {
        const [num1, num2] = equation.split('+').map(Number);
        label.textContent = `${num1 + num2}`;
    }
    if (equation.includes('/')) {
        const [num1, num2] = equation.split('/').map(Number);
        label.textContent = `${num1 / num2}`;
    }
    if (equation.includes('x')) {
        const [num1, num2] = equation.split('x').map(Number);
        label.textContent = `${num1 * num2}`;
    }
    if (equation.includes('-')) {
        const [num1, num2] = equation.split('-').map(Number);
        label.textContent = `${num1 - num2}`;
    }
}

// Example usage:
btn0.addEventListener('click', () => handleNumericButtonClick('0'));
btn1.addEventListener('click', () => handleNumericButtonClick('1'));
btn2.addEventListener('click', () => handleNumericButtonClick('2'));
btn3.addEventListener('click', () => handleNumericButtonClick('3'));
btn4.addEventListener('click', () => handleNumericButtonClick('4'));
btn5.addEventListener('click', () => handleNumericButtonClick('5'));
btn6.addEventListener('click', () => handleNumericButtonClick('6'));
btn7.addEventListener('click', () => handleNumericButtonClick('7'));
btn8.addEventListener('click', () => handleNumericButtonClick('8'));
btn9.addEventListener('click', () => handleNumericButtonClick('9'));
btndev.addEventListener('click', () => handleNumericButtonClick('/'));
btnmul.addEventListener('click', () => handleNumericButtonClick('x'));
btnmin.addEventListener('click', () => handleNumericButtonClick('-'));
btnplus.addEventListener('click', () => handleNumericButtonClick('+'));
btneql.addEventListener('click', () => plus(label.textContent));
resett.addEventListener('click', () => reset());
// ... Repeat for other numeric buttons












