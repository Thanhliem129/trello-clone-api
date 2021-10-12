import express from "express";
import { connectDb } from './config/mongodb';
import { env } from "./config/environment";

connectDb().then(()=> console.log('connected success') )
.then(()=> bootServer())
.catch(error => {
   console.log(error)
   process.exit(1)
})

const bootServer = () => {
   const app = express();

   app.get('/', (req, res) => {
      res.json({name:'Đặng Thanh Liêm'})
   })
  
   app.listen(env.APP_PORT, env.APP_HOST, () => {
      console.log(`hello i'm running at ${env.APP_HOST}:${env.APP_PORT}/`)
   })
}