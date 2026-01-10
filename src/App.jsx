import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeviceList from "./pages/DeviceList"
import SingleDevicePage from "./pages/SingleDevicePage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>



          <Route path="/" element={<DeviceList />} />
          <Route path="/:id" element={<SingleDevicePage />} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
