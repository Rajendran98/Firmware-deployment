const mysql= require('../../config/mysqlwrapper');
class dbqueries {
static findById(DeviceID,result){
     mysql.query=`SELECT * FROM otapcommand WHERE DeviceID IN (${DeviceID})`
    let params=[this.TABLE_NAME]

    return mysql.createQuery({
        // baseQuery,
        params
    })
}
}
module.exports=dbqueries










