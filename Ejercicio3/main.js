var a = document.querySelectorAll(".menu a");
var b = document.querySelectorAll(".dia");
var mostrar = b[0];

window.onload = function() {
  console.log(mostrar);

  a[0].addEventListener("click", () => {
    mostrar.classList.add("no");
    mostrar = b[0];
    mostrar.classList.remove("no");
    console.log(mostrar);
  });

  a[1].addEventListener("click", () => {
    mostrar.classList.add("no");
    mostrar = b[1];
    mostrar.classList.remove("no");
    console.log(mostrar);
  });

  a[2].addEventListener("click", () => {
    mostrar.classList.add("no");
    mostrar = b[2];
    mostrar.classList.remove("no");
    console.log(mostrar);
  });

  a[3].addEventListener("click", () => {
    mostrar.classList.add("no");
    mostrar = b[3];
    mostrar.classList.remove("no");
    console.log(mostrar);
  });

  a[4].addEventListener("click", () => {
    mostrar.classList.add("no");
    mostrar = b[4];
    mostrar.classList.remove("no");
    console.log(mostrar);
  });
};
