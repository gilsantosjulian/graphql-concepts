'use strict'

const { graphql, buildSchema } = require('graphql')

// Schema definition
const schema = buildSchema(`
  type Query {
    hello: String
    saludo: String
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

// Hello Query execution
graphql(schema, '{ saludo }', resolvers)
  .then(data => {
    console.log(data);
  })
  