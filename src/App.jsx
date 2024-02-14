import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import Navbar from './components/Navbar'
import DetailPage from './pages/DetailPage'
import Footer from './components/Footer'
import BuyHouse from './pages/BuyHouse'
import Dashboard from './components/Dashboard'
import Layout from './components/shared/Layout'
import Proudcts from './components/Proudcts'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Topbar from './components/shared/Topbar'

function App() {
  return (
  <BrowserRouter>
  <Topbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/detail/:listingId' element={<DetailPage />} />
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route element={<PrivateRoute/>} >
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create-listing' element={<CreateListing/>} />
        <Route path='/purchase/:id' element={<BuyHouse/>} />
        <Route path='/layout' element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
          <Route path='/products' element={<Proudcts />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/customers' element={<Customers />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App;