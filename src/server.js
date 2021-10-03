import express from "express";
import { mapOrder } from './utilities/sorts.js';
import { connectDb } from './config/mongodb';
import { env } from "./config/environment";

const app = express();

 connectDb().catch(console.log)

 app.get('/', (req, res) => {
      res.json({name:'Đặng Thanh Liêm'})
 })
 app.listen(env.PORT, env.HOST, () => {
    console.log(`hello i'm running at ${env.HOST}:${env.PORT}/`)
 })