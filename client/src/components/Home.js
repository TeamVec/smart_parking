import 'date-fns'
import React from 'react'
import {Field,reduxForm} from 'redux-form'
import history from '../history'
import DatePicker from 'react-datepicker'
import Header from './Header'
import "react-datepicker/dist/react-datepicker.css";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { getDate } from 'date-fns'
import { createBooking ,getLocation} from "../actions";
import { connect } from 'react-redux'

class Home extends React.Component {
    
    state = { startDate: new Date(), endDate: new Date() }
    
    renderInput({input,meta}){
        return(
            <div className="cont">         
            <div className="input-group input-group-lg field" style={{width: "740px",display:"block" ,fontSize: "1.2em"}}>
            <input {...input} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
            autoComplete='off' placeholder='location..'></input>
            <div className="ui error message">
            {meta.touched && meta.error}
            </div>
            </div>
            </div>

        )

    }
    
    onSubmit= async (formValues)=>{
        const endDate=this.state.endDate.getTime()
        //console.log(formValues)
        //history.push('/list')
        this.props.createBooking({startDate:this.state.startDate.getTime(),endDate:this.state.endDate.getTime()} )
        this.props.getLocation(formValues.location)
        //window.sessionStorage.setItem("startDate",this.state.startDate.getTime() );
        //window.sessionStorage.setItem("endDate", this.state.endDate.getTime);
        //console.log(JSON.stringify(this.state.startDate).slice(1,11))
        //console.log(this.state.endDate.getTime())
        
    }
    onLocationsubmit=() =>{
        
            const myLocation={lat:null,long:null}

            window.navigator.geolocation.getCurrentPosition(
            position =>{myLocation.lat=position.coords.latitude;
                myLocation.long=position.coords.longitude;
                console.log(myLocation);
                window.sessionStorage.setItem("start", this.state.startDate.getTime());
                window.sessionStorage.setItem("end", this.state.endDate.getTime());

                history.push(`/list/${myLocation.lat}/${myLocation.long}`)
            },
            err => { console.log(err.message); }
        ) 
    }
    render(){ 
        return (
            <div>
                <Header/>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
                    <Field name='location' component={this.renderInput}/>
                    {/* <DatePicker
                     selected={this.state.startDate}
                     onChange={date=>this.setState({startDate:date})}
                     dateFormat='yyyy/MM/dd'
                    /> */}
                    
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* <Grid container justify="center"> */}
      
      <div  className="datetime" style={{background: "rgba(255, 255,255)"}}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={this.state.startDate}
          onChange={date=>this.setState({startDate:date})}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          minDate={new Date()}
        />
        
  
        <ArrowForwardIcon/>
        
         <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={this.state.endDate}
          onChange={date=>this.setState({endDate:date})}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          minDate={new Date()}
        />
         </div>
         <div  className="datetime2" style={{background:"white"}}>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Start Time"
          value={this.state.startDate}
          onChange={date=>this.setState({startDate:date})}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          minDate={new Date()}
        />
        <ArrowForwardIcon/>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="End Time"
          value={this.state.endDate}
          onChange={date=>this.setState({endDate:date})}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          minDate={new Date()}
        />
         </div>
    </MuiPickersUtilsProvider>
                    
                    <button  className="btn btn-info cont-button" style={{fontSize: "1.6em",backgroundColor: "rgb(245, 6, 6)",borderColor: "rgb(245, 6, 6)"}}>Search</button>
                </form>
                <button onClick={this.onLocationsubmit} className="btn btn-info cont-button2" style={{fontSize: "1.2em",backgroundColor: "rgb(245, 6, 6)",borderColor: "rgb(245, 6, 6)"}}>
                    Find Parkings Nearby
                    <i className='location arrow icon'></i>
                </button>
                
        
            </div>
        )
    } 
}
const validate =formValues=>{
    const errors={}
    if(!formValues.location){
        errors.location='You must enter a location.'
    }
    return errors
    }


const form= reduxForm({
 form:'home',
 validate:validate,
})(Home);

export default connect(null,{createBooking,getLocation})(form)
