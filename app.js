# app.js

// ------getElementById--------------------------

// Write your code below:

 var header = document.getElementById('main-heading')
 header.textContent = 'Fruit World'
header.style.color = 'orange'
var header2 = document.getElementById('header')
header2.style.backgroundColor= 'green'
header2.style.borderBottom = '5px solid orange'
var header3 = document.getElementById('basket-heading')
header3.style.color= 'green'
var header4 = document.getElementById('thanks')
header4.innerHTML= '<p>Please visit us again</p>'


// ----------getElementsByClassName---(return collection of HTML)-------------------

// Write your code below:

//1. Make the 3rd element in the list have yellow background color.
// 2. Make all the elements in the list have bold font.

var fruit = document.getElementsByClassName('fruit')
console.log(fruit)
fruit[2].style.backgroundColor = 'yellow'

for(let i= 0;i<fruit.length;i++)
   fruit[i].style.fontWeight = 'bold'

// ---------------getElementsByTagName----(return collection of HTML)---------------

// Write your code below:

// 1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.

// 2. Make all the "li" tags italic.
var fruits = document.getElementsByTagName('li')

fruits[4].style.color = 'blue'

for(let i=0;i<fruits.length;i++)
   fruits[i].style.fontStyle = 'italic'


