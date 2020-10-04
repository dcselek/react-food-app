module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--t': '(min-width: 1060px)' }
        },
        {
          customMedia: { '--d': '(min-width: 1270px)' }
        },
        {
          customMedia: {'--m': '(max-width: 500px)'}
        }
      ]
    }
  }
}
