import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


export default function DeviceList() {

    const {devices} = useContext(GlobalContext)
    console.log(devices)

    return (
        <>
        </>
    )
}