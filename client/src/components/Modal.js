import React from "react";
import ReactDOM from "react-dom";
import './App.css'

const Modal =props=>{
    return ReactDOM.createPortal(
        <div style={{height:'100vh' ,backgroundColor:"white",margin:"0",padding:"0"}} onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={e=>e.stopPropagation()}  >
               <h1 className='header'>
                   {props.title}
               </h1>
               <div className='contentab'>
                  {props.content}
               </div>
               <div className='actions'>
                {props.actions}
               </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )

}
export default Modal;