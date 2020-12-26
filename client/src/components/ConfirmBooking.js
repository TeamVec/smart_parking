import React from 'react'
import  Modal from './Modal'
import history from "../history";
import { Link } from 'react-router-dom';


class ConfirmBooking extends React.Component{
    renderActions(){
        return(
            <React.Fragment>
                <Link to='/' className='ui primary button'>OK</Link>
            </React.Fragment>
        );
    }
    render(){
        return (
            <div>
            <Modal title='Booking Done!!' 
            content="Your booking has been confirmed please check in previous booking section"
            actions={this.renderActions()}
            onDismiss={()=>history.push('/')}
            />
            </div>
        )
    }
    
}

export default ConfirmBooking
