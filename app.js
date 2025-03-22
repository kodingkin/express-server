const express = require("express");
const path = require('path');
const app = express();

const pageRouter = require('./routes/pageRouter');

const PORT = 3000;

// ready for non html obect
app.use(express.static(__dirname));

// use router to handle
app.use("/", pageRouter);

// 404 catch-all for non-routed paths
app.use((req, res) => {
    console.log(`404: ${req.url} not found`);
    res.status(404).send('Page not found!');
});

// HTTPS setup: Load SSL certs
// const sslOptions = {
//     key: fs.readFileSync(path.join(__dirname, 'key.pem')),  // Private key
//     cert: fs.readFileSync(path.join(__dirname, 'cert.pem')) // Public cert
// };

// Start HTTP server
http.createServer(app).listen(HTTP_PORT, () => {
    console.log(`HTTP server running on http://localhost:${HTTP_PORT}`);
});

// Start HTTPS server
// https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
//     console.log(`HTTPS server running on https://localhost:${HTTPS_PORT}`);
// });