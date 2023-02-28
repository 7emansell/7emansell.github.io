import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-[#edf5e1] mb-4">
                        Skills and technologies
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/3 w-1/3">
                            <div className="bg-[#05386b] flex p-4 h-full justify-center items-center">
                                <span className="title-font font-medium text-[#edf5e1]">
                                    {skill.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}