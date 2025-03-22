const express = require("express");
const path = require('path');
const app = express();

const logRequest = require('./middleware/logRequest.js');
const logServedPath = require('./middleware/servedPath.js');
const pageRouter = require('./routes/pageRouter.js');
const error404 = require('./errors/404.js');
const catchError = require('./errors/catch.js');

const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// log every request
app.use(logRequest);

// ready for non html obect
app.use(express.static(path.join(__dirname, 'public')));

// use router to handle
app.use("/", pageRouter);

// log the served path
app.use(logServedPath);

// 404 catch-all for non-routed paths
app.use(error404);

// process all the thrown error
app.use(catchError);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});