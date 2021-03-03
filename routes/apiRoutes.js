const router = require("express").Router()
const db = require('./models');


router.get("/brawndo", (req,res) => {
 db.Brawndo.findAll({}).then(data => {
     console.log(data)
     res.json(data)
 })
})

module.exports = router