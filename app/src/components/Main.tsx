import img from '../assets/img.webp'
import { Link } from 'react-router-dom';
const Main = () => {
        return(
            <div className="main flex gap-20 items-center justify-center min-h-screen">
                <div className="main-left flex flex-col gap-4">
                    <div>
                        <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter'>We Build The <br></br> Products of Future.</h1>
                        <h2 className='font-bold lg:tracking-tight xl:tracking-tighter text-[25px]'>Transparent, OpenSource, Free. Products We Make</h2>
                        <p className='text-lg mt-4 text-slate-600 max-w-xl'>We don't care about your degree, if you know how to code, come build with us. We Care About Your Skills, Not Your Degree</p>
                    </div>
                        <div className="btns flex gap-4">
                            <Link className='h-10 w-50 rounded-sm bg-black text-white font-noraml flex items-center justify-center' to={'/services'} >See Our Products</Link>
                        </div>
                </div>
                <div className="main-right">
                    <img src={img} alt="Img Can't load" />
                </div>
            </div>
        )
}

export default Main;