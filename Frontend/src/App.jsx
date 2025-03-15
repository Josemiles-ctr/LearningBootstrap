import {Routes, Route} from 'react-router-dom'
import State from "./usestate.jsx";
import Navbar from "./Component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
function App() {
  return (
<div>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products' element={<Products />}/>
  </Routes>
</div>
  )
}

export default App
