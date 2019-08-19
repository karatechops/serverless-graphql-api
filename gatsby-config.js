module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        url: 'http://localhost:8888/.netlify/functions/graphql',
        typeName: 'API',
        fieldName: 'api'
      }
    }
  ]
};
