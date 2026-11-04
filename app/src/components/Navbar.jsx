import '../Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
     <div className="navbar flex items-center justify-between p-8 pl-80 pr-80">
        <div className="left text-[20px] font-thin text-black flex items-center">Thin<span className='font-bold text-orange-600'>String</span></div>
        <div className="mid flex gap-4 text-gray-600 hover:text-gray-900">
            <Link to={'/services'}>Services</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'} className='text-blue-500' href="">Talk To The Founder</Link>
        </div>
        <div className="right flex gap-4 text-gray-600">
            
        </div>
    </div>
    )
}

export default Navbar;