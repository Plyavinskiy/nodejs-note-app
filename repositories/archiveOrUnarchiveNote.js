const updateNotes = require("./updateNotes");
const readNotes = require("./readNotes");

const archiveOrUnarchiveNote = (status, id) => {
  const notes = readNotes();

  notes[notes.findIndex((note) => (
    note.id === id
  ))].archived = status;

  updateNotes(notes);

  return status ? 'The note is archived' : 'The note is unarchived';
}

module.exports = archiveOrUnarchiveNote;
