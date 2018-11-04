const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 8080

const app = express()

app
    .use(express.static("public"))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())

const exphbs = require("express-handlebars")    
app
    .engine("handlebars", exphbs({ defaultLayout: "main" }))
    .set("view engine", "handlebars")    

const routes = require("./controllers/burgers_controller")
app
    .use(routes)
    .listen(PORT, () => {
        console.log("Server listening on: http://localhost:", PORT)
    })

