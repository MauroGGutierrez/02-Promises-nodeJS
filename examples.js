const promise = new Promise((resolve, reject) => {
  // Hacer cosas acá dentro, probablemente asincrónicas.
  if ("true") {
    /* Todo funcionó como esperabamos*/
    resolve("Jooya!");
  } else {
    reject(Error("Algo se rompió"));
  }
});

// promise.then(
//   //estos son callbacks
//   (data) => {
//     // Ejecuto código sabiendo que todo salió bien
//     // Siguiendo el ejemplo de arriba, data tendría adentro el string: 'Jooya!'
//     console.log(data);
//   },
//   (error) => {
//     // La promesa fue rechazada, aca ejecutamos código para ese caso
//     // Siguiendo el ejemplo de arriba, error tendría adentro el string: 'Algo se rompió'
//     console.log(error);
//   }
// );

// promise
//   .then(function (data) {
//     // Ejecuto código sabiendo que todo salió bien
//     // Siguiendo el ejemplo de arriba, data tendría adentro el string: 'Jooya!'
//     console.log(data);
//   })
//   .catch(function (error) {
//     // La promesa fue rechazada, aca ejecutamos código para ese caso
//     // Siguiendo el ejemplo de arriba, error tendría adentro el string: 'Algo se rompió'
//     console.log(error);
//   });

const primerMetodo = () => {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Terminó el primer método");
      resolve({ num: "123" }); //pasamos unos datos para ver como los manejamos
    }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
  });
  return promise; //promise { num: '123'}en promise se guarda el 123, no se puede manimuplar solo es una promesa
};

const segundoMetodo = (datos) => {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Terminó el segundo método");
      resolve({ nuevosDatos: datos.num + " concatenamos texto y lo pasamos" });
    }, 2000); //promise { nuevosDatos : 123  concatenamos texto y lo pasamos }
  });
  return promise;
};

const tercerMetodo = (datos) => {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Terminó el tercer método");
      console.log(datos.nuevosDatos); //imprimos los datos concatenados
      resolve("hola");
    }, 3000);
  });
  return promise;
};

console.time("promise");
primerMetodo()
  // me devuelve el objeto {num : '123'} saca el promise
  .then(segundoMetodo)
  // te devuelve el obejto { nuevosDatos : 123  concatenamos texto y lo pasamos }
  .then(tercerMetodo)
  // te devuelve 'hola'
  .then(function (datos) {
    console.log(datos); //debería ser el 'hola' que pasamos en tercerMetodo
  });
console.timeEnd("promise");
