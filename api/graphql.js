const { ApolloServer, gql } = require('apollo-server-lambda');
const { prisma } = require('../prisma/generated/prisma-client');

const typeDefs = gql`
  type Users {
    id: ID!
    name: String!
  }
  type Query {
    hello: String!
    users: [Users!]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world!',
    users: () => prisma.users()
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});
