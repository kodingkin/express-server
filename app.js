const express = require("express");
const path = require('path');

const app = express();
const PORT = 3000;

// ready for non html obect
app.use(express.static(__dirname));

// respond to dynamate root
app.get('/:page?', (req, res) => {

    // if no page entered, default as index
    const page = req.params.page || 'index';

    // construct file path
    const filePath = path.join(__dirname,`${page}.html`);

    // logging for dubug
    console.log('req.url =',req.url);
    console.log(`Request: GET /${page || ''}`);
    console.log(`Serving: ${filePath}`);

    // present the html file
    res.sendFile(filePath, { headers: { 'Content-Type': 'text/html' } }, (err => {
        if (err) {
            //logging for error
            console.error(`Error serving ${page}.html: ${err.message}`);

            if (err.code === 'ENOENT') {
                res.status(404).send('Page not found—check logs!');
            }
            //send error
            else {
                res.status(500).send('Server error—check logs!');
            }
        }
    }));
});

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