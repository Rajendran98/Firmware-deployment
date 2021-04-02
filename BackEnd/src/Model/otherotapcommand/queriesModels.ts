import { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} from 'graphql'
const type = require('./type')
// const mutation = require('./mutations')
const Otherotapcommand = require('./otherotapcommandModels')

// Defines the queries
module.exports = {
    otherotapcommand: {
    type: new GraphQLList(type),
    Customer: {
        type: GraphQLString
    },
    NetworkProvider: {
        type: GraphQLString
    },
    MobileNo: {
        type: GraphQLInt
    },
    // VehicleTypeName: {
    //     type: GraphQLInt
    // },
    // CurrentCVersion: {
    //     type: GraphQLInt
    // },
    // CurrentJavaVersion: {
    //     type: GraphQLInt
    // },
    // Ignition: {
    //     type: GraphQLString
    // },
    resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
},
otapcommand: {
    type:new GraphQLList(type),
    args: {
        DeviceID: {
            type: GraphQLString
        }
    },
    resolve: Otherotapcommand.findMatching.bind(Otherotapcommand)
}
}