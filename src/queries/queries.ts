import { gql } from "@apollo/client";

export const GET_TEAM_MEMBERS_BY_TYPE = gql`
  query FindMembersByType($type: String!) {
    findTeamMembersByType(filters: { type: $type }) {
      id
      name
      title
      description
      type
      picture
    }
  }
`;
