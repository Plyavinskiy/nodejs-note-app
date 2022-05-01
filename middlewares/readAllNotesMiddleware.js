const readNotes = require('../repositories/readNotes.js');

const readAllNotesMiddleware = (req, res) => {
  res.send(readNotes());
};

module.exports = readAllNotesMiddleware;
