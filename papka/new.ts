class User {
    name;
     constructor(_name:string) {
        this.name = _name;
     }
}

const alex : User = new User('Alex');
const header = document.getElementById('header');
header.innerHTML = "Привет " + alex.name;