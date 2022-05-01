const updateStatistics = require("../helpers/updateStatistics");
const readNotes = require("./readNotes");

const generateStats = () => {
  const notes = readNotes();
  const statistics = [];

  notes.forEach((note) => {
    updateStatistics(statistics, note.category, note.archived);
  });

  return statistics;
}

module.exports = generateStats;
