const bodyCheckService = require("../../services/bodyCheckService");
const inputValidationService = require("../../services/inputValidationService");
const createNote = require("../../repositories/createNote");

const createNoteMiddleware = (req, res) => {
  const error = bodyCheckService(req.body)
    || inputValidationService(req.body.name, req.body.content, req.body.category);

  if (error) {
    res.statusCode = error.status;
    res.send(error.message);
  }

  createNote(req.body);
  res.send('The note is created');
};

module.exports = createNoteMiddleware;
