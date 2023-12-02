import { createContext, useReducer } from "react";
import initialEditorState from "./state";
import editorReducer from "./reducer";

export const EditorContext = createContext()

export const EditorContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(editorReducer, initialEditorState);
  return (
    <EditorContext.Provider value={{state,dispatch}}>
      {children}
    </EditorContext.Provider>
  )
}