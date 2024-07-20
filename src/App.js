import NavBar from "./components/NavBar";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import MainTitle from "./components/MainTitle";

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
        </ContextProvider>
    </Router>
  );
}

export default App;