import { Route, Routes } from "react-router-dom";
import { Repositories } from "./pages/Repositories";
import { Repository } from "./pages/Repository";

function App() {
  return (
    <Routes>
      <Route path="/repositories" element={<Repositories />} />
      <Route path="/repository/*" element={<Repository />}></Route>
    </Routes>
  )
}

export default App
