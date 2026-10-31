import postcssVariableCompress from 'postcss-variable-compress';

export default {
  plugins: [
    postcssVariableCompress([
      "--c-width",
      "--c-height"
    ])
  ]
};
