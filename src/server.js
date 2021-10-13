import express from "express";
import { connectDb } from './config/mongodb';
import { env } from "./config/environment";
import { apiV1 } from './routes/v1/index'

connectDb().then(()=> console.log('connected success') )
.then(()=> bootServer())
.catch(error => {
   console.log(error)
   process.exit(1)
})

const bootServer = () => {
   const app = express();

   //enable req.body
   app.use(express.json())

   // use api
   app.use('/v1', apiV1)
  
   app.listen(env.APP_PORT, env.APP_HOST, () => {
      console.log(`hello i'm running at ${env.APP_HOST}:${env.APP_PORT}/`)
   })
}