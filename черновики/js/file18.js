let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0; 
  for (let key in salaries) {
    alert(salaries[key]);
    sum = sum + salaries[key]
  }
  console.log(sum)


