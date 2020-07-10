const fs = require('fs')

let square = function (req,res){
     let data = fs.readFile('square.txt', function (err,data) {
        if (err) {
            console.error(err)
        } else {
            console.log("DATA",data)
            let h = JSON.stringify(data);
            let ab = data.toString("utf8");
            let as = JSON.parse(ab);
            console.log(JSON.parse(h), " file updated", as.side)
            res.send(data.toString("utf8"))
        }
     })
     console.log("FILE DATA Square", data)

}

let circle = function (req,res){
    let data  = fs.readFile('circle.txt', function (err,data) {
       if (err) {
           console.error(err)
       } else {
           console.log("DATA",data)
           let h = JSON.stringify(data);
           let ab = data.toString("utf8");
           let as = JSON.parse(ab);
           console.log(JSON.parse(h), " file updated", as.side)
           res.send(data.toString("utf8"))
       }
    })
    console.log("FILE DATA Circle", data)

}

let triangle = function (req,res){
    let data  = fs.readFile('triangle.txt', function (err,data) {
       if (err) {
           console.error(err)
       } else {
           console.log("DATA",data)
           let h = JSON.stringify(data);
           let ab = data.toString("utf8");
           let as = JSON.parse(ab);
           console.log(JSON.parse(h), " file updated", as.side)
           console.log('hi',res)
           res.send(data.toString("utf8"))
       }
    })
    console.log("FILE DATA Triangle", data)

}

let rect = function (req,res){
     let data  = fs.readFile('rect.txt', function (err,data) {
        if (err) {
            console.error(err)
        } else {
            console.log("DATA",data)
            let h = JSON.stringify(data);
            let ab = data.toString("utf8");
            let as = JSON.parse(ab);
            console.log(JSON.parse(h), " file updated", as.side)
            res.send(data.toString("utf8"))
        }
     })
     console.log("FILE DATA Rect", data)

}
module.exports = {
    square,
    circle,
    triangle,
    rect
}