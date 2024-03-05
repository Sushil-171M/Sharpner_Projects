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

//---------------querySelector-----------------querySelectorAll---------

// Write the code as shown in the video below:
// Write answer to the questions asked below:

// 1. Implement the code as shown in the video.

// 2. Use id as query to select the basket heading and set its color to brown.

// 3. Change the background color of even fruit items to red and change their text color to white.

let mainheading = document.querySelector('#main-heading')
mainheading.style.textAlign = 'right'

let fruits1 = document.querySelector('.fruits')
  fruits1.style.backgroundColor = 'gray';
  fruits1.style.padding = '30px';
fruits1.style.margin = '30px';
fruits1.style.width = '50%';
fruits1.style.borderRadius = '10px';
//-----------------------------------------------------------------------
let basketheading = document.querySelector('#basket-heading')
basketheading.style.marginLeft = '30px'
basketheading.style.color = 'brown'

let fruits2 = document.querySelectorAll('.fruit')

for(let i=0;i<fruits2.length;i++){
   fruits2[i].style.padding = '10px'
   fruits2[i].style.margin = '10px'
   fruits2[i].style.borderRadius = '5px'
  if(i%2==0)
    fruits2[i].style.backgroundColor = 'lightgray'
  else{
     fruits2[i].style.backgroundColor = 'brown'
     fruits2[i].style.color = 'white'    
  }
 }


