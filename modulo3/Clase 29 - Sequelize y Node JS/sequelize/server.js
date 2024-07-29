const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");

const app = express();

const corsOptions = {
  origin: "http://localhost:"+ config.PORT
};

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hi there, welcome to this tutorial." });
});

// api routes
require("./routes/book.routes")(app);
require("./routes/contacto.routes")(app);
// set port, listen for requests
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
