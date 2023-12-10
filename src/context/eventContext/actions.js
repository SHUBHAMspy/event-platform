import { SET_APPROVAL, SET_CAPACITY, SET_END_DATE, SET_END_TIME, SET_EVENTNAME, SET_LOCATION, SET_START_DATE, SET_START_TIME, SET_TICKETS, SET_VISIBILITY } from "./type"

const setStartDate = (dispatch,date) => {
  dispatch({
    type: SET_START_DATE,
    payload: date
  })
}
const setEndDate = (dispatch,date) => {
  dispatch({
    type: SET_END_DATE,
    payload: date
  })
}
const setStartTime = (dispatch,time) => {
  dispatch({
    type: SET_START_TIME,
    payload: time
  })
}
const setEndTime = (dispatch,time) => {
  dispatch({
    type: SET_END_TIME,
    payload: time
  })
}

const setEventName = (dispatch,name) => {
  dispatch({
    type: SET_EVENTNAME,
    payload: name
  })
}

const setLocation = (dispatch,location) => {
  dispatch({
    type: SET_LOCATION,
    payload: location
  })
}
const setTicketsOption = (dispatch,value) => {
  dispatch({
    type: SET_TICKETS,
    payload: value
  })
}
const setVisibility = (dispatch,value) => {
  dispatch({
    type: SET_VISIBILITY,
    payload: value
  })
}
const setCapacity = (dispatch,value) => {
  dispatch({
    type: SET_CAPACITY,
    payload: value
  })
}
const setRequireApproval = (dispatch,value) => {
  dispatch({
    type: SET_APPROVAL,
    payload: value
  })
}

export {
  setStartDate,
  setEndDate,
  setStartTime,
  setEndTime,
  setLocation,
  setTicketsOption,
  setVisibility,
  setCapacity,
  setRequireApproval,
  setEventName
}