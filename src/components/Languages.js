import { ChatAltIcon, GlobeIcon } from "@heroicons/react/solid";
import React from "react";
import { languages } from "../data";

export default function Languages() {
  return (
    <section id="languages">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <GlobeIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            World Languages
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I studied Physics with a strong focus on machine learning, data analysis
            and high performance simulations of physical systems. Currently learning 
            Full Stack Development.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {languages.map((lang) => (
            <div key={lang} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <ChatAltIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span>
                <span className="title-font font-medium text-white">
                  {lang.name}
                </span>
                <p>{lang.description}</p>
                </span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}