
import { combineContexts } from "./combineContext";
import { EditorContext, EditorContextProvider } from "./editorContext/EditorContext";

export const AppContextProvider = combineContexts(
  EditorContextProvider
);