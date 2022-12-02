let output = document.getElementById("input");

function numbers(num) {
  output.value += num;
}

function Clearresult() {
  output.value = " ";
}

function equal() {
  let output = document.getElementById("input");
  output.value = eval(output.value);
}

function rad() {
    input.value = input.value * (Math.PI / 180);
  }

function deg() {
   input.value =input.value * (180 / Math.PI);
  }

function pi() {
  input.value = input.value * Math.PI;
}

function sin() {
  input.value = Math.sin(input.value);
}

function cos() {
  input.value = Math.cos(input.value);
}

function tan() {
  input.value = Math.tan(input.value);
}

function log() {
  input.value = Math.log10(input.value);
}

function In() {
    input.value = Math.log(input.value);
}

function exp() {
  input.value = Math.exp(input.value);
}

function exponent(exp) {
    let output = document.getElementById("input");
    input.value += exp;
  }

  function root() {
    input.value = Math.sqrt(input.value);
  }


  function factorial(){
    let output = document.getElementById("input");
    let facto=1;
    for (var i = 1; i <= output.value; i++){
        facto = facto* i;
    }
    output.value =facto;
  }