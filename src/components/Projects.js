import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import Fade from "react-reveal/Fade";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />  
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        My projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I've had a very keen interest in AI for some time now and had opportunities to contribute
                        to real world academic project during my time at University. More recently I picked up
                        an interest for web developmnet and have been working on some cool projects for a while!
                    </p>
                </div>
                <div className="grid grid-cols-2 -m-4">
                {projects.map((project) => (
                    <Fade>
                        <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-full sm:h-auto h-auto w-full p-4">
                        <div className="flex h-full w-full relative">
                            <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                        </a>
                    </Fade>
                ))}
                </div>
            </div>
        </section>
    );
}