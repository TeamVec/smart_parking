import React from 'react'
import {Router,Route,Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import './App.css'
import history from '../history'

function App() {
        
        return(
            <div className='App'>
                <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home}/> 
                    </Switch>
                        
                </div> 
                </Router>   
            </div>
        );

    
}

export default App
