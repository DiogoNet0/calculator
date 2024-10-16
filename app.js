// Variables
const calcBtns = document.getElementById('calculator__buttons')
const displayResult = document.getElementById('display--result')
const displayCalc = document.getElementById('display--calculation')

let firstOp = ''
let secondOp = ''
let operator = ''
let opResult = ''

// Functions for the mathematical operations
function add(a, b) {
  return a + b
}

// Handle numbers and operations
function handleNumber(number) {
  if (operator === '') {
    firstOp += number
  } else {
    secondOp += number
  }
}

function handleOperation(operation) {
  if (operation === 'equals') {
    operate()
  } else {
    operator = ''
    operator += operation
  }
}

// Update display
function updateDisplay() {
  if (secondOp === '') {
    displayCalc.textContent = firstOp
  } else {
    displayCalc.textContent = secondOp
  }
}

// Event listeners
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

// Decides what operation to execute
function operate() {
  if (firstOp !== '' && operator !== '' && secondOp !== '') {
    switch (operator) {
      case 'addiction':
        opResult = add(firstOp, secondOp)
        console.log(opResult)
        break
      default:
        console.log('Error')
    }
  }
}
