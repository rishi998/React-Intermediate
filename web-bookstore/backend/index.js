const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Mern hai ji ye");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
