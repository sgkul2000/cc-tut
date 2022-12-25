const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

require("dotenv").config()

const middlewares = require("./middlewares")
// const api = require("./api")

const app = express()

app.use(morgan("dev"))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(express.static(`${__dirname}/assets`))

app.get("/", (req, res) => {
	res.json({
		message: "You have reached the api"
	})
})

// app.use("/api/", api)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app
