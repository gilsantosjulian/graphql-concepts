'use strict'
const { graphql, buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')

const app = express()
const port = process.env.port || 3000

// Schema definition
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Resolvers configuration
const resolvers = {
  hello: () => {
    return 'Hola mundo'
  },
  saludo: () => {
    return 'Hola a todos'
  }
}

// // Hello Query execution
// graphql(schema, '{ saludo }', resolvers)
//   .then(data => {
//     console.log(data);
//   })


app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(port, () => console.log(`Server is listening  at http://localhost:${port}/api`))