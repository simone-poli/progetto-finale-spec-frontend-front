const DeviceRow = function({device}) {
    return (
        <tr>
            <td>{device.title}</td>
            <td>{device.category}</td>
        </tr>
    )
}

export default DeviceRow