const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./src/data/db.json", {
  defaultValue: { accounts: {} },
});

const db = low(adapter);
const accountsCollection = "accounts";

module.exports = { db, accountsCollection };
