import NavBar from "./components/Header/NavBar";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MainTitle from "./components/Header/MainTitle";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import React, { lazy, Suspense, useContext } from "react";
import AuthContext from "./context/auth-context";


const LoginPage=lazy(()=>import("./Pages/LoginPage"));
const ContactUs=lazy(()=>import("./Pages/ContactUs"));
const Store=lazy(()=>import("./Pages/Store"));
const About=lazy(()=>import("./Pages/About"));
const Home=lazy(()=>import("./Pages/Home"));

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <ContextProvider>
        <NavBar />
        <MainTitle />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            <Route path="/productDetails/:index" element={<ProductDetails />}></Route>
            {!authCtx.isLoggedIn && <Route path="/store" element={<Navigate to="/login" />}></Route>}
            {authCtx.isLoggedIn && <Route path="/store" element={<Store />}></Route>}
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </ContextProvider>
    </Router>
  );
}

export default App;