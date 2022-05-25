const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String!
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Query {
    user(userId: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String, password: String): User
    saveBook(userId: ID!): User
    deleteBook(userId: ID!, bookId: ID!): User
  }
`;

// deleteBook Mutation needs to remove a specific book from a specific User's book list 

module.exports = typeDefs;