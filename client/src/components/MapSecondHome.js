import React, {useState} from 'react'
import ReactMapGL,{Marker} from 'react-map-gl';


function MapSecondHome(props) {
   
    const [viewport, setViewport] = useState({
        latitude:23.1942,
        longitude: 79.9912,
        zoom: 14.5
      });
    return (
        <div className="mapview">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken='pk.eyJ1IjoiYXRpc2hheXpuIiwiYSI6ImNraXlkbDFwajI2enUyem40dGVueHBjaTcifQ.fxrqIh5G0UPvHWU3HUen_Q'
                width="100%"
                height="100%"
                
                mapStyle="mapbox://styles/atishayzn/ckizy2fvf0enk1arukum1qkaj"
                onViewportChange={(viewport) => setViewport(viewport)}
            >
            {props.parkingList.map(parking=>(
                <Marker
                key={parking.p_name}
                latitude={parking.latitude}
                longitude={parking.longitude}
                >
                    
               <img style={{height:'40px',width:'30px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/500px-Map_marker.svg.png" alt=''/>
                <div>{parking.p_name}</div>
                </Marker>
                
            ))}  
                
            
                
            </ReactMapGL>
            
        </div>
    )
}

export default MapSecondHome
