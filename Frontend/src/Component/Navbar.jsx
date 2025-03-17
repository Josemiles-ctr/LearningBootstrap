import {Link} from 'react-router-dom'
import '../index.module.css'
const Navbar =()=>{
const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'right',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: '10px',

}
        return (
            <div style={style}>
                <ul>
                    <Link to='/'> <li>Home</li></Link>
                    <Link to='/about'>  <li>About</li></Link>
                    <Link to='/contact'> <li>Contact</li></Link>
                    <Link to='/products'> <li>Products</li></Link>
                </ul>
               <Link to={'/'}> <button>Get Started</button>
               </Link>
            </div>
        );

}

export default Navbar;