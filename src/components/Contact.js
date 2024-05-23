import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="text-[#edf5e1] bg-[#05386b] py-10 body-font">
            <div className="container px-2 py-10 w-5/6 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <h1 className="text-3xl font-medium title-font mb-4 text-[#edf5e1]">
                        Contact me
                    </h1>
                    <p className="text-lg">I'm always interested in work that contributes to sustainability, equity, or education.</p>
                    <p className="text-lg"> Email me at <a className="text-[#5cdb95] hover:text-[#98f3c1]" href="mailto:emilyjmansell@gmail.com">emilyjmansell@gmail.com</a>
                        {" "}or drop me a message on <a className="text-[#5cdb95] hover:text-[#98f3c1]" href="https://www.linkedin.com/in/emmamansell/">Linkedin</a>!</p>
                </div>
            </div>
        </section>)
};