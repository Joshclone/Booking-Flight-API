const Flight = require("../models/Flight");

//Book a flight
exports.bookFlight = (req, res) => {
    //validate
    
    //create a flight
    const flight = new Flight({
        title: req.body.title || "Untitled Flight Plan",
        time: req.body.time,
        price: req.body.price,
       date: req.body.date
    });

    //save into database
    flight.save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while booking your flight plan.",
            });
        });
};

//retrieving all flight Plans
exports.findAll = (req, res) => {
    Flight.find()
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving flightplans."
            });
        });
};

//find a single flight plan with a flight Unique Nos (flightId)
exports.findOne = (req, res) => {
    Flight.findById(req.params.flightId)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Flight details not found with id " + req.params.flightId,
                });
            }
            res.send(data);
        }).catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Flight details not found with id " + req.params.flightId,
               
                });
            }
            return res.status(500).send({
                message: "Error retrieving Flight details with id " + req.params.flightId,
               
            });
        });
};


//update flight details
exports.flightUpdate = (req, res) => {
    Flight.findByIdAndUpdate(req.params.flightId, {
        title: req.body.title || "Untitled Flight Plan",
        time: req.body.time,
        price: req.body.price,
        date: req.body.date

    }, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Flight details not found with id " + req.params.flightId,
                });
        
            } res.send(data);
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Flight details not found with id " + req.params.flightId,
               
                });
            }
            return res.status(500).send({
                message: "Error updating Flight details with id " + req.params.flightId,
               
            });
        });
};

exports.deleteFlight = (req, res) => {
    Flight.findByIdAndRemove(req.params.flightId)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Flight details not found with id " + req.params.flightId,
                });
        
            } res.send({ message: "Flight booking deleted successfully! " });
        })
        .catch((err) => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: "Flight details not found with id " + req.params.flightId,
               
                });
            }
            return res.status(500).send({
                message: "Error updating Flight details with id " + req.params.flightId,
               
            });
        });
};

