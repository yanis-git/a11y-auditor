const path = require('path');
module.exports = {
  mode: "production",
  entry: './src/browser/index.ts',
  output: {
    library: {
      name: 'a11yAuditor',
      type: "window"
    },
    path: path.resolve(__dirname, '../dist/browser'),
    filename: 'index.js'
  },
  resolve : {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.browser.json'
        }
      }
    ]
  }
};
