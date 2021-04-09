import { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'
const type = require('./type')
const DetailC = require('./firmwaredetailCModels')

// Defines the mutations
module.exports = {
    addDetailC: {
        type,
        args: {
            ID: {
                type: new GraphQLNonNull(GraphQLID)
            },
            Name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            // FileSize:{
            //     type: new GraphQLNonNull(GraphQLInt)
            // },
            isfirmware:{
                type:new GraphQLNonNull(GraphQLBoolean)
            }
        },
        resolve: DetailC.createEntry.bind(DetailC)
    },
    updateDetailC: {
        type,
        args: {
            ID:     { type: GraphQLInt },
            Name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            FileSize:{
                type: new GraphQLNonNull(GraphQLInt)
            },
        },
        resolve: DetailC.updateEntry.bind(DetailC)
    }
}