import { createContext, useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env; 

export const GlobalContext = createContext()

export function GlobalProvider ({children}) {

    const [devices, setDevices] = useState([])

    useEffect (() => {
        fetch(`${VITE_API_URL}/devices`)
        .then (res => res.json())
        .then (data =>  setDevices(data)  )
        .catch (error => console.error(error))
    },[])

    return (
        <GlobalContext.Provider value={{devices, setDevices}}>
                {children}
        </GlobalContext.Provider>
    )
}