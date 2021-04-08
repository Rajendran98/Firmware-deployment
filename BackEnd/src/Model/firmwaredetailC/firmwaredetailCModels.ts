const dbqueries=require('../../config/dbqueries')
const mysqlwrapper=require('../../config/mysqlwrapper')

export class DetailC extends dbqueries {
    static find: any
    static findAll: any
    static findByFields: any
    static insert: any
    static update: any

    //  Overrides TABLE_NAME with this class' backing table at MySQL
    static get TABLE_NAME() {
        return 'firmwaredetailc'
    }

     // Returns a device by its ID
    static async getByID(_: any, {ID}: { ID: any }) {
        return await this.find(ID)
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

    static async createEntry(_: any, {type, price}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    type,
                    price
                }
            })

            return this.getByID(_, {ID: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a device
     */
    static async updateEntry(_: any, {ID, Name, FileSize}: any) {
        const connection = await mysqlwrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                ID,
                data: {
                    Name,
                    FileSize
                }
            })

            return this.getByID(_, {ID})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = DetailC;