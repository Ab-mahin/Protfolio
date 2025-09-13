import { motion } from "framer-motion";
import { close,arrowUp } from "../../assets";
// import { dotnet } from "../../assets";


const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-4xl mx-4 lg:mx-8 border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 lg:p-3 rounded-lg top-4 right-4 lg:top-6 lg:right-6 bg-midnight hover:bg-gray-500 transition-colors duration-200"
        >
          <img src={close} className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-6 lg:p-8">
          <h5 className="mb-3 text-2xl lg:text-3xl font-bold text-white">{title}</h5>
          <p className="mb-4 text-base lg:text-lg font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 text-base lg:text-lg font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-6 gap-4">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 lg:size-12 hover-animation"
                />
              ))}
            </div>
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium cursor-pointer hover-animation transition-colors duration-200"
            >
              View Project{" "}
              <img src={arrowUp} className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;