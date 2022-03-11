const fs = require("fs");
const path = require("path");

// const alumno1 = fs.readFileSync('./files/alumno1.json', 'utf-8')

fs.readFile("./files/alumno1.json", "utf8", function (err1, data1) {
  fs.readFile("./files/alumno2.json", "utf8", function (err2, data2) {
    fs.readFile("./files/alumno3.json", "utf8", function (err3, data3) {
      fs.readFile("./files/alumno4.json", "utf8", function (err4, data4) {
        fs.readFile("./files/alumno5.json", "utf8", function (err5, data5) {
          if (err1 || err2 || err3 || err4 || err5) {
            throw new Error();
          }
          let data = data1 + data2 + data3 + data4 + data5;
          fs.writeFile("listadodeAlumnos.json", data, function (err) {
            if (err) throw err;
            console.log("Archivos escritos con éxito\n");
          });
        });
      });
    });
  });
});

// alumnos.forEach((item) =>
// fs.readFile(item, (err,data) => {
//   if (err) throw err;
//   fs.writeFile(`${item}.txt`, data, (err) => {
//     if (err) throw err,
//     console.log("Archivos escritos con éxito\n");
//   })
// });

//---intento con for each

// const json1 = "./files/alumno1.json",
// json2 = "./files/alumno2.json",
// json3 = "./files/alumno3.json";
// json4 = "./files/alumno4.json";
// json5 = "./files/alumno5.json";

// const alumnos = [json1, json2, json3,json4,json5]

// fs.readFile(path.join(__dirname, 'files', 'alumno1.json','alumno2.json'), 'utf8', (err,data) => {
//   if (err) throw err;
//    fs.writeFile(path.join(__dirname, 'listadodeAlumnos.json'), data, (err) => {
//   if (err) throw err;
//   console.log('write Complete')
// })
// })
