const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLBoolean
} = require('graphql')
const type = require('./type')
const Device = require('./devicetypeModels')

// Defines the mutations
module.exports = {
    addDevice: {
        type,
        args: {
            DeviceType:   { type: new GraphQLNonNull(GraphQLString) },
            IsActive:  { type: new GraphQLNonNull(GraphQLBoolean) },
        },
        resolve: Device.createEntry.bind(Device)
    },
    updateDevice: {
        type,
        args: {
            ID:     { type: GraphQLID },
            DeviceType:   { type:new GraphQLNonNull(GraphQLString) },
            IsActive:  { type: new GraphQLNonNull(GraphQLBoolean) },
        },
        resolve: Device.updateEntry.bind(Device)
    }
}