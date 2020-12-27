import React from 'react'
import { Link } from 'react-router-dom'
import './ListItem.css'

class ListItem  extends React.Component {
    render(){
        console.log(this.props)
        return (
               
                <div className='list-item item'  style={{alignItems:"center"}}>
                    <img className='ui image' src={this.props.image} alt='' style={{borderRadius:"5px"}}/>
                        
                    <Link to={`/description/${this.props.id}`} style={{color:'black',textDecoration:'none'}} className='content'>
                            <h3 style={{color:"#2e368f",fontWeight:"1000"}}>
                                {this.props.name}
                            </h3>
                            <div>
                            {this.props.address}
                            </div>
                            <h5 style={{marginTop:'10px'}}>
                                {`Car Fare :  ${this.props.carFare==null?"Not Available":`₹ ${this.props.carFare} /hour`} `}
                            </h5>
                            <h6>
                            {`Available spots : ${this.props.available}`}
                            </h6>
                        </Link>
                </div>
                
        )
    }
}

export default ListItem
