import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'
import Cart from '../components/NavBar/Cart'
import Layout from "./Layout"
import CartProvider from '../CartContext'




const Router = () => (
    <BrowserRouter>
        <CartProvider>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Padel 05"} />} />
                    <Route path='/categoria/:id' element={<ItemListContainer />} />
                    <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Route >
            </Routes>
        </CartProvider>
    </BrowserRouter >

)

export default Router;
