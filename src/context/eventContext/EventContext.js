import { createContext, useReducer } from "react";
import initialEventState from "./state";
import eventReducer from "./reducer";

export const EventContext = createContext()

export const EventContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(eventReducer, initialEventState);
  console.log(state);
  return (
    <EventContext.Provider value={{state,dispatch}}>
      {children}
    </EventContext.Provider>
  )
}