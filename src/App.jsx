import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeviceList from "./pages/DeviceList"
import SingleDevicePage from "./pages/SingleDevicePage"
import { GlobalProvider } from "./context/GlobalContext"
import FavoritesPage from "./pages/FavoritesPage"
import { Navbar } from "./components/NavBar"
import { ComparePage } from "./pages/ComparePage"

function App() {


  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />
          <Routes>



            <Route path="/" element={<DeviceList />} />
            <Route path="/devices/:id" element={<SingleDevicePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/compare" element={<ComparePage />} />

          </Routes>

        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
