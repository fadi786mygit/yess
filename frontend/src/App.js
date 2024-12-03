import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Register from "./Pages/Register";

function App() {
  return (
   <>
   
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>

   </>
  );
}

export default App;
