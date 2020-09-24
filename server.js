var mongoose = require("mongoose");
var express = require("express");
var morgan = require("morgan");

var app = express();
app.use(morgan("dev"))

var PORT = process.env.PORT || 3000;

var user = require("./models")

app.use(express.json());
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/infinite-meadow", 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
   });

// ==================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "exercise.html"));
  });

app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "stats.html"));
  });

// ==================================





app.listen(3000, () => {
    console.log("App running on port 3000!");
  });