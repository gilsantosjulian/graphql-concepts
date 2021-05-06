'use strict'

const { graphql, buildSchema } = require('graphql')

// Schema definition
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Hello Query execution
graphql(schema, '{ hello }')
  .then(data => {
    console.log(data);
  })