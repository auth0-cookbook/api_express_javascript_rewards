require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { rewardsRouter } = require("./rewards/rewards.router");

const PORT = parseInt(process.env.PORT, 10);

const app = express();
const rewardsApiRouter = express.Router();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", rewardsApiRouter);
rewardsApiRouter.use("/rewards", rewardsRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Rewards API serving resources on PORT:${PORT}`);
});
