let result = document.getElementById("result");
let buttons = document.querySelectorAll("button[value]");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        result.value += button.getAttribute("value");
    });
});
//Actions backsplash
document.addEventListener("keydown", function (e) {
    if (!isNaN(e.key) || ['+', '-', '*', '/'].includes(e.key)) {
        result.value += e.key;
    } else if (e.key === "Enter") {
        document.getElementById("equal").click();
    } else if (e.key === "Backspace") {
        result.value = result.value.slice(0, -1);
    }
});

//Equal
document.getElementById("equal").addEventListener("click", function () {
    try {
        result.value = eval(result.value);
    }
    catch {
        alert("Invalid Expressions");
    }
});
//Reset
document.getElementById("clear").addEventListener("click", function () {
    result.value = "";
});
//Square
document.getElementById("square").addEventListener("click", function () {
    try {
        let val = parseFloat(result.value);
        result.value = val * val;
    }
    catch {
        alert("Invalid Expressions");
    }

});
//Cube
document.getElementById("cube").addEventListener("click", function () {
    try {
        let val = parseFloat(result.value);
        result.value = val * val * val;

    }
    catch {
        alert("Invalid Expressions");
    }
});