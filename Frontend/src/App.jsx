import {Routes, Route} from 'react-router-dom'
// import {useState} from "react";
import Navbar from "./Component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";
// import About from "./pages/About.jsx";
// import Products from "./pages/Products.jsx";
// import Contact from "./pages/Contact.jsx";
import './index.module.css'
// import {useEffect} from "react";
// import axios   from "axios";
function App() {
// const API=  axios.create({
//   baseURL: "http://localhost:5000/employees",
// })
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     // fetch("http://localhost:3000/employees")
//     // .then(res => res.json())
//     // .then(data => setData(data))
//     // .catch(err => console.log("Failed to fetch resource "+err));
//     API.get('/').then(res => {
//       console.log(res)
//       setData(res)
//       console.log(data)
//     })

//   },);
  return (
    <>
    <Home/>
    <Form/>
    </>

/* <div>
  <Navbar/>
  <div>
    <div>
      <h2 className="employee-list">Employee List</h2>
    </div>
    <div>
    </div>
  </div>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products' element={<Products />}/>
  </Routes>

  <p>
    Hey this will be the footer found across all the pages!
  </p>
</div> */
  )
}

export default App
