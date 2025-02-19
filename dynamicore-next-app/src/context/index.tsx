"use client";
import { createContext, useState, useContext } from 'react';

const AppContext = createContext<any>([]); // Extras

export function AppWrapper({children } : {
    children: React.ReactNode;
}){
    let [users, setUsers] = useState([]);

    return (
        <AppContext.Provider value={{
            users,
            setUsers
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}