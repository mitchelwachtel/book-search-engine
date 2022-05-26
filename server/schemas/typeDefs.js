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
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(_id: ID!): User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(userId: ID!, authors: [String], description: String, bookId: String, image: String, link: String, title: String): User
    removeBook(userId: ID!, bookId: ID!): User
  }
`;

// saveBook Look into creating what's known as an input type to handle all of these parameters!
// deleteBook Mutation needs to remove a specific book from a specific User's book list 

module.exports = typeDefs;