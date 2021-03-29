const { GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
} = require('graphql')
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
    type,
    args: {
        DeviceType: {
            type: GraphQLString
        }
    },
    resolve: Otherotapcommand.getByDeviceType.bind(Otherotapcommand)
}
}