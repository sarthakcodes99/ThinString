import '../Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
     <div className="navbar flex items-center justify-between p-8 pl-80 pr-80">
        <div className="left text-[20px] font-thin text-black flex items-center">Thin<span className='font-bold'>String</span></div>
        <div className="mid flex gap-4 text-gray-600 hover:text-gray-900">
            <a href="">Services</a>
            <Link to={'/about'}>About</Link>
            <a href="">Contact</a>
            <a href="">Resources</a>
        </div>
        <div className="right flex gap-4 text-gray-600">
            <button>Log in</button>
            <button className="bg-black h-10 w-20 text-white text-center rounded-sm text-[15px]">Sign up</button>
        </div>
    </div>
    )
}

export default Navbar;