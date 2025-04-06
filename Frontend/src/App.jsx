import {Routes, Route} from 'react-router-dom'
// import {useState} from "react";
import Navbar from "./Component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";  
import './index.module.css'
import Alert from './pages/Alert.jsx';
import Card from './pages/Card.jsx';
import Accordion from './pages/accordion.jsx';
import Model from './pages/Modal.jsx';
import Cursel from './pages/cursel.jsx';
import Validate from './pages/validate.jsx';
function App() {

  return (
    <>
    <Home/>
    <Alert/>
    <Cursel/>
    <Form/>
    <Validate/>
    <Accordion/>
    <div className="card-group">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    <Model/>
    </>
  )
}

export default App
