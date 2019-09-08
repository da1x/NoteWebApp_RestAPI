module.exports = app => {
  const notes = require("../controllers/note.controller");

  // Create a new Notes
  app.post("/notes", notes.create);

  // Retrieve all Notes
  app.get("/notes", notes.findAll);

  // Retrieve a single Note with noteID
  app.get("/notes/:noteId", notes.findOne);

  // Update a Note with noteId
  app.put("/notes/:noteId", notes.update);

  // Delete a Note with noteId
  app.delete("/notes/:noteId", notes.delete);
};
