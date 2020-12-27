
export const createBooking=(dates)=>{
    return{
       type:'CREATE_BOOKING',
       payload: {
           
           startDate:dates.startDate,
           endDate:dates.endDate
       },
    };
}
export const getLocation=(location)=>{
    return{
       type:'GET_LOCATION',
       payload: {
           location,
       },
    };
}
