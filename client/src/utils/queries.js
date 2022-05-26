import {gql} from "@apollo/client";

// export const QUERY_USER = gql`
//   query user($userId: ID!) {
//     user(_id: $userId) {
//       _id
//       username
//       savedBooks {
//         _id
//         authors
//         description
//         bookId
//         image
//         link
//         title
//       }
//     }
//   }
// `;

export const QUERY_ME = gql`
  query me($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
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
