function logServedPath(req, res, next) {
    console.log(`Serving: ${filePath}`);    
    next();
}

module.exports = logServedPath;