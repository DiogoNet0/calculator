const btnZero = document.getElementById('btn__key--zero')
const btnOne = document.getElementById('btn__key--one')
const btnTwo = document.getElementById('btn__key--two')
const btnThree = document.getElementById('btn__key--three')
const btnFour = document.getElementById('btn__key--four')
const btnFive = document.getElementById('btn__key--five')
const btnSix = document.getElementById('btn__key--six')
const btnSeven = document.getElementById('btn__key--seven')
const btnEight = document.getElementById('btn__key--eight')
const btnNine = document.getElementById('btn__key--nine')
const btnSub = document.getElementById('btn__key--subtraction')
const btnMul = document.getElementById('btn__key--multiplication')
const btnAdd = document.getElementById('btn__key--addiction')
const btnDiv = document.getElementById('btn__key--division')
const btnLog = document.getElementById('btn__key--log')
const btnPercent = document.getElementById('btn__key--percentage')
const btnAC = document.getElementById('btn__key--ac')
const btnDec = document.getElementById('btn__key--decimal')
const btnResult = document.getElementById('btn__key--result')
const displayResult = document.getElementById('display--result')

let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let result = 99

function helloWorld() {
  console.log('Hello world')
}

// Operations
// Addiction
function add(a, b) {
  return a + b
}

// Substration
function sub(a, b) {
  return a - b
}

// Multiplication
function mul(a, b) {
  return a * b
}

// Division
function div(a, b) {
  return a / b
}

// Percentage
function per(a, b) {
  return (a * b) / 100
}

console.log(per(10, 2))
// Log
function log(a) {
  return Math.log(a)
}
