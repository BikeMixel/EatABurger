const connection = require("../config/connection.js")

const printQMarks = function (num) {
    let array = []

    for (var i =0; i < num; i++) {
        array.push("?")
    }
    return array.toString()
}

const objToSql = function (ob) {
    let array = []

    for (var key in ob) {
        let value=ob[key]
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'"
            }
            array.push(key + "=" + value)
        }
    }
    return array.toString()
}

const orm = {
    all: function(tableInput, cb) {
        let string = "SELECT * FROM " + tableInput + ";"
        connection.query(string, (err, result) => {
            if (err) {
                throw err
            }
            cb(result)
        })
    },
    create: function(table, cols, vals, cb) {
        let string = "INSERT INTO " + table
            string += " ("
            string += cols.toString()
            string += ") "
            string += "VALUES ("
            string += printQMarks(vals.length)
            string += ") "

         connection.query(string, vals, function(err, result){
            if (err) {
                throw err
            }
            cb(result)
        })
    },
    update: function(table, objColVals, condition, cb) {
        let string = "UPDATE " + table
            string += " SET "
            string += objToSql(objColVals)
            string += " WHERE "
            string += condition

        connection.query(string, (err, result) => {
            if (err) {
                throw err
            }
            cb(result)
        })
    },
    delete: function(table, condition, cb) {
        let string = "DELETE FROM " + table
            string += " WHERE "
            string += condition

        connection.query(string, (err, result) => {
            if (err) {
                throw err
            }
            cb(result)
        })
    }
}

module.exports = orm