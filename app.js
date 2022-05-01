const express = require("express");
const app = express();

const jsonParser = express.json();
const router = require("./routes/notesRoutes");
app.use("/notes/", jsonParser, router);

const PORT = 3000;
app.listen(process.env.PORT || PORT);
