/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

export const GET_ALL_PROGRAMS = gql`
  query AllPrograms {
    programs {
      id
      title
    }
  }
`;
