// 悲报: PostCSS-Remame 不支持 ESModule

const variableRename = require('postcss-rename/variable');

module.exports = {
  plugins: [
    variableRename({
      strategy: 'minimal'
    })
  ]
};
