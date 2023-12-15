
const connection = require('./connection')

async function del(colName, query) {
    let db = await connection()
    const col = db.collection(colName);

    // Delete the document into the specified collection        
    const deleteResult = await col.deleteMany(query);
    return deleteResult
}

module.exports = del