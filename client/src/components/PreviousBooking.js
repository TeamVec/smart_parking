import React from 'react'
import PreviousBookingItem from "./PreviousBookingItem";
import Header from './Header'

class PreviousBooking extends React.Component{
    state={parkingList:[]}
    componentDidMount(){
        const email_id = window.sessionStorage.getItem("email");
        fetch("http://localhost:5000/user/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ email : email_id }),
        })
          .then((response) => response.json())
          .then((data) => {
            // this.setState({ parking: data[0] });
            console.log(data);
            this.setState({parkingList:data});
          });
    }
    renderList=()=>{
        return this.state.parkingList.map(parking=>{
            return(
              <PreviousBookingItem
                key={parking.parking_id}
                name={parking.p_name}
                startDate={parking.address}
                checkout={parking.checkout}
                image="https://d2uqqhmijd5j2z.cloudfront.net/files/321814/gallery/Screenshot_2.jpg?1543927700"
              />
            )
          })
    }
    render(){
        if(!this.state.parkingList){
            return(<div>Loading..</div>)
        }
        return (
            <div>
                <Header/>
            <div className="ui container">
                <div className='ui  relaxed divided list'>
                {this.renderList()}
                
                </div>
                </div>  
            </div>
        )  
    } 
}

export default PreviousBooking
