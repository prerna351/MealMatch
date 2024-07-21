
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Landing} from "./pages/Landing"
import { Business } from "./pages/Business"
import { Local } from "./pages/Local"


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/businessForm" element={<Business></Business>}></Route>
          <Route path="/LocalProviderForm" element={<Local></Local>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
