const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat
} = require('graphql')
const type = require('./type')
// const mutation = require('./mutations')
const Deviceinfo=require('./devicefirmwareinfoModels')

// Defines the queries
module.exports = {
    deviceInfo: {
    type: new GraphQLList(type),
    args: {
        ID: {
            type: GraphQLID
        },
        IPConfigured: {
            type: GraphQLString
        },
        Port: {
            type: GraphQLInt
        }
    
    },
    resolve: Deviceinfo.findMatching.bind(Deviceinfo)
},
devicefirmwareinfo: {
    type,
    args: {
        ID: {
            type: GraphQLID
        }
    },
    resolve: Deviceinfo.getByID.bind(Deviceinfo)
}
}