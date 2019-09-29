const { ApolloServer, gql } = require('apollo-server-micro')
const getTjommiData = require('../../lib/get-tjommi-data')

const typeDefs = gql`
  type Student {
    _id: String,
    name: String,
    uid: String,
    username: String,
    address: String,
    phone: String,
    mail: String,
    groups: String,
    school: String,
    type: String
  }

  type Query {
    Students: [Student],
    Student: Student
  }
`

const resolvers = {
  Query: {
    Students: async () => getTjommiData({ type: 'student' }),
    Student: async (root, args, context, info) => getTjommiData({ ...args, type: 'student' })[0]
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: '/api/graphql' })
