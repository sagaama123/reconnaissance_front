import { createContext, useReducer } from "react"
import DarkModelReducer from './darkModeReduce.js'

const INITIAL_STATE ={
    darkMode:false
}
export const DarkModelContext=createContext(INITIAL_STATE)
export const DarkModeContextProvider= ({children})=>{
 const [state,dispatch]=useReducer(DarkModelReducer,INITIAL_STATE);
 return(
    <DarkModelContext.Provider value={{darkMode:state.darkMode, dispatch}}>
        {children}
    </DarkModelContext.Provider>
 )
}