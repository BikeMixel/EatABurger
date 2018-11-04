const express = require("express")
const router = express.Router()

const burger = require("../models/burger.js")

router
    .get("/", (_, res) => {
        burger.all(data => {
            const hbsObj = {
                burgers: data
            }
            console.log(hbsObj)
            res.render("index", hbsObj)
        })
    })
    .post("/api/burgers", (req, res) => {
        burger.create([
            "name", "uneaten"
        ], [
            req.body.name, req.body.uneaten
        ], result => res.json({ id: result.insertId }))
    })
    .put("/api/burgers/:id", (req, res) => {
        const condition = "id = " + req.params.id
        console.log("condition ", condition)
        console.log("eaten ", req.params.uneaten)

        burger.update({
            uneaten: req.body.uneaten
        }, condition, (result) => { 
            if (result.changedRows == 0) {
                return res.status(404).end()
            }
            else {
                res.status(200).end()
            }
        })
    })
    .delete("/api/burgers/:id", (req, res) => {
        let condition = "id = " + req.params.id
        burger.delete(condition, (result) => {
            if (result.affectedRows == 0) {
                return res.status(404).end()
            } 
            else {
                res.status(200).end()
            }
        })
    })

module.exports = router