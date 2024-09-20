let word = prompt("Введите слово");
let arrayWord = Array.from(word); // переводим слово в массив
let reversArrayWord = Array.from(word).reverse(); // переделываем массив в обратном порядке

// Сравниваем исходный массив и перевернутый
let isPalindrome = true;
for (let i = 0; i < arrayWord.length; i++) {
    if (arrayWord[i] !== reversArrayWord[i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(`Слово ${word} является палиндромом`);
} else {
    console.log(`Слово ${word} не является палиндромом`);
}

