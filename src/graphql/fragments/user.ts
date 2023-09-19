import { gql } from "@apollo/client";

const userFields = gql`
  fragment userFields on Me {
    id
    settings
    name
    designation {
      paneltype
    }
    pagesData
    pages

    switchaccountsettings
    onlineStatus
    mainSuperAdminId
    managerId {
      id
      name
    }
  }
`;

export default userFields;
