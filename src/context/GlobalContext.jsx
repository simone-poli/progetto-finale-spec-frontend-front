import { createContext, useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env; 

export const GlobalContext = createContext()

export function GlobalProvider ({children}) {

    const [devices, setDevices] = useState([])
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [] )
    const [compare, setCompare] = useState([])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

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

    const toggleFavorites = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(favId => favId !== id): [...prev,id]) 
    }

    const toggleCompare = (id) => {
        setCompare( prev => {
            if (prev.includes(id)) {
                return prev.filter(cId => cId !== id)
            }
            if (prev.length === 2){
                return prev
            }
            return [...prev,id]
        })
    }



    return (
        <GlobalContext.Provider value={{devices, setDevices, getDeviceById, toggleFavorites, favorites, toggleCompare, compare}}>
                {children}
        </GlobalContext.Provider>
    )
}