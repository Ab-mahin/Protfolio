import { motion } from "framer-motion";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      title: "Photo 1",
      description: "Beautiful landscape from my travels",
      url: "#"
    },
    {
      id: 2,
      title: "Photo 2",
      description: "City skyline at sunset",
      url: "#"
    },
    {
      id: 3,
      title: "Photo 3",
      description: "Mountain hiking adventure",
      url: "#"
    },
    {
      id: 4,
      title: "Photo 4",
      description: "Beach sunset view",
      url: "#"
    }
  ];

  return (
    <section id="gallery" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photos
          </h2>
          <p className="text-lg text-gray-300">
            Few pictures from my travels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-800/80 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-square bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                <span className="text-gray-400 text-sm">{photo.title}</span>
              </div>
              <h3 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors">
                {photo.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {photo.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="text-gray-400 hover:text-white transition-colors underline">
            See more
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
