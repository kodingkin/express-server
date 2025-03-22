const path = require('path');
const asyncHandler = require("express-async-handler");
const fs = require('fs').promises;

const getPage = asyncHandler(async (req, res, next) => {
    const page  = req.params.page || 'index'
    const filePath = path.join(__dirname, '../views/', `${page}.ejs`);
    console.log(`Serving: ${filePath}`);

    await fs.access(filePath);
    res.sendFile(filePath, { headers: { 'Content-Type': 'text/html' } })

});


module.exports = getPage;