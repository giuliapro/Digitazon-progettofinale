const connection = require('./connection')

async function update(colName, filter, updateData) {
    let db = await connection()
    const col = db.collection(colName);

    console.log('Fatto!')

    // Update the document into the specified collection        
    const updateResult = await col.updateOne(filter, { $set: updateData });
    console.log('Updated documents =>', updateResult);

}

module.exports = update