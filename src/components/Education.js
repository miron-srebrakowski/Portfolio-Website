import { BeakerIcon, AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I studied Physics with a strong focus on machine learning, data analysis
            and high performance simulations of physical systems. 
          </p>
        </div>
        <div className="flex flex-col lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {education.map((edu) => (
            <div key={edu} className="p-2 sm:w-full w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BeakerIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span>
                <span className="title-font font-medium text-white">
                  {edu.name}
                </span>
                <p>{edu.description}</p>
                </span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}