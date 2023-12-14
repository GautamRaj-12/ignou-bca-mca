const express = require('express')
const app = express();

const cors = require('cors')
const PORT = 4009;

app.use(cors)
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json("server started")
})
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})