

function palindroma(palabra) {
  var isPalindroma = true;
  var original = palabra.split("");
  var invertido = palabra.split("").reverse();


  for (var i = 0; i < original.length; i++) {
    if (invertido[i] != original[i]) {
      console.log("no es palindroma");
      isPalindroma = false;
      break;
    }

    if (isPalindroma == true) {
      console.log("es palindroma");
    }
  }
}

palindroma("ana");
invertido