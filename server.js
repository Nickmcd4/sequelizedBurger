var express = require("express");
var method = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var port = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(method("_method"));
// parse application/json
app.use(bodyParser.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burger-controller")(app);

db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log("Connected to port " + port);
	});
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
