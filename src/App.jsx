
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import Order from './Components/Orders/Order'
import Inventory from './Components/Inventory/Inventory'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import RequiredAuth from '../src/RequiredAuth'
import Shipping from './Components/shipping/Shipping'
function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Order></Order>}></Route>
        <Route path='/inventory' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/shipping' element={
          <RequiredAuth>
            <Shipping></Shipping>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  )
}

export default App
