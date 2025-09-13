import { motion } from "framer-motion";

const Writing = () => {
  const articles = [
    {
      title: "Building a Modern React Portfolio",
      date: "Dec 15, 2024",
      description: "A comprehensive guide to building a modern portfolio website with React, Framer Motion, and Tailwind CSS.",
      url: "#"
    },
    {
      title: "Understanding React Hooks Deep Dive",
      date: "Nov 28, 2024",
      description: "Exploring advanced React hooks patterns and best practices for building scalable applications.",
      url: "#"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      date: "Nov 10, 2024",
      description: "A practical comparison of CSS Grid and Flexbox with real-world examples and use cases.",
      url: "#"
    }
  ];

  return (
    <section id="writing" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Writing
          </h2>
          <p className="text-lg text-gray-300">
            Things I work on and learn about
          </p>
        </motion.div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/80 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <span className="text-gray-400 text-sm">{article.date}</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {article.description}
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
            Read more
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Writing;
