import { SET_APPROVAL, SET_CAPACITY, SET_END_DATE, SET_END_TIME, SET_EVENTNAME, SET_LOCATION, SET_START_DATE, SET_START_TIME, SET_TICKETS, SET_VISIBILITY } from "./type"

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
    case SET_LOCATION:
      return {
        ...state,
        location: payload
      }
    case SET_TICKETS:
      return {
        ...state,
        eventOptions:{
          ...state.eventOptions,
          tickets: payload
        }
      }
    case SET_CAPACITY:
      return {
        ...state,
        eventOptions:{
          ...state.eventOptions,
          capacity: payload
        }
      }
    case SET_VISIBILITY:
      return {
        ...state,
        eventOptions:{
          ...state.eventOptions,
          visibility: payload
        }
      }
    
    case SET_APPROVAL:
      return {
        ...state,
        eventOptions:{
          ...state.eventOptions,
          requireApproval: payload
        }
      }
    
  
    default:
      break;
  }
}

export default eventReducer