import { Fragment, useState } from "react";
import ProductItems from "./components/ProductItems";
import NavBar from "./components/NavBar";

const App=()=> {
  return (
   <Fragment>
    <NavBar/>
    <ProductItems/>
   </Fragment>
    
  );
}

export default App;