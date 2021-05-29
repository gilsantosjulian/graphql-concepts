'use stric'
const { MongoClient } = require('mongodb')

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
}

// const mongoUrl = `mongo "mongodb+srv://cluster0.wjmyb.mongodb.net/graphQLTest" --username julian` 
// const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}` 
const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
let connection

async function connectDB () {
  if(connection) return connection

  let client

  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    connection = client.db(DB_NAME)
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error);
    process.exit(1)
  }

  return connection
}

module.exports = connectionDB