
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Landing} from "./pages/Landing"

import { Local } from "./pages/Local"
import { RecoilRoot } from "recoil"
import { TiffinFeature } from "./pages/TiffinFeature"
import { Cities } from "./pages/Cities"



function App() {
 

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/city/:city_name" element={<TiffinFeature />}></Route>
          <Route path="/LocalProviderForm" element={<Local></Local>}></Route>
          <Route path="/city/all" element={<Cities></Cities>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
