const express = require("express")
const connectToDb = require("./Db/connection")
const router = require("./Routing/employeeRoutes")

require("dotenv").config()

const port = process.env.PORT
const server = express()

const startConnection = async () =>{
    try {
        await connectToDb(process.env.Mongo_URI)
        server.listen(port, () => console.log(`Server is running on port: ${port}`))
    } catch (error) {
        console.log(`Server get error: ${error}`)
    }
}

startConnection()

server.get("/", (req, res) => res.status(200).json({msg: "Hello Mongoose handson3"}))
server.use("/api", router)

