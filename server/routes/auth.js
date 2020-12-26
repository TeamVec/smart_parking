const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mysqlConnnection = require("../connection");
const router = express.Router();

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "23h" });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
    if (err) return res.send({ response: 403 });

    req.user = user;
    next();
  });
}

router.post("/user/login", function (req, res) {


  mysqlConnnection.query(
    "SELECT * FROM users WHERE email_id=?",
    [req.body.email],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        if (rows.length < 1) {
          res.send({ response: "notRegistered" });
        } else {
       
          if (rows[0].pswd == req.body.password) {
        
            res.send({ token: "hello" ,
                       userData:rows[0] });
          } else {
            res.send({ response: "wrong" });
          }
        }
        // res.send(rows);
      }
    }
  );
});
router.post("/user/register", function (req, res) {

  mysqlConnnection.query(
    "SELECT * FROM users WHERE email_id=?",
    [req.body.email],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        if (rows.length < 1) {
          mysqlConnnection.query(
            "INSERT INTO users(email_id,pswd) VALUES (?,?)",
            [req.body.email, req.body.password],
            function (err, rows, field) {
              if (err) {
                console.log(err);
              } else {
              
                mysqlConnnection.query( "SELECT * FROM users WHERE email_id=?",
                [req.body.email], function (err, result, field) {
                  if (err) {
                    console.log(err);
                  } else {
                    res.send({ response: "Registered", userData:result[0]  });
                  }})
              }
            }
          );
        } else {
        
          res.send({ response: "alreadyRegistered"});
        }
        // res.send(rows);
      }
    }
  );
});
router.post("/host/login", function (req, res) {

  mysqlConnnection.query(
    "SELECT * FROM owners WHERE email_id=?",
    [req.body.email],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        if (rows.length < 1) {
          res.send({ response: "notRegistered" });
        } else {
     
          if (rows[0].pswd == req.body.password) {
            res.send({ token: "hello" ,
                       userData:rows[0] });
          } else {
            res.send({ response: "wrong" });
          }
        }
        // res.send(rows);
      }
    }
  );
});
router.post("/host/register", function (req, res) {
  
  mysqlConnnection.query(
    "SELECT * FROM owners WHERE email_id=?",
    [req.body.email],
    function (err, rows, field) {
      if (err) {
        console.log(err);
      } else {
        if (rows.length < 1) {
          mysqlConnnection.query(
            "INSERT INTO owners(email_id,pswd) VALUES (?,?)",
            [req.body.email, req.body.password],
            function (err, rows, field) {
              if (err) {
                console.log(err);
              } else {
               
                mysqlConnnection.query( "SELECT * FROM owners WHERE email_id=?",
                [req.body.email], function (err, result, field) {
                  if (err) {
                    console.log(err);
                  } else {
                    res.send({ response: "Registered", userData:result[0]  });
                  }})
               
              }
            }
          );
        } else {
          console.log(rows[0]);
          res.send({ response: "alreadyRegistered"  });
        }
        // res.send(rows);
      }
    }
  );
});

module.exports = router;
