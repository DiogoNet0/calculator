// Variables
const calcBtns = document.getElementById('calculator__buttons')
const displayResult = document.getElementById('display--result')
const displayCalc = document.getElementById('display--calculation')
let firstOp = ''
let secondOp = ''
let operator = ''
let equal = false
let opResult = ''

function add(a, b) {
  return Number(a) + Number(b)
}

function operate() {
  if (firstOp !== '' && operator !== '' && secondOp !== '') {
    switch (operator) {
      case 'addition':
        opResult = add(firstOp, secondOp)
        displayResult.textContent = opResult
        // After calculation, set firstOp to the result for chaining operations
        firstOp = opResult.toString()
        secondOp = ''
        operator = ''
        console.log(opResult)
        break
      default:
        console.log('Error')
    }
  }
}

function handleNumber(number) {
  if (operator === '') {
    firstOp += number
  } else {
    secondOp += number
  }
}

function handleOperation(operation) {
  if (operation === 'equals') {
    equal = true
    console.log(equal)
    operate()
  } else {
    operator = ''
    operator += operation
    console.log(operator)
  }
}

function updateDisplay() {
  if (secondOp === '') {
    displayCalc.textContent = firstOp
  } else {
    displayCalc.textContent = secondOp
  }
}

calcBtns.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn')) {
    const value = event.target.getAttribute('data-value')
    if (!isNaN(value)) {
      handleNumber(value)
    } else {
      handleOperation(value)
    }
    updateDisplay()
  }
})
