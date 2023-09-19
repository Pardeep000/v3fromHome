import { gql } from "@apollo/client";
import userFields from "src/graphql/fragments/user";

const MeQuery = gql`
  query Me($accessToken: String) {
    me(accessToken: $accessToken) {
      ...userFields
    }
  }
  ${userFields}
`;
export default MeQuery;
