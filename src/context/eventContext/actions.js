import { SET_END_DATE, SET_END_TIME, SET_LOCATION, SET_START_DATE, SET_START_TIME } from "./type"

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
const setLocation = (dispatch,location) => {
  dispatch({
    type: SET_LOCATION,
    payload: location
  })
}

export {
  setStartDate,
  setEndDate,
  setStartTime,
  setEndTime
}