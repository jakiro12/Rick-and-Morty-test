import React from "react";
import Show from "./components/Button";
import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from "./HomePage/Home";




function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/1" element={<Show />} />
       <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        </BrowserRouter>
 </div>
  );
}

export default App;
