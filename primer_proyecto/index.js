const http = require('http')
const string = require('to-case')

http
	.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.write(string.upper('Hola The Bridge!'))
		res.end()
	})
	.listen(8080)

console.log('hola que tal')
