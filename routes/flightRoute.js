const express = require('express');
const router = express.Router();
const controller = require('../controllers/flightController');

router.post('/flightBooking', controller.bookFlight);
router.get('/flightBooking', controller.findAll);
router.get('/flightBooking/:Id', controller.findOne);
router.put('/flightBooking/:Id', controller.flightUpdate);
router.delete('/flightBooking/:Id', controller.deleteFlight);






module.exports = router;
