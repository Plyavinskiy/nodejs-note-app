const noteIDCheckService = (notes, id) => {
    if (notes.find(note => note.id === id))
        return false;
    return {
        status: 400,
        message: "Error: There is no such note"
    };
}

module.exports = noteIDCheckService

