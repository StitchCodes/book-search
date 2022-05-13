const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Auth {
    token: ID!
}

type User {
  _id: ID
  username: String
  email: String
  password: String
  savedBooks: [Books]
}

type Book {
  _id: ID
  title: String
  authors: String
  description: String
  image: String
  link: String
}

type Query {
  user(email: String!, password: String!): User
  books(title: String!): [Book]
}

type Mutation {
  # mutation goes here
}
`;

module.exports = typeDefs;