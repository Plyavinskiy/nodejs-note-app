const getDatesFromString = require("../helpers/getDatesFromString");
const readNotes = require("./readNotes");
const generateRandomID = require("../helpers/generateRandomID");
const updateNotes = require("./updateNotes");

const createNote = (obj) => {
  const notes = readNotes();

  notes.push({
    id: generateRandomID(10),
    name: obj.name,
    created: new Date(),
    category: obj.category,
    content: obj.content,
    dates: getDatesFromString(obj.content),
    archived: false
  });

  updateNotes(notes);
}

module.exports = createNote;
