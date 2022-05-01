const isCorrectField = require("../helpers/isCorrectField");
const isRequiredCategory = require("../helpers/isRequiredCategory");

const inputValidationService = (name, content, category) => {
  const isCorrectName = isCorrectField(name, 'string');
  const isCorrectContent = isCorrectField(content, 'string');
  const isCorrectCategory = isCorrectField(category, 'string');

  const isCorrectData = isCorrectName && isCorrectContent && isCorrectCategory;
  const isCategory = isRequiredCategory(category);

  if (isCorrectData && isCategory) {
    return false;
  }

  const message = !isCorrectData ? 'Error: Data is incorrect' : 'Error: Data is missing';

  return {
    status: 422,
    message
  };
}

module.exports = inputValidationService;
