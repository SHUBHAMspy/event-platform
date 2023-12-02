import { SET_FONTFAMILY, SET_TEXT, SET_TEXTCOLOR } from "./types"

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
const setFontFamily = (dispatch,fontFamily) => {
  dispatch({
    type: SET_FONTFAMILY,
    payload: fontFamily
  })
}

export {
  setText,
  setTextColor,
  setFontFamily
}