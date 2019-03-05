const express = require("express");
const app = express();
const port: number = 3000;
const graphqlHTTP = require("express-graphql");
const schema: object = require("./schema.graphql");
const rootValue: object = require("./resolvers.graphql");
const db: any = require("../database/index.knex.ts");

app.use(express.static(__dirname + "/../dist"));
app.use(
  "graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(
  port,
  (): void => console.log(`Server is listening on port ${port}!`)
);

export {};
