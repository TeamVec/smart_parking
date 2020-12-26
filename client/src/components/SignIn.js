import React, { useState } from "react";
import { Link} from "react-router-dom";
import history from '../history'
import Header from './Header'

function SignIn() {
    const [check,setCheck]= useState("");
    const [user, setNote] = useState({
      username: "",
      password: ""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value,
        };
      });
    }
    
  
    function signIn(event) {
      event.preventDefault();
      fetch("http://localhost:5000/auth/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email: user.username, password: user.password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.token){
          
            // const accessToken = data.token;
          
         
           window.sessionStorage.setItem("type", "user");
           window.sessionStorage.setItem("email",data.userData.email_id );
           window.sessionStorage.setItem("isSignedIn","yes");

           history.push("/");
          }
          else if(data.response==="wrong"){
            setCheck("Wrong password");
          }
          else if(data.response==="notRegistered"){
              setCheck("User not registered");
          }
          
        });
    }
  
   
  
    return (
      <div>
       <Header /> 
      <div className="signin">
        <h3 className="sign">Sign In</h3>
        <form>
          <input name="username" onClick={()=>{setCheck("")}} onChange={handleChange} className="input" type="email" placeholder="Email" />
          <input name="password" onClick={()=>{setCheck("")}} onChange={handleChange} className="input confirm" type="password" placeholder="Password" />
          <p className="match">{check}</p>
          <button onClick={signIn} className="button signupbutton">Sign In</button>
        </form>
        <p className="or">or</p>
  
          <a className="google" href="https://my-keeper-server.herokuapp.com/auth/google"><div>
            <img className="x" src="google.png" alt="GOOGLE" />
            <p className="x bold"> Google</p>
          </div></a>
  
        <br />
        <div className="newtokeeper">
          <p className="y">New to Park Here?</p>
          <Link to="/signup">
            <p className="up x y">Signup</p>
          </Link>
        </div>
      </div>
      {/* <Footer/> */}
       </div>
    );
}

export default SignIn
