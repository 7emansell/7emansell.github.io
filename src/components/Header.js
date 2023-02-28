import React from "react";

export default function Header() {
    return (
        <section id="header">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mt-20 mb-10">
                    <h1 className="title-font sm:text-6xl text-8xl mb-4 font-medium text-[#edf5e1]">
                        Hi, I'm Emma!
                    </h1>
                </div>
                <div className="flex justify-center mb-40">
                    <a
                        href="#about"
                        className="inline-flex text-[#05386b] bg-[#edf5e1] border-0 py-2 px-6 focus:outline-none hover:bg-[#8ee4af] hover:text-[#edf5e1] rounded text-lg">
                        About me
                    </a>
                    <a
                        href="#contact"
                        className="ml-4 inline-flex text-[#05386b] bg-[#edf5e1]  border-0 py-2 px-6 focus:outline-none hover:bg-[#8ee4af]  hover:text-[#edf5e1]  rounded text-lg">
                        Contact me :)
                    </a>
                </div>
            </div>
        </section >
    );
}