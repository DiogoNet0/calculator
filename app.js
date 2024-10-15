// Variables
const calcBtns = document.getElementById('calculator__buttons')
const displayResult = document.getElementById('display--result')
const displayCalc = document.getElementById('display--calculation')

let firstOp = ''
let secondOp = ''
let operator = ''
let opResult = ''

// Numbers and operator handlers

function handleNumber(number) {
  if (operator === '') {
    firstOp += number
  } else {
    secondOp += number
  }
}

function handleOperation(operation) {
  operator = ''
  operator += operation
  console.log(operator)
}

// switch (operator) {
//   case '+':
//     console.log(firstOp + secondOp)
//     break
//   case '-':
//     console.log(firstOp - secondOp)
//     break
//   case '/':
//     console.log(firstOp / secondOp)
//     break
//   case '*':
//     console.log(firstOp * secondOp)
//     break
//
//   default:
//     console.log('error')
//     break
// }

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
