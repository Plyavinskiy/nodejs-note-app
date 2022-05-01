const fs = require("fs");
const path = require('path');
const dataPath = "../notes.json";

const updateNotes = (notes) => {
  fs.writeFileSync(
    path.join(__dirname, dataPath),
    JSON.stringify(notes)
  );
}

module.exports = updateNotes;
