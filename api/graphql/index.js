const { ApolloServer, gql } = require('apollo-server-micro')
const getStudents = require('../../lib/get-students-query')
const getStudent = require('../../lib/get-student-query')

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
    Students: async () => getStudents(),
    Student: async (root, args, context, info) => getStudent(args)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = server.createHandler({ path: '/api/graphql' })
