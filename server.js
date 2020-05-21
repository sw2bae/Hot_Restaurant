const express = require("express");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const reservations = [];
// const waitList = [];


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/make", function (req, res) {
//     res.sendFile(path.join(__dirname, "make.html"));
// });

// app.get("/view", function (req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
// });





// app.get("/api/reservations", function (req, res) {
//     return res.json(reservations);
// });

// app.get("/api/waiting-list", function (req, res) {
//     return res.json(waitList);
// });






// app.post("/api/reservations", function (req, res) {
//     const newReservation = req.body;
//     if (reservations.length < 5) {
//         reservations.push(newReservation);
//     } else {
//         waitList.push(newReservation);
//     }
//     res.json(newReservation);
// });

// app.post("/api/clear",function(req,res){
//     reservations.length = 0;
//     waitList.length = 0;
// });




app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
})