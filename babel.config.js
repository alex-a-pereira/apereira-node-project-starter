module.exports = {
  plugins: [
    ['module-resolver', {
      root: ['.'],
      alias: {
        '@utils': './src/utils'
      }
    }]
  ]
}
