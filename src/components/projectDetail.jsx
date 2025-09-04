import { motion } from "motion/react";
import React from "react";
const ProjectDetail = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div className="relative max-w-md border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}>
        <button onClick={closeModal} className="absolute p-1 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500">
          <img src="assets/close.svg" className="w-4 h-4" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-4">
          <h5 className="mb-1 text-sm font-bold text-white">{title}</h5>
          <p className="mb-2 text-[10px] font-normal text-neutral-400">
            {description}
          </p>
          {subDescription.map((suDesc, index) => (
            <p
              key={index}
              className="mb-2 text-[10px] font-normal text-neutral-400"
            >
              {suDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-5 h-5 hover-animation"
                />
              ))}
            </div>
                <a className="inline-flex text-[10px] items-center gap-1 font-medium cursor-pointer hover-animation" href={href} >View Project</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
