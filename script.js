//DOM
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

let currentScreenValue = null
let lastScreenValue = null
let firstOperand = ""
let shouldResetScreen = false
let secondOperand = ''


//EventListeners
one.addEventListener("click", printScreenCurrent1)
function printScreenCurrent1() {
    currentScreen.textContent += 1
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
    firstOperand = '+'
    currentScreen.textContent = ""
    console.log(`currentScreenValue is ${currentScreenValue}`)
})

// SUBTRACT
subtract.addEventListener("click", function () {
    currentScreenValue = Number(currentScreen.textContent)
    lastScreen.textContent = currentScreenValue + "-"
    firstOperand = '-'
    currentScreen.textContent = ""
    console.log(`currentScreenValue is ${currentScreenValue}`)
})


// DIVIDE
divide.addEventListener("click", function () {
    currentScreenValue = Number(currentScreen.textContent)
    lastScreen.textContent = currentScreenValue + "÷"
    firstOperand = '÷'
    currentScreen.textContent = ""
    console.log(`currentScreenValue is ${currentScreenValue}`)
})

// MULTIPLY
multiply.addEventListener("click", function () {
    currentScreenValue = Number(currentScreen.textContent)
    lastScreen.textContent = currentScreenValue + "×"
    firstOperand = '×'
    currentScreen.textContent = ""
    console.log(`currentScreenValue is ${currentScreenValue}`)
})


// EQUAL
equal.addEventListener("click", onEqual)
function onEqual () {
    secondValue = Number(currentScreen.textContent)
    lastScreen.textContent += `${secondValue}= `
    operate()
    currentScreen.textContent = result
    console.log(`the secondValue is ${secondValue}`)
    console.log(`the result is ${result}`)
    currentScreenValue = result 
}

// CLEAR
clear.addEventListener("click", clearScreen)
function clearScreen() {
    document.querySelector(".screen-last").innerHTML = ""
    document.querySelector(".screen-current").innerHTML = ""
    lastScreenValue = 0
    currentScreenValue = 0
    firstOperand = ""
    secondOperand = ""
    console.clear()
}

//DELETE
delete1.addEventListener("click", function () {
let deletedString = currentScreen.textContent.slice(0, -1)
currentScreen.textContent = deletedString
})

//OPERATIONS
let multiplyCalculation = function () {
    result = currentScreenValue * secondValue
    result = Math.round((result + Number.EPSILON) * 1000000) / 1000000
    return result;
}

let divideCalculation = function () {
    result = currentScreenValue / secondValue;
    result = Math.round((result + Number.EPSILON) * 1000000) / 1000000
    return result;
}

let addCalculation = function () {
    result = currentScreenValue + secondValue;
    result = Math.round((result + Number.EPSILON) * 1000000) / 1000000
    return result;
}

let subtractCalculation = function () {
    result = currentScreenValue - secondValue;
    result = Math.round((result + Number.EPSILON) * 1000000) / 1000000
    return result;
}

let operate = function () {
    //if (typeof currentScreenValue === 'number' && typeof secondValue === 'number' && typeof operand === 'string') {
        if (firstOperand == '+') {
            addCalculation(currentScreenValue, secondValue)
        } else if (firstOperand == '-') {
            subtractCalculation(currentScreenValue, secondValue)
        } else if (firstOperand == '×') {
            multiplyCalculation(currentScreenValue, secondValue)
        } else  {
            divideCalculation(currentScreenValue, secondValue)
        } 
    //}
}

/* function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
  }

  function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOperand = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
      operate(currentOperation, firstOperand, secondOperand)
    )
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
  } */



