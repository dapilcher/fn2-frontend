import { gql } from "@apollo/client";

const INCREMENT_POST_VIEWS = gql`
  mutation INCREMENT_POST_VIEWS($where: PostWhereUniqueInput!, $data: PostUpdateInput!) {
    updatePost(where: $where, data: $data) {
      views
    }
  }
`;

export { INCREMENT_POST_VIEWS };