let who = prompt("Кто там", "");

if (who == "Админ") {
let parol = prompt("Пароль?");
if (parol == "Я главный") 
    alert("Здравствуйте");
else 
alert ("Неверный пароль")}

else if (who == "" || who === null) {
alert("Отменено")}

else {
alert ("Я вас не знаю")
}