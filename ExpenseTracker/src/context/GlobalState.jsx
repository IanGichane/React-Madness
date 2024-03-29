import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transactions:[
        {id:1,text:'Flower',amount:-20},
        {id:2,text:'salary',amount:200},
        {id:3,text:'Book',amount:-10},
        {id:4,text:'Camera',amount:150}
    ]
}

//create context
export const GlobalContext = createContext(initialState)
//provide component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}