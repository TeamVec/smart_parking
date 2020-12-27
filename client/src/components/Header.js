import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import  history  from "../history";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    temp=''
    componentDidMount(){
        this.temp=window.sessionStorage.getItem("isSignedIn");
        console.log(this.temp)
    }
    signout=()=>{
        window.sessionStorage.removeItem("isSignedIn");
        window.location.reload()
    }
    renderAuth(){
        if(this.temp!="yes"){
            return(
                <div>
                    <Link style={{textDecoration:'none',fontWeight:"500"}} to='/hostsignin' className='item'>Host</Link>
                    <Link style={{textDecoration:'none',fontWeight:"500"}} to='/signUp' className='item'> SignUp</Link>
                    <Link style={{textDecoration:'none',fontWeight:"500"}} to='/signIn' className='item'>SignIn</Link>
                </div>
            )
        }
        else{
            return(
                <div>
                <Link style={{textDecoration:'none',fontWeight:"500"}} to='/previousBookings' className='item'>Previous Bookings</Link>
                <button onClick={this.signout} style={{textDecoration:'none',fontWeight:"500",backgroundColor:"grey"}}  className='item'>SignOut</button>
            </div>
                
            )
        }
    }

    render(){
    return (
        <div className="navbar" style={{backgroundColor: "grey", padding:"10px 32px"}}>
            <Link style={{textDecoration:'none'}} to='/' className='item'>
                <h1><img src="https://cdn.iconscout.com/icon/free/png-512/p-6-675564.png" alt='' height="50px" className="grayscale"/>
               <span style={{color:'white'}}>ark</span>Here</h1>
            </Link>
            <div >
                
                {this.renderAuth()}
                </div>
            </div>   
    );
    }
}
export default Header
