import React from 'react'

class PreviousBookingItem extends React.Component{
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
          });
    }
    render(){
        return (
            <div style={{width:'100%'}} className='item'>
                    <img style={{maxWidth:'200px'}} className='ui image' src="https://i2-prod.manchestereveningnews.co.uk/incoming/article11742783.ece/ALTERNATES/s615/car-park.jpg" alt=''/>
                        <div  className='content'>
                            <h3>
                                Yuvraj car Parking
                            </h3>
                            <h4>
                                Start Date:
                            </h4>
                            <h5>
                                End Date:
                            </h5>
                        </div>
                        <div className='right floated content'>
                                <button  className="ui secondary button">
                                    CANCEL BOOKING
                                </button>
                            
                            </div>
                </div>
        )

    }
    
}

export default PreviousBookingItem
