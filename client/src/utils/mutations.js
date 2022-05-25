import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
    saveBook($userId: ID!, $authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
      _id
      username
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation deleteBook($userId: ID!, $bookId: ID!) {
    deleteBook($userId: ID!, $bookId: ID!) {
      _id
      username
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
