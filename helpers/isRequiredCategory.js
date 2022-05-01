const isRequiredCategory = (category) => {
  const categoryList = ['Idea', 'Quote', 'Task', 'Random Thought'];

  return !!categoryList
    .filter((c) => (c === category))
    .toString();
}

module.exports = isRequiredCategory;