const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

require("./db/connection");
const router = require("./router/route");
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send(`hello mernapi`);
});

app.listen(port, () => {
  console.log(`listrning to port ${port}`);
});
