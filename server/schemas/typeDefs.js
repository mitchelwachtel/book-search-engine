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
    matchups: [Matchup]
    user(userId: ID!): User
    tech: [Tech]
  }

  type Mutation {
    createUser(username: String!, email: String, password: String): User
    saveBook(userId: ID!): User
    deleteBook()
  }
`;

module.exports = typeDefs;