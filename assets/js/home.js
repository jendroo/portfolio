// const values shouldnt change
const header = document.querySelector('h1')
// let values can change
let header1 = document.querySelector('h1')

header .textContent = 'JavaScript Basics'

// Greet base on time
const date = new Date()
const hour = date.getHours()
let greeting;
//check conditions

if (hour >= 5 && hour < 12) {
    greeting = "Good Morning"
} else if (hour > 12 && hour < 18) {
    greeting = "Good Afternoon"
} else {
    greeting = "Good Evening"
}

const para = document.getElementById('greeting')

para.textContent = greeting