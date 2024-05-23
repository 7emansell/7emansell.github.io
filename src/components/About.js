import React from "react";

export default function About() {
    return (
        <section id="about" className="text-[#05386b] bg-[#edf5e1] py-10 body-font scroll-mt-20">
            <div className="container px-2 py-10 w-5/6 mx-auto text-center lg:px-40">
                <h1 className="text-3xl font-medium title-font mb-4 text-[#05386b]">
                    About me
                </h1>
                <p className="text-lg text-justify-center">
                    I'm currently a front-end engineer, building websites at the <a href="https://nypl.org" className="hover:text-[#5cdb95] text-[#2b7969]">New York Public Library</a>.
                    I graduated from Northwestern University in 2023 after completing SWE internships at the <a href="https://newyorker.com" className="hover:text-[#5cdb95] text-[#2b7969]">New Yorker</a>{" "}
                    and <a href="https://www.fusestudio.net/" className=" hover:text-[#5cdb95] text-[#2b7969]">FUSE</a>.
                </p>
                <br />
                <p className="text-lg  text-justify-center ">
                    My experience is mainly on the front end, building accessible apps/websites in React, but I'm always excited to learn new technologies and go deeper into the stack.
                </p>
            </div>
        </section >)
};