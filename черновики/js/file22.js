/* function sum(a,b) {
return a*b
}
console.log(sum(2,2)) */

/* 
function sayHi(name, secondName, age) {
return `Привет ${name} ${secondName} с возрастом ${age} лет`;}
alert(sayHi("Иван", "Петров", "17")); */

/* function male (pol) {
    if ((pol == "M")) {
      return "Ваш пол мужской";
    } else if ((pol == "F")) return "Ваш пол женский";
    else {
      return "Ваш пол не определен";
    }
}
console.log( male('F') ) */

/* function hreg (phrase) {
  let textSplit = phrase.split(". ");
  let firstWord = [];
  for (let stroka of textSplit) {
firstWord.push(stroka.split(" ")[0]);
  }
  return firstWord.join(", ")
}
console.log(hreg(
  "Важно писать универсальный код, чтобы избежать ошибок. Код такого типа может работать с массивами любой длины и избегать лишних повторений. Чтобы реализовать масштабируемые решения, следует использовать функции, в которые будет включена логика замены."
)) */

/*   function num (number){
if (number % 2 == 0) {
	return true;
} else {
	return false;
}
  }
console.log(num(2));
   */

/* function num(numbers) {
  let fiveNum = []
  for (let number of numbers) {
    if (number % 5 == 0) 
      fiveNum.push(number)
     }
     return fiveNum
}
console.log(num([1, 2, 5, 12, 15, 21])); */

/* function getMonth () {
  const months = [
    'Январь',
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];
  const userInput = +(prompt("Введите номер месяца"));
  return `Месяц под номером ${userInput} - это ${month[userInput -1]}`;
} */
