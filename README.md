# Guessing-game

A simple point-and-click game made with JavaScript.

## Content
* <a href="https://github.com/Reagan615/guessing-game/edit/main/README.md#game-introduction">Game introduction</a><br>
* <a href="https://github.com/Reagan615/guessing-game/edit/main/README.md#introduction-to-operation-instructions">Introduction to Operation Instructions</a><br>
* <a href="https://github.com/Reagan615/guessing-game/edit/main/README.md#part-of-the-code-display">Part of the code display</a><br>
* <a href="https://github.com/Reagan615/guessing-game/edit/main/README.md#demo">Demo</a><br>
* <a href="https://github.com/Reagan615/guessing-game/edit/main/README.md#reference-link">Reference link</a><br>
## Game introduction
In the specified time of 20 seconds, use 5 chances of entering numbers to guess the numbers 1-10 (including 1 and 10) randomly generated by the system, the system will prompt the relationship between the entered number and the answer after submitting the answer, Helps players narrow down the guessing scope. Guessing the answer correctly, running out of time, or running out of times will end the game, and you can restart the game with the Play Again button.

## Introduction to Operation Instructions
The following will introduce the three operation instructions that are mainly involved in creating the game using Javascript.
### 1. Use `Math.random()` to create an equation to get random numbers.
`Math.random()`：Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).

For example:<br>
<img src="assets/random.png" >

### 2. Use `setInterval` to create a 20-second countdown.
`setInterval()`：The setInterval() method calls a function at specified intervals (in milliseconds).The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.1 second = 1000 milliseconds.

For example:<br>
<img src="assets/countDown.png" >

### 3. Use `innerText` to give relevant prompt information
`InnerText`:Get the inner text of an element.

For example:<br>
<img src="assets/innerText.png" >

## Part of the code display
The code display in the game is mainly used to judge the relationship between the input number and the answer.<br>
<img src="assets/code example.png" ><br>

## Demo
### **If you are interested in this game:blush:，just click [here](https://reagan615.github.io/guessing-game/) to play.**<br>

## Reference link
* `Math.random()`:<a href="https://www.w3schools.com/js/js_random.asp"> Math.random()</a><br>
* `setInterval()`:<a href="https://www.w3schools.com/jsref/met_win_setinterval.asp"> setInterval()</a><br>
* `InnerText`:<a href="https://www.w3schools.com/jsref/prop_node_innertext.asp"> InnerText()</a><br>
<br>
<br>
<br>

<a href="#"><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></a>
<a href="#"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>


