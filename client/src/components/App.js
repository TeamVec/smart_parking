import React from 'react'
import {Router,Route,Switch } from 'react-router-dom'
import './App.css'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ParkingDescription from './ParkingDescription'
import ConfirmBooking from './ConfirmBooking'
import history from '../history'
import SecondHome from './SecondHome'
import PreviousBooking from './PreviousBooking'


function App() {
        
        return(
            <div className='App'>
                <Router history={history}>
                <div>
                    
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/signIn' exact component={SignIn}/>
                        <Route path='/signUp' exact component={SignUp}/>
                        <Route path='/list/:lat/:long' exact component={SecondHome}/>
                        <Route path='/description/:id' exact component={ParkingDescription}/>
                        <Route path='/confirmBooking' exact component={ConfirmBooking}/>
                        <Route path='/previousBookings' exact component={PreviousBooking}/>
                    </Switch>
                        
                </div> 
                </Router>   
            </div>
        );

    
}

export default App
