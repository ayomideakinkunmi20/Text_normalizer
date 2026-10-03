import  'dotenv/config';
import connectDB from './configuration/database.js';
import app from './app.js';

connectDB();


const port = process.env.PORT || 7777;

app.listen(port,()=>{
console.log(`app is at ${port} beside your house listening`)
})