const router = require('express').Router()
let fn = require('../controller/functions')
const { nextTick } = require('process')

router.get('/get', (req, res) => {
    console.log("Welcome to /Shapes/Get")
    res.send("Welcome to /Shapes/Get")
})

router.post('/square', (req,res,next) => {
    console.log("Going to Square Function")
    next()
}, fn.square)


router.post('/circle', (req,res,next) => {
   console.log("Welcome to /circle route")
   next()
}, fn.circle(req, res))

router.post('/triangle',(req, res, next) => {
    console.log("Welcome to /Shapes/Triangle")
    next()
},fn.triangle())


router.post('/rect', (req, res, next) => {
    console.log("Welcome to /Shapes/Rect")
    next()
}, fn.rect())

module.exports = router