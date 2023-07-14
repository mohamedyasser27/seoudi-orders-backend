const { query } = require("../db");
async function readTable() {
  const data = await query("SELECT * FROM orders");
  data.forEach((row) => {
    row["flag"] = row["flag"] == 1 ? "delivered" : "not delivered";
  });
  return data;
}
async function readTableColumns() {
  const metadata = await query("SHOW COLUMNS FROM orders");
  const columnNames = metadata.map((columnMetaData) =>
    columnMetaData.Field.split("_").join(" ")
  );
  columnNames.forEach((item, index) => {
    if (item === "flag") {
      columnNames[index] = "delivered";
    }
  });
  return columnNames;
}

module.exports = { readTable, readTableColumns };
