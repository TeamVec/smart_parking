const express = require("express");
const mysqlConnnection = require("../connection");
const router = express.Router();

// router.get("/", function (req, res) {
//   mysqlConnnection.query("SELECT * FROM booking", function (err, rows, field) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(rows);
//       res.send(rows);
//     }
//   });
// });

router.post("/bookings", function (req, res) {
  const userId = req.body.email;
  mysqlConnnection.query(
    "SELECT amount_paid,arival,checkout,p_name,address FROM BOOKING,PARKING_DETAILS WHERE booking.user_id=? AND parking_details.parking_id=booking.parking_id",
    [userId],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        if(rows.length>0){
          res.send(rows);
        }
        else{
          res.send("no bookings");
        }
      
      }
    }
  );

});

router.post("/parkingDetails", function (req, res) {
  mysqlConnnection.query(
    "SELECT * FROM parking_details WHERE parking_id=?",
    [req.body.park_id],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});
router.post("/parkings", function (req, res) {

   mysqlConnnection.query(
    "SELECT parking_id,p_name,latitude,longitude,p_description,fare_car,fare_bike,address,spots,verified,owner_id,bike_spots,( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) *\
    cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) *sin( radians( latitude ) ) ) ) AS distance FROM parking_details HAVING\
    distance < 2 ORDER BY distance LIMIT 0 , 20",
    [req.body.lat,req.body.lng,req.body.lat],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

module.exports = router;
