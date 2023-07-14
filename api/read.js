const {query} = require("../db");
async function readTable() {
    const data = await query("SELECT * FROM orders");
    return data;
}
async function readTableColumns() {
    const metadata =await query("SHOW COLUMNS FROM orders");
    const columnNames = metadata.map((columnMetaData) => columnMetaData.Field);
    return columnNames;  
}

module.exports = { readTable, readTableColumns };
