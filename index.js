const express = require("express");

const route = require("./routes/client/index.route")

const app = express();
const port = 3000;

app.set("views", "./view");
app.set("view engine", "pug");

// Routes
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});



