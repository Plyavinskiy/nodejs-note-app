const hasLength = require('./hasLength');

const isCorrectField = (name, type) => {
  return hasLength(name) && isCorrectTypeField(name, type);
};

module.exports = isCorrectField;