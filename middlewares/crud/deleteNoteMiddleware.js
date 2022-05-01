const readNotes = require("../../repositories/readNotes");
const noteIDCheckService = require("../../services/noteIDCheckService");
const deleteNote = require("../../repositories/deleteNote");

const deleteNoteMiddleware = (req, res) => {
  const error = noteIDCheckService(
    readNotes(),
    req.params["id"]
  );

  if (error) {
    res.statusCode = error.status;
    res.send(error.message);
  }

  deleteNote(req.params["id"]);
  res.send('The note is removed');
};

module.exports = deleteNoteMiddleware;
