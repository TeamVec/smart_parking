import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
    
    renderList(){
      return this.props.parkingList.map(parking=>{
        return(
          <ListItem
            key={parking.parking_id}
            id={parking.parking_id}
            name={parking.p_name}
            address={parking.address}
            carFare={parking.fare_car}
            bikeFare={parking.fare_bike}
            image="https://d2uqqhmijd5j2z.cloudfront.net/files/321814/gallery/Screenshot_2.jpg?1543927700"
            summary={parking.p_description}
          />
        )
      })
    }


  render() {
    
    return (
      
      <div
        className="ui container"
      >
       <h2 style={{position:"fixed",padding:"16px"}}>Parking in Jabalpur</h2>
       <div style={{overflowY: "scroll" ,height:"75vh",marginTop:"60px",  border: "1px solid #555",backgroundColor:"white"}}>
        <div className="listItems ui  relaxed divided list " style={{padding:"5px"}}>
          {this.renderList()}        
          
        </div>
        </div>
      </div>
    );
  }
}

export default List;
