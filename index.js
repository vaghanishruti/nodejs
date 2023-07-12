// const http = require("http")

// const { Server } = require("http");

// const server = http.createServer((req,res)=>{
//     res.write("<h1>Welcome</h1>")
//     res.write("<h1>To Surat</h1>")
//     res.end()
// })

// server.listen(3000,console.log("port listing on port number 3000"))

// =====================================================
// const  http=require('http')
// const server=http.createServer((req,res)=>{
//     res.write("welcome")
//     res.write("home")
//     res.end()
// })
// server.listen(3000)



// ===================================================

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.write("<h1>wecpme to home page</h1>")
//     }
//     else if(req.url=="/about"){
//         res.write("<h1>welcome to about page</h1>")
//     }
//     else if(req.url=="/service"){
//         res.write("<h1>welcome to service page</h1>")
//     }
//     else{
//         res.write("<h1>404 page not found</h1>")
//     }
//     res.end()
// })
// server.listen(3000)

// ...........................................................
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     console.log(welcome);
// })



const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('welcome to home page')
    }
    else if (req.url == '/about') {
        res.write('welcome to about page')
    }
    else if (req.url == '/service') {
        res.write('welcome to service page')
    }
    else {
        res.write('404 page not found')
    }
    res.end()
})
server.listen(3000)