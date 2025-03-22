function error404(req, res) {
    console.log(`404: ${req.url} not found`);
    res.status(404).send('Page not found!');
}

module.exports = error404;