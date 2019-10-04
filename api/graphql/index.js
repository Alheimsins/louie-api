const { ApolloServer, ApolloError, gql } = require('apollo-server-micro')
const getTjommiData = require('../../lib/get-tjommi-data')
const groups = require('../../test/data/groups-dummy.json')

const typeDefs = gql`
  type Student {
    _id: ID
    name: String
    uid: String
    username: String
    address: String
    phone: String
    mail: String
    groups: String
    school: String
    type: String
  }

  type Groups {
    gid: String
    sid: String
    name: String
    description: String
    type: String
  }

  type Query {
    groups: [Groups],
    students: [Student],
    student(username: String): Student
  }
`
const resolvers = {
  Query: {
    students: async () => getTjommiData({ type: 'student' }),
    student: async (_, args) => {
      try {
        const result = await getTjommiData({ username: args.username, type: 'student' })
        return result[0]
      } catch (error) {
        throw new ApolloError(error)
      }
    },
    groups: () => groups
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: '/api/graphql' })
