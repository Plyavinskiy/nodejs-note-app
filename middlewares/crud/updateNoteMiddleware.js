const bodyCheckService = require("../../services/bodyCheckService");
const inputValidationService = require("../../services/inputValidationService");
const archiveCheckService = require("../../services/archiveCheckService");
const noteIDCheckService = require("../../services/noteIDCheckService");
const archiveOrUnarchiveNote = require("../../repositories/archiveOrUnarchiveNote");
const updateNote = require("../../repositories/updateNote");
const readNotes = require("../../repositories/readNotes");

const updateNoteMiddleware = (req, res) => {
  const error = bodyCheckService(req.body)
    || noteIDCheckService(readNotes(), req.params["id"])
    || inputValidationService(req.body.name, req.body.content, req.body.category)
    && archiveCheckService(req.body.archive);

  if (error) {
    res.statusCode = error.status;
    res.send(error.message);
  }

  if (req.body.archive !== undefined) {
    res.send(archiveOrUnarchiveNote(req.body.archive, req.params["id"]));
  } else {
    res.send(updateNote(req.body, req.params["id"]));
  }
};

module.exports = updateNoteMiddleware;
