import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"

export function ComparePage() {
    const { compare, getDeviceById } = useContext(GlobalContext)
    const [devicesData, setDevicesData] = useState([])

    useEffect(() => {
        const fetchDevices = async () => {
            const results = await Promise.all(
                compare.map(id => getDeviceById(id))
            )
            setDevicesData(results)
        }

        if (compare.length === 2) fetchDevices()
    }, [compare])

    if (devicesData.length !== 2) {
        return <p>Seleziona due device da confrontare</p>
    }

    const [d1, d2] = devicesData

    return (
        <table className="compare-table">
            <thead>
                <tr>
                    <th>Spec</th>
                    <th>{d1.title}</th>
                    <th>{d2.title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Brand</td>
                    <td>{d1.brand}</td>
                    <td>{d2.brand}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{d1.price}€</td>
                    <td>{d2.price}€</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>{d1.ram}</td>
                    <td>{d2.ram}</td>
                </tr>
                <tr>
                    <td>Storage</td>
                    <td>{d1.storage}</td>
                    <td>{d2.storage}</td>
                </tr>
            </tbody>
        </table>
    )
}
