import { Fragment, useState } from "react";
import ProductItems from "./components/ProductItems";
import NavBar from "./components/NavBar";
import ContextProvider from "./Store/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <NavBar />
      <ProductItems />
    </ContextProvider>
  );
}

export default App;