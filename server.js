const express = require("express")
const connectDB = require("./config/db")
const app = express()

// Connecting the DB
connectDB()

//Init middleware
app.use(express.json({ extended: false }))

app.get("/", (req, res) => {
  res.send("API is Running")
})

//Define Routes
app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/post", require("./routes/api/post"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
