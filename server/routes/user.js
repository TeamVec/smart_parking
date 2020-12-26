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
    "SELECT parking_id,p_name,latitude,longitude,p_description,fare_car,address,spots,verified,COUNT(parking_id) as booked  from \
    (SELECT parking_id,p_name,latitude,longitude,p_description,fare_car,address,spots,verified from parking_details where ( 6371 * acos( cos( radians(23.195102) ) * cos( radians( latitude ) ) *\
    cos( radians( longitude ) - radians(79.99634396) ) + sin( radians(23.195102) ) *\
    sin( radians( latitude ) ) ) ) <2)as t2 natural join booking WHERE (arival<13 AND 13<checkout)OR(arival<16 AND 16<checkout) GROUP BY parking_id",
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
