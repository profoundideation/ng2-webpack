entry: {
  app: 'src/app.ts'
}
output: {
  filename: 'app.js'
}
loaders: [
  {
    test: /\.ts$/
    loaders: 'ts'
  },
  {
    test: /\.css$/
    loaders: 'style!css'
  }
]
