const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolves = {
  Query: {
    hello: () => 'world!'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolves,
  playground: true
});

export.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  }
});
