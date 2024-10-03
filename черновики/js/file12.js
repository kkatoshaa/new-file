function getStatus() {
  let text = "";
  let status = "";
  for (let i = 1; i <= 100; i++) {
    if (i <= 17) {
      status = "ребенок";
    } else if (i <= 30) {
      status = "Молодой";
    } else if (i <= 55) {
      status = "Зрелый";
    } else if (i <= 100) {
      status = "Старый";
    }
    text += `${i} - ${status}\n`;
  }
  return text;
}

console.log(getStatus());
