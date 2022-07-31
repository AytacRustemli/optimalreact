import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../components/Contact/Contact'
import Finish from '../components/Finish/Finish'
import Carts from '../pages/Carts'
import Detail from '../pages/Detail'
import Favori from '../pages/Favori'
import Giris from '../pages/Giris'
import Home from '../pages/Home'
import Qeydiyyat from '../pages/Qeydiyyat'
import Account from './../pages/Account';
import NotFound from './../components/NotFound/NotFound';
import Meslehetler from '../components/Meslehetler/Meslehetler'
import Search from '../components/Search/Search'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/meslehetler/:id' element={<Meslehetler/>}/>
        <Route path='/register' element={<Qeydiyyat/>}/>
        <Route path='/login' element={<Giris/>}/>
        <Route path='/account' element={<Account/>} />
        <Route path='/cart' element={<Carts/>}/>
        <Route path='/favories' element={<Favori/>}/>
        <Route path='/finish' element={<Finish/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/search' element={<Search/>}/>


    </Routes>
  )
}

export default MyRoutes