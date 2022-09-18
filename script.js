let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let zero = document.querySelector('#zero')
let decimal = document.querySelector('#decimal')

let add = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')
let equal = document.querySelector('#equal')

let clear = document.querySelector('#clear')
let delete1 = document.querySelector('#delete1')
let currentScreen = document.querySelector('.screen-current')
let lastScreen = document.querySelector('.screen-last')
let currentOperation = document.querySelector('#currentOperationScreen')

let currentScreenValue = 0
let lastScreenValue = 0
let operand = ""

/* let currentValue = function enteredValues (a,b,c) {
    a = 
} */

one.addEventListener("click", printScreenCurrent1)
function printScreenCurrent1() {
    currentScreen.innerHTML += 1
   
}

two.addEventListener("click", printScreenCurrent2)
function printScreenCurrent2() {
    currentScreen.textContent += 2
}

three.addEventListener("click", printScreenCurrent3)
function printScreenCurrent3() {
    currentScreen.textContent += 3
}

four.addEventListener("click", printScreenCurrent4)
function printScreenCurrent4() {
    currentScreen.textContent += 4
}

five.addEventListener("click", printScreenCurrent5)
function printScreenCurrent5() {
    currentScreen.textContent += 5
}

six.addEventListener("click", printScreenCurrent6)
function printScreenCurrent6() {
    currentScreen.textContent += 6
}

seven.addEventListener("click", printScreenCurrent7)
function printScreenCurrent7() {
    currentScreen.textContent += 7
}

eight.addEventListener("click", printScreenCurrent8)
function printScreenCurrent8() {
    currentScreen.textContent += 8
}

nine.addEventListener("click", printScreenCurrent9)
function printScreenCurrent9() {
    currentScreen.textContent += 9
}

zero.addEventListener("click", printScreenCurrent0)
function printScreenCurrent0() {
    currentScreen.textContent += 0
}

decimal.addEventListener("click", printScreenCurrentDecimal)
function printScreenCurrentDecimal() {
    currentScreen.textContent += "."
    //decimal.removeEventListener()
}

// ADD
add.addEventListener("click", function () {
    currentScreenValue = Number(currentScreen.textContent)
    lastScreen.textContent = currentScreenValue + "+"
    operand = '+'
    currentScreen.textContent = 0
    console.log(`currentScreenValue is ${currentScreenValue}`)
})
add.addEventListener("click", function () {
    currentScreen.textContent = Number(0 + currentScreen.textContent)
})

// SUBTRACT
/* subtract.addEventListener("click", printScreenLastSubtract)
function printScreenLastSubtract() {
    lastScreen.textContent += "-";
} */
subtract.addEventListener("click", function () {
    currentScreenValue = Number(currentScreen.textContent)
    lastScreen.textContent = currentScreenValue + "-"
    operand = '-'
    currentScreen.textContent = 0
    console.log(`currentScreenValue is ${currentScreenValue}`)
})
add.addEventListener("click", function () {
    currentScreen.textContent = Number(0 + currentScreen.textContent)
})

// DIVIDE
/* divide.addEventListener("click", printScreenLastDivide)
function printScreenLastDivide() {
    lastScreen.textContent += "÷";
} */
divide.addEventListener("click", function () {
    currentScreenValue = Number(currentScreen.textContent)
    lastScreen.textContent = currentScreenValue + "÷"
    operand = '÷'
    currentScreen.textContent = 0
    console.log(`currentScreenValue is ${currentScreenValue}`)
})
add.addEventListener("click", function () {
    currentScreen.textContent = Number(0 + currentScreen.textContent)
})

// MULTIPLY
/* multiply.addEventListener("click", printScreenLastMultiply)
function printScreenLastMultiply() {
    lastScreen.textContent += "×";
} */
multiply.addEventListener("click", function () {
    currentScreenValue = Number(currentScreen.textContent)
    lastScreen.textContent = currentScreenValue + "×"
    operand = '×'
    currentScreen.textContent = 0
    console.log(`currentScreenValue is ${currentScreenValue}`)
})
add.addEventListener("click", function () {
    currentScreen.textContent = Number(0 + currentScreen.textContent)
})

// EQUAL
equal.addEventListener("click", function () {
    secondValue = Number(0 + currentScreen.textContent)
    lastScreen.textContent += `${secondValue}= `
    operate()
    currentScreen.textContent = result
    console.log(`the secondValue is ${secondValue}`)
    console.log(`the result is ${result}`)
    currentScreenValue = result 
    // lastScreen.textContent += "=";
    //currentScreen.textContent = result
})

// CLEAR
clear.addEventListener("click", clearScreen)
function clearScreen() {
    document.querySelector(".screen-last").innerHTML = ""
    document.querySelector(".screen-current").innerHTML = ""
    lastScreenValue = 0
    currentScreenValue = 0
    operand = ""
    console.clear()
}

//OPERATIONS
let multiplyCalculation = function (a, b) {
    result = currentScreenValue * secondValue
    result = Math.round((result + Number.EPSILON) * 10000000) / 10000000
    return result;
}

let divideCalculation = function (a, b) {
    result = currentScreenValue / secondValue;
    result = Math.round((result + Number.EPSILON) * 10000000) / 10000000
    return result;
}

let addCalculation = function (a, b) {
    result = currentScreenValue + secondValue;
    result = Math.round((result + Number.EPSILON) * 10000000) / 10000000
    return result;
}

let subtractCalculation = function (a, b) {
    result = currentScreenValue - secondValue;
    result = Math.round((result + Number.EPSILON) * 10000000) / 10000000
    return result;
}

let operate = function () {
    if (operand == '+') {
        addCalculation(currentScreenValue, secondValue)
    } else if (operand == '-') {
        subtractCalculation(currentScreenValue, secondValue)
    } else if (operand == '×') {
        multiplyCalculation(currentScreenValue, secondValue)
    } else  {
        divideCalculation(currentScreenValue, secondValue)
    } 
}



