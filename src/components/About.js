import React from "react";

export default function About() {
    return (
        <section id="about" className="text-[#05386b] bg-[#edf5e1] body-font scroll-mt-20">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#05386b]">
                        About me
                    </h1>
                    <p className="text-lg w-4/5 text-justify mx-auto">
                        I'm Emma, and I'm a software engineer finishing my CS degree at Northwestern University.
                        I interned as a software engineer last summer with Condé Nast, and previously worked as a web developer for a small <a className="text-[#379683] hover:text-[#5cdb95]" href="https://www.fusestudio.net/"> STEM education site</a> for 2 years.
                        The work I'm proudest of is the app and website for my college's annual music festival (<a className="text-[#379683] hover:text-[#5cdb95]" href="https://dilloday.com/">Dillo Day</a>, the largest student-run festival in the country!).
                        I lead the app team: five developers and a designer.
                    </p>
                    <br />
                    <p className="text-lg w-4/5 text-justify  mx-auto">
                        Across all of my work experience and my coursework, my favorite part of the development process is always the front-end— finding creative ways to shape Javascript and HTML into intuitive and beautiful interfaces.
                        As much as I enjoy diving into the details and building amazing user experiences, I'm passionate about the big picture and have lots of experience coordinating across teams to get a feature into production.
                    </p>
                    <br />
                    <p className="text-lg w-4/5 text-justify mx-auto">
                        Currently, I'm looking for software engineering or product management roles. Feel free to get in touch :)
                    </p>

                </div>
            </div>
        </section>)
};