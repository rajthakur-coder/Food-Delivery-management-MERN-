import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Loginpage from './components/Loginpage/Loginpage';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/MyOreders/MyOrders';



const App = () => {
const [setlogin,setshowlogin]=useState(false)
  return (
    <>
      {setlogin?<Loginpage  setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App