import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './database/dbConnection.js'


dotenv.config()
const SERVER_PORT = process.env.SERVER_PORT || 8000;
const app = express()


app.use(express.json())


app.get('/',(req,res)=>
{
    res.send('hello world')
})


connectDB()
app.listen(SERVER_PORT,()=>
{
    `server is running on port${SERVER_PORT}`
})