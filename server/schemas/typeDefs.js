const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Auth {
    token: ID!
    user: User
}

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Books]
}

type Book {
  _id: ID
  bookId: String
  title: String
  # TODO: authors needs to be an array
  authors: String
  description: String
  image: String
  link: String
}

type Query {
  me: User
  books(title: String!): [Book]
}

type Mutation {
  # mutation goes here
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  user(username: String!): User
  # TODO: need to passs authors as string
  saveBook(authors: String!, description: String!, title: String!, image: String!, link: String!): User
  removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;