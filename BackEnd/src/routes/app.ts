const graphql = require('./graphql')
// const dashboard=require('./graphql')

module.exports = class Routes {
    
    /**
     * Applies the routes to specific paths
     * @param {*} app - The instance of express which will be serving requests.
     */
    constructor(app: any) {
        //Throws if no instance of express was passed
        if (app == null)  throw new Error("You must provide an instance of express")

        //Registers the base GraphQLi base endpoint
        app.use('/graphql', graphql)
        // app.use('/dashboards',dashboard)
    }

}
