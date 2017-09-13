const juice = require('juice');

class PreflightPlugin {
  apply(compiler) {
    compiler.plugin('emit', (compilation, done) => {
      let fileContent = juice(compilation.assets['source.html'].source());

      compilation.assets['index.html'] = {
        source: () => fileContent,
        size: () => Buffer.byteLength(fileContent, 'utf8')
      };

      done();
    });
  }
}

module.exports = PreflightPlugin;
