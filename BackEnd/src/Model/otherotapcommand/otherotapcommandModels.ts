const dbqueries =require ('./dbqueries')
const mysqlwrapper=require('../../config/mysqlwrapper')

class Otherotapcommand extends dbqueries {
    static find: any
    static findAll: any
    static findByFields: any
    static insert: any
    static getByID: any
    static update: any

    //  Overrides TABLE_NAME with this class' backing table at MySQL
    static get TABLE_NAME() {
        return 'otherotapcommand'
    }

     // Returns a device by its ID
    /**
     * Returns a list of device  matching the passed fields
     * @param {*} CurrentCVersion - Fields to be matched
     */
    static  getByDeviceID(_: any, { CurrentCVersion}: any) {
        return  this.find( CurrentCVersion)
    }

    /**
     * Returns a list of device  matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_: any, fields: {}) {
        // Returns early with all device if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching device
        return this.findByFields({
            fields
        })
    }
    // Creates a new device mutations for update 

    static async createEntry(_: any, {id, type, price}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    type,
                    price
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a device
     */
    static async updateEntry(_: any, {id, type, price}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    type,
                    price
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Otherotapcommand