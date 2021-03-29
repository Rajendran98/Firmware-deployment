const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
// const mutation = require('./mutations')
const DetailC=require('./firmwaredetailCModels')

// Defines the queries
module.exports = {
    detailC: {
    type: new GraphQLList(type),
    args: {
        Name: {
            type: GraphQLString
        },
        ServerIP: {
            type: GraphQLString
        },
        UserName:{
            type: GraphQLString
        },
        Password:{
            type:  GraphQLString
        }
    
    },
    resolve: DetailC.findMatching.bind(DetailC)
},
firmwaredetailC: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: DetailC.getByID.bind(DetailC)
}
}