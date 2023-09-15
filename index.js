// 1
const showMessage = () => {
    alert("Hello World!");
};  
const mybutton = document.getElementById('myButton');
mybutton.addEventListener('click', showMessage);
// 2    
const result = document.querySelector("#guessResult");
let user;
let num;
function checkGuess() {
    num = Math.floor(Math.random() * 10) + 1;
    user = Number(document.querySelector("#guessField").value);

    if (user < 1 || user > 10) {
        result.textContent = "Введіть число від 1 до 10";
    } else if (user === num) {
        result.textContent = "Ви вгадали!";
    } else {
        result.textContent = "Спробуйте ще раз.";
    }
}
const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", checkGuess);
// 3
let clickCount = 0; 
const clickCountElement = document.querySelector("#clickCount");

const Clicks = () => {
    clickCount++;
    clickCountElement.textContent = `${clickCount} разів`;
};
document.addEventListener("click", Clicks);
// 4
const applyCallbackToElements = (arr, callback) => {
    const resultnumbers = arr.map(callback);
    return resultnumbers;
}

const numbers = [1, 2, 3, 4, 5];

const kvadrat = x => x * x;

const kvadratNumbers = applyCallbackToElements(numbers, kvadrat);
console.log(kvadratNumbers); 
// 5
const calculateDiscountedPrice = (originalPrice, discountPerc) => {
    if (originalPrice < 0 || discountPerc < 0 || discountPerc > 100) {
        return "Некоректна скидка та ціна";
    }
    const discountAmount = (originalPrice * discountPerc) / 100;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
};

const originalPrice = 1000;
const discountPerc = 20; 

const discountedPrice = calculateDiscountedPrice(originalPrice, discountPerc);
console.log(`Дисконтна ціна: ${discountedPrice}`);