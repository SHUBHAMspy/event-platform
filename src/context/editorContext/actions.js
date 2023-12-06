import { SET_BACKGROUND_COLOR, SET_BACKGROUND_IMAGE, SET_DIRECTION, SET_ENDCOLOR, SET_FONTFAMILY, SET_FONTSIZE, SET_STARTCOLOR, SET_TEXT, SET_TEXTCOLOR } from "./types"

const setText = (dispatch,text) => {
  dispatch({
    type: SET_TEXT,
    payload: text
  })
}
const setTextColor = (dispatch,textColor) => {
  dispatch({
    type: SET_TEXTCOLOR,
    payload: textColor
  })
}

const setFontSize = (dispatch,fontSize) => {
  dispatch({
    type: SET_FONTSIZE,
    payload: fontSize
  })
}

const setFontFamily = (dispatch,fontFamily) => {
  dispatch({
    type: SET_FONTFAMILY,
    payload: fontFamily
  })
}

const setBackGrounColor = (dispatch,color) => {
  dispatch({
    type: SET_BACKGROUND_COLOR,
    payload: color
  })
}
const setBackGroundImage = (dispatch,image) => {
  dispatch({
    type: SET_BACKGROUND_IMAGE,
    payload: image
  })
}
const setStartColor = (dispatch,color) => {
  dispatch({
    type: SET_STARTCOLOR,
    payload: color
  })
}
const setEndColor = (dispatch,color) => {
  console.log(color);
  dispatch({
    type: SET_ENDCOLOR,
    payload: color
  })
}
const setDirection = (dispatch,direction) => {
  console.log(direction);
  dispatch({
    type: SET_DIRECTION,
    payload: direction
  })
}

export {
  setText,
  setTextColor,
  setFontFamily,
  setFontSize,
  setBackGrounColor,
  setBackGroundImage,
  setStartColor,
  setEndColor,
  setDirection
}