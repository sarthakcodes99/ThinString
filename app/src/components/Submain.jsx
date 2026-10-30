const Submain = () => {
    return(
        <div className="sub-main flex items-center justify-center flex-col">
            <div className="heading">
                <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">Everything you need to start a website</h1>
                <p className="text-lg mt-4 text-slate-600">Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its own innovations.</p>
                </div>
                <div className="cards flex flex-col p-16">
                    <div className="row1 flex items-center justify-center gap-16">
                        <div className="card1">
                        <h1 className="font-semibold text-lg flex items-center gap-4"><svg width="1em" height="1em" viewBox="0 0 24 24" class="text-black" fill="currentColor">
  <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z"></path>
</svg>Bring Your Own Framework</h1>
                        <p className="text-slate-500 mt-2 leading-relaxed">Build your site using React, Svelte, Vue, Preact <br></br>, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                        
                        <div className="card2">
                        <h1 className="font-semibold text-lg flex items-center gap-4"><svg width="1em" height="1em" class="text-black" data-icon="bx:bxs-window-alt">   <symbol id="ai:bx:bxs-window-alt" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-3 3h2v2h-2V6zm-3 0h2v2h-2V6zM4 19v-9h16.001l.001 9H4z" fill="currentColor"></path></symbol><use href="#ai:bx:bxs-window-alt"></use>  </svg> 100% Static HTML, No JS</h1>
                        <p className="text-slate-500 mt-2 leading-relaxed">Astro renders your entire page to static HTML, <br></br> removing all JavaScript from your final build by default.</p>
                        </div>

                        <div className="card3">
                        <h1 className="font-semibold text-lg flex items-center gap-4"><svg width="1em" height="1em" class="text-black" data-icon="bx:bxs-data">   <symbol id="ai:bx:bxs-data" viewBox="0 0 24 24"><path d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z" fill="currentColor"></path><path d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z" fill="currentColor"></path></symbol><use href="#ai:bx:bxs-data"></use>  </svg>On-Demand Components</h1>
                        <p className="text-slate-500 mt-2 leading-relaxed">Astro supports TypeScript, Scoped CSS, CSS <br /> Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages..</p>
                        </div>
                    </div>
                    <div className="row2 flex p-16 gap-16">
                        <div className="card4">
                        <h1 className="font-semibold text-lg flex items-center gap-4"><svg width="1em" height="1em" class="text-black" data-icon="bx:bxs-bot">   <symbol id="ai:bx:bxs-bot" viewBox="0 0 24 24"><path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2z" fill="currentColor"></path></symbol><use href="#ai:bx:bxs-bot"></use>  </svg>Broad Integration</h1>
                        <p className="text-slate-500 mt-2 leading-relaxed">Build your site using React, Svelte, Vue, Preact <br></br>, web components, or just plain ol' HTML + JavaScript.</p>
                        </div>
                        
                        <div className="card5">
                        <h1 className="font-semibold text-lg flex items-center gap-4"><svg width="1em" height="1em" class="text-black" data-icon="bx:bxs-file-find">   <symbol id="ai:bx:bxs-file-find" viewBox="0 0 24 24"><path d="M6 22h12c.178 0 .348-.03.512-.074l-3.759-3.759A4.966 4.966 0 0 1 12 19c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5a4.964 4.964 0 0 1-.833 2.753l3.759 3.759c.044-.164.074-.334.074-.512V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" fill="currentColor"></path><circle cx="12" cy="14" r="3" fill="currentColor"></circle></symbol><use href="#ai:bx:bxs-file-find"></use>  </svg>100% Static HTML, No JS</h1>
                        <p className="text-slate-500 mt-2 leading-relaxed">Astro renders your entire page to static HTML, <br></br> removing all JavaScript from your final build by default.</p>
                        </div>

                        <div className="card6">
                        <h1 className="font-semibold text-lg flex items-center gap-4"><svg width="1em" height="1em" class="text-black" data-icon="bx:bxs-user">   <symbol id="ai:bx:bxs-user" viewBox="0 0 24 24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" fill="currentColor"></path></symbol><use href="#ai:bx:bxs-user"></use>  </svg>On-Demand Components</h1>
                        <p className="text-slate-500 mt-2 leading-relaxed">Need some JS? Astro can automatically hydrate <br></br> interactive components when they become visible on the page.</p>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}

export default Submain;