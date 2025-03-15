import {Link} from 'react-router-dom'
const Navbar =()=>{
const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'right',
    alignContent: 'center',
    alignSelf: 'center',

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