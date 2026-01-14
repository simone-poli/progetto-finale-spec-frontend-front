import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import  DeviceRow  from "../components/DeviceRow"




export default function FavoritesPage() {

    const {devices, favorites } = useContext(GlobalContext)

    const favoriteDevice = devices.filter (d => favorites.includes(d.id))

    if (favoriteDevice === 0) return <h2>Nessun Preferito</h2>


    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {favoriteDevice.map(device => (
                    <DeviceRow key={device.id} device={device} />
                ))}
            </tbody>
        </table>
    )
}