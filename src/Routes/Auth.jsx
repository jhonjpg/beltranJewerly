import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from '../Pages/Home';
import ScrollTop from '../helpers/ScrollTop';
import Navbar from '../components/Navbar';
import PageNotFound from '../Pages/PageNotFound';
import Rings from '../Pages/Rings';
import Bracelet from '../Pages/Bracelet';
import Necklace from '../Pages/Necklace';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Footer from '../Pages/Footer';



const Auth = () => {



  
  return (
    <>


    <BrowserRouter>

    <ScrollTop/>

    <Navbar/>

      <Routes>

      <Route index element={<Home />}></Route>
      <Route path="/beltranJewerly/" element={<Home />}></Route>
      <Route path="/beltranJewerly/about" element={<About />}></Route>
      <Route path="/beltranJewerly/rings" element={<Rings />}></Route>
      <Route path="/beltranJewerly/bracelet" element={<Bracelet />}></Route>
      <Route path="/beltranJewerly/charms" element={<Bracelet />}></Route>
      <Route path="/beltranJewerly/necklace" element={<Necklace />}></Route>
      <Route path="/beltranJewerly/contact" element={<Contact />}></Route>




        
        <Route path="*" element={<PageNotFound />}></Route>


      </Routes>

<Footer/>


    </BrowserRouter>



  </>
)
}

export default Auth