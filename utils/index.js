// fs.readFile NO USAR Sync (bloqueante)
// Promise.All
const fs = require("fs");
const path = require("path");

const readOneFile = () => {
  const newPath = path.join(__dirname, "../"); //hacer esto para solucionar el error de la carpeta de donde estabamos parado, si no hacemos esto no nos va a encontrar nuestros JSONS
  fs.readFile(`${newPath}/files/alumno1.json`, (error, data) => {
    if (error) {
      throw new Error("Error in read file");
    }
    const student = JSON.parse(data);
    console.log(student);
  });
};

module.exports = { readOneFile };
