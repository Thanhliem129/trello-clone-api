import { MongoClient } from 'mongodb';
//dung 2 cách 1 là require 2 là import 
import { env } from './environment'
// require('dotenv').config()

const uri = env.MONGODB_URI


export const connectDb = async () => {
   const client = new MongoClient(uri, {
      useUnifiedTopology : true,
      useNewUrlParser: true
   })
   try {
      // connect client to the server 
      await client.connect()
      console.log('connected successfully');
      await listDatabases(client)
      
   }
   finally {
      //ensure client will close when finish/error connect
      await client.close()
      console.log('closed')
   }
}

const listDatabases = async (client) => {
   const databases = await client.db().admin().listDatabases()
   console.log(databases)
   console.log('your database : ')
   databases.databases.forEach(db => {
      console.log(` - ${db.name}`)
   });
} 