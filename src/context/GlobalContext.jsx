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

    const getDeviceById = async (id) => {
    const res = await fetch(`${VITE_API_URL}/devices/${id}`)
    if (!res.ok) throw new Error("Device not found")
    const data = await res.json()
    return data.device 
}




    return (
        <GlobalContext.Provider value={{devices, setDevices, getDeviceById}}>
                {children}
        </GlobalContext.Provider>
    )
}