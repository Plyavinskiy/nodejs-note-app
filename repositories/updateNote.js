const getDatesFromString = require("../helpers/getDatesFromString");
const updateNotes = require("./updateNotes");
const readNotes = require("./readNotes");

const updateNote = (obj, id) => {
  const notes = readNotes();
  const index = notes.findIndex((note) => (note.id === id));

  notes[index].name = obj.name;
  notes[index].category = obj.category;
  notes[index].content = obj.content;
  notes[index].dates = getDatesFromString(obj.content);
  updateNotes(notes);

  return 'The note is updated';
}

module.exports = updateNote;
