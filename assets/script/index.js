
//Add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

//Get HTML element by id
function getElement(selector, parent = docunment) {
    return parent.getElementById(selector);
} 

//select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const form = select('form');
const numberOne = select('.number-one');
const btn = select('.get-result');
const output = select('.output p'); 
const reset = select('.button');
const remind = select('.remind span')



let random = Math.round(Math.random()*10);
console.log(random); 

const second = select('.second');
let i = 20;

 // 定时器 每隔一秒变化一次（1000ms = 1s）
 let t = setInterval(countDown, 1000);

 function countDown() {
         console.log(i);
         second.innerHTML = i + 's';

         // 20 秒倒计时结束
         if (i === 0) {
            clearInterval(t);
             btn.setAttribute("disabled", true);
             btn.style.backgroundColor = "#7d87aa";
             btn.style.color = "#fff";
             btn.style.cursor = "not-allowed";
         }
         i--;
}

function isNumber(str) {
    let input = str.trim();

    if(input.length > 0 && !isNaN(input)) 
        return true;

    return false;  
}



onEvent('click', btn, function() {
    let a = numberOne.value.trim();
    let b = remind.innerText;
    console.log(b);
    if(b > 0) {
        remind.innerText--;
    } else {
        btn.setAttribute("disabled", true);
        btn.style.backgroundColor = "#7d87aa";
        btn.style.color = "#fff";
        btn.style.cursor = "not-allowed"; 
    };
    
        if(isNumber(a)) {
            if(a > random) {
                output.innerText = 'Your number is bigger,enter 1-10';
                 
            } else if (a < random) {
                output.innerText = 'Your number is smaller,enter 1-10'; 
            } else {
                output.innerText = 'correct,good job';
                clearInterval(t);
                btn.setAttribute("disabled", true);
                btn.style.backgroundColor = "#7d87aa";
                btn.style.color = "#fff";
                btn.style.cursor = "not-allowed"; 
            };  
        } else {
            output.innerText = 'Please, enter valid numbers';
        }
        if(remind.innerText === 0) {
            btn.setAttribute("disabled", true);
                btn.style.backgroundColor = "#7d87aa";
                btn.style.color = "#fff";
                btn.style.cursor = "not-allowed";
        }
}); 



onEvent('click', reset, function() {
    numberOne.value = '';
    output.innerText = '';
    location.reload();
    /* let random = Math.round(Math.random()*10);
    i = 20;
    setInterval(countDown, 1000); */

  
})





