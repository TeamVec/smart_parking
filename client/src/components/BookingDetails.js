import 'date-fns';
import React from "react";
// import DatePicker from "react-datepicker";
// import date from "date-and-time";
// import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function BookingDetails() {
  // state = { startDate: new Date(), endDate: new Date() };
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDateend, setSelectedDateend] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  };
  const handleDateChangeend = (date) => {
    setSelectedDateend(date);
    
  };
  const handleClick = ()=>{
    console.log(selectedDate);
    console.log(selectedDateend);
  }


    return (
      <div className="bookdetails">
        <h4 style={{paddingTop:"20px"}}>Complete Your Parking Reservation</h4>
        <h2>Yuvraj Parking</h2>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      
        <h4>Start</h4>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Start Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
         </Grid>
        <Grid container justify="space-around">
        <h4>End</h4>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={selectedDateend}
          onChange={handleDateChangeend}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label=" End Time"
          value={selectedDateend}
          onChange={handleDateChangeend}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    <Link to='/confirmBooking'>
    <Button variant="contained" color="primary" style={{margin:"10rem 50rem auto 50rem",fontSize: "1.2em"}} onClick={handleClick}>
        Book
      </Button>
    </Link>
      </div>
    );
  }

export default BookingDetails;

