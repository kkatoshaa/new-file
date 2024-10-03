let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let ttr in obj) {
    if (typeof obj[ttr] == "number") {
      obj[ttr] *= 2;
    }
  }
}


multiplyNumeric(menu);

console.log(menu);

