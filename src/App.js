import NavBar from "./components/Header/NavBar";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import MainTitle from "./components/Header/MainTitle";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <NavBar/>
        <MainTitle/>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/productDetails/:index" element={<ProductDetails/>}></Route>
        </Routes>
        <Footer/>
        </ContextProvider>
    </Router>
  );
}

export default App;