import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS {
    posts {
      author {
        id
        name
      }
      content {
        document
      }
      title
      id
      headerImage {
        id
      }
      status
    }
  }
`;

const GET_AUTHOR_POSTS = gql`
  query GET_AUTHOR_POSTS($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      name
      posts {
        updatedAt
        title
        tags {
          name
          id
        }
        author {
          id
          name
        }
        status
        publishedAt
        id
        createdAt
        content {
          document
        }
        headerImage {
          id
        }
      }
    }
  }
`;

const GET_POST_BY_ID = gql`
  query GET_POST_BY_ID($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      author {
        id
        name
      }
      createdAt
      publishedAt
      updatedAt
      title
      tags {
        name
        id
      }
      status
      content {
        document
      }
      headerImage {
        id
        publicUrl
      }
      headerImageAttribution
      headerImageAttributionUrl
    }
  }
`;

export {
  GET_ALL_POSTS,
  GET_AUTHOR_POSTS,
  GET_POST_BY_ID,
}