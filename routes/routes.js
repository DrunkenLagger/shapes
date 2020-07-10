const router = require("express").Router()
var shapes = require('./shapes');

router.use('/shapes', shapes)

module.exports = router
