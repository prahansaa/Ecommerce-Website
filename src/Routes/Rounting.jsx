import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Components/Home';
import About from '../Components/About';
import Info from '../Components/Info';
import Contact from '../Components/Contact';
import Products from '../Components/Products';
import SingleProduct from '../Components/SingleProduct';
import WithoutFooterLayout from './WithoutFooterLayout';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Layouts from './Layouts';
const Rounting = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Layouts><Home /></Layouts>}></Route>
                    <Route path='/about' element={<Layouts><About /></Layouts>}></Route>
                    <Route path='/category' element={<Layouts><Info /></Layouts>}></Route>
                    <Route path='/contact' element={<Layouts><Contact /></Layouts>}></Route>
                    <Route path="/products/details/:id" element={<Layouts><SingleProduct /></Layouts>} ></Route>
                    <Route path="/products/:category" element={<Layouts><Products /></Layouts>} ></Route>
                    <Route path='/login' element={<WithoutFooterLayout><Login /></WithoutFooterLayout>}></Route>
                    <Route path='/register' element={<WithoutFooterLayout><Register /></WithoutFooterLayout>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rounting