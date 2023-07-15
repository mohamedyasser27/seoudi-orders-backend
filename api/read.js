const { query } = require("../db");
const SelectSql =
  "SELECT id,order_number,order_date,customer_id, CASE delivered WHEN 0 THEN 'not delivered' ELSE 'delivered' END AS pct,order_total,order_tax FROM orders";
async function readTable() {
  return await query(SelectSql);
}

async function readTableSorted(name) {
  const querySql = `${SelectSql} ORDER BY ${name}`;
  return await query(querySql);
}

async function readTableColumns() {
  const metadata = await query("SHOW COLUMNS FROM orders");
  return metadata.map((columnMetaData) => columnMetaData.Field);
}

module.exports = { readTable, readTableColumns, readTableSorted };
