import express from "express"
import { mongo, User } from "./src/db.js"



const app = express();
mongo()


app.get("/", (req, res) => {
    res.send({
        message: " vc ta na raiz ok",
        status: "staus 200"
    })
})

app.get("/home", (req, res) => {
    res.send({
        message: "vc ta na home",
        status: "status 200"
    })
})

app.get("/user", async (req, res) => {
    const user = await User.find()

    res.statusCode(200).send({
        status: "200",
        user: user
    })
})

app.post("/user", async (req, res) => {

    const {name}= req.body

    res.send({
        name: name
    })
})


app.listen(3000)
