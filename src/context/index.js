
import { combineContexts } from "./combineContext";
import { EditorContext, EditorContextProvider } from "./editorContext/EditorContext";
import { EventContextProvider } from "./eventContext/EventContext";

export const AppContextProvider = combineContexts(
  EditorContextProvider,
  EventContextProvider
);