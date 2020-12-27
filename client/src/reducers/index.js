import { combineReducers } from "redux";
import {reducer } from 'redux-form'
const INITIAL_STATE={
    location:null,
    startDate:'',
    endDate:''
};
const bookReducer=(state=INITIAL_STATE,action)=>{
    console.log(state)
    switch(action.type){
    case 'CREATE_BOOKING':
            return{...state,
                startDate:action.payload.startDate,
                endDate:action.payload.endDate
                
            }
    case 'GET_LOCATION':
            return{...state,location:action.payload}        
     default:
        return state
}}

export default combineReducers({
    form:reducer,
    bookReducer:bookReducer
   
})