function catchError(req, res) {
    console.error(`Error: ${err.message}`);
    const status = err.message === 'Page not found' ? 404 : 500;
    res.status(status).send(`${status} - ${err.message}—check logs!`);
}

module.exports = catchError;