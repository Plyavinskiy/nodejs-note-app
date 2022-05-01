const getDatesFromString = (str) => {
  const results = str.match(/[0-9]{1,2}([\-\/ \.])[0-9]{1,2}([\-\/ \.])((19)|(20))[0-9]{2}/g);
  const hasResultsLength = hasLength(results);

  if (isResultsLength) {
    return results;
  }

  return [];
}

module.exports = getDatesFromString;
