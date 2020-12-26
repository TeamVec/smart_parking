import React from 'react'
import PreviousBookingItem from "./PreviousBookingItem";

class PreviousBooking extends React.Component{
    render(){
        return (
            <div className="ui container">
                <div className='ui  relaxed divided list'>
                <PreviousBookingItem/>
                <PreviousBookingItem/>
                <PreviousBookingItem/>
                <PreviousBookingItem/>
                
                </div>
                
            </div>
        )  
    } 
}

export default PreviousBooking
