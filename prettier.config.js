/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: false,
  trailingComma: 'none',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-packagejson'],
  printWidth: 120
}

export default config
