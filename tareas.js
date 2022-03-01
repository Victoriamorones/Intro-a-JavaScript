// EJERCICIO 1 -- De un listado de numeros, imprimir en consola cuales son numeros primos
console.log(" EJERCICIO #1 ")

function numPrimo(number) { 
 
  if (number <=1) {
    return false;
   
  } else {
    for (let i=2; i < number; i++) {
      if (number % i==0) {
        return false;
      } 
    }
    return true;
  }
}

let arreglo = [3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,]

arreglo.forEach (function (element) { 
  const isPrime =numPrimo(element);
  if (isPrime) {
    console.log(`${element} Es un numero primo`);
  } else {
    console.log(`${element} No es un numero primo`);
  }
});

/* EJERCICIO 2 -- Invitados con acceso a la fiesta.
 De una lista predeterminada de invitados, solo podrán acceder los familiares mayores de edad*/
 console.log(" EJERCICIO #2")

    const persona1 = {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    };
    const persona2 = {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    };
    const persona3 = {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    };
    const persona4 = {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    };
    const persona5 = {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    };
    const persona6 = {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    };

    const arregloPersonas = [persona1, persona2, persona3, persona4, persona5, persona6];
    const admitirPaso = (persona) => {
        if(persona.edad >= 18 && persona.esFamiliar) {
            console.log (`Bienvenido a la fiesta ${persona.nombre}`);
        } else {
            console.log (`Requiere autorización para pasar a la fiesta ${persona.nombre}`);
        }
    };

    arregloPersonas.forEach((persona) => {
        admitirPaso(persona);
    });

/* EJERCICIO 3 - Sucesion Fibonaci
-  Imprimir en consola los primerons 50 numeros de la sucesión Fibonacci utilizando ciclos*/

 console.log(" EJERCICIO #3")

 let n1=0;
 let n2=1;
 let siguiente

 
 for (let i=1; i<= 50; i++) {
     console.log(n1);
     siguiente = n1 +n2;
     n1 = n2;
     n2 = siguiente;
 }