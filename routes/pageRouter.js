const { Router} = require('express');

// create the router
const pageRouter = Router();

// put the logic into the router
pageRouter.get('/:page?', (req, res) => {

    // if no page entered, default as index
    const page = req.params || 'index';

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

module.exports = pageRouter;