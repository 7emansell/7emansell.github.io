import React from "react";

export default function Header() {
    return (
        <section id="header">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mt-20 mb-10">
                    <h1 className="title-font text-6xl lg:text-7xl mb-4 font-medium text-[#05386b]">
                        Hi! I'm Emma,
                    </h1>
                    <p className="title-font text-2xl lg:text-4xl w-5/6 mx-auto">a front-end software engineer focused on building accessible, beautiful interfaces.</p>
                </div>
                <div className="flex flex-col w-full mt-20 mb-10">
                    <p className="title-font text-xl lg:text-2xl">Get in touch 👉 <a className="text-[#2b7969] underline hover:text-[#5cdb95]" href="mailto:emilyjmansell@gmail.com">emilyjmansell@gmail.com</a></p>

                </div>
                {/* <div className="flex justify-center mb-40">
                    <a
                        href="#about"
                        className="inline-flex text-[#edf5e1] bg-[#05386b] border-0 py-2 px-6 focus:outline-none hover:bg-[#2b7969] rounded text-lg">
                        About me
                    </a>
                    <a
                        href="#contact"
                        className="ml-4 inline-flex text-[#edf5e1] bg-[#05386b]  border-0 py-2 px-6 focus:outline-none hover:bg-[#2b7969] rounded text-lg">
                        Contact me
                    </a>
                </div> */}
            </div>
        </section >
    );
}