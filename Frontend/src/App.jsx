import {Routes, Route} from 'react-router-dom'
import {useState} from "react";
import Navbar from "./Component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import {useEffect} from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/employees")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log("Failed to fetch resource "+err));

  }, []);
  return (

<div>
  <Navbar/>
  <div>
    <h2>Employee List</h2>
    <div>
      {data.map((employee) => (
          <form key={employee.employee_id}>
            <span>   Id :{employee.employee_id} </span><span> First Name : {employee.first_name}</span><span> Last Name :{employee.last_name} </span><span> D.O.B: {employee.birth_date}</span>
          </form>
      ))}
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
</div>
  )
}

export default App
