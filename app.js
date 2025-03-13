const express = require("express")
const app = express()


const authRouter= require("./routes/auth.routes")

app.use("/auth",authRouter)

app.listen(5000)