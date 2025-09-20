import { gql } from "graphql-tag";

export const typeDefs = gql`
  enum Role {
    ORGANIZER
    ATTENDEE
  }

  type User {
    id: ID!
    email: String!
    role: Role!
    credits: Int!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
  }

  type Mutation {
    register(email: String!, password: String!, role: Role): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;
