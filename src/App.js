import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar  from "./components/navbar/Navbar";
import Footer  from "./components/footer/Footer"; 

import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <div className="App">  
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/about" element={<About/>}> </Route>
          <Route path="/contacts" element={<Contacts/>}> </Route>
          <Route path="/news" element={<News/>}> </Route>
          <Route path="/gallery" element={<Gallery/>}> </Route>
        </Routes>
        
        <Footer/>
      </Router>
 
    </div>
  );
}

export default App;
