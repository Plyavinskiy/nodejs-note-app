const bodyCheckService = (body) => {
  if (body) {
    return false;
  }

  return {
    status: 400,
    message: "Error: No note found"
  };
}

module.exports = bodyCheckService;

