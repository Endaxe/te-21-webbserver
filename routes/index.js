const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.render('index.njk', { title: 'Mathem' })
})

module.exports = router