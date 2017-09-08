const juice = require('juice');
const fs = require('fs');
const path = require('path');

class PreflightPlugin {
  apply(compiler) {
    compiler.plugin('compilation', (compilation) => compilation.plugin('html-webpack-plugin-after-emit', (data, callback) => {
      fs.writeFile(path.resolve('./dist/index.html'), juice(data.html.source()), (err) => {
        if (err) {
          console.error(err);
        }
      });

      callback(null, data);
    }));
  }
}

module.exports = PreflightPlugin;
