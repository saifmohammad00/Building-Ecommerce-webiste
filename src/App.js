import NavBar from "./components/Header/NavBar";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import MainTitle from "./components/Header/MainTitle";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <NavBar/>
        <MainTitle/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        <Footer/>
        </ContextProvider>
    </Router>
  );
}

export default App;