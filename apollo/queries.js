import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS($take: Int, $skip: Int) {
    # posts(where: { status: { equals: "PUBLISHED"} }) {
    posts(orderBy: [{ createdAt: desc}], take: $take, skip: $skip) {
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
      blurb
      tags {
        name
        id
      }
    }
  }
`;

const GET_RECENT_POST_TITLES = gql`
  query GET_RECENT_POST_TITLES($take: Int, $skip: Int) {
    # posts(where: { status: { equals: "PUBLISHED"} }) {
    posts(orderBy: [{ createdAt: desc}], take: $take, skip: $skip) {
      title
      id
      headerImage {
        id
      }
    }
  }
`;

const GET_AUTHOR_POSTS = gql`
  query GET_AUTHOR_POSTS($where: UserWhereUniqueInput!, $take: Int, $skip: Int) {
    user(where: $where) {
      id
      name
      posts(orderBy: [{ createdAt: desc }], take: $take, skip: $skip) {
        title
        tags {
          name
          id
        }
        author {
          id
          name
        }
        id
        headerImage {
          id
        }
        blurb
        tags {
          name
          id
        }
      }
    }
  }
`;

const GET_TAG_POSTS = gql`
  query GET_TAG_POSTS($tagWhere: TagWhereUniqueInput!, $take: Int, $skip: Int) {
  tag(where: $tagWhere) {
    id
    name
    posts(orderBy: [{ createdAt: desc }], take: $take, skip: $skip) {
      tags {
        id
        name
      }
      author {
        id
        name
      }
      title
      headerImage {
        id
      }
      blurb
      id
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

const GET_PAGE_BY_NAME = gql`
  query GET_PAGE_BY_NAME($where: PageWhereUniqueInput!) {
    page(where: $where) {
      content {
        document
      }
    }
  }
`;

export {
  GET_ALL_POSTS,
  GET_RECENT_POST_TITLES,
  GET_AUTHOR_POSTS,
  GET_POST_BY_ID,
  GET_TAG_POSTS,
  GET_PAGE_BY_NAME
}