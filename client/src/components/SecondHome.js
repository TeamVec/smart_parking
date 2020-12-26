import React from 'react'
import List from './List'
import MapSecondHome from './MapSecondHome'
import Header from "./Header";

class SecondHome extends React.Component {
    state={parkingList:[]}
    componentDidMount(){
      fetch("http://localhost:5000/user/parkings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
       
        },
        body: JSON.stringify({ lat:23.195102 ,lng:79.99634396 }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({parkingList:data});
        });
    }
    render(){
        if(!this.state.parkingList){
            return(
                <div>
                    Loading..
                </div>
            )
        }
    return (
        <div>
            <Header/>
        <div className="secondHome">
            <List parkingList={this.state.parkingList}/>
            <MapSecondHome parkingList={this.state.parkingList}/>
        </div>
        </div>
    )
    }
}
export default SecondHome
