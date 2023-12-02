import { SET_FONTFAMILY, SET_FONTSIZE, SET_TEXT, SET_TEXTCOLOR } from "./types";

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
  
    default:
      break;
  }
}

export default editorReducer