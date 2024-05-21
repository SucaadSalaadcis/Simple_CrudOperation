import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Student from "./components/Student"
import RegisterStd from "./components/RegisterStd"
import UpdateStd from "./components/UpdateStd"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/std" element={<Student/>}/>
      <Route path="/crtStd" element={<RegisterStd/>}/>
      <Route path="/updStd/:id" element={<UpdateStd/>}/>
    </Routes>
    </>
  )
}

export default App