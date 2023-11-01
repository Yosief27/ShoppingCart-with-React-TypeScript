import { useState } from 'react'
import  {MainHome} from "./pages/MainHome";
import { About } from './pages/About';
import {Store} from './pages/Store';
import {Navbar} from './components/Navbar';
import {Routes,Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';
function App() {

  return (
    <ShoppingCartContextProvider>
    <Navbar/>
    <Container>
        <Routes>
            <Route path ="/" element ={<MainHome/>}/>
            <Route path ="/store" element ={<Store/>}/>
            <Route path ="/about" element ={<About/>}/>
            
        </Routes>
    </Container>
    </ShoppingCartContextProvider>


  )
}

export default App
