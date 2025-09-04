import React, { useState } from "react";
import ProjectDetail from "./projectDetail";

const Project = ({ title, description, subDescription, href, image, tags }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div className=" flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0 ">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
          <div className="flex gap-5 mt-2">
            <p className="font-normal text-neutral-400">{description}</p>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <button
            onClick={() => setIsHidden(true)}
            className="flex items-center gap-1 cursor-pointer hover-animation"
          >
            Read More
            <img
              src="assets/next.png"
              className="w-3 filter invert brightness-0"
            />
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetail
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
