const Navbar = () => {
    return(
     <div className="navbar flex items-center justify-between p-8 pl-80 pr-80">
        <div className="left font-thin text-[20px]"><span className="font-bold text-slate-800">Astro</span>ship</div>
        <div className="mid flex gap-4 text-gray-600 hover:text-gray-900">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>
        <div className="right flex gap-4 text-gray-600">
            <button>Log in</button>
            <button className="bg-black h-10 w-20 text-white text-center rounded-sm text-[15px]">Sign up</button>
        </div>
    </div>
    )
}

export default Navbar;