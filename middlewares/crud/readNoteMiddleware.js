const noteIDCheckService = require("../../services/noteIDCheckService");
const readNotes = require("../../repositories/readNotes");

const readNoteMiddleware = (req, res) => {
  const error = noteIDCheckService(
    readNotes(),
    req.params["id"]
  );

  if (error) {
    res.statusCode = error.status;
    res.send(error.message);
  }

  res.send(readNotes().find((note) => (
    note.id === req.params["id"]
  )));
};

module.exports = readNoteMiddleware;

