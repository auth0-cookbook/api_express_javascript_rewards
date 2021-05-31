require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { accountsRouter } = require("./accounts/accounts.router");

const PORT = parseInt(process.env.API_SERVER_PORT, 10);

const app = express();
const rewardsApiRouter = express.Router();

app.use(cors({ origin: process.env.CLIENT_ORIGIN_URL }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rewardsApiRouter);
rewardsApiRouter.use("/rewards/accounts", accountsRouter);

app.use(function (req, res) {
  res.status(404).json({
    message: "Not Found",
  });
});

app.use(function (err, req, res, next) {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "internal error";

  console.error(err);
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`Rewards API serving resources on PORT:${PORT}`);
});
