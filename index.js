// const cat = require('cat-me')

// console.log(cat())




// const http = require('http')
// const server= http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.end("KA HO")
//     }
//     if(req.url=="/about"){
//         res.end("nirahuwa")
//     }
//      if(req.url=="/profile"){
//         res.end("hello")
//     }
   
// })

// server.listen(10,()=>{
//     console.log("chal rha")
// })




// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.end("piyush")
//     }
//      if(req.url=="/r"){
//         res.end("ranjit")
//     }
//      if(req.url=="/w"){
//         res.end("wahidur")
//     }

// })


// server.listen(10,()=>{
//     console.log("server is running")
// })





const express = require("express")
const morgan = require('morgan')
const app = express()
const connection=require('./config/db')
const userModel = require('./models/user')
const bcrypt = require("bcrypt")

app.set('view engine','ejs')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.use((req,res,next)=>{
console.log("Midlleware is working")
next()
})

app.get('/',(req,res)=>{
// res.send("HELLO WORLD")
res.render("index.ejs")
})

app.get('/about',(req,res)=>{
res.send("HELLO DUNIYA")
})

app.get('/profile',(req,res)=>{
res.send("HELLO BACHO")
})

app.post('/get-data',(req,res)=>{
    // console.log(req.query)
    console.log(req.body)
    res.send("data recieved")
})

app.get('/register',(req,res)=>{
    res.render("register")
})

app.post('/register',async(req,res)=>{


    const {username,email,password}=req.body

    const hashPassword = await bcrypt.hash(password,10)
    
  const newUser =  await userModel.create({
        username:username,
        email:email,
        // password:password
        password:hashPassword
    })
    // console.log(req.query)
    console.log(req.body)
    res.send(newUser)
})

app.listen(50,()=>{
    console.log("server is working")
})