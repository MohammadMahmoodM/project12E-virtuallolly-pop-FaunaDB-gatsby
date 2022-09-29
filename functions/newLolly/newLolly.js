const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require("faunadb");
const q = faunadb.query;
const shortid = require("shortid");

const typeDefs = gql`
  type Query {
    hello: String
    getLolly(lollyPath: String!): Lolly
  }
  type Lolly {
    id: ID!
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!, message: String!,senderName: String!, flavourTop: String!,flavourMiddle: String!,flavourBottom: String!) : Lolly
  }
`

const client = new faunadb.Client({ secret: "fnAExepwyrACTydEpuHOltIZn6gMcvD9n01OqtmS" });

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, Lolly!'
    },
    getLolly: async (_, { lollyPath }) => {
      console.log("Helo world = ", lollyPath);
      var result = await client.query(
        q.Get(q.Match(q.Index("lolly_by_path"), lollyPath))

      )
      console.log("Lolly result get = ", result.data);
      return result.data;
    }
  },
  Mutation: {
    createLolly: async (_, args) => {

      // console.log("args = ",args);

      const id = shortid.generate();
      args.lollyPath = id

      try {
        const result = await client.query(
          q.Create(q.Collection("lollies"), {
            data: args
          })
        );

        console.log('result', result);
        console.log('result', result.data);
        return result.data
      }
      catch (error) {
        console.log("server error = ", error);
        return {
          error: error.message
        }
      }
    }
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()