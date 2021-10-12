import { MongoClient } from 'mongodb';
//dung 2 cách 1 là require 2 là import 
import { env } from './environment'
// require('dotenv').config()

let dbInstance = null


export const connectDb = async () => {
   const client = new MongoClient(env.MONGODB_URI, {
      useUnifiedTopology : true,
      useNewUrlParser: true
   })
   // connect client to the server 
   await client.connect()
   dbInstance = client.db(env.DATABASE_NAME)
   
}

// get database instance 

export const getDB = () => {
   if(!dbInstance) throw new Error('You must connect to db')
   return dbInstance;
}




// list database
// const listDatabases = async (client) => {
//    const databases = await client.db().admin().listDatabases()
//    console.log(databases)
//    console.log('your database : ')
//    databases.databases.forEach(db => {
//       console.log(` - ${db.name}`)
//    });
// } 