import React from "react";

export default function About() {
    return (
        <section id="about" className="text-[#05386b] bg-[#edf5e1] body-font scroll-mt-20">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full my-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-[#05386b]">
                        About me
                    </h1>
                    <p className="text-lg w-4/5 text-justify-center mx-auto">
                        I'm Emma, and I'm a software engineer. I graduated from Northwestern in 2023, and am currently based in NYC.
                 </p>
                    <p className="text-lg w-4/5 text-justify-center mx-auto">
                        I mainly work on the front end, and have extensive experience with React (and React Native) but I'm always looking to learn new technologies!
                    </p>

                </div>
            </div>
        </section>)
};