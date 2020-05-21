
module.exports = function(app){

    const reservations = [];
    const waitList = [];

    app.get("/api/reservations", function (req, res) {
        return res.json(reservations);
    });
    
    app.get("/api/waiting-list", function (req, res) {
        return res.json(waitList);
    });
    
    
    
    
    
    
    app.post("/api/reservations", function (req, res) {
        const newReservation = req.body;
        if (reservations.length < 5) {
            reservations.push(newReservation);
        } else {
            waitList.push(newReservation);
        }
        res.json(newReservation);
    });
    
    app.post("/api/clear",function(req,res){
        reservations.length = 0;
        waitList.length = 0;
    });
    
};