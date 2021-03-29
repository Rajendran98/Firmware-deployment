const { GraphQLSchema } = require('graphql')
const query=require('./queriesSchema');
const mutation=require('./mutationsSchema')

module.exports = new GraphQLSchema({
    query,
    mutation
})