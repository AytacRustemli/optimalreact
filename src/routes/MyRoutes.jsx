import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Giris from '../pages/Giris'
import Home from '../pages/Home'
import Qeydiyyat from '../pages/Qeydiyyat'
import Account from './../pages/Account';

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/register' element={<Qeydiyyat/>}/>
        <Route path='/login' element={<Giris/>}/>
        <Route path='/account' element={<Account/>} />
    </Routes>
  )
}

export default MyRoutes