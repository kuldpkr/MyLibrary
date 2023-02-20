const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index') // this is index.ejs from the views folder
})

module.exports = router