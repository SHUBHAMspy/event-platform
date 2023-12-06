import { SET_BACKGROUND_COLOR, SET_BACKGROUND_IMAGE, SET_DIRECTION, SET_ENDCOLOR, SET_FONTFAMILY, SET_FONTSIZE, SET_STARTCOLOR, SET_TEXT, SET_TEXTCOLOR } from "./types";

const editorReducer = (state,{type,payload}) => {
  switch (type) {
    case SET_TEXT:
      return {
        ...state,
        text: payload
      }
    case SET_TEXTCOLOR:
      return {
        ...state,
        textColor: payload
      }
    case SET_FONTSIZE:
      return {
        ...state,
        fontSize: payload
      }
    case SET_FONTFAMILY:
      return {
        ...state,
        fontFamily: payload
      }
    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: payload
      }
    case SET_BACKGROUND_IMAGE:
      return {
        ...state,
        backgroundImage: payload
      }
    case SET_STARTCOLOR:
      return {
        ...state,
        startColor: payload       
      }
    case SET_ENDCOLOR:
      return {
        ...state,
        endColor: payload
      }
    case SET_DIRECTION:
      return {
        ...state,
        direction: payload

      }
  
    default:
      break;
  }
}

export default editorReducer