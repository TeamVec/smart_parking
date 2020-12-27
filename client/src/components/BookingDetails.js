import 'date-fns';
import React from "react";
// import DatePicker from "react-datepicker";
// import date from "date-and-time";
// import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'

function BookingDetails() {
  // state = { startDate: new Date(), endDate: new Date() };
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDateend, setSelectedDateend] = React.useState(new Date());

  const handleClick = ()=>{
    console.log(selectedDate);
    console.log(selectedDateend);
  }
  function handleOnChange(value) {
    this.setState({
       phone: value
    });
 }
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();

    return (
      <div>
        <Header/>
      <div className="bookdetails">
        <h4 style={{paddingTop:"20px"}}>Complete Your Parking Reservation</h4>
        <h2>Yuvraj Parking</h2>
        <div style={{textAlign:"center",display:"inline-flex",marginLeft:"28%",marginTop:"30px"}}>
    
        <h5 style={{marginRight:"10px"}}>FirstName:</h5>
        <TextField
          className="first"
          required
          id="filled-required"
          label="Required"
          placeholder="FirstName"
          variant="filled"
        />
        <h5 style={{marginLeft:"30px",marginRight:"10px"}}>LastName:</h5>
        <TextField
          className="Second"
          required
          id="filled-required"
          label="Required"
          variant="filled"
          placeholder="LastName"
        />
         </div>
   <div className="formControl">
        <h5>Phone number:</h5>
      <input type="tel" id="UserMobile" maxlength="10" data-fv-numeric="true" data-fv-numeric-message="Please enter valid phone numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="Mobile No. " className="form-control" name="data[User][mobile]" data-fv-field="data[User][mobile]" ></input>
      </div>
     
    <Link to='/confirmBooking'>
    <Button variant="contained" color="primary" style={{margin:"5rem 50rem auto 50rem",fontSize: "1.2em"}} onClick={handleClick}>
        Book
      </Button>
    </Link>
      </div>
      </div>
    );
  }

export default BookingDetails;

