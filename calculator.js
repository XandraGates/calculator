var calculator = document.querySelectorAll(".numb");
var screen = document.getElementById("totalScreen");


for( var i = 0 ; i < calculator.length; i++)
calculator[i].addEventListener("click", function(){
  var buttonPressed = this.innerHTML;
  buttonpressed(buttonPressed);
});

document.addEventListener("keydown", function(event){
  if ("0123456789*+/-." .indexOf(event.key) > -1)
  buttonpressed(event.key);
  else {
    console.log(event.key);
    switch (event.key) {
      case "Backspace":
      var input = screen.value.split("");
      input.pop();
      screen.value = input.join("");
      break;
      case "Enter":
      getSum();
      break;
      case "Escape":
      clearScreen();
      break;
    }
  }
});


function buttonpressed(button){
  screen.value += button;
}

function clearScreen(){screen.value ="";}

var clear = document.getElementById("btnClear");
clear.addEventListener("click", clearScreen);


function getSum(){screen.value = eval(screen.value);}

var equal = document.getElementById("=");
equal.addEventListener("click", getSum);
