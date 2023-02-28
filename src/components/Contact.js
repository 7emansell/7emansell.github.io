import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="text-[#edf5e1] bg-[#05386b] body-font scroll-mt-20">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#edf5e1]">
                        Contact me
                    </h1>
                    <p className="text-lg"> You can email me at <a className="text-[#5cdb95] hover:text-[#379683]" href="mailto:emilyjmansell@gmail.com">emilyjmansell@gmail.com</a></p>
                    <p className="text-lg"> or drop me a message on <a className="text-[#5cdb95] hover:text-[#379683]" href="https://www.linkedin.com/in/emmamansell/">Linkedin</a>!</p>
                </div>
            </div>
        </section>)
};