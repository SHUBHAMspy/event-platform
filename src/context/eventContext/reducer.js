import { SET_END_DATE, SET_END_TIME, SET_EVENTNAME, SET_LOCATION, SET_START_DATE, SET_START_TIME } from "./type"

const eventReducer = (state,{type,payload}) => {
  switch (type) {
    case SET_EVENTNAME:
      return {
        ...state,
        eventName: payload
      }
    case SET_LOCATION:
      return {
        ...state,
        location: payload
      }
    case SET_START_DATE:
      return {
        ...state,
        startDate: payload
      }
    case SET_END_DATE:
      return {
        ...state,
        endDate: payload
      }
    case SET_START_TIME:
      return {
        ...state,
        startTime: payload
      }
    case SET_END_TIME:
      return {
        ...state,
        endTime: payload
      }
    
  
    default:
      break;
  }
}

export default eventReducer