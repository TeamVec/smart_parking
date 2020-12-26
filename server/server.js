const express = require("express")
const cors = require("cors");
const bodyParser= require("body-parser")
const user = require("./routes/user")
const auth = require("./routes/auth")
const host = require("./routes/host")



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user",user);
app.use("/auth",auth);
// app.use("/host",host);




app.listen(5000,function(req, res){
    console.log("server is listening on 5000")
})