import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './Register.jsx'
import Login from './Login'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'
import Arena from './Arena'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import { MyProvider } from './Logged.jsx';

function App() {

  return (
    <MyProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/arena' element={<Arena/>}></Route>
    </Routes>
    </BrowserRouter>
    </MyProvider>
  )
}

export default App
