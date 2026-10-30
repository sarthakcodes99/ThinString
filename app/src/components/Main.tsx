import img from '../assets/img.webp'
const Main = () => {
        return(
            <div className="main flex gap-20 items-center justify-center min-h-screen">
                <div className="main-left">
                        <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter'>Marketing website <br></br> done with Astro</h1>
                        <p className='text-lg mt-4 text-slate-600 max-w-xl'>Astroship is a starter template for startups, marketing websites & landing pages. Built with Astro.build and TailwindCSS. You can quickly create any website with this starter.</p>
                        <div className="btns">
                            <button>Download For Free</button>
                            <button>Github Repo</button>
                        </div>
                </div>
                <div className="main-right">
                    <img src={img} alt="Img Can't load" />
                </div>
            </div>
        )
}

export default Main;