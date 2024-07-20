import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Addproduct from "./Components/Addproduct"
import Product from "./Components/Product"
import Login from "./Components/Login"
import Notfound from "./Components/Notfound"
import Privetrouting from "./Components/Privetrouting"

function Allroute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addproduct" element={<Addproduct/>}></Route>
        <Route path="/product" element={
          <Privetrouting>
          <Product/>
          </Privetrouting>
          }></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/*" element={<Notfound/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroute
