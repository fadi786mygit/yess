import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import Register from "./Pages/Register";
import Yes1 from "./Pages/Yes1";
import Yes2 from "./Pages/Yes2";
import Yes3 from "./Pages/Yes3";

function App() {
  return (
   <>
   
    <Routes> 
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/register" element={<Register/>}/> */}
      <Route path="/yes1" element={<Yes1/>}/>
      <Route path="/yes2" element={<Yes2/>}/>
      <Route path="/yes3" element={<Yes3/>}/>

    </Routes>

   </>
  );
}

export default App;
