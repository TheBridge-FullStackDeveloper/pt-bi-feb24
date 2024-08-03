const express = require('express')
const app = express()
const { dbConnection } = require('./config/config.js')
require('dotenv').config()

const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

const PORT = process.env.PORT || 3001

app.use(express.json())

dbConnection()

app.use('/tasks', require('./routes/tasks.js'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(PORT, () =>
	console.log(`El servidor ha iniciado en el puerto ${PORT} `)
)
