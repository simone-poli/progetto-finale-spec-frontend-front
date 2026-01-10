import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeviceList from "./pages/DeviceList"
import SingleDevicePage from "./pages/SingleDevicePage"
import { GlobalProvider } from "./context/GlobalContext"

function App() {


  return (
    <>
    <GlobalProvider>
     
      <BrowserRouter>
        <Routes>



          <Route path="/" element={<DeviceList />} />
          <Route path="/:id" element={<SingleDevicePage />} />



        </Routes>
      </BrowserRouter>

    </GlobalProvider>
    </>
  )
}

export default App
