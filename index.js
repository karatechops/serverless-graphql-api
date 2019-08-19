import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    hello
  }
`;

const Index = ({ data }) => <p>{data.hello}</p>;

export default Index;
