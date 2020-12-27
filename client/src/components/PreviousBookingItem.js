import React from 'react'

class PreviousBookingItem extends React.Component{
    
    render(){
        
        return (
            <div style={{width:'100%'}} className='item'>
                    <img style={{maxWidth:'200px'}} className='ui image' src="https://i2-prod.manchestereveningnews.co.uk/incoming/article11742783.ece/ALTERNATES/s615/car-park.jpg" alt=''/>
                        <div  className='content'>
                            <h3>
                                {this.props.name}
                            </h3>
                            <h4>
                                Start Date:
                            </h4>
                            <h5>
                                End Date:
                            </h5>
                        </div>
           
                </div>
        )

    }
    
}

export default PreviousBookingItem
