const mysql = require("mysql")

var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burger_db"
    })
}

connection.connect(err => {
    if (err) {
        console.log("error connecting: ", err.stack)
        return
    }
    console.log("connected as id ", connection.threadId)
})

module.exports = connection