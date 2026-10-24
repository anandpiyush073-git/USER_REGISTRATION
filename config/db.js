const mongoose= require("mongoose")

const connection = mongoose.connect('process.env.MONGO_URI').then(()=>{
    console.log("database is connected")
})

module.exports=connection
