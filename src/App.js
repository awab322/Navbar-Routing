import './App.css';
import Header from "./components/inc/Header";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

import {Routes,Route} from "react-router-dom";


function App() {
  return (
   <>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='*' element={<ErrorPage/>} />
      </Routes> 
    </>
  );
}

export default App;
