const archiveCheckService = (archive) => {
  if (typeof archive === 'boolean') {
    return false;
  }

  return {
    status: 422,
    message: "Error: The input is invalid"
  };
}

module.exports = archiveCheckService;

