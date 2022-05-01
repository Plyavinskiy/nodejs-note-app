const generateStats = require("../repositories/generateStats");

const readNotesStatsMiddleware = (req, res) => {
  res.send(generateStats());
}

module.exports = readNotesStatsMiddleware;
