import React from "react";

export default function Footer() {
    return (
        <section id="footer">
            <div className="container px-5 py-5 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <h3 className="text-s title-font ">
                        Built with <a href="https://react.dev/" className="hover:text-[#5cdb95] text-[#2b7969]">React</a> and <a href="https://tailwindcss.com/" className="hover:text-[#5cdb95] text-[#2b7969]">Tailwind CSS</a>.
                    </h3>
                    <h3 className="text-s title-font ">
                        © Emma Mansell 2024
                    </h3>
                </div>
            </div>
        </section>)
};