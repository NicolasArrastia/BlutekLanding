const PROJECTS: {
  title: string;
  description: string;
  tags: string[];
  image: string;
}[] = [
  {
    title: "Anto Plus",
    description:
      "Web desarrollada para una plataforma de aprendizaje en linea-",
    tags: ["React", "JavaScript", "Next.js", "Nest.js", "PostgreSQL"],
    image: "/Anato.png",
  },
  {
    title: "DrivexGo",
    description: "Web desarrollada para una plataforma de 'Car Sharing'.",
    tags: ["React", "JavaScript", "Next.js", "Nest.js", "PostgreSQL"],
    image: "/Drivex.png",
  },
  {
    title: "Delia Pilates",
    description:
      "Web desarrollada para poder agendar turnos para clases de pilates",
    tags: ["React", "TailwindCSS", "JavaScript"],
    image: "/Pilates.png",
  },
];

const PortfolioSection = () => {
  return (
    <section className="px-4 py-16 bg-[#f8f8f8] text-neutral-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Nuestros <span className="text-blue-600">Proyectos</span>
      </h2>

      <div className="flex justify-center gap-8 mb-10 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">15+</p>
          <p className="text-sm text-neutral-600">Proyectos finalizados</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">10+</p>
          <p className="text-sm text-neutral-600">Clientes satisfechos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project, index) => (
          <div key={index} className="relative group">

            <div className="absolute -inset-1.5 bg-blue-100 rounded-2xl z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

            <div className="relative bg-white rounded-2xl p-6 shadow-lg z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full"
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
