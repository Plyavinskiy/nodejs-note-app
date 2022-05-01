const express = require("express");
const router = express.Router();

const readNotesStatsMiddleware = require("../middlewares/readNotesStatsMiddleware.js");
const readAllNotesMiddleware = require("../middlewares/readAllNotesMiddleware.js");

const createNoteMiddleware = require("../middlewares/crud/createNoteMiddleware.js");
const readNoteMiddleware = require("../middlewares/crud/readNoteMiddleware.js");
const updateNoteMiddleware = require("../middlewares/crud/updateNoteMiddleware.js");
const deleteNoteMiddleware = require("../middlewares/crud/deleteNoteMiddleware.js");

router.get('/stats', readNotesStatsMiddleware);
router.get('/', readAllNotesMiddleware);
router.post('/', createNoteMiddleware);
router.get('/:id', readNoteMiddleware);
router.patch('/:id', updateNoteMiddleware);
router.delete('/:id', deleteNoteMiddleware);

module.exports = router;
