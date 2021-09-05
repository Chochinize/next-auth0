import { createContext,useState } from "react";
import { useReducer } from "react";
import Reducer from './Reducer'


const AppContext = createContext();



export const  AppContextProvider = ({children})=>{
    

    
    const initialValue = {
        count:0,
        notes:{
            f:'ONE'
        }
        
    };
    const [state,dispatch]=useReducer(Reducer,initialValue);

    const Add = ()=>{
        dispatch({type:'ADD'})
    }


    return (
        <AppContext.Provider value={{Add,state}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;