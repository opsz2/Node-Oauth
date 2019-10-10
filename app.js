const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  initializeOauth = require("./middleware/authServer"),
  authenticateRequest = require("./middleware/authenticator");

var app = express();

const authenticationRoutes = require("./routes/oauth");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.oauth = initializeOauth;

app.use(authenticationRoutes);

app.get("/", authenticateRequest, function(req, res) {
  res.send("Secret area");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0-rfjnn.gcp.mongodb.net/oauth?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(result => {
    // console.log(result)
    console.log("connected");
    app.listen(3000);
  })
  .catch(err => console.log("error", err));
