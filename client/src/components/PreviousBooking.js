import React from 'react'
import PreviousBookingItem from "./PreviousBookingItem";
import Header from './Header'

class PreviousBooking extends React.Component{
    render(){
        return (
            <div>
                <Header/>
            <div className="ui container">
                <div className='ui  relaxed divided list'>
                <PreviousBookingItem/>
                <PreviousBookingItem/>
                <PreviousBookingItem/>
                <PreviousBookingItem/>
                
                </div>
                </div>  
            </div>
        )  
    } 
}

export default PreviousBooking
