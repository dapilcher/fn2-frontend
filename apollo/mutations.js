import { gql } from "@apollo/client";

const INCREMENT_POST_VIEWS = gql`
  mutation INCREMENT_POST_VIEWS($id: ID!, $views: Int!) {
    updatePost(where: {id: $id}, data: {views: $views}) {
      views
    }
  }
`;

const UPDATE_AVG_TIME_ON_PAGE = gql`
  mutation UPDATE_AVG_TIME_ON_PAGE($id: ID!, $time: Int!) {
    updatePost(where: {id: $id}, data: {avgTimeOnPage: $time}) {
      avgTimeOnPage
    }
  }
`;

export { INCREMENT_POST_VIEWS, UPDATE_AVG_TIME_ON_PAGE };