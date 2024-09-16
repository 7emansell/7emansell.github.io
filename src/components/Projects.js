import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-[#edf5e1] bg-[#05386b] body-font py-30 scroll-mt-20">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <h1 className="text-3xl font-medium title-font text-[#edf5e1]">
                        Projects
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="relative group block aspect-w-2 aspect-h-3 overflow-hidden"
                        >
                            <img
                                alt={project.title}
                                src={project.image}
                                className="object-cover object-center w-full h-full"
                            />
                            <div className="absolute inset-0 bg-[#2b7969] opacity-0 hover:opacity-100 transition duration-300 ease-in-out ">
                                <div className="absolute inset-2 flex flex-col items-center justify-center text-center sm:p-3  lg:p-5">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-[#5cdb95] mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-[#edf5e1] mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed ">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}