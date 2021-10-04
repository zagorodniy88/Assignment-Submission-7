// Used if statement and the variable "age" is global variable.
let age = document.getElementById("age");
let btn = document.getElementById("btn").onclick = function () {
    let localVariable = "Hello world";
    if (age.value < 18) {
        alert("You are too young");
    } else {
        alert("Welcom!!!")
    }
}

// Used a Date obj
function Day() {
    let TodayDate = new Date();
    let d = TodayDate.getDate();
    let m = TodayDate.getMonth()+1;
    let y = TodayDate.getFullYear();

    document.getElementById("res").innerHTML = d + "/" + m + "/" + y ;
}

Day();

// Intentionally call a local variable in global scope
console.log (localVariable);
