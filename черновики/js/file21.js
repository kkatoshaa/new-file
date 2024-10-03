function sumInput() {
let arr = [];
while (true) {
let num = prompt("Введите число", "");
 if (num === null || num === " " || Number.isNaN(+num)) {
break;
 }
arr.push(+num);
}
let sum = 0;
for (let number of arr) {
  sum = sum + number;
}
return sum;
}

alert(sumInput());