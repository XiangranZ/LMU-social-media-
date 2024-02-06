function add(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}

function lazyGuy() {
  var result = "";
  for (var i = 1; i <= 200; i++) {
    result = result + "<p>I'm lazy number: " + i + "</p>";
  }
  return result;
}

document.getElementById("app").innerHTML = "Subtraction: " + subtraction(10, 5) + "<br>";
document.getElementById("app").innerHTML += "Multiplication: " + multiplication(10, 5) + "<br>";
document.getElementById("app").innerHTML += "Division: " + division(10, 5)+ "<br>";
  
