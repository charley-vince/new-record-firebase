const path = require('path')
const webpack = require('webpack')
const express = require('express')
const config = require('./webpack.dev')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

const compiler = webpack(config)

app.use(
	require('webpack-dev-middleware')(compiler, {
    noInfo: true,
		publicPath: config.output.publicPath
	})
)

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(path.join(__dirname, 'public')))

app.post('/api/wdata/save', (req, res) => {
	console.log('request');
	res.send('Hello world')
});

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(80, function(err) {
	if (err) {
		return console.error(err)
	}

	console.log('Listening at http://localhost:3000/')
})
