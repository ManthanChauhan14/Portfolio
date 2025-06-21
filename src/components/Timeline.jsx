"use client";
import React from "react";

export const Timeline = ({ data }) => {
  return (
    <div className="py-10 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-200 mb-10">
        My Work Experience
      </h2>

      <div className="relative border-l-2 border-neutral-700 pl-6 ml-4 space-y-12">
        {data.map((item, index) => (
          <div key={index} className="relative pl-8"> {/* 👈 gap between dot and text */}
            {/* Dot on the timeline */}
            <div className="w-4 h-4 bg-purple-500 rounded-full absolute -left-2 top-1" />

            {/* Experience details */}
            <h3 className="text-xl md:text-2xl font-semibold text-neutral-100">
              {item.title}
            </h3>
            <h4 className="text-md text-purple-400 mb-1">{item.job}</h4>
            <span className="text-sm text-neutral-400">{item.date}</span>

            <div className="mt-4 space-y-2">
              {item.contents.map((content, i) => (
                <p key={i} className="text-neutral-400 text-sm md:text-base">
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
