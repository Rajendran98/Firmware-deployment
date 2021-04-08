import { GraphQLObjectType } from 'graphql'
// const deviceMutation=require('../Model/devicetype/mutationsModels')
// const otapcommandMutation=require('../Model/otapcommand/mutationsModels')
const otapcommandMutation=require('../Model/otapcommand/mutationModels')

const firmwaredetailcMutation=require('../Model/firmwaredetailC/mutationModels')
module.exports= new GraphQLObjectType({
    name:'RootMutationsType',
    fields:{
        addotapcommand:otapcommandMutation.addotapcommand,
        updateotapcommand:otapcommandMutation.updateotapcommand,
        addDetailC:firmwaredetailcMutation.addDetailC,
        updateDetailC:firmwaredetailcMutation.updateDetailC
        
    }
}) 
