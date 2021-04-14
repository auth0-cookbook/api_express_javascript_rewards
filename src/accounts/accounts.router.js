const express = require("express");
const { checkJwt } = require("../authz/check-jwt");

const { findAccountById } = require("./accounts.service");

const accountsRouter = express.Router();

accountsRouter.use(checkJwt);

// GET /api/accounts/:id

accountsRouter.get("/:id", async (request, response) => {
  const id = request.params.id;

  const accountRecord = findAccountById(id);

  if (accountRecord === undefined) {
    response.sendStatus(404);
    return;
  }

  response.json(accountRecord);
});

module.exports = { accountsRouter };
