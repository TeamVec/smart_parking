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
    "SELECT amount_paid,arival,checkout,p_name,address FROM booking,parking_details WHERE booking.user_id=? AND parking_details.parking_id=booking.parking_id",
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

// ,req.body.start,req.body.start,req.body.end,req.body.end
router.post("/parkings", function (req, res) {
console.log(req.body.lat,req.body.lng)
   mysqlConnnection.query(
    "SELECT parking_id,p_name,arival,checkout,latitude,longitude,p_description,fare_car,address,spots,verified,COUNT(parking_id) as booked  from (SELECT parking_id,p_name,latitude,longitude,p_description,fare_car,address,spots,verified from parking_details where ( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) )\
     * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) <200)\
     as t2 natural join booking WHERE (arival<? AND ?<checkout)OR(arival<? AND ?<checkout) GROUP BY parking_id",
     [req.body.lat,req.body.lng,req.body.lat,req.body.start,req.body.start,req.body.end,req.body.end],
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
