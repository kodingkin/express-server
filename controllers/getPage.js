const path = require('path');
const asyncHandler = require("express-async-handler");
const fs = require('fs').promises;

const getPage = asyncHandler(async (req, res, next) => {
    const page  = req.params.page || 'index'
    const filePath = path.join(__dirname, '../views/', `${page}.ejs`);
    req.filePath = filePath;

    await fs.access(filePath);
    res.render(page);

});


module.exports = getPage;