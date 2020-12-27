import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Map  from './Map'


class ParkingDescripition extends React.Component {
    state={parking:null}
    componentDidMount(){
       const park_id=this.props.match.params.id;
        fetch("http://localhost:5000/user/parkingDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
     
      },
      body: JSON.stringify({ park_id:park_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({parking:data[0]})
        console.log(data)
      });

    }

    render(){
        const {id}=this.props.match.params;
        if(!this.state.parking){
            return(<div>Loading..</div>)
        }
        return (
            <div>
                <Header/>
            <div className='ui container' style={{margin:"0" ,backgroundColor: "#ffffff", backgroundImage: 'url("https://www.transparenttextures.com/patterns/green-gobbler.png")',height:"91vh",width:"100%" ,paddingTop:"30px"}}>
                <div  className='ui grid'>
                    <div className='seven wide column'>
                        
                        <div style={{width:'100%'}} className='ui card'>
                            <div className='content'>
                                <h2>{this.state.parking.p_name} </h2>
                                <h5>{this.state.parking.address}</h5>
                                <h4>{`Car Fare :  ${this.state.parking.fare_car==null?"Not Available":`₹ ${this.state.parking.fare_bike} / hour`} `}</h4>
                                <h5>{`Bike Fare : ₹ ${this.state.parking.fare_bike} / hour`}</h5>
                            </div>
                            <div className='content'>
                                <h4>About This Facility</h4>
                                <img style={{height:'250px',width:'100%'}} src="https://d2uqqhmijd5j2z.cloudfront.net/files/44237/gallery/44237.jpeg" alt=''></img>
                                <div className='ui small feed'>
                                    <div className='event'>
                                        <div className='summary'>
                                        {this.state.parking.p_description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className='extra button'>
                            <Link to={`/bookingDetails/${id}`}>
                            <button  className='ui primary button'>
                            BOOK NOW
                            </button> 
                            </Link>
                            </div>
                                  
                                
                        </div>
                        
                        
                    </div>
                    <div className='nine wide column'>
                        <Map latitude={this.state.parking.latitude} longitude={this.state.parking.longitude} name={this.state.parking.p_name} />    
                    </div>

                </div>
                
            </div>
            </div>
        )
    }  
}

export default ParkingDescripition
