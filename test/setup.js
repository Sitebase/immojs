const path = require('path');

process.env.NODE_PATH = path.resolve(__dirname, '../src');
require('module').Module._initPaths();
