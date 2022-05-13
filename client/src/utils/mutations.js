import { gql } from '@apollo/client';

// LOGIN_USER
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

// ADD_USER
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// SAVE_BOOK
export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $description: String, $title: String!, image: String!, link: String!){
    saveBook(authors: $authors, description: $description, title: $title, image:$image, link: $link){
      _id
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;

// REMOVE_BOOK
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      # TODO: Resolve move remove
    }
  }
`