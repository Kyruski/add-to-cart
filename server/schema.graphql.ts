const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    product(id: ID!): Product!
  }
  type Product {
    id: ID!
    product_name: String!
    price: String!
  }
`);

module.exports = schema;
