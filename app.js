// Variables

let firstOp = ''
let secondOp = ''
let operator = ''
let equal = false
let opResult = ''

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const acButton = document.getElementById('btn__key--ac')
const equalButton = document.getElementById('btn__key--result')
const dotButton = document.getElementById('btn__key--decimal')
const displayResult = document.getElementById('display--result')
const displayCalc = document.getElementById('display--calculation')

function add(a, b) {
  return Number(a) + Number(b)
}

function sub(a, b) {
  return Number(a) - Number(b)
}

function mul(a, b) {
  return Number(a) * Number(b)
}

function div(a, b) {
  if (a === 0 || b === 0) {
    return 'Invalid Operation'
  } else {
    return Number(a) / Number(b)
  }
}
// function operate() {
//   if (firstOp !== '' && operator !== '' && secondOp !== '') {
//     switch (operator) {
//       case 'addition':
//         opResult = add(firstOp, secondOp)
//         displayResult.textContent = opResult
//         // After calculation, set firstOp to the result for chaining operations
//         firstOp = opResult.toString()
//         secondOp = ''
//         operator = ''
//         console.log(opResult)
//         break
//       default:
//         console.log('Error')
//     }
//   }
// }

// function handleNumber(number) {
//   if (operator === '') {
//     firstOp += number
//   } else {
//     secondOp += number
//   }
// }
//
// function handleOperation(operation) {
//   if (operation === 'equals') {
//     equal = true
//     console.log(equal)
//     operate()
//   } else {
//     operator = ''
//     operator += operation
//     console.log(operator)
//   }
// }
//
// function updateDisplay() {
//   if (secondOp === '') {
//     displayCalc.textContent = firstOp
//   } else {
//     displayCalc.textContent = secondOp
//   }
// }
//
// calcBtns.addEventListener('click', (event) => {
//   if (event.target.classList.contains('btn')) {
//     const value = event.target.getAttribute('data-value')
//     if (!isNaN(value)) {
//       handleNumber(value)
//     } else {
//       handleOperation(value)
//     }
//     updateDisplay()
//   }
// })
