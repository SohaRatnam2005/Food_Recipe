const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDb = require("./config/connectionDb")
const cors = require("cors")


const PORT = process.env.PORT || 3000

connectDb()

// ✅ Middlewares should come before routes
app.use(cors({
  origin: "http://localhost:5173", // Your React app's origin
  credentials: true
}))
app.use(express.json())

app.use(express.static("public"))

// ✅ Now define your routes

app.use("/", require("./routes/user"))
app.use("/recipe", require("./routes/recipe"))


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
