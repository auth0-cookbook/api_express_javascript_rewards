const { db, accountsCollection } = require("../data/db");

const findAccountById = (id) => {
  return db
    .get(accountsCollection)
    .find({ id: parseInt(id, 10) })
    .value();
};

module.exports = {
  findAccountById,
};
