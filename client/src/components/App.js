import React from 'react'
import {Router,Route,Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import SecondHome from './SecondHome'
import history from '../history'

function App() { 
        return(
            <div className='App'>
                <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Home}/> 
                        <Route path='/list' exact component={SecondHome}/>
                    </Switch>        
                </div> 
                </Router>   
            </div>
        );

    
}

export default App
