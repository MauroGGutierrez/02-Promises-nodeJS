const fs = require("fs");
const path = require("path");

// const alumno1 = fs.readFileSync('./files/alumno1.json', 'utf-8')

// fs.readFile("./files/alumno1.json", "utf8", function (err1, data1) {
//   fs.readFile("./files/alumno2.json", "utf8", function (err2, data2) {
//     fs.readFile("./files/alumno3.json", "utf8", function (err3, data3) {
//       fs.readFile("./files/alumno4.json", "utf8", function (err4, data4) {
//         fs.readFile("./files/alumno5.json", "utf8", function (err5, data5) {
//           if (err1 || err2 || err3 || err4 || err5) {
//             throw new Error();
//           }
//           let data = data1 + data2 + data3 + data4 + data5;
//           fs.writeFile("listadodeAlumnos.json", data, function (err) {
//             if (err) throw err;
//             console.log("Archivos escritos con éxito\n");
//           });
//         });
//       });
//     });
//   });
// });

const student1 = new Promise((resolve, reject) => {
  fs.readFile("./files/alumno1.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const student2 = new Promise((resolve, reject) => {
  fs.readFile("./files/alumno2.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const student3 = new Promise((resolve, reject) => {
  fs.readFile("./files/alumno3.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const student4 = new Promise((resolve, reject) => {
  fs.readFile("./files/alumno4.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const student5 = new Promise((resolve, reject) => {
  fs.readFile("./files/alumno5.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resolve(JSON.parse(data));
    }
  });
});
const createList = (datos) => {
  fs.writeFile("listadodeAlumnos.json", datos, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
Promise.all([student1, student2, student3, student4, student5])
  .then((data) => createList(JSON.stringify(data, null, 2)))
  .catch((err) => console.log(err));
