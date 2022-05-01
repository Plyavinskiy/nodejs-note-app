const updateStatistics = (statistics, category, isNoteArchived) => {
  const index = statistics.findIndex((s) => (
    s.category === category
  ));

  if (index > -1) {
    statistics[index].summary++;

    if (isNoteArchived) {
      statistics[index].archived++;
    }
  } else {
    statistics.push({
      category,
      summary: 1,
      archived: (isNoteArchived ? 1 : 0)
    });
  }
}

module.exports = updateStatistics;
