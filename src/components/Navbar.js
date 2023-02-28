import React from "react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-20 bg-[#5cdb95] backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <span className="text-2xl text-[#05386b] font-semibold">Emma Mansell</span>
                    <div className="flex space-x-4 text-[#05386b]">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <a href="https://github.com/7emansell/"><img alt="Github" src="./github.svg" /></a>
                        <a href="https://www.linkedin.com/in/emmamansell/"><img alt="Linkedin" src="./linkedin.svg" /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}