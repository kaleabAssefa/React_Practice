import React from "react"; 
import HeaderPage from "./HeaderComponent/headerPage";
import NavigationPage from "./NavigationComponent/navigationPage";
import ProductPage from "./ProductComponent/productPage";

function MainPage(){
    return(
        <>
        <HeaderPage/>
        <NavigationPage/>
        <ProductPage/>
        
        </>
    )
}

export default MainPage;