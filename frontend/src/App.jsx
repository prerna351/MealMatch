
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Landing} from "./pages/Landing"

import { Local } from "./pages/Local"
import { RecoilRoot } from "recoil"
import { TiffinFeature } from "./pages/TiffinFeature"



function App() {
 

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>
          <Route path="/city" element={<TiffinFeature />}></Route>
          <Route path="/LocalProviderForm" element={<Local></Local>}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
