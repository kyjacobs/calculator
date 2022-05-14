function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 == 0) {
        console.log("Nice try, but don't divide by 0.");
        return;
    }

    return num1 / num2;
}

function operate(equation) {

}

function calcInitialize() {
    const result = document.querySelector("#result");
    
    const resultContent = document.createElement('h2');
    resultContent.classList.add('content');
    resultContent.textContent = "0";

    result.append(resultContent);
}

window.onload = () => {
    calcInitialize();
}

