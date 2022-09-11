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

let add = document.querySelector('#add')
let subtract = document.querySelector('#subtract')
let multiply = document.querySelector('#multiply')
let divide = document.querySelector('#divide')
let equal = document.querySelector('#equal')

let clear = document.querySelector('#clear')
let delete1 = document.querySelector('#delete1')
let currentScreen = document.querySelector('.screen-current')
let lastScreen = document.querySelector('.screen-last')

let currentValue = lastScreen.textContent

one.addEventListener("click", printScreenCurrent1)
function printScreenCurrent1 () {
    currentScreen.textContent += 1
    lastScreen.textContent += 1
}


two.addEventListener("click", printScreenCurrent2)
function printScreenCurrent2 () {
    currentScreen.textContent = 2
    lastScreen.textContent += 2 
}

three.addEventListener("click", printScreenCurrent3)
function printScreenCurrent3 () {
    currentScreen.textContent = 3
    lastScreen.textContent += 3
}

four.addEventListener("click", printScreenCurrent4)
function printScreenCurrent4 () {
    currentScreen.textContent = 4
    lastScreen.textContent += 4
}

five.addEventListener("click", printScreenCurrent5)
function printScreenCurrent5 () {
    currentScreen.textContent = 5
    lastScreen.textContent += 5
}

six.addEventListener("click", printScreenCurrent6)
function printScreenCurrent6 () {
    currentScreen.textContent = 6
    lastScreen.textContent += 6 
}

seven.addEventListener("click", printScreenCurrent7)
function printScreenCurrent7 () {
    currentScreen.textContent = 7
    lastScreen.textContent += 7 
}

eight.addEventListener("click", printScreenCurrent8)
function printScreenCurrent8 () {
    currentScreen.textContent = 8
    lastScreen.textContent += 8 
}

nine.addEventListener("click", printScreenCurrent9)
function printScreenCurrent9 () {
    currentScreen.textContent = 9
    lastScreen.textContent += 9 
}

zero.addEventListener("click", printScreenCurrent0)
function printScreenCurrent0 () {
    currentScreen.textContent = 0
    lastScreen.textContent += 0 
}

// ADD
add.addEventListener("click", printScreenLastAdd)
function printScreenLastAdd () {
    lastScreen.textContent += "+";
}

// SUBTRACT
subtract.addEventListener("click", printScreenLastSubtract)
function printScreenLastSubtract () {
    lastScreen.textContent += "-";
}

// DIVIDE
divide.addEventListener("click", printScreenLastDivide)
function printScreenLastDivide () {
    lastScreen.textContent += "÷";
}

// MULTIPLY
multiply.addEventListener("click", printScreenLastMultiply)
function printScreenLastMultiply () {
    lastScreen.textContent += "×";
}

// EQUAL
multiply.addEventListener("click", printScreenLastEqual)
function printScreenLastEqual () {
    lastScreen.textContent += "=";
}

// CLEAR
clear.addEventListener("click", clearScreen)
function clearScreen () {
    document.querySelector(".screen-last").innerHTML = ""
    document.querySelector(".screen-current").innerHTML = ""
}

