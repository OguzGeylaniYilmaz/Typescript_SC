
const string = document.getElementById("output");

let counter:number = 2;

do{
    if(string) {
        string.innerHTML += `${counter} <br>`
    }
    counter += 2;
} while(counter <= 20)