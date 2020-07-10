const express = require('express');
const bodyParser = require("body-parser");
const routes = require("./routes/routes")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
/**
 * Middlewware to assign a unique request id
 */
app.all("*", (req, res, next) => {
    req.reqId = Math.random()
    console.log(`${req.reqId} | ${new Date} | ${req.method} | ${req.url} | ${req.method == 'GET' ? JSON.stringify(req.query) : JSON.stringify(req.body)}`)
    next()
})
app.post('/', (req, res) => {
        res.render("Welocome to Micro-Services app",{root: __dirname})
});

app.use(routes)


app.listen(6700, () => {
    console.log("<-------- MicroService  is listenning on port------->", 6700);
 
})


// userHelper.readUsers(null, (results) => {
//     logger.info("Results ------ users", results)
// 

