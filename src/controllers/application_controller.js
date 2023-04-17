const path = require('path');

const index = (req, res) => res.sendFile(path.joins(__dirname, '..', 'views', 'application', 'index.html'));

module.exports = { index };
