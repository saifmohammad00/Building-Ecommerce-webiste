import NavBar from "./components/Header/NavBar";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import MainTitle from "./components/Header/MainTitle";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import LoginPage from "./Pages/LoginPage";
import { useContext } from "react";
import AuthContext from "./context/auth-context";

const App = () => {
  const authCtx=useContext(AuthContext);
  return (
    <Router>
      <ContextProvider>
        <NavBar/>
        <MainTitle/>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
          <Route path="/productDetails/:index" element={<ProductDetails/>}></Route>
          {!authCtx.isLoggedIn && <Route path="/store" element={<Navigate to="/login"/>}></Route>}
          {authCtx.isLoggedIn && <Route path="/store" element={<Store/>}></Route>}
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
        <Footer/>
        </ContextProvider>
    </Router>
  );
}

export default App;