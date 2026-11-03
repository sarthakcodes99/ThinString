import image from '../assets/image.png'
const Servicespage = () => {
    return(
        <div className="serveices">
            <h1 className="font-bold text-[30px] p-4">Our Products -</h1>
            <div className="products flex flex-col items-start justify-center p-4">
                <div className="product-1 flex flex-col">
                <h1 className="font-bold text-gray-800">SandboxStudio -</h1>
                <p className="font-thin">an in-browser code editor built for coder who just want to sit down and code without worrying about specs, code editor, or lagging. by ThinString</p>
                <div>
                <img src={image} alt="" height={200} width={400}/>
                <img src="" alt="" />
                </div>
                <h1 className="font-bold text-[25px]">Try SandBoxStudio</h1>
                <a href="https://sandbox-studio-mu.vercel.app/" className=" bg-green-400 ">Try Out SandboxStudio!!!</a>
                </div>
            </div>
        </div>
    )
}

export default Servicespage;