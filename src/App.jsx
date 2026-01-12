import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeviceList from "./pages/DeviceList"
import SingleDevicePage from "./pages/SingleDevicePage"
import { GlobalProvider } from "./context/GlobalContext"

function App() {


  return (
    <>
      <BrowserRouter>
        <GlobalProvider>

          <Routes>



            <Route path="/" element={<DeviceList />} />
            <Route path="/devices/:id" element={<SingleDevicePage />} />



          </Routes>

        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
