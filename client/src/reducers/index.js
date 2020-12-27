import { combineReducers } from "redux";
import {reducer } from 'redux-form'
const INITIAL_STATE={
    location:null,
    startDate:'',
    endDate:'',
    firstName:'',
    lastName:'',
    mobile:''
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
    case 'ENTRIE':
                return{...state,
                    firstName:action.payload.firstName,
                    lastName:action.payload.lastName,
                    mobile:action.payload.mobile
                }
     default:
        return state
}}

export default combineReducers({
    form:reducer,
    bookReducer:bookReducer
   
})