const express = require("express");
const app = express();
const port = 3000;
const db = require("./models");

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, OPTIONS, PUT, DELETE"
  );
  next();
});
app.use(
  express.urlencoded({
    extended: true,
  })
);

const userRoutes = require("./router/user");
const walletRoutes = require("./router/wallet");

app.use("/user", userRoutes);
app.use("/wallet", walletRoutes);

db.sequelize.sync().then((res) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
