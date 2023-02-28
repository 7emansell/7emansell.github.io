import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-[#edf5e1] bg-[#05386b] body-font py-30 scroll-mt-20">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <h1 className="sm:text-4xl text-5xl font-medium title-font text-[#edf5e1]">
                        Projects
                    </h1>
                </div>
                <div className="flex flex-wrap">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-[#379683] bg-[#2b7969] opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-[#5cdb95] mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-[#edf5e1] mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}