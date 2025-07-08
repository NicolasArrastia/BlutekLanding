const PROJECTS: {
  title: string;
  description: string;
  tags: string[];
  image: string;
}[] = [
  {
    title: "Proyecto A",
    description: "Descripción del Proyecto A",
    tags: ["React", "JavaScript", "CSS"],
    image: "https://via.placeholder.com/300x200?text=Proyecto+A",
  },
  {
    title: "Proyecto B",
    description: "Descripción del Proyecto B",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://via.placeholder.com/300x200?text=Proyecto+B",
  },
  {
    title: "Proyecto C",
    description: "Descripción del Proyecto C",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "https://via.placeholder.com/300x200?text=Proyecto+C",
  },
  {
    title: "Proyecto D",
    description: "Descripción del Proyecto D",
    tags: ["GraphQL", "Apollo", "React"],
    image: "https://via.placeholder.com/300x200?text=Proyecto+D",
  },
  {
    title: "Proyecto E",
    description: "Descripción del Proyecto E",
    tags: ["Vue.js", "Vuetify", "Firebase"],
    image: "https://via.placeholder.com/300x200?text=Proyecto+E",
  },
];

const PortfolioSection = () => {
  return (
    <section>
      <h2>
        Nuestros <span>Proyectos</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="border-2 rounded-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-neutral-100 text-neutral-800 text-sm px-2 py-1 rounded mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
