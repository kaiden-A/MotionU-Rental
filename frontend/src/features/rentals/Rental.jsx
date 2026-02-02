import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Carts from "./components/Carts";
import { useState } from "react";

function Rental(){

  

    return(
        <>
            <Header/>
            <Hero/> 
            <Products/>
            <Carts/>
            <Footer/>       
        </>

    )
}

export default Rental;