const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const apirouter = require("./routes/apiRoutes");
const htmlrouter = require("./routes/htmlRoutes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api",apirouter); 
app.use("/",htmlrouter);

app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
})