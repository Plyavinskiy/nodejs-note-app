const readNotes = require("./readNotes");
const updateNotes = require("./updateNotes");

const deleteNote = (id) => {
  const notes = readNotes();
  const index = notes.findIndex((n) => (n.id === id));

  notes.splice(index, 1);
  updateNotes(notes);
}

module.exports = deleteNote;
